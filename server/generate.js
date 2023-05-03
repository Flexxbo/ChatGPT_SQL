import { response } from "express";
import openaiClient from "./api.js";

const generate = async (queryDescription) => {
  const daVinci = async (queryDescription) => {
    const response = await openaiClient.createCompletion({
      model: "text-davinci-003",
      prompt: `Convert the following natural language description into  a SQL query:\n\n${queryDescription}.`,
      max_tokens: 100,
      temperature: 0,
    });
    return response.data.choices[0].text;
  };

  const chatGptApi = async (queryDescription) => {
    const messages = [
      {
        role: "system",
        content: `You are a translator from plain english to SQL. `,
      },
      {
        role: "user",
        content: `Convert the following natural language description into  a SQL query:\n\nshow all elements from the table user.`,
      },
      { role: "assistant", content: `SELECT * FROM user` },
      {
        role: "user",
        content: `Convert the following natural language description into  a SQL query:\n\n${queryDescription}.`,
      },
    ];
    const response = await openaiClient.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: messages,
      max_tokens: 100,
      temperature: 0,
    });
    return response.data.choices[0].message.content;
  };

  return await chatGptApi(queryDescription);
  //return await daVinci(queryDescription);
};

export default generate;
