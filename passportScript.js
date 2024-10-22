function alter() {
    if (document.getElementById('issuer').innerText == issuerRu) {
        document.getElementById('issuer').innerText = issuerEn;
        document.getElementById('surname').innerText = surnameEn;
        document.getElementById('name').innerText = nameEn;
        document.getElementById('patronymic').innerText = patronymicEn;
        document.getElementById('sex').innerText = sexEn;
        document.getElementById('placeOfBirth').innerText = placeOfBirthEn;
    } else {
        document.getElementById('issuer').innerText = issuerRu;
        document.getElementById('surname').innerText = surnameRu;
        document.getElementById('name').innerText = nameRu;
        document.getElementById('patronymic').innerText = patronymicRu;
        document.getElementById('sex').innerText = sexRu;
        document.getElementById('placeOfBirth').innerText = placeOfBirthRu;
    }
}

let issuerRu = document.getElementById('issuer').innerText
let surnameRu = document.getElementById('surname').innerText
let nameRu = document.getElementById('name').innerText
let patronymicRu = document.getElementById('patronymic').innerText
let sexRu = document.getElementById('sex').innerText
let placeOfBirthRu = document.getElementById('placeOfBirth').innerText

let issuerEn = 'OTDELOM UFMS ROSSII\nPO URYUPINSKOMU RAIONU'
let surnameEn = 'OLEINIK'
let nameEn = 'DARIIA'
let patronymicEn = 'KONSTANTINOVNA'
let sexEn = 'FEM'
let placeOfBirthEn = 'URYUPINSK'

let body = document.body
body.addEventListener('click', alter)
