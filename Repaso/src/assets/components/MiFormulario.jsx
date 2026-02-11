import React from 'react'

const MiFormulario = () => {
    //metodo para capturar los datos
    const activarPorEvento = () => {
        console.log('evento activado')
    }

    return (
        <div>
            <h2>Gestion de eventos y formularios</h2>
            <form autoComplete='off'>
                <div>
                    <label className="form-label" htmlFor="username">Usuario: </label>
                    <input className="form-control" type="text" id='username' name='username' />
                </div>
                <div>
                    <label className="form-label" htmlFor="email">Email: </label>
                    <input className="form-control" type="text" id='email' name='email' />
                </div>
                <div>
                    <label className="form-label" htmlFor="password" onClick={activarPorEvento} >Contraseña: </label>
                    <input className="form-control" type="password" id='password' name='password' />
                </div>
                <br />
                <button type='submit'>Enviar!</button>
            </form>
        </div>
    )
}

export default MiFormulario;