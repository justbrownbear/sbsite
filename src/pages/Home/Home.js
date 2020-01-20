import * as React from "react";
import { Header } from "../../components/Header/Header";
import { Slider } from "./parts/Slider/Slider";
import { AboutUs } from "./parts/AboutUs/AboutUs";
import { WhoWeAre } from "./parts/WhoWeAre/WhoWeAre";
import { PricingPackages } from "./parts/PricingPackages/PricingPackages";
import { Testimonials } from "./parts/Testimonials/Testimonials";
import { RecentWorks } from "./parts/RecentWorks/RecentWorks";
import { Footer } from "../../components/Footer/Footer";



export function Home()
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
