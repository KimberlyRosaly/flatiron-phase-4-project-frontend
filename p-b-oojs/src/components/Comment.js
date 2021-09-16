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
            <div class="card-body text-center">
            <strong>${this.body}</strong>
            </div>
            
            <div class="card-text">
            ${this.name}
            </div>

            <div class="card-text" style="font-size: 10px;">        
                ${this.city}, ${this.state}
                     <br>
                ${this.createdAt}
            </div>           
            
        `
    }
}