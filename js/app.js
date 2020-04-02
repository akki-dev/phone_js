(function () {
    let priceMovil = 0,
        totalM, turnedM, igvM,
        change = '',
        calcu = document.getElementById('calcular'),
        cambi = document.getElementById('option_s');

    var cambiar = function () {
        let objOp = document.getElementById('option_s').value,
            objIma = document.getElementById('Image'),
            price = document.getElementById('price');
        (objOp == '0') ? (change = 'iphone',
                priceMovil = 99.99) :
        (objOp == '1') ? (change = 'huawei',
                priceMovil = 199.99) :
        (objOp == '2') ? (change = 'xiaomi',
                priceMovil = 299.99) :
        (objOp == '3') ? (change = 'samsung',
                priceMovil = 399.99) :
        priceMovil = 0;
        price.value = priceMovil.toFixed(2);
        objIma.src = "img/" + change + ".png";
    }

    var agregar = function () {
        let option_s = document.getElementById('option_s').value,
            quantity = parseFloat(document.getElementById('quantity').value),
            paying = parseFloat(document.getElementById('paying').value),
            total = document.getElementById('total'),
            igv = document.getElementById('igv'),
            turned = document.getElementById('turned');

        for (let i = 0; i < option_s.length; i++) {
            (option_s[i] == '0') ? priceMovil = 99.99:
                (option_s[i] == '1') ? priceMovil = 199.99 :
                (option_s[i] == '2') ? priceMovil = 299.99 :
                (option_s[i] == '3') ? priceMovil = 399.99 :
                priceMovil = 0;
            totalM = quantity * priceMovil;
            igvM = totalM * 0.18;
            turnedM = paying - totalM;
            (turnedM > 0) ? turned.value = turnedM.toFixed(2):
                turned.value = 'Lacks Money';
            igv.value = igvM.toFixed(2);
            total.value = totalM.toFixed(2);
        }
    }
    calcu.addEventListener('click', agregar);
    cambi.addEventListener('click', cambiar);
}())