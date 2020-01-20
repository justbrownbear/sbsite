import * as React from "react";



export function MobileMenu()
{
	return (
		<div className="bw-header__nav-mobile">
			<div className="container">
				<ul className="bw-header__nav-mobile-list">
					<li className="bw-header__nav-mobile-item">
						<a className="bw-header__nav-mobile-item-link" href="/#aboutUs">About Us</a>
					</li>
					<li className="bw-header__nav-mobile-item">
						<a className="bw-header__nav-mobile-item-link" href="/#pricing">Pricing</a>
					</li>
					<li className="bw-header__nav-mobile-item">
						<a className="bw-header__nav-mobile-item-link" href="/projects">Our Work</a>
					</li>
					<li className="bw-header__nav-mobile-item">
						<a className="bw-header__nav-mobile-item-link" href="/faq">FAQ</a>
					</li>
					<li className="bw-header__nav-mobile-item">
						<a className="bw-header__nav-mobile-item-link" href="">Contact Us</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
