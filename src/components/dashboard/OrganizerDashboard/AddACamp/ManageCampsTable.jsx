import Pagination from "../../../Pagination/Pagination";
import TableSortAndSearch from "../../../availableCamps/sortandSearch/TableSortAndSearch";

const ManageCampsTable = ({ camps, handleEdit, handleDelete,totalData,showPerPage,setShowPerPage,currentPage,setCurrentPage,handleSearch,handleSort }) => {

  return (
    <div className="overflow-x-auto md:overflow-hidden">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50 hidden md:table-header-group">
        {/* Sort and search row */}
        <tr className="border-transparent">
          <td colSpan="3"></td>
          <td colSpan="2" className="px-2">
            <TableSortAndSearch handleSearch={handleSearch} handleSort={handleSort} />
          </td>
        </tr>
        {/* Header row */}
        <tr className="text-left font-bold">
          <th className="px-4 py-2 text-xs md:text-sm text-gray-600 uppercase tracking-wider">Camp Name</th>
          <th className="px-4 py-2 text-xs md:text-sm text-gray-600 uppercase tracking-wider">Date & Time</th>
          <th className="px-4 py-2 text-xs md:text-sm text-gray-600 uppercase tracking-wider">Location</th>
          <th className="px-4 py-2 text-xs md:text-sm text-gray-600 uppercase tracking-wider">Healthcare Professional</th>
          <th className="px-4 py-2 text-center text-xs md:text-sm text-gray-600 uppercase tracking-wider">Actions</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {camps &&
          camps.map((camp) => (
            <tr key={camp._id} className="md:table-row flex flex-col md:flex-row mb-4 md:mb-0">
              <td className="px-4 py-2 text-xs md:text-sm text-gray-600 flex md:table-cell">
                <span className="font-semibold md:hidden">Camp Name:</span> {camp.CampName}
              </td>
              <td className="px-4 py-2 text-xs md:text-sm text-gray-600 flex md:table-cell">
                <span className="font-semibold md:hidden">Date & Time:</span> {camp.DateTime}
              </td>
              <td className="px-4 py-2 text-xs md:text-sm text-gray-600 flex md:table-cell">
                <span className="font-semibold md:hidden">Location:</span> {camp.Location}
              </td>
              <td className="px-4 py-2 text-xs md:text-sm text-gray-600 flex md:table-cell">
                <span className="font-semibold md:hidden">Healthcare Professional:</span> {camp.HealthcareProfessional}
              </td>
              <td className="px-4 py-2 text-center text-xs md:text-sm text-gray-600 flex md:table-cell mx-auto mt-1">
                <button
                  onClick={() => handleEdit(camp)}
                  className="text-blue-600 hover:text-blue-900 mr-4 active:scale-95 ease-in-out duration-200"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(camp._id)}
                  className="text-red-600 hover:text-red-900 active:scale-95 ease-in-out duration-200"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
      </tbody>
      <tfoot>
        <tr>
          <td className="w-full p-2" colSpan="5">
            <Pagination
              totalData={totalData}
              showPerPage={showPerPage}
              setShowPerPage={setShowPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
  
  );
};

export default ManageCampsTable;
