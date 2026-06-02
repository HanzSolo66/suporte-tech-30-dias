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

export default function CertificadoPage() {
  const [progress, setProgress] = useState<ProgressData>(initialProgress);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const savedProgress = window.localStorage.getItem(progressKey);

    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
  }, []);

  const completedLessons = progress.completedLessons.length;
  const alexUses = progress.alexUsedLessons.length;
  const totalLessons = lessons.length;
  const progressPercent = Math.round((completedLessons / totalLessons) * 100);
  const trailCompleted = completedLessons >= totalLessons;
  const xp = completedLessons * 120 + alexUses * 30;

  const portfolioText =
    "Concluí a trilha Suporte Tech 30 Dias, um projeto prático focado em lógica de programação, Python básico, dados, SQL, APIs, automações e melhoria de processos de atendimento. Durante a jornada, desenvolvi uma aplicação web gamificada com aulas, quizzes, feedback automático, progresso local, Assistente Alex e certificado final.";

  function handleCopyPortfolioText() {
    navigator.clipboard.writeText(portfolioText);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2500);
  }

  return (
    <main style={neon.page}>
      <section style={{ ...neon.container, maxWidth: "1080px" }}>
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

          <a href="/" style={neon.buttonGhost}>
            Home
          </a>
        </header>

        <section
          style={{
            ...(trailCompleted ? neon.cardGreen : neon.card),
            padding: "46px",
            overflow: "hidden",
            marginBottom: "26px",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "360px",
              height: "360px",
              borderRadius: "999px",
              background: trailCompleted
                ? "rgba(34,197,94,0.18)"
                : "rgba(34,211,238,0.14)",
              filter: "blur(58px)",
              right: "-120px",
              top: "-150px",
            }}
          />

          <div style={{ position: "relative" }}>
            <p style={neon.eyebrow}>
              {trailCompleted
                ? "Certificado desbloqueado"
                : "Certificado da trilha"}
            </p>

            <h1
              style={{
                fontSize: "58px",
                lineHeight: 1,
                marginTop: "16px",
                marginBottom: "18px",
              }}
            >
              {trailCompleted ? (
                <>
                  Parabéns, missão{" "}
                  <span style={{ color: neon.colors.green }}>concluída</span>.
                </>
              ) : (
                <>
                  Sua trilha ainda está{" "}
                  <span style={{ color: neon.colors.cyan }}>em andamento</span>.
                </>
              )}
            </h1>

            <p
              style={{
                ...neon.muted,
                fontSize: "20px",
                maxWidth: "820px",
              }}
            >
              Você construiu uma base prática em suporte com tecnologia,
              passando por lógica, Python, dados, SQL, APIs, automação e
              projetos aplicados ao atendimento.
            </p>

            <div style={{ marginTop: "28px" }}>
              <div style={neon.progressTrack}>
                <div
                  style={{
                    ...neon.progressFill,
                    width: `${progressPercent}%`,
                  }}
                />
              </div>

              <p style={{ ...neon.muted, marginTop: "12px", marginBottom: 0 }}>
                {completedLessons} de {totalLessons} aulas concluídas —{" "}
                {progressPercent}% da trilha.
              </p>
            </div>
          </div>
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
            gap: "16px",
            marginBottom: "26px",
          }}
        >
          <InfoCard
            label="Aulas concluídas"
            value={`${completedLessons}/${totalLessons}`}
          />
          <InfoCard label="XP total" value={String(xp)} />
          <InfoCard label="Uso do Alex" value={`${alexUses} vez(es)`} />
          <InfoCard
            label="Status"
            value={trailCompleted ? "Concluído" : "Em andamento"}
          />
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(300px, 0.75fr)",
            gap: "26px",
            alignItems: "start",
          }}
        >
          <section style={{ display: "grid", gap: "24px" }}>
            <section style={neon.card}>
              <p style={neon.eyebrow}>Habilidades praticadas</p>

              <h2 style={{ fontSize: "34px", margin: "10px 0 18px" }}>
                Arsenal tech desbloqueado
              </h2>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "12px",
                }}
              >
                {[
                  "Atendimento com tecnologia",
                  "Lógica de programação",
                  "Python básico",
                  "Dados e SQL",
                  "APIs e integrações",
                  "Automação de processos",
                  "Projetos práticos",
                  "Portfólio",
                ].map((skill) => (
                  <span
                    key={skill}
                    style={{
                      padding: "11px 14px",
                      borderRadius: "999px",
                      background: "rgba(34,211,238,0.1)",
                      border: "1px solid rgba(34,211,238,0.28)",
                      color: neon.colors.text,
                      fontWeight: 900,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            <section style={neon.card}>
              <p style={neon.eyebrow}>Texto para portfólio ou LinkedIn</p>

              <h2 style={{ fontSize: "34px", margin: "10px 0 18px" }}>
                Apresente sua conquista
              </h2>

              <p
                style={{
                  ...neon.muted,
                  background: "rgba(255,255,255,0.055)",
                  padding: "20px",
                  borderRadius: "20px",
                  border: "1px solid rgba(255,255,255,0.11)",
                }}
              >
                {portfolioText}
              </p>

              <button
                onClick={handleCopyPortfolioText}
                style={copied ? neon.buttonSuccess : neon.buttonPrimary}
              >
                {copied ? "Texto copiado!" : "Copiar texto"}
              </button>
            </section>
          </section>

          <aside style={{ display: "grid", gap: "20px" }}>
            <section style={trailCompleted ? neon.cardGreen : neon.card}>
              <p style={neon.eyebrow}>Recompensa final</p>

              <h2 style={{ fontSize: "32px", margin: "10px 0" }}>
                {trailCompleted
                  ? "Certificado liberado 🏆"
                  : "Continue para liberar"}
              </h2>

              <p style={neon.muted}>
                {trailCompleted
                  ? "Você concluiu a trilha de 30 dias e já pode usar este projeto como peça de portfólio."
                  : "Finalize todas as aulas para desbloquear a mensagem final de conclusão."}
              </p>

              <a
                href={trailCompleted ? "/dashboard" : "/aulas/dia-1"}
                style={trailCompleted ? neon.buttonSuccess : neon.buttonPrimary}
              >
                {trailCompleted ? "Voltar ao dashboard" : "Continuar trilha"}
              </a>
            </section>

            <section style={neon.card}>
              <p style={neon.eyebrow}>Próximos passos</p>

              <ol
                style={{
                  ...neon.muted,
                  paddingLeft: "22px",
                  marginBottom: 0,
                }}
              >
                <li>Melhorar o README do projeto.</li>
                <li>Adicionar prints da aplicação funcionando.</li>
                <li>Publicar o projeto online.</li>
                <li>Colocar o link no LinkedIn.</li>
                <li>Treinar uma apresentação curta do projeto.</li>
              </ol>
            </section>

            <section style={neon.card}>
              <p style={neon.eyebrow}>Resumo da missão</p>

              <p style={{ ...neon.muted, marginBottom: 0 }}>
                Você criou uma aplicação completa com home, dashboard, aulas
                dinâmicas, quizzes, progresso local, mentor Alex e certificado.
              </p>
            </section>
          </aside>
        </section>
      </section>
    </main>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "22px",
        background: "rgba(255,255,255,0.055)",
        border: "1px solid rgba(255,255,255,0.11)",
        boxShadow: "0 0 28px rgba(34,211,238,0.06)",
      }}
    >
      <p style={neon.eyebrow}>{label}</p>

      <strong
        style={{
          fontSize: "34px",
          display: "block",
          marginTop: "10px",
        }}
      >
        {value}
      </strong>
    </div>
  );
}