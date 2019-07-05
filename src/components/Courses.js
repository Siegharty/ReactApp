import React, {useState,useEffect} from "react";
import courseStore from '../stores/courseStore';
import CoursesList from './CoursesList';
import { Link } from "react-router-dom";
import {loadCourses} from "../actions/courseAction";

function Courses() {

    const [ courses,setCourses ] = useState([courseStore.getCourses()]);

    useEffect( () => {
        courseStore.addChangeListener(onChange);
        if(courseStore.getCourses().length === 0)
        {
            loadCourses();
        }
        return () => courseStore.removeChangeListener(onChange);
    }, []);
    
    function onChange()
    {
        setCourses(courseStore.getCourses());
    }


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
