

const SortAndSerchBar = ({layoutColumns,setLayoutColumns,handleSearch,handleSort}) => {
 

  return (
    <div className="p-6 bg-blue-100 my-10">
      <div className="flex items-center space-x-4 mb-4 justify-center [&>*]:w-full">
        <input
          type="text"
          placeholder="Search..."
          onChange={handleSearch}
          className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
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
