function compute() {
    // Obtener valores de campos
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    // Calcular interés
    var interest = principal * years * rate / 100;

    // Sumar años al año actual
    var year = new Date().getFullYear() + parseInt(years);

    // Validar que la cantidad sea positiva
    if (principal <= 0) {
        alert('Enter a positive number');
        document.getElementById("principal").focus();
        return;
    }

    document.getElementById("result").innerHTML=
    "If you deposit \<b\>" + principal
    + "\</b\>,\<br\>at an interest rate of \<b\>" + rate
    + "%\</b\>\<br\>You will receive an amount of \<b\>" + interest
    + "\</b\>,\<br\>in the year <b>" + year + "\</b\>\<br\>";
}

function updateRate() {
    // Actualizar el texto con el valor del rango
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}
        