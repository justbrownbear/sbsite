import * as React from "react";
import { Header } from "../../components/Header/Header";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";

import { Footer } from "../../components/Footer/Footer";

import "../../sass/components/projects.scss";


const TITLE = "Projects";


const projectImages =
[
	{
		id: 1,
		file: "images/projects/project__image_01.jpg"
	},
	{
		id: 2,
		file: "images/projects/project__image_02.jpg"
	},
	{
		id: 3,
		file: "images/projects/project__image_03.jpg"
	},
	{
		id: 4,
		file: "images/projects/project__image_04.jpg"
	},
	{
		id: 5,
		file: "images/projects/project__image_04.jpg"
	},
	{
		id: 6,
		file: "images/projects/project__image_01.jpg"
	},
	{
		id: 7,
		file: "images/projects/project__image_02.jpg"
	}
];



export function Projects()
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
			<a href="/" className="bw-recent-works__slider-item" style={ style }></a>
		</div>
	);
}