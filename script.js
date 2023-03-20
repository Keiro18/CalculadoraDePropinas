
function copiarDatos() {
    
    let cuentaTotal = document.getElementById("cuentaTotal").value;
    let propina = document.getElementById("propina").value;
    let propinaTotal = ((cuentaTotal * propina) / 100);
    let total = parseInt(cuentaTotal) + propinaTotal;

document.getElementById("t1").innerHTML = cuentaTotal;
document.getElementById("t2").innerHTML = propinaTotal;
document.getElementById("t3").innerHTML= total;

}
