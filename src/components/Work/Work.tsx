import React, { Suspense, useEffect, useState } from 'react';
import './Work.scss';
import firebase from "gatsby-plugin-firebase";
import Project from './Project/Project';
import Parallax from '../Animate/Parallax';
import { getFinishedProjects } from './functions';
import { Searchbar } from './searchbar/SearchBar';
import { SearchContext } from '../assets/SearchContext';


export default function Work({ getData }) {

    const [data, setData]: any = useState([]);
    const [values, setValues]: any = useState(data);
    const workTrigger: any = React.useRef("");
    const project = React.useRef("")
    const searchText: any = React.useContext(SearchContext)
    let regex = new RegExp('/^(.*?(\bpass\b)[^$]*)$/')
    React.useEffect(() => {
        // NOTE: regex is not working properly need to work on the implementation i believe. 
        regex = new RegExp('/^(.*?(\b' + searchText.searchTerm + '\b)[^$]*)$/');
        console.log(
            regex.test('nothing')

        )
        setValues(() => {
            return data.filter(item => {
                // console.log(item.name)
                return searchText.searchTerm.length > 0 ? regex.test(item.name) : true
            })
        })
    }, [searchText.searchTerm])
    React.useEffect(() => {
        setValues(data)
    }, [data])
    useEffect(() => {
        getData(setData)
    }, []);

    return (
        <section id="work">
            <div id='headline' ref={workTrigger}><h2>WORK</h2> <Searchbar /></div>
            <div id="projects" className="">
                {values ? values.map((item, index) => {
                    const {
                        name,
                        projectImage,
                        skills,
                        disc,
                        links
                    } = item;
                    // template for the compoennt
                    return (<Parallax
                        triggerRef={workTrigger}
                        compRef={project}
                        duration={1}
                        animationDelay={1.5}
                        key={index}
                    >
                        <Project
                            projectRef={project}
                            projectTitle={name}
                            projectImage={projectImage}
                            projectSkills={skills}
                            projectDiscription={disc}
                            projectLinks={links}
                        />
                    </Parallax>)
                }) : ""}
            </div>
        </section>
    )
}