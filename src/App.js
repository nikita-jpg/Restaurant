import React, { useState } from "react";
import "./App.css";
import { About } from "./comonents/About/About";
import { Basket } from "./comonents/Basket/Basket";
import { Header } from "./comonents/Header/Header";
import { Menu } from "./comonents/Menu/Menu";
import { TabContent } from "./comonents/TabContent/TabContent";
import { Tables } from "./comonents/Tables/Tables";

const testData = [
  {
    title: "Milk",
    description:
      "Домашний лаваш, мясо говядины и баранины, помидоры, соленые огурцы, картофель по-деревенски, домашний лаваш",
    id: 0,
    type: "Milk",
    img: "https://www.sunhome.ru/i/wallpapers/73/krasnoe-selo.orig.jpg",
    price: 200,
  },
  {
    title: "Fish",
    description:
      "Домашний лаваш, мясо говядины и баранины, помидоры, соленые огурцы, картофель по-деревенски, домашний лаваш",
    id: 1,
    type: "Fish",
    img: "https://www.sunhome.ru/i/wallpapers/73/krasnoe-selo.orig.jpg",
    price: 200,
  },
  ,
  {
    title: "Vegetables",
    description:
      "Домашний лаваш, мясо говядины и баранины, помидоры, соленые огурцы, картофель по-деревенски, домашний лаваш",
    id: 2,
    type: "Vegetables",
    img: "https://www.sunhome.ru/i/wallpapers/73/krasnoe-selo.orig.jpg",
    price: 200,
  },
];
const testData2 = [
  {
    title: "Milk",
    description:
      "Домашний лаваш, мясо говядины и баранины, помидоры, соленые огурцы, картофель по-деревенски, домашний лаваш",
    id: 3,
    type: "Fish",
    img: "https://www.sunhome.ru/i/wallpapers/73/krasnoe-selo.orig.jpg",
    price: 200,
  },
  {
    title: "Fish",
    description:
      "Домашний лаваш, мясо говядины и баранины, помидоры, соленые огурцы, картофель по-деревенски, домашний лаваш",
    id: 4,
    type: "Fish",
    img: "https://www.sunhome.ru/i/wallpapers/73/krasnoe-selo.orig.jpg",
    price: 200,
  },
  ,
  {
    title: "Vegetables",
    description:
      "Домашний лаваш, мясо говядины и баранины, помидоры, соленые огурцы, картофель по-деревенски, домашний лаваш",
    id: 5,
    type: "Fish",
    img: "https://www.sunhome.ru/i/wallpapers/73/krasnoe-selo.orig.jpg",
    price: 200,
  },
];
const testData3 = [
  {
    title: "Milk",
    description:
      "Домашний лаваш, мясо говядины и баранины, помидоры, соленые огурцы, картофель по-деревенски, домашний лаваш",
    id: 6,
    type: "Vegetables",
    img: "https://www.sunhome.ru/i/wallpapers/73/krasnoe-selo.orig.jpg",
    price: 200,
  },
  {
    title: "Fish",
    description:
      "Домашний лаваш, мясо говядины и баранины, помидоры, соленые огурцы, картофель по-деревенски, домашний лаваш",
    id: 7,
    type: "Vegetables",
    img: "https://www.sunhome.ru/i/wallpapers/73/krasnoe-selo.orig.jpg",
    price: 200,
  },
  ,
  {
    title: "Vegetables",
    description:
      "Домашний лаваш, мясо говядины и баранины, помидоры, соленые огурцы, картофель по-деревенски, домашний лаваш",
    id: 8,
    type: "Vegetables",
    img: "https://www.sunhome.ru/i/wallpapers/73/krasnoe-selo.orig.jpg",
    price: 200,
  },
];
function App() {
  const items = [
    // { title: "Молочка", content: <Menu data={testData} type="Milk" /> },
    { title: "Рыба", content: <Menu data={testData2} type="Fish" /> },
    { title: "Овощи", content: <Menu data={testData3} type="Vegetables" /> },
    { title: "Корзина", content: <Basket /> },
  ];

  const [activeNumber, setActive] = useState(2);

  const openTab = (e) => setActive(+e.target.dataset.index);
  return (
    <div className="App">
      <Header
        tabsNames={items}
        setTab={openTab}
        activeNumber={activeNumber}
      ></Header>
      <TabContent items={items} activeNumber={activeNumber} />
    </div>
  );
}

export default App;
