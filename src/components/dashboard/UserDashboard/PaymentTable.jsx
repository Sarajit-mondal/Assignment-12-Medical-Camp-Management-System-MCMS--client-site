import React from 'react';

const PaymentTable = ({ paymentHistores }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y text-center divide-gray-200">
        <thead className="bg-blue-100">
          <tr className='[&>th]:font-bold'>
            <th className="px-6 py-3  text-xs font-medium text-gray-600 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3  text-xs font-medium text-gray-600 uppercase tracking-wider">
              Fees
            </th>
            <th className="px-6 py-3  text-xs font-medium text-gray-600 uppercase tracking-wider">
              Payment Status
            </th>
            <th className="px-6 py-3  text-xs font-medium text-gray-600 uppercase tracking-wider">
              Confirmation Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
         {/* table rows */}
         {
          paymentHistores && paymentHistores.map(paymentHistore =>  <tr key={paymentHistore._id}>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
              {paymentHistore.CampName}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
              $ {paymentHistore.CampFees}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
              {paymentHistore.paymentStatus}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
              {paymentHistore.ConfirmationStatus}
            </td>
          </tr>)
         }
        </tbody>
      </table>
    </div>
  );
};

export default PaymentTable;
