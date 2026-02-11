import React, { useState } from 'react'

const MiFormulario = () => {
    //capturando datos del formulario
    const [formData, setFormData] = useState({
        username: "",
        email: "ejemplo@ejemplo.com",
        password: ""
    })
    //Guardamos los errores que pueden tener determinado campo
    const [formErrors, setFormErrors] = useState({
        username: "",
        email: "",
        password: ""
    })
    
    const procesarCambio = (evento) =>{
        //recibimos valores: value, name (del control)
        const {name, value} = evento.target;
        setFormData((prevFormData) => ({
            ...prevFormData, //tomamos el valor actual del FormData
            [name]:value, //Solo modificamos el valor que se modifico
        }))

        setFormErrors((prevFormErrors) => ({
            ...prevFormErrors, //tomamos el valor actual del FormData
            [name]:'', //Solo modificamos el valor que se modifico
        }))
    }

    const procesarSubmit = (evento) =>{
        evento.preventDefault(); //Desactiva la recarga de la pagina
        console.log(formData);

        const newFormErrors = {};

        if(formData.username.trim() === ""){
            newFormErrors.username = 'El usuario es requerido.';
        };
        if(formData.email.trim() === ""){
            newFormErrors.email = 'El email es requerido.';
        };
        if(formData.password.trim() === ""){
            newFormErrors.password = 'El contraseña es requerido.';
        };

        if(Object.keys(newFormErrors).length > 0 ){
            setFormErrors(newFormErrors);
        } else{
            console.log('Formulario valido. Datos:', formData);
            
        }
    }

    return (
        <div>
            <h2>Gestion de eventos y formularios</h2>
            <form autoComplete='off' onSubmit={procesarSubmit}>
                <div>
                    <label className="form-label" htmlFor="username">Usuario: </label>
                    <input 
                        className="form-control" 
                        type="text" 
                        id='username' 
                        name='username' 
                        value={formData.username}
                        onChange={procesarCambio}
                    />
                    {formErrors.username && <span class="badge text-bg-danger">{formErrors.username}</span>}
                </div>
                <div>
                    <label className="form-label" htmlFor="email">Email: </label>
                    <input 
                        className="form-control" 
                        type="text" 
                        id='email' 
                        name='email' 
                        value={formData.email}
                        onChange={procesarCambio}
                    />
                    {formErrors.email && <span class="badge text-bg-danger">{formErrors.email}</span>}

                </div>
                <div>
                    <label className="form-label" htmlFor="password">Contraseña: </label>
                    <input 
                        className="form-control" 
                        type="password" 
                        id='password' 
                        name='password' 
                        value={formData.password}
                        onChange={procesarCambio}
                    />
                    {formErrors.password && <span class="badge text-bg-danger">{formErrors.password}</span>}

                </div>
                <br />
                <button type='submit'>Enviar!</button>
            </form>
        </div>
    )
}

export default MiFormulario;