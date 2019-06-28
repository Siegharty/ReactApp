import React from "react";
import Home from "./Home";
import About from "./About";
import Courses from "./Courses";
import Header from "./common/Header";

function App() {
  function getPage() {
    const route = window.location.pathname;

    if (route === "/courses") return <Courses />;
    if (route === "/about") return <About />;
    else return <Home />;
  }

  return (
    <div className="container-fluid">
      <Header />
      {getPage()}
    </div>
  );
}

export default App;
