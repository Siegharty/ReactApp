import React from 'react';
import { Link } from "react-router-dom";

function CoursesList(props){
    return(
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author ID</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {props.courses.map(courses => {
              return (
                <tr key={courses.id}>
                  <td><Link to={"/course/" + courses.slug}>{courses.title}</Link></td>
                  <td>{courses.authorId}</td>
                  <td>{courses.category}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
    );
}

export default CoursesList;