import { Link, useNavigate } from "react-router-dom";

export const CardListings = () => {
  const navigate = useNavigate();

  return (
    <div>
      Card Listings
      <button
        onClick={() => {
          navigate("/details");
        }}
      >
        details
      </button>
    </div>
  );
};
