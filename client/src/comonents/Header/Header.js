import '../Header/header.css'
import '../Header/header__central_btn.css'
import { Tab } from '../Tab/Tab';
import logo from '../../svg/logo.svg'


const Header = ({tabsNames, setTab, activeNumber}) => {

    return (
      <div className="header header_inside">
          <img src={logo} className="header__logo"/>
          <div className="header__central_btn">

              {tabsNames.map((n, i) => (
                  <Tab 
                  text={n.title} 
                  setState={setTab}
                  index={i}
                  isActive={i === activeNumber ? true : false}
                  ></Tab>
              ))}
          </div>
          <Tab text="Бронь"></Tab>
      </div>
    )
}

export {Header}