import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Solução from "./pages/Solução";
import Contato from "./pages/Contato";
import Doação from "./pages/Doação";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/solucao" element={<Solução/>}/>
        <Route path="/contato" element={<Contato/>}/>
        <Route path="/doacao" element={<Doação/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
