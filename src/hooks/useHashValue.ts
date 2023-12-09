export default function useHashValue() {
  // Function to hash a string using SHA-256
  async function hashString(input: string) {
    // Encode the input string as a Uint8Array
    const encoder = new TextEncoder();
    const data = encoder.encode(input);

    // Use the SubtleCrypto API to hash the data
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);

    // Convert the hash buffer to a hexadecimal string
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");

    return hashHex;
  }

  // Example usage
  const inputValue = "Hello, World!";
  hashString(inputValue).then((hash) => {
    console.log(`Input: ${inputValue}`);
    console.log(`Hash: ${hash}`);
    console.log(
      "dffd6021bb2bd5b0af676290809ec3a53191dd81c7f70a4b28688a362182986f"
    );
  });
  return { hashString };
}
