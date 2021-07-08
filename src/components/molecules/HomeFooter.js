import React from 'react';
import clothes from "../../img/assets/Background-Contact-Form.jpg";
import decoration from "../../img/assets/Decoration.svg";


function ClickSendEmail(props) {
    const handleButtonClick = ({target}) => {
        target.innerText = "Wysłano";
        alert('Wysłano emaila!');
    }
}

function validateEmail(email) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
        return (true)
    }
    return (false)
}

const HomeFooter = () => {
    const handleButtonSendEmail = ({target}) => {

        // sprawdź imię czy nie ma spacji (czyli np. nie ma dwóch słów)
        if (document.getElementById('name_text').value.indexOf(' ') >= 0) {
            alert('Proszę wpisać imię, bez spacji, tylko jedno imię! ');
            return;
        }
        if (validateEmail(document.getElementById('name_email').value) == false) {
            alert('Proszę poprawnie wpisać adres e-mail!' + document.getElementById('name_email').value);
            document.getElementById('name_email').style.backgroundColor = 'lightblue';
        } else { // adres email ok, sprawdzamy teraz długość wiadomości
            const textarea_email = document.getElementById('message_textarea');
            if (textarea_email.value.length < 120) {
                alert('Za krótka wiadomość! Minimum 120 znaków! ');
            } else {
                // ufff już ok
                getData();
                target.innerText = 'Wysłano!';
                alert('Wysłano email! ');
            }

        }

    }
            //API
    const getData = () => {
        let statusText = "";
        fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
            method: "POST",
            body: JSON.stringify({
                name: document.getElementById("name_text").value,
                email: document.getElementById("name_email").value,
                message: document.getElementById("message_textarea").value,
            }),
            headers: {
                "Content-Type": "application/json"
            }

        })
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (

        <section>
            <div className="footer__container">
                <img src={clothes} className="footer__img1" alt="img"/>
                <div className="footer__el">
                    <p className="footer__text1" id="footer__text1">Skontaktuj się z nami</p>
                    <img src={decoration} className="footer__img2" alt="img"
                         style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/>
                    {/*<form action="GET" name="contactform" onSubmit={handleButtonSendEmail}>*/}
                    <div className="footer__label">

                        <form name="contactform">

                            <div className="footer__lbl1">
                                <label className="footer__top1" htmlFor="name_text">Imię: </label>
                                <input className="footer__top2" type="text" id="name_text" name="name_text" required
                                       placeholder="Wpisz swoje imię... "/>
                            </div>
                            <div className="footer__lbl2">
                                <label className="footer__top3" htmlFor="name_email">E-mail: </label>
                                <input className="footer__top4" type="text" id="name_email" name="name_email" required
                                       placeholder="Podaj email... "/>
                            </div>

                            <div className="footer__lbl3">
                                <label className="footer__top5" htmlFor="message_textarea">Treść wiadomości:</label>
                                <textarea className="footer__top6" id="message_textarea" name="message_textarea"
                                          minlength="120" required placeholder="Napisz treść e-maila"></textarea>
                                {/*<input type="submit" value="Wyślij" />*/}
                            </div>
                            <div className="footer__btn">
                                <button className="footer__btn1" type="button" autofocus
                                        onClick={handleButtonSendEmail}>Wyślij
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default HomeFooter;