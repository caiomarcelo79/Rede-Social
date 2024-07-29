function App() {

  return (
    <div>
      <h1>Formulario teste</h1>
      <form action="/registro/pessoa" method="post">
        <label>Nome: </label>
          <input type="text" name="nome"/>
        <label>Idade: </label>
          <input type="number" name="idade"/>
        <br/><br/>
        <button type="submit">Confirme</button>
      </form>
    </div>
  )
}

export default App
