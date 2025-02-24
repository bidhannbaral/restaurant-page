const content = document.querySelector("#content");

export function homeContent() {
    const header = document.createElement("h1");
    header.textContent = "Paurabi's Diner";
    const hr = document.createElement("hr");
    content.appendChild(header);
    content.append(hr);
    const header2 = document.createElement("h4");
    header2.textContent = "Welcome to Pauabi's Diner";
    content.appendChild(header2);
    const description = document.createElement("p");
    description.textContent = "If you've come here for spick food then you're in the right place!";
    const description2 = document.createElement("p");
    description2.textContent = "Today's special is Mata ji's gundruk";
    content.appendChild(description);
    content.appendChild(description2);
}

