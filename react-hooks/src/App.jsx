import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import Exercicio01 from './exercicios/01'
import Exercício02 from './exercicios/02'
import Exercício03 from './exercicios/03'

function App() {

  return (
    <>
     <h1> Exercícios React Hooks </h1>
     <BrowserRouter>
      <ul>
        <li> <Link to="/01"> Exercício 01</Link> </li>
        <li> <Link to="/02"> Exercício 02</Link> </li>
        <li> <Link to="/03"> Exercício 03</Link> </li>
      </ul>
      <hr />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/01" element={<Exercicio01/>} />
          <Route path="/02" element={<Exercício02/>} />
          <Route path="/03" element={<Exercício03/>} />
        </Routes> 
     </BrowserRouter>
    </>
  )
}

export default App
