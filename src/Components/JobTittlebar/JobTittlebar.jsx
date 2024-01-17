// JobTitlebar.jsx
import React, { useState } from 'react';

function JobTitlebar({ fetchJobsByTitle }) {
  const [jobTitles] = useState([
    'Fullstack Developer',
    'iOS Developer',
    'Frontend Developer',
    'Cloud Support Associate',
    'Graphic Design'
  ]);
  const [selectedTitle, setSelectedTitle] = useState('');

  const handleTitleClick = (title) => {
    if (selectedTitle === title) {
      setSelectedTitle('');
      fetchJobsByTitle('');
    } else {
      setSelectedTitle(title);
      fetchJobsByTitle(title);
    }
  };

  return (
    <div>
      <div className='block justify-center gap-5 my-2 mx-5 '>
        <h4 className='text-center'>Quick Filter:</h4>
        {jobTitles.map((title, index) => (
          <div
            className={`bg-white px-5 py-3 my-2 rounded-md text-center ${
              selectedTitle === title ? 'bg-blue-500 text-green-500' : ''
            }`}
            key={index}
          >
            <button onClick={() => handleTitleClick(title)}>{title}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobTitlebar;
