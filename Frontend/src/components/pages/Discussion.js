import React, { useState } from 'react';

const Discussion = () => {
  const [username, setUsername] = useState('');
  const [title, setTitle] = useState('');
  const [question, setQuestion] = useState('');
  const [reply, setReply] = useState('');
  const [posts, setPosts] = useState([]);
  const [questionError, setQuestionError] = useState('');
  const [replyError, setReplyError] = useState('');
  const [showReplyIndex, setShowReplyIndex] = useState(-1);
  const [showAllRepliesIndex, setShowAllRepliesIndex] = useState(-1);

  const handlePostQuestion = () => {
    if (!username || !title || !question) {
      setQuestionError('Please enter username, title, and description');
      return;
    }

    const newPost = {
      username: username,
      title: title,
      question: question,
      date: new Date(),
      replies: [],
      showReplyTextarea: false
    };
    setPosts([...posts, newPost]);
    setUsername('');
    setTitle('');
    setQuestion('');
    setQuestionError('');
  };

  const handlePostReply = (index) => {
    if (!reply) {
      setReplyError('Please enter a reply');
      return;
    }

    const updatedPosts = [...posts];
    updatedPosts[index].replies.push(reply);
    updatedPosts[index].showReplyTextarea = false;
    setPosts(updatedPosts);
    setReply('');
    setReplyError('');
  };

  const timeAgo = (time) => {
    const currentTime = new Date();
    const elapsedTime = currentTime - new Date(time);
    const minutes = Math.round(elapsedTime / (1000 * 60));

    return `${minutes} minutes ago`;
  };

  const toggleShowReplyTextarea = (index) => {
    const updatedPosts = [...posts];
    updatedPosts[index].showReplyTextarea = !updatedPosts[index].showReplyTextarea;
    setPosts(updatedPosts);
  };

  const toggleShowAllReplies = (index) => {
    setShowAllRepliesIndex(showAllRepliesIndex === index ? -1 : index);
  };

  return (
    <div className="max-w-lg mx-auto mt-8 px-4">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Your Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Discussion Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2"
        />
      </div>
      <div className="mb-4">
        <textarea
          placeholder="Your Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2"
        ></textarea>
      </div>
      <button
        onClick={handlePostQuestion}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Post Question
      </button>
      {questionError && <p className="text-red-500 mt-2">{questionError}</p>}
      
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4">Recent Posts</h2>
        {posts.map((post, index) => (
          <div key={index} className="mb-4 border border-gray-300 p-4 rounded-md">
            <p className="text-gray-600 mb-2">Posted by: {post.username}</p>
            <h3 className="text-lg font-semibold mb-2">Title : {post.title}</h3>
            <p className="mb-2">Question : {post.question}</p>
            <p className="text-sm text-gray-500">{timeAgo(post.date)}</p>
            <button
              onClick={() => toggleShowReplyTextarea(index)}
              className="bg-blue-500 text-white px-3 py-1 rounded-md mt-2 hover:bg-blue-600"
            >
              {post.showReplyTextarea ? "Cancel Reply" : "Reply"}
            </button>
            {post.showReplyTextarea &&
              <div className="mt-2">
                <textarea
                  placeholder="Your Reply"
                  value={reply}
                  onChange={(e) => setReply(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                ></textarea>
                <button
                  onClick={() => handlePostReply(index)}
                  className="bg-blue-500 text-white px-3 py-1 rounded-md mt-2 hover:bg-blue-600"
                >
                  Post Reply
                </button>
                {replyError && <p className="text-red-500 mt-2">{replyError}</p>}
              </div>
            }
            {post.replies.length > 0 &&
              <button
                onClick={() => toggleShowAllReplies(index)}
                className="text-blue-500 mt-2 hover:text-blue-700 focus:outline-none"
              >
                {showAllRepliesIndex === index ? "Hide All Replies" : "Show All Replies"}
              </button>
            }
            {showAllRepliesIndex === index && post.replies.map((reply, replyIndex) => (
              <div key={replyIndex} className="mt-2">
                <p>{reply}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discussion;
