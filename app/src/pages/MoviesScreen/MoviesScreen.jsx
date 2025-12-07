import SectionHeader from '../../components/SectionHeader/SectionHeader'
import CardMoviesSeries from '../../components/CardMoviesSeries/CardMoviesSeries';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleCardClick } from '../../utils/screenUtils';

const MoviesScreen = () => {

  let mainData = useSelector((state) => state.search.allItems.filter(item => item.clasification === "movie"));
  let filteredData = useSelector((state) => state.search.filteredItems);

  const mainArray = useMemo(() => {
    return filteredData !== null ? filteredData : mainData;
  }, [filteredData, mainData]);

  const navigate = useNavigate(); 

  return (
    <section>
      <SectionHeader title="Movies" />
      <div className=" w-full inline-grid grid-col-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 pt-4 px-8  mx-0">

        {
          mainArray.map( movie => {
            return(
              <CardMoviesSeries 
                key={movie.id}
                object={movie} 
                onClick={ () => navigate(`/details/${movie.id}`) }
                />
            )
          })
        }
      
      </div >
    </section>
  )
}

export default MoviesScreen