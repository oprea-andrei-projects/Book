import React, { useEffect, useState } from "react";
import Api from "../../Api.js";

import Book from "./Book.js";

function Home() {

    let [books,setBooks]=useState([]);


    let fetchBooks = async ()=>{

        let api= new Api();


        let x = await api.getBooks();


       


        setBooks(x);


    }


    useEffect(()=>{

        fetchBooks();

    },[])

    useEffect(()=>{

       
        console.log(books);

    },[books])

    return (

        <>
            <header>
                <button class="buton">Create Book</button>
                <input type="button" value="Sort By Title" id="sortTitle" class="sortTitle" />
                <label for="author">Author </label>
                <input type="text" id="author" class="author" />
                <input type="button" value="Find" id="findBook" class="findBook" />
                <input type="button" value="Oldie" id="findOldie" class="findOldie" />
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