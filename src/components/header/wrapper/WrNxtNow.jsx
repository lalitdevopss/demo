import React from 'react'
import { Link } from 'react-router-dom'

const WrNxtNow = () => {
    return (
        <>
            <a href="javascript:void(0)"><span>NXT.NOW™ </span></a>
            <div className="mega-menu-container st-menu">
                <div className="mega-menu">
                    <div className="wrapper">
                        <h3>NXT.NOW™ </h3>
                        <p style={{ marginBottom: '0' }}>Tech Mahindra has built pioneering systems, processes, and solutions, for enterprise clients across the globe. Sitting at the intersection of change, it’s time to deliver the
                            future of industries. Introducing NXT.NOW™.</p>
                        <Link to={'/nxtNow'} className="linkBtn adBtn gap" >Know more</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WrNxtNow