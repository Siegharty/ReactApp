import React from 'react';
import { Link } from "react-router-dom";

function Home(){
    return(
        <div className="jumbotron">
            <h1>HomePage</h1>
            <p>My web personal</p>
            <Link to="about" className="btn btn-primary">About</Link>
        </div>
    );
}

export default Home;