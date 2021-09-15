class APIadapter {

    constructor(){
        this.baseURL = "http://127.0.0.1:3000/api/v1"        
    }

    /*
    getAllArt = () => {return fetch(this.baseURL + "/arts").then( response => response.json() ).then( response2 => response2.data )
        // THIS SHOULD RETURN AN ARRAY OF API OBJECTS DATA
    }
     */

    getAllPrayers = () => {
        
        return fetch( this.baseURL + "/prayers" )
        .then( response => response.json() )

    }
}