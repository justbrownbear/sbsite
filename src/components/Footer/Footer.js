import * as React from "react";
import "../../sass/components/footer.scss";



export function Footer()
{
	return (
		<div id="footer" class="bw-footer">
			<div class="bw-footer__wrap">
				<div class="container">
					<div class="row">
						<div class="col-lg-4 col-md-3">
							<div class="bw-footer__logo">
								<a class="bw-footer-logo__img" href="/"></a>
							</div>
							<span class="bw-footer__logo-description">
								We're a team of talented developers & designers
							</span>
						</div>
						<div class="col-lg-2 col-md-4">
							<div class="bw-footer__group-title">Company</div>
							<ul class="bw-footer__nav-group">
								<li>
									<a href="/#aboutUs" class="bw-footer__nav-group-item">About Us</a>
								</li>
								<li>
									<a href="/projects" class="bw-footer__nav-group-item">Recent Work</a>
								</li>
								<li>
									<a href="/#Testimonials" class="bw-footer__nav-group-item">Testimonials</a>
								</li>
								<li>
									<a href="/#pricing" class="bw-footer__nav-group-item">Pricing Packages</a>
								</li>
							</ul>
						</div>
						<div class="col-lg-3 col-md-5">
							<div class="bw-footer__group-title">Contact</div>
							<ul class="bw-footer__contact-group">
								<li>
									<span class="bw-footer__contact-group-location">
										<i class="bw-icon icon-map-marker-alt"></i>
										116 W Jackson #254 Chicago, IL 60604
									</span>
								</li>
								<li>
									<a class="bw-footer__contact-group-email" href="mailto:info@example">
										<i class="bw-icon icon-envelope"></i>
										info@example
									</a>
								</li>
							</ul>
						</div>
						<div class="col-lg-3 col-md-12">
							<div class="bw-footer__group-title">Create a Modern Webwite for Your Business</div>
							<button class="bw-btn">Make An Enquiry</button>
						</div>
					</div>
					<div class="bw-subfooter__wrap">
						<div class="bw-subfooter__copyright">
							Small Bussiness Websites Inc. © 2020 All Rights Reserved.							
						</div>

						<div class="bw-footer__social">
							<a class="bw-footer__social-link" href="">
								<i class="bw-icon icon-facebook-f"></i>
							</a>
							<a class="bw-footer__social-link" href="">
								<i class="bw-icon icon-twitter"></i>
							</a>
						</div>
						<div class="clearfix"></div>
					</div>
				</div>
			</div>
		</div>
	);
}
