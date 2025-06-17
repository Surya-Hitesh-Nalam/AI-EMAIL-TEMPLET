import { GenerateEmailTemplateAIModel } from "@/config/AiModel";
import { NextResponse } from "next/server";


export async function POST(req) {
  try {
    const { prompt, userEmail, tId } = await req.json();
    console.log("✅ Received Prompt:", prompt);

    if (!prompt) {
      return NextResponse.json({ error: "Prompt missing" }, { status: 400 });
    }

    const aiResp = await GenerateEmailTemplateAIModel.sendMessage(prompt);
    console.log("✅ Gemini AI Response:", aiResp);

    return NextResponse.json({ success: true, result: aiResp });
  } catch (err) {
    console.error("❌ Error in /api/ai-email-generate:", err);
    return NextResponse.json({ error: err.message || "Something went wrong" }, { status: 500 });
  }
}
