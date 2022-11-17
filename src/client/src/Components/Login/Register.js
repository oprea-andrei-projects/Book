import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Api from "../../Api";
import {useNavigate} from "react-router-dom"

export default function Register(){

    let[mail, setMail] = useState("");
    let[password, setPassword] = useState("");
    let[password2,setPassword2] = useState("");

    let navigate = useNavigate();

    let handleChange = (e)=>{

        let obj = e.target;

        if(obj.classList.contains("mail")){

            
            setMail(obj.value);
        }

        if(obj.classList.contains("pass")){

           
            setPassword(obj.value);
        }

        if(obj.classList.contains("repass")){

           
            setPassword2(obj.value);
        }
    }

    let handleRegister = async ()=>{

        let api = new Api();

        let registeredUser = {

            mail:mail,
            password:password
        }

        await api.register(registeredUser);

        navigate("/");


    }

    return(<>
    

    <Form onChange={handleChange}>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <h1>Register</h1>
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

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control className="repass" type="password" placeholder="Confirm Password" />
      </Form.Group>




      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primar" onClick={handleRegister}>
        Submit
      </Button>
      
    </Form>
    
    
    
    
    
    </>)
}