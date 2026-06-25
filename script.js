function converter() {
    let val, n1, n2;

    val = parseInt(document.getElementById("txtopcao").value);
    n1 = parseFloat(document.getElementById("num").value);

    switch (val) {
        case 1:
            n2 = n1 / 5.22;
            resultado.innerHTML ="Resultado U$"+n2.toFixed(2);
            break;

        case 2:
            n2 = n1 / (17/100);
            resultado.innerHTML ="Resultado €"+n2.toFixed(2);
            break;
    }
}