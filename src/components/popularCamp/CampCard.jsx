import React from 'react'

function CampCard({popularCamp}) {
    const  {
        CampName,
        Image,
        CampFees,
        DateTime,
        Location,
        HealthcareProfessional,
        ParticipantCount,
    } = popularCamp || {};
  return (
    <div className="max-w-md mx-auto bg-blue-50 rounded-xl shadow-md overflow-hidden md:max-w-2xl opacity-90 cursor-pointer hover:scale-105 ease-linear duration-300 hover:opacity-100">
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
            <span className="text-gray-700 font-semibold">Healthcare Professional: </span>
            <span className="text-gray-500">{HealthcareProfessional}</span>
          </div>
          <div className="mt-2">
            <span className="text-gray-700 font-semibold">Participants: </span>
            <span className="text-gray-500">{ParticipantCount}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CampCard
