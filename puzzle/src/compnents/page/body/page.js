import "./page.css";
const body = document.querySelector("body");
export default class Page {
    constructor(tag, atribute) {
        this.tag = tag;
        this.atribute = atribute;
        this.tag;
        this.atribute;
    }
    setAtribute() {
        this.tag.classList.add(this.atribute);
    }
}
let setPage = new Page(body, "page");
setPage.setAtribute();
//# sourceMappingURL=page.js.map