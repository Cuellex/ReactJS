import NavBar from './components/navbar/NavBar-inicio'
import ItemListContainer from './components/itemlistcontainer/ItemListContainer'
import { BrowserRouter, Routes, Route} from "react-router-dom"

import './App.css'

function App(){
    return (
      <div>
        <BrowserRouter>
          <NavBar/>

          <Routes>
            <Route path="/" element={<ItemListContainer bienvenida="¡Bienvenidos a este E-commerce sin nombre... por ahora!"/>} />
            <Route path="/category/:idCategory" element={<ItemListContainer/>} />
            <Route path='/detail/:idProduct' element={<itemDetailContainer/>} />
          </Routes>
          
        </BrowserRouter>
      </div>
  )
}

export default App
