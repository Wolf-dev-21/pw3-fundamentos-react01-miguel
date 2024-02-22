

function Livro({titulo, autor, imagem, descricao}){
    return(
        <div className="App-card-book">  

        <h3>{titulo}</h3>
  
          <p>{autor}</p>
  
        <img src={imagem}  width={150} alt='Capa do livro as cavernas de Isaac Asimov'/>
  
          <p>
            {descricao}
          </p>
  
      </div>
    );
}

export default Livro;