class Prayer {
    static all = []
    constructor(object) {
        console.log("HELLO YOU TOO")
        // this.data = object
        
        this.id = object.id
        this.star_counter = object.star_counter

        this.body = object.body
        this.name = object.name
        this.city = object.city
        this.state = object.state

        this.createdAt = object.created_at
        

        this.constructor.all.push(this)
    }
}