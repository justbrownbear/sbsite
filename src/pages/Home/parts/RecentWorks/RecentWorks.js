import * as React from "react";
import { recentWorks } from "../../../../model/recentWorks";
import { PortfolioElement } from "./PortfolioElement";
import "../../../../sass/components/recent_works.scss";



export function RecentWorks()
{
	return (
		<div className="bw-recent-works">
			<div className="bw-recent-works__wrap">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="bw-section__subtitle">Recent Works</div>
							<div className="bw-section__title bw-section__title-accent">
								We have been quite busy recently
							</div>
						</div>
						<div className="col-lg-6">
							<div className="bw-recent-works__slider-controls">
								<a href="/projects" className="bw-recent-works__slider-link">
									View All Project
									<i className="bw-icon icon-right-arrow"></i>
								</a>
							</div>
						</div>
					</div>
				</div>


				<div className="bw-recent-works__slider">
					<div className="container-fluid">
						<div className="row no-gutters">
							{ recentWorks.map( ( element ) => <PortfolioElement key={ element.id } { ...element } /> ) }
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}