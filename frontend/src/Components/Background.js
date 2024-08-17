import React, { useState } from 'react';
import Card from './Card'; // Import your Card component
import { FaArrowRight } from 'react-icons/fa';

function Background() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <div className="relative flex flex-col items-center justify-center h-[300px] bg-gray-400 w-full">
        <h1 className="text-4xl font-bold mb-2">How can I help you?</h1>
        
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search Here"
            className="border border-gray-300 rounded-md p-2 pl-10 w-full focus:border-secondary focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FaArrowRight 
            className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
            size={20}
          />
        </div>
      </div>

      {/* Pass searchQuery as a prop to Card component */}
      <Card searchQuery={searchQuery} />
    </>
  );
}

export default Background;
