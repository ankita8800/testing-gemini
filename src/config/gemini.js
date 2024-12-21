// Import the necessary modules from Google Generative AI
import { GoogleGenerativeAI } from "@google/generative-ai";

// Your valid API Key (make sure it's correct and has permissions)
const apiKey = "b472489989904f6ea3090f1e16af14bcffc29a61"; // Replace with your API key

// Initialize the Generative AI client
const genAI = new GoogleGenerativeAI({ apiKey });

// Define the model you want to use
const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp", // Ensure this is the correct model name
});

// Define the generation configuration
const generationConfig = {
  temperature: 1,               // Controls randomness (higher = more random)
  topP: 0.95,                   // Nucleus sampling for controlling diversity
  topK: 40,                     // Limits the number of highest probability tokens
  maxOutputTokens: 100,         // Limit the number of output tokens (for brevity)
  responseMimeType: "text/plain", // Response format
};

// Function to interact with the Generative AI API
async function run() {
  try {
    // Start a new chat session
    const chatSession = await model.startChat({
      generationConfig,
      history: [], // Empty history (you can add previous messages if needed)
    });

    console.log("Chat session started successfully.");

    // Send a prompt to the model
    const prompt = "Tell me an interesting fact about space.";
    const result = await chatSession.sendMessage(prompt);

    // Log the result
    console.log("Response from AI:", result.response.text);
  } catch (error) {
    console.error("Error in AI response:", error);
    if (error.response) {
      console.error("Error details:", error.response.data);
    }
  }
}

// Run the function


export default run;
