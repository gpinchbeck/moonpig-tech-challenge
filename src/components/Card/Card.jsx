import "./Card.css";

export const Card = ({ item }) => {
  return (
    <div className="card">
      <img
        className="cardImage"
        src={item["ProductImage"]["Link"]["Href"]}
        alt={item["ProductImage"]["Link"]["Title"]}
      />
    </div>
  );
};
