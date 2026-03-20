import './App.css'
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom"
import Home from './assets/Components/Home'
import About from "./assets/Components/About"
import Producto from './assets/Components/Producto'

function App() {

  return (
    <BrowserRouter>
      <nav class="navbar navbar-expand-lg bg-body-tertiary"> {/* Navegacion visual */}
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Practica</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                {/* <Link> se usa para dirigir - <NavLink> hace lo mismo pero no marca en que seccion estamos */}
                <NavLink class="nav-link" to='/'> Home </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to='/about'> About </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        <Routes> {/* Configuracion de rutas */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/producto/:nombreParam" element={<Producto />} />
        </Routes>
      </div>

    </BrowserRouter>
  )
}

export default App
