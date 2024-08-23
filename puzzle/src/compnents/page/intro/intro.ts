// create elements
import "./intro.css"
export default class Intro {
    constructor ( public tag:string, public attribute: string ) {
        this.tag
        this.attribute
    }
createPageContainer () {
    const getPage = document.querySelector<HTMLElement>(".page") 
    const createPageCOntainer:HTMLElement = document.createElement(this.tag)
    createPageCOntainer.classList.add(this.attribute)
    getPage?.appendChild(createPageCOntainer)
    }
createPageStart () {
    const getPageContainer = document.querySelector(".page-container") as HTMLElement
    const createPageStart:HTMLElement = document.createElement (this.tag)
    createPageStart.classList.add(this.attribute)
    getPageContainer.appendChild(createPageStart) 
}
} 
let pageContainer = new Intro ("div", "page-container")
    pageContainer.createPageContainer()
let pageStart = new Intro ("div", "page-start")
    pageStart.createPageStart()


    // createPage container rename method 