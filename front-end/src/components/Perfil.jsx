import axios from "axios"
import { useState, useEffect } from "react"


function Perfil() {

  const [usuario, setUsuario] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:8080/usuarios")
    .then((response)=>{
      setUsuario(response.data)
      console.log(response.data)
    })
  }, [])

  
  return(
    <div>
      <h1>Usuarios</h1>
      {usuario.map((p, index)=>(
        <div key={index}>
          <h3>{index+1}# Nome: {p.nome}</h3>
          <h4><a href={p.id}><button>Ver perfil</button></a></h4>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default Perfil