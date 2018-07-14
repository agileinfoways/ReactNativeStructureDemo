import { CONFIG } from "../global/config.global";

class Backend{

    getHeaders(){
        let headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
        return headers;
    }

    async callApi(endPoint,methodType,headers,formBody,props){

        let response = await fetch(CONFIG.baseURL+endPoint, {
            method:methodType,
            headers: this.getHeaders(),
            body: (formBody) ? JSON.stringify(formBody) : null
        });

        if(response){
            console.log("response ==>"+JSON.stringify(response))
            let responseJSON = await response.json();
            return responseJSON;
        }


    }

}
export default new Backend();