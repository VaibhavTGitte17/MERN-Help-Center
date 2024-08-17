# Help Request Application

A web application for submitting and viewing help requests. The app features a search functionality to filter requests and is built using React, Node.js, Express.js, and MongoDB.

## Features

- **Submit Requests**: Users can submit requests with a title and description.
- **View Requests**: Display all submitted requests.
- **Search Functionality**: Filter displayed requests based on a search query.
- **Responsive Design**: The app is designed to be fully responsive.

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Icons**: React Icons



4. **Start the backend server**:
    node server.js

5.  **Start the frontend**:
    npm start

## Usage

1. **Start both the frontend and backend servers**.
2. **Open your browser** and navigate to `http://localhost:3000` to use the application.

### API Endpoints

- **GET /api/requests**: Fetch all requests.
- **POST /api/requests**: Submit a new request. (Body: `{ "title": "string", "description": "string" }`)

