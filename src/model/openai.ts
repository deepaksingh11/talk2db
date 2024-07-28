import { ChatOpenAI } from "@langchain/openai";

export const createModel = (apiKey: string, modelName: string) => {
    return new ChatOpenAI({
        model: modelName,
        temperature: 0,
        openAIApiKey: apiKey
    });
};
