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
                                <button>✨ MORE ABOUT ME ✨</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='hero-image'>
                    <img src={Profile} alt='photo of me' />
                </div>
            </div>
            <hr />
            <div className='experience'>
                <h2>Experience</h2>
                <div className='card-container'>
                    <div className='card'>
                        <div className='time'>
                            <p>JAN 2024 - PRESENT</p>
                        </div>
                        <div className='desciption'>
                            <h5>Women in Computing at Cornell</h5>
                            <p className='role'>Corporate Relations Director</p>
                            <p>Establish and maintain corporate relationships, communicating with recruiters to establish sponsorships and collaborate on events.</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='time'>
                            <p>OCT 2023 - PRESENT</p>
                        </div>
                        <div className='desciption'>
                            <h5>Cornell University Unmanned Air Systems</h5>
                            <p className='role'>Autopilot Software Engineer</p>
                            <p>Work on a full-stack ground control station application for an autonomous aircraft.</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='time'>
                            <p>OCT 2023 - PRESENT</p>
                        </div>
                        <div className='desciption'>
                            <h5>Cornell Rapid Prototyping Lab</h5>
                            <p className='role'>Laboratory Technician</p>
                            <p>Advise professors, research groups, project teams, and undergraduate students on manufacturing prototype designs using 3D printers and laser cutters.</p>
                        </div>
                    </div>
                </div>
                <Link to='experience'>
                    <button>✨ VIEW ALL EXPERIENCE ✨</button>
                </Link>
            </div>
            <hr />
            <div className='portfolio'>
                <h2>Portfolio</h2>
                <div className='project-container'>
                    <div className='project'>
                        <img className='project-thumbnail' />
                        <div className='project-text'>
                            <h5>Title</h5>
                            <p>Description</p>
                        </div>
                    </div>
                    <div className='project'>
                        <img className='project-thumbnail' />
                        <div className='project-text'>
                            <h5>Title</h5>
                            <p>Description</p>
                        </div>
                    </div>
                    <div className='project'>
                        <img className='project-thumbnail' />
                        <div className='project-text'>
                            <h5>Title</h5>
                            <p>Description</p>
                        </div>
                    </div>
                </div>
                <Link to='portfolio'>
                    <button>✨ VIEW FULL PORTFOLIO ✨</button>
                </Link>
            </div>
        </div>
    )
}

export default Home