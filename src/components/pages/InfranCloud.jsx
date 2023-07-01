import React from 'react'
import InfraCloud from '../../images/infra-cloud.png'

const InfranCloud = () => {
    return (
        <div id="overview" className="st-indus-bx-1 samemar" style={{ paddingTop: '50px' }}>
            <div className="wrapper">
                <div className="st-ind-1 brd-btm-0">
                    <div className="row">
                        <div className="col-8">
                            <div className="st-inds-1">
                                <h2>Unlocking the NxT in Infrastructure Services</h2>
                                <p>Tech Mahindra helps enterprises accelerate their digital transformation with our comprehensive suite of offerings that covers the entire IT infrastructure stack. With our platform-enabled solutions powered by AI and Automation, we help enterprises accelerate their journey to a digital future. Our focus is on helping organizations develop a future ready infrastructure aligned to their core business needs.</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="img-round">
                                <img src={InfraCloud} alt="" />
                            </div>
                        </div>
                        <div className="clr"></div>
                        <div className="top-gap flex-grid-1">
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-5">
                                        <div className="st-ind">Deep Industry and System Integrator experience over 22+ years</div>
                                    </div>
                                    <div className="col-5">
                                        <div className="st-ind">Supporting 250+ active clients across 90+ countries</div>
                                    </div>
                                    <div className="col-5">
                                        <div className="st-ind">6200+ trained and certified professionals</div>
                                    </div>
                                    <div className="col-5">
                                        <div className="st-ind">Manage 750,000+ Infrastructure Assets and over 320,000 end users</div>
                                    </div>
                                    <div className="col-5">
                                        <div className="st-ind">Strong Alliance ecosystem across technology providers</div>
                                    </div>
                                    <div className="col-5">
                                        <div className="st-ind">Proven solution accelerators leveraging AI and Analytics to help enterprises extract maximum performance from their infrastructure assets</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfranCloud