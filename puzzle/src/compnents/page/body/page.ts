import "./page.css"
const body = document.querySelector("body") as HTMLElement
export default class Page {
    constructor (public tag:HTMLElement, public atribute:string) {
        this.tag
        this.atribute
    }
    setAtribute() {
        this.tag.classList.add(this.atribute)
    }
}
let setPage = new Page( body, "page") 
    setPage.setAtribute()