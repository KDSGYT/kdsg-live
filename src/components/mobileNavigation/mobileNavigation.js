import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Links from '../Links';
import './mobileNavigation.scss'
const useStyles = makeStyles({
    navigation: {
        backgroundColor: "#443b3b",
        height: "5.8vh",
        transition: "display 1s ease-in",
        width:"100%",
        zIndex:"10"

    },
    toggleButton: {
        // border: "2px solid black",
        border: "none",
        width: "35px",
        height: "25px",
        backgroundColor: "#443b3b",
        outline: "none",
        marginLeft: "10px",
        marginTop: "1px"

    },
    hiddenLinks: {
        position: "absolute",
        left: "-60%",
        zIndex: "5",
        backgroundColor: "#443b3b",
        width: "100%",
        textAlign: "center",
        height: "96.7vh",

        // needs to be duplicated
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        transition: "all 1s ease"

    },
    line: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    }
})



function MobileNavigation({position, animation}) {
    const {
        navigation,
        hiddenLinks
    } = useStyles()
    // const styles = useStyles()
    const links = useRef()
    return (
        <nav
            style={{ position, animation }}
            className={navigation}

        >
            <ToggleButton links={links} />

            <ul ref={links} className={hiddenLinks}>
                <Links />
            </ul>
        </nav>
    );
}

function ToggleButton({ links }) {

    const {
        toggleButton,
        line
    } = useStyles()

    const lines = useRef();
    const [toggle, setToggle] = React.useState(false)

    React.useEffect(() => {
        console.log(toggle);
        if (toggle) {
            links.current.style.left = "0%"
        } else {
            links.current.style.left = "-100%"
        }
    }, [toggle, links])

    return (
        <button
            onClick={() => toggle ? setToggle(!toggle) : setToggle(!toggle)}
            className={toggleButton}
        >
            <span ref={lines} className={line}>
                <hr />
                <hr />
                <hr />
            </span>
        </button>
    )
}


export default MobileNavigation;