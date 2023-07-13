import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CardListings } from "./pages/CardListings/CardListings";
import { CardDetails } from "./pages/CardDetails/CardDetails";
import { MantineProvider } from "@mantine/core";

// const router = createBrowserRouter([
//   {
//     path: "/*",
//     element: <CardListings />,
//     children: [
//       {
//         path: "details",
//         element: <CardDetails />,
//       },
//     ],
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <MantineProvider> */}
    {/* <RouterProvider router={router} /> */}
    <Router>
      <App />
    </Router>
    {/* </MantineProvider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
