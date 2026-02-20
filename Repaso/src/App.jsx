import './App.css'
import ListaCarrito from './assets/components/Ecommerce/ListaCarrito'
import ListaProductos from './assets/components/Ecommerce/ListaProductos'
import { DataProvider } from './assets/components/Ecommerce/DataContext'
import { useEffect, useState } from 'react'

function App() {

  return (
    <>
      <div className='row'>
        <DataProvider>
          <ListaProductos/>
          <ListaCarrito/>
        </DataProvider>
        
      </div>
    </>
  )
} 

export default App
