import React, { FC, useEffect, useState } from 'react'

interface ParallaxAnimation {
    compRef: any
    duration: Number
    animationDelay?: Number
    xOffset?: Number
    yOffset?: Number
}

const Parallax: FC<ParallaxAnimation> = ({ children, duration, compRef, animationDelay = "0" }) => {

    // const compStyle = compRef.current.style || {offsetTop:0}
    const [opacity, setOpacity] = React.useState<number>(0)

    useEffect(() => {
        document.addEventListener('scroll', () => {
            const viewPortHeight: number = window.innerHeight
            const compOffset: number = compRef.current.getBoundingClientRect().bottom
            const values: number = parseFloat(((viewPortHeight / compOffset) - 0.30).toFixed(3))

            if (values > 0.40) {
                setOpacity(1)
            } else if (values <= 0.40) {
                setOpacity(0)
            }
            // console.log(compOffset)
            // console.log('inner',window.innerHeight)
            // console.log()
        })

        return () => {
            document.removeEventListener('scroll', () => {

            })
        }
    }, []);

    return (
        <div style={
            {
                opacity,
                transition: `opacity ${duration}s ease`,
                transitionDelay: `${animationDelay}s`
            }}>
            {/* All the children enclosed in the current component */}
            {children}
        </div>
    )
}


export default Parallax;