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

        week.links.forEach(linkObj => {
            let link = document.createElement('a');
            // we need to handle the base URLs and the links
            if (linkObj.url.startsWith("http")) {
                link.href = linkObj.url; // Absolute URL (external links)
            } else {
                link.href = baseURL + linkObj.url; // Relative URL (lesson01, lesson02, etc.)
            }

            link.textContent = linkObj.title;
            link.target = "_blank"; // Open link in a new tab
            card.appendChild(link);
            card.appendChild(document.createElement("br")); // Line break between links



            // link.href = linkObj.url.startsWith("http") ? linkObj.url : baseURL + linkObj.url;
    
        });

        container.appendChild(card);
    });
}
