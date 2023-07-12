import { useNavigate } from "react-router-dom";

export const CardDetails = () => {
  const navigate = useNavigate();
  return (
    <div>
      Card Details<button onClick={() => navigate("/")}>Card Listings</button>
    </div>
  );
};
