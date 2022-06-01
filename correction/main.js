window.addEventListener("load", () => {
    // document.querySelector("#js_submit").addEventListener("click", (e) => console.log(e.currentTarget.value));

    document.querySelector("#js_submit").addEventListener("click", (event) => calcul(event));

    console.log('start js');

});


const calcul = (e) => {
    e.preventDefault();
    console.log('start calcul');

    let number1 = Number(document.querySelector("#js_number1").value);
    let operator = document.querySelector("#js_operator").value;
    let number2 = Number(document.querySelector("#js_number2").value);


    console.log(number1, operator, number2);
    if (!isNaN(number1) && !isNaN(number2)) {
        switch (operator) {
            case "/":
                document.querySelector("#js_result").innerHTML = number1 / number2;
                break;

            case "*":
                document.querySelector("#js_result").innerHTML = number1 * number2;
                break;

            case "+":
                document.querySelector("#js_result").innerHTML = number1 + number2;
                break;

            case "-":
                document.querySelector("#js_result").innerHTML = number1 - number2;

                break;

            default:
                document.querySelector("#js_result").innerHTML = "Erreur";
                break;
        }

    }
}
