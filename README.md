# Dude-Wheres-My-Yoga

This is a mobile application developed using React Native, Express.js and MongoDB. The app allows users to select a style of Yoga and then shows all studios on a map that offer classes in the selected style.

## Features
- Choose a Yoga style from a dropdown menu.
- Displays a tooltip with information about the chosen Yoga style.
- Shows Yoga studios on a map that offer classes in the chosen style.
- Clicking on a map marker opens a modal with more information about the studio.

## Tech Stack
- Frontend: React Native
- Backend: Express.js, MongoDB

## Project Structure

### Frontend:

The frontend is built using React Native, with the main `App.js` file orchestrating the various components used in the application:

- `Title.js`: Displays the app's title logo.
- `StyleDropdown.js`: Contains the dropdown for users to select a Yoga style.
- `StyleTooltip.js`: Provides an information tooltip about the selected Yoga style.
- `Map.js`: Displays a map with markers for studios that offer the selected Yoga style.
- `StudioInfo.js`: Displays detailed information about a selected studio.

### Backend:

The backend is built with Express.js and uses a MongoDB database for storing data about studios:

- `models/Studio.js`: Defines the `Studio` schema.
- `routes/studios.js`: Contains endpoints for getting all studios and getting studios by style.
- `app.js`: Sets up Express app.
- `db.js`: Manages the connection to MongoDB.
- `server.js`: The entry point of the application, defines the server that runs the app.
- `testAddStudios.js`: Contains test data and a script for adding studios to the database.

## How to Run

**1. Frontend:**

    a. Make sure you have the Expo CLI installed on your machine.

    b. Install dependencies using npm or yarn:


        npm install
 

    c. Start the Expo dev server:


        expo start


**2. Backend:**

    a. Make sure you have MongoDB installed and running on your machine.

    b. Install dependencies using npm or yarn:


        npm install


    c. Start the Express server:


        node server.js


**3. Test Data:**

    a. Run the `testAddStudios.js` script to add the test studios to the database:

 
        node testAddStudios.js


**Note:** Make sure to replace `192.168.178.31` in the fetch URL in `App.js` with the IP of the machine where the backend server is running.

