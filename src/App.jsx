import { useState, useEffect, Suspense } from 'react'
import { Route, Routes, BrowserRouter, useLocation } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Events from './components/Events'
import EventsDetails from './components/EventsDetails'
import Gallery from './components/Gallery'
import Overview from './components/Overview'
import Footer from './components/Footer'
import NonTechEvents from './components/NonTechEvents'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Suspense>
                <Header />
                <Events />
                <Gallery /> 
                <Overview /> 
                <Footer />
                </Suspense>
              </div>
            }
          />
          <Route path="/event/:id" element={<EventsDetails />} />
          <Route path="/events/:id" element={<NonTechEvents />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App