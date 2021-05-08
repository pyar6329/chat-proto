fn main() {
    tonic_build::configure()
        .compile(&["../proto/chat.proto"], &["../proto"])
        .unwrap();
}
