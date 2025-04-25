import { useState , useEffect , lazy } from 'react';
import { createRoutesFromElements , createBrowserRouter , Route , RouterProvider , Outlet } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
const Navbar = lazy (() => import('./Components/Navbar'));
const Home = lazy ( () => import ('./Pages/Home'));
const About = lazy ( () => import ('./Pages/About'));
const Signin = lazy ( () => import ('./Pages/Signin'));
const Signup = lazy ( () => import ('./Pages/Signup'));
const Contact = lazy ( () => import ('./Pages/Contact'));
const Cart = lazy ( () => import ('./Pages/Cart'));
const Favourait = lazy ( () => import ('./Pages/Favourait'));
const Notfound = lazy ( () => import ('./Pages/Notfound'));
const Footer = lazy ( () => import ('./Components/Footer'));
import { Api } from './Data_Api/Api';
import './App.css';

const Layout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}


const App = () => {
  const [loading , setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(()=>{setLoading(false)},3000)
  },[])
  const router = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>} loader={Api}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/favourait' element={<Favourait/>}/>
        <Route path='/notfound' element={<Notfound/>}/>
      </Route>
    </Route>
  ));
  return (
    <div>
      {loading ? <div className='h-screen bg-white flex justify-center items-center'><BeatLoader size={50} color='red'/></div> :
        <RouterProvider router={router}/>}
    </div>
  )
}

export default App