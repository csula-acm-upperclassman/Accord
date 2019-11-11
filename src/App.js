import React from 'react';
import Fire from './fireconfig'
import Firebase from 'firebase'

import './App.css';

class App extends React.Component {
	db = null

    state = {
        user: {
        	uid: '987654321',
        	displayName: 'test-user',
        	email: 'test@email.test',
        	emailVerified: true
        },
        userStatus: {},
        joinPopUpVisible: false,
        ownedRooms: {
        	'1234456789': {
	        	details: {
	        		created: '09-13-2019',
	        		id:'1234456789',
	        		name: 'test-room',
	        		ownerId: '987654321',
	        		welcomeMessage: 'Testing Welcome Message'
	        	},
	        	messages: {
	        		'1': {
	        			created: '09-13-2019',
	        			id: '1',
	        			message: 'Hey there. Just testing.',
	        			ownerName: 'test-user' 
	        		}
	        	},
	        	members: {
	        		'987654322': {
	        			displayName: 'test-user-2',
	        			joined: '09-13-2019',
	        			memberId: '987654322'
	        		}
	        	}
	        }
    	},
        subbedRooms: {
        	'2234456789': {
	        	details: {
	        		created: '09-13-2019',
	        		id:'2234456789',
	        		name: 'test-room-2',
	        		ownerId: '987654322',
	        		welcomeMessage: 'Testing Welcome Message 2'
	        	},
	        	messages: {
	        		'1': {
	        			created: '09-13-2019',
	        			id: '1',
	        			message: 'Hey there. Just testing 2.',
	        			ownerName: 'test-user-2' 
	        		}
	        	},
	        	members: {
	        		'123456789': {
	        			displayName: 'test-user',
	        			joined: '09-13-2019',
	        			memberId: '123456789'
	        		}
	        	}
	        }
        }
    }

    actions = {
		googleLogin: () => {
			const provider = new Firebase.auth.GoogleAuthProvider()

			Firebase.auth().signInWithPopup(provider)
                .then((u) => {
					const usersRef = this.db.ref('users')
					
					if (!usersRef.child(u.user.uid)) {
						usersRef.update({
							[u.user.uid]: {
								id: u.user.uid,
								displayName: u.user.email,
								email: u.user.email,
								name: 'n/a'
							}
						})
	
						u.user.updateProfile({
							displayName: u.user.email
						})
					}
					
                    console.log('Successfully Logged In');
                })
                .catch((err) => {
                    console.log('Error: ' + err.toString())
                })
		},
        login: (email,password) => {
			Fire.auth().signInWithEmailAndPassword(email, password)
                .then((u) => {
                    console.log('Successfully Logged In');
                })
                .catch((err) => {
                    console.log('Error: ' + err.toString());
                })
		},
        logout: () => {
			Fire.auth().signOut()
			Firebase.auth().signOut()
		},
        createAccount: (email,password) => {
			Fire.auth().createUserWithEmailAndPassword(email, password)
                .then((u) => {
                    const usersRef = this.db.ref('users')

                    usersRef.update({
                        [u.user.uid]: {
                            id: u.user.uid,
                            displayName: u.user.email,
                            email: u.user.email,
                            name: 'n/a'
                        }
                    })

                    u.user.updateProfile({
                        displayName: u.user.email
                    })
                })
                .catch((err) => {
                    console.log('Error: ' + err.toString());
                })
		},
        setStatus: (status) => {
			this.setState({status: status})
		},
        joinRoom: (inviteCode) => {
			let conflict = false

            if (this.state.ownedRooms) {
                if (this.state.ownedRooms.hasOwnProperty(inviteCode.substring(15,inviteCode.length))) {
                    conflict = true
                }
            }
            if (this.state.subbedRooms) {
                if (this.state.subbedRooms.hasOwnProperty(inviteCode.substring(15,inviteCode.length))) {
                    conflict = true
                }
            }
            if (!conflict) {
                const membersRef = this.db.ref(`rooms/${inviteCode.substring(15,inviteCode.length)}/members`)
                const date = new Date()
                const month = date.getMonth() + 1
                const time = date.getTime()
                const createdOn = month + '/' + date.getDate() + '/' + date.getFullYear() + '  @' + time

                membersRef.update({
                    [this.state.user.uid]: {
                        memberId: this.state.user.uid,
                        displayName: this.state.user.displayName,
                        email: this.state.user.email,
                        joined: createdOn
                    }
                })
            }
		},
        createRoom: (roomDetails) => {
			const roomsRef = this.db.ref('rooms')
            const newId = roomsRef.push().key
            const date = new Date()
            const month = date.getMonth() + 1
            const time = date.getTime()
            const createdOn = month + '/' + date.getDate() + '/' + date.getFullYear() + '  @' + time

            roomDetails.id = newId
            roomDetails.ownerId = this.state.user.uid
            roomDetails.created = createdOn

            roomsRef.update({
                [newId]: {
                    details: roomDetails
                }
            })
		},
        deleteRoom: (roomId) => {
			const roomsRef = this.db.ref(`rooms`)

            roomsRef.child(roomId).remove()
		},
        leaveRoom: (userId,roomId) => {
			const membersRef = this.db.ref(`rooms/${roomId}/members`)

            membersRef.child(userId).remove()
		},
        sendMessage: (state,roomId) => {
			const messagesRef = this.db.ref(`rooms/${roomId}/messages`)
            const newId = messagesRef.push().key
            const date = new Date()
            const month = date.getMonth() + 1
            const time = date.getTime()
            const createdOn = month + '/' + date.getDate() + '/' + date.getFullYear() + '  @' + time

            state.id = newId
            state.user = this.state.user.displayName
            state.created = createdOn

            messagesRef.update({
                [newId]: state
            })
		},
        sendInvite: () => {},
        deleteMessage: () => {}
	}
	
	componentDidMount() {
		this.db = Fire.database()

		Fire.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user })
                this.loadOwnedRooms()
                this.loadSubbedRooms()
                
            } else {
                this.setState({ user: null })
            }
		})

		Firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ user })
				this.loadOwnedRooms()
				this.loadSubbedRooms()
				
			} else {
				this.setState({ user: null })
			}
		})
	}

    render() {
    	//add your code in the div
        return (
            <div className='App'>
                Testing
            </div>
        )
    }
}

export default App;
