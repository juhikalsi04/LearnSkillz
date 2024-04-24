import React from "react";

const Company = () => {
  return (
    <div className="font-poppins mx-4 ">
      <h1 className="text-3xl font-bold mt-6">Company Name</h1>
      <hr className="border-t border-gray-200 my-4"></hr>
      <div className="p-4">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">About the Company</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a libero libero. Duis nec condimentum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat velit quos, quia placeat iste eius laborum, consectetur hic magnam libero tempora sunt labore fuga ex ab porro repellendus est nihil.
          </p>
        </div>

        {/* Hiring Flow Card */}
        <div className="mb-6 border border-gray-200 rounded-lg p-4 bg-blue-200">
          <h2 className="text-2xl font-bold mb-2">Hiring Flow</h2>
          <ol className=" list-inside text-gray-700">
            <li>Step 1: Application Submission</li>
            <li>Step 2: Initial Screening</li>
            <li>Step 3: Technical Interviews</li>
            {/* Add more steps as needed */}
          </ol>
        </div>

        {/* Eligibility Criteria Card */}
        <div className="mb-6 border border-gray-200 rounded-lg p-4 bg-blue-200">
          <h2 className="text-2xl font-bold mb-2">Eligibility Criteria</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Minimum Percentage: 60%</li>
            <li>Course Requirement: Engineering</li>
            <li>Backlogs: Not Allowed</li>
          
          </ul>
        </div>

        {/* Syllabus Card */}
        <div className="mb-6 border border-gray-200 rounded-lg p-4 bg-blue-200">
          <h2 className="text-2xl font-bold mb-2">Syllabus</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Topic 1: Data Structures and Algorithms</li>
            <li>Topic 2: Object-Oriented Programming</li>
            
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">Company Website</h2>
          <a href="https://example.com" className="text-blue-500 hover:underline">Visit Company Website</a>
        </div>
      </div>
    </div>
  );
};

export default Company;

