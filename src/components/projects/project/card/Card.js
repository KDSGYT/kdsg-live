import React from 'react'
import './Card.scss';

const Card = () => {

    let projectName = "Subscount"
    return (
        <div className="card">
            <div className="projectName">
                {projectName}
            </div>
        </div>
    );
}

export default Card;