/**
 * Utilidad para servir imágenes a través del Worker
 * Esto evita problemas de CORS y 403 Forbidden
 */

const WORKER_URL = "http://127.0.0.1:8787";

export const getProxiedImageUrl = (originalImageUrl) => {
  if (!originalImageUrl) return './assets/no-image.png';
  
  try {
    // Codificar la URL original para pasarla como parámetro
    const encodedUrl = encodeURIComponent(originalImageUrl);
    return `${WORKER_URL}/image?url=${encodedUrl}`;
  } catch (error) {
    console.error("Error creating proxied image URL:", error);
    return './assets/no-image.png';
  }
};

export default getProxiedImageUrl;
