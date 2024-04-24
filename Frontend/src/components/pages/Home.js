import React from "react";
import Card from "./Card";

// const Home = () => {
//   const cardsData = [
//     { id: 1, gifUrl: `${"../images/books.gif"}`, text: 'Card 1 Text' },
//     { id: 2, gifUrl: '../images/book.gif', text: 'Card 2 Text' },
//     { id: 3, gifUrl: '../images/book.gif', text: 'Card 3 Text' },
//     // Add more card data as needed
//   ];

//   return (
//     <div className="flex flex-wrap justify-center">
//       {cardsData.map((card )=> (
//         <Card key={card.id} gifUrl={card.gifUrl} text={card.text} />
//       ))}
//     </div>
//   );
// };


const Home = () => {

  const cardsData = [
    { id: 1, gifFilename:'book.gif', heading: 'Placements', linkTo: '/card1' },
    { id: 2, gifUrl: 'h2.png', heading: 'Aptitude', linkTo: '/card2' },
   
];
 
  return (
    <div className=" ml-4">
      <h2 className="text-3xl font-bold p-4 ">
        <b>Welcome to LearnSkillz!</b>
      </h2>
      <h3 className="text-xl mb-4 ml-4 mx-auto ">
        Start your placement and interview prepration with LearnSkillz
      </h3>
      <div className="container">
            <div className="grid grid-cols-2  md:grid-cols-3 gap-6 sm:gap-4 sm:grid-cols-1 mx-4">
                {cardsData.map(card => (
                    <Card key={card.id} gifUrl={card.gifUrl} heading={card.heading} linkTo={card.linkTo} />
                ))}
            </div>
        </div>


    </div>
    // Company wise Preparation
    // Online Tests
    // Verbal
    // Non Verbal Reasoning
    // Verbal Reasoning
    // Quantative Aptitude
  );
};

export default Home;
