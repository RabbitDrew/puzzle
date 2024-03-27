export default class Toggler {
    constructor(toggleEl, triggerEl, firstClass, secondClass) {
        this.toggleEl = toggleEl;
        this.triggerEl = triggerEl;
        this.firstClass = firstClass;
        this.secondClass = secondClass;
    }
    animate() {
        this.triggerEl.addEventListener('click', (event) => {
            this.toggleEl.classList.remove(`${this.firstClass}`);
            this.toggleEl.classList.add(`${this.secondClass}`);
        });
    }
    disable() {
        this.triggerEl.addEventListener('click', (event) => {
            setTimeout(() => {
                this.toggleEl.classList.add(`${this.firstClass}`);
            }, 1000);
        });
    }
    enable(hide) {
        this.triggerEl.addEventListener('click', (event) => {
            setTimeout(() => {
                this.toggleEl.classList.remove(`${this.firstClass}`);
                this.toggleEl.classList.add(`${this.secondClass}`);
                if (hide) {
                    this.toggleEl.classList.remove(`${hide}`);
                }
            }, 1000);
        });
    }
}
//# sourceMappingURL=Toggler.js.map