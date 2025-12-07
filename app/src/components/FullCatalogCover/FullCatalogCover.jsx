import React, { useState } from 'react'
import { getProxiedImageUrl } from '../../utils/imageProxy'

const FullCatalogCover = ( {movie} ) => {
   const [imageError, setImageError] = useState(false)

   const imageUrl = !imageError && movie.cover 
      ? getProxiedImageUrl(movie.cover)
      : './assets/no-image.png'

   const handleImageError = () => {
      setImageError(true)
   }

   return (
      <div className="font-light">
         <a href='' className="text-red-700">
            <img 
               className="object-cover rounded shadow max-w-none h-40" 
               src={imageUrl}
               onError={handleImageError}
               alt={movie.title} 
               title={movie.title} 
            />
         </a>
      </div>
   )
}

export default FullCatalogCover