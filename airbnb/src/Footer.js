import React from 'react';
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <p>Developed by Ronaldo</p>
            <p>Privacy · Terms · Sitemap · Company Details</p>
        </div>
    )
}

export default React.memo(Footer);