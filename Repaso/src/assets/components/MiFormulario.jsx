import React, { useState } from 'react'

const MiFormulario = () => {
    //capturando datos del formulario
    const [formData, setFormData] = useState({
        username: "",
        email: "ejemplo@ejemplo.com",
        password: ""
    })

    //metodo para capturar los datos
    const activarPorEvento = (evento) => {
        console.log('evento activado', evento.type);
    }

    const inputActivado = (evento) => {
        evento.stopPropagation();
        console.log('input activado', evento.type);
    }

    const formularioActivado = (evento) => {
        evento.stopPropagation();
        console.log('formulario activado', evento.type);
    }

    return (
        <div>
            <h2>Gestion de eventos y formularios</h2>
            <form autoComplete='off' onClick={formularioActivado}>
                <div>
                    <label className="form-label" htmlFor="username">Usuario: </label>
                    <input className="form-control" type="text" id='username' name='username' value={formData.username}/>
                </div>
                <div>
                    <label className="form-label" htmlFor="email">Email: </label>
                    <input className="form-control" type="text" id='email' name='email' value={formData.email}/>
                </div>
                <div>
                    <label className="form-label" htmlFor="password">Contraseña: </label>
                    <input className="form-control" type="password" id='password' name='password' value={formData.password}/>
                </div>
                <br />
                <button type='submit'>Enviar!</button>
            </form>
        </div>
    )
}

export default MiFormulario;