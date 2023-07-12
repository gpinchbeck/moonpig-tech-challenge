import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { CardListings } from "./pages/CardListings/CardListings";
import { CardDetails } from "./pages/CardDetails/CardDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CardListings />} />
        <Route path="/details" element={<CardDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
