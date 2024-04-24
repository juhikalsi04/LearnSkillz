// import React from "react";
// import { Link } from "react-router-dom";

// const Card = ({ gifUrl, heading, linkTo }) => {
//   console.log("Gifurl", gifUrl);
//   return (
//     <Link to={linkTo}>
//       <div className="rounded-lg shadow-md  bg-slate-50 flex">
//         <div className="flex-shrink-0 p-2">
//           <img src={gifUrl} alt="GIF" className="w-32 h-auto " />
//           <p className="text-xl font-bold p-3">{heading}</p>
//         </div>
//         {/* <div className="flex-grow p-4"></div> */}
//       </div>
//     </Link>
//   );
// };

// export default Card;
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ gifUrl, heading, linkTo }) => {
  return (
    <Link to={linkTo} className="rounded-lg shadow-md bg-slate-50 flex md:w-full">
      <div className="p-4 w-80">
        <img src={gifUrl} alt="GIF" className="w-full h-auto" />
        <p className="text-lg font-bold mt-2 mb-4 text-center">{heading}</p>
      </div>
    </Link>
  );
};

export default Card;

