import React from 'react';

import { Link } from 'react-router-dom';


const OnlineTest = () => {
  const tests = [
    { "testNumber": 1, "difficulty": "Easy" ,"color":"lightgreen"},
    { "testNumber": 2, "difficulty": "Medium","color":"orange" },
    { "testNumber": 3, "difficulty": "Hard","color":"red" },
    { "testNumber": 4, "difficulty": "Easy","color":"lightgreen" },
    { "testNumber": 5, "difficulty": "Medium" ,"color":"orange"},
    { "testNumber": 6, "difficulty": "Hard" ,"color":"red"},
    { "testNumber": 7, "difficulty": "Easy","color":"lightgreen" },
    { "testNumber": 8, "difficulty": "Medium" ,"color":"orange"},
    { "testNumber": 9, "difficulty": "Hard" ,"color":"red"},
    { "testNumber": 10, "difficulty": "Easy","color":"lightgreen" }
  ];
 

 


  return (
    <>
    <div className='onlinetest'>


      <h1>Online Tests</h1>
      <hr></hr>
      <h2>Sample test papers</h2>
      <br></br>
      

     
                
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
           <thead>
          <tr>
            <th scope="col" style={{ borderBottom: '1px solid #ddd', padding: '8px' }}></th>
            <th scope="col" style={{ borderBottom: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Tests</th>
            <th scope="col" style={{ borderBottom: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>Difficulty</th>
            <th scope="col" style={{ borderBottom: '1px solid #ddd', padding: '8px' }}></th>
          </tr>
        </thead>
          <tbody>
            {tests.map((e) => (
              <tr key={e.testNumber} style={{ borderBottom: '1px solid #ddd' }}>
                <th scope="row" style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>{e.testNumber}</th>
                <td style={{ borderBottom: '1px solid #ddd', padding: '20px 8px'  }}>Sample Test {e.testNumber}</td>
                <td style={{ borderBottom: '1px solid #ddd', padding: '8px', textAlign: 'center' ,color:`${e.color}`}}>{e.difficulty}</td>
                <td style={{ padding: '8px', textAlign: 'end' }}>
                  <Link className='start-test'
                    to={"/onlinetest/sampletest"}
                    >
                    Start Test
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
              
      
    </div>
    </>
  );
};

export default OnlineTest;