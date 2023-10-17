import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Main from './pages/Main'
import Redirect from './pages/Redirect';
import About from './pages/About';
import Paypal from './pages/Paypal';
import Signup from './pages/Signup';
import Signin from './pages/Signin';

function App() {
  return (
    <>
    <BrowserRouter>    
    <Layout>
      <Routes>
        <Route path='/:id' element={<Redirect />} />
        <Route path='/' element={<About />} />
        <Route path='/about' element={<About />} />       
        <Route path='/sendmecoffeemoney' element={<Paypal />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
      </Routes>
    </Layout>
    </BrowserRouter>
    </>
  );
}

export default App;
