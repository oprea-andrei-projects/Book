import React, { useState,useEffect } from "react";
import Api from "../../Api.js";
import {  useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Update(){

   


    let {id}=useParams();
    let [title, setTitle] = useState('');
    let [author, setAuthor] = useState('');
    let [genre, setGenre] = useState('');
    let [year, setYear] = useState();
   
    
    useEffect(()=>{


       getTheBook();

    

    },[])
    
    
    let getTheBook = async ()=>{

        let api = new Api();

        let x = await api.getTheBookById(id);

        setTitle(x.title);
        setAuthor(x.author);
        setGenre(x.genre);
        setYear(x.year);

    }
    
    const navigate = useNavigate();

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

        navigate("/");

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

        navigate("/");

    }

    let handleCancel = ()=>{

        navigate("/");
    }


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

                <input type="button" value="Cancel" id="cancel" class="cancel" onClick={handleCancel}  />


            </form>

            
        
        </>
    )
}