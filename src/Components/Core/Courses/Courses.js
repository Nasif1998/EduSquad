import React from 'react';
import { useSelector } from 'react-redux';

const Courses = () => {
    const courses = useSelector((state) => {
        return state.courses.courses;
    });
    console.log(courses);
    return (
        <div>
            <h1>Courses {courses.length}</h1>
            
            <div className="row row-cols-1 row-cols-md-3 g-4">

                {
                    courses.map((course) => (
                        <div className="col">
                            <div className="card h-100">
                                <img src={course.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{course.course_name}</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Courses;