import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Perfil from './components/Perfil.jsx'
import axios from 'axios'



var usuario = []


axios.get("http://localhost:8080/usuarios")
.then((response)=>{
  usuario = response.data
  console.log(response.data)
})

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    usuario.map((u)=>({
      path: `/perfil/${u.id}`,
      element: <Perfil/>
    }))
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
