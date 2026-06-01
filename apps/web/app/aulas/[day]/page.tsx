"use client";

import { useEffect, useState } from "react";
import { getLessonBySlug, getNextLesson, getPreviousLesson } from "../../../lib/lessons";

const progressKey = "suporte-tech-progress-v2";

type ProgressData = {
  completedLessons: string[];
  alexUsedLessons: string[];
};

const initialProgress: ProgressData = {
  completedLessons: [],
  alexUsedLessons: [],
};

type PageProps = {
  params: {
    day: string;
  };
};

export default function DynamicLessonPage({ params }: PageProps) {
  const lesson = getLessonBySlug(params.day);
  const nextLesson = lesson ? getNextLesson(lesson.slug) : undefined;
  const previousLesson = lesson ? getPreviousLesson(lesson.slug) : undefined;

  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [difficulty, setDifficulty] = useState("");
  const [alexResponse, setAlexResponse] = useState("");
  const [progress, setProgress] = useState<ProgressData>(initialProgress);

  useEffect(() => {
    const savedProgress = window.localStorage.getItem(progressKey);

    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
  }, []);

  if (!lesson) {
    return (
      <main style={pageStyle}>
        <section style={{ maxWidth: "760px", margin: "0 auto" }}>
          <a href="/dashboard" style={linkStyle}>
            ← Voltar para o dashboard
          </a>

          <section style={cardStyle}>
            <p style={eyebrowStyle}>Aula não encontrada</p>
            <h1 style={{ fontSize: "42px" }}>Essa aula ainda não existe.</h1>
            <p style={mutedStyle}>
              Volte para o dashboard e escolha uma aula disponível.
            </p>
          </section>
        </section>
      </main>
    );
  }

  const selectedAnswer = lesson.quiz.options.find(
    (option) => option.id === selectedOption
  );

  const isLessonCompleted = progress.completedLessons.includes(lesson.slug);
  const isPreviousLessonCompleted =
    lesson.dayNumber === 1 ||
    Boolean(previousLesson && progress.completedLessons.includes(previousLesson.slug));

  function saveProgress(newProgress: ProgressData) {
    setProgress(newProgress);
    window.localStorage.setItem(progressKey, JSON.stringify(newProgress));
  }

  function handleSelectOption(optionId: string) {
    setSelectedOption(optionId);

    const option = lesson.quiz.options.find((item) => item.id === optionId);

    if (option?.isCorrect && !progress.completedLessons.includes(lesson.slug)) {
      saveProgress({
        ...progress,
        completedLessons: [...progress.completedLessons, lesson.slug],
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

    if (!progress.alexUsedLessons.includes(lesson.slug)) {
      saveProgress({
        ...progress,
        alexUsedLessons: [...progress.alexUsedLessons, lesson.slug],
      });
    }

    const hint = lesson.alexHints.find((item) =>
      item.keywords.some((keyword) => lowerDifficulty.includes(keyword))
    );

    if (hint) {
      setAlexResponse(hint.response);
      return;
    }

    setAlexResponse(
      "Obrigado por compartilhar. Minha sugestão é revisar o resumo da aula e tentar explicar com suas palavras o que você entendeu. Se travar, divida a dúvida em uma frase simples: 'não entendi o que é...' ou 'não sei quando usar...'."
    );
  }

  if (!isPreviousLessonCompleted) {
    return (
      <main style={pageStyle}>
        <section style={{ maxWidth: "760px", margin: "0 auto" }}>
          <a href="/dashboard" style={linkStyle}>
            ← Voltar para o dashboard
          </a>

          <section style={cardStyle}>
            <p style={eyebrowStyle}>Aula bloqueada</p>

            <h1 style={{ fontSize: "42px", marginTop: "12px" }}>
              Conclua a aula anterior primeiro
            </h1>

            <p style={mutedStyle}>
              Para liberar esta aula, volte ao dashboard e conclua a missão
              anterior.
            </p>

            <a
              href="/dashboard"
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
              Voltar para o dashboard
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

        <p style={{ ...eyebrowStyle, marginTop: "40px" }}>
          Dia {lesson.dayNumber}
        </p>

        <h1
          style={{
            fontSize: "48px",
            lineHeight: 1.1,
            marginTop: "12px",
          }}
        >
          {lesson.title}
        </h1>

        <p style={{ ...mutedStyle, fontSize: "20px", maxWidth: "760px" }}>
          {lesson.description}
        </p>

        <section style={cardStyle}>
          <h2>Objetivo da aula</h2>
          <p style={mutedStyle}>{lesson.objective}</p>
        </section>

        <section style={cardStyle}>
          <h2>Resumo rápido</h2>
          <p style={mutedStyle}>{lesson.summary}</p>
        </section>

        <section style={cardStyle}>
          <h2>Conceitos do dia</h2>

          <div style={{ display: "grid", gap: "12px" }}>
            {lesson.concepts.map((concept) => (
              <Concept
                key={concept.title}
                title={concept.title}
                text={concept.text}
              />
            ))}
          </div>
        </section>

        <section style={quizStyle}>
          <p style={eyebrowStyle}>Quiz rápido</p>

          <h2>{lesson.quiz.title}</h2>

          <div style={{ display: "grid", gap: "12px", marginTop: "16px" }}>
            {lesson.quiz.options.map((option) => {
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
          <p style={eyebrowStyle}>Assistente Alex</p>

          <h2>Teve alguma dificuldade?</h2>

          <p style={mutedStyle}>
            Escreva abaixo o que ficou confuso. O Alex vai responder com uma
            explicação simples e um material paralelo para revisar.
          </p>

          <textarea
            value={difficulty}
            onChange={(event) => setDifficulty(event.target.value)}
            placeholder="Exemplo: não entendi o conceito da aula..."
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

        <section style={cardStyle}>
          <h2>Fechamento</h2>

          <p style={mutedStyle}>{lesson.closing}</p>

          {isLessonCompleted && (
            <div
              style={{
                marginTop: "20px",
                padding: "20px",
                borderRadius: "18px",
                background: "rgba(34,197,94,0.12)",
                border: "1px solid rgba(34,197,94,0.35)",
              }}
            >
              <strong>Dia {lesson.dayNumber} concluído 🎉</strong>

              <p style={{ ...mutedStyle, marginBottom: "16px" }}>
                Seu progresso foi salvo. Você já pode continuar sua jornada.
              </p>

              <a
                href={nextLesson ? `/aulas/${nextLesson.slug}` : "/dashboard"}
                style={{
                  display: "inline-block",
                  background: "#22d3ee",
                  color: "#020617",
                  textDecoration: "none",
                  padding: "14px 20px",
                  borderRadius: "16px",
                  fontWeight: 900,
                }}
              >
                {nextLesson ? `Ir para o Dia ${nextLesson.dayNumber}` : "Voltar ao dashboard"}
              </a>
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