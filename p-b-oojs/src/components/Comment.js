class Comment {
    static all = []
    constructor(object) {
        this.id = object.id
        this.prayerId = object.prayer_id
        
        this.body = object.body
        this.name = object.name
        this.city = object.city
        this.state = object.state

        this.createdAt = object.created_at

        this.constructor.all.push(this)

    }

    commentDisplay() {
        return `
            
            ${this.body}
            <br>
            ${this.name}
            <br>
            ${this.city}, ${this.state}
            <br>
            ${this.createdAt}           
            
        `
    }
}