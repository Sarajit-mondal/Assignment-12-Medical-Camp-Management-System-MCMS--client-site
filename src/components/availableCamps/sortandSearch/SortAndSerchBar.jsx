import { Link } from "react-router-dom";


const SortAndSerchBar = ({layoutColumns,setLayoutColumns,handleSearch,handleSort,searchResult}) => {
 console.log("aaaa",searchResult)

  return (
    <div className="p-6 bg-blue-100 my-10">
      <div className="flex items-center space-x-4 mb-4 justify-center [&>*]:w-full">
      <div className="relative b">
      <input
          type="text"
          placeholder="Search..."
          onChange={handleSearch}
          className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full focus:border-transparent"
        />
        {/* //search sugation */}
        <ul className="absolute space-y-3 mt-2  z-40 bg-blue-100 rounded-lg">
        {
        searchResult.map(result => <li key={result._id} className="py-2 px-5"><Link to={`/campDetail/${result._id}`}>{result?.CampName}</Link></li>)
        }
        </ul>
        <div>

        </div>
      </div>
        <select
          onChange={handleSort}
          className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Sort By</option>
          <option value="ParticipantCount">Most Registered</option>
          <option value="CampFees">Camp Fees</option>
          <option value="alphabetical">Alphabetical Order</option>
        </select>
        {/* layoutbutton */}
        <button onClick={()=>setLayoutColumns(!layoutColumns)} className="hidden md:block px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 active:bg-blue-400 focus:ring-blue-500 focus:ring-opacity-50">
          {
            layoutColumns ? "Column 2": "Column 3"
          }
        </button>
      </div>
    </div>
  );
};

export default SortAndSerchBar
