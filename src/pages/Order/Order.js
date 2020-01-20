import * as React from "react";
import { useState, useEffect } from "react";
import { getQueryVariable } from "../../utils/getQuery";
import { Header } from "../../components/Header/Header";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { OrderForm } from "./components/OrderForm";
import { Footer } from "../../components/Footer/Footer";

import "../../sass/components/order.scss";



const TITLE = "Order form";



export function Order()
{
	const [ formData, setFormData ] = useState( {} );

	useEffect( () =>
	{
		const pricePackage = getQueryVariable( "package" );

		if( typeof( pricePackage ) != "undefined" )
			setFormData( { pricePackage: +pricePackage } );
	}, [] );



	function onSubmit()
	{
		function onSuccess()
		{
			alert( "From successfully sent" );
		}


		function onError()
		{
			alert( "Form sending error!" );
		}

		alert( "trying to send form" );
		//sendQuery( "/some_url", formData, onSuccess, onError );
	}


	return (
		<>
			<Header />
			<Breadcrumbs title={ TITLE }/>
			<OrderForm formData={ formData } setFormData={ setFormData } onSubmit={ onSubmit }/>
			<Footer />
		</>
	);
}