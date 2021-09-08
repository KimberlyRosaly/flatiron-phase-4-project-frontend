class ArtCollection {

    constructor(){
        
        this.apiAdapter = new APIadapter()
        this.gatherArtCollection()      
        
    }

    gatherArtCollection(){
        this.apiAdapter.getAllArt()
        .then( objects =>  {
            objects.map( o => new Art(o) )             
            app.phase2()                        
        } )

    }
}