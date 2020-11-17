import React from 'react';
import { useData } from "../data/useData";
import { useNavigate, useParams } from "react-router-dom";

export default function MobilePage() {
    let navigate = useNavigate();

	return (
		<div className="group1">
			<p className="title1">Thank you so much for trying on mobile. </p>
			<p className="title2">Please go to the App store on your device. </p>
			<img className="img" src="../mobile2.png" /> <br />
			<button className="button1" onClick={() => navigate(`/`)}>Back to main page</button>
			<br />
		</div>
    );
}