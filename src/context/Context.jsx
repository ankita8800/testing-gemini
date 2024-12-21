import React, { createContext, useState, useEffect } from "react";
import run from "../config/gemini"; 

export const Context = createContext();

const ContextProvider = (props) => {
  const [aiResponse, setAiResponse] = useState("");  


  const onSent = async (prompt) => {
    const response = await run(prompt); 
    setAiResponse(response); 
  };

  
  useEffect(() => {
    onSent("What is React JS?");
  }, []); 

  const contextValue = {
    aiResponse,  
    onSent,      
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
