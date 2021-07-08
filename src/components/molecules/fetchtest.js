const getData = () => {
    fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
        method: "POST",
        body: JSON.stringify({
            name: "tuWstawićDaneZFormularza",
            email: "test@wp.pl",
            message: "tuWstawićDaneZFormularzatuWstawićDaneZFormularzatuWstawićDaneZFormularzatuWstawićDaneZFormularzatuWstawićDaneZFormularzatuWstawićDaneZFormularzatuWstawićDaneZFormularzatuWstawićDaneZFormularzatuWstawićDaneZFormularzatuWstawićDaneZFormularzatuWstawićDaneZFormularzatuWstawićDaneZFormularzatuWstawićDaneZFormularzatuWstawićDaneZFormularzatuWstawićDaneZFormularzatuWstawićDaneZFormularzatuWstawićDaneZFormularzatuWstawićDaneZFormularzatuWstawićDaneZFormularzatuWstawićDaneZFormularzatuWstawićDaneZFormularzatuWstawićDaneZFormularzatuWstawićDaneZFormularzatuWstawićDaneZFormularzatuWstawićDaneZFormularza"
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

export default getData;