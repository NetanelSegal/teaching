// Task 1: Define getUserInfo tool and its JSON Schema
export const tools = [
  {
    type: "function",
    function: {
      name: "getUserInfo",
      description: "Get information about a user by email",
      parameters: {
        type: "object",
        properties: {
          email: { type: "string" }
        },
        required: ["email"]
      }
    }
  }
];

const mockDB = {
  "yoav@example.com": { name: "Yoav", location: "Tel Aviv", sub: "Premium" },
  "alice@example.com": { name: "Alice", location: "London", sub: "Basic" }
};

export function getUserInfo({ email }) {
  return mockDB[email] || { error: "User not found" };
}
