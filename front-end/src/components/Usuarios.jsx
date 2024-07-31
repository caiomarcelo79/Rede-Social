import axios from "axios"
import { useState, useEffect } from "react"


function Usuarios() {

  const [usuario, setUsuario] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:8080/usuario")
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
          <h3>{index+1}# {p.nome} tem {p.email} anos</h3>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default Usuarios