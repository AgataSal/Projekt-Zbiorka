import React from 'react';
import HomeHeader from "../molecules/HomeHeader";
import HomeFooter from "../molecules/HomeFooter";
import getData from "../molecules/fetchtest";
import icon1 from "../../img/assets/Icon-1.svg";
import icon2 from "../../img/assets/Icon-2.svg";
import icon3 from "../../img/assets/Icon-3.svg";
import icon4 from "../../img/assets/Icon-4.svg";
import people from "../../img/assets/People.jpg";
import signature from "../../img/assets/Signature.svg";
import decoration2 from "../../img/assets/Decoration.svg";

const Home = () => {
    getData();

    return (
        <section>
            <HomeHeader/>
            <section>
                <div className="body__container">
                <div className="columns__container" id="columns__container">
                    <div className="column1">
                        <p className="column__nr">10</p>
                        <p className="column__text1">ODDANYCH WORKÓW</p>
                        <p className="column__text2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus autem facilis fugit illo illum itaque, laudantium mollitia natus.</p>
                    </div>
                    <div className="column2">
                        <p className="column__nr">5</p>
                        <p className="column__text1">WSPARTYCH ORGANIZACJI</p>
                        <p className="column__text2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus autem facilis fugit illo illum itaque, laudantium mollitia natus.</p>
                    </div>
                    <div className="column3">
                        <p className="column__nr">7</p>
                        <p className="column__text1">ZORGANIZOWANYCH ZBIÓREK</p>
                        <p className="column__text2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus autem facilis fugit illo illum itaque, laudantium mollitia natus.</p>
                    </div>
                </div>
                <div className="steps__container" id="steps__container">
                    <p className="steps__text">Wystarczą 4 proste kroki</p>
                    <center><img src={decoration2} className="steps__img" alt="img2"/></center>
                </div>
                <div className="section__container">
                <div className="section__column">
                    <center><img src={icon1} className="section__img" alt="img"/></center>
                    <p className="section__text1">Wybierz rzeczy</p>
                    <hr/>
                    <p className="section__text2">ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className="section__column">
                    <center><img src={icon2} className="section__img" alt="img"/></center>
                    <p className="section__text1">Spakuj je</p>
                    <hr/>
                    <p className="section__text2">skorzystaj z worków na śmieci</p>
                </div>
                <div className="section__column">
                    <center><img src={icon3} className="section__img" alt="img"/></center>
                    <p className="section__text1">Zdecyduj komu chcesz pomóc</p>
                    <hr/>
                    <p className="section__text2">wybierz zaufane miejsce</p>
                </div>
                <div className="section__column">
                    <center><img src={icon4} className="section__img" alt="img"/></center>
                    <p className="section__text1">Zamów kuriera</p>
                    <hr/>
                    <p className="section__text2">kurier przyjedzie w dogodnym terminie</p>
                </div>
                </div>
                <div className="devotion__container" id="devotion__container">
                    <a href="/Login" className="devotion__text">ODDAJ RZECZY</a>
                </div>
                <div className="about__container" id="about__container">
                <div className="about__section">
                    <p className="about__text1" id="about_text1">O nas</p>
                    <center><img src={decoration2} className="about__img1" alt="img"/></center>
                    <p className="about__text2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolorem eum, in iste libero molestias nesciunt non nulla quia sed sunt velit veniam! Corporis dignissimos eius impedit iste labore nostrum.</p>
                    <center><img src={signature} className="about__img2" alt="img"/></center>
                </div>
                <div className="about__img3">
                    <center><img src={people} className="about__img4" alt="img"/></center>
                </div>
                </div>
                <div className="help__container">
                    <div className="help__top1">
                        <center><p className="help__el1" id="help__el1">Komu pomagamy?</p></center>
                        <center><img src={decoration2} className="help__img1" alt="img"/></center>
                    </div>
                    <div className="help__top2">
                        <center><a href="" className="help__el2">Fundacjom</a></center>
                        <center><a href="" className="help__el3">Organizacjom pozarządowym</a></center>
                        <center><a href="" className="help__el4">Lokalnym zbiórkom</a></center>
                    </div>
                    <div className="help__top3">
                        <center/> <p className="help__el5">Fundacja – forma prawna organizacji pozarządowej, której istotnym substratem jest kapitał przeznaczony na określony cel oraz statut zawierający reguły dysponowania tym kapitałem.</p>
                        <hr className="help__hr"/>
                        <center/> <p className="help__el5">Organizacja pozarządowa – organizacja działająca na rzecz wybranego interesu i niedziałająca w celu osiągnięcia zysku. W prawie międzynarodowym, w odróżnieniu od organizacji międzyrządowych. </p>
                        <hr className="help__hr"/>
                        <center/> <p className="help__el5">Lokalne Zbiórki dają lokalnym fundacjom, stowarzyszeniom, przedszkolom i szkołom możliwość wypromowania swojej działalności i zebranie środków na projekty ważne dla okolicy oraz jej mieszkańców.</p>
                        <hr className="help__hr"/>
                </div>
                </div>
                </div>
            </section>
            <HomeFooter/>
        </section>
    );
};

export default Home;
