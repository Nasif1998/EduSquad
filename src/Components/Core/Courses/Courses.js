import React from 'react';
import { useSelector } from 'react-redux';

const Courses = () => {
    const courses = useSelector((state) => {
        return state.courses.courses;
    });
    console.log(courses);
    return (
        <div>
            <h1>Courses</h1>
        </div>
    );
};

export default Courses;