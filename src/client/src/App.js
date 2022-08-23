import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import CreateBook from "./Components/AddBook/CreateBook";
import 'bootstrap/dist/css/bootstrap.min.css';
import Update from "./Components/Update/Update";

export default () => {




    return <>

        <BrowserRouter>


            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add" element={<CreateBook />} />
                <Route path="/update/:id" element={<Update />} />
                
            </Routes>


        </BrowserRouter>

    </>



}