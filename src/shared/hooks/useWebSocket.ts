import { useEffect, useRef, useState } from 'react';

export interface WebSocketMessage {
  type: string;
  payload: any;
}

export const useWebSocket = (url: string) => {
  const [isConnected, setIsConnected] = useState(false);
  const [lastMessage, setLastMessage] = useState<WebSocketMessage | null>(null);
  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    if (!url) return;

    const socket = new WebSocket(url);

    socket.onopen = () => {
      setIsConnected(true);
      console.log('WebSocket Connected');
    };

    socket.onclose = () => {
      setIsConnected(false);
      console.log('WebSocket Disconnected');
    };

    socket.onmessage = (event) => {
      try {
        const message = JSON.parse(event.data);
        setLastMessage(message);
      } catch (error) {
        console.error('WebSocket message parse error:', error);
      }
    };

    ws.current = socket;

    return () => {
      socket.close();
    };
  }, [url]);

  const sendMessage = (message: WebSocketMessage) => {
    if (ws.current && ws.current.readyState === WebSocket.OPEN) {
      ws.current.send(JSON.stringify(message));
    }
  };

  return { isConnected, lastMessage, sendMessage };
};
