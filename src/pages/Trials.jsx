import React, { useEffect, useState } from 'react'

// importing the required components
import Footer from '../components/Footer';
import Upgrade from '../components/Upgrade';
import TrialNav from '../components/TrialNav';
import NoteEdit from '../components/NoteEdit';

export default function Trials() {

    // regarding changing of the page while redirection
    useEffect(() => {
        document.title = "TextUtils - Trials";
    }, [])

    const [userMode,setUserMode] = useState('read');

    return (
        <>
            <Upgrade />
            <TrialNav userMode={userMode} />
            <NoteEdit setUserMode={setUserMode} />
            <Footer />
        </>
    )
}
