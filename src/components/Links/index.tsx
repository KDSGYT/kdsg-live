import React, { FC } from 'react';
import { Link } from 'react-scroll';
import GithubLinkedIn from '../home/GithubLinkedIn';
// import Links from '../home/GithubLinkedIn';
interface props {
    setToggle: any
}

const Links: FC<props> = ({ setToggle }) => {

    const links = [
        "home",
        'projects',
        'about',
        'contact'
    ]

    function handleClick() { setToggle(false) }

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
                            onClick={handleClick}
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