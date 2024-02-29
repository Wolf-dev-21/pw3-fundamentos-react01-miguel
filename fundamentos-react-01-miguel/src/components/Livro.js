function Livro({dadosJSON}){
    return(
            <>
            {
            dadosJSON.map((Livro)=>(
              <div className="App-card-book">  
                <h3>{Livro.titulo}</h3>
                <p>{Livro.autor}</p>
                <img src={Livro.imagem}  width={150} alt='Capa do livro as cavernas de Isaac Asimov'/>
                <p>
                  {Livro.descricao}
                </p>
              </div>
            ))
              }
            </>
    );
}

export default Livro;