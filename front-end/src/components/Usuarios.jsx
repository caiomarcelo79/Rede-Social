import axios from "axios"
import { useState, useEffect } from "react"
import { redirect } from "react-router-dom"


function Usuarios() {

  const [usuario, setUsuario] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:8080/usuarios")
    .then((response)=>{
      setUsuario(response.data)
      console.log(response.data)
    })
  }, [])

  function Acessar() {
    window.location.href = {p.id}
  }



  
  return(
    <div>
      <h1>Usuarios</h1>
      {usuario.map((p, index)=>(
        <div key={index}>
          <h3>{index+1}# Nome: {p.nome}</h3>
          <h4><button onClick={Acessar}>Ver perfil</button></h4>
          <hr/>
        </div>
      ))}
    </div>
  )
}

export default Usuarios