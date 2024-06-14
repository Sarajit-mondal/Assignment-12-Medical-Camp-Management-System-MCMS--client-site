import Pagination from "../../../Pagination/Pagination";
import TableSortAndSearch from "../../../availableCamps/sortandSearch/TableSortAndSearch";

const ManageCampsTable = ({ camps, handleEdit, handleDelete,totalData,showPerPage,setShowPerPage,currentPage,setCurrentPage,handleSearch,handleSort }) => {

  return (
      <div className="overflow-x-scroll md:overflow-auto">
          <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                {/* sort and search files */}
                <tr className="border-transparent">
                <td colSpan="3"></td>
                
                 <td colSpan="2" className="px-2">
                 <TableSortAndSearch handleSearch ={handleSearch} handleSort ={handleSort} ></TableSortAndSearch>
                 </td>
                </tr>
                {/* sort and search files */}
                  <tr className="text-left font-bold">
                      <th className="md:px-6 md:py-3 text-xs md:text-sm text-gray-600 uppercase tracking-wider">
                          Camp Name
                      </th>
                      <th className="md:px-6 md:py-3 text-xs md:text-sm text-gray-600 uppercase tracking-wider">
                          Date & Time
                      </th>
                      <th className="md:px-6 md:py-3 text-xs md:text-sm text-gray-600 uppercase tracking-wider">
                          Location
                      </th>
                      <th className="md:px-6 md:py-3 text-xs md:text-sm text-gray-600 uppercase tracking-wider">
                          Healthcare Professional
                      </th>
                      <th className="md:px-6 md:py-3 text-center text-xs md:text-sm text-gray-600 uppercase tracking-wider">
                          Actions
                      </th>
                  </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 text-left">
                  {camps &&
                      camps.map((camp) => (
                          <tr key={camp._id} className="text-left">
                              <td className="md:px-6 md:py-3 whitespace-nowrap text-xs md:text-sm text-gray-600">
                                  {camp.CampName}
                              </td>
                              <td className="md:px-6 md:py-3 whitespace-nowrap text-xs md:text-sm text-gray-600">
                                  {camp.DateTime}
                              </td>
                              <td className="md:px-6 md:py-3 whitespace-nowrap text-xs smd:text-sm text-gray-600">
                                  {camp.Location}
                              </td>
                              <td className="md:px-6 md:py-3 whitespace-nowrap text-xs md:text-sm text-gray-600">
                                  {camp.HealthcareProfessional}
                              </td>
                              <td className="md:px-6 md:py-3 whitespace-nowrap text-center text-xs md:text-sm text-gray-600">
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
              {/* tablefooter */}
              <tfoot>
                <tr >
                  <td className="w-full p-2" colSpan="5">
                      {/* pagination */}
                <Pagination totalData={totalData}showPerPage={showPerPage}setShowPerPage={setShowPerPage}setCurrentPage={setCurrentPage} currentPage={currentPage}></Pagination>
                  </td>
                </tr>
              </tfoot>
          </table>
      </div>
  );
};

export default ManageCampsTable;
