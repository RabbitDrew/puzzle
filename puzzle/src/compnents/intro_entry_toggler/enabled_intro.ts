export default function introIsEnabled ():void {
    const getIntro = document.querySelector <HTMLElement> (".start-intro")
    const getEntry = document.querySelector <HTMLElement> (".start-entry")
    //check that we've got getIntro element 
    if (getIntro && getEntry) {
        getIntro.classList.remove("start-close--open","start-hide-anim");
        getEntry.classList.remove ("entry-open-anim", "entry-hide-anim")
    }
  
}
introIsEnabled ()