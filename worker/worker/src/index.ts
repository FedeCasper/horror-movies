/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

const PREAD_SHEET_ID = "1pdh1qYBuJ6eCf630sQqFEXrt0MprQRBC_5lT7X0qYj4";
const SHEET_NAME = "movies";
const SHEET_URL = `https://opensheet.elk.sh/${PREAD_SHEET_ID}/${SHEET_NAME}`;

async function fetchMoviesFromSheet() {
  try {
    const response = await fetch(SHEET_URL);
    if (!response.ok) {
      throw new Error(`Error fetching Google Sheet: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching movies from Google Sheet:", error);
    return [];
  }
}

async function proxyImage(imageUrl: string) {
  try {
    const response = await fetch(imageUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
    });

    if (!response.ok) {
      throw new Error(`Image fetch failed: ${response.status}`);
    }

    const contentType = response.headers.get("content-type") || "image/jpeg";
    const buffer = await response.arrayBuffer();

    return new Response(buffer, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "public, max-age=86400",
      },
    });
  } catch (error) {
    console.error("Image proxy error:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch image" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
}

export default {
  async fetch(request: Request) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    // Ruta para proxy de imágenes: /image?url=<encoded-url>
    if (pathname === "/image" || pathname === "/image/") {
      const imageUrl = url.searchParams.get("url");
      if (!imageUrl) {
        return new Response(JSON.stringify({ error: "Missing 'url' parameter" }), {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        });
      }
      try {
        return await proxyImage(decodeURIComponent(imageUrl));
      } catch (error) {
        return new Response(JSON.stringify({ error: "Invalid URL" }), {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        });
      }
    }

    // Ruta por defecto: obtener películas
    try {
      const allMovies = await fetchMoviesFromSheet() as any[];
      const search = url.searchParams.get("q");

      const filtered = search
        ? allMovies.filter((movie: any) => 
            movie.title?.toLowerCase().includes(search.toLowerCase()) ||
            movie.optional_title?.toLowerCase().includes(search.toLowerCase())
          )
        : allMovies;

      return new Response(JSON.stringify(filtered), {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
    } catch (error) {
      console.error("Worker error:", error);
      return new Response(JSON.stringify({ error: "Internal server error" }), {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
    }
  },
};