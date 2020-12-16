import React from 'react';
import { Route } from 'react-router-dom';
//import { Auth } from 'aws-amplify';

export default ({ component: C, props: cProps, ...rest }) => (

	 	<Route {...rest} render={props => <C {...props} {...cProps} />} />
);

// function AppliedRoute({component: C,userHasAuthenticated: Authenticated, props: cProps, ...rest}) {
//  	return(
//  		<Route
//  			{...rest}
//  			render={cProps => 
// 				Auth
// 				 ? (
//  					<C {...cProps} />
//  				) : (
//  					<Redirect to ="/login" />
//  				)
//  			}
//  		/>
//  	);
//  }

//  export default AppliedRoute;

	//Auth.currentUserInfo() ?
	//<Route {...rest} render={props => <C {...props} {...cProps} />} /> :
	//<Redirect to ="/login" />
//);

