export const tools = [
  {
    functionDeclarations: [
      {
        name: "getUserInfo",
        description: "Get user information by email address",
        parameters: {
          type: "OBJECT",
          properties: {
            email: {
              type: "STRING",
              description: "The user's email address"
            }
          },
          required: ["email"]
        }
      }
    ]
  }
];

const mockDatabase = {
  "yoav@example.com": {
    name: "Yoav",
    location: "Tel Aviv",
    status: "Premium"
  },
  "student@ort.org": {
    name: "AI Student",
    location: "Haifa",
    status: "Basic"
  }
};

export function getUserInfo({ email }) {
  console.log(`🔌 Tool called: getUserInfo for ${email}`);
  return mockDatabase[email] || { error: "User not found" };
}
