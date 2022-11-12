import React from 'react'
import "../styles/main.css"
import banner from "../assets/banner.webp"

const Home = () => {
    return (
        <div className='home'>
            <div className='landing-banner'>
                <img src={banner} alt="banner" />
                <div>
                    <h1>WE GIVE <br/>YOU RIGHT.</h1>
                    <button>Get Assessment</button>
                </div>
            </div>
        </div>
    )
}

export default Home
