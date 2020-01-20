import * as React from "react";
import "../../sass/components/breadcrumbs.scss";



export function Breadcrumbs( props )
{
	const { title } = props;


	return (
		<div className="bw-header__breadcrumbs">
			<div className="container">
				<div className="bw-header-breadcrumbs__nav-list">
					<a href="/" className="bw-header-breadcrumbs__nav-item">Home</a>
					/
				</div>
				<h1 className="bw-header-breadcrumbs__title">{ title }</h1>
			</div>
		</div>
	);
}