import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { MobileMenu } from "./MobileMenu";

import "../../sass/components/header.scss";
import { HashLink as Link } from "react-router-hash-link";


const HEADER_STICKY_HEIGHT = 100;



export default function Header( props )
{
	const { fromHomepage } = props;

	const [ isSticky, setIsSticky ] = useState( false );
	const [ isMobileMenuShown, setIsMobileMenuShown ] = useState( false );


	function onScroll( isSticky )
	{
		const offset = window.pageYOffset;

		if( offset >= HEADER_STICKY_HEIGHT )
		{
			setIsSticky( true );
		}

		if( offset < HEADER_STICKY_HEIGHT )
		{
			setIsSticky( false );
		}
	}


	function toggleMobileMenu()
	{
		setIsMobileMenuShown( !isMobileMenuShown );
	}


	useEffect( () =>
	{
		window.addEventListener( "scroll", onScroll );

		return () =>
		{
			window.removeEventListener( "scroll", () => onScroll( isSticky ) );
		};
	}, [] );

	let className = "bw-header";

	if( fromHomepage )
	{
		className += " slider";

		if( isSticky )
			className += " sticky";
	}

	if( isMobileMenuShown )
		className += " active";

	const linkClassName = "bw-header__nav-item-link";


	return (
		<div className={ className }>
			<div className="bw-header__wrap">
				<div className="container">
					<div className="bw-header__logo">
						<Link className="bw-header-logo__img" to="/"></Link>
					</div>
					<div className="bw-header__nav">
						<ul className="bw-header__nav-list">
							<li className="bw-header__nav-item">
								<Link className={ linkClassName } to="/#aboutUs">About Us</Link>
							</li>
							<li className="bw-header__nav-item">
								<Link className={ linkClassName } to="/#pricing">Pricing</Link>
							</li>
							<li className="bw-header__nav-item">
								<Link className={ linkClassName } to="/projects">Our Work</Link>
							</li>
							<li className="bw-header__nav-item">
								<Link className={ linkClassName } to="/faq">FAQ</Link>
							</li>
							<li className="bw-header__nav-item">
								<Link className={ linkClassName } to="/#footer">Contact Us</Link>
							</li>
						</ul>
						<div className="bw-header__nav-button">
							<span className="bw-icon icon-bars" onClick={ toggleMobileMenu }></span>
						</div>
					</div>
				</div>
			</div>
			<MobileMenu />
		</div>
	);
}