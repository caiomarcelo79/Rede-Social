import axios from "axios"
import { useEffect, useState } from "react"

function Perfil() {

  const url = window.location.pathname
  const id = parseInt(url.slice(8))
  console.log(id)

  const [resposta, setResposta] = useState(null)

  useEffect(() => {
    axios.get("http://localhost:8080/usuarios/find/"+id)
    .then((response)=>{
      setResposta(response.data)
      console.log(response.data)
    })
  }, []);

  if (!resposta) {
    return <div>Carregando...</div>
  }

  const usuario = resposta.usuario
  

  
  return(
    <div>
      <input type="hidden" name="id" value={id}/>


        <h1>Olá, meu nome é {usuario.nome}</h1>
        <h3>Nasci do dia {usuario.nascimento.trim(10)}</h3>
      
      <h2>{JSON.stringify(usuario)}</h2>
    </div>
  )
}

export default Perfil