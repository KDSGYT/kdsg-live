import React from 'react';
import { Link } from 'react-scroll';


const Links = () => {

    const links = [
        "home",
        'projects',
        'about',
        'contact'
    ]

    return (
        <React.Fragment>
            {links.map((item, index) => {
                return (
                    <li key={index} className="links">
                        <Link
                            className="nav-link"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={800}
                            to={item}
                        >
                            {item.toUpperCase()}
                        </Link>
                    </li>
                )
            })}
        </React.Fragment>
    )
}

export default Links