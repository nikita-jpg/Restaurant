import React, { useState } from "react";
import './App.css';
import { Header } from './comonents/Header/Header';
import { Menu } from "./comonents/Menu/Menu";
import {TabContent} from './comonents/TabContent/TabContent';
import { Tables } from "./comonents/Tables/Tables";

function App() {

  const items = [
    { title: 'Меню', content: <Menu/> },
    { title: 'О ресторане', content: <Menu/>},
    { title: 'Бронь', content: <Tables/> },
  ];

  // const items_names = items.map.

const [activeNumber, setActive] = useState(2)

const openTab = e => setActive(+e.target.dataset.index);
  return (
    <div className="App">
      <Header tabsNames={items} setTab={openTab} activeNumber={activeNumber}></Header>
      <TabContent {...items[activeNumber]} />
    </div>
  );
}

export default App;
