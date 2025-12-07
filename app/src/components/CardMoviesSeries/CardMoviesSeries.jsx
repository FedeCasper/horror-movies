import StarHalfIcon from '@mui/icons-material/StarHalf';
import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded';
import { useState } from 'react';
import { getProxiedImageUrl } from '../../utils/imageProxy';


const CardMoviesSeries = ({ object, onClick }) => {
   const [imageError, setImageError] = useState(false);

   const handleImageError = () => {
      setImageError(true);
   };

   // Usar el proxy del Worker si la imagen tiene URL
   const imageUrl = !imageError && object.cover
      ? getProxiedImageUrl(object.cover)
      : './assets/no-image.png';

   return (
      <>
         <div
            onClick={onClick}
            className="relative flex flex-col rounded-xl bg-stone-900 bg-clip-border text-gray-700 shadow-md w-32"
         >
            <div className="w-32 relative rounded-t-lg  overflow-hidden bg-white bg-clip-border text-gray-700">
               <img
                  src={imageUrl}
                  onError={handleImageError}
                  className="h-full w-full object-cover rounded-t-lg"
                  alt={object.title}
               />
            </div>
            <div className="p-2 w-full flex flex-col ">
               <span className='flex items-center gap-1 text-xs pb-2 text-yellow-600'>
                  <StarHalfIcon sx={{ color: 'orange' }} fontSize='small' />{object.web_calification}
               </span>
               <p className="block font-sans text-base/6 font-semibold  text-neutral-100 antialiased">
                  {object.title}
               </p>
               <p className="block font-sans text-xs leading-relaxed text-gray-400 antialiased italic pt-1">
                  {object.optional_title}
               </p>
               <div className='flex flex-col gap-2 justify-between pt-2'>
                  {
                     object.year ? <p className="block font-sans text-xs leading-relaxed text-gray-500 antialiased">({object.year})</p> : ""
                  }
                  {
                     object.gender ? <span className='flex items-center gap-1 text-xs'>
                        <LocalOfferRoundedIcon sx={{ color: 'purple' }} fontSize='small' />
                        <p className="block font-sans text-xs leading-relaxed text-gray-500 antialiased">
                           {object.gender?.charAt(0).toUpperCase() + object.gender?.slice(1)}</p>
                     </span> : ""
                  }


               </div>

            </div>
         </div>
      </>
   )
}

export default CardMoviesSeries