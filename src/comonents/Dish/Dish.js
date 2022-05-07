import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Add_to_Basket } from "../Basket/actions";
import { getPurchaseQuantityById } from "../Basket/selectors";
import "../Dish/dish.css";
import { getProductById } from "../Menu/selectors";
import { Tab } from "../Tab/Tab";
const Dish = ({ title, description, img, id = 0 }) => {
  const dispatch = useDispatch();

  const product = useSelector(getProductById(id));
  const startQuanity = useSelector(getPurchaseQuantityById(id));

  const [quanity, setQuanity] = useState(startQuanity);

  const setQuanityWithCheck = (newQuanity) => {
    if (newQuanity < 0) {
      setQuanity(0);
    } else {
      setQuanity(newQuanity);
      dispatch(Add_to_Basket({ id: id, quanity: newQuanity }));
    }
  };

  return (
    <div className="dish">
      <div className="dish_img" style={img}></div>
      <div className="dish_title">{product.title}</div>
      <p className="dish_description">{product.description}</p>
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
