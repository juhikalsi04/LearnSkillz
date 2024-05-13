import React, { useState } from 'react';

const UserInfo = ({ username, onLogout }) => {
    return (
        <div className="flex items-center justify-end">
            <p className="mr-4">Welcome, {username}!</p>
            <button onClick={onLogout} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
                Logout
            </button>
        </div>
    );
};
const Dashboard = () => {
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
            likes: 0,
            replies: [],
            showReplyTextarea: false
        };
        setPosts([...posts, newPost]);
        setUsername('');
        setTitle('');
        setQuestion('');
        setQuestionError('');
    };

    const handlePostReply = (postIndex, replyToIndex = null) => {
        if (!reply) {
            setReplyError('Please enter a reply');
            return;
        }

        const updatedPosts = [...posts];
        if (replyToIndex !== null) {
            updatedPosts[postIndex].replies[replyToIndex].replies.push({
                username: username,
                reply: reply,
                likes: 0,
                replies: [] // nested replies
            });
        } else {
            updatedPosts[postIndex].replies.push({
                username: username,
                reply: reply,
                likes: 0,
                replies: [] // nested replies
            });
        }
        setPosts(updatedPosts);
        setReply('');
        setReplyError('');
    };

    const handleLike = (postIndex, replyIndex) => {
        const updatedPosts = [...posts];
        if (typeof replyIndex === 'undefined') {
            updatedPosts[postIndex].likes += updatedPosts[postIndex].liked ? -1 : 1;
            updatedPosts[postIndex].liked = !updatedPosts[postIndex].liked;
        } else {
            updatedPosts[postIndex].replies[replyIndex].likes += updatedPosts[postIndex].replies[replyIndex].liked ? -1 : 1;
            updatedPosts[postIndex].replies[replyIndex].liked = !updatedPosts[postIndex].replies[replyIndex].liked;
        }
        setPosts(updatedPosts);
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
    const handleLogout = () => {
        // Implement your logout logic here
        // For example, clear user session or redirect to logout page
        // For now, just reset the username
        setUsername('');
    };
    return (<>
        {username && (
            <div className="max-w-lg mx-2 mt-4 px-2">
                <UserInfo username={username} onLogout={handleLogout} />
            </div>
        )}
        <div className="max-w-lg mx-2 mt-8 px-2">
            <h2 className="text-3xl font-bold mb-4">Discussion Forum</h2>
            <div className="flex flex-col space-y-4">
                <div>
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Discussion Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                    />
                </div>
                <div>
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
            </div>

            <div className="mt-8">
                <h2 className="text-lg font-semibold mb-4">Recent Posts</h2>
                {posts.map((post, index) => (
                    <div key={index} className="mb-4 bg-white border border-gray-300 p-4 rounded-md">
                        <p className="text-gray-600 mb-2">Posted by: {post.username}</p>
                        <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                        <p className="mb-2">{post.question}</p>
                        <div className="flex items-center mb-2">
                            <button
                                onClick={() => handleLike(index)}
                                className={`flex items-center text-red-500 mr-2 ${post.liked ? 'fill-current' : 'stroke-current'} hover:text-red-700 focus:outline-none`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="none">
                                    <path d="M10 18l-1.45-1.34C3.65 12.52 1 10.12 1 7.5 1 5.5 2.5 4 4.5 4c1.54 0 2.91.99 3.5 2.36C8.09 4.99 9.46 4 11 4c2 0 3.5 1.5 3.5 3.5 0 2.62-2.65 5.02-8.55 9.16L10 18z" stroke="currentColor" />
                                </svg>
                                {post.likes}
                            </button>
                            <p>{timeAgo(post.date)}</p>
                        </div>
                        <button
                            onClick={() => toggleShowReplyTextarea(index)}
                            className="bg-blue-500 text-white px-3 py-1 rounded-md mt-2 hover:bg-blue-600"
                        >
                            {post.showReplyTextarea ? "Cancel Reply" : "Add Comment"}
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
                            <div className="mt-4">
                                <h4 className="text-lg font-semibold mb-2">Comments:</h4>
                                {post.replies.map((reply, replyIndex) => (
                                    <div key={replyIndex} className="flex items-center mb-2">
                                        <p className="text-gray-600 mr-2">{reply.username}</p>
                                        <p>{reply.reply}</p>
                                        <button
                                            onClick={() => toggleShowReplyTextarea(index)}
                                            className="bg-blue-500 text-white px-3 py-1 rounded-md ml-auto hover:bg-blue-600"
                                        >
                                            Reply
                                        </button>
                                    </div>
                                ))}
                                {/* Dropdown menu to hide post */}
                                <div className="relative inline-block ml-2">
                                    <button className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-md">
                                        Options
                                    </button>
                                    <div className="hidden absolute z-10 mt-2 w-48 bg-white shadow-lg rounded-md">
                                        <div className="py-1">
                                            <button className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                                                Hide Comment
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                ))}
            </div>
        </div>
    </>);
};

export default Dashboard;
