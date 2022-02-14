import Card from "./BasicCard";

const PrimaryContainer = ({data, onSelect}) => {
  return (
    <div className="CardContainer-Primary">
      {data
        .filter((item) => item.selectable)
        .map((item) => (
          <Card key={item.id} item={item} onSelect={onSelect} type="" />
        ))}
    </div>
  );
};

export default PrimaryContainer;
