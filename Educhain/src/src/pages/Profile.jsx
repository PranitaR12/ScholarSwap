import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Profile() {
  const [profilePic, setProfilePic] = useState(null);
  const [role, setRole] = useState(''); // State to track role selection (student or educator)
  const [educatorSelections, setEducatorSelections] = useState({
    classes: false,
    exams: false,
    subjects: false,
  });

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleEducatorSelections = (option) => {
    setEducatorSelections((prev) => ({
      ...prev,
      [option]: !prev[option],
    }));
  };

  return (
    <div className="my-16 flex items-center justify-center text-white">
      {/* Container */}
      <div className="bg-white bg-opacity-10 rounded-lg shadow-lg p-10 max-w-3xl w-full space-y-8">
        <h1 className="text-4xl font-bold text-center text-white">
          Build Your Profile
        </h1>

        {/* Profile Picture */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-40 h-40 bg-gray-800 rounded-full overflow-hidden">
              {profilePic ? (
                <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <p className="text-center text-gray-500 flex items-center justify-center h-full">
                  Upload Picture
                </p>
              )}
            </div>
            <label
              htmlFor="profilePic"
              className="absolute bottom-0 right-0 bg-purple-700 p-2 rounded-full cursor-pointer hover:bg-purple-900 transition duration-300">
              <input
                type="file"
                id="profilePic"
                accept="image/*"
                className="hidden"
                onChange={handleProfilePicChange}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="white"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.232 4.232a2.828 2.828 0 00-4 0L5.5 10l1.414 1.414L12 6.828l5.086 5.086L18.5 10l-3.268-3.268zm0 0L18.5 10l1.414-1.414a2.828 2.828 0 000-4L15.232 4.232zM5.5 14h13v5H5.5v-5z"
                />
              </svg>
            </label>
          </div>
        </div>

        {/* Profile Form */}
        <form className="space-y-6">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter your full name"
              className="mt-1 block w-full p-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>

          {/* Bio */}
          <div>
            <label htmlFor="bio" className="block text-sm font-medium">
              Bio
            </label>
            <textarea
              id="bio"
              placeholder="Tell us about yourself"
              className="mt-1 block w-full p-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              rows="4"
            />
          </div>

          {/* Role Selection */}
          <div>
            <label htmlFor="role" className="block text-sm font-medium">
              Role
            </label>
            <select
              id="role"
              value={role}
              onChange={handleRoleChange}
              className="mt-1 block w-full p-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:outline-none">
              <option value="">Select Role</option>
              <option value="student">Student</option>
              <option value="educator">Educator</option>
            </select>
          </div>

          {/* Conditional Fields based on Role */}
          {role === 'student' && (
            <div>
              {/* Student Dropdown for Class/School/Exam */}
              <label htmlFor="studentOptions" className="block text-sm font-medium">
                Select Class/School/Exam
              </label>
              <select
                id="studentOptions"
                className="mt-1 block w-full p-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:outline-none">
                <option value="">Choose one</option>
                <option value="class">Class</option>
                <option value="school">School</option>
                <option value="exam">Exam</option>
              </select>
            </div>
          )}

          {role === 'educator' && (
            <div>
              {/* Educator Multi-Select for Classes, Exams, Subjects */}
              <label htmlFor="educatorOptions" className="block text-sm font-medium">
                Choose your fields
              </label>
              <div className="flex flex-wrap gap-4 mt-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={educatorSelections.classes}
                    onChange={() => handleEducatorSelections('classes')}
                    className="form-checkbox h-4 w-4 text-purple-500"
                  />
                  <span className="ml-2">Classes</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={educatorSelections.exams}
                    onChange={() => handleEducatorSelections('exams')}
                    className="form-checkbox h-4 w-4 text-purple-500"
                  />
                  <span className="ml-2">Exams</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={educatorSelections.subjects}
                    onChange={() => handleEducatorSelections('subjects')}
                    className="form-checkbox h-4 w-4 text-purple-500"
                  />
                  <span className="ml-2">Subjects</span>
                </label>
              </div>
            </div>
          )}


          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-4 rounded-lg bg-purple-700 hover:bg-purple-900 transition duration-300 font-semibold text-white text-lg">
            <Link to='/marketplace' className='h-full w-full'>
              Save Profile
            </Link>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
