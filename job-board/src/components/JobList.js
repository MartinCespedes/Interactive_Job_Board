import React from 'react';

const JobList = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-10">
        <h1 className="text-2xl font-bold mb-4">Job List</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Add your job list items here */}
        </div>
      </div>
    </div>
  );
};

export default JobList;