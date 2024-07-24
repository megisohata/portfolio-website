import { Outlet } from 'react-router-dom'
import Background from '../Background'
import Sidebar from '../Sidebar'
import './index.css'

const Layout = () => {
    return (
        <div>
            <div className='background'>
                <Background />
            </div>
            <div className='webpage'>
                <div className='navigation-bar'>
                    <Sidebar />
                </div>
                <div className='content'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout