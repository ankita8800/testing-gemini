import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";


const apiKey = "AIzaSyBZzJurugIGjNfyvFp9XNrLfi25au-Jgh0"; 

const genAI = new GoogleGenerativeAI({ apiKey });


const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp", 
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
    const chatSession = await model.startChat({
      generationConfig,
      history: [],
    });

  
    const result = await chatSession.sendMessage(prompt);

    
    return result.response.text;  
  } catch (error) {
    console.error("Error in AI response:", error);
    return "Error occurred during AI processing.";
  }
}

export default run;
