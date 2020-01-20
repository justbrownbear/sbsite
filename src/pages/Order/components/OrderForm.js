import * as React from "react";
import { PricePackageSelector } from "./PricePackageSelector";
import { PackageDetailsFormPart } from "./PackageDetailsFormPart";
import { SummaryFormPart } from "./SummaryFormPart";



export function OrderForm( props )
{
	const { formData, setFormData, onSubmit } = props;
	
	function mergeFormData( newValues )
	{
		setFormData( { ...formData, ...newValues } );
	}

	return (
		<div className="bw-section__order">
			<div className="bw-section__order-wrap">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 col-md-12 col-sm-12">
							<div className="bw-order__form">
								<div className="bw-order-form__steps">
									<PricePackageSelector pricePackage={ formData.pricePackage } onChange={ mergeFormData } />
									<PackageDetailsFormPart onChange={ mergeFormData } />
								</div>
							</div>
						</div>
						<SummaryFormPart formData={ formData } onChange={ mergeFormData } onSubmit={ onSubmit } />
					</div>
				</div>
			</div>
		</div>
	);
}