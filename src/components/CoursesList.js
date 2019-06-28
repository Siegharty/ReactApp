import React from 'react';

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
                  <td>{courses.title}</td>
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