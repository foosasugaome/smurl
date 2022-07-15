import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Main from './pages/Main'
import Redirect from './pages/Redirect';
import About from './pages/About';
import Paypal from './pages/Paypal';

function App() {
  return (
    <>
    <BrowserRouter>    
    <Layout>
      <Routes>
        <Route path='/:id' element={<Redirect />} />
        <Route path='/' element={<Main />} />
        <Route path='/about' element={<About />} />       
        <Route path='/sendmecoffeemoney' element={<Paypal />} />
      </Routes>
    </Layout>
    </BrowserRouter>
    </>
  );
}

export default App;
