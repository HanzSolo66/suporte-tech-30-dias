const weeklyMissions = [
  {
    day: "Dia 1",
    title: "Boas-vindas e avaliação inicial",
    status: "Concluído",
  },
  {
    day: "Dia 2",
    title: "O que é lógica de programação",
    status: "Próxima missão",
  },
  {
    day: "Dia 3",
    title: "Variáveis no mundo real",
    status: "Bloqueado",
  },
  {
    day: "Dia 4",
    title: "Condições: se acontecer isso, faça aquilo",
    status: "Bloqueado",
  },
];

const badges = [
  "Primeira Aula",
  "Primeiro Quiz",
  "Iniciante Tech",
];

export default function DashboardPage() {
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
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "24px",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
          <div>
            <p
              style={{
                color: "#22d3ee",
                fontWeight: 800,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}
            >
              Painel do aluno
            </p>

            <h1
              style={{
                fontSize: "48px",
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              Bem-vindo à sua missão, Matheus.
            </h1>

            <p
              style={{
                color: "#cbd5e1",
                fontSize: "18px",
                lineHeight: 1.7,
                maxWidth: "720px",
                marginTop: "16px",
              }}
            >
              Continue sua jornada para dominar tecnologia aplicada ao
              atendimento, suporte e automação.
            </p>
          </div>

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
        </header>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
          }}
        >
          <MetricCard label="Progresso" value="1/30" description="Dia atual da trilha" />
          <MetricCard label="XP" value="120" description="Pontos acumulados" />
          <MetricCard label="Sequência" value="1 dia" description="Continue estudando diariamente" />
          <MetricCard label="Nível" value="Iniciante" description="Primeira fase desbloqueada" />
        </section>

        <section
          style={{
            marginTop: "28px",
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.4fr) minmax(280px, 0.8fr)",
            gap: "24px",
          }}
        >
          <div style={cardStyle}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "16px",
                alignItems: "center",
                marginBottom: "22px",
              }}
            >
              <div>
                <p style={labelStyle}>Semana 1</p>
                <h2 style={{ fontSize: "30px", margin: "8px 0 0" }}>
                  Missões da semana
                </h2>
              </div>

              <span
                style={{
                  border: "1px solid rgba(34,211,238,0.4)",
                  color: "#67e8f9",
                  padding: "8px 12px",
                  borderRadius: "999px",
                  fontWeight: 800,
                  fontSize: "14px",
                }}
              >
                Base e confiança
              </span>
            </div>

            <div style={{ display: "grid", gap: "12px" }}>
              {weeklyMissions.map((mission) => (
                <div
                  key={mission.day}
                  style={{
                    padding: "18px",
                    borderRadius: "18px",
                    background:
                      mission.status === "Concluído"
                        ? "rgba(34,197,94,0.12)"
                        : "rgba(255,255,255,0.05)",
                    border:
                      mission.status === "Próxima missão"
                        ? "1px solid rgba(34,211,238,0.45)"
                        : "1px solid rgba(255,255,255,0.1)",
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "16px",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <p style={{ ...labelStyle, marginBottom: "6px" }}>
                      {mission.day}
                    </p>
                    <strong>{mission.title}</strong>
                  </div>

                  <span
                    style={{
                      color:
                        mission.status === "Concluído"
                          ? "#86efac"
                          : mission.status === "Próxima missão"
                          ? "#67e8f9"
                          : "#94a3b8",
                      fontWeight: 800,
                      fontSize: "14px",
                    }}
                  >
                    {mission.status}
                  </span>
                </div>
              ))}
            </div>

            <button
              style={{
                marginTop: "24px",
                width: "100%",
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
              Continuar aula
            </button>
          </div>

          <aside style={cardStyle}>
            <p style={labelStyle}>Mentor IA</p>
            <h2 style={{ fontSize: "30px", margin: "8px 0 12px" }}>
              Assistente Alex
            </h2>

            <p style={{ ...mutedStyle, lineHeight: 1.7 }}>
              Está com dificuldade? O Alex pode explicar de forma simples,
              sugerir revisão e ajudar você a continuar sem travar.
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
              <p style={{ ...mutedStyle, lineHeight: 1.6, marginBottom: 0 }}>
                Hoje foque em entender lógica antes de se preocupar em decorar
                código.
              </p>
            </div>

            <button
              style={{
                marginTop: "24px",
                width: "100%",
                padding: "16px",
                borderRadius: "16px",
                border: "1px solid rgba(255,255,255,0.16)",
                background: "rgba(255,255,255,0.06)",
                color: "white",
                fontWeight: 900,
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Tirar dúvida
            </button>
          </aside>
        </section>

        <section
          style={{
            marginTop: "28px",
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(280px, 0.7fr)",
            gap: "24px",
          }}
        >
          <div style={cardStyle}>
            <p style={labelStyle}>Progresso visual</p>
            <h2 style={{ fontSize: "30px", margin: "8px 0 18px" }}>
              Trilha dos 30 dias
            </h2>

            <div
              style={{
                height: "18px",
                background: "rgba(255,255,255,0.08)",
                borderRadius: "999px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: "8%",
                  height: "100%",
                  background: "#22d3ee",
                  borderRadius: "999px",
                }}
              />
            </div>

            <p style={{ ...mutedStyle, marginTop: "14px" }}>
              Você está no começo da jornada. Pequenas vitórias todos os dias
              constroem consistência.
            </p>
          </div>

          <div style={cardStyle}>
            <p style={labelStyle}>Conquistas</p>
            <h2 style={{ fontSize: "30px", margin: "8px 0 18px" }}>
              Badges
            </h2>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {badges.map((badge) => (
                <span
                  key={badge}
                  style={{
                    padding: "10px 12px",
                    borderRadius: "999px",
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "#e2e8f0",
                    fontWeight: 800,
                    fontSize: "14px",
                  }}
                >
                  🏅 {badge}
                </span>
              ))}
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

function MetricCard({
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
      <p style={labelStyle}>{label}</p>
      <h2 style={numberStyle}>{value}</h2>
      <p style={mutedStyle}>{description}</p>
    </div>
  );
}

const cardStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "24px",
  padding: "24px",
};

const labelStyle: React.CSSProperties = {
  color: "#22d3ee",
  fontWeight: 800,
  margin: 0,
};

const numberStyle: React.CSSProperties = {
  fontSize: "36px",
  margin: "12px 0",
};

const mutedStyle: React.CSSProperties = {
  color: "#cbd5e1",
};