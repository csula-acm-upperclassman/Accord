import React, { Component } from 'react';
import './serverMenu.css'

export default class serverMenu extends Component {
	
	render() {
		return (
			<div className="server-menu">
				<h1>ACM @CSULA</h1>
				<button onClick="myFunction()" class="dropbtn">
					<div>
						<a href="#">Link 1</a>
						<a href="#">Link 2</a>
						<a href="#">Link 3</a>
					</div>
				</button>
			</div>
		)
	}

}