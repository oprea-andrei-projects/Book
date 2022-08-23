import React, { useEffect } from "react";
import { useNavigate ,Link } from "react-router-dom"

function Book({book}){


    useEffect(()=>{

        console.log("aici");
    },[])

    let navigate = useNavigate();

    let handleSelection = ()=>{



        navigate("/update");

    }

    return(

            <tr >
                <th>
                    <Link to={`/update/${book.id}`}>{book.title}</Link>
                </th>
                <td>{book.author}</td>
                <td>{book.genre}</td>
                <td>{book.year}</td>
            </tr>
    );




}

export default Book;