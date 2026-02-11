import React from 'react'

const ComponenteB = ({textbtn, onClick}) => {
    const miValor = "Datos desde el componente hijo"
    
    return (
        <button onClick={()=>{onClick(miValor)}}>{textbtn}</button>
    )
}

export default ComponenteB;