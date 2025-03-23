// Code for JSON integration!
const jsonFile = "./data/members.json";
const container = document.querySelector('#spot');

async function getData() {
    const response = await fetch(jsonFile);
    const data = await response.json();
    // filter for silver or gold status
    const sgMembers = data.members.filter(member => member.membershipLevel === "Silver" || member.membershipLevel === "Gold");
    const randomMembers = sgMembers.sort(() => Math.random() - 0.5);
    const selectedMembers = randomMembers.slice(0,3);

    displayMembers(selectedMembers);
}

function displayMembers(members) {
    // const container = document.querySelector('#directory');
    container.innerHTML = "";

    members.forEach(member => {
        let card = document.createElement("section");
        card.classList.add("card");

        let name = document.createElement("h2");
        name.textContent = member.name;

        let image = document.createElement("img");
        image.src = member.image.startsWith("http") ? member.image : `./images/${member.image}`;
        image.alt = `Logo of ${member.name}`;

        // let address = document.createElement("p");
        // address.textContent = `📍 Address: ${member.address}`;

        // let phone = document.createElement("p");
        // phone.textContent = `📞 Phone: ${member.phone}`;

        // let website = document.createElement("a");
        // website.href = member.website;
        // website.textContent = "🌐 Visit Website";
        // website.target = "_blank";

        let membership = document.createElement("p");
        membership.textContent = `🏆 Membership Level: ${member.membershipLevel}`;

        // let category = document.createElement("p");
        // category.textContent = `💼 Category: ${member.category}`;

        // let established = document.createElement("p");
        // established.textContent = `📆 Established: ${member.established}`;

        let description = document.createElement("p");
        description.textContent = member.description;

        let hours = document.createElement("p");
        hours.textContent = `🕒 Hours: ${member.hours}`;

        card.appendChild(name);
        card.appendChild(image);
        // card.appendChild(address);
        // card.appendChild(phone);
        // card.appendChild(website);
        card.appendChild(membership);
        // card.appendChild(category);
        // card.appendChild(established);
        card.appendChild(description);
        card.appendChild(hours);

        container.appendChild(card);
    })
}

getData();