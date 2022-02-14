import Card from "./BasicCard";

const PrimaryContainer = ({data, onSelect}) => {
  return (
    <div className="container-primary">
      {data
        .filter((item) => item.selectable)
        .map((item) => (
          <Card key={item.id} item={item} onSelect={onSelect} />
        ))}
    </div>
  );
};

export default PrimaryContainer;
