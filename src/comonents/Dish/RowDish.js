import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Add_to_Basket } from "../Basket/actions";
import { getPurchaseQuantityById } from "../Basket/selectors";
import "../Dish/rowDish.css";
import { getProductById } from "../Menu/selectors";
import { Tab } from "../Tab/Tab";

const RowDish = ({ img, id = 0 }) => {
  const dispatch = useDispatch();

  const product = useSelector(getProductById(id));
  let startQuanity = useSelector(getPurchaseQuantityById(id));

  console.log("start: " + startQuanity);

  const [quanity, setQuanity] = useState(
    useSelector(getPurchaseQuantityById(id))
  );

  const setQuanityWithCheck = (newQuanity) => {
    if (newQuanity < 0) {
      startQuanity = 0;
      //   setQuanity(0);
    } else {
      //   setQuanity(newQuanity);
      startQuanity = newQuanity;
      dispatch(Add_to_Basket({ id: id, quanity: newQuanity }));
    }
  };

  return (
    <div className="rowDish">
      <div
        className="rowDish_img"
        style={{
          backgroundImage: `url(${product.img})`,
        }}
      ></div>
      <div className="rowDish_titleAndDescription">
        <div className="rowDish_title">{product.title}</div>
        <p className="rowDish_description">{product.description}</p>
      </div>

      <div className="rowDish_btns">
        <Tab
          text={"-"}
          classNameNew="rowDish_btn"
          setState={() => {
            setQuanityWithCheck(startQuanity - 1);
          }}
        ></Tab>
        <p className="rowDish_quanity">{startQuanity}</p>
        <Tab
          text={"+"}
          classNameNew="rowDish_btn"
          setState={() => {
            setQuanityWithCheck(startQuanity + 1);
          }}
        ></Tab>
      </div>
    </div>
  );
};

export { RowDish };
