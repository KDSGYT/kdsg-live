import React from 'react';
import { Link } from 'react-scroll';
import GithubLinkedIn from '../home/GithubLinkedIn';
// import Links from '../home/GithubLinkedIn';

const Links = ({ setToggle }) => {

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
                            onClick={() => setToggle(false)}
                        >
                            {item.toUpperCase()}
                        </Link>
                    </li>
                )
            })}
            <div id="navbar-github-linkedin">
                <GithubLinkedIn />
            </div>
        </React.Fragment>
    )
}

export default Links