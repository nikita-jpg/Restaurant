import React from 'react';
import { useState } from 'react';
import '../Header/header.css'
import '../Header/header__central_btn.css'
import { Tab } from '../Tab/Tab';
import logo from '../../svg/logo.svg'




const Header = () => {
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

    const [activeNumber, setActive] = useState(0)

    const openTab = e => setActive(+e.target.dataset.index);



    return (
        <div className="header header_inside">
            <img src={logo} className="header__logo"/>
            <div className="header__central_btn">

                {items.map((n, i) => (
                    <Tab 
                    text={n.title} 
                    setState={openTab}
                    index={i}
                    isActive={i === activeNumber ? true : false}
                    ></Tab>
                ))}
                <TabContent {...items[activeNumber]} />
            </div>
            <Tab text="Бронь"></Tab>
        </div>
    )
}

export {Header}