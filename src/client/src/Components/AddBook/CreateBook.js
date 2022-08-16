
import Api from "../../Api";
import React, { useEffect, useState } from "react";
import Book from "../Home/Book";



function CreateBook(){


    let [title,setTitle] = useState('');
    let [author,setAuthor] = useState('');
    let [genre,setGenre] = useState('');
    let [year,setYear] = useState('');


    useEffect(()=>{


         

    },[title,author,genre,year])







    let handleChange=(e)=>{

        
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

    let handleClick = async ()=>{


       
        let book={

            title,
            author,
            genre,
            year

        }

        let api = new Api();

        let x = await api.createBook(book);
    }


    return(

        <>

            <h1>New Book</h1>

            <form class="myForm" onChange={handleChange} >
                <p>
                    <label for="title">Title</label>
                    <input name="title" type="text" id="title" className="title" />
                </p>

                <p>
                    <label for="author">Author</label>
                    <input name="author" type="text" id="author" className="author" />
                </p>

                <p>
                    <label for="genre">Genre</label>
                    <input name="genre" type="text" id="genre" className="genre" />
                </p>

                <p>
                    <label for="year">Year</label>
                    <input name="year" type="number" id="year" className="year" />
                </p>

                <input type="button" value="Create New Book" id="newBook" className="newBook" onClick={handleClick} />

                <input type="button" value="Cancel" id="cancel" className="cancel" />


            </form>
            </>
    )
}


export default CreateBook;