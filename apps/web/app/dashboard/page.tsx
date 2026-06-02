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

const weeks = [
  {
    title: "Semana 1",
    subtitle: "Base lógica",
    start: 1,
    end: 7,
  },
  {
    title: "Semana 2",
    subtitle: "Python básico",
    start: 8,
    end: 14,
  },
  {
    title: "Semana 3",
    subtitle: "Dados e SQL",
    start: 15,
    end: 21,
  },
  {
    title: "Semana 4",
    subtitle: "APIs, automação e portfólio",
    start: 22,
    end: 30,
  },
];

export default function DashboardPage() {
  const [progress, setProgress] = useState<ProgressData>(initialProgress);

  useEffect(() => {
    const savedProgress = window.localStorage.getItem(progressKey);

    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
  }, []);

  function handleResetProgress() {
    const confirmed = window.confirm(
      "Tem certeza que deseja resetar seu progresso local? Isso apagará as aulas concluídas neste navegador."
    );

    if (!confirmed) {
      return;
    }

    window.localStorage.removeItem(progressKey);
    setProgress(initialProgress);
  }

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
              Central da missão,{" "}
              <span style={{ color: neon.colors.cyan }}>Matheus</span>.
            </h1>

            <p
              style={{
                ...neon.muted,
                fontSize: "19px",
                maxWidth: "780px",
              }}
            >
              Acompanhe sua evolução por semanas, veja a próxima aula
              recomendada e use o painel para testar seu progresso antes da
              publicação.
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

              <InfoCard
                label="XP"
                value={String(xp)}
                description="Pontos acumulados"
              />

              <InfoCard
                label="Alex"
                value={`${alexUses}`}
                description="Ajudas solicitadas"
              />

              <InfoCard
                label="Status"
                value={trailCompleted ? "Concluído" : "Ativo"}
                description={
                  trailCompleted ? "Certificado liberado" : "Missão em progresso"
                }
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
            gridTemplateColumns: "minmax(0, 1.25fr) minmax(300px, 0.8fr)",
            gap: "26px",
            alignItems: "start",
          }}
        >
          <section style={{ display: "grid", gap: "22px" }}>
            <section style={neon.card}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "16px",
                  alignItems: "center",
                  flexWrap: "wrap",
                  marginBottom: "22px",
                }}
              >
                <div>
                  <p style={neon.eyebrow}>Progresso por semana</p>
                  <h2 style={{ fontSize: "34px", margin: "8px 0 0" }}>
                    Fases da trilha
                  </h2>
                </div>

                <span
                  style={{
                    color: trailCompleted
                      ? neon.colors.green
                      : neon.colors.cyan,
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

              <div style={{ display: "grid", gap: "16px" }}>
                {weeks.map((week) => {
                  const weekLessons = lessons.filter(
                    (lesson) =>
                      lesson.dayNumber >= week.start &&
                      lesson.dayNumber <= week.end
                  );

                  const completedInWeek = weekLessons.filter((lesson) =>
                    progress.completedLessons.includes(lesson.slug)
                  ).length;

                  const weekPercent = Math.round(
                    (completedInWeek / weekLessons.length) * 100
                  );

                  return (
                    <section
                      key={week.title}
                      style={{
                        padding: "18px",
                        borderRadius: "20px",
                        background:
                          completedInWeek === weekLessons.length
                            ? "rgba(34,197,94,0.12)"
                            : "rgba(255,255,255,0.045)",
                        border:
                          completedInWeek === weekLessons.length
                            ? "1px solid rgba(34,197,94,0.35)"
                            : "1px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          gap: "14px",
                          alignItems: "center",
                          flexWrap: "wrap",
                        }}
                      >
                        <div>
                          <p style={neon.eyebrow}>{week.title}</p>
                          <h3 style={{ margin: "6px 0 0", fontSize: "22px" }}>
                            {week.subtitle}
                          </h3>
                        </div>

                        <strong
                          style={{
                            color:
                              completedInWeek === weekLessons.length
                                ? neon.colors.green
                                : neon.colors.cyan,
                          }}
                        >
                          {completedInWeek}/{weekLessons.length}
                        </strong>
                      </div>

                      <div style={{ ...neon.progressTrack, marginTop: "14px" }}>
                        <div
                          style={{
                            ...neon.progressFill,
                            width: `${weekPercent}%`,
                          }}
                        />
                      </div>

                      <div
                        style={{
                          display: "grid",
                          gap: "10px",
                          marginTop: "16px",
                        }}
                      >
                        {weekLessons.map((lesson) => {
                          const isCompleted =
                            progress.completedLessons.includes(lesson.slug);
                          const isCurrent = currentLesson.slug === lesson.slug;

                          return (
                            <a
                              key={lesson.slug}
                              href={`/aulas/${lesson.slug}`}
                              style={{
                                display: "grid",
                                gridTemplateColumns: "auto minmax(0, 1fr) auto",
                                gap: "12px",
                                alignItems: "center",
                                textDecoration: "none",
                                color: neon.colors.text,
                                padding: "13px",
                                borderRadius: "16px",
                                border: isCompleted
                                  ? "1px solid rgba(34,197,94,0.32)"
                                  : isCurrent
                                  ? "1px solid rgba(34,211,238,0.55)"
                                  : "1px solid rgba(255,255,255,0.08)",
                                background: isCompleted
                                  ? "rgba(34,197,94,0.1)"
                                  : isCurrent
                                  ? "rgba(34,211,238,0.1)"
                                  : "rgba(255,255,255,0.035)",
                              }}
                            >
                              <span
                                style={{
                                  width: "30px",
                                  height: "30px",
                                  display: "grid",
                                  placeItems: "center",
                                  borderRadius: "10px",
                                  background: isCompleted
                                    ? neon.colors.greenSoft
                                    : isCurrent
                                    ? neon.colors.cyanSoft
                                    : "rgba(255,255,255,0.06)",
                                  color: isCompleted
                                    ? neon.colors.green
                                    : neon.colors.cyan,
                                  fontWeight: 900,
                                }}
                              >
                                {isCompleted ? "✓" : lesson.dayNumber}
                              </span>

                              <strong style={{ fontSize: "15px" }}>
                                {lesson.title}
                              </strong>

                              <span
                                style={{
                                  color: isCompleted
                                    ? neon.colors.green
                                    : isCurrent
                                    ? neon.colors.cyan
                                    : neon.colors.muted,
                                  fontWeight: 900,
                                  fontSize: "13px",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                {isCompleted
                                  ? "Concluído"
                                  : isCurrent
                                  ? "Próxima"
                                  : "Bloqueada"}
                              </span>
                            </a>
                          );
                        })}
                      </div>
                    </section>
                  );
                })}
              </div>
            </section>
          </section>

          <aside style={{ display: "grid", gap: "20px" }}>
            <section style={neon.cardGreen}>
              <p style={neon.eyebrow}>Próxima aula recomendada</p>

              <h2 style={{ fontSize: "32px", margin: "10px 0" }}>
                Dia {currentLesson.dayNumber}
              </h2>

              <p style={{ ...neon.muted, marginBottom: "18px" }}>
                {currentLesson.title}
              </p>

              <a
                href={`/aulas/${currentLesson.slug}`}
                style={neon.buttonPrimary}
              >
                Continuar missão
              </a>
            </section>

            <section style={neon.card}>
              <p style={neon.eyebrow}>Controle de testes</p>

              <h2 style={{ fontSize: "28px", margin: "10px 0" }}>
                Resetar progresso local
              </h2>

              <p style={neon.muted}>
                Use este botão apenas para testar a experiência do app do zero.
                Ele apaga o progresso salvo neste navegador.
              </p>

              <button
                onClick={handleResetProgress}
                style={{
                  ...neon.buttonGhost,
                  width: "100%",
                }}
              >
                Resetar progresso
              </button>
            </section>

            <section style={neon.card}>
              <p style={neon.eyebrow}>Dica do Alex</p>

              <p style={{ ...neon.muted, marginBottom: 0 }}>
                Agora o dashboard mostra sua evolução por fases. Use as semanas
                para entender sua jornada: lógica, Python, dados e automação.
              </p>
            </section>

            {trailCompleted && (
              <section style={neon.cardGreen}>
                <p style={neon.eyebrow}>Recompensa desbloqueada</p>

                <h2 style={{ fontSize: "28px", margin: "10px 0" }}>
                  Certificado disponível 🏆
                </h2>

                <p style={neon.muted}>
                  Você concluiu todas as aulas cadastradas na trilha.
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