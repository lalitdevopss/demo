import React from 'react'
import Business from '../../images/business.png'
import Experience from '../../images/experience.png'
import Infra from '../../images/infra.png'
import Platform from '../../images/platform.png'

const MediaEnt = () => {
    return (
        <div id="WhatWeServe" className="st-indus-bx-3 common-box-padding samemar">
            <div className="wrapper">
                <div className="st-ind-2">
                    <h2 className="txt-cnt">What We Serve</h2>
                    <div className="txt-cnt com-pad-3">Delivering exponential value to engineering enterprises by collaborating with them across three key tenets</div>
                    <div className="flex-grid flex-hover flex-col-2">
                        <div className="row">
                            <div className="col-3">
                                <div className="in-gery">
                                    <div className="icon"><img src={Business} alt="" /></div>
                                    <div className="st-title">Business.NXT</div>
                                    <p>Deliver and monetize content through next-generation video and business technology</p>
                                    <a className="linkBtn-wht" href="business.nxt/index.html"><span>Know More</span></a>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="in-gery">
                                    <div className="icon"><img src={Experience} alt="" /></div>
                                    <div className="st-title">Experience.NXT</div>
                                    <p>Apply analytics to drive hyper-personalization of content and advertising</p>
                                    <a className="linkBtn-wht" href="experience.nxt/index.html"><span>Know More</span></a>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="in-gery">
                                    <div className="icon"><img src={Platform} alt="" /></div>
                                    <div className="st-title">Platforms.NXT</div>
                                    <p>Helping automate content management</p>
                                    <a className="linkBtn-wht" href="platforms.nxt/index.html"><span>Know More</span></a>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="in-gery">
                                    <div className="icon"><img src={Infra} alt="" /></div>
                                    <div className="st-title">Infra.NXT</div>
                                    <p>Building the network and cloud highways for media companies to improve their mileage</p>
                                    <a className="linkBtn-wht" href="infra.nxt/index.html"><span>Know More</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MediaEnt