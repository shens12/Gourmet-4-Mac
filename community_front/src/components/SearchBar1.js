import React, { useState } from "react";
import { useData } from "../data/useData";
import { useNavigate, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,FormControl, ListGroup,InputGroup} from 'react-bootstrap';

export default function SearchBar() {
  const { data } = useData();
  const [input, setInput] = useState("");
  const categories = ["restaurants"];
  const sellingItems = categories
    .map((name) => data[name])
    .flat()
    .map((item) => item.name.toLowerCase());
	
  const [filterDisplay, setFilterDisplay] = useState([]);
  const onChangeInput = (e) => {
    if (e !== "") {
      let newList = [];
      setInput(e);
      newList = sellingItems.filter((name) =>
        name.includes(input.toLowerCase())
      );
      setFilterDisplay(newList);
    } else {
      setFilterDisplay([]);
    }
  };
  
  return (
    <div>
      <div >
	  <InputGroup className="changeRadius">
        <input class="form-control form-control-lg" type="text" placeholder="Not satisfied? Search for another gourmet!"  onChange={(e) => onChangeInput(e.target.value)} />                    
      <select class="form-control form-control-lg">
          <option>All Category</option>
          <option>Chinese</option>
          <option>American</option>
          <option>Japanese</option>
        </select>
		</InputGroup>
        {filterDisplay.map((key, i) => {
			let product = data["restaurants"].find(x => x.name.toLowerCase() === key)
          return (
            <div key={i}>
		<Link to={"/product/"+product._id}><li class="list-group-item list-group-item-action"><h4>{key}</h4></li></Link>
            </div>
          );
        })}
      </div>


    </div>

  );
}