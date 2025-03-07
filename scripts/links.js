const baseURL = "https://cassidyw03.github.io/wdd230/";

const linksURL = "https://cassidyw03.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons);
}

getLinks();

function displayLinks(weeks) {
    const container = document.querySelector('#card');

    weeks.forEach(week => {
        let card = document.createElement('section');
        let lesson = document.createElement('h3');
        lesson.textContent = `Lesson ${week.lesson}`;

        card.appendChild(lesson);

        week.link.foreach(linkObj => {
            let link = document.createElement('a');
            link.href = linkObj.url.startsWith("http") ? linkObj.url : baseURL + linkObj.url; // Handle absolute and relative URLs
            link.textContent = linkObj.title;
            link.target = "_blank"; // Open in a new tab
            card.appendChild(link);
            card.appendChild(document.createElement("br"));
        });

        container.appendChild(card);
    });
}
