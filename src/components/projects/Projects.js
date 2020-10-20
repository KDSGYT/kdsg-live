import React from 'react';
import './Projects.scss';
function Projects() {

    return (
        <section id="projects">Something will go here</section>
    )

    const [render, setrender] = useState(false)
    
    useEffect(() => {
        document.addEventListener( 'scroll', () => {
            if ((window.pageYOffset) > (window.innerHeight /3)) {
                setrender(true);
            }
        })        
    }, [])

    // function showProject(id) {
        
    // }

    
    if(render){
        return (
            <section className="projects" name="projects" id="projects">
                <h1>This is master branch</h1>
                <ProjectGrid />
            </section>
        );
    } else {
        return(
            <section className="projects" name="projects" id="projects">

            </section>
        )
    }
}
export default Projects;