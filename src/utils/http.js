export async function sendQuery( url, payload, successCallback, errorCallback )
{
	try
	{
		const params: RequestInit =
		{
			method: "POST",
			credentials: "include",
			body: JSON.stringify( payload )
		};


		const response = await fetch( url, params );
		const json = await response.json();

		successCallback( json );
	}
	catch( error )
	{
		errorCallback( error );
	}
};