import React from 'react';
import { useData } from "../data/useData";
import { useNavigate, useParams } from "react-router-dom";

export default function AfterRequestPage() {
    let navigate = useNavigate();

	return (
		<div className="group1">
			<p className="title1">Your service request has been sent to people near this restaurant! </p>
			<p className="title2">Take a break！Your food is on the way to Mac…</p>
			<img className="img4" src="./afterService.jpg" /> <br />
			<button className="button" onClick={() => navigate(`/`)}>Back to main page</button>
			<br />
		</div>
    );
}