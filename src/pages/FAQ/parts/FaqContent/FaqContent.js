import * as React from "react";
import { FaqItem } from "./FaqItem";



export default function FaqContent( props ) 
{
	const { questions } = props;


	return (
		<div className="bw-section__faq">
			<div className="container">
				<div className="row">
					<div className="col-lg-10 offset-lg-1">
						<ul className="bw-section-faq__list">
							{
								questions.map( ( element ) => <FaqItem key={ element.id } { ...element } /> )
							}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
