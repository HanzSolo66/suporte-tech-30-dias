"use client";

import { useEffect, useState } from "react";
import { lessons } from "../../lib/lessons";
import { neon } from "../../lib/neonStyles";

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
  const currentWeek = Math.min(Math.ceil(Math.max(completedLessons, 1) / 7), 4);

  return (
    <main style={neon.page}>
      <section style={neon.container}>
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "24px",
            alignItems: "flex-start",
            flexWrap: "wrap",
            marginBottom: "34px",
          }}
        >
          <div>
            <p style={neon.eyebrow}>Painel de controle</p>

            <h1
              style={{
                fontSize: "56px",
                lineHeight: 1,
                marginTop: "14px",
                marginBottom: "16px",
              }}
            >
              Missão em andamento,{" "}
              <span style={{ color: neon.colors.cyan }}>Matheus</span>.
            </h1>

            <p
              style={{
                ...neon.muted,
                fontSize: "19px",
                maxWidth: "760px",
              }}
            >
              Acompanhe sua evolução na trilha de suporte com tecnologia,
              lógica, Python, dados, APIs e automação.
            </p>
          </div>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a href="/" style={neon.buttonGhost}>
              Home
            </a>

            <a
              href="/certificado"
              style={trailCompleted ? neon.buttonSuccess : neon.buttonGhost}
            >
              {trailCompleted ? "Ver certificado" : "Certificado bloqueado"}
            </a>
          </div>
        </header>

        <section
          style={{
            ...neon.card,
            marginBottom: "26px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "340px",
              height: "340px",
              borderRadius: "999px",
              background: "rgba(34,211,238,0.12)",
              filter: "blur(48px)",
              right: "-120px",
              top: "-150px",
            }}
          />

          <div style={{ position: "relative" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
                gap: "16px",
              }}
            >
              <InfoCard
                label="Progresso"
                value={`${completedLessons}/${totalLessons}`}
                description="Aulas concluídas"
              />
              <InfoCard label="XP" value={String(xp)} description="Pontos acumulados" />
              <InfoCard
                label="Semana"
                value={`${currentWeek}/4`}
                description="Fase atual da trilha"
              />
              <InfoCard
                label="Status"
                value={trailCompleted ? "Concluído" : "Ativo"}
                description={trailCompleted ? "Certificado liberado" : "Missão em progresso"}
              />
            </div>

            <div style={{ marginTop: "24px" }}>
              <div style={neon.progressTrack}>
                <div
                  style={{
                    ...neon.progressFill,
                    width: `${progressPercent}%`,
                  }}
                />
              </div>

              <p style={{ ...neon.muted, marginTop: "12px", marginBottom: 0 }}>
                {progressPercent}% da missão concluída.
              </p>
            </div>
          </div>
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.35fr) minmax(300px, 0.75fr)",
            gap: "26px",
            alignItems: "start",
          }}
        >
          <section style={neon.card}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "16px",
                flexWrap: "wrap",
                alignItems: "center",
                marginBottom: "22px",
              }}
            >
              <div>
                <p style={neon.eyebrow}>Missões da trilha</p>
                <h2 style={{ fontSize: "34px", margin: "8px 0 0" }}>
                  Central de aulas
                </h2>
              </div>

              <span
                style={{
                  color: trailCompleted ? neon.colors.green : neon.colors.cyan,
                  border: `1px solid ${
                    trailCompleted
                      ? "rgba(34,197,94,0.45)"
                      : "rgba(34,211,238,0.35)"
                  }`,
                  borderRadius: "999px",
                  padding: "10px 14px",
                  fontWeight: 900,
                  background: trailCompleted
                    ? "rgba(34,197,94,0.12)"
                    : "rgba(34,211,238,0.1)",
                }}
              >
                {trailCompleted ? "Trilha concluída" : "Continue avançando"}
              </span>
            </div>

            <div style={{ display: "grid", gap: "12px" }}>
              {lessons.map((lesson) => {
                const isCompleted = progress.completedLessons.includes(lesson.slug);
                const isCurrent = currentLesson.slug === lesson.slug;

                return (
                  <a
                    key={lesson.slug}
                    href={`/aulas/${lesson.slug}`}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "auto minmax(0, 1fr) auto",
                      gap: "14px",
                      alignItems: "center",
                      textDecoration: "none",
                      color: neon.colors.text,
                      padding: "16px",
                      borderRadius: "18px",
                      border: isCompleted
                        ? "1px solid rgba(34,197,94,0.38)"
                        : isCurrent
                        ? "1px solid rgba(34,211,238,0.65)"
                        : "1px solid rgba(255,255,255,0.1)",
                      background: isCompleted
                        ? "linear-gradient(135deg, rgba(34,197,94,0.18), rgba(15,23,42,0.72))"
                        : isCurrent
                        ? "linear-gradient(135deg, rgba(34,211,238,0.14), rgba(15,23,42,0.72))"
                        : "rgba(255,255,255,0.04)",
                      boxShadow: isCurrent
                        ? "0 0 24px rgba(34,211,238,0.14)"
                        : "none",
                    }}
                  >
                    <span
                      style={{
                        width: "34px",
                        height: "34px",
                        display: "grid",
                        placeItems: "center",
                        borderRadius: "12px",
                        background: isCompleted
                          ? neon.colors.greenSoft
                          : isCurrent
                          ? neon.colors.cyanSoft
                          : "rgba(255,255,255,0.06)",
                        color: isCompleted ? neon.colors.green : neon.colors.cyan,
                        fontWeight: 900,
                      }}
                    >
                      {isCompleted ? "✓" : lesson.dayNumber}
                    </span>

                    <div>
                      <p
                        style={{
                          color: neon.colors.cyan,
                          fontWeight: 900,
                          margin: 0,
                          fontSize: "13px",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                        }}
                      >
                        Dia {lesson.dayNumber}
                      </p>

                      <strong
                        style={{
                          display: "block",
                          marginTop: "5px",
                          fontSize: "17px",
                        }}
                      >
                        {lesson.title}
                      </strong>
                    </div>

                    <strong
                      style={{
                        color: isCompleted
                          ? neon.colors.green
                          : isCurrent
                          ? neon.colors.cyan
                          : neon.colors.muted,
                        whiteSpace: "nowrap",
                        fontSize: "14px",
                      }}
                    >
                      {isCompleted ? "Concluído" : isCurrent ? "Próxima" : "Bloqueada"}
                    </strong>
                  </a>
                );
              })}
            </div>
          </section>

          <aside style={{ display: "grid", gap: "20px" }}>
            <section style={neon.cardGreen}>
              <p style={neon.eyebrow}>Mentor IA</p>

              <h2 style={{ fontSize: "32px", marginTop: "10px" }}>
                Assistente Alex
              </h2>

              <p style={neon.muted}>
                Use o Alex durante as aulas para destravar conceitos e revisar
                com exemplos simples de atendimento.
              </p>

              <a href={`/aulas/${currentLesson.slug}`} style={neon.buttonPrimary}>
                Continuar aula
              </a>
            </section>

            <section style={neon.card}>
              <p style={neon.eyebrow}>Dica de missão</p>

              <p style={{ ...neon.muted, marginBottom: 0 }}>
                Faça uma aula por vez, responda o quiz e use o erro como revisão.
                O objetivo é constância, não velocidade.
              </p>
            </section>

            {trailCompleted && (
              <section style={neon.cardGreen}>
                <p style={neon.eyebrow}>Recompensa desbloqueada</p>

                <h2 style={{ fontSize: "28px", margin: "10px 0" }}>
                  Certificado final disponível
                </h2>

                <p style={neon.muted}>
                  Sua trilha chegou ao fim. Agora você pode usar o texto do
                  certificado no GitHub, LinkedIn e currículo.
                </p>

                <a href="/certificado" style={neon.buttonSuccess}>
                  Abrir certificado
                </a>
              </section>
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
    <div
      style={{
        padding: "18px",
        borderRadius: "20px",
        background: "rgba(255,255,255,0.055)",
        border: "1px solid rgba(255,255,255,0.11)",
      }}
    >
      <p style={neon.eyebrow}>{label}</p>

      <strong style={{ fontSize: "34px", display: "block", marginTop: "8px" }}>
        {value}
      </strong>

      <p style={{ color: neon.colors.muted, marginBottom: 0 }}>
        {description}
      </p>
    </div>
  );
}