const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

// selects the HTML div element from document with an id of cards
const cards = document.querySelector('#cards');


async function getProphetData(url) {
    const response = await fetch(url);
    const data = await response.json();
    // this will test the data retrieval
    // console.table(data.prophets);

    displayProphets(data.prophets);
    // if (response.ok) {
    //     const data = await response.json();
    //     display(data);
    // }
}

function displayProphets(prophets) {
    prophets.forEach(prophet => {
        // new elements to add to the div.cards element
        let card = document.createElement('section');
        let fullName = document.createElement('h2'); 
        let portrait = document.createElement('img');
        let date = document.createElement('p');
        let birth = document.createElement('p');

        // build h2
        fullName.textContent = `${prophet.name} ${prophet.lastname} `;
        
        // build img
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        // build date of birth
        date.textContent = `Date of Birth: ${prophet.birthdate}`;

        // build place of birth
        birth.textContent = `Place of Birth: ${prophet.birthplace}`;

        // append child
        card.appendChild(fullName);
        card.appendChild(date);
        card.appendChild(birth);
        card.appendChild(portrait);
        cards.appendChild(card);
    }); 
}

getProphetData(url);