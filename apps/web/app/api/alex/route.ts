import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const gemini = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

function buildFallbackAnswer(
  studentQuestion: string,
  lessonTitle: string,
  lessonSummary: string
) {
  const question = studentQuestion.toLowerCase();

  if (
    question.includes("emprego") ||
    question.includes("trabalho") ||
    question.includes("recolocar") ||
    question.includes("mercado")
  ) {
    return `Entendi sua dúvida. Esta trilha não garante uma vaga automaticamente, mas ajuda você a construir uma base prática e um projeto real para apresentar no portfólio.

A aula atual é "${lessonTitle}". O mais importante é transformar o conteúdo em evidência prática.

Exemplo: em vez de dizer apenas que está estudando tecnologia, você poderá mostrar uma aplicação publicada com aulas, progresso, certificado, vídeos de apoio e um assistente integrado.

Dica: registre pequenas conquistas no GitHub e no LinkedIn. Isso ajuda recrutadores a enxergarem sua evolução.`;
  }

  if (
    question.includes("lógica") ||
    question.includes("programação") ||
    question.includes("algoritmo")
  ) {
    return `Boa dúvida. Lógica de programação é organizar uma solução em etapas claras.

Pense em um atendimento técnico:
1. entender o relato;
2. coletar informações;
3. testar hipóteses;
4. escolher uma ação;
5. verificar o resultado.

Na programação, fazemos a mesma coisa, mas transformamos esses passos em instruções para o computador.

Na aula "${lessonTitle}", tente identificar qual problema está sendo resolvido e quais são os passos necessários.

Dica: explique a solução primeiro em português simples. Depois pense no código.`;
  }

  if (
    question.includes("python") ||
    question.includes("código") ||
    question.includes("variável")
  ) {
    return `Ótima pergunta. Python é uma linguagem usada para dar instruções ao computador de forma relativamente simples.

Uma variável funciona como uma etiqueta que guarda uma informação.

Exemplo no suporte:
- nome do cliente;
- número do chamado;
- status do atendimento;
- tempo de espera.

Na aula "${lessonTitle}", tente identificar quais informações entram, como são processadas e qual resultado deve sair.

Dica: não tente decorar tudo. Foque em entender o fluxo: entrada, processamento e saída.`;
  }

  if (
    question.includes("sql") ||
    question.includes("dados") ||
    question.includes("banco")
  ) {
    return `Boa dúvida. Dados são informações organizadas para ajudar na análise e na tomada de decisão.

No atendimento, eles podem mostrar:
- quantidade de chamados;
- problemas mais frequentes;
- tempo médio de resposta;
- solicitações pendentes.

SQL serve para consultar e organizar informações em um banco de dados.

Exemplo: perguntar ao sistema quais chamados ainda estão abertos.

Na aula "${lessonTitle}", pense no banco como uma grande coleção de tabelas organizadas.

Dica: formule primeiro a pergunta que você quer responder. Depois pense no comando SQL.`;
  }

  if (
    question.includes("api") ||
    question.includes("automação") ||
    question.includes("integrar")
  ) {
    return `Entendi. Uma API permite que dois sistemas troquem informações de forma organizada.

Exemplo: um sistema de atendimento pode consultar os dados de um cliente em outro sistema sem que alguém precise copiar tudo manualmente.

Automação usa tecnologia para executar tarefas repetitivas.

Na aula "${lessonTitle}", pense em qual informação precisa sair de um sistema e chegar a outro.

Dica: tarefas repetitivas, previsíveis e baseadas em regras são boas candidatas para automação.`;
  }

  return `Entendi sua dúvida sobre a aula "${lessonTitle}".

Resumo da aula:
${lessonSummary}

Vamos simplificar usando três perguntas:

1. Qual problema este conteúdo ajuda a resolver?
2. Quais informações são necessárias?
3. Qual seria o próximo passo lógico?

Exemplo prático: em um atendimento técnico, você entende o problema, reúne dados, escolhe uma ação e verifica se funcionou. O conteúdo desta aula pode ser aplicado seguindo a mesma estrutura.

Dica: tente escrever sua dúvida de forma ainda mais específica, por exemplo: "não entendi esta parte..." ou "como isso seria usado em um atendimento?".`;
}

function isQuotaError(error: unknown) {
  if (!(error instanceof Error)) {
    return false;
  }

  return (
    error.message.includes("429") ||
    error.message.includes("RESOURCE_EXHAUSTED") ||
    error.message.toLowerCase().includes("quota")
  );
}

export async function POST(request: Request) {
  let lessonTitle = "";
  let lessonSummary = "";
  let studentQuestion = "";

  try {
    const body = await request.json();

    lessonTitle = String(body.lessonTitle || "");
    lessonSummary = String(body.lessonSummary || "");
    studentQuestion = String(body.studentQuestion || "");

    if (!studentQuestion.trim()) {
      return NextResponse.json(
        {
          answer:
            "Me conte qual foi sua dúvida para eu conseguir ajudar melhor.",
          mode: "local",
        },
        { status: 200 }
      );
    }

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        {
          answer: buildFallbackAnswer(
            studentQuestion,
            lessonTitle,
            lessonSummary
          ),
          mode: "local",
        },
        { status: 200 }
      );
    }

    const prompt = `
Você é o PetroKoblaco IA, mentor amigável da trilha Suporte Tech 30 Dias.

Responda em português do Brasil, com linguagem simples, prática e motivadora.

Estrutura:
1. Valide a dúvida do aluno.
2. Explique o conceito com clareza.
3. Dê um exemplo ligado a atendimento, suporte ou processos.
4. Termine com uma dica curta.

Aula atual:
${lessonTitle}

Resumo da aula:
${lessonSummary}

Dúvida do aluno:
${studentQuestion}
`;

    const response = await gemini.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });

    const answer = response.text?.trim();

    if (!answer) {
      return NextResponse.json(
        {
          answer: buildFallbackAnswer(
            studentQuestion,
            lessonTitle,
            lessonSummary
          ),
          mode: "local",
        },
        { status: 200 }
      );
    }

    return NextResponse.json({
      answer,
      mode: "gemini",
    });
  } catch (error) {
    console.error("Erro no PetroKoblaco IA:", error);

    return NextResponse.json(
      {
        answer: buildFallbackAnswer(
          studentQuestion,
          lessonTitle,
          lessonSummary
        ),
        mode: "local",
        reason: isQuotaError(error) ? "quota" : "api_error",
      },
      { status: 200 }
    );
  }
}