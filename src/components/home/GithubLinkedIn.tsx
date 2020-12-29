import React from 'react';
import github from '../../img/GitHub-Mark-Light-32px.png';
import linkedIn from '../../img/linkedin/linkedin-3-32.png';

function GithubLinkedIn() {
    return (
        <div className="links" style={{animation:"show 1.5s linear" }}>
            <a rel="noopener noreferrer" target="_blank" href="https://github.com/KDSGYT/kdsg-live">
                <img src={github} id="github" alt="github" />
            </a>
            <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/karan-pal-singh-55b0a5178/">
                <img src={linkedIn} className="linkedin" alt="linkedin" />
            </a>
        </div>
    );
}

export default GithubLinkedIn;