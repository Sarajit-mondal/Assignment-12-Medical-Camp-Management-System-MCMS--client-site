
import { useState } from 'react';
import './Pagination.css'
import { FaArrowRight,FaArrowLeft } from "react-icons/fa";
function Pagination({totalData,showPerPage,setShowPerPage,currentPage,setCurrentPage}) {
  const page = Math.ceil(totalData / showPerPage)
  const perPage = [...Array(page).keys()]
  return (
    <div className='allbutton'>
       <div className='flex w-full justify-between px-5'>
        <button disabled={currentPage === 1 }  onClick={()=>setCurrentPage(currentPage -1)} 
        className={`${currentPage !== 1 && "text-blue-700 bg-blue-300 " }`}><FaArrowLeft/></button>
        <div className='flex gap-2'>
            {
                perPage.map((page,inx) => <button className={`${currentPage === inx+1 && "bg-blue-300"}`} onClick={()=> setCurrentPage(inx+1)} key={inx}>{inx+1}</button>)
            }
        </div>
        <div className='flex'>
            <select className='mr-5' onChange={(e)=> setShowPerPage(e.target.value)}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
            </select>
            <button disabled={currentPage === perPage.length }  onClick={()=>setCurrentPage(currentPage + 1)} 
        className={`${currentPage !== perPage.length && "text-blue-700 bg-blue-300 " }`}><FaArrowRight/></button>
        </div>
       </div>
    </div>
  )
}

export default Pagination
