import React, { useState } from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
  } from "react-router-dom";


import Api from "../../Api.js";


export default function Update(){

    // let [book, setBook] = useState({id : 219, title : 'bbbbbbb', author: 'ccccccc', genre:"ddddddd", year: 11111 });


    let [id, setId] = useState(220);
    let [title, setTitle] = useState('bbbbbbb');
    let [author, setAuthor] = useState('ccccccc');
    let [genre, setGenre] = useState('ddddddd');
    let [year, setYear] = useState(11111);
   
    
    // useEffect(()=>{


         

    // },[title,author,genre,year])
    
    
    
    
    

    let updateDasBook= async(e)=>{

        let book={



            id,
            title,
            author,
            genre,
            year

        }

        let api = new Api();

        let x = await api.updateTheBook(book);


    }

    let handleOnChnage = (e)=>{


        let obj=e.target;

        console.log(obj);

        if(obj.classList.contains("title")){

           setTitle(obj.value);

            console.log(title);
        }

        if(obj.classList.contains("author")){

           setAuthor(obj.value);

            console.log(author);
        }

        if(obj.classList.contains("genre")){

           setGenre(obj.value);

            console.log(genre);
        }

        if(obj.classList.contains("year")){

           setYear(obj.value);

            console.log(year);
        }


    }

    let handleDelete = async ()=>{

        let book={

            id,
            title,
            author,
            genre,
            year

        }

        let api = new Api();

        await api.deleteDasBook(book.id);



    }


    const history = useHistory();
   
  





    return(


        <>

            <h1>Update My Book</h1>

            <form className="myUpdateForm" onChange={handleOnChnage}>

                <p>
                    <label for="title">Title</label>
                    <input name="title" type="text" id={id} className="title" value={title} />
                </p>

                <p>
                    <label for="author">Author</label>
                    <input name="author" type="text" id="author" className="author" value={author} />
                </p>

                <p>
                    <label for="genre">Genre</label>
                    <input name="genre" type="text" id="genre" className="genre" value={genre} />
                </p>

                <p>
                    <label for="year">Year</label>
                    <input name="year" type="number" id="year" className="year" value={year} />
                </p>

                <input type="button" value="Update Book" id="newBook" className="newBook" onClick={updateDasBook} />

                <input type="button" value="Delete Book" id="deleteBook" class="deleteBook" onClick={handleDelete} />

                <input type="button" value="Cancel" id="cancel" class="cancel" onClick={history.goBack}  />


            </form>

            
        
        </>
    )
}