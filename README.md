#react-user app

IMPORTANT NOTES:

    1. Make sure you follow the steps mentioned under "PROJECT START STEPS" and ensure that the steps execute successfully. 

PROJECT START STEPS:

    Pre-requisites:
    1. Go to the link https://github.com/settings/applications/new to register the app.
    2. Enter the Hompage URL - https://localhost:3000 -(the port depends on what port you are running your app);
    3. Enter the Authorization callback URL -http://localhost:3000/auth/github/callback
    4. Obtain the clientId and clientSecret.
    4. Go to the passport.js file under config module in the app and enter the clientId and clientSecret you obtained from GITHUB.

    Steps:
    1. To run this application, do the following:
        1.a. Go to the project root directory.
        1.b. Run the following commands respectively in the terminal/command line to build and run the app:
            - npm install
            - npm start or nodemon
    
    2. Go to http://localhost:3000 in your browser to view it.