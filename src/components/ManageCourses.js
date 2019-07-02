import React, { useState }  from "react";
import CourseForm  from "./CourseForm";

const ManageCourses = props => {
    const [course, setCourse] = useState({
        id: null,
        slug: "",
        title: "",
        authorId: null,
        category: ""
    });

    function handleChange(event){
        setCourse({
            ...course, 
            [event.target.name]: event.target.value
        });
    }

    return(
        <>
        <h2>Manage Course</h2>
        <CourseForm course={course} onChange={handleChange}/>
        </>
    );
}

export default ManageCourses;