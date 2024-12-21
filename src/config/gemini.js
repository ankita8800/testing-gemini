import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

// Ensure API key is correct and valid
const apiKey = "AIzaSyDMDGhdPKBTMyWtJtEOvyQ8j4JfC9J5xZE"; // Ensure this key is valid for Generative AI API

// Initialize the client with the API key
const genAI = new GoogleGenerativeAI({ apiKey });
console.log(genAI); // Check if the genAI object initializes correctly

// Correctly initialize the model
const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp", // Make sure this model name is valid and supported in your API configuration
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  try {
    // Start a new chat session
    const chatSession = await model.startChat({
      generationConfig,
      history: [],
    });
    console.log("Chat session started:", chatSession);

    // Send the message (prompt) and get the response
    const result = await chatSession.sendMessage(prompt);

    // Return the response text
    return result.response.text;
  } catch (error) {
    console.error("Error in AI response:", error);
    // Catch and log any errors from the API
    return "Error occurred during AI processing.";
  }
}

export default run;
