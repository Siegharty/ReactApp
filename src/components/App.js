import React from "react";
import Home from "./Home";
import About from "./About";
import Courses from "./Courses";
import ManageCourses from "./ManageCourses";
import Header from "./common/Header";
import NotFound from "./NotFound";
import { Route,Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  

  return (
    <div className="container-fluid">
    <ToastContainer autoClose={3000} hideProgressBar />
      <Header />
      <Switch>
        <Route path="/ReactApp/" exact component={Home} />
        <Route path="/courses/" component={Courses} />
        <Route path="/course/:slug" component={ManageCourses} />
        <Route path="/course/" component={ManageCourses} />
        <Route path="/about/" component={About} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
