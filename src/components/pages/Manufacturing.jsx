import React from 'react'
import ManufacturingImg from '../../images/manufacturing.jpg'

const Manufacturing = () => {
    return (
        <div className="inner-slider text-change">
            <div className="inr-slider">
                <div className="item">
                    <div className="caption">
                        <div className="wrapper">
                            <div className="cp-title">Manufacturing</div>
                            <div className="txt">Tech Mahindra is working with 150+ Manufacturing clients globally across Automotive, Aerospace &amp; Defence, Discrete and Process sub-industry segments</div>
                        </div>
                        <img src={ManufacturingImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Manufacturing