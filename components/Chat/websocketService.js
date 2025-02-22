import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';

class WebSocketService {
  constructor() {
    this.client = new Client({
      brokerURL: 'ws://localhost:8080/ws',
      connectHeaders: {},
      debug: function (str) {
        console.log(str);
      },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
    });
  }

  connect(onMessageReceived) {
    this.client.onConnect = () => {
      console.log('Connected');
      this.client.subscribe('/user/queue/messages', onMessageReceived);
    };

    this.client.onStompError = (frame) => {
      console.error('Broker reported error: ' + frame.headers['message']);
      console.error('Additional details: ' + frame.body);
    };

    this.client.activate();
  }

  sendMessage(destination, body) {
    this.client.publish({ destination, body: JSON.stringify(body) });
  }
}

const webSocketService = new WebSocketService();
export default webSocketService;