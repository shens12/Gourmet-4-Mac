import React from 'react';
import { useData } from "../data/useData";
import { useNavigate, useParams } from "react-router-dom";
import "../App.css";

export default function ReportPage() {
    let navigate = useNavigate();

	return (
		<div>
            <div className="group1">
			<br /><br /><br /><br /><br /><br />
			<div className="reportGroup1">
                <p className="desc3">Input the date: 
				<input placeholder="mm/dd/yyyy" className="e-input" style={{width: "100px"}} /></p>
				 <p className="desc3">Restaurant related to this issue?: 
				 <select>
                                <option selected>Select the restaurant</option>
                                <option>Mr. Gao</option>
                                <option>South China Chinese Food</option>
                                <option>Szechuan Noodle Bowl</option>
                                <option>Popeyes Louisiana Kitchen</option>
								<option>McDonald's</option>
								<option>KFC</option>
								<option>Yukiguni Izakaya</option>
								<option>Teriyaki Experience</option>
								<option>Charlie's Chopsticks Westdale</option>
                            </select></p>
                <p className="desc3">Tell us the issue: 
				<input className="e-input" style={{width: "370px", height:"30px"}} /></p>
				<p className="desc3">How can we contact you after resolving this problem? 
				<input placeholder="Enter your email address" className="e-input" style={{width: "200px"}} /></p>
				</div>
				<br />
				<button className="button1"
                  style={{ marginTop: "10px" }} onClick={() => navigate(`/report-submitted`)}>Submit</button>
                <br /><br /><br /><br /><br /><br /><br /><br /><br />
			</div>

		</div>
    );
}