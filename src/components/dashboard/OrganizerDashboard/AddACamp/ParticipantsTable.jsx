import { RiDeleteBin6Line } from "react-icons/ri";

const ParticipantsTable = () => {
  const participant = {
    id: 1,
    name: "John Doe",
    campName: "Summer Health Camp",
    paymentStatus: "Paid",
    confirmationStatus: "Confirmed",
  };

  const handleCancel = (id) => {
    console.log(`Cancel participation for id: ${id}`);
    // Implement cancel functionality
  };
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50 text-left">
          <tr className="text-left">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Participants Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Camp Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Camp Fees
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Payment Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Confirmation Status
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr className="text-left">
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {participant.name}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {participant.campName}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              $777
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {participant.paymentStatus}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {participant.confirmationStatus}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
              <button
                onClick={() => handleCancel(participant.id)}
                className="text-red-600 hover:text-red-800"
              >
                <RiDeleteBin6Line className="text-lg active:scale-95 easein-out duration-200" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ParticipantsTable;