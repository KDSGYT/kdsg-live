import React,{FC} from 'react';
import TwitterIcon from '../../../images/twitter.svg';
import LinkedInIcon from '../../../images/linkedin.svg';
import GithubIcon from '../../../images/github.svg';
import ResumeIcon from '../../../images/file.svg';
import './SocialMediaLinks.scss';
import resume from '../../assets/Resume.pdf'

interface props{
    styleClass?:string
}

const SocialMediaLinks:FC<props> = ({styleClass}) => {
    
    return (
        <ul id='social-link-list' className={`display-flex ${styleClass}`}>
            <li className="social-link-item"><a target="_blank" href="https://www.github.com/kdsgyt"><img className="icon" src={GithubIcon} /></a></li>
            <li className="social-link-item"><a target="_blank" href="https://www.twitter.com/kdsgyt"><img className="icon" src={TwitterIcon} /></a></li>
            <li className="social-link-item"><a target="_blank" href={resume}><img className="icon" src={ResumeIcon} /></a></li>
            <li className="social-link-item"><a target="_blank" href="https://www.linkedin.com/in/kdsgyt"><img className="icon" src={LinkedInIcon} /></a></li>
        </ul>
    )
}

export default SocialMediaLinks;