import { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import './Navbar.css'

const Navbar = () => {
   const [menuOpen, setMenuOpen] = useState(false);

   const toggleMenu = () => {
      setMenuOpen(!menuOpen);
   };

   return (
      <nav className="
      bg-indigo-800
       p-4 
       flex flex-col justify-center items-center
      z-50 
      fixed
      bottom-0
      md:top-0 md:bottom-auto
      w-[372px] md:w-[640px]
       md:z-50 ">
         {/* <div className="hidden sm:block text-white text-lg ">Casper Horror Site</div> */}

         <ul className={`flex flex-row gap-2 font-sans transition-all duration-300`}>
            <Link to="/" className="text-white cursor-pointer"><HomeIcon fontSize='medium' /></Link>
            {/* <Link to="/fullCatalog" className="text-white cursor-pointer">All</Link> */}
            <Link to="/movie" className="text-white cursor-pointer">Movies</Link>
            <Link to="/serie" className="text-white cursor-pointer">Series</Link>
            <Link to="/book" className="text-white cursor-pointer">Books</Link>
            <Link to="/short" className="text-white cursor-pointer">Shorts</Link>
            <Link to="/top" className="text-white cursor-pointer">Tops</Link>
         </ul>
      </nav>
   );
};

export default Navbar;