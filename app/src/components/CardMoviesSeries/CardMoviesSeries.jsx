import StarHalfIcon from '@mui/icons-material/StarHalf';


const CardMoviesSeries = ( { object, onClick } ) => {
   return (
      <>
         <div
            onClick={onClick}
            className="relative flex flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
            >
            <div className="w-14 relative overflow-hidden bg-white bg-clip-border text-gray-700">
               <img
                  src={object.cover? object.cover : './assets/no-image.png' }
                  className="h-full w-full object-cover rounded"
               />
            </div>
            <div className="p-2 w-full flex flex-col ">
                  <p className="block font-sans text-sm font-semibold leading-relaxed text-red-700 antialiased">
                     {object.title}
                  </p>
               <div className='flex flex-row gap-2 justify-between'>
                  {
                     object.gender? <p className="block font-sans text-sm leading-relaxed text-gray-500 antialiased">{object.gender?.charAt(0).toUpperCase() + object.gender?.slice(1)}</p> : ""
                  }
                  {
                     object.year? <p className="block font-sans text-sm leading-relaxed text-gray-500 antialiased">({object.year})</p> : ""
                  }
                  <span className='flex items-center gap-1 text-sm'>
                     <StarHalfIcon sx={{ color: 'orange' }}/>{object.web_calification}
                  </span>
               </div>

            </div>
         </div>
      </>
   )
}

export default CardMoviesSeries