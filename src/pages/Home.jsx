import React,{useEffect} from 'react'

// components of Home Page
import Intro from '../components/Intro'
import Features from '../components/Features'
import Clock from '../components/Clock'
import Pricing from '../components/Pricing'
import Demo from '../components/Demo'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {

    useEffect(() => {
        document.title = "TextUtils - Home";
    },[])

    return (
        <div className="pt-10 sm:pt-12 lg:pt-16">
            <Navbar />
            <Intro />
            <Clock />
            <Demo />
            <Features />
            <Pricing />
            <Contact />
            <Footer />
        </div>
    )
}
