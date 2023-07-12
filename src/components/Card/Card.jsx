import "./Card.css";

export const Card = ({ src, alt }) => {
  return <img className="singleCard" src={src} alt={alt} />;
};
