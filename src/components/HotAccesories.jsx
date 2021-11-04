import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/hotAcceroies.css'
const HotAccesories = () => {
    return (
        <div className='hotAcceroiesMenu'>
            <Link className='hotAcceroiesLink' to='/music' > Music Store</Link>
            <Link className='hotAcceroiesLink' to='/smartdevice' >  Smart Device</Link>
            <Link className='hotAcceroiesLink' to='/home' > Home</Link>
            <Link className='hotAcceroiesLink' to='/lifeStyle' >  Life style</Link>
            <Link className='hotAcceroiesLink' to='/mobileAccessories' >  Mobile Accessories  </Link>
        </div>
    )
}

export default HotAccesories
