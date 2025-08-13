import React from 'react'

// page's components
import Clock from '../components/Clock'
import AboutIntro from '../components/AboutIntro'
import Count from '../components/Count'
import Story from '../components/Story'

export default function About() {
    return (
        <div className="pt-10 sm:pt-12 lg:pt-16">
            <Clock />
            <AboutIntro />
            <Count />
            <Story />
        </div>
    )
}
