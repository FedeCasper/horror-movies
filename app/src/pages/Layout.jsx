import Navbar from '../components/Navbar/Navbar'
import { Routes, Route, Outlet } from 'react-router-dom'


const Layout = () => {
   return (
      <div className="relative flex flex-col w-full h-[100vh]">
         <Navbar />
         <main className="bg-neutral-800 grow flex flex-col items-center">
            <Outlet />
         </main>
         <footer className="bg-blue-300 p-4 h-[10vh]">footer</footer>
      </div>
   )
}

export default Layout