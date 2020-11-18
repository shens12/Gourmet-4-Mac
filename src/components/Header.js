import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import "../App.css";


export default function Header() {
  let navigate = useNavigate();
  return (
    <header className="header">
      <div>
        <img
          className="logo"
          src="./logo_small.png" 
          alt="logo"
          width="200"
        ></img>
		<a href="#"><img
          className="logo"
          src="./home.png" 
          onClick={() => navigate(`/`)}
          alt="logo"
          width="30"
		  title="Go back to home page"
        ></img> </a>
      </div>
      
      <div className="nav3">
        <Link to="/signin">
          <span className="nava3">Sign In</span>
        </Link>
        <Link to="/register">
          <span className="nava3">Register</span>
        </Link>
        <Link to="/cart">
          <span className="nava3">Your orders</span>
        </Link>
		<Link to="/report">
          <span className="nava3">Report</span>
        </Link>
      </div>
    </header>
  );
}
