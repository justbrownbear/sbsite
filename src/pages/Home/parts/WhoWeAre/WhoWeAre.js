import * as React from "react";
import "../../../../sass/components/who-we-are.scss";



export function WhoWeAre()
{
	return (
        <div className="bw-who_we_are">
            <div className="bw-who_we_are__wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="bw-who_we_are__wrap__images">
                                <div className="bw-who_we_are__wrap__image-back"></div>
                                <div className="bw-who_we_are__wrap__image-front"></div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="bw-section__subtitle">Who We Are</div>
                            <div className="bw-section__title bw-section__title-accent">
                                We're a team of talented developers & designers
                            </div>
                            <span className="bw-section__title-description">
                                The Best Digital Agency
                            </span>
                            <p className="bw-section__description">
                                Welcome to our studio! We employ people who have passion for design and marketing. It's a perfect combination of professionalism and creative individual approach to every client or project.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}