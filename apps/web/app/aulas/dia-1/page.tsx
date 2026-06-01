"use client";

import { useEffect, useState } from "react";

const question = {
  title: "Qual é o objetivo principal desta trilha?",
  options: [
    {
      id: "a",
      text: "Decorar comandos difíceis",
      isCorrect: false,
      explanation:
        "Decorar comandos não é o foco. O mais importante é entender a lógica e aplicar tecnologia em situações reais.",
    },
    {
      id: "b",
      text: "Aplicar tecnologia em atendimento e suporte",
      isCorrect: true,
      explanation:
        "Isso mesmo. A trilha foi pensada para conectar tecnologia com problemas reais de atendimento, suporte, dados e automação.",
    },
    {
      id: "c",
      text: "Virar sênior em 30 dias",
      isCorrect: false,
      explanation:
        "Em 30 dias você pode criar uma base muito boa, mas virar sênior exige prática, projetos e experiência ao longo do tempo.",
    },
  ],
};

const progressKey = "suporte-tech-progress";

type ProgressData = {
  day1QuizCompleted: boolean;
  day1AlexUsed: boolean;
};

const initialProgress: ProgressData = {
  day1QuizCompleted: false,
  day1AlexUsed: false,
};

export default function AulaDia1Page() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [difficulty, setDifficulty] = useState("");
  const [alexResponse, setAlexResponse] = useState("");
  const [progress, setProgress] = useState<ProgressData>(initialProgress);

  const selectedAnswer = question.options.find(
    (option) => option.id === selectedOption
  );

  useEffect(() => {
    const savedProgress = window.localStorage.getItem(progressKey);

    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
  }, []);

  function saveProgress(newProgress: ProgressData) {
    setProgress(newProgress);
    window.localStorage.setItem(progressKey, JSON.stringify(newProgress));
  }

  function handleSelectOption(optionId: string) {
    setSelectedOption(optionId);

    const option = question.options.find((item) => item.id === optionId);

    if (option?.isCorrect) {
      saveProgress({
        ...progress,
        day1QuizCompleted: true,
      });
    }
  }

  function handleAskAlex() {
    if (!difficulty.trim()) {
      setAlexResponse(
        "Me conta primeiro qual foi sua dificuldade. Pode escrever do seu jeito, sem se preocupar com termos técnicos."
      );
      return;
    }

    const lowerDifficulty = difficulty.toLowerCase();

    saveProgress({
      ...progress,
      day1AlexUsed: true,
    });

    if (
      lowerDifficulty.includes("lógica") ||
      lowerDifficulty.includes("logica") ||
      lowerDifficulty.includes("programação") ||
      lowerDifficulty.includes("programacao")
    ) {
      setAlexResponse(
        "Entendi. Lógica de programação é como montar um passo a passo para resolver um problema. Pense em atendimento: se o cliente esqueceu a senha, você verifica o cadastro, confirma os dados e envia a recuperação. Isso já é lógica: condição, decisão e ação. Material de apoio: procure no Curso em Vídeo por 'Lógica de Programação'."
      );
      return;
    }

    if (
      lowerDifficulty.includes("atendimento") ||
      lowerDifficulty.includes("suporte") ||
      lowerDifficulty.includes("cliente")
    ) {
      setAlexResponse(
        "Boa dúvida. A ideia da trilha é aproveitar sua experiência com atendimento para entrar em tecnologia. Você já entende pessoas, problemas e processos. Agora vamos somar ferramentas: lógica, Python, SQL e automações para melhorar o suporte. Material de apoio: revise exemplos de chamados, tickets e fluxos de atendimento."
      );
      return;
    }

    setAlexResponse(
      "Obrigado por compartilhar. Minha sugestão é revisar o resumo da aula e tentar explicar com suas palavras o que você entendeu. Se travar, divida a dúvida em uma frase simples: 'não entendi o que é...' ou 'não sei quando usar...'. Material de apoio: procure uma explicação inicial no Curso em Vídeo relacionada ao tema."
    );
  }

  const completedSteps = [
    progress.day1QuizCompleted,
    progress.day1AlexUsed,
  ].filter(Boolean).length;

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#020617",
        color: "white",
        fontFamily: "Arial, Helvetica, sans-serif",
        padding: "40px",
      }}
    >
      <section style={{ maxWidth: "960px", margin: "0 auto" }}>
        <a
          href="/dashboard"
          style={{
            color: "#22d3ee",
            fontWeight: 800,
            textDecoration: "none",
          }}
        >
          ← Voltar para o dashboard
        </a>

        <p
          style={{
            color: "#22d3ee",
            fontWeight: 800,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            marginTop: "40px",
          }}
        >
          Dia 1
        </p>

        <h1
          style={{
            fontSize: "48px",
            lineHeight: 1.1,
            marginTop: "12px",
          }}
        >
          Boas-vindas e avaliação inicial
        </h1>

        <p
          style={{
            color: "#cbd5e1",
            fontSize: "20px",
            lineHeight: 1.7,
            maxWidth: "760px",
          }}
        >
          Hoje vamos entender seu ponto de partida e começar sua jornada em
          suporte com tecnologia de forma simples e prática.
        </p>

        <section style={cardStyle}>
          <h2>Progresso da aula</h2>
          <p style={mutedStyle}>
            Você concluiu {completedSteps} de 2 passos desta aula.
          </p>

          <div
            style={{
              height: "16px",
              background: "rgba(255,255,255,0.08)",
              borderRadius: "999px",
              overflow: "hidden",
              marginTop: "16px",
            }}
          >
            <div
              style={{
                width: `${(completedSteps / 2) * 100}%`,
                height: "100%",
                background: "#22d3ee",
                borderRadius: "999px",
              }}
            />
          </div>
        </section>

        <section style={cardStyle}>
          <h2>Objetivo da aula</h2>
          <p style={mutedStyle}>
            Entender como a trilha funciona, como você vai evoluir por missões
            e por que tecnologia pode ajudar muito na área de atendimento e
            suporte.
          </p>
        </section>

        <section style={cardStyle}>
          <h2>Resumo rápido</h2>
          <p style={mutedStyle}>
            Nesta trilha, você não vai estudar tecnologia de forma solta. Tudo
            será conectado com situações reais de atendimento: clientes,
            chamados, dúvidas, dados, automações e melhoria de processos.
          </p>
        </section>

        <section style={quizStyle}>
          <p
            style={{
              color: "#22d3ee",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
            }}
          >
            Quiz rápido
          </p>

          <h2>{question.title}</h2>

          <div style={{ display: "grid", gap: "12px", marginTop: "16px" }}>
            {question.options.map((option) => {
              const isSelected = selectedOption === option.id;

              return (
                <button
                  key={option.id}
                  onClick={() => handleSelectOption(option.id)}
                  style={{
                    ...buttonStyle,
                    border: isSelected
                      ? "1px solid #22d3ee"
                      : "1px solid rgba(255,255,255,0.16)",
                    background: isSelected
                      ? "rgba(34,211,238,0.16)"
                      : "rgba(255,255,255,0.06)",
                  }}
                >
                  {option.text}
                </button>
              );
            })}
          </div>

          {selectedAnswer && (
            <div
              style={{
                marginTop: "24px",
                padding: "20px",
                borderRadius: "18px",
                background: selectedAnswer.isCorrect
                  ? "rgba(34,197,94,0.12)"
                  : "rgba(239,68,68,0.12)",
                border: selectedAnswer.isCorrect
                  ? "1px solid rgba(34,197,94,0.35)"
                  : "1px solid rgba(239,68,68,0.35)",
              }}
            >
              <h3 style={{ marginTop: 0 }}>
                {selectedAnswer.isCorrect
                  ? "✅ Resposta correta!"
                  : "❌ Ainda não foi dessa vez."}
              </h3>

              <p style={mutedStyle}>{selectedAnswer.explanation}</p>

              {!selectedAnswer.isCorrect && (
                <p style={mutedStyle}>
                  Gabarito:{" "}
                  <strong style={{ color: "#86efac" }}>
                    Aplicar tecnologia em atendimento e suporte.
                  </strong>
                </p>
              )}
            </div>
          )}
        </section>

        <section style={cardStyle}>
          <h2>Resumo do dia</h2>

          <p style={mutedStyle}>
            Hoje você entendeu o propósito da trilha: usar tecnologia como
            ferramenta para melhorar atendimento, suporte, organização de dados
            e tarefas repetitivas.
          </p>

          <div
            style={{
              marginTop: "20px",
              padding: "18px",
              borderRadius: "18px",
              background: "rgba(34,211,238,0.1)",
              border: "1px solid rgba(34,211,238,0.25)",
            }}
          >
            <strong>Fechamento da aula</strong>
            <p style={{ ...mutedStyle, marginBottom: 0 }}>
              Você começou entendendo que tecnologia não precisa ser distante:
              ela pode nascer de problemas reais que você já conhece no
              atendimento.
            </p>
          </div>
        </section>

        <section style={cardStyle}>
          <p
            style={{
              color: "#22d3ee",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
            }}
          >
            Assistente Alex
          </p>

          <h2>Teve alguma dificuldade?</h2>

          <p style={mutedStyle}>
            Escreva abaixo o que ficou confuso. O Alex vai responder com uma
            explicação simples e um material paralelo para revisar.
          </p>

          <textarea
            value={difficulty}
            onChange={(event) => setDifficulty(event.target.value)}
            placeholder="Exemplo: não entendi o que é lógica de programação..."
            style={{
              width: "100%",
              minHeight: "120px",
              marginTop: "16px",
              padding: "16px",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.16)",
              background: "rgba(255,255,255,0.06)",
              color: "white",
              fontSize: "16px",
              resize: "vertical",
              boxSizing: "border-box",
            }}
          />

          <button
            onClick={handleAskAlex}
            style={{
              marginTop: "16px",
              padding: "16px",
              borderRadius: "16px",
              border: "none",
              background: "#22d3ee",
              color: "#020617",
              fontWeight: 900,
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Pedir ajuda ao Alex
          </button>

          {alexResponse && (
            <div
              style={{
                marginTop: "20px",
                padding: "20px",
                borderRadius: "18px",
                background: "rgba(34,211,238,0.1)",
                border: "1px solid rgba(34,211,238,0.25)",
              }}
            >
              <strong>Resposta do Alex</strong>
              <p style={{ ...mutedStyle, marginBottom: 0 }}>
                {alexResponse}
              </p>
            </div>
          )}
        </section>
      </section>
    </main>
  );
}

const cardStyle: React.CSSProperties = {
  marginTop: "28px",
  padding: "24px",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "24px",
  background: "rgba(255,255,255,0.06)",
};

const quizStyle: React.CSSProperties = {
  marginTop: "28px",
  padding: "24px",
  border: "1px solid rgba(34,211,238,0.3)",
  borderRadius: "24px",
  background: "rgba(34,211,238,0.08)",
};

const mutedStyle: React.CSSProperties = {
  color: "#cbd5e1",
  lineHeight: 1.7,
  fontSize: "17px",
};

const buttonStyle: React.CSSProperties = {
  padding: "16px",
  borderRadius: "16px",
  color: "white",
  fontWeight: 800,
  cursor: "pointer",
  textAlign: "left",
};