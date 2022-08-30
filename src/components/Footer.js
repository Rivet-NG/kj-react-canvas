import React from 'react';
import { Instagram } from '@mui/icons-material';
import { Twitter } from '@mui/icons-material';
import '../styles/Footer.css';


function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia"> 
            <Instagram /> <Twitter /> 
        </div>
        <p> &copy; Canvas Notifications</p>
    </div>
  )
}

export default Footer