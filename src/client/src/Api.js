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

    async sortedBookByTitle(){

        let x = await this.api(`sortBooksByTitle`,`GET`);

        let y = await x.json();

        console.log(y);

        return y;

    }

    async findBookByIAuthor(author){

        return this.api(`getBooksByAuthor/${author}`,`GET`).then(data=>data.json());

    }

    async findoldie(){

        return this.api(`getOldestBook`,`GET`).then(data=>data.json());
    }


    async createBook(book){

        let data = await this.api("addBook",'POST',book);

        return data;
    }

    async updateTheBook(book){

        let data = await this.api("updateBook", "PUT", book);

        let data2 = data.json();

        console.log(data2);  

        return data2;
    }

    async deleteDasBook(id){

       let data =  await this.api(`deleteBook/${id}`,`DELETE`);
        let data2 = data.json();
       console.log(data2);

    }






}

















