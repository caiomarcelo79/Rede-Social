import axios from "axios"
import { useState, useEffect } from "react"
import { redirect } from "react-router-dom"


function Usuarios() {

  const [usuario, setUsuario] = useState([])
  var valor = null

  useEffect(()=>{
    axios.get("http://localhost:8080/usuarios")
    .then((response)=>{
      setUsuario(response.data)
      console.log(response.data)
    })
  }, [])


  const Acessar = ((id)=>{
    window.location.href = ("/perfil/"+id)
    valor = id
    console.log("esse eh o valor: "+valor)
    return valor
  })

  console.log(valor)

  
  return(
    <div>
      <h1>Usuarios</h1>
      {usuario.map((u, index)=>(
        <div key={index}>
          <h3>{index+1}# Nome: {u.nome}</h3>
          <h4><button onClick={() => Acessar(u.id)}>Ver perfil</button></h4>
          <a href="perfil">a</a>
          
          <hr/>
        </div>
      ))}
    </div>
  )
}

export default Usuarios