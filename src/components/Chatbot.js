import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Chatbot.css';

const Chatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Website-specific context (replace with your actual website details)
  const WEBSITE_CONTEXT = `
  You are a helpful chatbot for Kwoshi labs. 
  Key information about our website:
  Kwoshi Labs is an innovative technology studio founded in 2021, specializing in custom software development,
   mobile/web applications, digital marketing, and business analytics. We've successfully delivered 100+ projects with 
   a dedicated team of 10+ experts, offering 24/7 support from our Columbia, SC headquarters to clients worldwide. 
   Our services include responsive website development, cross-platform apps (using React Native/Flutter), SEO/social media marketing,
    and data-driven business solutions. When responding to queries, always provide accurate information about our services in a friendly
     manner. For questions beyond our scope, kindly direct users to our contact channels: email kwoshilabs@gmail.com, phone (318) 503-7293, 
     or visit us at 127 Sparkleberry Ln, Columbia, SC. We pride ourselves on custom solutions, transparent processes, and ongoing post-launch 
     support to help businesses thrive digitally."

  When answering questions, always:
  - Provide accurate information about the website
  - Be helpful and friendly
  - Redirect irrelevant questions to website-specific content
  - If you donot know any answers ask them to contact the company giving their email, phone , and address

  `;

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Add user message to chat
    const userMessage = { 
      text: input, 
      sender: 'user' 
    };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Construct a contextual prompt
      const contextualPrompt = `${WEBSITE_CONTEXT}

      User Question: ${input}
      
      Helpful Response:`;

      //Hugging Face API call
      const response = await axios.post(
        'https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium',
        { 
          inputs: contextualPrompt,
          parameters: {
            max_new_tokens: 100,
            temperature: 0.7,
            do_sample: true, // Important for varied responses
            top_p: 0.9,
            wait_for_model: true         // Control diversity
          }
        },
        {
          headers: {
            Authorization: `Bearer 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`,
          },
        }
      );

      
      // Extract and clean the bot response
      const rawResponse = response.data[0]?.generated_text || 'No response';
      const botResponse = rawResponse
        .replace(contextualPrompt, '')  // Remove original prompt
        .split('User Question:')[0]     // Remove any additional context
        .trim();

      // Add AI response to chat
      const aiMessage = { 
        text: botResponse || 'I apologize, but I could not generate a helpful response.',
        sender: 'ai' 
      };
      setMessages(prevMessages => [...prevMessages, aiMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = { 
        text: 'Sorry, I\'m having trouble processing your request. Please try again.', 
        sender: 'ai' 
      };
      setMessages(prevMessages => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="floating-chatbot-container">
      {/* Chat Icon */}
      <div 
        className={`chat-icon ${isChatOpen ? 'active' : ''}`} 
        onClick={toggleChat}
      >
        {isChatOpen ? '✕' : '💬'}
      </div>

      {/* Chat Dialog */}
      {isChatOpen && (
        <div className="chat-dialog">
          <div className="chat-header">
            <h3>Website Assistant</h3>
            <button onClick={toggleChat}>−</button>
          </div>

          <div className="message-list">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`message ${message.sender}`}
              >
                {message.text}
              </div>
            ))}
            {isLoading && (
              <div className="message ai">
                Generating response...
              </div>
            )}
          </div>

          <div className="input-area">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Ask about our website..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;