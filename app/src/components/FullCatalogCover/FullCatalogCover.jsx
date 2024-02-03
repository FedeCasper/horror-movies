import React from 'react'

const FullCatalogCover = ( {movie} ) => {

   console.log(movie);

   return (
      <div className="font-light">
         <a href='' className="text-red-700">
            <img 
               className="object-cover rounded shadow max-w-none h-40" 
               src={movie.cover}
               alt={movie.title} 
               title={movie.title} 
            />
         </a>
      </div>
   )
}

export default FullCatalogCover