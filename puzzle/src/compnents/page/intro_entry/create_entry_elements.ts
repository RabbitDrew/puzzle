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
    inputs(lableTag:string,
           lableClass:string,
           ):void {
      const attributesArr:string[] = ["name", "surname", "email"]
      const getEntryInputs = document.querySelector(".entry-inputs") as HTMLElement
      for (let i = 0; i < 3; i++) { 
        const createInputs:HTMLElement = document.createElement(this.tag) 
        createInputs.setAttribute("placeholder", attributesArr[i]);
        createInputs.classList.add(this.className)
        getEntryInputs.appendChild(createInputs)
    
        // lable add attributes and classes 
        const createLabel: HTMLElement = document.createElement(lableTag);
        createLabel.setAttribute("for", this.className);//pass class of input to attche the lable to the input
        createLabel.classList.add(lableClass);//have two classe add right class to the right lable and additional class for highelight error
        createLabel.textContent = attributesArr[i];//add texto into the lable according attribute of input 
        getEntryInputs.appendChild(createLabel);
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
    btnTitle():void {
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
