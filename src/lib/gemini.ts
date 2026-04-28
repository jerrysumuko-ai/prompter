import { GoogleGenAI } from "@google/genai";

const apiKey = typeof process !== 'undefined' ? process.env.GEMINI_API_KEY : '';
const genAI = new GoogleGenAI({ apiKey: apiKey || "" });

export interface PromptResult {
  title: string;
  enhancedPrompt: string;
  layoutDescription: string;
  technicalSpecs: string;
}

export async function enhancePrompt(rawIdea: string, category: string): Promise<PromptResult> {
  const prompt = `
    You are a world-class AI Image Prompt Engineer specializing in advanced models like Imagen 3 or Midjourney v6.
    Your task is to take a simple idea and transform it into a complex, precise prompt that includes:
    1. A descriptive title.
    2. The Enhanced Prompt (The core engine for the AI).
    3. Layout/Placement Instructions (Where objects should be).
    4. Technical Specifications (Camera, Lighting, Style).

    Category: ${category}
    Raw Idea: ${rawIdea}

    Output the result in a JSON format:
    {
      "title": "...",
      "enhancedPrompt": "...",
      "layoutDescription": "...",
      "technicalSpecs": "..."
    }
  `;

  try {
    const result = await genAI.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt
    });
    
    const text = result.text;
    // Clean up potential markdown formatting
    const cleanedText = text ? text.replace(/```json/g, '').replace(/```/g, '').trim() : '';
    return JSON.parse(cleanedText) as PromptResult;
  } catch (error) {
    console.error("Gemini Error:", error);
    return {
      title: "Error Generating Prompt",
      enhancedPrompt: rawIdea,
      layoutDescription: "Standard centered composition",
      technicalSpecs: "Default visual settings"
    };
  }
}
