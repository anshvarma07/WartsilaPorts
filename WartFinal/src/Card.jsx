import React,{useState} from "react";
import a from "./Abidjan.JPG"
import "./Card.css"
import Popover from "./Popover";

export default function Card({ CardData }) {
  const [cartItems, setCartItems] = useState([]);
  const myStyle = {
    width: "21rem",
    backgroundColor: "#f0f0f0",
    // textAlign: "center",
    marginTop:"20px"
  };
  const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)", 
    gap: "5px", 
    justifyItems: "center", 
  };

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };
  return (
    <div style={gridContainerStyle}>
      {CardData?.map((data) => (
        <div key={data.Column1} className="card" style={myStyle} >
          <img src={data.Link} alt="" />
          <div className="card-body">
            <h5 className="card-title">{data["Port Name"]} ({data["Country"]})</h5>
            <p className="card-text">
              NTPro {data["NTPro Version"]}
              <br />
              {console.log(data)}
              Area type: {data["Area type"]}
              <br />
              Size(NM): {data["Size in NM"]}
              <br />
              Location Center: {data["Location Center"]}
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item text-center"><Popover Port={data}/></li>
            <li className="list-group-item text-center">Area Specification</li>
            <li className="list-group-item text-center"><a href={data.Location} target="_blank">Map View</a></li>
          </ul>
          <div className="card-body text-center">
            <a href="/" className="card-link">
              Request Quote
            </a>
            <button type="button" class="btn btn-outline-primary" onClick={() => addToCart(data)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}