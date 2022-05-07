import { useSelector } from "react-redux";
import { getPurchases } from "./selectors";
import "./basket.css";
import { getProducts } from "../Menu/selectors";
import { RowDish } from "../Dish/RowDish";

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

  console.log(purchases);
  return (
    <div className="basket">
      {purchases.map((purchase, i) => (
        <RowDish id={purchase.id}></RowDish>
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
  );
};

export { Basket };
