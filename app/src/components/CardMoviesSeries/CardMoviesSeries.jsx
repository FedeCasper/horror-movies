import StarHalfIcon from '@mui/icons-material/StarHalf';

const MoviesSeriesCard = ( { object } ) => {
   return (
      <>
         <div class="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div class="relative mx-4 mt-4 h-72 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
               <img
                  src={object.cover}
                  class="h-full w-full object-cover"
               />
            </div>
            <div class="p-6">
               <div class="mb-2 flex flex-col items-center justify-center">
                  <p class="block font-sans text-base text-center font-medium leading-relaxed text-red-700 antialiased">
                     {object.title}
                  </p>
               </div>
               <p class="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                  With plenty of talk and listen time, voice-activated Siri access, and an
                  available wireless charging case.
               </p>
               <span className='flex items-center gap-1'>
                  <StarHalfIcon sx={{ color: 'orange' }} />{object.web_calification}
               </span>
            </div>
            <div class="p-6 pt-0">
               <button
                  class="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
               >
                  Add to Cart
               </button>
            </div>
         </div>
      </>
   )
}

export default MoviesSeriesCard