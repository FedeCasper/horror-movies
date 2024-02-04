import { useState, useEffect } from 'react'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import MoviesSeriesCard from '../../components/CardMoviesSeries/CardMoviesSeries';

const MoviesScreen = () => {

  const [ data, setData ] = useState([])
  const [ arrayOfMovies, setarrayOfMovies ] = useState([])

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
    let filteredMovies = data.filter(movie => movie.clasification === "movie")
    setarrayOfMovies(filteredMovies)
    console.log(arrayOfMovies);
  }

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    createMoviesArray()
  }, [data])

  return (
    <section>
      <SectionHeader title="Movies" />
      <div className=" w-full inline-grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 pt-4 px-2  mx-0">

        {
          arrayOfMovies.map(movie => {
            return(
              <MoviesSeriesCard object={movie} />
            )
          })
        }
      
      </div >
    </section>
  )
}

export default MoviesScreen