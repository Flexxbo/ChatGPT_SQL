import { response } from "express";
import openaiClient from "./api";

const generate = async (queryDescription) => {
    const gptResponse = await openaiClient.createCompletion({
        model: "text-davinci-003",
        prompt: `Convert the following SQL query into a natural language description:\n\n${queryDescription}.`,
        max_tokens: 100, 
        temperature: 0
    })
return response.data.choices[0].text };

export default generate;