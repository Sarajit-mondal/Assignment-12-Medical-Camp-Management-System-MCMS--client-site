import { RiDeleteBin6Line } from "react-icons/ri";
import Pagination from "../../../Pagination/Pagination";
import TableSortAndSearch from "../../../availableCamps/sortandSearch/TableSortAndSearch";

const ParticipantsTable = ({participants,handleCancel,handlePaymentsStatus,totalData,showPerPage,setShowPerPage,currentPage,setCurrentPage,handleSearch,handleSort}) => {
 

  return (
    <div className="overflow-x-scroll md:overflow-auto mt-6">
      <table className="min-w-full divide-y divide-gray-200 text-center">
        <thead className="bg-blue-100 ">
          {/* sort and search files */}
          <tr className="border-transparent">
                <td colSpan="4"></td>
                
                 <td colSpan="2" className="px-2">
                 <TableSortAndSearch handleSearch ={handleSearch} handleSort ={handleSort} ></TableSortAndSearch>
                 </td>
                </tr>
                {/* sort and search files */}
          <tr className="">
            <th className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">
              Participants Name
            </th>
            <th className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">
              Camp Name
            </th>
            <th className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">
            Camp Fees
            </th>
            <th className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">
              Payment Status
            </th>
            <th className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">
              Confirmation Status
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {/* table rows */}
          {
            participants && participants.map(participant =><tr key={participant._id} className="">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {participant.ParticipantName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {participant.CampName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
               ${participant.CampFees}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {participant.PaymentStatus}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <button onClick={() =>handlePaymentsStatus(participant._id)} disabled={participant.PaymentStatus === "Unpaid" || participant.ConfirmationStatus === "Confirmed"}>{participant.ConfirmationStatus}</button>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                <button disabled ={participant.PaymentStatus === "Paid"}
                  onClick={() => handleCancel(participant._id)}
                  className={`${participant.PaymentStatus === "Unpaid" && participant.ConfirmationStatus === "Pending" && "text-red-600 hover:text-red-800 active:scale-95 easein-out duration-200"}`}
                >
                  <RiDeleteBin6Line className="text-lg " />
                </button>
              </td>
            </tr>)
          }
        </tbody>
           {/* tablefooter */}
           <tfoot>
                <tr >
                  <td className="w-full p-2" colSpan="6">
                      {/* pagination */}
                <Pagination totalData={totalData}showPerPage={showPerPage}setShowPerPage={setShowPerPage}setCurrentPage={setCurrentPage} currentPage={currentPage}></Pagination>
                  </td>
                </tr>
              </tfoot>
      </table>
    </div>
  );
};

export default ParticipantsTable;