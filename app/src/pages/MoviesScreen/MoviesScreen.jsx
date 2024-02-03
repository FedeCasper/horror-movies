import React from 'react'
import { useState, useEffect } from 'react'

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
    <section class="row justify-content-center pt-4 px-2 w-100 mx-0">

      <div>
      <a 
      // href=`./details.html?id=${movie.id}`
      class="movie.details ? 'cardHover' : ''" target="_blank"
      >
      <div class="border-2 border-red-400 h-100 pt-1">
        <img 
        src="movie.cover ? movie.cover : './assets/no-image.png' " 
        class="card-img-top cover p-1 object-fit-cover" 
        alt="movie.title" 
        />
        <div class="border-2 border-red-200 px-3 py-2">
          <h6 class="card-title">Titulo</h6>
          <p class="fw-lighter fst-italic m-0 small"> Genero</p>
        </div>
        <div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item d-flex justify-content-between px-3 py-2">
              <span class="d-flex align-items-center">Año</span>
              <span class="d-flex align-items-center">
                <span class=" text-danger fw-bold pe-1">
                  clasification
                </span>
                / 10
              </span>
            </li>
          </ul>
          <div class="card-footer py-1">
            <p class="card-text text-small fst-italic recent">actualzada</p>
          </div>
        </div>
      </div>
    </a>
    </div >

    {
      arrayOfMovies.map(movie => {
        return(
          <>
            <div class="relative flex w-64 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div class="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                <img
                  src={movie.cover}
                  class="h-full w-full object-cover"
                />
              </div>
              <div class="p-6">
                <div class="mb-2 flex items-center justify-center">
                  <p class="block font-sans text-base text-center font-medium leading-relaxed text-red-700 antialiased">
                    {movie.title}
                  </p>
                </div>
                <p class="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                  With plenty of talk and listen time, voice-activated Siri access, and an
                  available wireless charging case.
                </p>
              </div>
              <div class="p-6 pt-0">
                <button
                  class="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  Add to Cart
                </button>
              </div>
            </div>
</>
        )
      })
    }


    
</section >
  )
}

export default MoviesScreen