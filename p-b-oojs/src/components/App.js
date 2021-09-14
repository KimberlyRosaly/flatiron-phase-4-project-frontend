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
 
        //  <header></header>
         let heading = document.querySelector('header')
 
         this.dom.createElementANDAppend("NAV", "", heading, "navbar")
         let hcontainer = document.querySelector('#navbar')
         hcontainer.className = "border-success"
 
         let text = `<pre>.----------------------.<br>|  P r a y e r   B o x  |<br>'----------------------'</pre>`
         let eID = "navbar-brand"
         this.dom.createElementANDAppend('DIV', text, hcontainer, eID)
         let head = document.querySelector('#navbar-brand')
         head.className = ""
                 
         // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
         
         let text2 = "Request<br>Prayer"
            let eID2 = "choiceA"
            let dLoc = this.dom.mainSection        
            this.dom.createElementANDAppend('DIV', text2, dLoc, eID2)
         
         
         let text3 = "Pray<br>for<br>Others"
            let eID3 = "choiceB"
            // let dLoc = this.dom.mainSection        
            this.dom.createElementANDAppend('DIV', text3, dLoc, eID3)
         // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 
         let choiceA = document.querySelector('#choiceA')
         let choiceB = document.querySelector('#choiceB')
         
         this.dom.mainSection.className = ""
         choiceA.className = "h1"
         choiceB.className = ""
   }
    
      

}