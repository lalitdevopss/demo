import React from 'react'
import Logo from '../../images/techm-logo.png'

const Footer = () => {
    return (
        <footer>
            <div className="ft-box-1">
                <div className="wrapper">
                    <div className="row">
                        <div className="ft-col-1">
                            <div className="ft-title">
                                Sustainability
                                <br />Highlights
                            </div>
                            <div className="ft-txt-1">
                                Awarded 'Gold CSR Rating - 2021' by EcoVadis
                            </div>
                            <a href="sustainability/index.html" className="linkBtn-wht"><span>Know More</span></a>
                        </div>
                        <div className="ft-col-1 ft-col-2 float-right">
                            <div className="ft-title">
                                Energy Saved
                            </div>
                            <div className="ft-img" style={{ display: 'block' }}>
                                <div className="enrg clsSavings"></div>
                                <div className="kwh">kW</div>
                            </div>
                            <div className="foot-subtext" style={{ display: 'block', float: 'left' }}>
                                We are one of the world's first website to run on Dark Mode by default.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ft-box-2">
                <div className="wrapper">
                    <div className="ft-logo">
                        <a href="index.html"><img src={Logo} alt="" /></a>
                    </div>
                    <div className="ft-links">
                        <div className="country-dropdown common-form-style">
                            <select id="dynamic_select">
                                <option value="">Select Region</option>
                                <option value="/au-nz/anz/">Australia and New Zealand</option>
                                <option value="/pt-br/">Brazil</option>
                                <option value="/fi-fi/">Finland</option>
                                <option value="/fr-fr/">France</option>
                                <option value="/de-de/">Germany</option>
                                <option value="/en-in/">Global (UK &amp; US)</option>
                                <option value="/ja-jp/">Japan</option>
                            </select>
                        </div>
                        <div className="socail">
                            <a target="_blank" className="fa fa-facebook" aria-hidden="true" href="https://www.facebook.com/TechMahindra"></a>
                            <a target="_blank" className="fa fa-twitter" aria-hidden="true" href="https://twitter.com/Tech_Mahindra"></a>
                            <a target="_blank" className="fa fa-linkedin" aria-hidden="true" href="https://www.linkedin.com/company/tech-mahindra"></a>
                            <a target="_blank" className="fa fa-youtube-play" aria-hidden="true" href="https://www.youtube.com/user/techmahindra09"></a>
                            <a target="_blank" className="fa fa-instagram" aria-hidden="true" href="https://www.instagram.com/techmahindra_official/"></a>
                        </div>
                        <div className="ft-right">
                            <a href="terms-of-use/index.html">Terms of Use</a>
                            <a href="privacy-policy/index.html">Privacy Policy</a>
                            <a href="cookie-policy/index.html" target="_blank">Cookie Policy</a>
                        </div>
                    </div>
                    <div className="copy">Copyright © Tech Mahindra Limited. All Rights Reserved</div>
                </div>
            </div>
        </footer >
    )
}

export default Footer