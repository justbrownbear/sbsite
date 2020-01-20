import * as React from "react";



export function Input( props )
{
	const { value, onChange, placeholder } = props;

	function onValueChange( event )
	{
		onChange( event.target.value );
	}


	return <input value={ value } onChange={ onValueChange } className="bw-input__field" type="text" placeholder={ placeholder } />;
}
