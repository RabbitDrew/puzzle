import Toggler from "./Toggler";
import { getElement } from "../get_html_elements/get-elements";
import { getElementFromNodeList } from "../get_html_elements/get-elements";
//get elements
const getIntro = getElement("start-intro");
const getEntry = getElement("start-entry");
const introBtn = getElement("intro-btn");
const LogOutBtn = getElementFromNodeList("btn-log", 0);
//close intro win and open entry win 
let hideIntro = new Toggler(getIntro, introBtn, "start-open-anim", "start-hide-anim");
hideIntro.animate();
let closeIntro = new Toggler(getIntro, introBtn, "start-close--open");
closeIntro.disable();
let openEntry = new Toggler(getEntry, introBtn, "entry-close--open", "entry-open-anim");
openEntry.enable();
//close entry win and open intro win 
let hideEntry = new Toggler(getEntry, LogOutBtn, "entry-open-anim", "entry-hide-anim");
hideEntry.animate();
let closeEntry = new Toggler(getEntry, LogOutBtn, "entry-close--open");
closeEntry.disable();
let openIntro = new Toggler(getIntro, LogOutBtn, "start-close--open", "start-open-anim");
openIntro.enable("start-hide-anim");
//# sourceMappingURL=switch-elements.js.map