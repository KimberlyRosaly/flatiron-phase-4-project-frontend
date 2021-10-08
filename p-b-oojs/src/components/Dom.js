class Dom {
    constructor(){
        this.main = document.querySelector('main')
        this.mainSection = document.querySelector('main section')      
        this.body = document.querySelector('body')  
    }

    static injectCommentForm(e){
        // PARENT NODE
        let capture = e.target.closest("[id^=prayer-box]")
        let prayerID = capture.dataset.pId

        // FORM INJECTION INTO PARENT
        // Create element to house comment form
        let newEle = app.dom.makeElement("DIV", `comment-form-container-${ prayerID }`, Comment.formDisplay(prayerID))
        // ADD CLASS ATTRIBuTE & STYLE
        newEle.className = "form mt-4"
        // INJECT FANCy FORM ELEMENT INTO NEAREST PARENT OF WHAT IS CLICKED
        e.target.closest("[id^=prayer-box]").append(newEle)
        // LOCATE FORM ON DOM
        let cForm = document.querySelector(`#new-comment-form-${ prayerID }`)
        // ADD LISTENER FOR FORM SUBMISSION BUTTON CLICK
        cForm.addEventListener("submit", Comment.submissionHandler)
    }

    
    

    // ====================================================
    //======== D O M   M A N I P U L A T I O N=============
    makeElement(elementType, elementID, text){
        let e = document.createElement(elementType)
            e.id = elementID
            e.innerHTML = text
        return e
    }

    injectElement(domLocation, element){
        let d = domLocation
            d.append(element)
    }

    createElementANDAppend(elementType, text, domLocation, elementID){
        let element = this.makeElement(elementType, elementID, text)
        this.injectElement(domLocation, element)
    }

    // ARROW FUNCTION FOR FUN! aka 'removeElement(eID){ ... }'
    // ♥  ♥   ♥     ♥       ♥        ♥     ♥    ♥   ♥  ♥
    removeElementByID = (elementID) => {
        let elementCapture = document.querySelector(`#${elementID}`)
        elementCapture.remove()
    }
    // ♥  ♥   ♥     ♥       ♥        ♥     ♥    ♥   ♥  ♥

    clearMainSection(){
        this.mainSection.innerHTML = ""
        this.mainSection.removeAttribute('id')
    }
    //====================================================
}