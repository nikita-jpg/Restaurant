import React, { useState } from "react";
import './App.css';
import { Header } from './comonents/Header/Header';

function App() {
  const TabContent = ({ title, content }) => (
    <div className="tabcontent">
      <h3>{title}</h3>
      <p>{content}</p> 
    </div>
  );

  const items = [
    { title: 'London', content: 'London is the capital city of England.' },
    { title: 'Paris', content: 'Paris is the capital of France.' },
    { title: 'Tokyo', content: 'Tokyo is the capital of Japan.' },
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
