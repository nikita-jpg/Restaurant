import React, { useState, useEffect } from "react";
import axios from "axios";
import { Dish } from "../Dish/Dish";
import "../Menu/menu.css";

const testData = [
  {
    title: "Ролл-донер",
    description:
      "Домашний лаваш, мясо говядины и баранины, помидоры, соленые огурцы, картофель по-деревенски, домашний лаваш",
    id: "",
  },
  {
    title: "Ролл-донер",
    description:
      "Домашний лаваш, мясо говядины и баранины, помидоры, соленые огурцы, картофель по-деревенски, домашний лаваш",
    id: "",
  },
  ,
  {
    title: "Ролл-донер",
    description:
      "Домашний лаваш, мясо говядины и баранины, помидоры, соленые огурцы, картофель по-деревенски, домашний лаваш",
    id: "",
  },
];

const Menu = ({ apiUrl = "http://localhost:8080/menu" }) => {
  const [appState, setAppState] = useState([]);
  // const apiUrl = "http://localhost:8080/menu";

  useEffect(() => {
    axios.get(apiUrl).then((resp) => {
      const allDishes = resp.data;
      setAppState(allDishes);
    });
  });

  const tebleRows = testData.length / 3;

  return (
    <div className="menu">
      {testData.map((dish) => (
        <Dish
          title={dish.title}
          description={dish.description}
          //img={{ backgroundImage: `url(${apiUrl + "/" + dish.id})` }}
          img={{
            backgroundImage: `url(${"https://www.sunhome.ru/i/wallpapers/73/krasnoe-selo.orig.jpg"})`,
          }}
        ></Dish>
      ))}
    </div>
  );
};

export { Menu };
