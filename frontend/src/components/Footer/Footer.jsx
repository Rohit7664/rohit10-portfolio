import { Link, Typography } from '@mui/material';
import React from 'react';
import "./Footer.css";
import {BsGithub, BsInstagram, BsLinkedin} from "react-icons/bs"

const Footer = () => {
  return (
    <div className="Footer">
    <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
        Full Stack Developer with a passion for development and excited to be at the development phase of my career as a web developer.
        Proficient in Frontend technology as well as in backend technology.</Typography>

        <Link to="/contact" className="FooterContactBtn">
            <Typography>Contact Us</Typography>
        
        </Link>

    </div>
    <div>
        <Typography variant="h6">Social Media</Typography>
        <a href=" https://github.com/Rohit7664" target="black"><BsGithub/></a>
        <a href=" https://www.linkedin.com/in/rohitkumar7664/" target="black"><BsLinkedin/></a>
        <a href=" https://www.instagram.com/" target="black"><BsInstagram/></a>

    </div>
    </div>

  )
}

export default Footer;