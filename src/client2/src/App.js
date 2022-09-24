import React, { useEffect } from 'react';
import { useState } from 'react';
import Header from './Components/Header';
import Api from './Api';
import TableBooks from './Components/TableBooks';
import CreateBook from './Components/CreateBook';
import UpdateBook from './Components/UpdateBook';

function App() {

  let [books, setBooks] = useState([]);
  let [val, setVal] =useState(0);
  // let [bid, setBid] = useState(0);

  let [book, setBook] = useState();

  let [theBook ,setTheBook]= useState({title: "Great Work of Time1",
  author: "Mr. Vicente Collins",
  genre: "Fiction narrative",
  year: 2873})

  let [genres, setGenres] = useState();

  let [sourceBook, setSB] = useState({id:" ",title: " ",
  author: " ",
  genre: " ",
  year: 0});

  useEffect(()=>{

    bringTheBooks();
    bringTheGenres();


  },[])



  let bringTheBooks = async ()=>{

    let api = new Api();

    let arr = await api.getAllTheBooks();

    setBooks(arr);
  }


  // let getById = async ()=>{

  //   let api = new Api();

  //   let carte = await api.getBookById(3);

  //   console.log(carte);

  //   setBook(carte);
  // }


  let updateBook = async (b)=>{

      let api = new Api();

      let buk = await api.updateTheBook(b);



  }

  let deleteDasBook = async (id)=>{


      let api = new Api();

      await api.deleteTheBook(id);
  }

  let addDasBook = async (b)=>{

    let api = new Api();

    await api.addTheBook(b);
  }

  let sortingTitleDesc = async ()=>{

    let api = new Api();

     let arr = await api.sortByTitleDesc();

     setBooks(arr)
  }

  let sortingTitleAsc = async ()=>{

    let api = new Api();

     let arr = await api.sortByTitleAsc();

     setBooks(arr)
  }

  let bringTheGenres = async ()=>{

    let api = new Api();

    let arr = await api.allTheGenres();

    setGenres(arr);
  }

  let bookByGenre = async (g)=>{

    let api = new Api();

    let arr = await api.findBookByGenre(g);

    setBooks(arr);
  }

 






  return (

     
           <>
              {
                (()=>{

                  if(val==1){

                    return <CreateBook addB={addDasBook} v={setVal}/>

                 
                  }else if(val==0){
        
        
                  return( <>
        
                    <Header setTab={setVal} std={sortingTitleDesc} sta={sortingTitleAsc} genuri={genres} />
                    <TableBooks carti={books} setV={setVal} sb={setSB} />
    
                  </>);
                }else if(val==2){


                  return(
                    
                    <UpdateBook dasBook = {sourceBook} ub = {updateBook} delB = {deleteDasBook}/>

                  )
                }

                  

                 })()
              }
           </>

  );
}

export default App;
