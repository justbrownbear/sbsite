import * as React from "react";
import { Header } from "../../components/Header/Header";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { FaqContent } from "./parts/FaqContent/FaqContent";
import { Footer } from "../../components/Footer/Footer";
import { faqQuestions } from "../../model/faqQuestions";

import "../../sass/components/faq.scss";


const TITLE = "FAQ";



export function Faq()
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