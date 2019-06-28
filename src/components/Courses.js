import React, {useState,useEffect} from "react";
import { getCourses } from "../api/courseApi";
import CoursesList from './CoursesList';

function Courses() {

    const [ courses,setCourses ] = useState([]);

    useEffect( () => {
        getCourses().then(_courses => setCourses(_courses));
    }, []);

  
    return ( 
        <>
        <h1>CoursesPage</h1>
        <CoursesList courses={courses} />
        </>
    );
  }

export default Courses;
