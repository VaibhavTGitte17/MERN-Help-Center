import React, { useState } from 'react';
import axios from 'axios';

const Modal = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/requests', {
        title,
        description
      });
      console.log("Title:", title);
      console.log("Description:", description);
      console.log("Response:", response.data);
      onClose(); // Close the modal after submission
    } catch (error) {
      console.error("There was an error submitting the request!", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 w-full">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full">
        <h2 className="flex text-xl font-semibold mb-4 items-center justify-center">
          Submit a Request
        </h2>
        <div className="mb-4">
          <label className="block text-gray-800">Enter Title</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2 mt-1 placeholder-secondary input-field"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-800">Enter Description</label>
          <textarea
            className="w-full border border-gray-300 rounded-md p-2 mt-1 placeholder-secondary"
            rows="5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="flex space-x-2 flex justify-center items-center">
          <button
            onClick={onClose}
            className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 w-64"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 w-64"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
