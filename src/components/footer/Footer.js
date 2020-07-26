import React from 'react';
import './Footer.scss';

import { AiFillHeart } from 'react-icons/ai';
const Footer = () => {

    return (
        <footer className="footer">
            <span>
                Made With <span className="heart"><AiFillHeart /></span> By 
                <a href="https://github.com/KDSGYT" > KDSG</a>
            </span>
        </footer>
    )
}

export default Footer;