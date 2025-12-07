import React from 'react'
import { useNavigate } from 'react-router-dom'
import CardMoviesSeries from '../CardMoviesSeries/CardMoviesSeries'

const FeaturedCardsContainer = ({ items }) => {
   const navigate = useNavigate()

   // Mostrar máximo 6 items
   const featuredItems = items?.slice(0, 5) || []

   return (
      <div className="p-4">
         <h3 className="text-xl font-semibold mb-4 text-white">Destacados</h3>
         <div className="flex gap-4">
            {featuredItems.map(item => (
               <CardMoviesSeries
                  key={item.id}
                  object={item}
                  onClick={() => navigate(`/details/${item.id}`)}
               />
            ))}
         </div>
      </div>
   )
}

export default FeaturedCardsContainer
