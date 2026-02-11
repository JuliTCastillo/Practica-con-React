import { useCallback, useState } from 'react';
import '../../App.css'
import ComponenteA from './ComponenteA'
import ComponenteB from './ComponenteB'

function ConstruyendoComponente() {

  const miEmoji = "✈️";
  const textobtn = "Buscar Destino";

  //Creando Estados
  const [mensaje, SetMensaje] = useState("Viajes Aventura")

  const manejarClick =()=>{
    SetMensaje("Lista para viajar")
  }

  const callback = useCallback(
    (datos) => {SetMensaje(datos)}, [mensaje]
  )
  return (
    <>
      <ComponenteA emoji={miEmoji} titulo={mensaje}/>

      <ComponenteB 
        textbtn={textobtn}
        onClick={manejarClick}
      />

      <ComponenteB 
        textbtn={'callback'}
        onClick={callback}
      />
    </>
  )
} 

export default ConstruyendoComponente