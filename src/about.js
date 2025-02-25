const content = document.querySelector("#content");

export function aboutContent() {
    const heading = document.createElement("h2");
    const address = document.createElement("p");
    const description = document.createElement("p");

    heading.textContent = "Paurabi's Mission";
    description.textContent = "Paurabi's Mission is to make people laugh by feeding them laughing."
    address.textContent = "321 Japan Road, Korea Town, China State, North Korea, 23424-2342";

    content.appendChild(heading);
    content.appendChild(description);
    content.appendChild(address);
}