import React from "react";
import ReactDOM from "react-dom";
import NavBar from './NavBar';
import App from './App';
import "./index.css";
import Footer from './Footer';

ReactDOM.render(
  <>
    <NavBar />
    <App />
    <Footer/>
  </>,
  document.getElementById("root")
);
