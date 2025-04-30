import React, { useState } from "react";
import { Link } from 'react-router-dom';

import Logo from './icons/new-logo.svg?react';
import Inst from './icons/insta.svg?react'
import Tg from './icons/tg.svg?react'
import Tt from './icons/tt.svg?react'
import Bul from './icons/bul.svg?react'
import Uk from './icons/uk.svg?react'

import './Header.scss'

function Header() {
    return(
        <>
            <header className="header">

                <div className="header__container">
                    <Logo className='header__logo'></Logo>

                    <div className="header__nav">
                        <h1 className="header__nav-title">White Store</h1>
                        <div className="header__nav-wrap">
                            <Link className="header__nav-wrap-item">О нас</Link>
                            <Link className="header__nav-wrap-item">Система заказов</Link>
                            <Link className="header__nav-wrap-item">Поддержка</Link>
                        </div>
                    </div>

                    <div className="header__menu">
                        <div className="header__navBar">
                            <a href="https://www.instagram.com/whiite_st0re?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className="header__navBar-btn"><Inst className="header__navBar-icon"></Inst></a>
                            <a href="https://t.me/Whitestore2024" target="_blank" className="header__navBar-btn"><Tg className="header__navBar-icon"></Tg></a>
                            <a href="https://www.tiktok.com/@__white_store__?_t=ZN-8smojjKb55K&_r=1" target="_blank" className="header__navBar-btn"><Tt className="header__navBar-icon"></Tt></a>
                        </div>
                        <div className="header__menu__lang">
                            <Link to="white-storebg" className="header__menu__lang-item">BUL <Bul className="header__menu__lang-icon"></Bul></Link>
                            <Link to="white-storeuk" className="header__menu__lang-item">ENG <Uk className="header__menu__lang-icon"></Uk></Link>
                        </div>
                    </div>
                </div>

            </header>
        </>
        )
}


export default Header;