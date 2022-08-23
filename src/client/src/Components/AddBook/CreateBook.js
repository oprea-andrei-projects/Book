
import Api from "../../Api";
import React, { useEffect, useState } from "react";
import Book from "../Home/Book";
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from "react-router-dom"


function CreateBook() {


    let [title, setTitle] = useState('');
    let [author, setAuthor] = useState('');
    let [genre, setGenre] = useState('');
    let [year, setYear] = useState('');

    let [clicked, setClicked] = useState(false);
    let [errors, setErrors] = useState([]);





    useEffect(() => {

        valid();


    }, [])



    let navigate = useNavigate();


    let valid = () => {

        setErrors([]);


        if (title == "") {

            setErrors(prev => {

                return [...prev, "Tilte is required"];
            })
        }

        if (author == "") {


            setErrors(prev => {

                return [...prev, "Author is required"]
            })
        }

        if (genre == "") {

            setErrors(prev => {

                return [...prev, "Genre is required"]
            })
        }

        if (year == "") {

            setErrors(prev => {

                return [...prev, "Year is required"]
            })
        }





    }


    let handleChange = (e) => {

        let obj = e.target;

        console.log(obj);
        if (obj.classList.contains("title")) {

            setTitle(obj.value);




        }

        if (obj.classList.contains("author")) {

            setAuthor(obj.value);




        }

        if (obj.classList.contains("genre")) {

            setGenre(obj.value);


        }

        if (obj.classList.contains("year")) {

            setYear(obj.value);




        }

        valid();
    }

    let handleClick = async () => {


        setClicked(true);
        let book = {

            title,
            author,
            genre,
            year

        }

        let api = new Api();


        if (errors.length == 0) {

            let x = await api.createBook(book);

            navigate("/");

        }                       
    }

    let handleCancel = () => {


        navigate("/")

    }


    return (

        <>


            <h1>New Book</h1>

            <form class="myForm" onChange={handleChange} >
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

                <input type="button" value="Create New Book" id="newBook" className="newBook" onClick={handleClick} />

                <input type="button" value="Cancel" id="cancel" className="cancel" onClick={handleCancel} />

                {
                    clicked && errors.map(e => {

                        return <Alert key='danger' variant='danger'>
                                {e}
                                </Alert>
                    })
                }


            </form>
        </>
    )
}


export default CreateBook;