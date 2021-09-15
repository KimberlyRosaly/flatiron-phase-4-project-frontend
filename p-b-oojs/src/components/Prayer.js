class Prayer {
    static all = []
    constructor(object) {
                
        this.id = object.id
        this.star_counter = object.star_counter

        this.body = object.body
        this.name = object.name
        this.city = object.city
        this.state = object.state

        this.createdAt = object.created_at
        

        this.constructor.all.push(this)
    }

    prayerDisplay() {
        return `        
            <div class="card-title h5">
            <strong>| ${ this.name } |</strong>
            ${ this.city }, ${ this.state } | ${ this.createdAt }            
            </div>

            <div class="card-subtitle">
            <span id="star-counter" data-p-id=${ this.id }>
            ${ this.star_counter }
            </span> others have joined in prayer
            </div>

            <div class="card-text h3 text-center">
            ${ this.body }
            </div>
      `
    }
}