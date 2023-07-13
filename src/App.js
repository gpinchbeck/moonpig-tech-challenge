import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import { CardListings } from "./pages/CardListings/CardListings";
import { CardDetails } from "./pages/CardDetails/CardDetails";
import { MantineProvider } from "@mantine/core";

function App() {
  return (
    <MantineProvider>
      <Routes>
        <Route path="/" element={<CardListings />} />
        <Route path="/details" element={<CardDetails />} />
      </Routes>
    </MantineProvider>
  );
}

export default App;
