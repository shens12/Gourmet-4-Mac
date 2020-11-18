import React from "react";
import ListProduct from "../components/ListProduct";
import SearchBar from "../components/SearchBar";
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';

export default function Homepage() {
	
  return (
    <div>
	<div className="group1">
			<br />
			<img className="subgroup1" src="./Foodicon1.png" alt="Foodicon1" /> 
			<div className="subgroup2">
			<p className="title1">Find your favorite, dine on campus</p> 
			<SearchBar />
			<br />
			</div>
			<img className="subgroup3" src="./Foodicon2.png" alt="Foodicon2" /> 			
		</div>
		<div className="group2">
			<div className="subgroup4">
				<Link to="/mobile">
					<img className="img" src="./Delivery.png" alt="Delivery" /> 
					<p className="clickable"> Delivery for others <img width="20" src="./triangle1.png" /></p>
					</Link>
				<p className="desc"> Take ordered dished to campus <br />
				at your convinence and <br />
				earn some pocket money </p>
			</div>
			<div className="subgroup4">
				<Link to="/report">
					<img className="img" src="./report.png" alt="Report" /> 
					<p className="clickable"> Report an issue <img width="20" src="./triangle1.png" /></p>
				</Link>
				<p className="desc"> Find something wrong? <br />
				Report the issue to us, <br />
				and we will handle it </p>				
			</div>
			<div className="subgroup4">
				<Link to="/mobile">
					<img className="img" src="./mobile.png" alt="Mobile" /> 	
					<p className="clickable"> Try on mobile <img width="20" src="./triangle1.png" /></p>
					</Link>
				<p className="desc"> Try using our web app <br />
				on your device to gain<br />
				more convenience  </p>
			</div>
			<img className="cl" src="./click.png" alt="Click below" /> 	
		</div>
		<div className="group1">
			<div className="subgroup5">
				<br />
				<p className="text"> Try our recommendations? </p>
				<ListProduct mainCategory="restaurants" />
			</div>
		</div>

    </div>
  );
}
