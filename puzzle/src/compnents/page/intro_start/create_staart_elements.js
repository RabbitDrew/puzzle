export default class Start {
    constructor(tag, className, hide, animationHide, animationOpen) {
        this.tag = tag;
        this.className = className;
        this.hide = hide;
        this.animationHide = animationHide;
        this.animationOpen = animationOpen;
        this.getStartIntro = document.querySelector(".start-intro");
    }
    startIntro() {
        const getPageStart = document.querySelector(".page-start");
        const creatStartIntro = document.createElement(this.tag);
        creatStartIntro.classList.add(`${this.className}`, `${this.hide}`, `${this.animationHide}`, `${this.animationOpen}`);
        getPageStart.appendChild(creatStartIntro);
    }
    createInnerElements(content, spanContent) {
        const createEl = document.createElement(this.tag);
        createEl.classList.add(`${this.className}`);
        if (spanContent) {
            const spanEl = document.createElement('span');
            spanEl.classList.add('subtitle-capital__letter');
            spanEl.textContent = spanContent;
            createEl.appendChild(spanEl);
        }
        //add br element and text after tag span 
        createEl.insertAdjacentHTML('beforeend', content);
        this.getStartIntro.appendChild(createEl);
    }
    btnTitle(content) {
        const getStartBtn = document.querySelector(".intro-btn");
        const createBtnTitle = document.createElement(this.tag);
        createBtnTitle.classList.add(`${this.className}`);
        createBtnTitle.textContent = content;
        getStartBtn.appendChild(createBtnTitle);
    }
}
//# sourceMappingURL=create_staart_elements.js.map