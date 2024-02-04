import { useState } from 'react';
import { Link } from 'react-router-dom';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import HomeIcon from '@mui/icons-material/Home';
import './Navbar.css'

const Navbar = () => {
   const [menuOpen, setMenuOpen] = useState(false); 

   const toggleMenu = () => {
      setMenuOpen(!menuOpen);
   };

   return (
      <nav className="bg-indigo-800 p-4 flex flex-col justify-center items-center z-50 w-full fixed bottom-0 md:fixed md:bottom-auto md:z-50 ">
         {/* <div className="hidden sm:block text-white text-lg ">Casper Horror Site</div> */}

         <ul className={`flex flex-row gap-3 font-sans transition-all duration-300 ${menuOpen ? 'h-14' : 'h-2'}`}>
         <a href='#' className="text-white cursor-pointer"><HomeIcon fontSize='medium' /></a>
         <Link to="/" className="text-white cursor-pointer">All</Link>
         <Link to="/movies" className="text-white cursor-pointer">Movies</Link>
         <Link to="/series" className="text-white cursor-pointer">Series</Link>
         <Link to="/books" className="text-white cursor-pointer">Books</Link>
         <Link to="/shorts" className="text-white cursor-pointer">Shorts</Link>
         <Link to="/tops" className="text-white cursor-pointer">Tops</Link>
         <SavedSearchIcon fontSize='large' onClick={toggleMenu} className='cursor-pointer'/>
         
         </ul>
         <input type="search" name="" id="" className={` w-full border-2 border-indigo-950 bg-indigo-200 rounded p-2 transition-all duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0 w-0'} `} placeholder="Search" />
      </nav>
   );
};

export default Navbar;