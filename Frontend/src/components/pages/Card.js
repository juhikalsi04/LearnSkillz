import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ gifUrl, heading, linkTo }) => {
  
  console.log('Gifurl',gifUrl)
  return (
    <Link to={linkTo}>
      <div className="rounded-lg shadow-md  bg-slate-50 flex">
        <div className="flex-shrink-0 p-2">
          <img src={gifUrl} alt="GIF" className="w-32 h-auto" />
        </div>
        <div className="flex-grow p-4">
        <p className="text-xl font-bold p-3">{heading}</p>
        </div>
      </div>

     
    </Link>
  );
};

export default Card;

