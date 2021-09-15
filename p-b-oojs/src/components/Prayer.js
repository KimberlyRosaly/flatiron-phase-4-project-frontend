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
            <strong>| ${ this.name } |</strong>
            ${ this.city }, ${ this.state } | ${ this.created_at }
            <br>  

            <span id="star-counter" data-p-id=${ this.id }>
            ${ this.star_counter }
            </span> others have joined in prayer
            <br>
            
            ${ this.body }
      `
    }
}