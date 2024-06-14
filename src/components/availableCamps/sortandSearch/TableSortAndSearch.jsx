import {Link} from 'react-router-dom'

function TableSortAndSearch({handleSearch,handleSort}) {
  return (
    <div>
    <div className="flex items-center space-x-4 justify-center [&>*]:w-full">
  
    <div className="relative b">
    <input
        type="text"
        placeholder="Search..."
        onChange={handleSearch}
        className="px-4 py-2 border rounded-md shadow-sm focus:outline-none w-full focus:border-transparent"
      />
      {/* //search sugation */}
      {/* <ul className="absolute space-y-3 mt-2  z-40 bg-blue-100 rounded-lg">
      {
      searchResult.map(result => <li key={result._id} className="py-2 px-5"><Link to={`/campDetail/${result._id}`}>{result?.CampName}</Link></li>)
      }
      </ul> */}
      <div>

      </div>
    </div>
      <select
        onChange={handleSort}
        className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:border-transparent"
      >
        <option value="">Sort By</option>
        <option value="ParticipantCount">Most Registered</option>
        <option value="CampFees">Camp Fees</option>
        <option value="alphabetical">Alphabetical Order</option>
      </select>
    </div>
  </div>
  )
}

export default TableSortAndSearch
