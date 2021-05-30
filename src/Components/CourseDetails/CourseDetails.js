import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Data from '../../Data/CourseData.json';

const CourseDetails = () => {
    let {id} =useParams();
    // const [courses, setCourses] = useState({});

    // useEffect(() => {
    //     setCourses(Data)
    // }, [id])

    const courses = useSelector((state) => {
        const course = state.courses.courses;
        // console.log(course.id);
        const details = course.filter(course => course.id == id);
        return details[0];
        // console.log(state.courses.courses);
    });

    console.log("Course ID" ,id);

    // const {image, course_name, description} = courses;
    console.log(courses.course_name);
    return (
        <div style={{backgroundColor: '#3493C3'}}>
            <img style={{width: '500px',height: '300px', marginTop: '10%', marginLeft: '35%'}} src={courses.image} alt="" />
            <h3 style={{textAlign: 'center'}}>{courses.course_name}</h3>
            <p style={{textAlign:'center'}}>{courses.description}</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil tenetur dolores earum sint aperiam quisquam corrupti quidem corporis, ex eum? Non ipsum voluptatem expedita eius iste, nostrum aut ratione porro.</p>
            <br />
            <br />
            <h5 style={{textAlign:'center'}}>Enrolled: {courses.enroll}</h5>
            <h5 style={{textAlign:'center'}}>Price: {courses.price}$</h5>
            <br />
            <br />
            <br />
        </div>
    );  
};

export default CourseDetails;