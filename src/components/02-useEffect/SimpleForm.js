import React, { useEffect, useState } from 'react';
// import TextField from '@material-ui/core/TextField';

export const SimpleForm = () => {
    const [formState, setFormState] = useState({ name: '', email: '' })
    const { name, email } = formState;

    useEffect(() => console.log('hey'), []);
    useEffect(() => console.log('formState cambió'), [formState]);
    useEffect(() => console.log('email actualizado'), [email]);


    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
        console.log(formState)
    }

    return (
        <>
            <h1>UseEffect</h1>
            {/* <TextField type="text" name="name" autoComplete="off" value={name} onChange={handleInputChange} id="standard-basic" label="Name" />
            <TextField type="text" name="email" autoComplete="off" value={email} onChange={handleInputChange} id="standard-basic" label="E-mail" /> */}
            <input type="text" name="name" autoComplete="off" value={name} onChange={handleInputChange} placeholder="Name" />
            <input type="text" name="email" autoComplete="off" value={email} onChange={handleInputChange} placeholder="E-mail" />
        </>
    )
}
