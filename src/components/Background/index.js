import './index.css'

const Background = () => {
    return (
        <div className='blob-bg'>
            <svg xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
                        <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                </defs>
            </svg>
            <div className='blob-container'>
                <div className='blob1'></div>
                <div className='blob2'></div>
                <div className='blob3'></div>
                <div className='blob4'></div>
                <div className='blob5'></div>
                <div className='blob6'></div>
            </div>
        </div>
    )
}

export default Background