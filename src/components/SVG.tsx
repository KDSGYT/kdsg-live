import React from 'react'

const SVG = () => {
    return (
        <svg width="63" height="40" viewBox="0 0 63 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d)">
                <path d="M7 3L31.5 27L56 3" stroke="white" strokeWidth="6" />
            </g>
            <defs>
                <filter id="filter0_d" x="0.900665" y="0.856934" width="61.1987" height="38.3426" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
            </defs>
        </svg>
    )
}

export default SVG;