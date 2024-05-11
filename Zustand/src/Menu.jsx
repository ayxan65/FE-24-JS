import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
const Menu = () => {
  const url = "http://localhost:3000/restaurant/";
  const [data, setdata] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const {data} = await axios(url);
      console.log(data.id);
    };
    getData();
  },[]);

  return (
    <>
      <div className="menudiv">
        {data.map(({ id, name, rating, capacity }) => (
          <Link to={`/Price/${id}`} key={id}>
            {" "}
            <div className="namediv" key={name}>
              <h1>{name}</h1>
              <h2>rating: {rating}</h2>
              <h3>{capacity}</h3>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Menu;
