import * as React from "react";
import { useState } from "react";



export function FaqItem( props )
{
	const { question, answer } = props;

	const [ isExpanded, setIsExpanded ] = useState( false );

	function toggleAnswer()
	{
		setIsExpanded( !isExpanded );
	}

	const className = "bw-section-faq__item" + ( isExpanded ? " active" : "" );


	return (
		<li className={ className }>
			<div className="bw-section-faq__item-title" onClick={ toggleAnswer }>
				<i className="bw-icon-plus icon-plus"></i>
				<i className="bw-icon-minus icon-minus"></i>
				{ question }
			</div>
			<div className="bw-section-faq__item-description">
				<p>{ answer }</p>
			</div>
		</li>
	);
}