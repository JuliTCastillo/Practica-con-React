import React from 'react'
import ComponenteC from './ComponenteC';

const ComponenteA = ({emoji, titulo}) => {
  return (
    <div>
        <ComponenteC emoji = {emoji}/> {/* Anidacion de componente */}
        <div>{titulo}</div>
    </div>
  )
}         

export default ComponenteA;