const renderizaCuotas = () => {
    const insertarSelectCuotas = document.querySelector("#cuotas");
    const selectPago = document.querySelector("#selectPago");
    const visa = selectPago.value.includes("Visa");
    const mastercard = selectPago.value.includes("Mastercard");
    if(visa || mastercard){
        insertarSelectCuotas.innerHTML = `
        <h3>Seleccione la cantidad de cuotas</h3>
        <select name="select" id="selectCuotas" required>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
        </select>
        `
    }
    else{
        insertarSelectCuotas.textContent ="";
    }
}

const tomarValores = () => {
    const selectVehiculos = document.querySelector("#selectVehiculos");
    const selectPersonas = document.querySelector("#selectPersonas");
    const selectPago = document.querySelector("#selectPago");
    const selectCuotas = document.querySelector("#selectCuotas") || 0;
    const selectComida = document.querySelector("#selectComida");
    const selectComidaAlternativa = document.querySelector("#selectComidaAlternativa");
    const visa = selectPago.value.includes("Visa");
    const mastercard = selectPago.value.includes("Mastercard");
    const costoFinalHtml = document.querySelector("#costoFinal");
    let costoFinal = Number(selectVehiculos.value) + Number(selectPersonas.value) + Number(selectComida.value)+ Number(selectComidaAlternativa.value);
    if(selectCuotas.value >= 1 && selectCuotas.value <= 3 && visa){
        costoFinal = (costoFinal + (costoFinal * 0.10));
    }
    else if(selectCuotas.value >= 4 && selectCuotas.value <=6 && visa){
        costoFinal = (costoFinal + (costoFinal * 0.25));
    }
    else if(selectCuotas.value >= 7 && selectCuotas.value <= 12 && visa){
        costoFinal = (costoFinal + (costoFinal * 0.35));
    }
    else if(selectCuotas.value >= 1 && selectCuotas.value <= 3 && mastercard){
        costoFinal = (costoFinal + (costoFinal *0.05));
    }
    else if(selectCuotas.value >= 4 && selectCuotas.value <= 6 && mastercard){
        costoFinal = (costoFinal + (costoFinal * 0.10));
    }
    else if(selectCuotas.value >= 7 && selectCuotas.value <= 12 && mastercard){
        costoFinal = (costoFinal + (costoFinal * 0.25));
    }
    costoFinalHtml.innerHTML = `<h3>El costo final es de ${costoFinal} $</h3>`
    console.log("El costo final es de "+costoFinal+"$");
    }
window.onload = () =>{
    const btnAceptar = document.querySelector("#btnAceptar");
    const selectPago1 = document.querySelector("#selectPago");
    selectPago1.addEventListener("change",renderizaCuotas);
    btnAceptar.addEventListener("click",tomarValores);
}