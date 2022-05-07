import React from "react";
import "../Tab/tab.css";

const Tab = ({ text, setState, isActive, index, classNameNew }) => {
  return (
    <div
      className={`tab ${isActive === true ? "tab_active" : ""} ${classNameNew}`}
      onClick={setState}
    >
      <p data-index={index}>{text}</p>
    </div>
  );
};
export { Tab };
