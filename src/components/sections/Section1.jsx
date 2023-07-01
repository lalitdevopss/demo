import React from 'react'
import Img5G from '../../images/home-tech-bets-scroll-banner-5g.jpg'
import AI from '../../images/home-tech-bets-scroll-banner-ai.jpg'
import Cloud from '../../images/home-tech-bets-scroll-banner-cloud.jpg'
import Blockchain from '../../images/home-tech-bets-scroll-banner-blockchain.jpg'
import Cyber from '../../images/home-tech-bets-scroll-banner-csrm.jpg'
import Data from '../../images/home-tech-bets-scroll-banner-da.jpg'

const Section1 = () => {
    return (
        <div className="sec01" style={{ paddingTop: '50px', paddingBottom: "0" }}>
            <div className="st-brd-5g">
                <div className="wrapper samemar">
                    <div className="st-brd-cont">
                        <div className="row">
                            <div className="col-7 aos-init aos-animate" data-aos="fade-down" data-aos-duration="1000">
                                <h2><span>Enter the </span><br /><span className='sec1-1'>5<sup>th</sup> Dimension</span></h2>
                                <div className="st-txt-2">5G is the fuel that will unlock the NXT of everything across industries. Learn how our 5G For Enterprise will supercharge various industries into the future by leveraging the
                                    fifth generation of networks!</div>
                                <div className="forbes">
                                    <a className="linkBtn" href="techmnxt/techbets/5g/index.html">Unlock The NXT.NOW!<span></span></a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-7 aos-init aos-animate" data-aos="fade-down" data-aos-duration="1000">
                                <h2><span>Pervasive </span><br /><span className='sec1'>Artificial Intelligence</span></h2>
                                <div className="st-txt-2">Our Pervasive AI approach enables enterprises to re-design, re-imagine, re-invent themselves to deliver enhanced experiences to their customers.</div>
                                <div className="forbes">
                                    <a className="linkBtn" href="artificial-intelligence/index.html">Unlock The NXT.NOW!<span></span></a>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-7 aos-init aos-animate" data-aos="fade-down" data-aos-duration="1000">
                                <h2><span>Experience the </span><br /><span className='sec1'>NXT on Cloud</span></h2>
                                <div className="st-txt-2">CLOUDNXT.NOW is our comprehensive set of services, solutions and frameworks that help our customers accelerate their cloud journey. </div>
                                <div className="forbes">
                                    <a className="linkBtn" href="infrastructure-and-cloud-services/cloud-nxt/index.html">Unlock The NXT.NOW!<span></span></a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-7 aos-init aos-animate" data-aos="fade-down" data-aos-duration="1000">
                                <h2><span>The </span><br /><span className='sec1'>Block Ecosystem</span></h2>
                                <div className="st-txt-2">At Tech Mahindra, we have architected a comprehensive strategy to position itself as the world’s leading blockchain company. We create industry-leading applications that are
                                    architected on innovation and human excellence to unlock significant value for all stakeholders.</div>
                                <div className="forbes">
                                    <a className="linkBtn" href="techmnxt/techbets/blockchain/index.html">Unlock The NXT.NOW!<span></span></a>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-7 aos-init aos-animate" data-aos="fade-down" data-aos-duration="1000">
                                <h2><span>Securing Business -</span><br /><span className='sec1'> Cyber Security</span></h2>
                                <div className="st-txt-2">Our Enterprise Security and Risk Management Services team—with over 17 years of  experience in cyber security as well as cross industry and cross OEM technologies expertise— act
                                    as a trusted advisor,  consultant, systems integrator, and program project manager.</div>
                                <div className="forbes">
                                    <a className="linkBtn" href="techmnxt/techbets/cyber-security/index.html">Unlock The NXT.NOW!<span></span></a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-7 aos-init aos-animate" data-aos="fade-down" data-aos-duration="1000">
                                <h2><span>Unlock The Power of</span><br /><span className='sec1'> Enterprise Data</span></h2>
                                <div className="st-txt-2">We help our customers derive competitive advantage by generating actionable insights from their data. From large-scale digital transformation programs to smaller sandbox business
                                    analytics initiatives, we help all transform into a truly data driven organization.</div>
                                <div className="forbes">
                                    <a className="linkBtn" href="data-and-analytics.html">Unlock The NXT.NOW!<span></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="str-rotate">
                    <img src={Img5G} />
                    <img src={AI} />
                    <img src={Cloud} />
                    <img src={Blockchain} />
                    <img src={Cyber} />
                    <img src={Data} />
                </div>
            </div>
        </div>
    )
}

export default Section1