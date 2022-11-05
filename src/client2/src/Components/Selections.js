import React from "react";

export default function Selections({setValue, titleDesc, titleAsc,genre, findByGenre}){

    
    let handleCreateBook = ()=>{


       
        setValue(1);


    }

    let handleTitleDesc = async ()=>{


       await titleDesc()

      
    }

    let handleTitleAsc = async ()=>{

        await titleAsc();
    }

    let handleOptions = async (e)=>{

        let obj = e.target;

        await findByGenre(obj.value);

    }



    return(
        <>
            <div className="selections">

                <button className="buton" onClick={handleCreateBook} >Create Book</button>

                <button className="sortTitle" onClick={handleTitleDesc}>Sort By Title Desc</button>
                <button className="sortTitleAsc" onClick={handleTitleAsc} >Sort By Title Asc</button>

                <select id="selItem" className="div1" onChange={handleOptions}> 
                    <option placeholder="Choose Genre">Choose Genre</option>       

                {
                 
              
                 genre.length==0
                 ?
                 (
                    <p>Loading...</p>
                 )
                 :
                 (
                    genre.map(e=>{  
                        return <option value={e}>{e}</option>
                    })

                 )
                
                }

                </select>      

            </div>
        
        
        
        
        
        </>
    )
}