import React from 'react';
import { useData } from "../data/useData";
import { useNavigate, useParams } from "react-router-dom";

export default function ReportSubmittedPage() {
    let navigate = useNavigate();

	return (
		<div className="group1">
			<p className="title1">We have received your report. </p>
			<p className="title2">You will receive feedback as soon as the problem is resolved.</p>
			<img className="img4" src="../afterReport.jpg" /> <br />
			<button className="button" onClick={() => navigate(`/`)}>Back to main page</button>
		</div>
    );
}