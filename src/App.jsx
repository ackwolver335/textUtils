
// required CSS files regarding some changes
import './App.css'

// components regarding navbar and footer 
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Loading from './components/Loading'

// pages regarding different sections
import Home from './pages/Home'

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
        },3000);
        return () => clearTimeout(timer);
    },[])

    // if(loading) return <Loading fadeOut={fadeOut} />
    document.querySelector('body').style.animation = "fadeIn 0.8s ease-in-out";

    return (
        <>

            {/* Common Navbar regarding page's redirection */}
            <Navbar />

            {/* Routes regarding different pages navigation */}
            <Routes>
                <Route index path="/" element={<Home />} />
            </Routes>

            {/* Common footer for every page */}
            <Footer />

        </>
    )
}

export default App
