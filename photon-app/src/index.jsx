import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./login.jsx";
import Register from "./registro.jsx";
import * as firebase from "firebase/app";
import { FirebaseAppProvider } from "reactfire";

const firebaseConfig = {
  apiKey: "AIzaSyBuo4FaxJh5dEUV09Ur2IvwEFqugsxaI-M",
  authDomain: "photon-a6f76.firebaseapp.com",
  projectId: "photon-a6f76",
  storageBucket: "photon-a6f76.appspot.com",
  messagingSenderId: "641665693145",
  appId: "1:641665693145:web:eb9fdd032181676d6755c8",
  measurementId: "G-X4EQFRTM3J",
};

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </BrowserRouter>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
