import React, { FC, useEffect, useState } from 'react'

interface ParallaxAnimation {
    compRef: any
    duration: Number
    animationDelay?: Number
    xOffset?: Number
    yOffset?: Number
}

const Parallax: FC<ParallaxAnimation> = ({ children, duration, compRef, animationDelay = "0" }) => {

    const [opacity, setOpacity] = useState<number>(0)

    const changeOpacityWhenScroll = () => {

        const viewPortHeight: number = window.innerHeight
        const compOffset: number = compRef.current.getBoundingClientRect().bottom
        const value: number = parseFloat(((viewPortHeight / compOffset) - 0.30).toFixed(3))

        if (value > 0.40) { setOpacity(1) }
    };

    useEffect(() => {
        document.addEventListener('scroll', changeOpacityWhenScroll)

        return () => {
            document.removeEventListener('scroll', changeOpacityWhenScroll)
        }
    }, []);

    const compStyles = {
        opacity,
        transition: `opacity ${duration}s ease`,
        transitionDelay: `${animationDelay}s`,

    }

    return (
        <div style={compStyles}>

            {/* All the children enclosed in the current component */}
            {children}
        </div>
    )
}


export default Parallax;