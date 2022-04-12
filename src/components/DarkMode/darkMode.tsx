import React, { Component, useEffect, useState } from 'react';
const style = require('../assets/Global.scss')
import './darkMode.scss'
interface props {
    dark: boolean
}

export const DarkModeButton = ({ dark }: props) => {


    const [isDark, setIsDark]: [boolean, any] = useState(dark)

    useEffect(() => {
        setIsDark(true)
    }, [dark])

    function changeMode(): void {
        setIsDark((prevState) => {
            return prevState ? false : true
        })
    }

    // test to check if it is possible to change scss variables values using js
    React.useEffect(() => {

        console.log(style.global)
        return () => {
        }
    }, [])

    // return (<input type="button" onClick={() => changeMode(dark)} value=""/>)
    return (
        <button
            onClick={() => changeMode()}
            
        >
            {isDark ? 'True' : 'False'}
        </button>
    )
}

export default DarkModeButton