import React from 'react'
import Hamburger_Container from './container/Hamburger_Container'
import Search from './search/Search'
import WrNxtNow from './wrapper/WrNxtNow'
import WrIndustries from './wrapper/WrIndustries'
import WrServices from './wrapper/WrServices'
import WrInnovation from './wrapper/WrInnovation'
import WrDigitAll from './wrapper/WrDigitAll'
import WrPeople from './wrapper/WrPeople'
import Logo from '../../../src/images/techm-logo.png'
import { Link, Outlet } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <header>
                <Hamburger_Container />
                <Search />
                <div className="wrapper">
                    <div className="logo">
                        <Link to={'/'}><img src={Logo} alt="" /></Link>
                    </div>
                    <div className="top-rt">
                        <div className="lang">
                            <div className="lg-bx">
                            </div>
                        </div>
                        <div className="st-srch">
                            <span></span>
                        </div>
                        <div className="menu"></div>
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <WrNxtNow />
                            </li>
                            <li>
                                <WrIndustries />
                            </li>
                            <li>
                                <WrServices />
                            </li>
                            <li>
                                <WrInnovation />
                            </li>
                            <li>
                                <WrDigitAll />
                            </li>
                            <li>
                                <WrPeople />
                            </li>
                        </ul>
                    </nav>
                </div>
            </header >
            <Outlet />
        </>

    )
}

export default Header