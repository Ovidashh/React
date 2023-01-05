import React from 'react'
import { Link} from "react-router-dom";
import BannerImg from '../assets/4k.jpg';
import '../styles/Home.css';

function Home() {
    return (
        <div className='home' style={{ backgroundImage: `url(${BannerImg})`  }}>
            <div className='headerContainer'>
                <h1>Ovi's Garage</h1>
                <p>CARS WITH ANGER PROBLEMS</p>
                <Link to ="/menu">
                    <button> See all our sick cars </button>

                </Link>
            </div>
        </div>
    )
}

export default Home;
