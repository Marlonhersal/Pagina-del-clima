import React from "react";
import S from "./SearchBar.module.css"

export default function SearchBar(){
    return (
        <div className={S.container}>
            <label htmlFor="input-city">Buscar</label>
            <input type="text" id="input-city" placeholder="Mexico city" />
        </div>
    )
}