import React, { useState, useEffect } from 'react';
import Pusher from 'pusher-js';
import './App.css';

function App() {
  const [content, setContent] = useState('');

  useEffect(() => {
    // Initialize Pusher
    const pusher = new Pusher('5f8f37e07e839c5b1ba0', {
      cluster: 'ap2', // Replace with your cluster
    });

    const channel = pusher.subscribe('editor');
    channel.bind('update', (data) => {
      setContent(data.content); // Update content when broadcasted
    });

    return () => {
      pusher.unsubscribe('editor');
    };
  }, []);

  const handleChange = (e) => {
    setContent(e.target.value);
    // Post changes to the server
    fetch('/pusher/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: e.target.value }),
    });
  };
  return (
    <div className="doc">
      <textarea
        className="doc__text-editor"
        placeholder="Start typing here..."
        onChange={(e) => setContent(e.target.value)}
        value={content}
      />
    </div>
  );

}

export default App;
