import Text "mo:base/Text";

module {
  public func getPlaceholderBlob(name: Text): Blob {
    // encodeUtf8 already returns a Blob
    return Text.encodeUtf8("Binary data for " # name);
  }
}






