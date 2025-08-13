import React, { useEffect } from 'react'

// importing the required components
import Footer from '../components/Footer';

export default function Trials() {

    // regarding changing of the page while redirection
    useEffect(() => {
        document.title = "TextUtils - Trials";
    }, [])

    return (
        <>
            <Footer />
        </>
    )
}
