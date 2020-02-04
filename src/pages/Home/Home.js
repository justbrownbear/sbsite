import * as React from "react";
import loadable from "@loadable/component";
import Header from "../../components/Header/Header";
import Slider from "./parts/Slider/Slider";

// const Header = loadable( () => import( /* webpackChunkName: "Header" */ "../../components/Header/Header" ) );
// const Slider = loadable( () => import( /* webpackChunkName: "Slider" */ "./parts/Slider/Slider" ) );
const AboutUs = loadable( () => import( /* webpackChunkName: "AboutUs" */ "./parts/AboutUs/AboutUs" ) );
const WhoWeAre = loadable( () => import( /* webpackChunkName: "WhoWeAre" */ "./parts/WhoWeAre/WhoWeAre" ) );
const PricingPackages = loadable( () => import( /* webpackChunkName: "PricingPackages" */ "./parts/PricingPackages/PricingPackages" ) );
const Testimonials = loadable( () => import( /* webpackChunkName: "Testimonials" */ "./parts/Testimonials/Testimonials" ) );
const RecentWorks = loadable( () => import( /* webpackChunkName: "RecentWorks" */ "./parts/RecentWorks/RecentWorks" ) );
const Footer = loadable( () => import( /* webpackChunkName: "Footer" */ "../../components/Footer/Footer" ) );



export default function Home()
{
	return (
		<>
			<Header fromHomepage={ true } />
			<Slider />
			<AboutUs />
			<WhoWeAre />
			<RecentWorks />
			<Testimonials />
			<PricingPackages />
			<Footer />
		</>
	);
}
