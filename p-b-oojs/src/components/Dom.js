class Dom {
    constructor(){
        this.main = document.querySelector('main')
        this.mainSection = document.querySelector('main section')      
        this.body = document.querySelector('body')  
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
    }
    //====================================================
}