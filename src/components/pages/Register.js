import React from 'react';
import decoration from "../../img/assets/Decoration.svg";

function validateEmail(email) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
        return (true)
    }
    return (false)
}

const Register = () => {
    // obsłuba przycisku zarejestruj
    const handleButtonRegister = ({target}) => {

        // zmienna popmocznicza do określenia stanu walidacji
        // domyślnie optymistycznie zakładamy, że wszystko jest poprawnie
        let czyZwalidowanoFormularz = true;

        // pobieramy zawartość kontrolek tekstowych (maskowanych) z hasłąmi
        const password_text = document.getElementById('user_password');
        const password2_text = document.getElementById('user_password2');

        // walidacja poprawności nazwy adresu email
        if (validateEmail(document.getElementById('email_text').value) == false) {
            // niestety adres email nie jest poprawny
            czyZwalidowanoFormularz = false;
            alert('Proszę poprawnie wpisać adres e-mail! ');
            // bonus - kolorowanie kontrolki tekstowej z adresem email
            document.getElementById('email_text').style.backgroundColor = 'lightblue';
            return;
        }

        // jeśli hasło jedno lub drugie (to powtórzone) ma mniej niż 6 znaków
        // wyświetlamy komunikat i też ustawiamy zmienna, o niepoprawnej walidacji
        if ((password_text.value.length < 6) && (password2_text.value.length < 6)) {
            czyZwalidowanoFormularz = false;
            alert('Hasło powinno mieć co najmniej 6 znaków! \nWpisz poprawnie oba hasała!');
            return;
        }
        // jeśli hasła są różne też informujemy użytkownika
        if (password_text.value != password2_text.value) {
            czyZwalidowanoFormularz = false;
            alert('Podane hasła różnią się od siebie!');
            password_text.value = "";
            password2_text.value = "";
            // bonus - ustawiamy tzw. fokus (aktywność) - na kontrolkę z hasłem
            // czyli ustawia kursor klawiatury na polu z hasłem
            password_text.focus();
        }
        // jeśli wszystko ok to komunikat i wracamy na główną stronę
        if (czyZwalidowanoFormularz === true) {
            alert('Wszystko ok! Twoje konto zostało założone.');
            window.location.href = 'http://localhost:3000/';
        }

    }
    return (
        <div className="reg__container">
            <form name="registerForm">
                <div className="reg__all">
                    <p className="reg__txt">Załóż konto</p>
                    <center><img src={decoration} className="login__img1" alt="img"/></center>
                    <div className="reg__all1">
                        <label className="reg__el1" htmlFor="email_text">Email: </label>
                        <input className="reg__el2" type="text" id="email_text" name="email_text"/>
                        <label className="reg__el3" htmlFor="user_password">Hasło: </label>
                        <input className="reg__el4" type="password" id="user_password" name="user_password" required
                               minLength="6"/>
                        <label className="reg__el5" htmlFor="user_password">Powtórz hasło: </label>
                        <input className="reg__el6" type="password" id="user_password2" name="user_password2" required
                               minLength="6"/>
                    </div>
                </div>
                <div className="reg__btn">
                <button className="reg__btn1" type="button" autoFocus onClick={handleButtonRegister}>Zarejestruj się</button>
                </div>
                </form>
        </div>
    );
};

export default Register;