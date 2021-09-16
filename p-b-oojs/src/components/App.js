class App {
    constructor(){
        this.dom = new Dom() 
        this.api = new APIadapter()
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
                opacity = opacity + 0.01
                element.style.opacity = opacity
            } else {
                clearInterval(fadeIn)                             
                setTimeout(function(){app.phase2()}, 1000)       
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

        
        // G R A N D   P A R E N T
        let eType = "DIV"
        let text = ""
        let dLoc = this.dom.mainSection
        let eID = "big-box"
        this.dom.createElementANDAppend(eType, text, dLoc, eID)
            
            // - - - - - - - - - - - - - - -  - - - - -


        this.api.getAllPrayers()
        .then( 
            data => {
                data.map( o => {
                    // - - - - - - - - - - - - - - -  - - - - -        
                    //CREATE A PRAYER CLASS OBJECT
                    const pO = new Prayer( o ) 
                    // - - - - - - - - - - - - - - -  - - - - -    

                        // G R A N D P A R E N T : REFERENCE ENCAPSULATING CONTAINER
                        let bBox =  document.querySelector('#big-box')

                        // P A R E N T  : CREATE ITS OWN BOX CONTAINER
                        // FOR PRAYER & ITS COMMENTS
                        let sBox = document.createElement("DIV")
                            sBox.id = "small-box"
                            sBox.dataset.pId = pO.id
                            
                            sBox.className = "m-3 p-2"
                            sBox.style = "max-width: 800px;"
                            this.dom.injectElement(bBox, sBox)
                        

                            // C H I L D : CREATE ELEMENT WITH PRAYER DATA
                            let pE = document.createElement("DIV")
                                pE.id = "prayer-box"
                                pE.dataset.pId = pO.id
                                pE.innerHTML = pO.prayerDisplay()
                                
                                pE.className = "card p-3 shadow border border-dark border-5"
                                this.dom.injectElement(sBox, pE)
                        
                        // - - - - - - - - - - - - - - -  - - - - -    
                        
                        // G R A N D P A R E N T : CONTAINER ELEMENT FOR futureCOMMENTS DATA
                        let csE = document.createElement("DIV")
                            csE.id = "big-comments-box-" + pO.id                                  
                            // BOOTSTRAP STYLING
                            csE.className = "container"
                            this.dom.injectElement(sBox, csE)    
                        let bCsB = document.getElementById(`big-comments-box-${pO.id}`)

                            // C H I L D : ROW ELEMENT for COMMENT CARDS
                            let csRE = document.createElement('DIV')
                                csRE.id = "comments-row-" + pO.id

                                csRE.className = "row"
                                this.dom.injectElement(bCsB, csRE)
                    })})
        .then( 
            this.api.getAllComments() 
            .then( 
                data => {
                    data.map( cO => {
                        //CREATE A COMMENT CLASS OBJECT
                        const comment = new Comment(cO)
                        // P A R E N T  : REFERENCE ENCAPSULATING CONTAINER
                        let commentsBox = document.querySelector(`#comments-row-${comment.prayerId}`)
                        

                        // C H I L D  : COMMENT CARD ELEMENT
                        let cE = document.createElement("DIV")
                            cE.id = "small-comment-box"
                            cE.className = "col card pt-0 pb-4 pl-4 pr-4 mb-2 align-items-center"
                            cE.innerHTML = comment.commentDisplay()
                            this.dom.injectElement(commentsBox, cE)

                    })
            }))     

    }
        
        
        
      

}