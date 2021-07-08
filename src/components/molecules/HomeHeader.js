import React from 'react';
import background from "../../img/assets/Home-Hero-Image.jpg";
import decoration2 from "../../img/assets/Decoration.svg";
import {Link, NavLink} from "react-router-dom";


const HomeHeader = () => {
    // obsługa przycisku wylogowania
    const handleButtonLogout = ({ target }) => {
        sessionStorage.clear();
        alert('Wylogowano');
    }

    return (
        <section>
            <div className="container">
                <div className="home1__container">
                    <img src={background} className="home1__img" alt="img1"/>
                </div>
                <nav className="header-log">
                    <ul className="header__list">
                        <NavLink to="/Login">
                            <a className="header__link1" id="zaloguj_button">Zaloguj się</a>
                        </NavLink>
                        <li className="header__el"><a href="" className="header__link2"  onClick={handleButtonLogout}>Wyloguj się</a></li>
                    </ul>
                </nav>
                <div className="menu__container">
                    <nav className="menu">
                        <ul className="menu__list">
                            <li className="menu__el"><a href="" className="menu__link1" >Start</a></li>
                            <li className="menu__el"><a href="#steps__container" className="menu__link" >O co chodzi?</a></li>
                            <li className="menu__el"><a href="#about_text1" className="menu__link" >O nas</a></li>
                            <li className="menu__el"><a href="#help__el1" className="menu__link" >Fundacje i organizacje</a></li>
                            <li className="menu__el"><a href="#footer__text1" className="menu__link" >Kontakt </a></li>
                        </ul>
                    </nav>
                </div>

            <div className="home__container" id="home__container">

                <div className="home2__container">
                    <p className="home__text1">Zacznij pomagać!</p>
                    <p className="home__text2">Oddaj niechciane rzeczy w zaufane ręce. </p>
                    <img src={decoration2} className="home2__img" alt="img2"/>
                    <ul className="home__list">
                        <li className="home__el"><a href="/Login" className="home__text3">ODDAJ RZECZY</a></li>
                        <li className="home__el"><a href="/Login" className="home__text4">ZORGANIZUJ ZBIÓRKĘ</a></li>
                    </ul>
                </div>
            </div>
            </div>
        </section>

    );


};


export default HomeHeader;
