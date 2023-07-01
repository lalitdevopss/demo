import React from 'react'
import { Link } from 'react-router-dom'

const WrInnovation = () => {
    return (
        <>
            <a href="javascript:void(0)"><span>Innovation</span></a>
            <div className="mega-menu-container">
                <div className="mega-menu">
                    <div className="wrapper">
                        <h3>Innovation</h3>
                        <p>Our curiosity has led us to break new grounds and nurture a brave new world of innovation.</p>
                        <ul>
                            <li><Link to={'/innovation-overview'}>Overview</Link></li>
                            <li><Link to={'/markers-tab'}>Makers Lab</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WrInnovation