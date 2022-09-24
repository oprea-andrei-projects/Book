import React from "react";
import Menu from "./Menu";
import Selections from "./Selections";
import TableBooks from "./TableBooks";

export default function Header({setTab , std,sta,genuri}){





    return(

        <>
            <Menu />
            <Selections setValue={setTab} titleDesc={std} titleAsc={sta} genre={genuri} />
        
        </>
    )
}