const  ManageCampsTable = () => {
    // Example camp data for one row
    const camp = {
      id: 1,
      dateTime: "2024-06-04 10:00 AM",
      location: "Health Center 1",
      healthcareProfessional: "Dr. Smith",
    };
  
    const handleEdit = (id) => {
      // Implement edit functionality
    };
  
    const handleDelete = (id) => {
     
      // Implement delete functionality
    };
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr className="[&>th]:text-left">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date & Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Healthcare Professional
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 text-left">
            <tr className="text-left">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {camp.dateTime}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {camp.location}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {camp.healthcareProfessional}
              </td>
              <td className="[&>*]:text-left px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <button
                  onClick={() => handleEdit(camp.id)}
                  className="text-blue-600 hover:text-blue-900 mr-4
                  active:scale-95 ease-in-out duration-200"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(camp.id)}
                  className="text-red-600 hover:text-red-900 active:scale-95 ease-in-out duration-200"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
  

export default ManageCampsTable
