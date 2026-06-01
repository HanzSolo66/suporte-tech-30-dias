"use client";

import { useEffect, useState } from "react";
import { lessons } from "../../lib/lessons";

const progressKey = "suporte-tech-progress-v2";

type ProgressData = {
  completedLessons: string[];
  alexUsedLessons: string[];
};

const initialProgress: ProgressData = {
  completedLessons: [],
  alexUsedLessons: [],
};

export default function DashboardPage() {
  const [progress, setProgress] = useState<ProgressData>(initialProgress);

  useEffect(() => {
    const savedProgress = window.localStorage.getItem(progressKey);

    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
  }, []);

  const completedLessons = progress.completedLessons.length;
  const totalLessons = lessons.length;
  const alexUses = progress.alexUsedLessons.length;
  const progressPercent = Math.round((completedLessons / totalLessons) * 100);
  const trailCompleted = completedLessons >= totalLessons;
  const currentLesson =
    lessons.find((lesson) => !progress.completedLessons.includes(lesson.slug)) ??
    lessons[lessons.length - 1];

  const xp = completedLessons * 120 + alexUses * 30;

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
      <section style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <section
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "24px",
            alignItems: "flex-start",
            flexWrap: "wrap",
            marginBottom: "36px",
          }}
        >
          <div>
            <p style={eyebrowStyle}>Painel do aluno</p>

            <h1
              style={{
                fontSize: "52px",
                lineHeight: 1.05,
                marginTop: "14px",
                marginBottom: "16px",
              }}
            >
              Bem-vindo à sua missão, Matheus.
            </h1>

            <p
              style={{
                color: "#cbd5e1",
                fontSize: "20px",
                lineHeight: 1.7,
                maxWidth: "760px",
              }}
            >
              Continue sua jornada para dominar tecnologia aplicada ao
              atendimento, suporte e automação.
            </p>
          </div>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a
              href="/"
              style={{
                color: "#020617",
                background: "#22d3ee",
                textDecoration: "none",
                padding: "14px 20px",
                borderRadius: "16px",
                fontWeight: 900,
                whiteSpace: "nowrap",
              }}
            >
              Voltar para home
            </a>

            <a
              href="/certificado"
              style={{
                color: "#020617",
                background: trailCompleted ? "#22c55e" : "#94a3b8",
                textDecoration: "none",
                padding: "14px 20px",
                borderRadius: "16px",
                fontWeight: 900,
                whiteSpace: "nowrap",
              }}
            >
              {trailCompleted ? "Ver certificado" : "Certificado bloqueado"}
            </a>
          </div>
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            marginBottom: "28px",
          }}
        >
          <InfoCard
            label="Progresso"
            value={`${completedLessons}/${totalLessons}`}
            description="Aulas concluídas"
          />
          <InfoCard
            label="XP"
            value={String(xp)}
            description="Pontos acumulados"
          />
          <InfoCard
            label="Sequência"
            value={`${Math.max(completedLessons, 1)} dia${
              Math.max(completedLessons, 1) === 1 ? "" : "s"
            }`}
            description="Continue estudando diariamente"
          />
          <InfoCard
            label="Status"
            value={trailCompleted ? "Concluído" : "Em andamento"}
            description={
              trailCompleted
                ? "Trilha completa"
                : "Continue desbloqueando aulas"
            }
          />
        </section>

        <section
          style={{
            marginBottom: "28px",
            padding: "24px",
            borderRadius: "24px",
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(255,255,255,0.06)",
          }}
        >
          <p style={eyebrowStyle}>Progresso geral</p>

          <div
            style={{
              marginTop: "16px",
              height: "18px",
              background: "rgba(255,255,255,0.1)",
              borderRadius: "999px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${progressPercent}%`,
                height: "100%",
                background: "#22d3ee",
                borderRadius: "999px",
              }}
            />
          </div>

          <p style={{ color: "#cbd5e1", marginTop: "12px" }}>
            {progressPercent}% da trilha concluída.
          </p>
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.4fr) minmax(280px, 0.8fr)",
            gap: "28px",
            alignItems: "start",
          }}
        >
          <section style={cardStyle}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "16px",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <div>
                <p style={eyebrowStyle}>Semana atual</p>
                <h2 style={{ fontSize: "34px", margin: "8px 0 0" }}>
                  Missões da trilha
                </h2>
              </div>

              <span
                style={{
                  color: "#22d3ee",
                  border: "1px solid rgba(34,211,238,0.35)",
                  borderRadius: "999px",
                  padding: "10px 14px",
                  fontWeight: 900,
                }}
              >
                {trailCompleted ? "Trilha concluída" : "Continue avançando"}
              </span>
            </div>

            <div style={{ display: "grid", gap: "12px", marginTop: "24px" }}>
              {lessons.map((lesson) => {
                const isCompleted = progress.completedLessons.includes(
                  lesson.slug
                );
                const isCurrent = currentLesson.slug === lesson.slug;

                return (
                  <a
                    key={lesson.slug}
                    href={`/aulas/${lesson.slug}`}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "16px",
                      alignItems: "center",
                      textDecoration: "none",
                      color: "white",
                      padding: "18px",
                      borderRadius: "18px",
                      border: isCurrent
                        ? "1px solid rgba(34,211,238,0.7)"
                        : "1px solid rgba(255,255,255,0.12)",
                      background: isCompleted
                        ? "rgba(34,197,94,0.14)"
                        : isCurrent
                        ? "rgba(34,211,238,0.08)"
                        : "rgba(255,255,255,0.04)",
                    }}
                  >
                    <div>
                      <p
                        style={{
                          color: "#22d3ee",
                          fontWeight: 900,
                          margin: 0,
                        }}
                      >
                        Dia {lesson.dayNumber}
                      </p>

                      <strong
                        style={{
                          display: "block",
                          marginTop: "6px",
                          fontSize: "18px",
                        }}
                      >
                        {lesson.title}
                      </strong>
                    </div>

                    <strong
                      style={{
                        color: isCompleted ? "#86efac" : "#67e8f9",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {isCompleted
                        ? "Concluído"
                        : isCurrent
                        ? "Próxima missão"
                        : "Bloqueada"}
                    </strong>
                  </a>
                );
              })}
            </div>
          </section>

          <aside style={cardStyle}>
            <p style={eyebrowStyle}>Mentor IA</p>

            <h2 style={{ fontSize: "34px", marginTop: "8px" }}>
              Assistente Alex
            </h2>

            <p style={{ color: "#cbd5e1", lineHeight: 1.7, fontSize: "17px" }}>
              Está com dificuldade? O Alex pode explicar de forma simples,
              sugerir revisão e ajudar você a continuar sem travar.
            </p>

            <div
              style={{
                marginTop: "24px",
                padding: "20px",
                borderRadius: "18px",
                background: "rgba(34,211,238,0.1)",
                border: "1px solid rgba(34,211,238,0.25)",
              }}
            >
              <strong>Dica do Alex</strong>

              <p
                style={{
                  color: "#cbd5e1",
                  lineHeight: 1.7,
                  marginBottom: 0,
                }}
              >
                Faça uma aula por vez, responda o quiz e use o feedback do erro
                como revisão. Errar faz parte do treino.
              </p>
            </div>

            <a
              href={`/aulas/${currentLesson.slug}`}
              style={{
                display: "inline-block",
                marginTop: "24px",
                color: "#020617",
                background: "#22d3ee",
                textDecoration: "none",
                padding: "14px 20px",
                borderRadius: "16px",
                fontWeight: 900,
              }}
            >
              Continuar aula
            </a>

            {trailCompleted && (
              <a
                href="/certificado"
                style={{
                  display: "inline-block",
                  marginTop: "12px",
                  marginLeft: "12px",
                  color: "#020617",
                  background: "#22c55e",
                  textDecoration: "none",
                  padding: "14px 20px",
                  borderRadius: "16px",
                  fontWeight: 900,
                }}
              >
                Ver certificado
              </a>
            )}
          </aside>
        </section>
      </section>
    </main>
  );
}

function InfoCard({
  label,
  value,
  description,
}: {
  label: string;
  value: string;
  description: string;
}) {
  return (
    <div style={cardStyle}>
      <p style={eyebrowStyle}>{label}</p>

      <strong style={{ fontSize: "36px", display: "block", marginTop: "10px" }}>
        {value}
      </strong>

      <p style={{ color: "#cbd5e1", marginBottom: 0 }}>{description}</p>
    </div>
  );
}

const cardStyle: React.CSSProperties = {
  padding: "24px",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "24px",
  background: "rgba(255,255,255,0.06)",
};

const eyebrowStyle: React.CSSProperties = {
  color: "#22d3ee",
  fontWeight: 900,
  textTransform: "uppercase",
  letterSpacing: "0.16em",
  margin: 0,
};