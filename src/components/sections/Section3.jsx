import React from 'react'
import TechM from '.././../images/techm-nitin-devendra.jpg'
import Thump from '../../images/thumb-cp-vikram.jpg'
import YIT from '../../images/yit-pr-thumb.jpg'
import Sap from '../../images/sap-sapphire-21.jpg'

const Section3 = () => {
    return (
        <div className="sec03 common-box-padding sf" >
            <div className="">
                <h2 className="txt-cnt">In The News</h2>
                <div className="overview">
                    <div className="trendingHome">
                        <div className="row">
                            <div className="item" data-aos="fade-down" data-aos-duration="1000">
                                <div className="ind-box">
                                    <aside><a href="news/index.html" title="Read all News">News</a></aside>
                                    <img src={TechM} alt="" />
                                    <div className="captBg">
                                        <div className="title">Shri Nitin Gadkari and Shri Devendra Fadnavis Visit Tech Mahindra’s New Digital Delivery Centre in Nagpur</div>
                                        <div className="smtxt">The Hon’ble Union Minister of Road, Transport, and Highways, Shri Nitin Gadkari Ji and the Hon’ble Deputy Chief Minister of Maharashtra, Shri Devendra Fadnavis Ji, visited
                                            Tech Mahindra’s new digital delivery centre in Nagpur</div>
                                        <a className="linkBtn-wht" href="news/shri-nitin-gadkari-devendra-visit-techm-digital-delivery/index.html">
                                            <span>Read More</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="item" data-aos="fade-down" data-aos-duration="1000">
                                <div className="ind-box">
                                    <aside><a href="press-release/index.html" title="Read all Press Releases">Press Release</a></aside>
                                    <img src={Thump} alt="" />
                                    <div className="captBg">
                                        <div className="title">Indosat and Tech Mahindra Launched Center of Excellence Lab</div>
                                        <div className="smtxt">Powered by Google Cloud in Jakarta to Accelerate Nation’s Digital Transformation. CoE lab to leverage Google Cloud’s advanced capabilities to develop innovative solutions
                                            incorporating next-generation technologies like 5G, Edge Computing, Data Analytics, IoT, AR, and VR </div>
                                        <a className="linkBtn-wht" href="yit-corp-selected-techm-strategic-partner-to-drive-business/index.html">
                                            <span>Read More</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="item" data-aos="fade-down" data-aos-duration="1000">
                                <div className="ind-box">
                                    <aside><a href="press-release/index.html" title="Read all Press Releases">Press Release</a></aside>
                                    <img src={YIT} alt="" />
                                    <div className="captBg">
                                        <div className="title">YIT Corporation Selected Tech Mahindra as a Strategic Partner to Drive Business Transformation</div>
                                        <div className="smtxt">Partnership will support YIT's objectives to strengthen digitalisation and data management and improve the company's competitiveness</div>
                                        <a className="linkBtn-wht" href="yit-corp-selected-techm-strategic-partner-to-drive-business/index.html">
                                            <span>Read More</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="item" data-aos="fade-down" data-aos-duration="1000">
                                <div className="ind-box">
                                    <aside><a href="events/index.html" title="View all Events">Event</a></aside>
                                    <img src={Sap} alt="" />
                                    <div className="captBg">
                                        <div className="title">Tech Mahindra is Platinum Plus Sponsor at SAP Sapphire 2023</div>
                                        <div className="smtxt">Join us as we unleash the strategy for unlocking the full potential of your business by enabling you to achieve greater agility through trusted expertise and proven
                                            innovation which will help you stay ahead of the NXT change coming your way!</div>
                                        <a className="linkBtn-wht" href="sapphire-2023/index.html">
                                            <span>Read More</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="qarrow-set">
                            <div className="1arrow-prev"><img src="../../files.techmahindra.com/static/img/nxt/arrow-left-nxt-now.png" /></div>
                            <div className="1arrow-next"><img src="../../files.techmahindra.com/static/img/nxt/arrow-right-nxt-now.png" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section3