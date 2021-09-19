class APIadapter {

    constructor(){
        this.baseURL = "http://127.0.0.1:3000/api/v1"        
    }
    
    prayerBoxRequest = ( newPrayer ) => {
        // ALLOW DATA TO PASS THROUGH RAILS API
        // WITH CONFIGURATION OBJECT for FETCH REQUEST
        let configObject = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },

            body: JSON.stringify( newPrayer )}
        // FETCH WILL RETURN newDATA FROM AN 
        // OBJECT IN THE RAILS API DATABASE
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


