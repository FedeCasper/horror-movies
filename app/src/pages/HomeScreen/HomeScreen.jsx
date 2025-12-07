import React from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import CardMoviesSeries from '../../components/CardMoviesSeries/CardMoviesSeries';
import FeaturedCardsContainer from '../../components/FeaturedCardsContainer/FeaturedCardsContainer';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { setInitialItems } from '../../store/actions/searchActions';


import s from './HomeScreen.module.css'
import FullCatalogCoverContainer from '../../components/FullCatalogCoverContainer/FullCatalogCoverContainer';

const PREAD_SHEET_ID = "1pdh1qYBuJ6eCf630sQqFEXrt0MprQRBC_5lT7X0qYj4";
const SHEET_NAME = "movies";
const SHEET_URL = `https://opensheet.elk.sh/${PREAD_SHEET_ID}/${SHEET_NAME}`;

// Usar Worker en desarrollo, Google Sheets en producción
const WORKER_URL = import.meta.env.DEV ? "http://127.0.0.1:8787" : SHEET_URL;

async function fetchMovies() {
   const res = await fetch(WORKER_URL);
   if (!res.ok) throw new Error("Error fetching Google Sheet");
   return res.json();
}

function HomeScreen() {

   const allItems = useSelector(state => state.search.allItems);
   const filteredItems = useSelector(state => state.search.filteredItems);

   // Si hay items filtrados, mostrarlos; si no, mostrar todos
   const itemsToDisplay = filteredItems ?? allItems;

   const dispatch = useDispatch();

   useEffect(() => {
      fetchMovies()
         .then(data => dispatch(setInitialItems(data)))
         .catch(err => console.error(err));
   }, []);

   console.log(itemsToDisplay)

   return (
      <div className=" relative w-[372px]">

         <div className=" p-3">

            <h2 className="text-2xl font-bold mb-3 text-center text-red-600">¿Qué peli buscás?</h2>
            <SearchBar />
         </div>

         {/* <FeaturedCardsContainer items={itemsToDisplay} /> */}
         <FullCatalogCoverContainer category={"Recientes"} arrayOfMovies={itemsToDisplay.slice(0, 5)} />

      </div>
   )
}

export default HomeScreen