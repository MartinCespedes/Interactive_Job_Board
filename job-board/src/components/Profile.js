import React from 'react';

const Profile = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-10">
        <h1 className="text-2xl font-bold mb-4">Profile</h1>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center mb-6">
            <div className="w-24 h-24 mr-4 overflow-hidden rounded-full">
              <img
                src="https://via.placeholder.com/100" // Replace with profile image URL
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Full Name</h2> {/* Replace with user's full name */}
              <p className="text-gray-600">Email: user@example.com</p> {/* Replace with user's email */}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">About Me</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                et velit vitae nibh rutrum bibendum. Curabitur non mi ut mauris
                dapibus tempus.
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Skills</h3>
              <ul className="list-disc list-inside">
                <li>React</li>
                <li>Node.js</li>
                <li>Python</li>
                <li>SQL</li>
                <li>Git</li>
              </ul>
            </div>
          </div>
          <div className="bg-gray-100 p-4 mt-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Experience</h3>
            <div>
              <h4 className="text-md font-semibold">Job Title</h4>
              <p className="text-gray-600">Company Name</p>
              <p className="text-sm">Start Date - End Date</p>
              <p>
                Job description goes here. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Mauris et velit vitae nibh rutrum
                bibendum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;