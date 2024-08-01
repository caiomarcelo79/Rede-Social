import { Axios } from "axios"
import Form from "./components/Form"
import Usuarios from "./components/Usuarios"
import Perfil from "./components/Perfil"
import { Outlet } from "react-router-dom"

function App() {

  return (
    <div>
      <Form/>
      <Usuarios/>
      <Outlet/>
    </div>
  )
}

export default App
