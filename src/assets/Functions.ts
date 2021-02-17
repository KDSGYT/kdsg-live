import { firestore as DB } from '../Util/firebase';

/**
 * 
 * @param setState function to set the global state for project information
 * Retrieved the data from firebase cloud store and push the data to the global state
 */
export async function getProjects(setState: any) {
    const projects = DB.collection('projects');//collection in which documents are saved
    const projectsData = await projects.get();// Retrieve the data using get.
    const newState: any = []//empty array to save the received data

    projectsData.forEach(doc => newState.push(doc.data())) //push the projects to state object
    setState(newState)
    return;// make sure the function ends all times
}

/**
* Retrieve data from DB for the list of agencies
* @param setState Sets data for agencies
*/
export async function getSkillData(setState: any) {
    const newState: any = []
    const data = await DB.collection('skills').get()
    await data.forEach((doc) => newState.push(doc.data()))
    await setState(newState)
    return;
}