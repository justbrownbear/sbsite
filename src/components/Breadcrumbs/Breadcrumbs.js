import * as React from "react";
import "../../sass/components/breadcrumbs.scss";
import { HashLink as Link } from "react-router-hash-link";



export default function Breadcrumbs( props )
{
	const { title } = props;


	return (
		<div className="bw-header__breadcrumbs">
			<div className="container">
				<div className="bw-header-breadcrumbs__nav-list">
					<Link to="/" className="bw-header-breadcrumbs__nav-item">Home</Link>
					/
				</div>
				<h1 className="bw-header-breadcrumbs__title">{ title }</h1>
			</div>
		</div>
	);
}