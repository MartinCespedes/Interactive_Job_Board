import React from 'react';

const JobList = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold mb-8">Job List</h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Front-end Developer</h3>
            <p className="text-sm text-gray-600">Acme Inc.</p>
            <p className="text-sm text-gray-600">Location: Remote</p>
            <p className="text-sm text-gray-600">Salary: $70,000 - $90,000</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Back-end Developer</h3>
            <p className="text-sm text-gray-600">XYZ Corp.</p>
            <p className="text-sm text-gray-600">Location: New York, NY</p>
            <p className="text-sm text-gray-600">Salary: $80,000 - $100,000</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Data Analyst</h3>
            <p className="text-sm text-gray-600">Data Solutions LLC</p>
            <p className="text-sm text-gray-600">Location: San Francisco, CA</p>
            <p className="text-sm text-gray-600">Salary: $60,000 - $80,000</p>
          </div>
          {/* Add more job list items here */}
        </div>
      </div>
    </div>
  );
};

export default JobList;