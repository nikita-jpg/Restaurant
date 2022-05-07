import React, { useState, useEffect } from "react";
import axios from "axios";
import { Dish } from "../Dish/Dish";
import "../Menu/menu.css";

const Menu = ({ apiUrl = "http://localhost:8080/menu", data }) => {
  const [appState, setAppState] = useState([]);
  // const apiUrl = "http://localhost:8080/menu";

  useEffect(() => {
    axios.get(apiUrl).then((resp) => {
      const allDishes = resp.data;
      setAppState(allDishes);
    });
  });

  return (
    <div className="menu">
      {data.map((dish) => (
        <Dish
          title={dish.title}
          description={dish.description}
          //img={{ backgroundImage: `url(${apiUrl + "/" + dish.id})` }}
          img={{
            backgroundImage: `url(${"https://www.sunhome.ru/i/wallpapers/73/krasnoe-selo.orig.jpg"})`,
          }}
          id={dish.id}
        ></Dish>
      ))}
    </div>
  );
};

export { Menu };
