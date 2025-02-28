contract;

enum MyEnum {
  Checked: (),
  Pending: ()
}

struct MyStruct {
  x: u8,
  y: u8,
  state: MyEnum
}

struct StructWithMultiOption {
  multiple: [Option<u8>; 5]
}

struct StructWithSingleOption {
  single: Option<StructWithMultiOption>,
}

abi MyContract {
  fn types_u8(x: u8) -> u8;
  fn types_u16(x: u16) -> u16;
  fn types_u32(x: u32) -> u32;
  fn types_u64(x: u64) -> u64;
  fn types_str(x: str[5]) -> str[5];
  fn types_bool(x: bool) -> bool;
  fn types_b256(x: b256) -> b256;
  fn types_struct(x: MyStruct) -> MyStruct;
  fn types_array(x: [u8; 3]) -> [u8; 3];
  fn types_tuple(x: (u8, u8, u8)) -> (u8, u8, u8);
  fn types_enum(x: MyEnum) -> MyEnum;
  fn types_vector_u8(x: Vec<u8>) -> Vec<u8>;
  fn types_vector_geo(x: Vec<MyStruct>) -> Vec<MyStruct>;
  fn types_vector_option(x: Vec<StructWithMultiOption>) -> Vec<StructWithMultiOption>;
  fn types_option(x: Option<u8>) -> Option<u8>;
  fn types_option_geo(x: Option<MyStruct>) -> Option<MyStruct>;
}

impl MyContract for Contract {
  fn types_u8(x: u8) -> u8 { 255 }
  fn types_u16(x: u16) -> u16 { 65535 }
  fn types_u32(x: u32) -> u32 { 4294967295 }
  fn types_u64(x: u64) -> u64 { 4294967295000 }
  fn types_str(x: str[5]) -> str[5] { "Hello" }
  fn types_bool(x: bool) -> bool { true }
  fn types_b256(x: b256) -> b256 { 0x0000000000000000000000000000000000000000000000000000000000000000 }
  fn types_array(x: [u8; 3]) -> [u8; 3] { x }
  fn types_tuple(x: (u8, u8, u8)) -> (u8, u8, u8) { (x.0, x.1, x.2) }
  fn types_struct(x: MyStruct) -> MyStruct { x }
  fn types_enum(x: MyEnum) -> MyEnum { x }
  fn types_vector_u8(x: Vec<u8>) -> Vec<u8> { x }
  fn types_vector_geo(x: Vec<MyStruct>) -> Vec<MyStruct> { x }
  fn types_vector_option(x: Vec<StructWithMultiOption>) -> Vec<StructWithMultiOption> { x }
  fn types_option(x: Option<u8>) -> Option<u8> { x }
  fn types_option_geo(x: Option<MyStruct>) -> Option<MyStruct> { x }
}
