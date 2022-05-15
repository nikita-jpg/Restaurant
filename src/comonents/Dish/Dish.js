import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Add_to_Basket } from "../Basket/actions";
import { getPurchaseQuantityById } from "../Basket/selectors";
import "../Dish/dish.css";
import { getProductById } from "../Menu/selectors";
import { Tab } from "../Tab/Tab";

//Для запросов на сервер
const http = axios.create({
  headers: {
    // Прикрепляем заголовок, отвечающий за параметры запуска.
    Authorization: "12345",
  },
});

async function downloadImageFromServer(imageName) {
  const image = await http
    .get(
      "http://127.0.0.1:18301/" + "getImage?imageName=" + imageName + ".webp",
      {
        responseType: "arraybuffer",
      }
    )
    .then((response) =>
      Buffer.from(response.data, "binary").toString("base64")
    );

  return `data:image/jpeg;base64,${image}`;
}

const Dish = ({ img, id = 0 }) => {
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

  const [image, setImage] = useState({
    imageName: null,
    data: null,
  });
  useEffect(() => {
    downloadImageFromServer(img).then((res) => {
      setImage({
        imageName: img,
        data: res,
      });
      console.log(res);
    });
  }, []);

  return (
    <div className="dish">
      <img src={image.data} className="dish_img"></img>
      <div className="dish_title">
        <div style={{ paddingLeft: "5px" }}>{product.title}</div>
        <div style={{ paddingRight: "5px" }}>{product.price} ₽</div>
      </div>
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
