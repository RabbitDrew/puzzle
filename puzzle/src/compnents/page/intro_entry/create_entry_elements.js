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
    inputs() {
        const attributesArr = ["name", "surname"];
        const getEntryInputs = document.querySelector(".entry-inputs");
        for (let i = 0; i < 2; i++) {
            const createInputs = document.createElement(this.tag);
            createInputs.setAttribute("placeholder", attributesArr[i]);
            createInputs.classList.add(this.className);
            getEntryInputs.appendChild(createInputs);
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