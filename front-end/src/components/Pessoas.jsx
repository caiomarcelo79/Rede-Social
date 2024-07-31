import axios from "axios"
import { useState, useEffect } from "react"


function Pessoas() {

  const [pessoa, setPessoa] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:8080/pessoas")
    .then((response)=>{
      setPessoa(response.data)
      console.log(response.data)
    })
  }, [])



  
  return(
    <div>
      <h1>Pessoas</h1>
      {pessoa.map((p, index)=>(
        <div key={index}>
          <h3>{index+1}# {p.nome} tem {p.idade} anos</h3>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default Pessoas