import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import webSocketService from './websocketService';

const ChatMsg = ({ userId }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    webSocketService.connect((msg) => {
      const newMessage = JSON.parse(msg.body);
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });
  }, []);

  const sendMessage = () => {
    const chatMessage = {
      senderId: userId,
      receiverId: 'receiver-id', // Replace with actual receiver ID
      content: message,
      timestamp: new Date().getTime(),
    };
    webSocketService.sendMessage('/app/sendPrivateMessage', chatMessage);
    setMessage('');
  };

  return (
    <View>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <View>
            <Text><strong>{item.senderId}</strong>: {item.content}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <TextInput
        value={message}
        onChangeText={setMessage}
        placeholder="Type a message"
      />
      <Button title="Send" onPress={sendMessage} />
    </View>
  );
};

export default ChatMsg;