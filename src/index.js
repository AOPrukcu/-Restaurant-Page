 import "./styles.css";
 const content = document.querySelector("#content");

 import { createMainPage, mainParagraphContents  } from './home.js';
 import {contactContents } from "./about.js"

 document.addEventListener('DOMContentLoaded', () => {
     createMainPage(3, contactContents,content,"title-item","Tradional Tacos");
 });