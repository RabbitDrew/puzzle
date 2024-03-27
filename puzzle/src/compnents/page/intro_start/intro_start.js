//create intro start 
import "./intro_start.css";
import Start from "./create_staart_elements";
let createStartIntro = new Start("div", "start-intro", "start-close--open", "start-hide-anim", "start-open-anim");
createStartIntro.startIntro();
let createIntroTitle = new Start("h1", "intro-title");
createIntroTitle.createInnerElements("english puzzle");
let createIntroSubtitle = new Start("h2", "intro-subtitle");
createIntroSubtitle.createInnerElements("on words, collect phrases.<br>Words can be drag and drop. Select tooltips in the menu", "click");
let createStartBtn = new Start("div", "intro-btn");
createStartBtn.createInnerElements("");
let createStartBtnTitle = new Start("h2", "btn-title");
createStartBtnTitle.btnTitle("Start");
//# sourceMappingURL=intro_start.js.map