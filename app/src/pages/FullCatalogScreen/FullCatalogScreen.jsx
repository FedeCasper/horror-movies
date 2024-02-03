import React, { useEffect, useState } from 'react'
import FullCatalogCover from '../../components/FullCatalogCover/FullCatalogCover'
import FullCatalogCoverContainer from '../../components/FullCatalogCoverContainer/FullCatalogCoverContainer'

const FullCatalogScreen = () => {

  const [ data, setData ] = useState([])
  const [ arrayOfCategories, setArrayOfCategories ] = useState({})

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

  const createCategoryArray = () => {
    let arrayWithCategoryNone = data.map( movie => movie.gender ? movie.gender : movie.gender = "none")
    let categoriesNoRepeat = [...new Set(arrayWithCategoryNone)]
    let auxiliarArray = categoriesNoRepeat.map( category => data.filter(movie => movie.gender == category && (movie.clasification === "movie" || movie.clasification === "serie")))
    let arrayOfCategories = auxiliarArray.reduce( (acc, actual) => {
        acc[actual[0].gender] = actual;
        return acc
    }, {})
    
    setArrayOfCategories(arrayOfCategories)

    console.log(arrayOfCategories);
    return arrayOfCategories
  }

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    createCategoryArray()
  }, [data])

  return (
    <section>

      <header
        className="w-full bg-neutral-800 border-b-2 border-b-red-700 p-3 flex items-center justify-between sticky">
        <div className="flex items-center">
          <img src="src/assets/ghost2.png" alt="skull" />
          <h4 className="m-0 text-red-700 ps-2">Complete Catalog</h4>
        </div>
        <div className="text-white">Found xxx stories!</div>
      </header>
      
      {
        Object.keys(arrayOfCategories).map( (category, index) => {
          return (
            <FullCatalogCoverContainer key={index} category={category}>
              {
                arrayOfCategories[category].map( (movie, index) => {
                  return (
                    <FullCatalogCover key={index} movie={movie} />
                  )
                })
              }
            </FullCatalogCoverContainer>
          )
        })
      }



    </section >
  )
}

export default FullCatalogScreen