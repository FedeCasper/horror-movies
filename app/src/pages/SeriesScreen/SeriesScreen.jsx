import SectionHeader from '../../components/SectionHeader/SectionHeader'
import CardMoviesSeries from '../../components/CardMoviesSeries/CardMoviesSeries';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';  


const SeriesScreen = () => {

  let mainData = useSelector((state) => state.search.allItems.filter(item => item.clasification === "serie"));
  let filteredData = useSelector((state) => state.search.filteredItems);

  const mainArray = useMemo(() => {
    return filteredData !== null ? filteredData : mainData;
  }, [filteredData, mainData]);

  return (
    <>
      <SectionHeader title="Movies" />
      <section className="inline-grid grid-cols-1 gap-2 pt-4 px-2 w-100 mx-0">
        {
          mainArray.map( serie => {
            return(
              <CardMoviesSeries 
                key={serie.id}
                object={serie} 
                />
            )
          })
        }
      </section >
    </>
  )
}

export default SeriesScreen