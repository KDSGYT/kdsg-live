import * as React from 'react';
import './ContactUs.scss'
import SocialMediaLinks from './SocialMediaLinks/SocialMediaLinks';

export default function ContactUs() {
    return (
        <section id="contact-us" className="display-flex">
            <h2>Contact Me</h2>
            <p>If you’re hiring for a Frontend role, or have any questions,  please don’t hesitate to reach out!</p>
            <h2><a href="mailto:kdsgyt@gmail.com">kdsgyt@gmail.com</a></h2>
            <SocialMediaLinks />
        </section>
    )
}