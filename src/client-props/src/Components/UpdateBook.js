import React, {useState, useEffect } from "react";

export default function UpdateBook({dasBook,ub,delB}){


    let [id, setId] = useState(dasBook.id);
    let [title, setTitle] = useState('');
    let [author, setAuthor] = useState('');
    let [genre, setGenre] = useState('');
    let [year, setYear] = useState();

    let handleTheUpdate = async()=>{

        
        
        let book={



            id,
            title,
            author,
            genre,
            year

        }

        await ub(book);

        

    }

    let handleDelete = async()=>{

        await delB(id);

    }

    let handleTheChange =(e)=>{


        let obj = e.target;

        if(obj.classList.contains("title")){

          setTitle(obj.value);
           
        }

        if(obj.classList.contains("author")){

            setAuthor(obj.value);
        }

        if(obj.classList.contains("genre")){

           setGenre(obj.value);
        }

        if(obj.classList.contains("year")){

            setYear(obj.value);
        }
    }
  
  

    return(
        <>


            <h1>Update My Book</h1>

            <form className="myUpdateForm" onChange={handleTheChange}>

                <p>
                    <label for="title">Title</label>
                    <input name="title" type="text" id="title" className="title" defaultValue={dasBook.title}/>
                </p>

                <p>
                    <label for="author">Author</label>
                    <input name="author" type="text" id="author" className="author" defaultValue={dasBook.author} />
                </p>

                <p>
                    <label for="genre">Genre</label>
                    <input name="genre" type="text" id="genre" className="genre" defaultValue={dasBook.genre} />
                </p>

                <p>
                    <label for="year">Year</label>
                    <input name="year" type="number" id="year" className="year" defaultValue={dasBook.year}/>
                </p>

                <input type="button" value="Update Book" id="newBook" className="newBook" onClick={handleTheUpdate} />

                <input type="button" value="Delete Book" id="deleteBook" className="deleteBook" onClick={handleDelete} />

                <input type="button" value="Cancel" id="cancel" className="cancel"   />


            </form>
                    
        
        
        
        </>
    )
}