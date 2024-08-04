import axios from "axios"
import { useState, useEffect } from "react"


function Usuarios() {

  const [usuario, setUsuario] = useState([])
  var valor = null

  useEffect(()=>{
    axios.get("http://localhost:8080/usuarios")
    .then((response)=>{
      setUsuario(response.data)
      console.log(response.data)
    })
  }, [usuario])


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
          
          <hr/>
        </div>
      ))}
    </div>
  )
}

export default Usuarios