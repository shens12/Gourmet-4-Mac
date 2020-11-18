import React from 'react';
import { useData } from "../data/useData";
import { useNavigate, useParams, Link } from "react-router-dom";
import "../App.css";
import SearchBar1 from "../components/SearchBar1";


export default function ProductPage() {
    let navigate = useNavigate();
    const { data } = useData();
    let { id } = useParams();
    let product = data["restaurants"].find(x => x._id === id)
    
    return (
        <div>
			<div className="group1">
			<div className="search2">
				<SearchBar1 />
				<br />
			</div>
			</div>
			<div className="group1">
                <div className="img3">
                    <img src={product.image} alt="product"></img>
                </div>

                <div className="desc2">
                    <div className="subgroup5">
                        
                             <h1 className="title1">{product.name}</h1> 
						
							<p className="desc3"> Category:{product.category}</p>
                            <p className="desc3"> Rating: {product.rating} Stars</p>
                            <p className="desc3"> Average Price per person: ${product.price}</p>
                            <p className="desc3"> Address: <span>{product.address}</span></p>
                            <p className="clickable1">Description: </p>
							<p className="desc3">{product.description}</p>
						<div className="subgroup6">
						<Link to={"/request/" + product._id}><img className="subgroup6" src="../Delivery2.png" /></Link>
						<div className="subgroup7">
							<Link to={"/request/" + product._id}><p className="clickable2"> On campus <img width="20" src="../triangle.png" /></p></Link>
				
							<p className="desc3"> Start a service request on Bring-It-To-Me system</p>
						</div>
					</div>
					<div className="subgroup6">
						<Link to={"/rate/" + product._id}><img className="subgroup6" src="../rate.png" /></Link>
						<div className="subgroup8">
							<Link to={"/rate/" + product._id}><p className="clickable2"> Rate your experience <img width="20" src="../triangle.png" /></p></Link>
							<p className="desc3">Tell us your own experience in this restaurant.</p>
						</div>
					</div>
						
					</div>
					<br />
					
                </div>

                <div className="group1">
					<div className="sub1">
					<br />
						<p className="clickable1">Comments: </p>
							<p className="desc3">There is no comment yet!</p> 
							<p className="desc3">You can be the first one to rate your experience at this restaurant!</p>
							
					</div>
                </div>
				
				
            </div>
			
        </div>
    );
}
/*
                       <li><button className="button-addToCart" onClick={() => navigate(`/rate/${product._id}`)}>Rate your experience</button></li>
                        <li><button title="Start a service request" className="button-buy" onClick={() => navigate(`/request`)}>Bring it to me!</button></li>
 */
