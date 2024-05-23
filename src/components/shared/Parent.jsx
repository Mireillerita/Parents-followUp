import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@material-tailwind/react';

const Dcourse = () => {
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState({
    parent_name: '',
    email: '',
    password: '',
    confirm_password: '',
    telephone: '',
    child_name: '',
    child_level: '',
  });

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get('http://actual-api-url/courses'); // Replace with your actual API URL
      setCourses(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addCourse = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://actual-api-url/courses', course); // Replace with your actual API URL
      fetchCourses();
    } catch (error) {
      console.error(error);
    }
  };

  const updateCourse = async (courseId) => {
    try {
      await axios.put('http://actual-api-url/courses/${courseId}, course'); // Corrected URL syntax
      fetchCourses();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteCourse = async (courseId) => {
    try {
      await axios.delete('http://actual-api-url/courses/${courseId}'); // Corrected URL syntax
      fetchCourses();
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  return (
    <div className="">
      <h2 className="text-center text-2xl font-semibold mb-4">
        Display Parent Details
      </h2>
      <table className="w-full overflow-x-auto">
        <thead className="bg-teal-800 text-white">
          <tr>
            <th className="px-4 py-2">Parent Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Password</th>
            <th className="px-4 py-2">Confirm Password</th>
            <th className="px-4 py-2">Telephone</th>
            <th className="px-4 py-2">Child Name</th>
            <th className="px-4 py-2">Child Level</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {courses.map((course, index) => (
            <tr
              key={index}
              className="hover:bg-gray-100 transition duration-300 ease-in-out"
            >
              <td className="border border-gray-200 px-4 py-2">
                {course.parent_name}
              </td>
              <td className="border border-gray-200 px-4 py-2">
                {course.email}
              </td>
              <td className="border border-gray-200 px-4 py-2">
                {course.password}
              </td>
              <td className="border border-gray-200 px-4 py-2">
                {course.confirm_password}
              </td>
              <td className="border border-gray-200 px-4 py-2">
                {course.telephone}
              </td>
              <td className="border border-gray-200 px-4 py-2">
                {course.child_name}
              </td>
              <td className="border border-gray-200 px-4 py-2">
                {course.child_level}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Add form and other JSX elements here if needed */}
    </div>
  );
};

export default Dcourse;
