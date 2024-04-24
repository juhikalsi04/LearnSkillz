// import React, { useState } from "react";

// const Discussion = () => {
//   const [username, setUsername] = useState("");
//   const [title, setTitle] = useState("");
//   const [question, setQuestion] = useState("");
//   const [reply, setReply] = useState("");
//   const [posts, setPosts] = useState([]);
//   const [questionError, setQuestionError] = useState("");
//   const [replyError, setReplyError] = useState("");
//   const [showReplyIndex, setShowReplyIndex] = useState(-1);
//   const [showAllRepliesIndex, setShowAllRepliesIndex] = useState(-1);

//   const handlePostQuestion = () => {
//     if (!username || !title || !question) {
//       setQuestionError("Please enter username, title, and description");
//       return;
//     }

//     const newPost = {
//       username: username,
//       title: title,
//       question: question,
//       date: new Date(),
//       likes: 0,
//       replies: [],
//       showReplyTextarea: false,
//     };
//     setPosts([...posts, newPost]);
//     setUsername("");
//     setTitle("");
//     setQuestion("");
//     setQuestionError("");
//   };

//   const handlePostReply = (postIndex) => {
//     if (!reply) {
//       setReplyError("Please enter a reply");
//       return;
//     }

//     const updatedPosts = [...posts];
//     updatedPosts[postIndex].replies.push({
//       username: username,
//       reply: reply,
//       likes: 0,
//     });
//     updatedPosts[postIndex].showReplyTextarea = false;
//     setPosts(updatedPosts);
//     setReply("");
//     setReplyError("");
//   };

//   const handleLike = (postIndex, replyIndex) => {
//     const updatedPosts = [...posts];
//     if (typeof replyIndex === "undefined") {
//       updatedPosts[postIndex].likes += updatedPosts[postIndex].liked ? -1 : 1;
//       updatedPosts[postIndex].liked = !updatedPosts[postIndex].liked;
//     } else {
//       updatedPosts[postIndex].replies[replyIndex].likes += updatedPosts[
//         postIndex
//       ].replies[replyIndex].liked
//         ? -1
//         : 1;
//       updatedPosts[postIndex].replies[replyIndex].liked =
//         !updatedPosts[postIndex].replies[replyIndex].liked;
//     }
//     setPosts(updatedPosts);
//   };

//   const timeAgo = (time) => {
//     const currentTime = new Date();
//     const elapsedTime = currentTime - new Date(time);
//     const minutes = Math.round(elapsedTime / (1000 * 60));

//     return `${minutes} minutes ago`;
//   };

//   const toggleShowReplyTextarea = (index) => {
//     const updatedPosts = [...posts];
//     updatedPosts[index].showReplyTextarea =
//       !updatedPosts[index].showReplyTextarea;
//     setPosts(updatedPosts);
//   };

//   const toggleShowAllReplies = (index) => {
//     setShowAllRepliesIndex(showAllRepliesIndex === index ? -1 : index);
//   };

//   return (
//     <div className="font-poppins">
//       <h1 className="text-3xl font-bold p-4 ml-2 ">Discussion</h1>
//       <hr className="h-px bg-black border-0 ml-4"></hr>
//       <div className="max-w-lg mx-auto mt-8 px-4">
//         <div className="mb-4">
//           <input
//             type="text"
//             placeholder="Your Name"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             className="w-full border border-gray-300 rounded-md px-3 py-2"
//           />
//         </div>
//         <div className="mb-4">
//           <input
//             type="text"
//             placeholder="Discussion Title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="w-full border border-gray-300 rounded-md px-3 py-2"
//           />
//         </div>
//         <div className="mb-4">
//           <textarea
//             placeholder="Your Question"
//             value={question}
//             onChange={(e) => setQuestion(e.target.value)}
//             className="w-full border border-gray-300 rounded-md px-3 py-2"
//           ></textarea>
//         </div>
//         <button
//           onClick={handlePostQuestion}
//           className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
//         >
//           Post Question
//         </button>
//         {questionError && <p className="text-red-500 mt-2">{questionError}</p>}

