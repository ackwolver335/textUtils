
// required CSS files regarding some changes
import './App.css'

// components regarding navbar and footer 
import Footer from './components/Footer'
import Loading from './components/Loading'

// pages regarding different sections
import Home from './pages/Home'
import About from './pages/About'
import Trials from './pages/Trials'
import NotFound from './pages/NotFound'

// packages regarding navigation and page routing
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'

function App() {

    const [loading,setLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => setLoading(false),700)
        },2500);
        return () => clearTimeout(timer);
    },[])

    // regarding page loading animation
    if(loading) return <Loading fadeOut={fadeOut} />
    document.querySelector('body').style.animation = "fadeIn 0.6s ease-in-out";

    return (
        <>

            {/* Routes regarding different pages navigation */}
            <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/trials" element={<Trials />} />
                <Route path="*" element={<NotFound />} />
            </Routes>

        </>
    )
}

export default App
