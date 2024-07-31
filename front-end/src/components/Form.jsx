import axios from "axios"
import { useState } from "react"
import { redirect } from "react-router-dom"

function Form() {


  // axios.post("http://localhost:8080/pessoas/registro", )

  const [objPessoa, setObjPessoa] = useState({
    nome: "",
    idade: 0
  })

  function Digito(e) {
    setObjPessoa({...objPessoa, [e.target.name]: e.target.value})
  }

  function Registrar(){
    axios.post("http://localhost:8080/pessoas/registro", objPessoa).then(()=>{
      e.preventDefault()
    }).then(()=>{
      redirect("/")
    })
  }

  return (
    <div>
      <h1>Formulario</h1>
      <h2>{JSON.stringify(objPessoa)}</h2>
      <form>
        <label>Nome: </label>
          <input onChange={Digito} type="text" name="nome"/>
        <label>Idade: </label>
          <input onChange={Digito} type="number" name="idade"/>
        <br/><br/>
        <button onClick={Registrar} >Confirme</button>
      </form>

    </div>
  )
}

export default Form
