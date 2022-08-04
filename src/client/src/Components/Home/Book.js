import React, { useEffect } from "react";


function Book({book}){


    useEffect(()=>{

        console.log("aici");
    },[])

    return(

            <tr>
                <th>{book.title}</th>
                <td>{book.author}</td>
                <td>{book.genre}</td>
                <td>{book.year}</td>
            </tr>



    );




}

export default Book;