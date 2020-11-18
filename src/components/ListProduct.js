import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useData } from "../data/useData";
import "../App.css";

export default function ListProduct({ mainCategory }) {
  let navigate = useNavigate();
  const { data } = useData();
  const loweredCate = mainCategory.toLowerCase();
  return (
    <div>
      
      <ul >
        {data[loweredCate].map((product) => (
          <li key={product._id}>
            <div className="subgroup4">
              <Link to={"/product/" + product._id}><img
                className="img2" 
                src={product.image} alt="product"
              ></img></Link>

              <div className="clickable">
                <Link to={"/product/" + product._id}>
                  <span className="clickable">{product.name}</span>
                </Link>
              </div>
              
              <div className="desc1">Ratings:{product.rating}/5 Stars</div>
			  <br />
            </div>
          </li>
        ))}
		
      </ul>
    </div>
  );
}
