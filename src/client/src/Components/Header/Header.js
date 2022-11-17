import React , {useContext} from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import {Context} from '../../Context';


export default function Header(){


    const [user,setUser]=useContext(Context);

    return(
        <>

        {
            user
            ?
            (
                <p>Warm Welcome {user.mail}</p>
            )
            :
            (
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Sign In/Out
                </Dropdown.Toggle>

                <Dropdown.Menu>
                
                    <Dropdown.Item href="#/action-2">Login</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>

                </Dropdown.Menu>
            </Dropdown>
            
            )
        }
        
        </>
    )
}