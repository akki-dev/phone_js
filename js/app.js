let priceMovil = 0;
let totalM, turnedM, igvM;
let change = '';

function changeC() {
    let objOp = document.getElementById('option_s').value;
    let objIma = document.getElementById('Image');
    let price = document.getElementById('price');

    (objOp == '0') ? (change = 'iphone',
        priceMovil = 100) :
    (objOp == '1') ? (change = 'huawei',
        priceMovil = 200) :
    (objOp == '2') ? (change = 'xiaomi',
        priceMovil = 300) :
    (objOp == '3') ? (change = 'samsung',
        priceMovil = 400) :
    priceMovil = 0;

    price.value = priceMovil.toFixed(2);
    objIma.src = "img/" + change + ".png";
}


function calculate() {
    let option_s = document.getElementById('option_s').value;
    let quantity = parseFloat(document.getElementById('quantity').value);
    let paying = parseFloat(document.getElementById('paying').value);
    let total = document.getElementById('total');
    let igv = document.getElementById('igv');
    let turned = document.getElementById('turned');

    for (let i = 0; i < option_s.length; i++) {
        (option_s[i] == '0') ? priceMovil = 100:
        (option_s[i] == '1') ? priceMovil = 200 :
        (option_s[i] == '2') ? priceMovil = 300 :
        (option_s[i] == '3') ? priceMovil = 400 :
        priceMovil = 0;
        totalM = quantity * priceMovil;
        igvM = totalM * 0.18;
        turnedM = paying - totalM;
        total.value = totalM.toFixed(2);
        igv.value = igvM.toFixed(2);
        turned.value = turnedM.toFixed(2);
    }
}