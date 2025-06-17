import { GoogleGenAI } from "@google/genai";

export const GenerateEmailTemplateAIModel = {
  sendMessage: async (prompt) => {
    console.log("🤖 Sending prompt to Gemini:", prompt);

    try {
      const ai = new GoogleGenAI({
        apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
      });

      const model = "gemini-2.5-pro-preview-06-05";
      const contents = [{ role: "user", parts: [{ text: prompt }] }];

      const response = await ai.models.generateContentStream({
        model,
        contents,
        config: {
          responseMimeType: "application/json",
          thinkingConfig: { thinkingBudget: -1 },
        },
      });

      let finalText = "";
      for await (const chunk of response) {
        finalText += chunk.text;
      }

      console.log("✅ Final AI Text:", finalText);
      return finalText;

    } catch (error) {
      console.error("❌ Error in Gemini sendMessage:", error);
      throw error;
    }
  },
};
