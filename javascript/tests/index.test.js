const proto = require('../index');
const chatPb = proto.chatPb;
const wellKnownTypeTimestamp = proto.googleProtobufTimestampPb;

test('set value proto message: sendChatMessageRequest', () => {
  var sendChatMessageRequest = new chatPb.SendChatMessageRequest();
  sendChatMessageRequest.setId(1);
  sendChatMessageRequest.setMessage('message');
  sendChatMessageRequest.setName('name');
  expect(sendChatMessageRequest.getId()).toBe(1);
  expect(sendChatMessageRequest.getMessage()).toBe('message');
  expect(sendChatMessageRequest.getName()).toBe('name');
});

test('set value proto message: JoinChatRoomResponse', () => {
  var joinChatRoomResponse = new chatPb.JoinChatRoomResponse();
  const currentDate = Date.now();
  var timestamp = new wellKnownTypeTimestamp.Timestamp();
  timestamp.setSeconds(currentDate / 1000);
  timestamp.setNanos((currentDate % 1000) * 1e6);
  
  joinChatRoomResponse.setId(1);
  joinChatRoomResponse.setMessage('message');
  joinChatRoomResponse.setName('name');
  joinChatRoomResponse.setDate(timestamp);
  expect(joinChatRoomResponse.getId()).toBe(1);
  expect(joinChatRoomResponse.getMessage()).toBe('message');
  expect(joinChatRoomResponse.getName()).toBe('name');
  expect(joinChatRoomResponse.getDate().toDate()).toStrictEqual(timestamp.toDate());
});
