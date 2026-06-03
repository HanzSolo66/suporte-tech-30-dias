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
        {
          answer:
            "Me conte qual foi sua dúvida para eu conseguir ajudar melhor.",
        },
        { status: 200 }
      );
    }

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        {
          answer:
            "O PetroKoblaco IA ainda não está configurado. Falta adicionar a chave GEMINI_API_KEY no ambiente do projeto.",
        },
        { status: 200 }
      );
    }

    const prompt = `
Você é o PetroKoblaco IA, mentor amigável de uma trilha chamada Suporte Tech 30 Dias.

Seu papel:
- explicar com linguagem simples;
- responder em português do Brasil;
- conectar tecnologia com atendimento, suporte, processos e transição de carreira;
- dar exemplos práticos;
- não responder de forma longa demais;
- incentivar o aluno a continuar;
- responder com tom humano, direto e motivador.

Formato ideal da resposta:
1. Comece validando a dúvida do aluno.
2. Explique o conceito de forma simples.
3. Dê um exemplo prático ligado a atendimento, suporte ou processos.
4. Termine com uma dica curta para o aluno continuar.

Aula atual:
${lessonTitle}

Resumo da aula:
${lessonSummary}

Dúvida do aluno:
${studentQuestion}

Responda como mentor, com explicação clara e exemplo prático.
`;

    const response = await gemini.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });

    const answer =
      response.text ||
      "Não consegui gerar uma resposta agora. Tente escrever sua dúvida de outro jeito.";

    return NextResponse.json({ answer });
  } catch (error) {
    console.error("Erro no PetroKoblaco IA:", error);

    return NextResponse.json(
      {
        answer:
          "Tive um problema para responder agora. Tente novamente em alguns instantes.",
      },
      { status: 200 }
    );
  }
}