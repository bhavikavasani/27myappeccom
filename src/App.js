import { Route, Routes, useNavigate, createSearchParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import Allproducts from './pages/Allproducts';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import { useCart } from './components/context/cart';

function App() {
  const navigate =useNavigate();
  const {cartItemCount} = useCart();

  const onSearch = (searchQuery) => {
    navigate(`/?${createSearchParams({ q: searchQuery })}`)
  }
  return (
    <>
      <Navbar onSearch={onSearch} cartItemCount={cartItemCount()}/>
      <Routes>
        <Route path='/' element={<Allproducts />} ></Route>
        <Route path='/product/:productId' element={<ProductDetails />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='*' element={<NotFound />} ></Route>
      </Routes>
    </>
  );
}

export default App;
