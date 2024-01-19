import Navbar from '../components/Navbar/Navbar'
import { Routes, Route, Outlet } from 'react-router-dom'


const Layout = () => {
   return (
      <div className="flex flex-col w-full h-[100vh]">
         <header className="bg-red-100-800 p-4">
            <Navbar />
         </header>
         <main className="bg-stone-200 p-4 grow">
            <Outlet />
         </main>
         <footer className="bg-blue-300 p-4 h-[10vh]">footer</footer>
      </div>
   )
}

export default Layout