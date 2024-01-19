import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
   const [menuOpen, setMenuOpen] = useState(false); 

   const toggleMenu = () => {
      setMenuOpen(!menuOpen);
   };

   return (
      <nav className="bg-gray-800 p-4 flex justify-between items-center">
         <div className="text-white text-lg font-bold">Mi Sitio</div>
         <div
         className={`cursor-pointer md:hidden text-white`}
         onClick={toggleMenu}
         >
         <div
            className={`w-6 h-1 bg-white transition duration-300 ${
               menuOpen ? 'transform rotate-45 translate-y-1.5' : ''
            }`}
         ></div>
         <div
            className={`w-6 h-1 bg-white my-1 transition duration-300 ${
               menuOpen ? 'opacity-0' : ''
            }`}
         ></div>
         <div
            className={`w-6 h-1 bg-white transition duration-300 ${
               menuOpen ? 'transform -rotate-45 -translate-y-1.5' : ''
            }`}
         ></div>
         </div>
         <ul
         className={`md:flex flex-col md:flex-row md:items-center md:space-x-4 mt-4 md:mt-0 ${
            menuOpen ? 'flex' : 'hidden'
         }`}
         >
         <a href='#' className="text-white cursor-pointer">Inicio</a>
         <Link to="/" className="text-white cursor-pointer">Complete Cataglog</Link>
         <Link to="/movies" className="text-white cursor-pointer">Movies</Link>
         <Link to="/series" className="text-white cursor-pointer">Series</Link>
         <Link to="/books" className="text-white cursor-pointer">Books</Link>
         <Link to="/shorts" className="text-white cursor-pointer">Shorts</Link>
         <Link to="/tops" className="text-white cursor-pointer">Tops</Link>
         </ul>
      </nav>
   );
};

export default Navbar;