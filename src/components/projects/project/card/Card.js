import React from 'react'
import './Card.scss';

const Card = ({name}) => {

    return (
        <div className="card">
            <span className="projectName">
                {name}
            </span>

        </div>
    );
}

export default Card;