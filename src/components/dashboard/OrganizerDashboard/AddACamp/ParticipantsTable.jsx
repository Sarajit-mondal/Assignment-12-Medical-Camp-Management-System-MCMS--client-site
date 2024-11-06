import { RiDeleteBin6Line } from "react-icons/ri";
import Pagination from "../../../Pagination/Pagination";
import TableSortAndSearch from "../../../availableCamps/sortandSearch/TableSortAndSearch";

const ParticipantsTable = ({participants,handleCancel,handlePaymentsStatus,totalData,showPerPage,setShowPerPage,currentPage,setCurrentPage,handleSearch,handleSort}) => {
 

  return (
    <div className="overflow-x-auto md:overflow-hidden mt-6">
    <table className="min-w-full divide-y divide-gray-200 text-center md:table">
      <thead className="bg-blue-100 hidden md:table-header-group">
        {/* Sort and search */}
        <tr className="border-transparent">
          <td colSpan="4"></td>
          <td colSpan="2" className="px-2">
            <TableSortAndSearch handleSearch={handleSearch} handleSort={handleSort}></TableSortAndSearch>
          </td>
        </tr>
        {/* Header Row */}
        <tr>
          <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
            Participant Name
          </th>
          <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
            Camp Name
          </th>
          <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
            Camp Fees
          </th>
          <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
            Payment Status
          </th>
          <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
            Confirmation Status
          </th>
          <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
            Actions
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {participants && participants.map(participant => (
          <tr key={participant._id} className="md:table-row flex flex-col md:flex-row mb-4 md:mb-0">
            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 flex md:table-cell">
              <span className="font-semibold md:hidden">Participant Name:</span>
              {participant.ParticipantName}
            </td>
            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 flex md:table-cell">
              <span className="font-semibold md:hidden">Camp Name:</span>
              {participant.CampName}
            </td>
            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 flex md:table-cell">
              <span className="font-semibold md:hidden">Camp Fees:</span>
              ${participant.CampFees}
            </td>
            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 flex md:table-cell">
              <span className="font-semibold md:hidden">Payment Status:</span>
              {participant.PaymentStatus}
            </td>
            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 flex md:table-cell">
              <span className="font-semibold md:hidden">Confirmation Status:</span>
              <button
                onClick={() => handlePaymentsStatus(participant._id)}
                disabled={participant.PaymentStatus === "Unpaid" || participant.ConfirmationStatus === "Confirmed"}
              >
                {participant.ConfirmationStatus}
              </button>
            </td>
            <td className="px-4 py-2 whitespace-nowrap text-center text-sm font-medium flex md:table-cell">
              <button
                disabled={participant.PaymentStatus === "Paid"}
                onClick={() => handleCancel(participant._id)}
                className={`${
                  participant.PaymentStatus === "Unpaid" && participant.ConfirmationStatus === "Pending"
                    ? "text-red-600 hover:text-red-800 active:scale-95 ease-in-out duration-200 mx-auto"
                    : ""
                }`}
              >
                <RiDeleteBin6Line className="text-lg" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      {/* Footer with pagination */}
      <tfoot>
        <tr>
          <td className="w-full p-2" colSpan="6">
            <Pagination
              totalData={totalData}
              showPerPage={showPerPage}
              setShowPerPage={setShowPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            ></Pagination>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
  
  
  );
};

export default ParticipantsTable;