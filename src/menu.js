const content = document.querySelector("#content");

export function menuContent() {
    const item1 = document.createElement("h3");
    const item1description = document.createElement("p");
    const item2 = document.createElement("h3");
    const item2description = document.createElement("p");
    const item3 = document.createElement("h3");
    const item3description = document.createElement("p");
    const item4 = document.createElement("h3");
    const item4description = document.createElement("p");

    item1.textContent = "Paurabi's Spicy Chicken";
    item2.texteContent = "Mata Ji's sour Gundruk";
    item3.textContent = "Paurabi's Laughing";
    item4.textContent = "Puntey's Pustakari";

    item1description = "";
    item2description = "";
    item3description = "";
    item4description = "";

    content.appendChild(item1);
    content.appendChild(item1description);
    content.appendChild(item2);
    content.appendChild(item2description);
    content.appendChild(item3);
    content.appendChild(item3description);
    content.appendChild(item4);
    content.appendChild(item4description);
}