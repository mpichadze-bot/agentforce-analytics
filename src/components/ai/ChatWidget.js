import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, User } from 'lucide-react';
import { useAI } from './AIProvider';

const ChatWidget = () => {
  const { isChatOpen, setIsChatOpen, chatMessages, sendMessage, isLoading } = useAI();
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  // Focus input when opened
  useEffect(() => {
    if (isChatOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isChatOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;
    
    sendMessage(inputValue);
    setInputValue('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <button
        className={`ai-chat-trigger ${isChatOpen ? 'open' : ''}`}
        onClick={() => setIsChatOpen(!isChatOpen)}
        aria-label={isChatOpen ? 'Close AI chat' : 'Open AI chat'}
      >
        {isChatOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Panel */}
      {isChatOpen && (
        <div className="ai-chat-panel">
          <div className="ai-chat-header">
            <div className="ai-chat-avatar">
              <Sparkles size={18} />
            </div>
            <div>
              <div className="ai-chat-title">AI Analytics Assistant</div>
              <div className="ai-chat-status">Online</div>
            </div>
          </div>

          <div className="ai-chat-messages">
            {chatMessages.map((message, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  gap: '0.75rem',
                  marginBottom: '1rem',
                  flexDirection: message.role === 'user' ? 'row-reverse' : 'row',
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: message.role === 'user' 
                      ? 'var(--accent-cyan-dim)' 
                      : 'linear-gradient(135deg, var(--accent-purple), var(--accent-cyan))',
                    color: message.role === 'user' ? 'var(--accent-cyan)' : 'white',
                    flexShrink: 0,
                  }}
                >
                  {message.role === 'user' ? <User size={16} /> : <Sparkles size={16} />}
                </div>
                <div
                  style={{
                    maxWidth: '80%',
                    padding: '0.75rem 1rem',
                    borderRadius: 12,
                    background: message.role === 'user' 
                      ? 'var(--accent-cyan-dim)' 
                      : 'var(--obsidian-glass)',
                    border: '1px solid var(--obsidian-border)',
                    fontSize: '0.875rem',
                    lineHeight: 1.5,
                    color: 'var(--text-primary)',
                    whiteSpace: 'pre-wrap',
                  }}
                >
                  {message.content}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem' }}>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, var(--accent-purple), var(--accent-cyan))',
                    color: 'white',
                  }}
                >
                  <Sparkles size={16} />
                </div>
                <div
                  style={{
                    padding: '0.75rem 1rem',
                    borderRadius: 12,
                    background: 'var(--obsidian-glass)',
                    border: '1px solid var(--obsidian-border)',
                    color: 'var(--text-muted)',
                  }}
                >
                  <div className="typing-indicator">
                    <span></span><span></span><span></span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          <form className="ai-chat-input-wrap" onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              type="text"
              className="ai-chat-input"
              placeholder="Ask about pain points, customers..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isLoading}
            />
          </form>
        </div>
      )}

      <style>{`
        .typing-indicator {
          display: flex;
          gap: 4px;
        }
        .typing-indicator span {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--text-muted);
          animation: typing 1.4s infinite both;
        }
        .typing-indicator span:nth-child(2) { animation-delay: 0.2s; }
        .typing-indicator span:nth-child(3) { animation-delay: 0.4s; }
        @keyframes typing {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-4px); opacity: 1; }
        }
      `}</style>
    </>
  );
};

export default ChatWidget;

