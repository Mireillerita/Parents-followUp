import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@material-tailwind/react';

const Dcourse = () => {
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState({
    id: '',
    title: '',
    description: '',
    instructor: '',
    category: '',
  });

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get('http://your-api-url/courses');
      setCourses(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addCourse = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://your-api-url/courses', course);
      fetchCourses();
    } catch (error) {
      console.error(error);
    }
  };

  const updateCourse = async (courseId) => {
    try {
      await axios.put(`http://your-api-url/courses/${courseId}`, course);
      fetchCourses();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteCourse = async (courseId) => {
    try {
      await axios.delete(`http://your-api-url/courses/${courseId}`);
      fetchCourses();
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
      <h2 className="mb-4 text-xl font-semibold border-b border-gray-200">
        Courses
      </h2>
      <form onSubmit={addCourse} className="flex flex-col space-y-4">
        <input
          type="text"
          name="title"
          value={course.title}
          onChange={handleChange}
          placeholder="Title"
          required
          className="border p-2 rounded w-full"
        />
        <textarea
          name="description"
          value={course.description}
          onChange={handleChange}
          placeholder="Description"
          required
          className="border p-2 rounded w-full"
        ></textarea>
        <input
          type="text"
          name="instructor"
          value={course.instructor}
          onChange={handleChange}
          placeholder="Instructor"
          required
          className="border p-2 rounded w-full"
        />
        <select
          name="category"
          value={course.category}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        >
          <option value="">Select Levels</option>
          <option value="web development">leve 1</option>
          <option value="data science">leve 2</option>
          <option value="machine learning">level 3</option>
        </select>
        <Button
          type="submit"
          color="teal"
          ripple="light"
          className="rounded"
          fullWidth={true}
        >
          Add Course
        </Button>
      </form>
      <ul className="mt-4 space-y-2">
        {courses.map((course) => (
          <li key={course.id} className="flex justify-between items-center">
            <div className="flex space-x-2">
              <Button
                color="yellow"
                ripple="light"
                className="rounded"
                onClick={() => updateCourse(course.id)}
              >
                Edit
              </Button>
              <Button
                color="red"
                ripple="light"
                className="rounded"
                onClick={() => deleteCourse(course.id)}
              >
                Delete
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dcourse;
