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
            
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {
                    courses.map(() => {
                        <div class="col">
                            <div class="card h-100">
                                <img src="..." class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default Courses;