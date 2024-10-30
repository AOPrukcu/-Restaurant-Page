import "./styles.css";


import { createMainPage, mainParagraphContents } from "./home.js";
import contactContents from "./about.js";

import { createMenuPage, mexicanDishes as menuContents } from "./menu.js";

document.addEventListener("DOMContentLoaded", () => {
  const contentElement = document.querySelector("#content");
  const homeButton = document.querySelector("#homeButton");
  const aboutButton = document.querySelector("#aboutButton");
  const menuButton = document.querySelector("#menuButton");

  homeButton.classList.add("active");
  createMainPage(3, mainParagraphContents,contentElement,"title-item","Tradional Tacos" );

  const buttons = [homeButton, aboutButton, menuButton];

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

       if (index === 0) createMainPage(3, mainParagraphContents,contentElement,"title-item","Tradional Tacos" )
      else if (index === 1) createMainPage(3, contactContents,contentElement,"contact","About Us" );
      else if (index === 2) createMenuPage(menuContents, contentElement);
    });
  });
});
