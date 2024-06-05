import React from 'react';

const CampParticipantsTable = ({ participant, onFeedback, onCancel }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Camp Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Camp Fees
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Participant Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Payment Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Payment Confirmation Status
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {participant.campName}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {participant.campFees}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {participant.name}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {participant.paymentStatus}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {participant.paymentConfirmationStatus}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <button
                onClick={() => onFeedback(participant.id)}
                className="text-blue-600 hover:text-blue-900 mr-4"
              >
                Feedback
              </button>
              <button
                onClick={() => onCancel(participant.id)}
                className="text-red-600 hover:text-red-900"
              >
                Cancel
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CampParticipantsTable;
