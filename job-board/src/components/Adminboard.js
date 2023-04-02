import React from 'react';

const Adminboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold mb-8">Admin Dashboard</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-500 p-6 rounded-lg text-white">
              <h3 className="text-xl font-semibold mb-4">Total Users</h3>
              <p className="text-4xl">1,234</p>
            </div>
            <div className="bg-green-500 p-6 rounded-lg text-white">
              <h3 className="text-xl font-semibold mb-4">Active Jobs</h3>
              <p className="text-4xl">567</p>
            </div>
            <div className="bg-yellow-500 p-6 rounded-lg text-white">
              <h3 className="text-xl font-semibold mb-4">Pending Applications</h3>
              <p className="text-4xl">89</p>
            </div>
          </div>
          <div className="bg-gray-100 p-6 mt-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-blue-800">Recent Activity</h3>
            <ul className="divide-y divide-gray-200">
              <li className="py-4">
                <h4 className="text-lg font-semibold">New User Registration</h4>
                <p className="text-sm text-gray-600">John Doe joined the platform</p>
              </li>
              <li className="py-4">
                <h4 className="text-lg font-semibold">Job Application</h4>
                <p className="text-sm text-gray-600">Jane Smith applied for a Front-end Developer position</p>
              </li>
              <li className="py-4">
                <h4 className="text-lg font-semibold">Job Posted</h4>
                <p className="text-sm text-gray-600">Acme Inc. posted a new job for a Data Analyst</p>
              </li>
              {/* Add more recent activity items if needed */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adminboard;