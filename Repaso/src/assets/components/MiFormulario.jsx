import React from 'react'

const MiFormulario = () => {
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
                    <label className="form-label" htmlFor="username" onMouseOver={activarPorEvento}>Usuario: </label>
                    <input className="form-control" type="text" id='username' name='username' onClick={inputActivado}/>
                </div>
                <div>
                    <label className="form-label" htmlFor="email">Email: </label>
                    <input className="form-control" type="text" id='email' name='email' onChange={activarPorEvento}/>
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