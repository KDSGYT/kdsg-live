import * as React from 'react';
import './SearchBar.scss';
/**
 * Search bar to search through all the projects.
 * Approach:
 * Tags: 
 * Serial Number
 * 
 *  
 */

//NOTE: Users can search projects with following keywords:
/**
 * Language 
 * technology like gatsby or firebase
 * name
 * 
 */
export const Searchbar: React.FC<{}> = () => {

    return (
        <div id="search-bar">
            <label for="search-input">
                {/* <img src='./search.svg' /> */}
                <div id="image-container">
                    <img src="https://img.icons8.com/ios-filled/50/000000/search--v1.png" />

                </div>
                <input type="text" id="search-input" placeholder='Skill, Technology, Project...' autoComplete='off' />
            </label>
        </div>)
}