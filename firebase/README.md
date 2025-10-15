# Firebase Application

This application uses Firebase for backend services.

## Setup Instructions

1. **Create a Firebase Project**
   - Visit [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or select an existing one
   - Register your web app in the project settings

2. **Get Your Firebase Configuration**
   - In the Firebase Console, go to Project Settings
   - Scroll down to "Your apps" section
   - Copy your Firebase configuration object

3. **Configure the Application**
   - Copy `src/config/firebase.example.js` to `src/config/firebase.js`:
     ```bash
     cp src/config/firebase.example.js src/config/firebase.js
     ```
   - Open `src/config/firebase.js`
   - Replace the placeholder values with your actual Firebase configuration

4. **Run the Application**
   - Follow the specific build/run instructions for your application

## Security Note

⚠️ **IMPORTANT**: Never commit your `firebase.js` file with actual credentials to version control. The `firebase.js` file should be gitignored to prevent accidental exposure of your Firebase configuration.

While Firebase API keys are generally safe to expose in client-side code (they are meant to identify your Firebase project), it's still a best practice to use environment variables and not hardcode them in your repository.
