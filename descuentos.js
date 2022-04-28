var descuentoCupon = 0

const coupons = [
    "Descuento1",
    "Descuento2",
    "Descuento3",
    " ",
];


function calcularPrecioConDescuento (precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento - descuentoCupon;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultSinDescuento =document.getElementById("ResultSinDescuento");
    resultSinDescuento.innerText = "$" + priceValue;

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "$" + precioConDescuento;
}

function onClickButtonCuponDiscount(){

    const resultC = document.getElementById("ResultC");
    const inputCupon = document.getElementById("InputCupon");
    const couponsValue = inputCupon.value;

    if (!coupons.includes(couponsValue)) {
        resultC.innerText = "El cupón " + couponsValue + " no es válido";
     } else if (couponsValue === "Descuento1") {
        descuentoCupon = 15;
        resultC.innerText = "Cupón válido! Tienes un " + descuentoCupon + "% de descuento adicional.";
     } else if (couponsValue === "Descuento2") {
        descuentoCupon = 30;
        resultC.innerText = "Cupón válido! Tienes un " + descuentoCupon + "% de descuento adicional.";
     } else if (couponsValue === "Descuento3") {
        descuentoCupon = 25;
        resultC.innerText = "Cupón válido! Tienes un " + descuentoCupon + "% de descuento adicional.";
     }

}