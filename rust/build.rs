use std::env;
use std::path::PathBuf;

fn main() {
    let out_dir = PathBuf::from(env::var("OUT_DIR").unwrap_or("".to_string()));
    tonic_build::configure()
        .file_descriptor_set_path(out_dir.join("chat_descriptor.bin"))
        .compile(&["../proto/chat.proto"], &["../proto"])
        .unwrap();
}
