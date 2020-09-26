import React from 'react'
import { CTX } from '../../context/CTX';
import Expo from './project/Expo';
import Project from './project/Project'
import CSSTransitionGroup from 'react-transition-group/CSSTransition'
import '../Transition.scss'
function ProjectGrid() {

    const snapshotUrl = 'https://i.ibb.co/4VJTFKJ/home-Background-Image-opt-1.jpg';
    const [animate, setAnimate] = React.useState(false);
    React.useEffect(() => {
        setAnimate(true)
    }, [])

    return (
        <React.Fragment>
            <CTX.Provider>
                <div className="grid-container">
                    <CSSTransitionGroup
                        classNames="fade"
                        timeout={2000}
                        in={animate}
                    >
                        <div className="flex-box">
                            <div className="flex-element">
                                <Project snapshotUrl={'https://i.ibb.co/m9ShMMt/subCount.png'} projectName={"SubsCount"} url={'http://subscount.kdsg.live'} />
                            </div>
                            <div className="flex-element">
                                <Project snapshotUrl={snapshotUrl} />
                            </div>
                            <div className="flex-element">
                                <Project snapshotUrl={snapshotUrl} />
                            </div>
                            <div className="flex-element">
                                <Project snapshotUrl={snapshotUrl} />
                            </div>
                        </div>

                        {/* <div className="grid">
                            <div className="grid-element">
                                <Project snapshotUrl={'https://i.ibb.co/m9ShMMt/subCount.png'} projectName={"SubsCount"} url={'http://subscount.kdsg.live'} />
                            </div>
                            <div className="grid-element">
                                <Project snapshotUrl={snapshotUrl} />
                            </div>
                            <div className="grid-element">
                                <Project snapshotUrl={snapshotUrl} />
                            </div>
                            <div className="grid-element">
                                <Project snapshotUrl={snapshotUrl} />
                            </div>
                        </div> */}
                    </CSSTransitionGroup>
                </div>
                <CTX.Consumer>
                    {() => <Expo />}
                </CTX.Consumer>
            </CTX.Provider>

        </React.Fragment>
    );
}

export default ProjectGrid;

