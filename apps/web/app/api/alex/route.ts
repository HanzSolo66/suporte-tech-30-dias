import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const gemini = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const lessonTitle = String(body.lessonTitle || "");
    const lessonSummary = String(body.lessonSummary || "");
    const studentQuestion = String(body.studentQuestion || "");

    if (!studentQuestion.trim()) {
      return NextResponse.json(
        { answer: "Me conte qual foi sua dúvida para eu conseguir ajudar." },
        { status: 200 }
      );
    }

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        {
          answer:
            "O Alex IA ainda não está configurado. Falta adicionar a chave GEMINI_API_KEY no ambiente do projeto.",
        },
        { status: 200 }
      );
    }

    const prompt = `
Você é o Assistente Alex, mentor amigável de uma trilha chamada Suporte Tech 30 Dias.

Seu papel:
- explicar com linguagem simples;
- responder em português do Brasil;
- conectar tecnologia com atendimento, suporte, processos e transição de carreira;
- dar exemplos práticos;
- não responder de forma longa demais;
- incentivar o aluno a continuar.

Aula atual:
${lessonTitle}

Resumo da aula:
${lessonSummary}

Dúvida do aluno:
${studentQuestion}

Responda como mentor, com explicação clara e um exemplo prático.
`;

    const response = await gemini.models.generateContent({
      model: "gemini-1.5-flash",
      contents: prompt,
    });

    const answer =
      response.text ||
      "Não consegui gerar uma resposta agora. Tente escrever sua dúvida de outro jeito.";

    return NextResponse.json({ answer });
  } catch (error) {
    console.error("Erro no Alex IA:", error);

    return NextResponse.json(
      {
        answer:
          "Tive um problema para responder agora. Tente novamente em alguns instantes.",
      },
      { status: 200 }
    );
  }
}