import React, { useEffect, useState } from 'react'
import FullCatalogCover from '../../components/FullCatalogCover/FullCatalogCover'
import FullCatalogCoverContainer from '../../components/FullCatalogCoverContainer/FullCatalogCoverContainer'
import SectionHeader from '../../components/SectionHeader/SectionHeader'

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
    <section className='w-full'>

      <SectionHeader title="Full Catalog" />
      
      {
        Object.keys(arrayOfCategories).map( (category, index) => {


          return (
            <FullCatalogCoverContainer 
              key={index} 
              category={category} 
              arrayOfMovies={arrayOfCategories[`${category}`]} 
              />
          )
        })
      }



    </section >
  )
}

export default FullCatalogScreen