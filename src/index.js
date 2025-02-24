import "./style.css";
import { homeContent } from "./home";
import { menuContent } from "./menu";
import { aboutContent } from "./about";

const content = document.querySelector("#content");
const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        content.textContent = "";
        if (button.id === "homeButton") {
            homeContent();
        } else if (button.id === "menuButton") {
            menuContent();
        } else if (button.id === "aboutButton") {
            aboutContent();
        }
    });
});
homeContent();