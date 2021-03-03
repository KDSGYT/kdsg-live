import * as React from 'react';
// import TwitterIcon from 'gatsby-plugin-material-ui';
import TwitterIcon from '../../../images/twitter.svg';
import LinkedInIcon from '../../../images/linkedin.svg';
import GithubIcon from '../../../images/github.svg';
import ResumeIcon from '../../../images/file.svg';
import './SocialMediaLinks.scss';
export default function SocialMediaLinks() {
    
    const style = {
        listStyleType:"none",
        width:"400px",
        flexDirection:"row",
        alignItems:"center"
    }

    return (
        <ol style={style} className="display-flex">
            <li><img className="icon" src={GithubIcon} /></li>
            <li><img className="icon" src={TwitterIcon} /></li>
            <li><img className="icon" src={ResumeIcon} /></li>
            <li><img className="icon" src={LinkedInIcon} /></li>
        </ol>
    )
}