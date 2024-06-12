import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import Star from '../../assets/star.svg'
import Person from '../../assets/person.svg'
import Briefcase from '../../assets/briefcase.svg'
import Folder from '../../assets/file-directory.svg'
import LinkedIn from '../../assets/linkedin.svg'
import GitHub from '../../assets/github.svg'
import './index.css'

const Sidebar = () => {
    const [currentPage, setCurrentPage] = useState('home');

    return (
        <div className='navbar'>
            <div className='logo'>
                <Link className='logo-img' to='/' onClick={() => setCurrentPage('home')}>
                    <img src={Logo} alt='logo png' />
                    <h3>Meg Isohata</h3>
                </Link>
            </div>
            <nav>
                <NavLink to='/' className={currentPage === 'home' ? 'active' : ''} onClick={() => setCurrentPage('home')}>
                    <img src={Star} />
                    Home
                </NavLink>
                <NavLink to='/about' className={currentPage === 'about' ? 'active' : ''} onClick={() => setCurrentPage('about')}>
                    <img src={Person} />
                    About
                </NavLink>
                <NavLink to='/experience' className={currentPage === 'experience' ? 'active' : ''} onClick={() => setCurrentPage('experience')}>
                    <img src={Briefcase} />
                    Experience
                </NavLink>
                <NavLink to='/portfolio' className={currentPage === 'portfolio' ? 'active' : ''} onClick={() => setCurrentPage('portfolio')}>
                    <img src={Folder} />   
                    Portfolio
                </NavLink>
            </nav>
            <div className='socials'>
                <a href='https://www.linkedin.com/in/meg-isohata/' target='_blank'><img src={LinkedIn} /></a>
                <a href='https://github.com/megisohata' target='_blank'><img src={GitHub} /></a>
            </div>
        </div>
    )
}

export default Sidebar