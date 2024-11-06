import React from 'react';
import Pagination from '../../Pagination/Pagination';

const PaymentTable = ({ paymentHistores,totalData,showPerPage,setShowPerPage,currentPage,setCurrentPage }) => {
  return (
    <div className="w-full overflow-x-auto lg:overflow-hidden">
    <table className="min-w-full divide-y text-center divide-gray-200">
      <thead className="bg-blue-100">
        <tr className="[&>th]:font-bold">
          <th className="px-3 lg:px-6 py-3 text-xs lg:text-sm font-medium text-gray-600 uppercase tracking-wider">
            Name
          </th>
          <th className="px-3 lg:px-6 py-3 text-xs lg:text-sm font-medium text-gray-600 uppercase tracking-wider">
            Fees
          </th>
          <th className="px-3 lg:px-6 py-3 text-xs lg:text-sm font-medium text-gray-600 uppercase tracking-wider">
            Payment Status
          </th>
          <th className="px-3 lg:px-6 py-3 text-xs lg:text-sm font-medium text-gray-600 uppercase tracking-wider">
            Confirmation Status
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {/* Table Rows */}
        {paymentHistores &&
          paymentHistores.map((paymentHistore) => (
            <tr key={paymentHistore._id}>
              <td className="px-3 lg:px-6 py-4 whitespace-nowrap text-xs lg:text-sm text-gray-600">
                {paymentHistore.CampName}
              </td>
              <td className="px-3 lg:px-6 py-4 whitespace-nowrap text-xs lg:text-sm text-gray-600">
                $ {paymentHistore.CampFees}
              </td>
              <td className="px-3 lg:px-6 py-4 whitespace-nowrap text-xs lg:text-sm text-gray-600">
                {paymentHistore.paymentStatus}
              </td>
              <td className="px-3 lg:px-6 py-4 whitespace-nowrap text-xs lg:text-sm text-gray-600">
                {paymentHistore.ConfirmationStatus}
              </td>
            </tr>
          ))}
      </tbody>
      {/* Table Footer */}
      <tfoot>
        <tr>
          <td className="w-full p-2" colSpan="4">
            {/* Pagination */}
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

export default PaymentTable;
