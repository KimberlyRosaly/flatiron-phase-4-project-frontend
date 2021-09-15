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
                setTimeout(function(){app.phase2()}, 100)       
            }         

        }, 10)       

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
            // ⮟⮟⮟ GET SOME BOOTSTRAP HAPPENING HERE ⮟⮟⮟
            hcontainer.className = ""
    
            // L O G O   B R A N D   T H I N G   O F   N A V I G A T I O N  BAR / HEADER / TOP
            let text = `<pre>.----------------------.<br>|  P r a y e r   B o x  |<br>'----------------------'</pre>`
            let eID = "navbar-brand"
            this.dom.createElementANDAppend('DIV', text, hcontainer, eID)
            let head = document.querySelector('#navbar-brand')
            head.className = ""
                 
        // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
        let dMS = this.dom.mainSection   

        // C A R D S 
            let text2 = "Request<br>Prayer"
                let eID2 = "choiceA"
                this.dom.createElementANDAppend('DIV', text2, dMS, eID2)
            
                // -   -   -   -   -   -   -   -   -   -   
                
            let text3 = "Pray<br>for<br>Others"
                let eID3 = "choiceB" 
                this.dom.createElementANDAppend('DIV', text3, dMS, eID3)
                
                // -   -   -   -   -   -   -   -   -   - 

        let choiceA = document.querySelector('#choiceA')
        let choiceB = document.querySelector('#choiceB')
        
        // S T Y L E  CARDS WITH B O O T S T R A P
        choiceA.className = "border border-3"
        choiceB.className = "border border-3"

        // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
        // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
        //                 ¯`·.¸¸.·´¯`·.¸¸.ATTACH L I S T E N E R S
        dMS.id = "parent-container"
        console.log(dMS)
        dMS.addEventListener("click", (e) => {
            
            switch(e.target.id) {
                case "choiceA":
                    this.phase3a()
                    break
                case "choiceB":
                    this.phase3b()
                    break                
            }
            
        })
        
        // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    }

    phase3a(){
        console.log(" A P P > P H A S E 3 A ( ) ☚(ﾟヮﾟ☚)")
        
    }
    
    phase3b(){
        //? > > > > GET STARTED > > > > > > > > > > 
        this.dom.body.id = "phase3b"
        this.dom.clearMainSection()
        this.dom.body.removeAttribute('class')
        //? ⮭ ⮭ CLEAN STUFF UP ⮭ ⮭ ⮭

        

        
    }
    
      

}