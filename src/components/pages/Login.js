import React from 'react';
import decoration from "../../img/assets/Decoration.svg"

function validateEmail(email) {

    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
        return (true)
    }
    return (false)
}

const Login = () => {
    const handleButtonLogin = ({target}) => {

        // sprawdzenie czy login nie ma spacji np. dwa słowa obok siebie
        if (document.getElementById('login_text').value.indexOf(' ') >= 0) {
            alert('Proszę wpisać login, bez spacji! ');
            document.getElementById('login_text').focus();
            return;
        }
        // walidacja poprawności adresu e-mail
        if (validateEmail(document.getElementById('login_text').value) == false) {
            alert('Proszę poprawnie wpisać login (e-mail)! ');
            document.getElementById('login_text').style.backgroundColor = 'lightblue';
            return;
        }
        // sprawdzwczenie czy pole nie jest puste
        if (document.getElementById('login_text').value == '') {
            document.getElementById('login_text').style.backgroundColor = 'lightblue';
            alert('Proszę wpisać login! ');
            document.getElementById('login_text').focus();
            return;
        }
        // hasło poiwnno też mieć 6 znaków conajmniej
        const password_text = document.getElementById('user_password');
        if (password_text.value.length < 6) {
            alert('Hasło powinno mieć co najmniej 6 znaków! ');
            return;
        } else {
            // zalogowanie
            sessionStorage.setItem("userName", document.getElementById('login_text').value);
            window.location.href = 'http://localhost:3000/';
        }

    }


    return (
        <div className="login__container">

            <form name="loginForm">
                <div className="login__all">
                    <p className="login__txt">Zaloguj się</p>
                    <center><img src={decoration} className="login__img1" alt="img"/></center>
                    <div className="login__all1">
                        <label className="login__el1" htmlFor="login_text">Email </label>
                        <input className="login__el2" type="text" id="login_text" name="login_text" required
                               placeholder="Wpisz emaila..."/>
                        <label className="login__el3" htmlFor="user_password">Hasło </label>
                        <input className="login__el4" type="password" id="user_password" name="user_password" required
                               minlength="6" required placeholder="Wpisz hasło..."/>
                    </div>
                </div>
                <div className="login__btn">
                    <a href="/Register" className="login__reg">Załóż konto</a>
                    <br/>
                    <br/>
                    <button className="login__btn1" type="button" autoFocus onClick={handleButtonLogin}>Zaloguj się
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;