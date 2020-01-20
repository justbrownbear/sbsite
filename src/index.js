import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Faq } from "./pages/FAQ/Faq";
import { Projects } from "./pages/Projects/Projects";
import { Order } from "./pages/Order/Order";

import "./sass/bootstrap-4.0.0/bootstrap.scss";
import "./sass/style.scss";



const routing = (
	<Router>
		<div className="">
			<Route exact path="/" component={ Home } />
			<Route exact path="/faq" component={ Faq } />
			<Route exact path="/projects" component={ Projects } />
			<Route exact path="/order" component={ Order } />
		</div>
	</Router>
);

ReactDOM.render( routing, document.getElementById( "root" ) );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
