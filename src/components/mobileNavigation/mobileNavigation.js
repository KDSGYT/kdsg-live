import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Links from '../Links';
import './mobileNavigation.scss'
const useStyles = makeStyles({
    navigation: {
        backgroundColor: "#443b3b",
        height: "6vh",
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
        top:"6vh",
        position: "absolute",
        // left: "-60%",
        zIndex: "5",
        backgroundColor: "#443b3b",
        width: "100%",
        textAlign: "center",
        height: "96.7vh",
        color:"white",

        // needs to be duplicated
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        transition: "all 1s ease"

    },
    line: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    line1Style:{
        // transformOrigin:"(-50%,0)",
        transform:"roatate(0.5turn)"
    }, line2:{}
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

            <ul ref={links} className={hiddenLinks }>
                <Links />
            </ul>
        </nav>
    );
}

function ToggleButton({ links }) {

    const {
        toggleButton,
        line,
        line1Style
    } = useStyles()

    const lines = useRef();
    const line1 = useRef();
    const line2 = useRef();
    const [toggle, setToggle] = React.useState(false)

    React.useEffect(() => {
        if (toggle) {
            links.current.style.left = "0%"
            // lines.current.style.
        } else {
            links.current.style.left = "-100%"
        }
    }, [toggle, links])

    return (
        <button
            onClick={() => toggle ? setToggle(!toggle) : setToggle(!toggle)}
            className={toggleButton}
        >
            <span ref={lines} id="lines" className={line} >
                <hr  ref={line1} className={ line1Style, "button-line"}/>
                <hr className="button-line"/>
                <hr ref={line2}className="button-line"/>
            </span>
        </button>
    )
}


export default MobileNavigation;