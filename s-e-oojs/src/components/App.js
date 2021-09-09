class App {
    constructor(){
        this.dom = new Dom() 
        this.PHASE1()
    }

    PHASE1(){
        //GET SOME CSS MATCHED UP FOR PARENT ELEMENT ENCAPSULATED BEAUTY
        this.dom.body.className = "PHASE1"

        let etext = "Prayer Box"
        let eID = "PHASE1GREETING"
        this.dom.createElementANDAppend( 'DIV', etext, this.dom.mainSection, eID )
        //INJECT THIS CREATION WITH SPECIFICATIONS

        let element = document.querySelector('#PHASE1GREETING')
        let opacity = 0
                let fadeAway = setInterval(function() {
      
                    if (opacity < 1) {
                        opacity = opacity + 0.1
                        element.style.opacity = opacity
                    } else {
                        clearInterval(fadeAway)   
                    }
                    
                }, 100)          

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