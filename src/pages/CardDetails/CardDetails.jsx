import { useNavigate, useLocation } from "react-router-dom";

export const CardDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const item = location.state.item;

  return (
    <div>
      Card Details<button onClick={() => navigate("/")}>Card Listings</button>
      <div>{item["Title"]}</div>
    </div>
  );
};
