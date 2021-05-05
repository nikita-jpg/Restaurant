import React, { useState } from "react";
import './App.css';
import { Header } from './comonents/Header/Header';
import { Menu } from "./comonents/Menu/Menu";
import {TabContent} from './comonents/TabContent/TabContent';

function App() {

  const items = [
    { title: 'Меню', content: <Menu/> },
    { title: 'Paris', content: <Menu/>},
    { title: 'Tokyo', content: <Menu/> },
  ];

  // const items_names = items.map.

const [activeNumber, setActive] = useState(0)

const openTab = e => setActive(+e.target.dataset.index);



  return (
    <div className="App">
      <Header tabsNames={items} setTab={openTab} activeNumber={activeNumber}></Header>
      <TabContent {...items[activeNumber]} />
    </div>
  );
}

export default App;
