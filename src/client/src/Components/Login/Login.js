import Cookies from "js-cookie";
import React,{useState, useContext} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import Api from "../../Api";
import { Context } from "../../Context";
import {useNavigate} from "react-router-dom"


export default function Login(){

    let[mail, setMail] = useState("");
    let[password, setPassword] = useState("");

    const [user,setUser] = useContext(Context);


    let navigate = useNavigate();

    let handleChange = (e)=>{

        let obj = e.target;


        if(obj.classList.contains("mail")){

            
            setMail(obj.value);
        }

        if(obj.classList.contains("pass")){

           
            setPassword(obj.value);
        }
        

    }



    let displayLogInfo = async ()=>{

        let api = new Api();
        
        let loggedUser = {

            mail:mail,
            password:password

        }

       let response = await api.login(loggedUser);

       if(typeof response === "string"){

            alert("Mail and/or password incorrect !!!")

       }else{


       let token = response.headers.get("jwt-token");

       //console.log(token);

       let obj = await response.json();

      

        setUser({

            mail: obj.mail,
            token:token
        });

        console.log("cookies-inainte");

        console.log(user); //rezultat-> undefined !!!



        if(obj){
            console.log("cookies-dupa");

            Cookies.set("authenticatedUser",JSON.stringify({
                mail: obj.mail,
                token:token
            }));
        }

        navigate("/home");

       }

       




    }




    return(

    <>

    <Form onChange={handleChange}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <h1>Login</h1>
        <Form.Label>Email address</Form.Label>
        <Form.Control className="mail" type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control className="pass" type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primar" onClick={displayLogInfo}>
        Submit
      </Button>
      <Link to={"/register"}>Register</Link>
    </Form>
    </>
    
    
    )
}