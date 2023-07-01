import React from 'react'
import Overview from '../../images/overview-image.jpg'

const Communications = () => {
    return (
        <div id="Overview" className="st-indus-bx-1 common-box-padding samemar" >
            <div className="wrapper">
                <div className="st-ind-1">
                    <div className="row">
                        <div className="col-8">
                            <div className="st-inds-1">
                                <h2>Building Integrated Customer Experiences in the Telco Space</h2>
                                <p>With an array of service offerings for Communication Service Providers (CSPs), Telecom Equipment Manufacturers (TEMs) and Independent Software Vendors (ISVs), Tech Mahindra is a chosen transformation partner for several leading wireline, wireless and broadband operators in Europe, Asia-Pacific and North America. Our offerings are based on 3 Mega Trends.</p>
                                <br />
                                <div className="st-title">The 3 Mega trends are:</div>
                                <ul>
                                    <li>5G Revolution</li>
                                    <li>Customer of Tomorrow</li>
                                    <li>Telco Media Convergence</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="img-round">
                                <img src={Overview} alt="" />
                            </div>
                        </div>
                        <div className="clr"></div>

                        <div className="">
                            <div className="col-5">
                                <div className="st-ind">Working with 12/ Top 20 Wireless CSPs</div>
                            </div>
                            <div className="col-5">
                                <div className="st-ind">Helping transform 3/ Top 3 CSPs in Europe</div>
                            </div>
                            <div className="col-5">
                                <div className="st-ind">Involved with 5/ Top 5 TEMs</div>
                            </div>
                            <div className="col-5">
                                <div className="st-ind">Transforming 2/ Top 4 CSPs in India</div>
                            </div>
                        </div>
                        <div className="clr"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Communications