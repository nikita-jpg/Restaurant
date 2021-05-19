import React, { useState, useEffect } from "react";
import axios from 'axios'
import { Dish } from '../Dish/Dish'
import '../Menu/menu.css'



function Menu() {

    const [appState, setAppState] = useState("defolt");
    const apiUrl = "http://localhost:8080/menu";

    useEffect(() => {
    // axios
    // .get(url, {
    //   responseType: 'arraybuffer'
    // })
    // .then(response => Buffer.from(response.data, 'binary').toString('base64'))


    axios.get(apiUrl).then((resp) => {
        const allPersons = resp.data;
        // console.log(allPersons)
        setAppState(allPersons);
        });
    });

    const backgrondImg = {backgroundImage: `url(${apiUrl + '/' + appState.id_img})`}

    return(
        <div className="menu">
            <Dish title={appState.title} description={appState.description} img={backgrondImg}></Dish>
            <Dish title={appState.title} description={appState.description} img={backgrondImg}></Dish>
            <Dish title={appState.title} description={appState.description} img={backgrondImg}></Dish>
        </div>
    )
};

export { Menu }