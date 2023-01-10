import React from "react";
import ReactDOM from "react-dom/client";
import './assets/stylesheets/main.css'
import SingleView from "./views/SingleView.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <SingleView />
    </React.StrictMode>
)