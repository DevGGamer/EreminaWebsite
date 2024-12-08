import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Attention from './Components/Attention/Attention';
import Header from './Components/Header/Header';
import AboutPage from './Pages/About/AboutPage'
import ServicesPage from './Pages/Services/ServicesPage'
import GuidesPage from './Pages/Guides/GuidesPage'
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <Attention attentionText={"Сайт находится на этапе разработки!"}/>
      <div id='app'>
        <BrowserRouter>
            <Header />
            <main>
              <Routes>
                  <Route path='/' element={<AboutPage />}></Route>
                  <Route path='/services' element={<ServicesPage />}></Route>
                  <Route path='/guides' element={<GuidesPage />}></Route>
              </Routes>
            </main>

            <Footer />
        </BrowserRouter>
        </div>
      </>
  )
}

export default App
