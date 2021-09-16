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

            <form class="p-5">

            <!-- N A M E -->
    <input type="text" class="form-control" name="name" placeholder="Name:"></input>    


    
            <!-- M E S S A G E -->
    <div class="form-outline">
        <textarea class="form-control" rows="4" placeholder="Message: Write your prayer request here.."></textarea>
    </div>

 
            <!-- C I T Y -->  <!-- S T A T E-->
    <div class="row">
    <div class="col">
        
        <input type="text" class="form-control" placeholder="City" />
        
    </div>

    <div class="col">
        
        <input type="text" class="form-control" placeholder="State" />
        
    </div>
    </div>


            <!-- S U B M I T -->
    <div class="d-grid">
        <button class="btn btn-primary" type="button">Submit Prayer</button>
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
            <span id="star-counter" data-p-id=${ this.id }>
            ${ this.starCounter }
            </span> others have joined in prayer
            </div>

            <div class="card-text text-center p-3">
            <strong>${ this.body }</strong>
            </div>
      `
    }


}