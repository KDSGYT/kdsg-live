import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Links from '../Links';
import './mobileNavigation.scss'
const useStyles = makeStyles({
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

    // const styles = useStyles()
    const links = useRef()
    return (
        <nav
            style={{ position, animation }}
            id={"navigation"}

        >
            <ToggleButton links={links} />

            <ul ref={links} id="hidden-links">
                <Links />
            </ul>
        </nav>
    );
}

function ToggleButton({ links }) {

    const {
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
            id="toggle-button"
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