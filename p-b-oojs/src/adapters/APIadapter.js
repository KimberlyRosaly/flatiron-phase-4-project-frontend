class APIadapter {

// .-~*´¨¯¨`*·~-.CONSTRUCTOR.-~*´¨¯¨`*·~-.¸. . . . . . 
    constructor(){
        this.baseURL = "http://127.0.0.1:3000/api/v1"        
    }
// .-~*´¨¯¨`*·~-.CONSTRUCTOR.-~*´¨¯¨`*·~-.¸. . . . . . 
    
    

    getAllPrayers = () => {        
        return fetch( this.baseURL + "/prayers" )
        .then( response => response.json() )
    }

    getAllComments = () => {
        return fetch( this.baseURL + "/comments" )
        .then( response => response.json() )
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

    starPrayerPatchRequest = (prayerID, updatedCounter) => {
        //PATCH EXISTING DATABASE RECORD
        // 'PRAYED FOR' COUNTER +1

        let configurationObject = {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify( {star_counter: updatedCounter} )}

        // FETCH WILL RETURN updatedDATA FROM AN 
        // OBJECT MADE FROM THE RAILS API DATABASE
        return fetch( (this.baseURL + "/prayers/" + prayerID), configurationObject )
        .then( response => response.json() )
        .then( r => console.log(r))    
    }



}


