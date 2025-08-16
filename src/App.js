import './App.css'
import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import LoadingMessages from './components/LoadingMessages'

const Main = lazy(() => import('./pages/Main'));
const Redirect = lazy(() => import('./pages/Redirect'));
const About = lazy(() => import('./pages/About'));
const Paypal = lazy(() => import('./pages/Paypal'));
const Signup = lazy(() => import('./pages/Signup'));
const Signin = lazy(() => import('./pages/Signin'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <>
    <BrowserRouter>    
    <Layout>
      <Suspense fallback={<LoadingMessages />}>
        <Routes>
          <Route path='/:id' element={<Redirect />} />
          <Route path='/' element={<Main />} />
          <Route path='/about' element={<About />} />
          <Route path='/sendmecoffeemoney' element={<Paypal />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
    </BrowserRouter>
    </>
  );
}

export default App;
