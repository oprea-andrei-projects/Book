export default class Api{




   api(path, method='GET', body=null, token=null){

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

        if(token){
            options.headers['Authorization']= `Bearer ${token}`;
        }

      

        return fetch(url, options);

   }

   async getBooks(token){
    return this.api("allBooks",`GET`,null, token).then(data=>data.json());

   }

    async sortedBookByTitle(){

        let x = await this.api(`sortBooksByTitle`,`GET`);

        let y = await x.json();

        console.log(y);

        return y;

    }

    async sortedBooksByTitleAsc(){

        let x = await this.api(`sortBooksByTitleAsc`,`GET`);

        let y = await x.json();

        return y;
    }

    async findBookByIAuthor(author){

        try{
            let data = await this.api(`getBooksByAuthor/${author}`,`GET`);

            let data2 = await data.json();

            if(data2.status == 400){

                alert(data2.message);

                return [];
            }

            else{

                
                return data2;
            }



        }catch(e){


        }

        

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

        return data2;
    }

    async deleteDasBook(id){

       let data =  await this.api(`deleteBook/${id}`,`DELETE`);
        let data2 = data.json();
    }

    async getTheBookById(id){
        return this.api(`findBook/${id}`,`GET`).then(data=>data.json());
    }

    async getAllDasGenres(token){

        let data = await this.api('getAllGenres','GET',null,token);
        let data2 = await data.json();

       
        return data2;
    }

    async findByGenre(genre){

        let data = await this.api(`findByGenre/${genre}`,`GET`);
        let data2 = await data.json();

        console.log(data2);
        return data2;
    }

    async login(user){

        let x = await this.api(`user/login`,`POST`,user);
        let message = "error";
        if(x.status==403){
            return message;
        }else{
            return x;
        }

       
    }





}

















