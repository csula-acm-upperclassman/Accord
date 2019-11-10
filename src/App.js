import React from 'react';
import './App.css';

import Navigation from './components/server-navigation/navigation';

class App extends React.Component {
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
        login: (email,password) => {},
        logout: () => {},
        createAccount: (email,password) => {},
        setStatus: (status) => {},
        joinRoom: (inviteCode) => {},
        createRoom: (roomDetails) => {},
        deleteRoom: (roomId) => {},
        leaveRoom: (userId,roomId) => {},
        sendMessage: (state,roomId) => {},
        sendInvite: () => {},
        deleteMessage: () => {}
    }

    render() {
    	//add your code in the div
        return (
            <div>
				<Navigation/>
            </div>
        )
    }
}

export default App;
