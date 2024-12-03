async function displayCards() {
    let response = await fetch("data.json", {
        method: 'GET',
        mode: 'cors'
    }
    );
    data = await response.text();
    data = JSON.parse(data);
    console.log(data);

    const cardGroup = document.getElementById('card-group');
    cardGroup.innerHTML = ``;

    data.forEach(element => {
        const card = document.createElement('div');
        card.classList.add('card')
        card.style.width = '250px'

        card.innerHTML = `
        <img style="width: 250px" class="card-img-top" src="${element['imageSrc']}" alt="${element['imageAlt']}">
        <div class="card-body">
            <a class="card-title" href="${element['link']}" target="_blank">${element['name']}</a>
            <p class="card-text">${element['description']}</p>
        </div>
        `;

        cardGroup.appendChild(card)
    });
}

displayCards()