//         <div className="mt-8">
//           <h2 className="text-lg font-semibold mb-4">Recent Posts</h2>
//           {posts.map((post, index) => (
//             <div
//               key={index}
//               className="mb-4 border border-gray-300 p-4 rounded-md"
//             >
//               <p className="text-gray-600 mb-2">Posted by: {post.username}</p>
//               <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
//               <p className="mb-2">{post.question}</p>
//               <div className="flex items-center mb-2">
//                 <button
//                   onClick={() => handleLike(index)}
//                   className={`flex items-center text-red-500 mr-2 ${
//                     post.liked ? "fill-current" : "stroke-current"
//                   } hover:text-red-700 focus:outline-none`}
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5 mr-1"
//                     viewBox="0 0 20 20"
//                     fill="none"
//                   >
//                     <path
//                       d="M10 18l-1.45-1.34C3.65 12.52 1 10.12 1 7.5 1 5.5 2.5 4 4.5 4c1.54 0 2.91.99 3.5 2.36C8.09 4.99 9.46 4 11 4c2 0 3.5 1.5 3.5 3.5 0 2.62-2.65 5.02-8.55 9.16L10 18z"
//                       stroke="currentColor"
//                     />
//                   </svg>
//                   {post.likes}
//                 </button>
//                 <p>{timeAgo(post.date)}</p>
//               </div>
//               <button
//                 onClick={() => toggleShowReplyTextarea(index)}
//                 className="bg-blue-500 text-white px-3 py-1 rounded-md mt-2 hover:bg-blue-600"
//               >
//                 {post.showReplyTextarea ? "Cancel Reply" : "Reply"}
//               </button>
//               {post.showReplyTextarea && (
//                 <div className="mt-2">
//                   <textarea
//                     placeholder="Your Reply"
//                     value={reply}
//                     onChange={(e) => setReply(e.target.value)}
//                     className="w-full border border-gray-300 rounded-md px-3 py-2"
//                   ></textarea>
//                   <button
//                     onClick={() => handlePostReply(index)}
//                     className="bg-blue-500 text-white px-3 py-1 rounded-md mt-2 hover:bg-blue-600"
//                   >
//                     Post Reply
//                   </button>
//                   {replyError && (
//                     <p className="text-red-500 mt-2">{replyError}</p>
//                   )}
//                 </div>
//               )}
//               {post.replies.length > 0 && (
//                 <div className="mt-4">
//                   <h4 className="text-lg font-semibold mb-2">Replies:</h4>
//                   {post.replies.map((reply, replyIndex) => (
//                     <div key={replyIndex} className="flex items-center mb-2">
//                       <p className="text-gray-600 mr-2">{reply.username}</p>
//                       <p>{reply.reply}</p>
//                       <button
//                         onClick={() => handleLike(index, replyIndex)}
//                         className={`flex items-center ml-auto px-2 py-1 rounded-md ${
//                           reply.liked ? "text-red-500" : "text-gray-500"
//                         } hover:text-red-700 focus:outline-none`}
//                       >
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           className="h-5 w-5 mr-1"
//                           viewBox="0 0 20 20"
//                           fill="none"
//                         >
//                           <path
//                             d="M10 18l-1.45-1.34C3.65 12.52 1 10.12 1 7.5 1 5.5 2.5 4 4.5 4c1.54 0 2.91.99 3.5 2.36C8.09 4.99 9.46 4 11 4c2 0 3.5 1.5 3.5 3.5 0 2.62-2.65 5.02-8.55 9.16L10 18z"
//                             stroke="currentColor"
//                           />
//                         </svg>
//                         {reply.likes}
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Discussion;


// import React, { useState } from "react";

// const Discussion = () => {
//   const [username, setUsername] = useState("");
//   const [title, setTitle] = useState("");
//   const [question, setQuestion] = useState("");
//   const [reply, setReply] = useState("");
//   const [posts, setPosts] = useState([]);
//   const [questionError, setQuestionError] = useState("");
//   const [replyError, setReplyError] = useState("");
//   const [showReplyIndex, setShowReplyIndex] = useState(-1);
//   const [showAllRepliesIndex, setShowAllRepliesIndex] = useState(-1);

//   const handlePostQuestion = () => {
//     if (!username || !title || !question) {
//       setQuestionError("Please enter username, title, and description");
//       return;
//     }

//     const newPost = {
//       username: username,
//       title: title,
//       question: question,
//       date: new Date(),
//       likes: 0,
//       replies: [],
//       showReplyTextarea: false,
//     };
//     setPosts([...posts, newPost]);
//     setUsername("");
//     setTitle("");
//     setQuestion("");
//     setQuestionError("");
//   };

//   const handlePostReply = (postIndex, replyTo = null) => {
//     if (!reply) {
//       setReplyError("Please enter a reply");
//       return;
//     }

//     const updatedPosts = [...posts];
//     if (replyTo !== null) {
//       updatedPosts[postIndex].replies[replyTo].replies.push({
//         username: username,
//         reply: reply,
//         likes: 0,
//       });
//     } else {
//       updatedPosts[postIndex].replies.push({
//         username: username,
//         reply: reply,
//         likes: 0,
//       });
//     }
//     updatedPosts[postIndex].showReplyTextarea = false;
//     setPosts(updatedPosts);
//     setReply("");
//     setReplyError("");
//   };

