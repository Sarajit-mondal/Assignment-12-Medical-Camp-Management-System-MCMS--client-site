import React from 'react'
import { Link } from 'react-router-dom';

function CampCard({popularCamp}) {
    const  {
        _id,
        CampName,
        Image,
        CampFees,
        DateTime,
        Location,
        HealthcareProfessional,
        ParticipantCount,
    } = popularCamp || {};
  return (
   <Link to={`/campDetail/${_id}`}>
     <div className=" mx-auto bg-blue-50 rounded-xl shadow-md overflow-hidden  opacity-90 cursor-pointer hover:scale-105 ease-linear duration-300 hover:opacity-100 -h-96 text-nowrap">
      <div>
        <div className="md:flex-shrink-0 ">
          <img className="h-60 w-full object-cover:" src={Image} alt={CampName} />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{CampName}</div>
          <p className="block mt-1 text-lg leading-tight font-medium text-black">{Location}</p>
          <p className="mt-2 text-gray-500">{DateTime}</p>
          <div className="mt-4">
            <span className="text-gray-700 font-semibold">Fees: </span>
            <span className="text-gray-500">{CampFees}</span>
          </div>
          <div className="mt-2">
            <span className="text-gray-700 font-semibold">Healthcare : </span>
            <span className="text-gray-500">{
            HealthcareProfessional.length < 16 ? HealthcareProfessional :
            HealthcareProfessional.slice(0,40)+"..."}</span>
          </div>
          <div className="mt-2">
            <span className="text-gray-700 font-semibold">Participants: </span>
            <span className="text-gray-500">{ParticipantCount}</span>
          </div>
        </div>
      </div>
    </div>
   </Link>
  )
}

export default CampCard
