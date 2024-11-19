
import React from 'react';


function StudentIDCard({ name, age, rollNumber, className }) {
  
  return (
    <div className="max-w-sm mx-auto my-4 bg-black rounded-lg shadow-md p-6 border border-gray-300">
      
      <h2 className="text-xl font-semibold text-orange-800 mb-2">{name}</h2>
      
      
      <p className="text-green-600 mb-1">Age: {age}</p>
      
      
      <p className="text-pink-600 mb-1">Roll Number: {rollNumber}</p>
      
      
      <p className="text-purple-600">Class: {className}</p>
    </div>
  );
}


export default StudentIDCard;
