import React, { useState } from "react";
import { Link } from 'react-router-dom';

import Logo from '../icons/logotipe.svg?react';
import Inst from '../icons/insta.svg?react'
import Tg from '../icons/tg.svg?react'
import Tt from '../icons/tt.svg?react'

import '../Header.scss'

function HeaderUk() {
    return(
        <>
            <header className="header">

                <div className="header__container">
                    <div className="header__logo">
                        <Logo className="logo"></Logo>
                    </div>

                    <div className="header__nav">
                        <h1 className="header__nav-title">White Store</h1>
                        <div className="header__nav-wrap">
                            <Link className="header__nav-wrap-item">About Us</Link>
                            <Link className="header__nav-wrap-item">Order system</Link>
                            <Link className="header__nav-wrap-item">Support</Link>
                        </div>
                    </div>

                    <div className="header__menu">
                        <div className="header__navBar">
                            <a href="https://www.instagram.com/whiite_st0re?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className="header__navBar-btn"><Inst className="header__navBar-icon"></Inst></a>
                            <a href="https://t.me/Whitestore2024" target="_blank" className="header__navBar-btn"><Tg className="header__navBar-icon"></Tg></a>
                            <a href="https://www.tiktok.com/@__white_store__?_t=ZN-8smojjKb55K&_r=1" target="_blank" className="header__navBar-btn"><Tt className="header__navBar-icon"></Tt></a>
                        </div>
                    </div>
                </div>

            </header>
        </>
        )
}


export default HeaderUk;