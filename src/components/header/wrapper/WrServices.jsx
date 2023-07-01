import React from 'react'
import { Link } from 'react-router-dom'

const WrServices = () => {
    return (
        <>
            <a href="javascript:void(0)"><span>Services</span></a>
            <div className="mega-menu-container st-menu">
                <div className="mega-menu">
                    <div className="wrapper">
                        <h3>Services</h3>
                        <p>Our service offerings are aligned to the changing world of our customers. Our portfolio of services range from designing strategy to delivering impact.</p>
                        <ul>
                            <li><Link to={'/infrancloud'}>Infrastructure and Cloud Services</Link></li>
                            <li><Link to={'/designservice'}>Experience Design Services</Link> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WrServices