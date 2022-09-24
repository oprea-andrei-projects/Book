import React from "react";

export default function Book({book,val,getSB}){


    let handleUpdate = ()=>{

        val(2); 

        getSB({

            id:book.id,
            title: book.title,
            author: book.author,
            genre: book.genre,
            year: book.year
        
        })
      
      

    }



    return(

        <>

            <tr >
                <th onClick={handleUpdate}>{book.title}</th>
                <td>{book.author}</td>
                <td>{book.genre}</td>
                <td>{book.year}</td>
            </tr>


        </>
    )
}