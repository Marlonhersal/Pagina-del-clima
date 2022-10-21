import React from "react";
import { ReactDOM } from "react";
import { render } from "react-dom";
import S from "./Nav.module.css"
import SearchBar from "../SearchBar/SearchBar.jsx";

export default function Nav(){
    return (
        <div className={S.container}>
            <div>Logo</div>
            <p>Inicio</p>
            <p>Desarrollador</p>
            <SearchBar/>
        </div>
    )
}