import React,{useEffect} from 'react'
import Intro from '../components/Intro'

export default function Home() {

    useEffect(() => {
        document.title = "TextUtils - Home"
    },[])

    return (
        <div className="pt-12 lg:pt-16">
            <Intro />
        </div>
    )
}
