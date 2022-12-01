import React , {useContext} from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import {Context} from '../../Context';
import Cookies from "js-cookie";
import { Navigate, useNavigate } from "react-router-dom";

export default function Header(){


    const [user,setUser]=useContext(Context);
    let navigate = useNavigate();

    return(
        <>

        {
            user
            ?
            (
                <div className="welcome">

                <p>Warm Welcome {user.mail} </p>
                <p className="logout" onClick={()=>{
                    Cookies.remove("authenticatedUser");
                    navigate("/");
                    setUser(undefined); x
                }}>Logout</p>
                </div>
              
            )
            :
            (
                <p>Please login or register </p>
            
            )
        }
        
        </>
    )
}