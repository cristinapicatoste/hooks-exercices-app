import React from 'react'
import { useForm } from '../../hook/useForm';

export const FormCustomHook = () => {
    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValues;

    const handleSubmit = () => {
        console.log(formValues);
    }

    return (
        <>
            <h1>Form Custom Hook</h1>
            <div>
                <input type="text" name="name" autoComplete="off" value={name} onChange={handleInputChange} placeholder="Name" />
                <input type="text" name="email" autoComplete="off" value={email} onChange={handleInputChange} placeholder="E-mail" />
                <input type="password" name="password" autoComplete="off" value={password} onChange={handleInputChange} placeholder="Password" />
                <button type="submit" onClick={handleSubmit} className="blue">Guardar</button>
            </div>
        </>
    )
}
