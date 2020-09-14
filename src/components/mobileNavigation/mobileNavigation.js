import React from 'react';
import { makeStyles } from '@material-ui/styles'
import Links from '../Links';
// import './mobileNavigation.scss'
const useStyles = makeStyles(theme => {
    navigation :{

    }
    toggleButton:{

    }
})



function MobileNavigation() {
    const {
        navigation
        } = useStyles()
    return (
        <nav style={navigation}>
            <ToggleButton />

            <ul>
                <Links />
            </ul>
        </nav>
    );
}

function ToggleButton() {
    
    const {
        toggleButton    

    } = useStyles()

    return (
        <button style={toggleButton}>
            <span className="line">
                <hr />
                <hr />
                <hr />
            </span>
        </button>
    )
}


export default MobileNavigation;