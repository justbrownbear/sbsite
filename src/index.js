import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import { BrowserRouter as Router, Route } from "react-router-dom";

import loadable from "@loadable/component";

const Home = loadable( () => import( /* webpackChunkName: "Home" */ "./pages/Home/Home" ) );
const Faq = loadable( () => import( /* webpackChunkName: "Faq" */ "./pages/FAQ/Faq" ) );
const Projects = loadable( () => import( /* webpackChunkName: "Projects" */ "./pages/Projects/Projects" ) );
const Order = loadable( () => import( /* webpackChunkName: "Order" */ "./pages/Order/Order" ) );

import "./sass/bootstrap-4.0.0/bootstrap.scss";
import "./sass/style.scss";
import "./sass/fontello/css/fontello.css";



const routing = (
	<Router>
		<Route exact path="/" component={ ( props ) => <Home { ...props } /> } />
		<Route exact path="/faq" component={ ( props ) => <Faq { ...props } /> } />
		<Route exact path="/projects" component={ ( props ) => <Projects { ...props } /> } />
		<Route exact path="/order" component={ ( props ) => <Order { ...props } /> } />
	</Router>
);

ReactDOM.render( routing, document.getElementById( "root" ) );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
