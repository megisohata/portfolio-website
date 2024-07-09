import { Link } from 'react-router-dom'
import Profile from '../../assets/profile.png'
import './index.css'

const Home = () => {
    return (
        <div className='home'>
            <div className='hero'>
                <div className='hero-text'>
                    <div className='text-container'>
                        <h1>Hi, I'm Meg!</h1>
                        <h4>Welcome to my website. 🌙</h4>
                        <h3>I am a <span className='underline'>student</span> at Cornell University &</h3>
                        <h3>an aspiring <span className='underline'>software engineer</span>.</h3>
                        <div className='button-container'>
                            <Link to='about'>
                                <button>More about me ✨</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='hero-image'>
                    <img src={Profile} alt='photo of me' />
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Home