//   const handleLike = (postIndex, replyIndex) => {
//     const updatedPosts = [...posts];
//     if (typeof replyIndex === "undefined") {
//       updatedPosts[postIndex].likes += updatedPosts[postIndex].liked ? -1 : 1;
//       updatedPosts[postIndex].liked = !updatedPosts[postIndex].liked;
//     } else {
//       updatedPosts[postIndex].replies[replyIndex].likes += updatedPosts[
//         postIndex
//       ].replies[replyIndex].liked
//         ? -1
//         : 1;
//       updatedPosts[postIndex].replies[replyIndex].liked =
//         !updatedPosts[postIndex].replies[replyIndex].liked;
//     }
//     setPosts(updatedPosts);
//   };

//   const timeAgo = (time) => {
//     const currentTime = new Date();
//     const elapsedTime = currentTime - new Date(time);
//     const minutes = Math.round(elapsedTime / (1000 * 60));

//     return `${minutes} minutes ago`;
//   };

//   const toggleShowReplyTextarea = (index) => {
//     const updatedPosts = [...posts];
//     updatedPosts[index].showReplyTextarea =
//       !updatedPosts[index].showReplyTextarea;
//     setPosts(updatedPosts);
//   };

//   const toggleShowAllReplies = (index) => {
//     setShowAllRepliesIndex(
//       showAllRepliesIndex === index ? -1 : index
//     );
//   };

//   return (
//     <div className="font-poppins">
//       <h1 className="text-3xl font-bold p-4 ml-2 ">Discussion</h1>
//       <hr className="h-px bg-black border-0 ml-4"></hr>
//       <div className="max-w-lg mx-auto mt-8 px-4">
//         <div className="mb-4">
//           <input
//             type="text"
//             placeholder="Your Name"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             className="w-full border border-gray-300 rounded-md px-3 py-2"
//           />
//         </div>
//         <div className="mb-4">
//           <input
//             type="text"
//             placeholder="Discussion Title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="w-full border border-gray-300 rounded-md px-3 py-2"
//           />
//         </div>
//         <div className="mb-4">
//           <textarea
//             placeholder="Your Question"
//             value={question}
//             onChange={(e) => setQuestion(e.target.value)}
//             className="w-full border border-gray-300 rounded-md px-3 py-2"
//           ></textarea>
//         </div>
//         <button
//           onClick={handlePostQuestion}
//           className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
//         >
//           Post Question
//         </button>
//         {questionError && (
//           <p className="text-red-500 mt-2">{questionError}</p>
//         )}

