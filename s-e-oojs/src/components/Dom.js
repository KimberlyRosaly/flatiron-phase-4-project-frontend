class Dom {
    constructor(){
        this.main = document.querySelector('main')
        this.mainSection = document.querySelector('main section')      
        this.body = document.querySelector('body')  
    }


    // ====================================================
    // =====================F U N    S Q U I D   S T U F F ! 
    makeSquids(sA, sB){   

        console.log("HELLO")
        let b = document.querySelector('body')
        b.className = "squiddy"
        let mS = document.querySelector('main section')
        mS.className = "squiddy"
        let d = document.querySelector('main section div')
        d.innerText = "♥"
        
        this.squidTimer(sA, sB)        
    }
    
    squidTimer(sA, sB){        
        
        setInterval( () => {
            let capture = document.querySelector("[id^=SQUID]")
            this.clearMainSection()            
            
            if (capture) {                
                if (capture.id == 'SQUIDa') {                     
                    this.createElementANDAppend("DIV", sB.artString, this.mainSection, sB.name)
                } else {
                    this.createElementANDAppend("DIV", sA.artString, this.mainSection, sA.name)
                }  
            } else {                
                this.createElementANDAppend("DIV", sA.artString, this.mainSection, sA.name)
            } }, 1000 )

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