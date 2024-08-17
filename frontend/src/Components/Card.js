import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Card = ({ searchQuery }) => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    axios.get('http://localhost:5000/api/requests')
      .then(response => {
        setRequests(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  // Safely filter requests based on searchQuery
  const filteredRequests = requests.filter(request => {
    // Ensure both request and title exist
    if (request && request.title) {
      return request.title.includes(searchQuery);
    }
    return false; // Skip this entry if request or title is undefined
  });

  return (
    <div className="flex flex-wrap justify-center p-4">
      {filteredRequests.length > 0 ? (
        filteredRequests.map((request) => (
          <div
            key={request._id}
            className="bg-white shadow-md rounded-lg p-4 m-2 w-[calc(45%-16px)] hover:bg-pink-400 
            hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out "
          >
            <h3 className="text-xl font-semibold mb-2">{request.title}</h3>
            <p className="text-gray-700">{request.description}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-700"></p>
      )}
    </div>
  );
};

export default Card;
