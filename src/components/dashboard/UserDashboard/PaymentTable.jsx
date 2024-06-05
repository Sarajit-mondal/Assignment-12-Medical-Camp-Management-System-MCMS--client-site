import React from 'react';

const PaymentTable = ({ participant }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Fees
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Payment Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Confirmation Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {participant.name}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {participant.fees}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {participant.paymentStatus}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {participant.confirmationStatus}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PaymentTable;
