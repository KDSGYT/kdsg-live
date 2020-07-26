import React from 'react';
import './Footer.scss';

import { AiFillHeart } from 'react-icons/ai';
const Footer = () => {

    return (
        <footer className="footer">
            <span>
                Made With &nbsp;<span className="heart"><AiFillHeart /></span>&nbsp; By&nbsp; 
                <a href="https://github.com/KDSGYT" > KDSG</a>
            </span>
        </footer>
    )
}

export default Footer;