//         <div className="mt-8">
//           <h2 className="text-lg font-semibold mb-4">
//             Recent Posts
//           </h2>
//           {posts.map((post, index) => (
//             <div
//               key={index}
//               className="mb-4 border border-gray-300 p-4 rounded-md"
//             >
//               <p className="text-gray-600 mb-2">
//                 Posted by: {post.username}
//               </p>
//               <h3 className="text-lg font-semibold mb-2">
//                 {post.title}
//               </h3>
//               <p className="mb-2">{post.question}</p>
//               <div className="flex items-center mb-2">
//                 <button
//                   onClick={() => handleLike(index)}
//                   className={`flex items-center text-red-500 mr-2 ${
//                     post.liked ? "fill-current" : "stroke-current"
//                   } hover:text-red-700 focus:outline-none`}
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5 mr-1"
//                     viewBox="0 0 20 20"
//                     fill="none"
//                   >
//                     <path
//                       d="M10 18l-1.45-1.34C3.65 12.52 1 10.12 1 7.5 1 5.5 2.5 4 4.5 4c1.54 0 2.91.99 3.5 2.36C8.09 4.99 9.46 4 11 4c2 0 3.5 1.5 3.5 3.5 0 2.62-2.65 5.02-8.55 9.16L10 18z"
//                       stroke="currentColor"
//                     />
//                   </svg>
//                   {post.likes}
//                 </button>
//                 <p>{timeAgo(post.date)}</p>
//               </div>
//               <button
//                 onClick={() => toggleShowReplyTextarea(index)}
//                 className="bg-blue-500 text-white px-3 py-1 rounded-md mt-2 hover:bg-blue-600"
//               >
//                 {post.showReplyTextarea ? "Cancel Reply" : "Reply"}
//               </button>
//               {post.showReplyTextarea && (
//                 <div className="mt-2">
//                   <textarea
//                     placeholder="Your Reply"
//                     value={reply}
//                     onChange={(e) => setReply(e.target.value)}
//                     className="w-full border border-gray-300 rounded-md px-3 py-2"
//                   ></textarea>
//                   <button
//                     onClick={() => handlePostReply(index)}
//                     className="bg-blue-500 text-white px-3 py-1 rounded-md mt-2 hover:bg-blue-600"
//                   >
//                     Post Reply
//                   </button>
//                   {replyError && (
//                     <p className="text-red-500 mt-2">{replyError}</p>
//                   )}
//                 </div>
//               )}
//               {post.replies.length > 0 && (
//                 <div className="mt-4">
//                   <h4 className="text-lg font-semibold mb-2">
//                     Replies:
//                   </h4>
//                   {post.replies.slice(0, 3).map((reply, replyIndex) => (
//                     <div
//                       key={replyIndex}
//                       className="flex items-start mb-2"
//                     >
//                       <button
//                         onClick={() =>
//                           toggleShowReplyTextarea(index)
//                         }
//                         className="text-blue-500 hover:text-blue-700 focus:outline-none mr-2"
//                       >
//                         Reply
//                       </button>
//                       <div className="flex-grow">
//                         <div className="flex items-center mb-1">
//                           <p className="text-gray-600 mr-2">
//                             {reply.username}
//                           </p>
//                           <p>{reply.reply}</p>
//                         </div>
//                         <div className="flex items-center">
//                           <button
//                             onClick={() =>
//                               handleLike(index, replyIndex)
//                             }
//                             className={`flex items-center text-red-500 mr-2 ${
//                               reply.liked ? "fill-current" : "stroke-current"
//                             } hover:text-red-700 focus:outline-none`}
//                           >
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               className="h-5 w-5 mr-1"
//                               viewBox="0 0 20 20"
//                               fill="none"
//                             >
//                               <path
//                                 d="M10 18l-1.45-1.34C3.65 12.52 1 10.12 1 7.5 1 5.5 2.5 4 4.5 4c1.54 0 2.91.99 3.5 2.36C8.09 4.99 9.46 4 11 4c2 0 3.5 1.5 3.5 3.5 0 2.62-2.65 5.02-8.55 9.16L10 18z"
//                                 stroke="currentColor"
//                               />
//                             </svg>
//                             {reply.likes}
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                   {post.replies.length > 3 &&
//                     showAllRepliesIndex !== index && (
//                       <button
//                         onClick={() => toggleShowAllReplies(index)}
//                         className="text-blue-500 hover:text-blue-700 focus:outline-none"
//                       >
//                         Show All Replies
//                       </button>
//                     )}
//                   {showAllRepliesIndex === index &&
//                     post.replies.map((reply, replyIndex) => (
//                       <div
//                         key={replyIndex}
//                         className="flex items-start mb-2"
//                       >
//                         <button
//                           onClick={() =>
//                             toggleShowReplyTextarea(index)
//                           }
//                           className="text-blue-500 hover:text-blue-700 focus:outline-none mr-2"
//                         >
//                           Reply
//                         </button>
//                         <div className="flex-grow">
//                           <div className="flex items-center mb-1">
//                             <p className="text-gray-600 mr-2">
//                               {reply.username}
//                             </p>
//                             <p>{reply.reply}</p>
//                           </div>
//                           <div className="flex items-center">
//                             <button
//                               onClick={() =>
//                                 handleLike(index, replyIndex)
//                               }
//                               className={`flex items-center text-red-500 mr-2 ${
//                                 reply.liked
//                                   ? "fill-current"
//                                   : "stroke-current"
//                               } hover:text-red-700 focus:outline-none`}
//                             >
//                               <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="h-5 w-5 mr-1"
//                                 viewBox="0 0 20 20"
//                                 fill="none"
//                               >
//                                 <path
//                                   d="M10 18l-1.45-1.34C3.65 12.52 1 10.12 1 7.5 1 5.5 2.5 4 4.5 4c1.54 0 2.91.99 3.5 2.36C8.09 4.99 9.46 4 11 4c2 0 3.5 1.5 3.5 3.5 0 2.62-2.65 5.02-8.55 9.16L10 18z"
//                                   stroke="currentColor"
//                                 />
//                               </svg>
//                               {reply.likes}
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Discussion;

import React, { useState } from 'react';
import Login from '../Login';
import Register from '../Register';

const Discussion = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const toggleForm = (form) => {
    if (form === 'login') {
      setShowLogin(true);
      setShowRegister(false);
    } else {
      setShowLogin(false);
      setShowRegister(true);
    }
  };

  const containerStyle = {
    maxWidth: '600px',
    margin: '50px auto',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  };

  const headerStyle = {
    fontSize: '2.5em',
    marginBottom: '30px',
  };

  const linkStyle = {
    color: '#007bff',
    textDecoration: 'underline',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Welcome to LearnSkillz Discussion Forum</h1>
      <p>Don't have an account? <span style={linkStyle} onClick={() => toggleForm('register')}>Register Here</span></p>
      <p>Already have an account? <span style={linkStyle} onClick={() => toggleForm('login')}>Log in</span></p>

      {showLogin && <Login />}
      {showRegister && <Register />}
    </div>
  );
};

export default Discussion;

