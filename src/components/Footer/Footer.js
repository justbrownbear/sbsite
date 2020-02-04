import * as React from "react";
import "../../sass/components/footer.scss";
import { HashLink as Link } from "react-router-hash-link";



export default function Footer()
{
	return (
		<div id="footer" className="bw-footer">
			<div className="bw-footer__wrap">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 col-md-3">
							<div className="bw-footer__logo">
								<Link className="bw-footer-logo__img" to="/"></Link>
							</div>
							<span className="bw-footer__logo-description">
								We're a team of talented developers & designers
							</span>
						</div>
						<div className="col-lg-2 col-md-4">
							<div className="bw-footer__group-title">Company</div>
							<ul className="bw-footer__nav-group">
								<li>
									<Link to="/#aboutUs" className="bw-footer__nav-group-item">About Us</Link>
								</li>
								<li>
									<Link to="/projects" className="bw-footer__nav-group-item">Recent Work</Link>
								</li>
								<li>
									<Link to="/#Testimonials" className="bw-footer__nav-group-item">Testimonials</Link>
								</li>
								<li>
									<Link to="/#pricing" className="bw-footer__nav-group-item">Pricing Packages</Link>
								</li>
							</ul>
						</div>
						<div className="col-lg-3 col-md-5">
							<div className="bw-footer__group-title">Contact</div>
							<ul className="bw-footer__contact-group">
								<li>
									<span className="bw-footer__contact-group-location">
										<i className="bw-icon icon-map-marker-alt"></i>
										116 W Jackson #254 Chicago, IL 60604
									</span>
								</li>
								<li>
									<Link className="bw-footer__contact-group-email" to="mailto:info@example">
										<i className="bw-icon icon-envelope"></i>
										info@example
									</Link>
								</li>
							</ul>
						</div>
						<div className="col-lg-3 col-md-12">
							<div className="bw-footer__group-title">Create a Modern Webwite for Your Business</div>
							<button className="bw-btn">Make An Enquiry</button>
						</div>
					</div>
					<div className="bw-subfooter__wrap">
						<div className="bw-subfooter__copyright">
							Small Bussiness Websites Inc. © 2020 All Rights Reserved.							
						</div>

						<div className="bw-footer__social">
							<Link className="bw-footer__social-link" to="">
								<i className="bw-icon icon-facebook-f"></i>
							</Link>
							<Link className="bw-footer__social-link" to="">
								<i className="bw-icon icon-twitter"></i>
							</Link>
						</div>
						<div className="clearfix"></div>
					</div>
				</div>
			</div>
		</div>
	);
}
