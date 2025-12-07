/**
 * Utilidad para servir imágenes a través del Worker
 * Esto evita problemas de CORS y 403 Forbidden
 */

// En desarrollo usa el Worker local, en producción usa directamente la URL (sin proxy)
const WORKER_URL = import.meta.env.DEV ? "http://127.0.0.1:8787" : null;

export const getProxiedImageUrl = (originalImageUrl) => {
  if (!originalImageUrl) return './assets/no-image.png';
  
  try {
    // En desarrollo, usar proxy del Worker; en producción, usar URL directa
    if (WORKER_URL) {
      const encodedUrl = encodeURIComponent(originalImageUrl);
      return `${WORKER_URL}/image?url=${encodedUrl}`;
    }
    // En producción, devolver la URL original (las imágenes se cargarán directamente)
    return originalImageUrl;
  } catch (error) {
    console.error("Error creating proxied image URL:", error);
    return './assets/no-image.png';
  }
};

export default getProxiedImageUrl;
