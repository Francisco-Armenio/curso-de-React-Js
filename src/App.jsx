import './App.css';
import NavBar from './NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Cart from './cart/Cart';
import { CartContext } from './context/CartContext';

function App() {

  return (
   <div>
    <BrowserRouter>
    
      <CartProvider>
        <NavBar />
       
       <Routes>
        <Route path='/' element={<ItemListContainer saludo={"bienvenidos a mi ecommerce"} />} />
        <Route path='/categoria/:idCategoria' element={<ItemListContainer saludo={"bienvenidos a mi ecommerce"} />} />
        <Route path='/detalle/:idProducto' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<Cart/>}/>
       </Routes>
      </CartProvider>  
    </BrowserRouter>
    
   </div>
  )
}

export default App
