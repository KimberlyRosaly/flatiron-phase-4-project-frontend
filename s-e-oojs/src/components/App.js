class App {
    constructor(){
        this.dom = new Dom() 
        this.phase1()
    }

    phase1(){
        //GET SOME CSS MATCHED UP FOR PARENT ELEMENT ENCAPSULATED BEAUTY
        this.dom.body.className = "phase1"

        let etext = "Prayer Box"
        let eID = "phase1GREETING"
        this.dom.createElementANDAppend( 'DIV', etext, this.dom.mainSection, eID )
        //INJECT THIS CREATION WITH SPECIFICATIONS

        let element = document.querySelector('#phase1GREETING')
        let opacity = 0
        let fadeIn = setInterval(function() {
            
            if (opacity < 1) {
                opacity = opacity + 0.1
                element.style.opacity = opacity
            } else {
                clearInterval(fadeIn)                             
                setTimeout(function(){app.phase2()}, 1000)       
            }         

        }, 100)       

            }
                
    phase2(){          
        // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
        this.dom.clearMainSection()
        //  B L A N K   S L A T E 
        // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
        
        
        // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
        // H E A D I N G   I N J E C T I O N 
        let b = this.dom.body
        b.className = "phase2"
        
        let text = "Prayer Box<br>Heading"
        let eID = "phase2HEADING"
        
        let hding = document.querySelector('header')
        this.dom.createElementANDAppend('DIV', text, hding, eID)
        // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
        
        let text2 = "Request Prayer"
        let eID2 = ""
        let dLoc = this.dom.mainSection        
        this.dom.createElementANDAppend('DIV', text2, dLoc, eID2)


        let text3 = "Pray For Someone Else"
        let eID3 = ""
        // let dLoc = this.dom.mainSection        
        this.dom.createElementANDAppend('DIV', text3, dLoc, eID3)
    }
    
    // phase1(){
    //     let b = document.querySelector('body')
    //     b.className = "GE"
    //     this.dom.mainSection.className = "GE"

    //     let greeting = `<pre>
    //     ▄▄▄▄▄▄▄ ▄▄▄▄▄▄▄ ▄▄▄▄▄▄▄ ▄▄ 
    //     █  ▄    █       █       █  █
    //     █ █▄█   █   ▄   █   ▄   █  █
    //     █       █  █ █  █  █ █  █  █
    //     █  ▄   ██  █▄█  █  █▄█  █▄▄█
    //     █ █▄█   █       █       █▄▄ 
    //     █▄▄▄▄▄▄▄█▄▄▄▄▄▄▄█▄▄▄▄▄▄▄█▄▄█
    //     </pre>`
        
    //     this.dom.createElementANDAppend("DIV", greeting, this.dom.mainSection, "GE")
    //     let abc = document.querySelector('#GE')

    //         let opacity = 0
    //         let fadeAway = setInterval(function() {
  
    //             if (opacity < 1) {
    //                 opacity = opacity + 0.05
    //                 abc.style.opacity = opacity
    //             } else {
    //                 clearInterval(fadeAway)

    //                 this.artCollection = new ArtCollection() 

    //             }
                
    //         }, 100)          

    // }


    // phase2(){

    //     this.dom.mainSection.className = "squiddy"
    //     // FUNCTION ENTERED FROM : ARTCOLLECTION.GATHERARTCOLLECTION's FETCH's RETURN
    //     const sA = Art.searchArt("name", "SQUIDa")
    //     const sB = Art.searchArt("name", "SQUIDb")

    //     // console.log(sA, sB)

    //     this.dom.makeSquids(sA, sB)
       
     
    // }

    
  

    
        
      

}