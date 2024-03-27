import "./intro_entry.css"
import Entry from "./create_entry_elements"
let createStartEntry = new Entry("div",
                                      "start-entry",
                                      "entry-close--open",
                                      "entry-hide-anim",
                                      "entry-open-anim")
createStartEntry.startIntro()
let createEntryInputs = new Entry ("div","entry-inputs")
createEntryInputs.createInnerEntry()
let creatInputs = new Entry ("input","entry-input")
creatInputs.inputs()

let createEntryBtn = new Entry ('div', "entry-btn")
createEntryBtn.createInnerEntry()

let createBtnLog = new Entry ("div", "btn-log")
createBtnLog.btn()

let createBtnTitle = new Entry ("h2", "log-title")
createBtnTitle.btnTitle()