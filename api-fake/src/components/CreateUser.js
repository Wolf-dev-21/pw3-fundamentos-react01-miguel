import { useState } from "react";
import axios from "axios";

function CreateUser(){

    const [name, setName] = useState("");
    const [job, setJob] = useState("");

    function creatUser(e){
        e.preventDefault()
        let user = JSON.stringify({name:name, job:job}); //converte dado para json
       // alert(user);

        //axios aqui
            axios.post('https://reqres.in/api/users',user)
            .then((response)=>{
                console.log(response);
                alert(response);
            })
            .catch((error)=>{
                console.log(error);
                alert(error);
            });
    }

    return(
        <form onSubmit={creatUser} className="form">

            <h1>Formulário de cadastro</h1>

            <input
                type="text"
                placeholder="digite seu nome aqui"
                value={name}
                onChange={(event)=>{setName(event.target.value)}}
            />

<input
                type="text"
                placeholder="digite sea profissão aqui"
                value={job}
                onChange={(event)=>{setJob(event.target.value)}}
            />

            <button type="submit">Cadastrar</button>
        
        </form>
    );
}

export default CreateUser;