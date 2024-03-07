import logo from './logo.svg';
import './App.css';
import { useState } from 'react';




function App() {

  const [nome , setNome] = useState();

  const [email , setEmail] = useState('');

  const [senha , setSenha] = useState('');




  function cadastro(event){
    event.preventDefault();
    // alert('monke cadastred')
    alert(`NOME: ${nome} EMAIL: ${email} SENHA: ${senha}`)
  }



  return (
    <div className="App">
      <h1>Formulario de cadastro</h1>
      <form onSubmit={cadastro} className='form'>
        <input 
          type='text' 
          required 
          placeholder='Digite teu nome'
          value={nome}
          onChange={(event)=>{setNome(event.target.value)}}
          >
          
        </input>
        <input 
          type='text' 
          required 
          placeholder='Digite teu email'
          value={email}
          onChange={(event)=>{setEmail(event.target.value)}}
          >
        </input>
        <input 
          type='text' 
          required 
          placeholder='Digite sua senha'
          value={senha}
          onChange={(event)=>{setSenha(event.target.value)}}
          >
        </input>
        <button type='submit'>
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default App;
