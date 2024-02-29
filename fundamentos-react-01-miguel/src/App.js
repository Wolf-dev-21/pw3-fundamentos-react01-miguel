import dadosJSON from './dados.json';
import Livro from './components/Livro';
import './App.css';


function App() {
  return (  //Card para livro
    <div className='App'>
      <Livro dadosJSON={dadosJSON}/>
        
    </div>
  );
}

export default App;
