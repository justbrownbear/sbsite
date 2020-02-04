import * as React from "react";
import loadable from "@loadable/component";

const Header = loadable( () => import( /* webpackChunkName: "Header" */ "../../components/Header/Header" ) );
const Breadcrumbs = loadable( () => import( /* webpackChunkName: "Breadcrumbs" */ "../../components/Breadcrumbs/Breadcrumbs" ) );
const FaqContent = loadable( () => import( /* webpackChunkName: "FaqContent" */ "./parts/FaqContent/FaqContent" ) );
const Footer = loadable( () => import( /* webpackChunkName: "Footer" */ "../../components/Footer/Footer" ) );


import "../../sass/components/faq.scss";
import { faqQuestions } from "../../model/faqQuestions";


const TITLE = "FAQ";



export default function Faq()
{
	return (
		<>
			<Header />
			<Breadcrumbs title={ TITLE }/>
			<FaqContent questions={ faqQuestions } />
			<Footer />
		</>
	);
}