function sendForm() {
    document.getElementById('form').submit()
}


let date = document.getElementById('date').value
date = new Date()
document.getElementById.value = date
console.log(document.getElementById.value)

let sendButton = document.getElementById('sendForm');
sendButton.addEventListener('click', sendForm);
