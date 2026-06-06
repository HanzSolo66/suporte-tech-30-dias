import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const gemini = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

function buildFallbackAnswer(studentQuestion: string, lessonTitle: string) {
  const question = studentQuestion.toLowerCase();

  if (
    question.includes("emprego") ||
    question.includes("trabalho") ||
    question.includes("recolocar") ||
    question.includes("mercado")
  ) {
    return `Entendi sua dúvida. Esta trilha não garante uma vaga automaticamente, mas ela te ajuda a construir uma base prática para se apresentar melhor ao mercado.

A ideia é você sair com fundamentos de lógica, Python, dados, automação, suporte e um projeto publicado para mostrar no portfólio.

Exemplo prático: em vez de dizer apenas “quero migrar para tecnologia”, você poderá dizer “criei uma aplicação web gamificada com aulas, progresso, certificado e assistente de IA”. Isso já demonstra iniciativa, aprendizado técnico e visão de produto.

Dica: use cada aula para gerar uma pequena evidência de evolução no LinkedIn ou GitHub. Isso ajuda recrutadores a enxergarem seu progresso.`;
  }

  if (
    question.includes("lógica") ||
    question.includes("programação") ||
    question.includes("algoritmo")
  ) {
    return `Boa dúvida. Lógica de programação é aprender a organizar passos para resolver um problema.

Pense em atendimento: quando um cliente relata um erro, você não responde de qualquer jeito. Você identifica o problema, faz perguntas, testa possibilidades e aplica uma solução. Isso é lógica.

Na programação acontece parecido: você quebra um problema grande em etapas menores.

Exemplo:
1. Receber uma solicitação.
2. Entender o problema.
3. Verificar as informações.
4. Tomar uma decisão.
5. Entregar uma resposta.

Dica: antes de pensar em código, treine explicar o problema em passos simples.`;
  }

  if (
    question.includes("python") ||
    question.includes("código") ||
    question.includes("variável")
  ) {
    return `Ótima pergunta. Python é uma linguagem usada para transformar instruções em ações que o computador consegue executar.

Pense em uma variável como uma etiqueta onde você guarda uma informação. Em atendimento, seria como guardar o nome do cliente, o número do chamado ou o status da solicitação.

Exemplo: se você guarda o status como “pendente”, o sistema pode decidir qual próxima ação tomar.

Dica: não tente decorar tudo de uma vez. Foque em entender: dado entra, o programa processa, uma resposta sai.`;
  }

  if (
    question.includes("sql") ||
    question.includes("dados") ||
    question.includes("banco")
  ) {
    return `Boa dúvida. Dados são informações organizadas para ajudar na tomada de decisão.

No suporte, dados podem mostrar quantos chamados foram abertos, quais problemas mais aparecem e quanto tempo cada atendimento demora.

SQL é uma forma de perguntar coisas para um banco de dados.

Exemplo: “quais chamados estão pendentes?” ou “quantos clientes tiveram o mesmo problema esta semana?”.

Dica: pense em SQL como uma forma organizada de fazer perguntas para uma planilha muito poderosa.`;
  }

  if (
    question.includes("api") ||
    question.includes("automação") ||
    question.includes("integrar")
  ) {
    return `Entendi. API é uma ponte entre sistemas.

No atendimento, imagine que um sistema de chamados precisa buscar dados de um cliente em outro sistema. Em vez de uma pessoa copiar e colar tudo manualmente, uma API permite que os sistemas conversem.

Automação é usar tecnologia para reduzir tarefas repetitivas.

Exemplo: quando um chamado é concluído, o sistema pode enviar uma mensagem automática para o cliente.

Dica: sempre procure tarefas repetitivas no seu dia a dia. Elas costumam ser boas candidatas para automação.`;
  }

  return `Entendi sua dúvida sobre a aula "${lessonTitle}".

Vou simplificar: tente olhar para este conteúdo como uma ferramenta para resolver problemas reais de atendimento, suporte e organização.

Um bom caminho é responder três perguntas:
1. Qual problema estou tentando resolver?
2. Quais informações eu tenho?
3. Qual seria o próximo passo lógico?

Exemplo prático: se um cliente relata uma dificuldade, você coleta dados, entende o contexto, decide o caminho e registra a solução. Tecnologia ajuda a tornar esse processo mais rápido, claro e repetível.

Dica: escreva sua dúvida em uma frase simples e tente criar um exemplo do seu dia a dia. Isso ajuda muito no aprendizado.`;
}

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
          answer: buildFallbackAnswer(studentQuestion, lessonTitle),
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
      buildFallbackAnswer(studentQuestion, lessonTitle);

    return NextResponse.json({ answer });
  } catch (error) {
    console.error("Erro no PetroKoblaco IA:", error);

    const bodyFallback =
      "Mesmo com a IA temporariamente indisponível, o PetroKoblaco pode te ajudar com uma explicação base.";

    try {
      const fallbackRequest = await request
        .clone()
        .json()
        .catch(() => null);

      const lessonTitle = String(fallbackRequest?.lessonTitle || "");
      const studentQuestion = String(fallbackRequest?.studentQuestion || "");

      return NextResponse.json(
        {
          answer: buildFallbackAnswer(studentQuestion, lessonTitle),
        },
        { status: 200 }
      );
    } catch {
      return NextResponse.json(
        {
          answer: bodyFallback,
        },
        { status: 200 }
      );
    }
  }
}