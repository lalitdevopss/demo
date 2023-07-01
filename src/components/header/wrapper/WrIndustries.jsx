import React from 'react'
import { Link } from 'react-router-dom'

const WrIndustries = () => {
    return (
        <>
            <a href="javascript:void(0)"><span>Industries</span></a>
            <div className="mega-menu-container">
                <div className="mega-menu">
                    <div className="wrapper">
                        <h3>Industries</h3>
                        <p>As industries converge and new industries emerge, we are re-imagining our strategy, solutions, and platforms as well. Our innovators and thought leaders are in continuing conversations with those who
                            influence and shape the future of industries.</p>
                        <ul>
                            <li><Link to={'/communications'} >Communications</Link></li>
                            <li><Link to={'/mediaent'}>Media & Entertainment</Link> </li>
                            <li><Link to={'/manufacturing'}>Manufacturing</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WrIndustries