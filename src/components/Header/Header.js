import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { MobileMenu } from "./MobileMenu";

import "../../sass/components/header.scss";


const HEADER_STICKY_HEIGHT = 100;



export function Header( props )
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


	return (
		<div className={ className }>
			<div className="bw-header__wrap">
				<div className="container">
					<div className="bw-header__logo">
						<a className="bw-header-logo__img" href="/"></a>
					</div>
					<div className="bw-header__nav">
						<ul className="bw-header__nav-list">
							<li className="bw-header__nav-item">
								<a className="bw-header__nav-item-link" href="/#aboutUs">About Us</a>
							</li>
							<li className="bw-header__nav-item">
								<a className="bw-header__nav-item-link" href="/#pricing">Pricing</a>
							</li>
							<li className="bw-header__nav-item">
								<a className="bw-header__nav-item-link" href="/projects">Our Work</a>
							</li>
							<li className="bw-header__nav-item">
								<a className="bw-header__nav-item-link" href="/faq">FAQ</a>
							</li>
							<li className="bw-header__nav-item">
								<a className="bw-header__nav-item-link" href="/#footer">Contact Us</a>
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