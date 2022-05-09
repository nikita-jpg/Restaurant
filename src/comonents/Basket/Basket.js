import { useSelector } from "react-redux";
import { getPurchases } from "./selectors";
import "./basket.css";
import { getProducts } from "../Menu/selectors";
import { RowDish } from "../Dish/RowDish";
import { useState } from "react";
import { Tab } from "../Tab/Tab";

const Basket = ({}) => {
  const purchases = useSelector(getPurchases);

  const products = useSelector(getProducts);

  const getProductById = (id) => {
    let neededProduct = {};

    products.map((product) => {
      if (product.id === id) {
        neededProduct = product;
      }
    });

    return neededProduct;
  };

  const [totalPrice, setTotalPrice] = useState(0);
  let test = 0;

  const changeTotalPrice = (price) => {
    console.log(price);
    test += price;
    setTotalPrice(test);
  };

  return (
    <div className="basket">
      <div className="basket_rows">
        {purchases.map((purchase, i) => (
          <RowDish
            id={purchase.id}
            changeTotalPrice={changeTotalPrice}
          ></RowDish>
          // const product = getProductById(purchase.id);
          // return (
          //   <div className="basket_product">
          //     <div className="dish_title">{product.title}</div>
          //     <p className="dish_description">{product.description}</p>
          //     <p>{purchase.q}</p>
          //   </div>
          // );
        ))}
      </div>

      <div className="basket_total">
        <div>Итого: {totalPrice}</div>
        <div className="basket_totalBtn">
          <Tab
            text={"Купить"}
            // setState={setTab}
            // index={i}
            // isActive={i === activeNumber ? true : false}
          ></Tab>
        </div>
      </div>
    </div>
  );
};

export { Basket };
