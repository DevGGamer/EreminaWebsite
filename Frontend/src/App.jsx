import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Header from './Components/Header/Header';
import AboutPage from './Pages/About/AboutPage'
import ServicesPage from './Pages/Services/ServicesPage'
import GuidesPage from './Pages/Guides/GuidesPage'
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
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
