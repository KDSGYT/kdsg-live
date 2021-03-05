import * as React from 'react';
// import TwitterIcon from 'gatsby-plugin-material-ui';
import TwitterIcon from '../../../images/twitter.svg';
import LinkedInIcon from '../../../images/linkedin.svg';
import GithubIcon from '../../../images/github.svg';
import ResumeIcon from '../../../images/file.svg';
import './SocialMediaLinks.scss';
import resume from '../../assets/Resume.pdf'

export default function SocialMediaLinks() {
    
    return (
        <ul id="social-link-list" className="display-flex">
            <li><a target="_blank" href="https://www.github.com/kdsgyt"><img className="icon" src={GithubIcon} /></a></li>
            <li><a target="_blank" href="https://www.twitter.com/kdsgyt"><img className="icon" src={TwitterIcon} /></a></li>
            <li><a target="_blank" href={resume}><img className="icon" src={ResumeIcon} /></a></li>
            <li><a target="_blank" href="https://www.linkedin.com/in/kdsgyt"><img className="icon" src={LinkedInIcon} /></a></li>
        </ul>
    )
}