import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";
dotenv.config();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

if (!OPENAI_API_KEY) {
  console.log("OpenAI API key not found");
  process.exit(1);
  //throw new Error("OPENAI_API not found");
}

const configuration = new Configuration({ apiKey: openaiApiKey });
const openai = new OpenAIApi(configuration);

export default openai;