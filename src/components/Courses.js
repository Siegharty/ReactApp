import React, {useState,useEffect} from "react";
import { getCourses } from "../api/courseApi";
import CoursesList from './CoursesList';
import { Link } from "react-router-dom";

function Courses() {

    const [ courses,setCourses ] = useState([]);

    useEffect( () => {
        getCourses().then(_courses => setCourses(_courses));
    }, []);

  
    return ( 
        <>
        <h1>CoursesPage</h1>
        <Link className="btn btn-primary" to="/course">
            Add course
        </Link>
        <CoursesList courses={courses} />
        </>
    );
  }

export default Courses;
