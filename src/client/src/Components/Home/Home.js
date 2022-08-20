import React, { useEffect, useState,useRef } from "react";
import Api from "../../Api.js";
import Book from "./Book.js";

function Home() {

    let [books,setBooks]=useState([]);


    let inputEl = useRef(null);



    let fetchBooks = async ()=>{

        let api= new Api();

        let x = await api.getBooks();

        setBooks(x);


    }


    useEffect(()=>{

        fetchBooks();

    },[])

    let handleSortByTitle = async ()=>{

        let api = new Api();

        let newArr = await api.sortedBookByTitle();

        setBooks(newArr);
    }

    let findTheBook = async ()=>{

     
        let api = new Api();

        let myArr = await api.findBookByIAuthor(inputEl.current.value);

       
       setBooks(myArr);

    }

    let handleOldie = async ()=>{

        let api = new Api();

        let arr = await api.findoldie();

        
      
        setBooks([arr]);


    }

    let createBook = async ()=>{


        


    }
 

    return (

        <>
            <header>
                <button className="buton" onClick={createBook}>Create Book</button>
              
                <button className="sortTitle" onClick={handleSortByTitle}>Sort By Title</button>

                <label for="author">Author </label>
                <input type="text" ref={inputEl} className="author" />
                <button className="findBook" onClick={findTheBook}>Find</button>


                <input type="button" value="Oldie" id="findOldie" className="findOldie" onClick={handleOldie} />

                <label for="box1">Search Genre</label>
                <select id="box1" class="box1">
                </select>
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
                            <p>Loading ....</p>
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