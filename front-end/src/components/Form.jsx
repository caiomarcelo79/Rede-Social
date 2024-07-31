import axios from "axios"
import { useState } from "react"
import { redirect } from "react-router-dom"

function Form() {



  const [objUsuario, setObjUsuario] = useState({
    nome: "",
    email: ""
  })

  function Digito(e) {
    setObjUsuario({...objUsuario, [e.target.name]: e.target.value})
  }

  function Submit(e){
    e.preventDefault()
    axios.post("http://localhost:8080/usuarios/registro", objUsuario)
    location.reload()
    
  }

  return (
    <div>
      <h1>Formulario</h1>
      <h2>{JSON.stringify(objUsuario)}</h2>
      <form onSubmit={Submit}>
        <label>Nome: </label>
          <input onChange={Digito} type="text" name="nome"/>
        <label>Email: </label>
          <input onChange={Digito} type="email" name="email"/>
        <br/><br/>
        <button type="submit" >Confirme</button>
      </form>

    </div>
  )
}

export default Form
