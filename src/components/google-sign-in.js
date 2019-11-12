import React from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from "firebase"


class GoogleSignIn extends React.Component{
	render(){
		return(
			<div className="App">
			{this.state.isSignedIn ? (
			  <span>
				<div>Signed In!</div>
				<button onClick={() => firebase.auth().signOut()}>Sign out!</button>
				<h1>Welcome {firebase.auth().currentUser.displayName}</h1>
				<img
				  alt="profile picture"
				  src={firebase.auth().currentUser.photoURL}
				/>
			  </span>
			) : (
			  <StyledFirebaseAuth
				uiConfig={this.uiConfig}
				firebaseAuth={firebase.auth()}
			  />
			)}
		  </div>
		)
	}
}

export default GoogleSignIn;