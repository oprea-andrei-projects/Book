import React,{useState} from "react";

export default function CreateBook({addB,v}){


    let [title, setTitle] = useState('');
    let [author, setAuthor] = useState('');
    let [genre, setGenre] = useState('');
    let [year, setYear] = useState();


    let handleBookChange = (e)=>{

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



    let handleCreate = async ()=>{


        let book={

            
            title,
            author,
            genre,
            year

        }

        await addB(book);


        v(0);
    }


    return(


        <>

            <h1>New Book</h1>

            <form class="myForm" onChange={handleBookChange} >
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

                <input type="button" value="Create New Book" id="newBook" className="newBook" onClick={handleCreate} />

                <input type="button" value="Cancel" id="cancel" className="cancel"  />

            


            </form>
        
        
        
        </>




    )




}