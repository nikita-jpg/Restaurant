import React, { useState, useEffect } from "react";
import axios from "axios";
import { Dish } from "../Dish/Dish";
import "../Menu/menu.css";
import { useDispatch, useSelector } from "react-redux";
import { Add_to_Menu } from "./actions";
import { getTypedProducts } from "./selectors";

const Menu = ({ apiUrl = "http://localhost:8080/menu", data, type }) => {
  const [appState, setAppState] = useState([]);
  // const apiUrl = "http://localhost:8080/menu";

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("products");
    // axios.get(apiUrl).then((resp) => {
    //   const allDishes = resp.data;
    //   setAppState(allDishes);

    //   // allDishes.map((dish) => {
    //   //   dispatch.apply(Add_to_Menu(dish));
    //   // });
    // });
    data.map((dish) => {
      dispatch(Add_to_Menu(dish));
    });
  }, []);

  const newData = useSelector(getTypedProducts(type));

  return (
    <div className="menu">
      {newData.map((dish) => (
        <Dish
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
