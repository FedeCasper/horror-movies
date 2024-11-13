import React from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import CardMoviesSeries from '../../components/CardMoviesSeries/CardMoviesSeries';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';

function HomeScreen() {

    let mainData = useSelector((state) => state.search.allItems);
    console.log(mainData);
    let filteredData = useSelector((state) => state.search.filteredItems);
    console.log(filteredData);
  
    let copyArray = [...mainData].sort(() => Math.random() - 0.5);
  
    const mainArray = useMemo(() => {
      return filteredData !== null ? filteredData : copyArray;
    }, [filteredData, mainData]);

    console.log(mainArray);

    return (
        <div>
            <SearchBar />

            {
                mainArray.slice( 0, 6 ).map( movie => {
                    return(
                        <CardMoviesSeries 
                            key={movie.id}
                            object={movie} 
                            />
                    )
                })
            }
        </div>
    )
}

export default HomeScreen