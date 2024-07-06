import './App.css'
import NavBar from './NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer'



function App() {

  return (
   <div>
    <NavBar />
    <ItemListContainer saludo={"bienvenidos a mi ecommerce"} />
   </div>
  )
}

export default App
