import React, { useState, useEffect } from "react";
import axios from 'axios'
import { Dish } from '../Dish/Dish'
import '../Menu/menu.css'



function Menu() {

    const [appState, setAppState] = useState("defolt");

    useEffect(() => {
    const apiUrl = "http://localhost:8080/menu";
    axios.get(apiUrl).then((resp) => {
        const allPersons = resp.data;
        setAppState(allPersons.lastName);
        });
    });


    return(
        <div className="menu">
            <Dish inf={appState}></Dish>
            {/* <Dish></Dish>
            <Dish></Dish> */}
        </div>
    )
};

export { Menu }