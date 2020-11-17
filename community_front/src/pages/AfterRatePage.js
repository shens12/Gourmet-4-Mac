import React from 'react';
import { useData } from "../data/useData";
import { useNavigate, useParams } from "react-router-dom";

export default function AfterRatePage() {
    let navigate = useNavigate();
	
	return (
		<div className="group1">
			<p className="title1">Thank you so much for your rating! </p>
			<p className="title2">We will process your comment shortly before it is posted.</p>
			<img className="img4" src="../thanks.gif" /> 
			<br />
			<button className="button"
                   onClick={() => navigate(`/`)}>Back to main page</button>

			<br />
		</div>
    );
}

