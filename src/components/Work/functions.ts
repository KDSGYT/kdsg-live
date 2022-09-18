import firebase from "gatsby-plugin-firebase";
// NOTE: integreate an feature so that users can visit my youtube channel to see me live coding.
// NOTE: remove the extra links from the code so we don't ahve to provide any extra information when creating an entry.
/**
 * Update the local state ot update the data for the component.
 */
export function getFinishedProjects(ComponentState:any):void {
    firebase
            .firestore()
            .collection("/projects")
            .get()
            .then(res => {
                ComponentState(() => {
                    const newState:any = [];
                    res.forEach(item => newState.push(item.data()));
                    return newState;
                })
            });
    return ;
}

// export function getUnderDevelopmentProjects(ComponentState):void{
//     firebase
//             .firestore()
//             .collection("/unfinishedProjects")
//             .get()
//             .then(res => {
//                 ComponentState(() => {
//                     const newState:any = [];
//                     res.forEach(item => newState.push(item.data()));
//                     return newState;
//                 })
//             });
//     return ;
// }