export default class Start{
    private getStartIntro 
    constructor  (public tag: string, 
                  public className: string, 
                 public hide?:string,
                 public animationHide?:string,
                 public animationOpen?:string,) {
    this.getStartIntro = document.querySelector(".start-intro") as HTMLElement
}
    startIntro ():void {
        const getPageStart = document.querySelector(".page-start")as HTMLElement
        const creatStartIntro = document.createElement(this.tag)as HTMLElement
        creatStartIntro.classList.add(`${this.className}`,`${this.hide}`, `${this.animationHide}`, `${this.animationOpen}`)
        getPageStart.appendChild(creatStartIntro)      
    }

    createInnerElements(content: string, spanContent?: string): void {
        const createEl: HTMLElement = document.createElement(this.tag);
        createEl.classList.add(`${this.className}`);


        if (spanContent) {
            const spanEl: HTMLElement = document.createElement('span');
            spanEl.classList.add('subtitle-capital__letter');
            spanEl.textContent = spanContent;
            createEl.appendChild(spanEl);
        }

      
        //add br element and text after tag span 
        createEl.insertAdjacentHTML('beforeend', content);
        this.getStartIntro.appendChild(createEl);
    }

    btnTitle (content:string):void {
        const getStartBtn = document.querySelector(".intro-btn") as HTMLElement
        const createBtnTitle:HTMLElement = document.createElement(this.tag)
        createBtnTitle.classList.add(`${this.className}`)
        createBtnTitle.textContent = content
        getStartBtn.appendChild(createBtnTitle)
    } 
}