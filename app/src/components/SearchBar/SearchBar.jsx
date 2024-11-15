import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../../store/actions/searchActions';
import { useLocation } from "react-router-dom";

function SearchBar() {

    const location = useLocation();
    const currentPath = (location.pathname).slice(1);
 
    const dispatch = useDispatch();
 
    const handleSearch = (event) => {
       dispatch(setSearchQuery({ query: event.target.value, screen: currentPath }));
     };

  return (
    <>
      <SearchIcon />
      <input 
        type="search"
        name="search"
        id="" 
        placeholder="Search"
        onChange={handleSearch}
        className="w-72 bg-neutral-400 rounded py-1 px-2 border border-neutral-500 focus:outline-none  focus:border-red-500" 
        />
    </>
  )
}

export default SearchBar