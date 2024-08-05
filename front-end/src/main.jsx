import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Perfil from './components/Perfil.jsx'
import axios from 'axios'




const Root = ()=>{

  const [usuario, setUsuario] = useState([])
  const [router, setRouter] = useState(null)


  useEffect(()=>{
    axios.get("http://localhost:8080/usuarios")
    .then((response)=>{
      setUsuario(response.data)
      console.log(response.data)
    })
  }, [])

  useEffect(() => {

    if (usuario.length >= 0) {
      var routes = [

        {
          path: "/",
          element: <App/>,
        },
        ...usuario.map((u)=>({
          path: `/perfil/${u.id}`,
          element: <Perfil/>,
        })),
      ]

      const newRouter = createBrowserRouter(routes)
      setRouter(newRouter)
    }

  }, [usuario]);

  if (!router) {
    return <div>Carregando...</div>;
  }
  return(
    <RouterProvider router={router}/>
  )

}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root/>
  </React.StrictMode>,
)
