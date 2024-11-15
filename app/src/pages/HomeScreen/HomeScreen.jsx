import React from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import CardMoviesSeries from '../../components/CardMoviesSeries/CardMoviesSeries';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

function HomeScreen() {

    let mainData = useSelector((state) => state.search.allItems);
    let filteredData = useSelector((state) => state.search.filteredItems);
  
    let copyArray = [...mainData].sort(() => Math.random() - 0.5);
  
    const mainArray = useMemo(() => {
      return filteredData !== null ? filteredData : copyArray;
    }, [filteredData, mainData]);

    const navigate = useNavigate(); 

    return (
        <div>
            <SearchBar />

            {
                mainArray.slice( 0, 6 ).map( movie => {
                    return(
                        <CardMoviesSeries 
                            key={movie.id}
                            object={movie} 
                            onClick={ () => navigate(`/details/${movie.id}`) }
                            />
                    )
                })
            }
        </div>
    )
}

export default HomeScreen