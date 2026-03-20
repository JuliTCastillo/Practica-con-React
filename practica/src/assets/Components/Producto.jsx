import React from 'react'
import Contents from './Contents';
import { useNavigate, useParams } from 'react-router-dom';

const Producto = () => {

  const params = useParams();

  return (
    <>
        <h1>{params.nombreParam}</h1>
        <Contents/>

    </>
  )
}

export default Producto;