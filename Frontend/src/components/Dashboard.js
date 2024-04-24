import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
const Dashboard = () => {
    const { user } = useUser();
    console.log('User in Dashboard:', user);
    const [title, setTitle] = useState('');
    const [question, setQuestion] = useState('');
    const [discussions, setDiscussions] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newDiscussion = {
            name: user ? user.name : 'Unknown',
            title,
            question,
            dateTime: new Date().toLocaleString(),
        };
        setDiscussions([...discussions, newDiscussion]);
        setTitle('');
        setQuestion('');
    };

    return (
        <div style={{ width: '100%', height: '100vh', backgroundColor: '#fff', textAlign: 'center', overflow: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px', padding: '20px' }}>
                <span>{user.name}</span>
                <button style={{ marginLeft: '10px', padding: '8px 16px', border: 'none', borderRadius: '4px', cursor: 'pointer', backgroundColor: '#007bff', color: '#fff' }}>Logout</button>
            </div>
            <h1>Welcome to LearnSkillz</h1>
            <div style={{ marginTop: '20px', marginBottom: '20px', padding: '20px' }}>
                <h2>Your Discussion</h2>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '15px' }}>
                        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} required />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <textarea placeholder="Your Question in Detail" value={question} onChange={(e) => setQuestion(e.target.value)} style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', resize: 'vertical' }} required ></textarea>
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <button type="submit" style={{ padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer', backgroundColor: '#007bff', color: '#fff' }}>Post</button>
                    </div>
                </form>
            </div>
            <div style={{ padding: '20px' }}>
                <h2>Discussion List</h2>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                    <thead>
                        <tr>
                            <th style={{ border: '1px solid #ccc', padding: '8px 12px', backgroundColor: '#f4f4f4' }}>Name</th>
                            <th style={{ border: '1px solid #ccc', padding: '8px 12px', backgroundColor: '#f4f4f4' }}>Title</th>
                            <th style={{ border: '1px solid #ccc', padding: '8px 12px', backgroundColor: '#f4f4f4' }}>Date & Time</th>
                            <th style={{ border: '1px solid #ccc', padding: '8px 12px', backgroundColor: '#f4f4f4' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {discussions.map((discussion, index) => (
                            <tr key={index}>
                                <td style={{ border: '1px solid #ccc', padding: '8px 12px' }}>{discussion.name}</td>
                                <td style={{ border: '1px solid #ccc', padding: '8px 12px' }}>{discussion.title}</td>
                                <td style={{ border: '1px solid #ccc', padding: '8px 12px' }}>{discussion.dateTime}</td>
                                <td style={{ border: '1px solid #ccc', padding: '8px 12px' }}><button style={{ padding: '8px 16px', border: 'none', borderRadius: '4px', cursor: 'pointer', backgroundColor: '#007bff', color: '#fff' }}>Open Discussion</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;
