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


  const formatarData = (data) => {
    const partes = data.slice(0, 10).split("-");
    return `${partes[2]}/${partes[1]}/${partes[0]}`;
  };

  const dataNascimentoFormatada = formatarData(usuario.nascimento);

  console.log(dataNascimentoFormatada)
  
  return(
    <div>
      <input type="hidden" name="id" value={id}/>


        <h1>Olá, meu nome é {usuario.nome}</h1>
        <h3>Nasci do dia {dataNascimentoFormatada}</h3>
        <h3>Meu email para contato é {usuario.email}</h3>
      
    </div>
  )
}

export default Perfil