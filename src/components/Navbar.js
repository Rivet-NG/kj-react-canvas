import React from 'react'
import Logo from '../assets/canvasLogoo.jpeg';
import { Link } from 'react-router-dom';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import '../styles/Navbar.css';
import { Button } from '@mui/material';

function Navbar() {
  return (
    <div className="navbar">
        <div className="leftSide">
            <img src={Logo} />
        </div>
        <div className="rightSide">
            <Link to="/"> Login </Link>
            <Link to="/login"> Home </Link>
            <Link to="/course"> Courses </Link>
            
            <Button>
            <DensityMediumIcon />
            </Button>
        </div>
    </div>
  );
}

export default Navbar 