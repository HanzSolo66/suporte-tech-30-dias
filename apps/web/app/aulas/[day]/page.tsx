"use client";

import { useEffect, useState } from "react";
import {
  getLessonBySlug,
  getNextLesson,
  getPreviousLesson,
} from "../../../lib/lessons";
import { neon } from "../../../lib/neonStyles";

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

  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [difficulty, setDifficulty] = useState("");
  const [assistantResponse, setAssistantResponse] = useState("");
  const [isAssistantLoading, setIsAssistantLoading] = useState(false);
  const [progress, setProgress] = useState<ProgressData>(initialProgress);

  useEffect(() => {
    const savedProgress = window.localStorage.getItem(progressKey);

    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
  }, []);

  if (!lesson) {
    return (
      <main style={neon.page}>
        <section style={{ ...neon.container, maxWidth: "760px" }}>
          <a href="/dashboard" style={neon.buttonGhost}>
            ← Voltar para o dashboard
          </a>

          <section style={{ ...neon.card, marginTop: "32px" }}>
            <p style={neon.eyebrow}>Aula não encontrada</p>
            <h1 style={{ fontSize: "44px", margin: "12px 0" }}>
              Essa aula ainda não existe.
            </h1>
            <p style={neon.muted}>
              Volte para o dashboard e escolha uma aula disponível.
            </p>
          </section>
        </section>
      </main>
    );
  }

  const currentLesson = lesson;
  const nextLesson = getNextLesson(currentLesson.slug);
  const previousLesson = getPreviousLesson(currentLesson.slug);

  const selectedAnswer = currentLesson.quiz.options.find(
    (option) => option.id === selectedOption
  );

  const isLessonCompleted = progress.completedLessons.includes(
    currentLesson.slug
  );

  const isAssistantUsed = progress.alexUsedLessons.includes(
    currentLesson.slug
  );

  const isPreviousLessonCompleted =
    currentLesson.dayNumber === 1 ||
    Boolean(
      previousLesson && progress.completedLessons.includes(previousLesson.slug)
    );

  const lessonProgress = [isLessonCompleted, isAssistantUsed].filter(Boolean)
    .length;

  function saveProgress(newProgress: ProgressData) {
    setProgress(newProgress);
    window.localStorage.setItem(progressKey, JSON.stringify(newProgress));
  }

  function handleSelectOption(optionId: string) {
    setSelectedOption(optionId);

    const option = currentLesson.quiz.options.find(
      (item) => item.id === optionId
    );

    if (
      option?.isCorrect &&
      !progress.completedLessons.includes(currentLesson.slug)
    ) {
      saveProgress({
        ...progress,
        completedLessons: [...progress.completedLessons, currentLesson.slug],
      });
    }
  }

  async function handleAskAssistant() {
    if (!difficulty.trim()) {
      setAssistantResponse(
        "Me conta primeiro qual foi sua dificuldade. Pode escrever do seu jeito, sem se preocupar com termos técnicos."
      );
      return;
    }

    setIsAssistantLoading(true);
    setAssistantResponse(
      "PetroKoblaco está pensando na melhor explicação para você..."
    );

    if (!progress.alexUsedLessons.includes(currentLesson.slug)) {
      saveProgress({
        ...progress,
        alexUsedLessons: [...progress.alexUsedLessons, currentLesson.slug],
      });
    }

    try {
      const response = await fetch("/api/alex", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          lessonTitle: currentLesson.title,
          lessonSummary: currentLesson.summary,
          studentQuestion: difficulty,
        }),
      });

      const data = await response.json();

      setAssistantResponse(
        data.answer ||
          "Não consegui gerar uma resposta agora. Tente escrever sua dúvida de outro jeito."
      );
    } catch (error) {
      console.error("Erro ao chamar PetroKoblaco IA:", error);

      const lowerDifficulty = difficulty.toLowerCase();

      const hint = currentLesson.alexHints.find((item) =>
        item.keywords.some((keyword) => lowerDifficulty.includes(keyword))
      );

      if (hint) {
        setAssistantResponse(hint.response);
        return;
      }

      setAssistantResponse(
        "Tive um problema para chamar a IA agora. Como alternativa, revise o resumo da aula e tente explicar sua dúvida em uma frase simples."
      );
    } finally {
      setIsAssistantLoading(false);
    }
  }

  if (!isPreviousLessonCompleted) {
    return (
      <main style={neon.page}>
        <section style={{ ...neon.container, maxWidth: "760px" }}>
          <a href="/dashboard" style={neon.buttonGhost}>
            ← Voltar para o dashboard
          </a>

          <section style={{ ...neon.card, marginTop: "32px" }}>
            <p style={neon.eyebrow}>Aula bloqueada</p>

            <h1 style={{ fontSize: "44px", margin: "12px 0" }}>
              Conclua a aula anterior primeiro
            </h1>

            <p style={neon.muted}>
              Para liberar esta missão, volte ao dashboard e conclua a etapa
              anterior da trilha.
            </p>

            <a
              href="/dashboard"
              style={{ ...neon.buttonPrimary, marginTop: "18px" }}
            >
              Voltar para o dashboard
            </a>
          </section>
        </section>
      </main>
    );
  }

  return (
    <main style={neon.page}>
      <section style={{ ...neon.container, maxWidth: "1040px" }}>
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "16px",
            alignItems: "center",
            flexWrap: "wrap",
            marginBottom: "34px",
          }}
        >
          <a href="/dashboard" style={neon.buttonGhost}>
            ← Dashboard
          </a>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {previousLesson && (
              <a
                href={`/aulas/${previousLesson.slug}`}
                style={neon.buttonGhost}
              >
                Aula anterior
              </a>
            )}

            {nextLesson && isLessonCompleted && (
              <a
                href={`/aulas/${nextLesson.slug}`}
                style={neon.buttonPrimary}
              >
                Próxima aula
              </a>
            )}
          </div>
        </header>

        <section
          style={{
            ...neon.card,
            padding: "42px",
            overflow: "hidden",
            marginBottom: "26px",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "300px",
              height: "300px",
              borderRadius: "999px",
              background: "rgba(34,211,238,0.14)",
              filter: "blur(52px)",
              right: "-90px",
              top: "-120px",
            }}
          />

          <div style={{ position: "relative" }}>
            <p style={neon.eyebrow}>
              Dia {currentLesson.dayNumber} · Missão ativa
            </p>

            <h1
              style={{
                fontSize: "56px",
                lineHeight: 1,
                marginTop: "16px",
                marginBottom: "18px",
              }}
            >
              {currentLesson.title}
            </h1>

            <p style={{ ...neon.muted, fontSize: "20px", maxWidth: "820px" }}>
              {currentLesson.description}
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "14px",
                marginTop: "28px",
              }}
            >
              <MissionStat
                label="Quiz"
                value={isLessonCompleted ? "Concluído" : "Pendente"}
                success={isLessonCompleted}
              />

              <MissionStat
                label="PetroKoblaco IA"
                value={isAssistantUsed ? "Usado" : "Opcional"}
                success={isAssistantUsed}
              />

              <MissionStat
                label="Progresso"
                value={`${lessonProgress}/2`}
                success={lessonProgress === 2}
              />
            </div>

            <div style={{ marginTop: "24px" }}>
              <div style={neon.progressTrack}>
                <div
                  style={{
                    ...neon.progressFill,
                    width: `${(lessonProgress / 2) * 100}%`,
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(280px, 0.7fr)",
            gap: "24px",
            alignItems: "start",
          }}
        >
          <section style={{ display: "grid", gap: "24px" }}>
            <section style={neon.card}>
              <p style={neon.eyebrow}>Objetivo da aula</p>
              <h2 style={{ fontSize: "30px", margin: "10px 0" }}>
                O que você vai dominar
              </h2>
              <p style={{ ...neon.muted, marginBottom: 0 }}>
                {currentLesson.objective}
              </p>
            </section>

            <section style={neon.card}>
              <p style={neon.eyebrow}>Resumo rápido</p>
              <h2 style={{ fontSize: "30px", margin: "10px 0" }}>
                Contexto da missão
              </h2>
              <p style={{ ...neon.muted, marginBottom: 0 }}>
                {currentLesson.summary}
              </p>
            </section>

            <section style={neon.card}>
              <p style={neon.eyebrow}>Conceitos do dia</p>
              <h2 style={{ fontSize: "30px", margin: "10px 0 18px" }}>
                Blocos de conhecimento
              </h2>

              <div style={{ display: "grid", gap: "12px" }}>
                {currentLesson.concepts.map((concept) => (
                  <Concept
                    key={concept.title}
                    title={concept.title}
                    text={concept.text}
                  />
                ))}
              </div>
            </section>

            <section style={neon.card}>
              <p style={neon.eyebrow}>Quiz rápido</p>

              <h2 style={{ fontSize: "30px", margin: "10px 0 18px" }}>
                {currentLesson.quiz.title}
              </h2>

              <div style={{ display: "grid", gap: "12px" }}>
                {currentLesson.quiz.options.map((option) => {
                  const isSelected = selectedOption === option.id;

                  return (
                    <button
                      key={option.id}
                      onClick={() => handleSelectOption(option.id)}
                      style={{
                        padding: "18px",
                        borderRadius: "18px",
                        color: neon.colors.text,
                        fontWeight: 800,
                        cursor: "pointer",
                        textAlign: "left",
                        border: isSelected
                          ? "1px solid rgba(34,211,238,0.75)"
                          : "1px solid rgba(255,255,255,0.12)",
                        background: isSelected
                          ? "rgba(34,211,238,0.14)"
                          : "rgba(255,255,255,0.05)",
                        boxShadow: isSelected
                          ? "0 0 24px rgba(34,211,238,0.14)"
                          : "none",
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
                    marginTop: "22px",
                    padding: "20px",
                    borderRadius: "20px",
                    background: selectedAnswer.isCorrect
                      ? neon.colors.greenSoft
                      : "rgba(251,113,133,0.13)",
                    border: selectedAnswer.isCorrect
                      ? "1px solid rgba(34,197,94,0.35)"
                      : "1px solid rgba(251,113,133,0.35)",
                  }}
                >
                  <h3 style={{ marginTop: 0 }}>
                    {selectedAnswer.isCorrect
                      ? "✅ Resposta correta!"
                      : "❌ Ainda não foi dessa vez."}
                  </h3>

                  <p style={{ ...neon.muted, marginBottom: 0 }}>
                    {selectedAnswer.explanation}
                  </p>
                </div>
              )}
            </section>

            <section style={isLessonCompleted ? neon.cardGreen : neon.card}>
              <p style={neon.eyebrow}>Fechamento</p>

              <h2 style={{ fontSize: "30px", margin: "10px 0" }}>
                Conclusão da missão
              </h2>

              <p style={neon.muted}>{currentLesson.closing}</p>

              {isLessonCompleted && (
                <div
                  style={{
                    marginTop: "20px",
                    padding: "20px",
                    borderRadius: "20px",
                    background: "rgba(34,197,94,0.12)",
                    border: "1px solid rgba(34,197,94,0.35)",
                  }}
                >
                  <strong>Dia {currentLesson.dayNumber} concluído 🎉</strong>

                  <p style={{ ...neon.muted, marginBottom: "16px" }}>
                    Seu progresso foi salvo. Você já pode continuar sua jornada.
                  </p>

                  <a
                    href={
                      nextLesson ? `/aulas/${nextLesson.slug}` : "/certificado"
                    }
                    style={nextLesson ? neon.buttonPrimary : neon.buttonSuccess}
                  >
                    {nextLesson
                      ? `Ir para o Dia ${nextLesson.dayNumber}`
                      : "Ver certificado"}
                  </a>
                </div>
              )}
            </section>
          </section>

          <aside style={{ display: "grid", gap: "20px" }}>
            <section style={neon.cardGreen}>
              <p style={neon.eyebrow}>Assistente PetroKoblaco IA</p>

              <h2 style={{ fontSize: "30px", margin: "10px 0" }}>
                Travou em algo?
              </h2>

              <p style={neon.muted}>
                Escreva sua dúvida. O PetroKoblaco vai chamar a IA para
                responder com uma explicação simples baseada nesta aula.
              </p>

              <textarea
                value={difficulty}
                onChange={(event) => setDifficulty(event.target.value)}
                placeholder="Exemplo: não entendi o conceito da aula..."
                style={{
                  width: "100%",
                  minHeight: "130px",
                  marginTop: "14px",
                  padding: "16px",
                  borderRadius: "18px",
                  border: "1px solid rgba(255,255,255,0.14)",
                  background: "rgba(2,6,23,0.55)",
                  color: neon.colors.text,
                  fontSize: "16px",
                  resize: "vertical",
                  boxSizing: "border-box",
                  outline: "none",
                }}
              />

              <button
                onClick={handleAskAssistant}
                disabled={isAssistantLoading}
                style={{
                  ...neon.buttonPrimary,
                  marginTop: "14px",
                  width: "100%",
                  opacity: isAssistantLoading ? 0.7 : 1,
                }}
              >
                {isAssistantLoading
                  ? "PetroKoblaco pensando..."
                  : "Pedir ajuda ao PetroKoblaco"}
              </button>

              {assistantResponse && (
                <div
                  style={{
                    marginTop: "18px",
                    padding: "18px",
                    borderRadius: "18px",
                    background: "rgba(34,211,238,0.1)",
                    border: "1px solid rgba(34,211,238,0.25)",
                  }}
                >
                  <strong>Resposta do PetroKoblaco</strong>
                  <p style={{ ...neon.muted, marginBottom: 0 }}>
                    {assistantResponse}
                  </p>
                </div>
              )}
            </section>

            <section style={neon.card}>
              <p style={neon.eyebrow}>Navegação</p>

              <div style={{ display: "grid", gap: "12px", marginTop: "16px" }}>
                <a href="/dashboard" style={neon.buttonGhost}>
                  Voltar ao dashboard
                </a>

                {nextLesson && isLessonCompleted && (
                  <a
                    href={`/aulas/${nextLesson.slug}`}
                    style={neon.buttonPrimary}
                  >
                    Próxima missão
                  </a>
                )}

                {!nextLesson && isLessonCompleted && (
                  <a href="/certificado" style={neon.buttonSuccess}>
                    Ver certificado
                  </a>
                )}
              </div>
            </section>
          </aside>
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
        background: "rgba(255,255,255,0.055)",
        border: "1px solid rgba(255,255,255,0.11)",
      }}
    >
      <strong style={{ color: neon.colors.cyan }}>{title}</strong>
      <p style={{ ...neon.muted, marginBottom: 0 }}>{text}</p>
    </div>
  );
}

function MissionStat({
  label,
  value,
  success,
}: {
  label: string;
  value: string;
  success: boolean;
}) {
  return (
    <div
      style={{
        padding: "16px",
        borderRadius: "18px",
        background: success ? neon.colors.greenSoft : "rgba(255,255,255,0.055)",
        border: success
          ? "1px solid rgba(34,197,94,0.35)"
          : "1px solid rgba(255,255,255,0.11)",
      }}
    >
      <p style={neon.eyebrow}>{label}</p>
      <strong
        style={{
          display: "block",
          marginTop: "8px",
          color: success ? neon.colors.green : neon.colors.text,
        }}
      >
        {value}
      </strong>
    </div>
  );
}