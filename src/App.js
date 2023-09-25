import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import Home from "./components/home/Home";
import Aboutus from "../src/pages/Aboutus";
import Course from "./pages/Course";
import Contact from "./pages/Contact";
import Signin from "./components/Auth/Signin";
import Signup from "./components/Auth/Signup";

class App extends Component {
  render() {
    return (
      <>
        <div className="App overflow-hidden">
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<Aboutus />} />
              <Route path="/Courses" element={<Course />} />
              <Route path="/Contactus" element={<Contact />} />
              <Route path="/Login" element={<Signin />} />
              <Route path="/SignUp" element={<Signup />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>
      </>
    );
  }
}

export default App;
