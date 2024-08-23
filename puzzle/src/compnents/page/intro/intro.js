// create elements
import "./intro.css";
export default class Intro {
    constructor(tag, attribute) {
        this.tag = tag;
        this.attribute = attribute;
        this.tag;
        this.attribute;
    }
    createPageContainer() {
        const getPage = document.querySelector(".page");
        const createPageCOntainer = document.createElement(this.tag);
        createPageCOntainer.classList.add(this.attribute);
        getPage === null || getPage === void 0 ? void 0 : getPage.appendChild(createPageCOntainer);
    }
    createPageStart() {
        const getPageContainer = document.querySelector(".page-container");
        const createPageStart = document.createElement(this.tag);
        createPageStart.classList.add(this.attribute);
        getPageContainer.appendChild(createPageStart);
    }
}
let pageContainer = new Intro("div", "page-container");
pageContainer.createPageContainer();
let pageStart = new Intro("div", "page-start");
pageStart.createPageStart();
// createPage container rename method 
//# sourceMappingURL=intro.js.map