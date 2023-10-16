// ErrorMessage.js
import React from 'react';

interface MessageProps{
    message: string;
    type: string;
}

const Message = ({ message, type }: MessageProps) => {
  const className = type === 'error' ? 'text-red-500' : 'text-green-500';

  return <p className={className} role="alert">{message}</p>;
};

export default Message;
