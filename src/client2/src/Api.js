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

    async getAllTheBooks(){

        let x = await this.api("allBooks", "GET");

        let y = await x.json();



        return y;

    }

    async getBookById(id){

        let x = await this.api(`findBook/${id}`,`GET`);

        let y = await x.json();

        return y;
    }

    async updateTheBook(book){

        let x = await this.api(`updateBook`,`PUT`,book);

        let y = await x.json();

        return y;
    }

    async deleteTheBook(id){

        let x = await this.api(`deleteBook/${id}`,`DELETE`);

        let y = await x.json();
    }

    async addTheBook(book){

        let x = await this.api(`addBook`,`POST`,book);

        let y = await x.json();

        return y;
    }

    async sortByTitleDesc(){


        let x = await this.api(`sortBooksByTitle`,`GET`);

        let y = await x.json();

        return y;
    }

    async sortByTitleAsc(){

        let x = await this.api(`sortBooksByTitleAsc`,`GET`);

        let y = await x.json();

        return y;



    }

    async allTheGenres(){

        let x = await this.api(`getAllGenres`,`GET`);

        let y = await x.json();

        return y;


        
    }

    async findBookByGenre(genre){


        let x = await this.api(`findByGenre/${genre}`,`GET`);

        let y = await x.json();

        return y;
    }


}