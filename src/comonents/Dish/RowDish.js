import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Add_to_Basket } from "../Basket/actions";
import { getPurchaseQuantityById } from "../Basket/selectors";
import "../Dish/rowDish.css";
import { getProductById } from "../Menu/selectors";
import { Tab } from "../Tab/Tab";

const RowDish = ({ img, id = 0, changeTotalPrice = () => {} }) => {
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

  const dispatch = useDispatch();

  const product = useSelector(getProductById(id));
  let startQuanity = useSelector(getPurchaseQuantityById(id));

  // console.log("start: " + startQuanity);

  const [quanity, setQuanity] = useState(
    useSelector(getPurchaseQuantityById(id))
  );

  const setQuanityWithCheck = (newQuanity) => {
    if (newQuanity < 0) {
      startQuanity = 0;
      //   setQuanity(0);
    } else {
      //   setQuanity(newQuanity);
      // changeTotalPrice((newQuanity - startQuanity) * product.price);
      startQuanity = newQuanity;
      dispatch(Add_to_Basket({ id: id, quanity: newQuanity }));
    }
  };

  changeTotalPrice(startQuanity * product.price);

  const [image, setImage] = useState({
    imageName: null,
    data: null,
  });

  useEffect(() => {
    downloadImageFromServer(product.img).then((res) => {
      console.log(res);
      setImage({
        imageName: img,
        data: res,
      });
    });
  }, []);

  return (
    <div className="rowDish">
      <div style={{ width: "240px", height: "240px", marginRight: "40px" }}>
        <img className="rowDish_img" src={image.data}></img>
      </div>
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

      <div className="rowDish_price">{product.price * startQuanity} ₽</div>
    </div>
  );
};

export { RowDish };
