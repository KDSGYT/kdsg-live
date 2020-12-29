import React from 'react';

function ToggleButton({toggle, setToggle}) {
    return (
        <button id="toggle-button" onClick={() => toggle ? setToggle(false) : setToggle(true)}>
            <span className="button-line" id="line-1"><hr /></span>
            <span className="button-line" id="line-2"><hr /></span>
            <span className="button-line" id="line-3"><hr /></span>
        </button>
    )

}

export default ToggleButton;