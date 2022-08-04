export default class Api{




   api(path, method='GET', body=null){

        const url = "http://localhost:8080/" + path;

        const options = {

                method,
                headers:{
                    'Content-Type':'application/json; charset=utf-8',
                    'X-Requested-With': 'XMLHttpRequest'


                },

        };

        if(body!==null){
            options.body = JSON.stringify(body);
        }

      

        return fetch(url, options);

   }

   async getBooks(){
    return this.api("allBooks").then(data=>data.json());
}

















}