import React, { useState } from "react";

import  Carusel  from '../../Carusel/Carusel'

import Logo from '../icons/logotipe.svg?react';
import Inst from '../icons/insta.svg?react'
import Tg from '../icons/tg.svg?react'
import Tt from '../icons/tt.svg?react'
import Bul from '../icons/bul.svg?react'
import Uk from '../icons/uk.svg?react'
import Ukr from '../icons/ukr.svg?react'

import '../Header.scss'

function HeaderBg() {
    return(
        <>
            <header className="header">

                <div className="header__container">
                    <div className="header__logo">
                        <Logo className="logo"></Logo>
                    </div>

                    <Carusel></Carusel>

                    <div className="header__menu">
                        <div className="header__navBar">
                            <a href="https://www.instagram.com/whiite_st0re?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className="header__navBar-btn"><Inst className="header__navBar-icon"></Inst></a>
                            <a href="https://t.me/Whitestore2024" target="_blank" className="header__navBar-btn"><Tg className="header__navBar-icon"></Tg></a>
                            <a href="/" target="_blank" className="header__navBar-btn"><Tt className="header__navBar-icon"></Tt></a>
                        </div>
                        <div className="header__menu__lang">
                            <a href="white-store" className="header__menu__lang-item">UKR <Ukr className="header__menu__lang-icon"></Ukr></a>
                            <a href="white-storeuk" className="header__menu__lang-item">ENG <Uk className="header__menu__lang-icon"></Uk></a>
                        </div>
                    </div>
                </div>

            </header>
        </>
        )
}


export default HeaderBg;