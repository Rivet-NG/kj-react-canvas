import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from "../assets/canvas-tablet.png";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContainer">
            <h1>Canvas Notifications</h1>
            <Link to="/course">
                <button> Choose a Course</button>
            </Link>
        </div>
    </div>
  );
}

export default Home