import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import webSocketService from './websocketService';

const ChatMessage = ({ message, isOwnMessage }) => (
  <View style={[styles.messageContainer, isOwnMessage ? styles.ownMessage : styles.otherMessage]}>
    <Text style={styles.messageText}>{message.content}</Text>
    <Text style={styles.timestamp}>
      {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
    </Text>
  </View>
);

const Chat = ({ userId }) => {
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState('');
  const [conversations, setConversations] = useState([
    { id: 1, name: 'John Doe', lastMessage: 'Hey there!' },
    { id: 2, name: 'Jane Smith', lastMessage: 'How are you?' },
  ]);
  const [selectedChat, setSelectedChat] = useState(null);

  useEffect(() => {
    webSocketService.connect((msg) => {
      const newMessage = JSON.parse(msg.body);
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    return () => {
      // Cleanup websocket connection
      webSocketService.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (!messageText.trim()) return;

    const chatMessage = {
      senderId: userId,
      receiverId: selectedChat?.id || 'receiver-id', // Ensure receiverId is set correctly
      content: messageText, // Use messageText instead of message
      timestamp: new Date().getTime(),
    };

    webSocketService.sendMessage('/app/sendPrivateMessage', chatMessage);
    setMessageText(''); // Clear the input after sending
  };

  if (!selectedChat) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Chats</Text>
        </View>
        <FlatList
          data={conversations}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.conversationItem}
              onPress={() => setSelectedChat(item)}
            >
              <View style={styles.avatarContainer}>
                <Icon name="person-circle" size={40} color="#059669" />
              </View>
              <View style={styles.conversationDetails}>
                <Text style={styles.conversationName}>{item.name}</Text>
                <Text style={styles.lastMessage}>{item.lastMessage}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setSelectedChat(null)}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{selectedChat.name}</Text>
      </View>
      
      <FlatList
        data={messages}
        style={styles.messagesList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <Text><strong>{item.senderId}</strong>: {item.content}</Text> {/* Simplified message rendering */}
          </View>
        )}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={messageText}
          onChangeText={setMessageText}
          placeholder="Type a message..."
          placeholderTextColor="#666"
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Icon name="send" size={24} color="#059669" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111827',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#1F2937',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 16,
  },
  messagesList: {
    flex: 1,
    padding: 16,
  },
  messageContainer: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 16,
    marginVertical: 4,
  },
  ownMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#059669',
  },
  otherMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#374151',
  },
  messageText: {
    color: '#fff',
    fontSize: 16,
  },
  timestamp: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 12,
    marginTop: 4,
    alignSelf: 'flex-end',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#1F2937',
  },
  input: {
    flex: 1,
    backgroundColor: '#374151',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 8,
    color: '#fff',
    marginRight: 8,
  },
  sendButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#374151',
    justifyContent: 'center',
    alignItems: 'center',
  },
  conversationItem: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#1F2937',
  },
  avatarContainer: {
    marginRight: 16,
  },
  conversationDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  conversationName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  lastMessage: {
    color: '#9CA3AF',
    fontSize: 14,
    marginTop: 4,
  },
});

export default Chat;