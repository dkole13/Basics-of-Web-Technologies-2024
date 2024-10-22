function checkInput(x, y, z) {
    if (x <= 0 || y <= 0 || z <= 0) {
        return false;
    } else {
        return true;
    }

}


function doesTriangleExist(x, y, z) {
    if (checkInput(x, y, z) == false) {
        return false
    }
    if ((x + y) <= z || (x + z) <= y || (y + z) <= x) {
        return false;
    } else {
        return true;
    }
}
    

function isRightTriangle(x, y, z) {    
    if ((x**2 + y**2 == z**2) || (x**2 + z**2 == y**2) || (z**2 + y**2 == x**2)) {
        return true;
    } else {
        return false;
    }
    
}


function addResultText() {
    let x = parseFloat(document.getElementsByName('sideX')[0].value);
    let y = parseFloat(document.getElementsByName('sideY')[0].value);
    let z = parseFloat(document.getElementsByName('sideZ')[0].value);

    if (doesTriangleExist(x, y, z) == true) {
        document.getElementsByName('doesExist')[0].innerText = 'Треугольник существует';
        if (isRightTriangle(x, y, z) == true) {
            document.getElementsByName('isRight')[0].innerText = 'Треугольник прямоугольный';
            document.getElementsByName('result')[0].value = 'Треугольник существует и он прямоугольный'
        } else {
            document.getElementsByName('isRight')[0].innerText = 'Треугольник не прямоугольный';
            document.getElementsByName('result')[0].value = 'Треугольник существует, но он не прямоугольный'
        }        
    } else {
        document.getElementsByName('doesExist')[0].innerText = 'Треугольник не существует';
        document.getElementsByName('result')[0].value = 'Треугольник не существует'
    }


}


function send() {
    document.getElementsByName('problemText')[0].innerText
    document.getElementById('sendForm').submit();
}


let elementGetResult = document.getElementById('getResult')
elementGetResult.addEventListener('click', addResultText)

let buttonSendResult = document.getElementById('buttonSendResult')
buttonSendResult.addEventListener('click', send)
