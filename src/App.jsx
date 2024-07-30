import './App.css';
import NavBar from './NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
   <div>
    <BrowserRouter>
      <NavBar />
       
       <Routes>
        <Route path='/' element={<ItemListContainer saludo={"bienvenidos a mi ecommerce"} />} />
        <Route path='/categoria/:idCategoria' element={<ItemListContainer saludo={"bienvenidos a mi ecommerce"} />} />
        <Route path='/detalle/:idProducto' element={<ItemDetailContainer />} />
       </Routes>
       
    </BrowserRouter>
    
   </div>
  )
}

export default App
