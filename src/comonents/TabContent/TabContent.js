import "../TabContent/tabContent.css";
const TabContent = ({ items, activeNumber }) => {
  //   return <div>15</div>;

  return (
    <div className="tabcontent">
      {items.map((content, i) => (
        <div
          style={{
            display: `${activeNumber === i ? "" : "none"}`,
          }}
        >
          {content.content}
        </div>
      ))}
    </div>
  );
};

export { TabContent };
