import './App.css';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Login from './Pages/Login/Login';
import Experts from './Pages/Experts/Experts';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Register from './Pages/Login/Register/Register';
import Checkout from './Pages/Checkout/Checkout';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';

function App() {
  return (
    <div className='mb-0'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>Home</Route>
        <Route path='/service/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path='/about' element={<About></About>}>About</Route>
        <Route path='/services' element={<Services></Services>}>Services</Route>
        <Route path='/experts' element={<Experts></Experts>}></Route>
        <Route path='/login' element={<Login></Login>}>Login</Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
      </Routes>


      <Footer></Footer>
    </div>
  );
}

export default App;
