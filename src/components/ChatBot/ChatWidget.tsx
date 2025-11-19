import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { MessageCircle, X, Minimize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ChatWindow } from './ChatWindow';

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleChat = () => {
    if (isOpen && !isMinimized) {
      setIsMinimized(true);
    } else {
      setIsOpen(!isOpen);
      setIsMinimized(false);
    }
  };

  const closeChat = () => {
    setIsOpen(false);
    setIsMinimized(false);
  };

  return createPortal(
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className={`fixed bottom-20 right-4 sm:right-6 z-[9999] transition-all duration-300 ${
          isMinimized ? 'scale-95 opacity-50' : 'scale-100 opacity-100'
        }`}>
          <ChatWindow 
            onClose={closeChat}
            onMinimize={() => setIsMinimized(!isMinimized)}
            isMinimized={isMinimized}
          />
        </div>
      )}

      {/* Chat Toggle Button */}
      <div className="fixed bottom-4 right-4 sm:right-6 z-[9999]">
        <Button
          onClick={toggleChat}
          className="w-14 h-14 rounded-full bg-gradient-accent hover:shadow-accent hover:scale-110 transition-all duration-300 shadow-lg"
          size="icon"
        >
          {isOpen && !isMinimized ? (
            <Minimize2 className="w-6 h-6 text-white" />
          ) : (
            <MessageCircle className="w-6 h-6 text-white" />
          )}
        </Button>
        
        {/* Notification Badge */}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-xs text-white font-bold">!</span>
          </div>
        )}
      </div>
    </>,
    document.body
  );
};