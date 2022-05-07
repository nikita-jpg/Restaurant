import { el } from "date-fns/locale";
import { useState } from "react";
import "../Dish/dish.css";
import { Tab } from "../Tab/Tab";
const Dish = ({ title, description, img }) => {
  const [quanity, setQuanity] = useState(0);
  const setQuanityWithCheck = (newQuanity) => {
    if (newQuanity < 0) {
      setQuanity(0);
    } else {
      setQuanity(newQuanity);
    }
  };
  return (
    <div className="dish">
      <div className="dish_img" style={img}></div>
      <div className="dish_title">{title}</div>
      <p className="dish_description">{description}</p>
      <div className="dish_btns">
        <Tab
          text={"-"}
          classNameNew="dish_btn"
          setState={() => {
            setQuanityWithCheck(quanity - 1);
          }}
        ></Tab>
        <p className="dish_quanity">{quanity}</p>
        <Tab
          text={"+"}
          classNameNew="dish_btn"
          setState={() => {
            setQuanityWithCheck(quanity + 1);
          }}
        ></Tab>
      </div>
    </div>
  );
};

export { Dish };
