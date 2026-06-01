"use client";

import { useEffect, useState } from "react";

const progressKey = "suporte-tech-progress";

type ProgressData = {
  day1QuizCompleted: boolean;
  day1AlexUsed: boolean;
  day2QuizCompleted?: boolean;
};

const initialProgress: ProgressData = {
  day1QuizCompleted: false,
  day1AlexUsed: false,
  day2QuizCompleted: false,
};

const question = {
  title: "O que é lógica de programação?",
  options: [
    {
      id: "a",
      text: "Uma forma de organizar passos para resolver um problema",
      isCorrect: true,
      explanation:
        "Exatamente. Lógica de programação é pensar em uma sequência de passos para chegar a um resultado.",
    },
    {
      id: "b",
      text: "Um programa específico que instala no computador",
      isCorrect: false,
      explanation:
        "Não. Lógica não é um programa. É uma forma de pensar e organizar instruções.",
    },
    {
      id: "c",
      text: "Uma linguagem usada apenas por programadores avançados",
      isCorrect: false,
      explanation:
        "Não. Lógica é base para iniciantes também. Antes de decorar linguagens, você aprende a pensar em passos.",
    },
  ],
};

export default function AulaDia2Page() {
  const [progress, setProgress] = useState<ProgressData>(initialProgress);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const selectedAnswer = question.options.find(
    (option) => option.id === selectedOption
  );

  const day1Completed = progress.day1QuizCompleted && progress.day1AlexUsed;

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
        day2QuizCompleted: true,
      });
    }
  }

  if (!day1Completed) {
    return (
      <main style={pageStyle}>
        <section style={{ maxWidth: "760px", margin: "0 auto" }}>
          <a href="/dashboard" style={linkStyle}>
            ← Voltar para o dashboard
          </a>

          <section style={cardStyle}>
            <p style={eyebrowStyle}>Aula bloqueada</p>

            <h1 style={{ fontSize: "42px", marginTop: "12px" }}>
              Conclua o Dia 1 primeiro
            </h1>

            <p style={mutedStyle}>
              Para liberar esta aula, responda corretamente o quiz do Dia 1 e
              use o Assistente Alex pelo menos uma vez.
            </p>

            <a
              href="/aulas/dia-1"
              style={{
                display: "inline-block",
                marginTop: "20px",
                background: "#22d3ee",
                color: "#020617",
                textDecoration: "none",
                padding: "14px 20px",
                borderRadius: "16px",
                fontWeight: 900,
              }}
            >
              Ir para o Dia 1
            </a>
          </section>
        </section>
      </main>
    );
  }

  return (
    <main style={pageStyle}>
      <section style={{ maxWidth: "960px", margin: "0 auto" }}>
        <a href="/dashboard" style={linkStyle}>
          ← Voltar para o dashboard
        </a>

        <p style={{ ...eyebrowStyle, marginTop: "40px" }}>Dia 2</p>

        <h1
          style={{
            fontSize: "48px",
            lineHeight: 1.1,
            marginTop: "12px",
          }}
        >
          O que é lógica de programação?
        </h1>

        <p style={{ ...mutedStyle, fontSize: "20px", maxWidth: "760px" }}>
          Hoje você vai aprender que programação começa antes do código: começa
          com a capacidade de organizar um problema em passos simples.
        </p>

        <section style={cardStyle}>
          <h2>Explicação simples</h2>

          <p style={mutedStyle}>
            Imagine um atendimento de suporte. Um cliente diz: “não consigo
            acessar minha conta”. Antes de resolver, você organiza uma sequência:
          </p>

          <ol style={{ ...mutedStyle, paddingLeft: "22px" }}>
            <li>Verificar se o e-mail está correto.</li>
            <li>Confirmar se a senha foi digitada corretamente.</li>
            <li>Testar recuperação de senha.</li>
            <li>Encaminhar para suporte técnico se o erro continuar.</li>
          </ol>

          <p style={mutedStyle}>
            Isso é lógica: uma sequência de decisões e ações para resolver um
            problema.
          </p>
        </section>

        <section style={cardStyle}>
          <h2>Conceitos do dia</h2>

          <div style={{ display: "grid", gap: "12px" }}>
            <Concept
              title="Entrada"
              text="A informação que você recebe. Exemplo: o problema relatado pelo cliente."
            />

            <Concept
              title="Processamento"
              text="O raciocínio que você usa para decidir o próximo passo."
            />

            <Concept
              title="Saída"
              text="O resultado final. Exemplo: senha recuperada, chamado aberto ou orientação enviada."
            />
          </div>
        </section>

        <section style={quizStyle}>
          <p style={eyebrowStyle}>Quiz rápido</p>

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
            </div>
          )}
        </section>

        <section style={cardStyle}>
          <h2>Fechamento</h2>

          <p style={mutedStyle}>
            Hoje você aprendeu que lógica é organizar passos. Antes de escrever
            código, você precisa entender o problema, pensar em decisões e
            definir uma sequência clara.
          </p>

          {progress.day2QuizCompleted && (
            <div
              style={{
                marginTop: "20px",
                padding: "18px",
                borderRadius: "18px",
                background: "rgba(34,197,94,0.12)",
                border: "1px solid rgba(34,197,94,0.35)",
              }}
            >
              <strong>Missão concluída</strong>
              <p style={{ ...mutedStyle, marginBottom: 0 }}>
                Dia 2 salvo com sucesso no seu progresso local.
              </p>
            </div>
          )}
        </section>
      </section>
    </main>
  );
}

function Concept({ title, text }: { title: string; text: string }) {
  return (
    <div
      style={{
        padding: "18px",
        borderRadius: "18px",
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <strong style={{ color: "#67e8f9" }}>{title}</strong>
      <p style={{ ...mutedStyle, marginBottom: 0 }}>{text}</p>
    </div>
  );
}

const pageStyle: React.CSSProperties = {
  minHeight: "100vh",
  background: "#020617",
  color: "white",
  fontFamily: "Arial, Helvetica, sans-serif",
  padding: "40px",
};

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

const eyebrowStyle: React.CSSProperties = {
  color: "#22d3ee",
  fontWeight: 900,
  textTransform: "uppercase",
  letterSpacing: "0.16em",
  margin: 0,
};

const mutedStyle: React.CSSProperties = {
  color: "#cbd5e1",
  lineHeight: 1.7,
  fontSize: "17px",
};

const linkStyle: React.CSSProperties = {
  color: "#22d3ee",
  fontWeight: 800,
  textDecoration: "none",
};

const buttonStyle: React.CSSProperties = {
  padding: "16px",
  borderRadius: "16px",
  color: "white",
  fontWeight: 800,
  cursor: "pointer",
  textAlign: "left",
};