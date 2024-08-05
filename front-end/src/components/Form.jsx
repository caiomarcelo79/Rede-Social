import axios from "axios"
import { useState } from "react"


function Form() {



  const [objUsuario, setObjUsuario] = useState([])

  function Digito(e) {
    setObjUsuario({...objUsuario, [e.target.name]: e.target.value})
  }

  function Submit(e){
    e.preventDefault()
    axios.post("http://localhost:8080/usuarios/registro", objUsuario)
    
  }

  return (
    <div>
      <h1>Formulário</h1>
      <h3>{JSON.stringify(objUsuario)}</h3>
      <form onSubmit={Submit}>
        <label htmlFor="nickname">Nickname: </label>
          <input onChange={Digito} type="text" name="nickname"/>
          <br/><br/>
        <label htmlFor="nome">Nome: </label>
          <input onChange={Digito} type="text" name="nome"/>
          <br/><br/>
        <label htmlFor="email">Email: </label>
          <input onChange={Digito} type="email" name="email"/>
          <br/><br/>
        <label htmlFor="nascimento">Data de Nascimento: </label>
          <input onChange={Digito} type="date" name="nascimento"/>
        <br/><br/><br/>
        <button type="submit" >Confirme</button>
      </form>

    </div>
  )
}

export default Form
