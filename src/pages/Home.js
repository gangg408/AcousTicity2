import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> AcousTicity </h1>
        <p> 2023-2024 Conrad Challenge </p>
        <Link to="/menu">
          <button> Explore us </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
