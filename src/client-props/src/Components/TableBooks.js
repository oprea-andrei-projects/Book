import React from "react";
import Book from "./Book";

export default function TableBooks({carti,setV,sb}){





    return(

        <>


            <table className="myTable">


                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Author</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Year</th>
                    </tr>

                </thead>

                <tbody className="tableBody">

                    
                    {
                        carti.length==0
                        ?
                        (
                          <pre>Loading...</pre>
                        )
                        :
                        (
                            carti.map(element=>{
                                return <Book book={element} val={setV} getSB={sb}/>
                            })
                        )
                    }
                </tbody>

            </table>
        
        
        
        
        </>
    )
}