import React, { useState } from "react";
import "./App.css";
import { About } from "./comonents/About/About";
import { Header } from "./comonents/Header/Header";
import { Menu } from "./comonents/Menu/Menu";
import { TabContent } from "./comonents/TabContent/TabContent";
import { Tables } from "./comonents/Tables/Tables";

const testData = [
  {
    title: "Ролл-донер",
    description:
      "Домашний лаваш, мясо говядины и баранины, помидоры, соленые огурцы, картофель по-деревенски, домашний лаваш",
    id: 0,
  },
  {
    title: "Ролл-донер",
    description:
      "Домашний лаваш, мясо говядины и баранины, помидоры, соленые огурцы, картофель по-деревенски, домашний лаваш",
    id: 1,
  },
  ,
  {
    title: "Ролл-донер",
    description:
      "Домашний лаваш, мясо говядины и баранины, помидоры, соленые огурцы, картофель по-деревенски, домашний лаваш",
    id: 2,
  },
];

function App() {
  const items = [
    { title: "Молочка", content: <Menu data={testData} /> },
    { title: "Рыба", content: <Menu data={testData} /> },
    { title: "Овощи", content: <Menu data={testData} /> },
    { title: "Корзина", content: <Tables /> },
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
      <TabContent {...items[activeNumber]} />
    </div>
  );
}

export default App;
