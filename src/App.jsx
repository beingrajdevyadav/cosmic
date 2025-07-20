import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import Cosmic from './pages/Cosmic'
import PageNotFound from './pages/PageNotFound'
import { useSelector } from 'react-redux'
import ScrollToTop from './components/ScrollToTop'

function App() {

  const username = useSelector((state)=>state.cosmic.username);

  return (
    <>
      <Header />
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/cosmic' element={username? <Cosmic/> : <Home/> } />
        <Route path='*' element={<PageNotFound/> } />
      </Routes>
      <Footer />
    </>
  )
}

export default App
