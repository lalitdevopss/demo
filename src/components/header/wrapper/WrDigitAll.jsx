import React from 'react'
import { Link } from 'react-router-dom'

const WrDigitAll = () => {
    return (
        <>
            <a href="javascript:void(0)"><span>DigitAll</span></a>
            <div className="mega-menu-container st-menu">
                <div className="mega-menu">
                    <div className="wrapper">
                        <h3>DigitAll</h3>
                        <p>Our DigitALL philosophy focuses on transforming clients' businesses across Products, Services, Business Models and Reimagined Business Processes; leading to new Revenue Opportunities, Enhanced Customer
                            Experience, Operational Efficiency, Reduced Risk, and a better Society.</p>
                        <ul className="tab-submenu">
                            <li><Link to={'/staregy-design'}>Strategy and Design</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WrDigitAll