import React, { useState, useRef } from 'react';
import './Contact.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Contact = () => {
    return (
        <section id="contact">
            <Form />
        </section>
    )
}

const Form = () => {


    const name: any = useRef("")
    const message: any = useRef("")
    const subject: any = useRef("")

    const [state, setState] = useState()

    function handleSubmit(event: any) {
        event.preventDefault()
        window.open(state)
        // window.location.href = state;

    }
    function handleChange() {
        let nameValue: string = name.current.value;
        let subjectValue: string = subject.current.value;
        let messageValue: string = message.current.value;
        // console.log(nameValue)
        const link:any = `mailto:kdsgyt@gmail.com?cc=${nameValue}&subject=${subjectValue}&body=${messageValue}`
        setState(link)
    }

    return (
        <form onSubmit={handleSubmit} id="contact-form" noValidate autoComplete="off">
            <div id="name-fields">
                <TextField
                    id="name"
                    label="Name"
                    variant="outlined"
                    // ref={name}
                    inputRef={name}
                    onChange={handleChange}
                    className={"color"}
                />
                <TextField
                    id="subject"
                    label="Subject"
                    variant="outlined"
                    inputRef={subject}
                    onChange={handleChange}

                />
            </div>
            <TextField
                id="message"
                label="Message"
                multiline
                variant="outlined"
                rows={6}
                inputRef={message}
                onChange={handleChange}
            />
            <Button

                id="submit-button"
                variant="contained"
                color="primary"
                type={"submit"}
            >Send</Button>
        </form>
    )
}

export default Contact