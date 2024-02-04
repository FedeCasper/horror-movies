import React from 'react'

const SectionHeader = ( { title } ) => {
   return (
      <header
         className="w-full bg-neutral-800 border-b-2 border-b-red-700 p-3 flex items-center justify-between sticky">
         <div className="flex items-center">
            <img src="src/assets/ghost2.png" alt="skull" />
            <h4 className="m-0 text-red-700 ps-2">{title}</h4>
         </div>
         <div className="text-white">Found xxx stories!</div>
      </header>
   )
}

export default SectionHeader