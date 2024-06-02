import React from 'react'

function ButtonTwo({buttonText}) {
  return (
    <div className='text-center'>
       <button class="bg-blue-500 
       border-2 text-white font-bold py-2 px-4 rounded-2xl uppercase 
       active:scale-105 ease-linear duration-200 transition-all">
    {buttonText}
  </button>
    </div>
  )
}

export default ButtonTwo
