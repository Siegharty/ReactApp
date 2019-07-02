import React from "react";
import { Link } from "react-router-dom";

function NotFound(){
    return(
      <div>
        <h2>Not found page</h2>
        <p>
          <Link to="/ReactApp">Back to home</Link>
        </p>
      </div>
    );
}



export default NotFound;