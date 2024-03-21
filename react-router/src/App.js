import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Empresa from './components/Empresa';
import Contato from './components/Contatos';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      
        <Routes>

          <Route path='/' element={<NavBar/>}>

            <Route index element={<Home/>} />
            <Route path='Empresa' element={<Empresa />}></Route>
            <Route path='Contato' element={<Contato />}></Route>

          </Route>

        </Routes>

      </BrowserRouter>

      {/* <Home /> */}
      {/* <Empresa /> */}
      {/* <Contato /> */}
      
    </div>
  );
}

export default App;
