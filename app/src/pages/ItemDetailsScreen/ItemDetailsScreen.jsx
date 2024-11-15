import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import data from "../../data/data.json"

function ItemDetailsScreen() {

    const {id} = useParams();
    console.log(id);

    const item = useSelector(state => 
        state.search.allItems.find(item => item.id === parseInt(id)) 
      );
    
    console.log(item);



    const getMovieUniverse = (movie) => {
        console.log(movie.universe)
        let movieUniverse = []
        if (movie.universe) {
            movieUniverse = data.filter(universe => universe.universe === movie.universe)
        }
        return movieUniverse
    }


    if (!item) return <p>Item no encontrado</p>;

    return (
        <div className='w-80'>
            <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
            <h3 className='text-sm text-neutral-400	'>{item.optional_title}</h3>
            <h3 className='text-sm text-neutral-400	'>{item.year}</h3> . 
            <img src={item.cover} alt={item.title} />
            <p>{item.description}</p>
            <p className='text-xs font-thin'>Clasificación: {item.sinopsis}</p>
            <p className='text-xs font-thin'>Director {item.director? item.director : ""}</p>
            {
                item.universe && <p className='text-xs font-thin'>Universe: {item.universe}</p>
            }
            {
                item.universe && getMovieUniverse(item).map(item => {
                    return (
                        <div>
                            <p className='text-xs font-thin'>{item.title}</p>
                            <img className='w-40' src={item.cover} alt={item.title} />
                        </div>
                    )
                })
            }

        </div>
     )
}

export default ItemDetailsScreen