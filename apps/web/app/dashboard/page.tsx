"use client";

import { useEffect, useState } from "react";

const progressKey = "suporte-tech-progress";

type ProgressData = {
  day1QuizCompleted: boolean;
  day1AlexUsed: boolean;
};

const initialProgress: ProgressData = {
  day1QuizCompleted: false,
  day1AlexUsed: false,
};

export default function DashboardPage() {
  const [progress, setProgress] = useState<ProgressData>(initialProgress);

  useEffect(() => {
    const savedProgress = window.localStorage.getItem(progressKey);

    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
  }, []);

  const completedSteps = [
    progress.day1QuizCompleted,
    progress.day1AlexUsed,
  ].filter(Boolean).length;

  const day1Completed = completedSteps === 2;
  const xp = completedSteps * 60;
  const currentDay = day1Completed ? 2 : 1;

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
            value={`${day1Completed ? 1 : 0}/30`}
            description={
              day1Completed
                ? "Dia 1 concluído"
                : "Conclua o quiz e use o Alex"
            }
          />

          <InfoCard
            label="XP"
            value={String(xp)}
            description="Pontos acumulados"
          />

          <InfoCard
            label="Sequência"
            value={day1Completed ? "1 dia" : "0 dias"}
            description={
              day1Completed
                ? "Continue estudando diariamente"
                : "Finalize o primeiro dia"
            }
          />

          <InfoCard
            label="Nível"
            value={day1Completed ? "Iniciante+" : "Iniciante"}
            description={
              day1Completed
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
              <MissionCard
                day="Dia 1"
                title="Boas-vindas e avaliação inicial"
                status={day1Completed ? "Concluído" : "Em andamento"}
                href="/aulas/dia-1"
                completed={day1Completed}
              />

              <MissionCard
                day="Dia 2"
                title="O que é lógica de programação"
                status={day1Completed ? "Próxima missão" : "Bloqueado"}
                href={day1Completed ? "/aulas/dia-2" : "/dashboard"}
                completed={false}
              />

              <MissionCard
                day="Dia 3"
                title="Condições e decisões"
                status="Em breve"
                href="/dashboard"
                completed={false}
              />
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
                {day1Completed
                  ? "Você concluiu a primeira missão. Agora está pronto para avançar para lógica de programação."
                  : "Comece pela aula do Dia 1. Responda o quiz e registre sua dúvida para ganhar XP."}
              </p>
            </div>

            <a
              href="/aulas/dia-1"
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
}: {
  day: string;
  title: string;
  status: string;
  href: string;
  completed: boolean;
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
            color: completed ? "#86efac" : "#67e8f9",
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