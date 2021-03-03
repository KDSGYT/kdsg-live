import * as React from 'react';

export default function SocialMediaLinks() {
    
    const style = {
        listStyleType:"none",
        width:"400px",
        flexDirection:"row",
        alignItems:"center"
    }

    return (
        <ol style={style} className="display-flex">
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Github</li>
        </ol>
    )
}