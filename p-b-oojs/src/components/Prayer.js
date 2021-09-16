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