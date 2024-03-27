export default class Toggler {
    constructor (public toggleEl:HTMLElement, 
                 public triggerEl: HTMLElement, 
                 public firstClass?: string,
                 public secondClass?: string) {
    } 

    animate():void {
        this.triggerEl.addEventListener ('click', (event) => {
          this.toggleEl.classList.remove(`${this.firstClass}`)   
          this.toggleEl.classList.add(`${this.secondClass}`)  
        })
    }
    disable():void {
        this.triggerEl.addEventListener ('click', (event) => {
            setTimeout(() => {
                this.toggleEl.classList.add(`${this.firstClass}`);
            }, 1000);  
          })
    }
    enable(hide?:string):void {
        this.triggerEl.addEventListener ('click', (event) => {
            setTimeout(() => {
                this.toggleEl.classList.remove(`${this.firstClass}`);
                this.toggleEl.classList.add(`${this.secondClass}`)
                if (hide) {
            this.toggleEl.classList.remove(`${hide}`)    
                }
            }, 1000);  
          })
    }
}

