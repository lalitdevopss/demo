import React from 'react'
import { Link } from 'react-router-dom'

const WrPeople = () => {
    return (
        <>
            <a href="javascript:void(0)"><span>People</span></a>
            <div className="mega-menu-container">
                <div className="mega-menu">
                    <div className="wrapper">
                        <h3>People</h3>
                        <p>We are a company with a purpose, a purpose of creating meaningful human experiences for our 152+K associates.</p>
                        <ul className="tab-submenu">
                            <li><Link to={'/'}>HRNxt</Link></li>
                            <li><Link to={'/'}>Culture</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WrPeople