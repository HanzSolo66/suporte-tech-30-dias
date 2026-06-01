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

  const portfolioText = `Concluí a trilha Suporte Tech 30 Dias, um projeto prático focado em lógica de programação, Python básico, dados, SQL, APIs, automações e melhoria de processos de atendimento. Durante a jornada, desenvolvi uma aplicação web gamificada com aulas, quizzes, feedback automático, progresso local e assistente de dúvidas.`;

  function handleCopyPortfolioText() {
    navigator.clipboard.writeText(portfolioText);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2500);
  }

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
      <section style={{ maxWidth: "1040px", margin: "0 auto" }}>
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

        <section
          style={{
            marginTop: "40px",
            padding: "36px",
            borderRadius: "32px",
            background: trailCompleted
              ? "linear-gradient(135deg, rgba(34,197,94,0.18), rgba(34,211,238,0.12))"
              : "rgba(255,255,255,0.06)",
            border: trailCompleted
              ? "1px solid rgba(34,197,94,0.35)"
              : "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <p
            style={{
              color: "#22d3ee",
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              margin: 0,
            }}
          >
            Certificado da trilha
          </p>

          <h1
            style={{
              fontSize: "52px",
              lineHeight: 1.05,
              marginTop: "16px",
              marginBottom: "18px",
            }}
          >
            {trailCompleted
              ? "Parabéns, você concluiu a trilha!"
              : "Sua trilha está em andamento"}
          </h1>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: "20px",
              lineHeight: 1.7,
              maxWidth: "820px",
            }}
          >
            Você está construindo uma base prática em suporte com tecnologia,
            passando por lógica, Python, dados, SQL, APIs, automação e projetos
            aplicados ao atendimento.
          </p>

          <div
            style={{
              marginTop: "28px",
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
            {completedLessons} de {totalLessons} aulas concluídas —{" "}
            {progressPercent}% da trilha.
          </p>
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            marginTop: "28px",
          }}
        >
          <InfoCard label="Aulas concluídas" value={`${completedLessons}/${totalLessons}`} />
          <InfoCard label="XP total" value={String(xp)} />
          <InfoCard label="Uso do Alex" value={`${alexUses} vez(es)`} />
          <InfoCard
            label="Status"
            value={trailCompleted ? "Concluído" : "Em andamento"}
          />
        </section>

        <section style={cardStyle}>
          <h2 style={{ fontSize: "32px", marginTop: 0 }}>
            Habilidades praticadas
          </h2>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              marginTop: "18px",
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
                  padding: "10px 14px",
                  borderRadius: "999px",
                  background: "rgba(34,211,238,0.1)",
                  border: "1px solid rgba(34,211,238,0.25)",
                  color: "#e2e8f0",
                  fontWeight: 800,
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section style={cardStyle}>
          <h2 style={{ fontSize: "32px", marginTop: 0 }}>
            Texto para portfólio ou LinkedIn
          </h2>

          <p
            style={{
              color: "#cbd5e1",
              lineHeight: 1.7,
              fontSize: "17px",
              background: "rgba(255,255,255,0.05)",
              padding: "20px",
              borderRadius: "18px",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {portfolioText}
          </p>

          <button
            onClick={handleCopyPortfolioText}
            style={{
              marginTop: "16px",
              padding: "14px 20px",
              borderRadius: "16px",
              border: "none",
              background: "#22d3ee",
              color: "#020617",
              fontWeight: 900,
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            {copied ? "Texto copiado!" : "Copiar texto"}
          </button>
        </section>

        <section style={cardStyle}>
          <h2 style={{ fontSize: "32px", marginTop: 0 }}>Próximos passos</h2>

          <ol
            style={{
              color: "#cbd5e1",
              lineHeight: 1.8,
              fontSize: "17px",
              paddingLeft: "22px",
            }}
          >
            <li>Melhorar o README do projeto no GitHub.</li>
            <li>Adicionar prints da aplicação funcionando.</li>
            <li>Publicar o projeto online.</li>
            <li>Escrever um resumo da sua transição para tecnologia.</li>
            <li>Treinar uma apresentação curta do projeto para entrevistas.</li>
          </ol>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a
              href="/dashboard"
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
              Voltar ao dashboard
            </a>

            <a
              href="/"
              style={{
                display: "inline-block",
                color: "white",
                textDecoration: "none",
                padding: "14px 20px",
                borderRadius: "16px",
                fontWeight: 900,
                border: "1px solid rgba(255,255,255,0.18)",
              }}
            >
              Ver página inicial
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div style={cardStyle}>
      <p
        style={{
          color: "#22d3ee",
          fontWeight: 900,
          textTransform: "uppercase",
          letterSpacing: "0.14em",
          margin: 0,
        }}
      >
        {label}
      </p>

      <strong style={{ fontSize: "34px", display: "block", marginTop: "10px" }}>
        {value}
      </strong>
    </div>
  );
}

const cardStyle: React.CSSProperties = {
  marginTop: "28px",
  padding: "24px",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "24px",
  background: "rgba(255,255,255,0.06)",
};