# Collaborative Editor

An online real-time collaborative text editor where multiple users can edit the document simultaneously. Built with **React**, **Express**, and **Pusher** for real-time collaboration.

## Features
- Real-time collaboration: Multiple users can edit the document at the same time.
- Text formatting: A simple text editor interface where users can add, modify, and delete text.
- User authentication: Allows users to connect securely to the editor using Pusher.
- Editable document: The content is synced across all active users in real-time.

## Technologies Used
- **Frontend:** React.js
- **Backend:** Express.js
- **Real-Time Communication:** Pusher
- **Styling:** CSS

## Installation

### Prerequisites
1. **Node.js** (v16 or higher)
2. **npm** or **yarn** (Package manager)

### Steps to run the project locally

1. Clone the repository:
   ```bash
   git clone https://github.com/EBharghavi/collaborative-editor.git
   ```
2. Navigate to the project directory:
   ```bash
   cd collaborative-editor
   ```
### Install the dependencies for both backend and frontend:

**For backend:**

```bash
cd server
npm install
```
**For frontend:**

```bash
cd client
npm install
```
### Set up environment variables for Pusher in the server:

In server.js, replace the placeholders (INSERT_YOUR_APP_ID_HERE, INSERT_YOUR_KEY_HERE, INSERT_YOUR_SECRET_HERE) with your actual Pusher credentials. You can sign up for a Pusher account at Pusher.
Start both the backend and frontend servers:

**In the backend:**

```bash
cd server
node server.js
```
**In the frontend:**

```bash
cd client
npm start
```
The app will be accessible at http://localhost:5000 (backend) and http://localhost:3000 (frontend).

### Usage
1. Open the frontend application in your browser (http://localhost:3000).
2. Multiple users can now open the application from different browsers, and they can collaboratively edit the document in real-time.
3. Any changes made by one user will instantly be reflected on all other connected users' screens.
### Troubleshooting
1. Port Conflicts: If you encounter an error like EADDRINUSE, it means the port is already in use. Either change the port in the server.js or close any running processes using that port.
2. Pusher Authentication Error: Make sure your Pusher credentials are correct in server.js.
### License
This project is licensed under the MIT License - see the LICENSE file for details.

### Acknowledgements
1. Pusher for providing real-time messaging and collaboration capabilities.
2. React for building the user interface.
3. Express for handling the backend server.

