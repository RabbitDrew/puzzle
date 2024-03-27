export default class Entry{
    private getStartEntry
    constructor  (public tag: string, 
                  public className: string, 
                 public hide?:string,
                 public animationHide?:string,
                 public animationOpen?:string,) {
    this.getStartEntry = document.querySelector(".start-entry") as HTMLElement            
}
    startIntro ():void {
        const getPageStart = document.querySelector(".page-start")as HTMLElement
        const creatStartIntro:HTMLElement = document.createElement(this.tag)as HTMLElement
        creatStartIntro.classList.add(`${this.className}`,`${this.hide}`, `${this.animationHide}`, `${this.animationOpen}`)
        getPageStart.appendChild(creatStartIntro)      
    }
    
    createInnerEntry (content?:string):void {
        const createEl: HTMLElement = document.createElement(this.tag);
        createEl.classList.add(`${this.className}`);
        if (content) {
            createEl.textContent = content
        }
        this.getStartEntry.appendChild(createEl)
    }

    inputs():void {
      const attributesArr:string[] = ["name", "surname"]
      const getEntryInputs = document.querySelector(".entry-inputs") as HTMLElement
      for (let i = 0; i < 2; i++) { 
        const createInputs:HTMLElement = document.createElement(this.tag)
        createInputs.setAttribute("placeholder", attributesArr[i]);
        createInputs.classList.add(this.className)
        getEntryInputs.appendChild(createInputs)
      } 
    }

    btn ():void {
        const getEntryBtn = document.querySelector(".entry-btn") as HTMLElement 
        for(let i = 0; i < 2; i++){
        const createEl: HTMLElement = document.createElement(this.tag);
        createEl.classList.add(`${this.className}`);
        getEntryBtn.appendChild(createEl)
        }
    }
    btnTitle() {
        const btnTitles: string[] = ["log out", "log in"]
        const getBtnLog: NodeListOf<HTMLElement> = document.querySelectorAll(".btn-log") 
        getBtnLog.forEach((el:HTMLElement, i:number) => {
            const creatBtnTitle: HTMLElement = document.createElement(this.tag)
            creatBtnTitle.classList.add(this.className)
            creatBtnTitle.textContent = btnTitles[i]
            el.appendChild(creatBtnTitle)
        })
    }
}
