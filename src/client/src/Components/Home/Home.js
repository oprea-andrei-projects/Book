import React, { useEffect, useState,useRef } from "react";
import Api from "../../Api.js";
import Book from "./Book.js";
import Spinner from 'react-bootstrap/Spinner';


import {useNavigate} from "react-router-dom"


function Home() {

    let [books,setBooks]=useState([]);
    let [genres, setGenres] = useState([]);



    let navigate=useNavigate();


    let inputEl = useRef(null);



    let fetchBooks = async ()=>{

        let api= new Api();

        let x = await api.getBooks();

        setBooks(x);


    }


    useEffect(()=>{

        fetchBooks();
        genre();

    },[])

 

    let handleSortByTitle = async ()=>{

        let api = new Api();

        let newArr = await api.sortedBookByTitle();

        setBooks(newArr);
    }

    let findTheBook = async ()=>{

        let api = new Api();

        let myArr = [];
        myArr = await api.findBookByIAuthor(inputEl.current.value);

        if(myArr.length!=0){
            setBooks(myArr);
        }
       
       
    }

    let handleOldie = async ()=>{

        let api = new Api();

        let arr = await api.findoldie();

        
      
        setBooks([arr]);


    }

    let createBook = async ()=>{


        
        navigate("/add");


    }

    let genre = async ()=>{

        let api = new Api();

        let genreArray = await api.getAllDasGenres();

       setGenres(genreArray);

       console.log(genres);

    }

    let handleSelection = async (e)=>{


        let obj = e.target;
        let api = new Api();
        let y = await api.findByGenre(obj.value);
       
        setBooks(y);


    }

    let handleTitle = async ()=>{

        console.log('clicked');
        let api = new Api();

        let x = await api.getBooks();

        setBooks(x);
    }

    let handleSortByTitleAsc = async ()=>{


        let api = new Api();

        let x = await api.sortedBooksByTitleAsc();
        
        setBooks(x);

    }


 

    return (

        <>
            <header>

                <div className="menu">

                    <h1 onClick={handleTitle}>Books</h1>

                    
                    <input type="text" ref={inputEl} id="author" className="author" />
                    <button className="findBook" onClick={findTheBook}>Find By Author</button>


                </div>

                <div className="selections">

                    <button className="buton" onClick={createBook}>Create Book</button>
                    
                    <button className="sortTitle" onClick={handleSortByTitle}>Sort By Title Desc</button>
                    <button className="sortTitleAsc" onClick={handleSortByTitleAsc}>Sort By Title Asc</button>

                    <select id="selItem" className="div1"  onChange={handleSelection}> 
                        <option placeholder="Choose Genre">Choose Genre</option>       

                    {
                        genres.map(e=>{  
                            return <option value={e} >{e}</option>
                        })
                    }

                    </select>      

                </div>
                
            </header>




            <table class="myTable">


                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Author</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Year</th>
                    </tr>

                </thead>

                <tbody class="tableBody">
                    {
                        books.length==0
                        ?
                        (
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        )
                        :
                        (
                            books.map(element=>{

                                return <Book book={element}/>
                            })
                        )
                    }
                </tbody>

            </table>

        </>


    );


}

export default Home;