import * as React from 'react';
// import TwitterIcon from 'gatsby-plugin-material-ui';
import TwitterIcon from '../../../images/twitter.svg';
import LinkedInIcon from '../../../images/linkedin.svg';
import GithubIcon from '../../../images/github.svg';
import ResumeIcon from '../../../images/file.svg';
import './SocialMediaLinks.scss';
import resume from '../../assets/Resume.pdf'

export default function SocialMediaLinks() {
    
    const style = {
        listStyleType:"none",
        width:"400px",
        flexDirection:"row",
        alignItems:"center"
    }

    return (
        <ol style={style} className="display-flex">
            <li><a href="https://www.github.com/kdsgyt"><img className="icon" src={GithubIcon} /></a></li>
            <li><a href="https://www.twitter.com/kdsgyt"><img className="icon" src={TwitterIcon} /></a></li>
            <li><a href={resume} target="_blank"><img className="icon" src={ResumeIcon} /></a></li>
            <li><a href="https://www.linkedin.com/in/kdsgyt"><img className="icon" src={LinkedInIcon} /></a></li>
        </ol>
    )
}