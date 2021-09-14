class Art {
    
    static all = []
    constructor(artObject){
        
        this.data = artObject
        
        this.name = artObject.attributes.name
        this.artString = artObject.attributes.art_string
        this.hearts = artObject.attributes.hearts

        this.constructor.all.push(this)
        
            
    }

    static searchArt(attribute, value){        
        
        return Art.all.find( (o) => o[attribute] == value )
        
    }

}


