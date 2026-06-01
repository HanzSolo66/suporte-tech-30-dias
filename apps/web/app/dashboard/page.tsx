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

  const completedDays = progress.completedLessons.length;
  const xp = completedDays * 120 + progress.alexUsedLessons.length * 30;

  const currentLesson =
    lessons.find((lesson) => !progress.completedLessons.includes(lesson.slug)) ||
    lessons[lessons.length - 1];

  const currentLessonIndex = lessons.findIndex(
    (lesson) => lesson.slug === currentLesson.slug
  );

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
      <section style={{ maxWidth: "1140px", margin: "0 auto" }}>
        <p style={eyebrowStyle}>Painel do aluno</p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "24px",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: "48px",
                lineHeight: 1.1,
                margin: "12px 0",
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

          <a
            href="/"
            style={{
              background: "#22d3ee",
              color: "#020617",
              textDecoration: "none",
              padding: "16px 24px",
              borderRadius: "16px",
              fontWeight: 900,
              whiteSpace: "nowrap",
            }}
          >
            Voltar para home
          </a>
        </div>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            marginTop: "40px",
          }}
        >
          <InfoCard
            label="Progresso"
            value={`${completedDays}/${lessons.length}`}
            description={
              completedDays > 0
                ? `${completedDays} aula(s) concluída(s)`
                : "Comece pela primeira aula"
            }
          />

          <InfoCard
            label="XP"
            value={String(xp)}
            description="Pontos acumulados"
          />

          <InfoCard
            label="Sequência"
            value={completedDays > 0 ? `${completedDays} dia(s)` : "0 dias"}
            description={
              completedDays > 0
                ? "Continue estudando diariamente"
                : "Finalize o primeiro dia"
            }
          />

          <InfoCard
            label="Nível"
            value={
              completedDays >= 3
                ? "Aprendiz"
                : completedDays >= 1
                ? "Iniciante+"
                : "Iniciante"
            }
            description={
              completedDays >= 3
                ? "Você concluiu a primeira sequência"
                : completedDays >= 1
                ? "Primeira missão concluída"
                : "Primeira fase desbloqueada"
            }
          />
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.5fr) minmax(280px, 1fr)",
            gap: "24px",
            marginTop: "32px",
          }}
        >
          <section style={cardStyle}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "16px",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <div>
                <p style={eyebrowStyle}>Semana 1</p>
                <h2 style={{ fontSize: "32px", marginTop: "8px" }}>
                  Missões da semana
                </h2>
              </div>

              <span
                style={{
                  color: "#67e8f9",
                  border: "1px solid rgba(34,211,238,0.45)",
                  borderRadius: "999px",
                  padding: "10px 16px",
                  fontWeight: 800,
                }}
              >
                Base e confiança
              </span>
            </div>

            <div style={{ display: "grid", gap: "14px", marginTop: "24px" }}>
              {lessons.map((lesson, index) => {
                const completed = progress.completedLessons.includes(
                  lesson.slug
                );

                const previousLesson = lessons[index - 1];

                const unlocked =
                  index === 0 ||
                  progress.completedLessons.includes(previousLesson.slug);

                return (
                  <MissionCard
                    key={lesson.slug}
                    day={`Dia ${lesson.dayNumber}`}
                    title={lesson.title}
                    status={
                      completed
                        ? "Concluído"
                        : unlocked
                        ? "Disponível"
                        : "Bloqueado"
                    }
                    href={unlocked ? `/aulas/${lesson.slug}` : "/dashboard"}
                    completed={completed}
                    locked={!unlocked}
                  />
                );
              })}
            </div>
          </section>

          <section style={cardStyle}>
            <p style={eyebrowStyle}>Mentor IA</p>

            <h2 style={{ fontSize: "32px", marginTop: "8px" }}>
              Assistente Alex
            </h2>

            <p style={mutedStyle}>
              O Alex acompanha seu progresso e ajuda quando você trava em algum
              conceito.
            </p>

            <div
              style={{
                marginTop: "24px",
                padding: "18px",
                borderRadius: "18px",
                background: "rgba(34,211,238,0.1)",
                border: "1px solid rgba(34,211,238,0.25)",
              }}
            >
              <strong>Dica do Alex</strong>

              <p style={{ ...mutedStyle, marginBottom: 0 }}>
                {completedDays === lessons.length
                  ? "Você concluiu todas as aulas disponíveis. Excelente progresso!"
                  : `Sua aula atual é o Dia ${currentLesson.dayNumber}: ${currentLesson.title}.`}
              </p>
            </div>

            <a
              href={`/aulas/${currentLesson.slug}`}
              style={{
                display: "inline-block",
                marginTop: "24px",
                background: "#22d3ee",
                color: "#020617",
                textDecoration: "none",
                padding: "14px 20px",
                borderRadius: "16px",
                fontWeight: 900,
              }}
            >
              Ir para a aula atual
            </a>

            <div
              style={{
                marginTop: "24px",
                padding: "18px",
                borderRadius: "18px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <strong>Próximo passo</strong>

              <p style={{ ...mutedStyle, marginBottom: 0 }}>
                {currentLessonIndex + 1 < lessons.length
                  ? "Conclua a aula atual para liberar a próxima missão."
                  : "Você chegou ao fim das aulas cadastradas nesta versão."}
              </p>
            </div>
          </section>
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
      <strong style={{ fontSize: "38px", display: "block", marginTop: "8px" }}>
        {value}
      </strong>
      <p style={{ ...mutedStyle, marginBottom: 0 }}>{description}</p>
    </div>
  );
}

function MissionCard({
  day,
  title,
  status,
  href,
  completed,
  locked,
}: {
  day: string;
  title: string;
  status: string;
  href: string;
  completed: boolean;
  locked: boolean;
}) {
  return (
    <a
      href={href}
      style={{
        display: "block",
        textDecoration: "none",
        color: "white",
        padding: "20px",
        borderRadius: "18px",
        opacity: locked ? 0.55 : 1,
        background: completed
          ? "rgba(34,197,94,0.14)"
          : "rgba(255,255,255,0.05)",
        border: completed
          ? "1px solid rgba(34,197,94,0.35)"
          : "1px solid rgba(255,255,255,0.12)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "16px",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div>
          <p style={{ ...eyebrowStyle, margin: 0 }}>{day}</p>
          <strong style={{ fontSize: "18px" }}>{title}</strong>
        </div>

        <span
          style={{
            color: completed ? "#86efac" : locked ? "#94a3b8" : "#67e8f9",
            fontWeight: 900,
          }}
        >
          {status}
        </span>
      </div>
    </a>
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

const mutedStyle: React.CSSProperties = {
  color: "#cbd5e1",
  lineHeight: 1.7,
  fontSize: "16px",
};