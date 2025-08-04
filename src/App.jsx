
// required CSS files regarding some changes
import './App.css'

// components regarding navbar and footer 
import Navbar from './components/Navbar'

// pages regarding different sections
import Home from './pages/Home'

// packages regarding navigation and page routing
import { Routes,Route } from 'react-router-dom'

function App() {

    return (
        <>
           
            {/* Common Navbar regarding page's redirection */}
            <Navbar />

            {/* Routes regarding different pages navigation */}
            <Routes>
                <Route index path="/" element={<Home />} />
            </Routes>

        </>
    )
}

export default App
