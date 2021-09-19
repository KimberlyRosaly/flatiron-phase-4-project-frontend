class APIadapter {

    constructor(){
        this.baseURL = "http://127.0.0.1:3000/api/v1"        
    }
    
    prayerBoxRequest = ( newPrayer ) => {

        // ALLOW DATA TO PASS THROUGH RAILS API
        let configObject = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },

            body: JSON.stringify( newPrayer )
        }

        return fetch( (this.baseURL + "/prayers"), configObject )
        .then( response => response.json() )        
    }

    getAllPrayers = () => {        
        return fetch( this.baseURL + "/prayers" )
        .then( response => response.json() )
    }

    getAllComments = () => {
        return fetch( this.baseURL + "/comments" )
        .then( response => response.json() )
    }

}


