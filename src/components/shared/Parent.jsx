import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@material-tailwind/react';

const Dcourse = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get(
        'https://parents-follow-u.onrender.com/followup/parents/list'
      );
      const dataArray = Array.isArray(response.data.data)
        ? response.data.data
        : [];
      setCourses(dataArray);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const fetchCourseById = async (id) => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `https://parents-follow-u.onrender.com/followup/parents/get/${id}`
      );
      const courseDetails = {
        _id: response.data._id,
        parentName: response.data.parentName,
        parentEmail: response.data.parentEmail,
        childName: response.data.childName,
        category: response.data.category,
        parentContact: response.data.parentContact,
      };
      setSelectedCourse(courseDetails);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-center text-2xl font-semibold mb-4">Loading...</h2>
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="">
      <h2 className="text-center text-2xl font-semibold mb-4">
        Display Parent Details
      </h2>
      <Button
        onClick={() => fetchCourseById('6650607b23cf37215f8f7598')}
        ripple="dark"
      >
        Get Parent by ID
      </Button>
      <table className="w-full overflow-x-auto mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Parent Name</th>
            <th>Email</th>
            <th>Child Name</th>
            <th>Category</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <td>{course._id}</td>
              <td>{course.parentName}</td>
              <td>{course.parentEmail}</td>
              <td>{course.childName}</td>
              <td>{course.category}</td>
              <td>{course.parentContact}</td>
            </tr>
          ))}
          {selectedCourse && (
            <tr>
              <td colSpan="6">{selectedCourse._id}</td>
            </tr>
          )}
        </tbody>
      </table>
      {selectedCourse && (
        <div className="mt-4 p-4 bg-white shadow-md rounded-lg">
          <h3>Selected Parent Details:</h3>
          <p>ID: {selectedCourse._id}</p>
          <p>Name: {selectedCourse.parentName}</p>
          <p>Email: {selectedCourse.parentEmail}</p>
          <p>Child Name: {selectedCourse.childName}</p>
          <p>Category: {selectedCourse.category}</p>
          <p>Contact: {selectedCourse.parentContact}</p>
        </div>
      )}
    </div>
  );
};

export default Dcourse;
