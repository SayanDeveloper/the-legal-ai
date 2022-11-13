import React from 'react'
import "../styles/main.css"
import banner from "../assets/s2-1.svg"

const Home = () => {
    return (
        <div className='home'>
            <div className='landing-banner'>
                <div>
                    <h2>VERKAUFE DEIN PROBLEM!</h2>
                    <h1>
                        Dein Strom- oder Gasvertrag wurde gekündigt?
                    </h1>
                    <p>
                        Du bist unerwartet beim viel teureren Ersatzversorger gelandet? Lass' Dir das nicht gefallen und sichere Dir Deinen Schadensersatz!  Mehr Infos
                    </p>
                    <button>Jetzt kostenlos anfragen</button>
                </div>
                <img src={banner} alt="banner" />
            </div>
        </div>
    )
}

export default Home
