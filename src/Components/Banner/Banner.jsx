import React, { useEffect, useState } from "react";
import { APIKEY,imageUrl } from "../../Constants/Constants";
import axios from "../../axios";
import "./Banner.css";

const Banner = () => {

  const [banner , setBanner] = useState()

useEffect(()=>{
      axios.get(`trending/all/week?api_key=${APIKEY}&language=en-US`)
      .then((response)=>{
        
       setBanner(response.data.results.sort(function (a, b) { return 0.5 - Math.random() })[0])
      })
},[])

  return (
    
    <div style={{backgroundImage:`url(${banner ? imageUrl+banner.backdrop_path : ""})`}} className="banner">
      <div className="content">
        <h1 className="title">{banner?banner.title:""}</h1>
        <div className="buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h4 className="description">{banner?banner.overview:""}</h4>
      </div>
      <div className="fade"></div>
    </div>
  );
};

export default Banner;
