import React from 'react'
import { useNavigate } from 'react-router-dom'
import FullCatalogCover from '../FullCatalogCover/FullCatalogCover'
import CardMoviesSeries from '../CardMoviesSeries/CardMoviesSeries'

const FullCatalogCoverContainer = ({ category, arrayOfMovies }) => {
const navigate = useNavigate()

const handleMovieClick = async (movie) => {
  try {
    const response = await fetch(
      `https://api.imdbapi.dev/search/titles?query=${encodeURIComponent(movie.title)}`,
      {
        headers: {
          accept: "application/json",
        },
      }
    );

    const data = await response.json();

    // Acá navegás y le pasás la data obtenida
    navigate(`/details/${movie.id}`, { state: { movieData: data } });
  } catch (err) {
    console.error("Error calling IMDB API:", err);
  }
};


   return (
      <>
         <div className="w-full flex flex-col pt-4 px-2">
            <h4 className="text-white mb-3">
               <span className="font-bold text-red-700 me-2">
                  |
               </span>
               {category}
            </h4>
            <div className="flex overflow-x-auto gap-3 mb-4 w-full border-2 border-red-500">
               {
                  arrayOfMovies.map((movie) => {
                     return (
                        <CardMoviesSeries
                           key={movie.id}
                           object={movie}
                           onClick={() => handleMovieClick(movie)}
                        />
                     )
                  })
               }
            </div>
         </div>
      </>
   )
}

export default FullCatalogCoverContainer