import React, { useState } from 'react';

const ChatUI = () => {
  const [messages, setMessages] = useState([
    { sender: 'user2', text: 'Hello!' },
    { sender: 'user1', text: 'Hi there!' },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: 'user1', text: input }]);
      setInput('');
    }
  };

  return (
    <div className="flex flex-col  h-full w-[1290px]">
      {/* Chat Header */}
      <header className=" text-neutral-500 p-4 text-center text-lg font-bold">
        Gopi
      </header>

      {/* Message Display Area */}
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex mb-2 ${msg.sender === 'user1' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs p-2 rounded-lg shadow-md ${
                msg.sender === 'user1' ? 'bg-cyan-800 text-white' : 'bg-gray-300 text-black'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input Field */}
      <div className="p-4  flex items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2  border border-neutral-600 text-white rounded-xl outline-none bg-transparent"
          placeholder="Type your message..."
        />
        <button
          onClick={handleSend}
          className="ml-2 px-4 py-2 bg-cyan-900 text-white rounded-2xl hover:scale-75 "
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatUI;

