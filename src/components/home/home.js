import React from 'react'
import {Link} from 'react-router-dom'

import './home.css'

export default class Home extends React.Component {
	print() {
		console.log("clicked")
	}
	render() {
		const servers = []

		if (this.props.state.ownedRooms) {
			Object.keys(this.props.state.ownedRooms).forEach(key => {
				servers.push(<Link to={'/' + this.props.state.ownedRooms[key].details.name}><div className='server-card'>{this.props.state.ownedRooms[key].details.name}</div></Link>)
			})
		}

		return (
			<div className='home-container'>
				<div className='title-container'>
					<a className='home-title'>ACCORD</a>
				</div>
				
				<div className='server-container'>
					{servers}
					<a className='server-card' onClick={this.print()}/>
				</div>
			</div>
		)
	}
}