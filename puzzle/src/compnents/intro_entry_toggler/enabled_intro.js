export default function introIsEnabled() {
    const getIntro = document.querySelector(".start-intro");
    const getEntry = document.querySelector(".start-entry");
    //check that we've got getIntro element 
    if (getIntro && getEntry) {
        getIntro.classList.remove("start-close--open", "start-hide-anim");
        getEntry.classList.remove("entry-open-anim", "entry-hide-anim");
    }
}
introIsEnabled();
//# sourceMappingURL=enabled_intro.js.map