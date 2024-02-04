import { useState, useEffect } from 'react'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import MoviesSeriesCard from '../../components/CardMoviesSeries/CardMoviesSeries';

const SeriesScreen = () => {

  const [ data, setData ] = useState([])
  const [ arrayOfSeries, setArrayOfSeries ] = useState([])

  const url = "src/data/data.json"
  const getData = async () => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setData(data)
      })
      .catch(error => console.log(error))
  }

  const createMoviesArray = () => {
    let filteredSeries = data.filter(movie => movie.clasification === "serie")
    setArrayOfSeries(filteredSeries)
    console.log(arrayOfSeries);
  }

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    createMoviesArray()
  }, [data])

  return (
    <>
      <SectionHeader title="Movies" />
      <section class="inline-grid grid-cols-2 gap-2 pt-4 px-2 w-100 mx-0">

        {
          arrayOfSeries.map(serie => {
            return(
              <MoviesSeriesCard object={serie} />
            )
          })
        }
      
      </section >
    </>
  )
}

export default SeriesScreen