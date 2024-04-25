import NavBar from './navbar/NavBar-inicio'
import ItemListContainer from './itemlistcontainer/ItemListContainer'

import './App.css'

function App() {

  return (
    <div>
      <NavBar/>
      <ItemListContainer bienvenida = "¡Bienvenidos a ComercioConFaltaDeImaginacionParaNombres!" />
    </div>
  )
}

export default App
