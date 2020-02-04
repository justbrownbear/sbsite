import * as React from "react";
import { HashLink as Link } from "react-router-hash-link";



export function MobileMenu()
{
	const linkClassName = "bw-header__nav-mobile-item-link";

	return (
		<div className="bw-header__nav-mobile">
			<div className="container">
				<ul className="bw-header__nav-mobile-list">
					<li className="bw-header__nav-mobile-item">
						<Link className={ linkClassName } to="/#aboutUs">About Us</Link>
					</li>
					<li className="bw-header__nav-mobile-item">
						<Link className={ linkClassName } to="/#pricing">Pricing</Link>
					</li>
					<li className="bw-header__nav-mobile-item">
						<Link className={ linkClassName } to="/projects">Our Work</Link>
					</li>
					<li className="bw-header__nav-mobile-item">
						<Link className={ linkClassName } to="/faq">FAQ</Link>
					</li>
					<li className="bw-header__nav-mobile-item">
						<Link className={ linkClassName } to="/#footer">Contact Us</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}
