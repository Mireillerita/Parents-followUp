import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@material-tailwind/react';

const Dcourse = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [instructor, setInstructor] = useState('');
  const [category, setCategory] = useState('');

  const handleAdd = async (e) => {
    e.preventDefault();
    const formData = {
      title: title,
      description: description,
      instructor: instructor,
      category: category,
    };

    try {
      const response = await axios.post(
        'https://parents-follow-u.onrender.com/followup/course/add',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(response.data);
      fetchCourses(); // Fetch courses again to update the list
    } catch (error) {
      console.error(error);
    }
  };

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get('https://your-api-url/courses');
      setCourses(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addCourse = async (event) => {
    event.preventDefault();
    try {
      await axios.post('https://your-api-url/courses', course);
      fetchCourses();
    } catch (error) {
      console.error(error);
    }
  };

  const updateCourse = async (courseId) => {
    try {
      await axios.put(`https://your-api-url/courses/${courseId}`, course);
      fetchCourses();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteCourse = async (courseId) => {
    try {
      await axios.delete(`https://your-api-url/courses/${courseId}`);
      fetchCourses();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
      <h2 className="mb-4 text-xl font-semibold border-b border-gray-200">
        Courses
      </h2>
      <form onSubmit={handleAdd} className="flex flex-col space-y-4">
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
          className="border p-2 rounded w-full"
        />
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
          className="border p-2 rounded w-full"
        ></textarea>
        <input
          type="text"
          name="instructor"
          value={instructor}
          onChange={(e) => setInstructor(e.target.value)}
          placeholder="Instructor"
          required
          className="border p-2 rounded w-full"
        />
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded w-full"
        >
          <option value="">Select Category</option>
          <option value="web development">Grade 1</option>
          <option value="data science">Grade 2</option>
          <option value="machine learning">Grade 3</option>
          <option value="data science">Grade 4</option>
          <option value="machine learning">Grade 5</option>
          <option value="data science">Grade 6</option>
          <option value="machine learning">Grade 7</option>
          <option value="data science">Grade 8</option>
          <option value="machine learning">Grade 9</option>
        </select>
        <Button
          type="submit"
          color="teal"
          ripple={true}
          className="rounded"
          fullWidth={true}
        >
          Add Course
        </Button>
      </form>
      <ul className="mt-4 space-y-2">
        {courses.map((course) => (
          <li
            key={course.id}
            className="flex flex-col md:flex-row justify-between items-center"
          >
            <div className="flex space-x-2">
              <Button
                color="yellow"
                ripple={true}
                className="rounded"
                onClick={() => updateCourse(course.id)}
              >
                Edit
              </Button>
              <Button
                color="red"
                ripple={true}
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
