import React from "react";
import AboutUs from "../../components/images/h2.png";

import Team from "./Team";
// import 'boxicons'
const About = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold p-4 ">About Us</h1>

      <div className="container mx-auto text-center  w-[45%] ">
        <p className="text-3xl mb-4  mx-auto font-poppins">
          We are here to make your preparation much Easier.
        </p>
      </div>
      <img src={AboutUs} alt="About Us" className=" w-1/3 mx-auto" />
      <h2 className=" text-xl m-2 ml-4 text-slate-100">our story</h2>
      <div>
        <h2 className="text-2xl ml-4 w-1/3 font-bold font-poppins">
          We Understands the importance of right guidance and right path and we
          are here to help you.
        </h2>
        <div className="container mt-2">
          <p className="grid text-justify p-3 font-poppins">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
            possimus, praesentium, iste commodi sed cum aliquid dignissimos
            eaque,Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
            odit deleniti temporibus debitis placeat vero ab, pariatur totam id
            dolor officia in enim illum eveniet porro minus inventore maiores.
            Odit vero esse et sapiente.
          </p>
          <p className="grid text-justify p-3 font-poppins">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
            possimus, praesentium, iste commodi sed cum aliquid dignissimos
            eaque,Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
            adipisci consequatur a harum earum quia excepturi nesciunt ullam
            optio voluptatem unde odio dolorum enim corporis natus reprehenderit
            sunt quo, asperiores at quas veniam? Aperiam!
          </p>
        </div>
      </div>
      <h2 className="text-3xl  mb-4 w-2/3 mx-auto text-center ">
        Meet Our Team
      </h2>
      <div className="flex flex-row items-center">
        <Team name="Juhi Kalsi" mail="mail" linkedin="linkedin" />
        <Team name="sawi choukikar" mail="mail" linkedin="linkedin" />
      </div>
    </div>
  );
};

export default About;
