import * as React from 'react';
import { SearchContext } from '../../assets/SearchContext';
import './SearchBar.scss';
/**
 * Search bar to search through all the projects.
 * Approach:
 * Tags: 
 * Serial Number: It will be using bubblesort to sort all the projects.
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

    const [moveLines, setMoveLines] = React.useState<Boolean>(false)
    const leftLine: any = React.useRef(null)
    const rightLine: any = React.useRef(null)
    const inputField: any = React.useRef(null)
    const searchText:any = React.useContext(SearchContext)
    // const [searchText.searchTerm, searchText.setSearchTerm] = React.useState<String>('')
    // Funciton to change the state focus on input changes
    function changeState(): void { setMoveLines((prevState) => prevState ? false : true) }
    React.useEffect(() => {

        if (moveLines) {
            rightLine.current.style.width = "0";
            leftLine.current.style.width = "0";
        } else if (moveLines === false) {
            rightLine.current.style.width = "50%";
            leftLine.current.style.width = "50%";

        }
    }, [moveLines])


 

    /**
     * update the state with the value from the search input.
     */
    function handleChange() { 
        searchText.setSearchTerm(inputField.current.value) 
    }

    return (
        <div id="search-bar">
            <label htmlFor="search-input">
                <div id="image-container">
                    <img src="https://img.icons8.com/ios-filled/50/000000/search--v1.png" />

                </div>

                <div ref={leftLine} id="left-line"></div>
                <input onChange={handleChange} ref={inputField} onFocus={changeState} onBlur={changeState} type="text" id="search-input" placeholder='Skill, Technology, Project...' autoComplete='off' />
                <div ref={rightLine} id="right-line"></div>
            </label>
        </div>)
}
