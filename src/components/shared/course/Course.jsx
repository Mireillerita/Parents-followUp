import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Updated icons
import { Link } from 'react-router-dom';


const TableComponent = () => {
  const [course, setCourse] = useState([]);
  const [data, setData] = useState([
    { id: 1, title: 'English', description: 'helps your english level.', instructor: 'T.mireille', category: 'level1' },
    { id: 2, title: 'Data Science Fundamentals', description: 'Get started with data science concepts.', instructor: 'T.sandrine', category: 'level3' },
    { id: 3, title: 'Mathematics', description: 'mathematics learning.', instructor: 'T.rebekker', category: 'level3' },
    // Add more courses as needed
  ]);

  const handleAddCourse = () => {
    const newCourse = { id: data.length + 1, title: '', description: '', instructor: '', category: '' };
    setData([...data, newCourse]);
  };

  const handleDeleteCourse = (id) => {
    setData(data.filter((course) => course.id!== id));
  };

  const handleUpdateCourse = (updatedCourse) => {
    setData(data.map(course => course.id === updatedCourse.id? updatedCourse : course));
  };

  const handleFetchCourse = (course) => {
    axios({
      method: 'GET',
      url: `https://afri-code-back-end-zeo6.onrender.com/api/course/getAllCourse`,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response)=>{
      console.log(response.data);
      setCourse(response.data.courses);
    }).catch((error) => {
      console.error(error);
    });
  }

  useEffect(()=>{
    handleFetchCourse();
  },[])
  return (
    <>
      <div className="flex flex-col w-full h-screen pr-10">

      <Link to= '/Dcourse' >
      <div className="relative mb-14">
  <button
    className="absolute top-0 right-0 bg-teal-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-[10%] mb-8"
    onClick={handleAddCourse}
  >
    Add Course
  </button>
</div>
      </Link>
        
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 pr-20">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Image 
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Title
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Instructor
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {course.map((course) => (
                    <tr key={course.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          <img src={course.posterPath} />
                          
                          </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{course.courseTitles}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{course.courseDescription}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{course.courseTeacher}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{course.courseName}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-2"
                          onClick={() => handleUpdateCourse(course)} // Assuming you implement an update feature
                        >
                          Edit
                        </button>
                        <button
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                          onClick={() => handleDeleteCourse(course.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableComponent;