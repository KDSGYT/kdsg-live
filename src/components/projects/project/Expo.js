import React from 'react';
import './Expo.scss';

function Expo({ skills, projectName }) {
    // const skillList = skills.map((skill, index) => {
        // return <li key={index}>{skill}</li>
    // })
    return (
        <div className="expo">
            <div className="main-area">
                {/* <span>Project IMage</span> */}
                <span>{projectName}</span>
            </div>
            <div className="discription">
                <ul className="skills-used">
                    {/* {skillList} */}
                </ul>
            </div>
        </div>
    );
}
export default Expo;