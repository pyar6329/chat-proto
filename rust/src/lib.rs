pub use prost;
pub use prost_types;
pub use tonic;

#[cfg(test)]
mod tests {
    #[test]
    fn chat() {
        use super::chat::chat_client::ChatClient;
        use super::chat::chat_server::ChatServer;
        use super::chat::{JoinChatRoomResponse, SendChatMessageRequest};
        use prost_types::Timestamp;
        use std::time::SystemTime;
        let send_message = SendChatMessageRequest {
            id: 1,
            message: "message".to_string(),
            name: "aaa".to_string(),
        };
        let timestamp = Timestamp::from(SystemTime::now());
        let join_response = JoinChatRoomResponse {
            id: 1,
            message: "aa".to_string(),
            name: "bb".to_string(),
            date: Some(timestamp),
        };
        assert_eq!(join_response.id, 1);
        assert_eq!(send_message.id, 1);
    }
}

pub mod chat {
    tonic::include_proto!("chat");
    // import belows
    // use chat_proto::chat::chat_client::*;
    // use chat_proto::chat::chat_server::*;
    // use chat_proto::chat::{JoinChatRoomResponse, SendChatMessageRequest};
}
