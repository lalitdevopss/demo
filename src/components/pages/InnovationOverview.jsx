import React from 'react'
import Innovation from '../../images/innovation-overview.jpg'

const InnovationOverview = () => {
    return (
        <>
            <div className="st-inov-box6">
                <div className="wrapper">
                    <div className="ind-width">
                        <h2 className="name-withhead">Innovation <span>Mapping the future with curiosity</span> </h2>
                        <div className="img-box img-brd-rd">
                            <video className="dekstop-video" muted="" controls="" loop="" autoplay="" playsinline="">
                                <source src="https://files.techmahindra.com/static/video/innovation-driven.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div className="st-0">
                            <p><span>C</span>uriosity drives the world, in forms big and small. It impacts us all from driving the human story forward to touching new frontiers. It’s this child-like curiosity that is behind every big invention. This curiosity helps us drive new frontiers in business innovation and impacts society at large.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="st-inov-box7">
                <div className="wrapper">
                    <div className="row">
                        <div className="col-8">
                            <h2>TechMahindra’s Address for Innovation</h2>
                            <div className="lab">

                                <div className="hamburger-tab innertabs">

                                    <ul className="resp-tabs-list hor_1">
                                        <li>MISSION</li>
                                        <li>VISION</li>
                                    </ul>

                                    <div className="resp-tabs-container hor_1">

                                        <div className="comn-cont">
                                            <div className="fix-height">
                                                <p>Our mission is to build smart machines of the future. These smart machines include solving intelligence at its primal level and then applying that intelligence to products and IPs.</p>
                                                <p>Our mission includes solving AI, and it’s an approach to a practical commercial model to be used for the company and industry at large.</p>
                                            </div>
                                            <a href="../makers-lab/index.html" className="linkBtn-wht brd-rd"><span>Explore</span></a>


                                        </div>
                                        <div className="comn-cont">
                                            <div className="fix-height">
                                                <p>The vision of Makers lab is to connect with people and simplify their lives by creating experiences. We connect with academia, businesses, and governments across the world to bring about a positive change in their lives by using cutting edge technologies.</p>
                                            </div>
                                            <a href="../makers-lab/index.html" className="linkBtn-wht brd-rd"><span>Explore</span></a>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>
                        <div className="col-6">
                            <a href="../makers-lab/index.html">
                                <img src={Innovation} alt="" /></a>
                        </div>
                        <p>Our mission is to build smart machines of the future. These smart machines include</p>
                        <p>solving intelligence at its primal level and then applying that intelligence to products and</p>
                        <p>IPs.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InnovationOverview