import "./Card.css";

export const Card = ({ src, alt, width }) => {
  return <img className="singleCard" width={width} src={src} alt={alt} />;
};
