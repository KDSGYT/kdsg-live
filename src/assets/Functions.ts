import { firestore as DB, photoStore } from '../Util/firebase';

const projects = DB.collection('projects');

export async function getProjects(setState: any) {
    const projectsData = await projects.get();
    let newState: any = []
    projectsData.forEach(doc => {
        newState.push(doc.data())
    })
    newState = newState.map((doc: any) => {
        const manipulatedObject = {...doc};
        getProjectImage(doc.projectImage)
            .then(result => manipulatedObject.projectImage = result)
            .catch(err => console.log('error'))
        return manipulatedObject
    })
    setState(newState)
    // return;
}

export async function getProjectImage(link: string) {
    const gsRef = photoStore.refFromURL(link)
    let imageUrl;
    await gsRef.getDownloadURL()
        .then(url => {
            // console.log(url)
            return imageUrl = url;
        })
        .catch(function (error) {

            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            console.log('error')
            switch (error.code) {
                case 'storage/object-not-found':
                    // File doesn't exist
                    break;

                case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    break;

                case 'storage/canceled':
                    // User canceled the upload
                    break;
            }
        });
    return imageUrl;
}