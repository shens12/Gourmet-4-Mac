import React from 'react';
import { useData } from "../data/useData";
import { useNavigate, useParams } from "react-router-dom";
import "../App.css";

export default function RatePage() {
    let navigate = useNavigate();
    const { data } = useData();
    let { id } = useParams();
    let product = data["restaurants"].find(x => x._id === id)
	
	return (
        <div className="group1">
            <div className="details">
                <div className="img3">
                    <img src={product.image} alt="product"></img>
                </div>

                <div >
                    <div>
                        <ul>
                            <li > <h1 className="title1">{product.name}</h1> </li>
							<li className="desc3"> Rate your overall experience: <select>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option selected value="5">5</option>
                            </select></li>
							<br />
                            <li className="desc3"> What dish have you ordered? <input /></li>
							<br />
                            <li className="desc3"> Your own cost at the restaurant? $<input /></li>
							<br />
                            <li className="desc3"> Did you dine in or take out? <select>
                                <option value="1">Dine in</option>
                                <option value="2">Take out</option>
                            </select></li>
							<br />
                            <li className="desc3">Comment on your experience in this restaurant: <br />
							<input  style={{width: "370px", height:"45px"}} /></li>
							 <button className="button1"
                  style={{ marginTop: "30px", fontSize: "15px" }} onClick={() => navigate(`/after-rate`)}>Submit</button>
                        </ul>
						<br />
                    </div>
                </div>

                
            </div>
			<br /><br />
        </div>
    );
}

