import React from 'react'
import HCInnovation from './HCInnovation'
import HCOurBrands from './HCOurBrands'
import HCPeople from './HCPeople'
import HCServices from './HCServices'
import HCWhoWeAre from './HCWhoWeAre'
import HCIndustries from './HCIndustries'
import HCDigitAll from './HCDigitAll'

const Hamburger_Container = () => {
    return (
        <div className="hamburger-container">
            <div className="main-links">
                <div className="menu-close">close</div>
                <div className="menu-logo">
                    <a href="index.html"><img src="../../files.techmahindra.com/static/img/techm-logo.png" alt="" /></a>
                </div>
                <ul className="mainmenu">
                    <li className="mb-nav">
                        <a href="javascript:void(0)"><span>NXT.NOW™ </span></a>
                        <div className="mega-menu-container st-menu">
                            <div className="mega-menu">
                                <div className="wrapper">
                                    <p>Tech Mahindra has built pioneering systems, processes, and solutions, for enterprise clients across the globe. Sitting at the intersection of change, it’s time to deliver the future of industries.
                                        Introducing NXT.NOW™ .</p>
                                    <a className="linkBtn adBtn gap" href="nxt-now/index.html">Know more<span></span></a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="mb-nav">
                        <HCIndustries />
                    </li>
                    <li className="mb-nav">
                        <HCServices />
                    </li>
                    <li className="mb-nav">
                        <HCInnovation />
                    </li>
                    <li className="mb-nav">
                        <HCDigitAll />
                    </li>
                    <li className="mb-nav">
                        <HCPeople />
                    </li>
                    <li>
                        <HCWhoWeAre />
                    </li>
                    <li>
                        <HCOurBrands />
                    </li>
                    <li>
                        <a href="portfolio-companies/index.html">Portfolio Companies</a></li>
                    <li>
                        <a href="investors/index.html">Investors</a>
                    </li>
                    <li>
                        <a href="alliance/index.html">Partner Ecosystem</a>
                    </li>
                    <li>
                        <a href="sustainability/index.html">Sustainability</a>
                    </li>
                    <li>
                        <a href="covid-19-response/index.html">Our COVID-19 Response</a>
                    </li>
                    <li>
                        <a href="contact-us/index.html">Contact Us</a>
                    </li>
                </ul>
                <div className="menu-social">
                    <a target="_blank" className="fa fa-facebook" aria-hidden="true" href="https://www.facebook.com/TechMahindra"></a>
                    <a target="_blank" className="fa fa-twitter" aria-hidden="true" href="https://twitter.com/Tech_Mahindra"></a>
                    <a target="_blank" className="fa fa-linkedin" aria-hidden="true" href="https://www.linkedin.com/company/tech-mahindra"></a>
                    <a target="_blank" className="fa fa-youtube-play" aria-hidden="true" href="https://www.youtube.com/user/techmahindra09"></a>
                    <a target="_blank" className="fa fa-instagram" aria-hidden="true" href="https://www.instagram.com/techmahindra_official/"></a>
                </div>
            </div>
        </div>
    )
}

export default Hamburger_Container