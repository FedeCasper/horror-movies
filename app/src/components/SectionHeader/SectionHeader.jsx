
import SearchBar from '../SearchBar/SearchBar';


const SectionHeader = ( { title } ) => {


   return (
      <header
         className="w-full bg-neutral-800 pt-3 flex items-center justify-between sticky">
         <div className="w-full flex flex-col items-center">
            <div className="w-full flex flex-row align-items-center justify-around border-b border-b-red-700 pb-2">
               <div className="flex align-items-center">
                  <img src="/ghost2.png" alt="ghost" />
                  <h4 className="m-0 text-red-700 ps-2">{title}</h4>
               </div>
               <div className="text-white">Found xxx stories!</div>
            </div>
            <div className='flex flex-row justify-center items-center w-full bg-neutral-700 py-2 gap-2'>
               <SearchBar />
            </div>
         </div>
      </header>
   )
}

export default SectionHeader