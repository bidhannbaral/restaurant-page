const content = document.querySelector("#content");

export function homeContent() {
    const header = document.createElement("h1");
    const hr = document.createElement("hr");
    const header2 = document.createElement("h4");
    const description = document.createElement("p");
    const description2 = document.createElement("p");

    header.textContent = "Paurabi's Diner";
    header2.textContent = "Welcome to Pauabi's Diner";
    description.textContent = "If you've come here for spick food then you're in the right place!";
    description2.textContent = "Today's special is Mata ji's gundruk";

    content.appendChild(header);
    content.append(hr);
    content.appendChild(header2);
    content.appendChild(description);
    content.appendChild(description2);
}

