import React, { useEffect } from 'react'

// page's components
import Clock from '../components/Clock'
import AboutIntro from '../components/AboutIntro'
import Count from '../components/Count'
import Story from '../components/Story'
import Values from '../components/Values'
import AboutNav from '../components/AboutNav'
import Join from '../components/Join'
import Footer from '../components/Footer'

export default function About() {

    useEffect(() => {
        document.title = "TextUtils - About";
    },[])

    return (
        <div className="pt-10 sm:pt-12 lg:pt-16">
            <AboutNav />
            <Clock />
            <AboutIntro />
            <Count />
            <Story />
            <Values />
            <Join />
            <Footer />
        </div>
    )
}
