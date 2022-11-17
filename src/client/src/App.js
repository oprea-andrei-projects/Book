import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import CreateBook from "./Components/AddBook/CreateBook";
import 'bootstrap/dist/css/bootstrap.min.css';
import Update from "./Components/Update/Update";
import Login from "./Components/Login/Login";
import Register from "./Components/Login/Register";
import UserProvider from "./Context";
import Header from "./Components/Header/Header";

export default () => {




    return <>

        <BrowserRouter>

           <UserProvider>
            <Header />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/add" element={<CreateBook />} />
                <Route path="/update/:id" element={<Update />} />
                <Route path="/register" element={<Register />} />
            </Routes>
            </UserProvider>
        </BrowserRouter>

    </>



}