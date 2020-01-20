

export function getQueryVariable( variable )
{
    const query = window.location.search.substring( 1 );

    const parameters = query.split( "&" );

    for( let i = 0; i < parameters.length; i++ )
    {
        var pair = parameters[ i ].split( "=" );

        if( decodeURIComponent( pair[ 0 ] ) == variable )
            return decodeURIComponent( pair[ 1 ] );
    }


    console.log( "GET-query variable %s not found", variable );
}