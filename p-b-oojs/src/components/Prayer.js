class Prayer {
    static all = []
    constructor(object) {
                
        this.id = object.id
        this.starCounter = object.star_counter
        this.body = object.body
        this.name = object.name
        this.city = object.city
        this.state = object.state
        this.createdAt = object.created_at        

        this.constructor.all.push(this)
    }

    static newForm() {
        return `
            <div class="h1 text-center"><pre>Create your<br> P R A Y E R  R E Q U E S T <br>here</pre></div>

            <!-- ID - LOCK IN ON DOM  - then ADD  E V E N T   L I S T E N E R  > "SUBMIT" BUTTON -->
            <form id="new-prayer-form" class="p-5">
                <!-- N A M E -->
                <input type="text" class="form-control" name="prayer[name]" placeholder="Name:"></input>    
        
                <!-- M E S S A G E -->
                <div class="form-outline">
                    <textarea class="form-control" name="prayer[body]" rows="4" placeholder="Message:"></textarea>
                </div> 
                <!-- C I T Y -->  <!-- S T A T E-->
                <div class="row">
                    <div class="col">                    
                        <input type="text" class="form-control" name="prayer[city]" placeholder="City" />                    
                    </div>

                    <div class="col">                    
                        <input type="text" class="form-control" name="prayer[state]" placeholder="State" />                    
                    </div>
                </div>
                <!-- S U B M I T -->
                <div class="d-grid">
                    <input class="btn btn-primary" type="submit" value="Submit Prayer"></input>
                </div>
            </form>
        `
    }

    prayerDisplay() {
        return `        
            <div class="card-title">
                <strong>| ${ this.name } |</strong>
                ${ this.city }, ${ this.state } | ${ this.createdAt }            
            </div>

            <div class="card-subtitle">
            
                <span id="star-counter-${ this.id }" data-p-id=${ this.id }>
                    ${ this.starCounter }
                </span>
                 others have joined in prayer
            </div>

            
            <div class="card-text text-center p-3">
                <strong>${ this.body }</strong>
            </div>


            <div class="row">

                <button type="button" 
                id="star-button-${ this.id }" data-p-id=${ this.id }
                class="btn btn-outline-info" style="background-color: #FFBA0F21;">
                    P R ☆ Y
                </button>


                <button type="button"
                id="comment-button-${ this.id }"
                data-prayer-id="${ this.id }" 
                class="btn btn-outline-warning" style="background-color: #FF630F33;">
                    C O M M E N T
                </button>

            </div>

            `
    }

    starPrayer(e) {
        //? ????????????????????????????????????????
        //? ????????????????????????????????????????
        //? IS THIS  O P T I M I S T I C  RENDERING??
        //?     DOM UPDATES > PATCH FETCH REQUEST
        //? ????????????????????????????????????????
        //? ????????????????????????????????????????
        
        // F R O N T E N D STUFF- - - - - - - - - - - - - 
        // LOCATE ON DOM
        let starSpan = document.querySelector(`#star-counter-${e.target.dataset.pId}`)
        // ISOLATE
        let counter = parseInt(starSpan.innerText)
        // 
        let updatedCounter = counter + 1
        // INCREASE PRAYER COUNT ON THE DOM
        starSpan.innerHTML = updatedCounter
        // PREVENT RE-"LIKE"ING - DISABLE BUTTON
        e.target.disabled = true
        
        // MAKE COUNTER STAND OUT
        starSpan.style = "text-shadow: 0 0 10px blue; color: blue;"
        // _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _  
        
        // B A C K E N D STUFF- - - - - - - - - - - - - 
        let prayerID = e.target.dataset.pId
        
        app.api.starPrayerPatchRequest(prayerID, updatedCounter)
        // _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _


        //*  ∙∙·▫▫ᵒᴼᵒ▫ₒₒ▫ᵒᴼ🆂🆃🆁🅴🆃🅲🅷 🅶🅾🅰🅻ᴼᵒ▫ₒₒ▫ᵒᴼᵒ▫▫·∙∙
        //*   ++++++++++++++++++++++++++++++++++++++++++
        //*   ++++++++++++++++++++++++++++++++++++++++++
            //*  READ INSIDE > NOTES
                //*  CONTROLLER HANDLES DB CALCULATION
        //*   ++++++++++++++++++++++++++++++++++++++++++
    }


}