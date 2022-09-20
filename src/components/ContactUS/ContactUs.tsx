import firebase from 'firebase';
import * as React from 'react';
import './ContactUs.scss'
import SocialMediaLinks from './SocialMediaLinks/SocialMediaLinks';

export default function ContactUs() {
    const [data, setData] = React.useState<any>({})
    React.useEffect(() => {
        firebase
            .firestore()
            .collection("/contact-us")
            .get()
            .then(res => res.forEach(item => {
                console.log(item.data());
                setData(item.data());
            }))
        return () => {
        }
    }, [])

    return (
        <section id="contact-us" className="display-flex">
            <h2>Contact Me</h2>
            <p>{data.contactUsText}</p>
            <h3><a href={`mailto: ${data.email}`}>{data.email}</a></h3>
            <SocialMediaLinks />
        </section>
    )
}