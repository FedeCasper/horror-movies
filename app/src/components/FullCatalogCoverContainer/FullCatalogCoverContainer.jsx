import React from 'react'
import FullCatalogCover from '../FullCatalogCover/FullCatalogCover'

const FullCatalogCoverContainer = ( {category, arrayOfMovies} ) => {

   return (

      <section className="flex flex-row content-center pt-4 px-2 w-full mx-0">

         <div className="flex flex-col gap-2 w-full">
            <div className="w-full flex flex-col">
               <h4 className="text-white mb-3"><span
                  className="font-bold text-red-700 me-2">|</span>{category}</h4>
               <div className="flex overflow-x-auto gap-3 mb-4 w-full border-2 border-red-500">
                  {
                     arrayOfMovies.map( (movie) => {
                        return (
                           <FullCatalogCover key={movie.id} movie={movie} />
                        )
                     })
                  }
               </div>
            </div>
         </div>

      </section>
   )
}

export default FullCatalogCoverContainer