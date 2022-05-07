import "../Header/header.css";
import "../Header/header__central_btn.css";
import { Tab } from "../Tab/Tab";
import logo from "../../svg/logo.svg";
import { useSelector } from "react-redux";
import { getPurchasesQuantity } from "../Basket/selectors";

const Header = ({ tabsNames, setTab, activeNumber }) => {
  const basketQuantity = useSelector(getPurchasesQuantity);

  return (
    <div className="header header_inside">
      <img src={logo} className="header__logo" />

      <div className="header__central_btn">
        {tabsNames.slice(0, tabsNames.length - 1).map((n, i) => (
          <Tab
            text={n.title}
            setState={setTab}
            index={i}
            isActive={i === activeNumber ? true : false}
          ></Tab>
        ))}
      </div>

      <Tab
        text={
          tabsNames[tabsNames.length - 1].title +
          `${basketQuantity !== 0 ? ": " + basketQuantity : ""}`
        }
        setState={setTab}
        index={tabsNames.length - 1}
        isActive={tabsNames.length - 1 === activeNumber ? true : false}
      ></Tab>
    </div>
  );
};

export { Header };
