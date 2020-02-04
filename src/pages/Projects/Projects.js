import * as React from "react";
import loadable from "@loadable/component";

const Header = loadable( () => import( /* webpackChunkName: "Header" */ "../../components/Header/Header" ) );
const Breadcrumbs = loadable( () => import( /* webpackChunkName: "Breadcrumbs" */ "../../components/Breadcrumbs/Breadcrumbs" ) );
const Footer = loadable( () => import( /* webpackChunkName: "Footer" */ "../../components/Footer/Footer" ) );

import "../../sass/components/projects.scss";
import { HashLink as Link } from "react-router-hash-link";


const TITLE = "Projects";


const projectImages =
[
	{
		id: 1,
		file: "images/projects/project__image_01.webp"
	},
	{
		id: 2,
		file: "images/projects/project__image_02.webp"
	},
	{
		id: 3,
		file: "images/projects/project__image_03.webp"
	},
	{
		id: 4,
		file: "images/projects/project__image_04.webp"
	},
	{
		id: 5,
		file: "images/projects/project__image_04.webp"
	},
	{
		id: 6,
		file: "images/projects/project__image_01.webp"
	},
	{
		id: 7,
		file: "images/projects/project__image_02.webp"
	}
];



export default function Projects()
{
	return (
		<>
			<Header />
			<Breadcrumbs title={ TITLE }/>

			<div className="bw-section__projects">
				<div className="bw-section__projects-wrap">
					<div className="bw-section__projects-list">
						<div className="container-fluid">
							<div className="row no-gutters">
								{
									projectImages.map( ( element ) => <ProjectImage id={ element.key } { ...element } /> )
								}
							</div>
						</div>
					</div>
					<div className="bw-section__projects-list-button">
						<button className="bw-btn-border">Load More</button>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
}



function ProjectImage( props )
{
	const { file } = props;

	const style = { backgroundImage: "url(" + file + ")" };


	return (
		<div className="col-lg-3 col-md-3 col-sm-6">
			<Link to="/" className="bw-recent-works__slider-item" style={ style }></Link>
		</div>
	);
}