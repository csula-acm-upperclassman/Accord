Project Repo

The project for the React Workshop will be a single-page application that takes inspiration from Discord and Slack. Students who participate will be working in groups that will all contribute to a single production application. The code will be managed with GitHub. Each group will be responsible for managing their assigned branch in the repository which will have a series of issues associated with it. 

Group Divisions (each group will only work on what’s listed)

For this project we will be covering two types of Components, Non-View Components and View Components. 

Non-View Components and View Components are essentially the same, but they serve different purposes. The root Non-View Component (App), for this project, will be composed of View Components that contain Non-View Components or View Components.

Note: View Components can be replaced, but Non-View Components should not be. Divs are simply div tags contained within the respective component (view and non-view)

Design Responsibilities for each team:
- If you have a View Component, you need to manage the styling
	- Create CSS

Login, General App Layout, & Firebase Team
- Components Responsibilities:
	- App Component
		- Welcome/Login View Component
			- Logo div
			- Welcome Message div
			- Login/Sign In Button
				- Login/Signup Pop Up View Component
					- Firebase: Google method
					- Welcome View should then be replaced with Accord View after login
- Functional Implementation Responsibilities:
	- Implement Firebase
	- User Authentication
	- Database Implementation
	- Implement the login action function
	- Implement the createAccount action function
	- Implement any functions needed in the App component
	- Manage the Login View -> Home View transition after login
	- Manage Home View, Server View, and User Settings View in Post Login with routing

Home & App Navigation Team
- Components Responsibilities:
	- Home View Component
		- Server View Component
			- Leave Unimplemented
		- User Settings View Component
			- Leave Unimplemented
		- Navigation View Component
			- User Component
				- Leave unimplemented
			- Server Buttons
				- These buttons should route to Server View
			- Server Create/Join Button
				- Opens Create/Join Pop Up View Component
					- Descriptive Title div
					- Instructions/Directions Message div
					- Create Server Button
						- Should replace Create/Join Pop Up view with Create Form View
					- Join Server Button
						- Should replace the Create/Join Pop Up view with Join Form View
				- Create Form Pop Up View Component
					- Create Form Component
						- Server Name Input
						- Server Welcome Message Input
						- Server Create Button
							- Should call createServer() action
				- Join Form Pop Up View Component
					- Join Form Component
						- Server Join Code Input
						- Server Join Button
							- Should call joinServer() action
- Functional Implementation Responsibilities:
	- Implement createRoom action function
	- Implement joinRoom action function

User Profile Team
- Components Responsibilities:
	- User Component
		- User Name div
		- Icon div
			- Show User Image
			- Have a ring that displays status
			- Displays User Pop Up View onHover and disappears after losing focus
	- User Pop Up View Component
		- Status Buttons
			- Online
				- Should call setStatus() action
			- Idle
				- Should call setStatus() action
			- Do Not Disturb
				- Should call setStatus() action
			- Invisible
				- Should call setStatus() action
		- User Settings Button
			- Should route to User Settings View
		- Help Button
			- Should display Help Pop Up View
		- Logout Button
			- Should call on the logout() action
	- User Settings View Component
		- Profile Component
			- Profile Details div
				- Icon
					- Can edit
						- Should call setIcon() action
				- Display Name
					- Can edit
						- Should call setDisplayName() action
				- Bio
					- Can edit
						- Should call setBio() action
				- Friend code (optional)
					- Based on User ID from authentication
	- Friend View (optional)
		- Friend Information/Details Component
		- Display simple brief info of friend
- Functional Implementation Responsibilities:
	- Implement the logout action function
	- Implement the add friend action function
	- Implement the setStatus action function
	- Implement the setIcon action function
	- Implement the setDisplayName action function
	- Implement the setBio action function

Server Layout Team
- Server View Component
	- Server Menu Component
		- Server Details div
			- Server Name
			- Icon
	- Channel List Component
		- Channel Button
			- Each button selection routes to a specific Channel View in Server Display
			- Note: Only one channel button/link should be listed  for this project
	- Members List Component
		- Member Item Link
			- (optional) Right clicking should bring up a pop up menu with options to remove or assign role
	- Server Navigation Component
		- Leave/Close room Button
			- Should call leaveServer() or closeServer() action
		- Send Invite Button
			- Should call sendInvite() action o4 display invite code to copy and paste
		- Server Back Button
			- Should send user back to Navigation View
	- Server Display Component
		- Channel View
			- Leave unimplemented
		- Server Settings View
			- Settings Component
				- Add simple settings
- Functional Implementation Responsibilities: 
	- Implement the deleteServer action function
	- Implement the leaveServer action function
	- Implement the sendInvite action function

Channel & Messaging Team
- Channel View Component
	- Channel Details div
		- Channel Name
		- Channel Message
	- Message History Component 
		- Message Component
			- User Icon div
				- User image
				- (optional) onClick or hover
					- User Pop Up View component
						- User details
			- Message Text div
		- Input Component
- Functional Implementation Responsibilities:
	- Implement the sendMessage action function
	- Implement the deleteMessage action function

Resources and Citations:

Common React Practices for Architecture
https://www.sitepoint.com/react-architecture-best-practices/

How to deploy React App on Firebase
https://www.robinwieruch.de/firebase-deploy-react-js/

Adding Stylesheets and Assets
https://facebook.github.io/create-react-app/docs/adding-a-stylesheet
