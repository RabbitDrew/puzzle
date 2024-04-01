export default class Entry {
    constructor(tag, className, hide, animationHide, animationOpen) {
        this.tag = tag;
        this.className = className;
        this.hide = hide;
        this.animationHide = animationHide;
        this.animationOpen = animationOpen;
        this.getStartEntry = document.querySelector(".start-entry");
    }
    startIntro() {
        const getPageStart = document.querySelector(".page-start");
        const creatStartIntro = document.createElement(this.tag);
        creatStartIntro.classList.add(`${this.className}`, `${this.hide}`, `${this.animationHide}`, `${this.animationOpen}`);
        getPageStart.appendChild(creatStartIntro);
    }
    createInnerEntry(content) {
        const createEl = document.createElement(this.tag);
        createEl.classList.add(`${this.className}`);
        if (content) {
            createEl.textContent = content;
        }
        this.getStartEntry.appendChild(createEl);
    }
    inputs(lableTag, lableClass) {
        const attributesArr = ["name", "surname", "email"];
        const getEntryInputs = document.querySelector(".entry-inputs");
        for (let i = 0; i < 3; i++) {
            const createInputs = document.createElement(this.tag);
            createInputs.setAttribute("placeholder", attributesArr[i]);
            createInputs.classList.add(this.className);
            getEntryInputs.appendChild(createInputs);
            // lable add attributes and classes 
            const createLabel = document.createElement(lableTag);
            createLabel.setAttribute("for", this.className); //pass class of input to attche the lable to the input
            createLabel.classList.add(lableClass); //have two classe add right class to the right lable and additional class for highelight error
            createLabel.textContent = attributesArr[i]; //add texto into the lable according attribute of input 
            getEntryInputs.appendChild(createLabel);
        }
    }
    btn() {
        const getEntryBtn = document.querySelector(".entry-btn");
        for (let i = 0; i < 2; i++) {
            const createEl = document.createElement(this.tag);
            createEl.classList.add(`${this.className}`);
            getEntryBtn.appendChild(createEl);
        }
    }
    btnTitle() {
        const btnTitles = ["log out", "log in"];
        const getBtnLog = document.querySelectorAll(".btn-log");
        getBtnLog.forEach((el, i) => {
            const creatBtnTitle = document.createElement(this.tag);
            creatBtnTitle.classList.add(this.className);
            creatBtnTitle.textContent = btnTitles[i];
            el.appendChild(creatBtnTitle);
        });
    }
}
//# sourceMappingURL=create_entry_elements.js.map