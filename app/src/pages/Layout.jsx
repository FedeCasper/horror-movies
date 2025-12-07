import Navbar from '../components/Navbar/Navbar'
import { Routes, Route, Outlet } from 'react-router-dom'


const Layout = () => {
   return (
      <div className="relative flex flex-col w-[372px] md:w-[640px]  h-[100vh] my-0 mx-auto">
         <Navbar />
         <main className="border-4 border-indigo-500 bg-neutral-800 grow flex flex-col items-center md:pt-20 pb-20">
            <Outlet />
         </main>
         <footer className="bg-blue-300 p-4 h-[10vh]">footer</footer>
      </div>
   )
}

export default Layout