import { neon } from "../lib/neonStyles";

const features = [
  {
    title: "30 dias de missão",
    description: "Uma trilha organizada para começar do zero e avançar todos os dias.",
  },
  {
    title: "Quizzes com feedback",
    description: "Teste seu entendimento e receba explicações quando errar.",
  },
  {
    title: "Assistente Alex",
    description: "Um mentor simples para explicar conceitos difíceis durante a aula.",
  },
  {
    title: "Certificado final",
    description: "Conclua a trilha e gere um texto para usar no portfólio.",
  },
];

const learningPath = [
  "Lógica de programação",
  "Python básico",
  "Dados e SQL",
  "APIs e automação",
];

export default function HomePage() {
  return (
    <main style={neon.page}>
      <section style={neon.container}>
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
            alignItems: "center",
            marginBottom: "48px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <p style={neon.eyebrow}>Suporte Tech 30 Dias</p>
            <strong
              style={{
                display: "block",
                marginTop: "10px",
                fontSize: "18px",
                color: neon.colors.muted,
              }}
            >
              Missão de transição para tecnologia
            </strong>
          </div>

          <nav style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a href="/dashboard" style={neon.buttonGhost}>
              Dashboard
            </a>
            <a href="/certificado" style={neon.buttonPrimary}>
              Certificado
            </a>
          </nav>
        </header>

        <section
          style={{
            ...neon.card,
            padding: "48px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "260px",
              height: "260px",
              borderRadius: "999px",
              background: "rgba(34,211,238,0.16)",
              filter: "blur(40px)",
              right: "-60px",
              top: "-80px",
            }}
          />

          <div
            style={{
              position: "relative",
              display: "grid",
              gridTemplateColumns: "minmax(0, 1.2fr) minmax(280px, 0.8fr)",
              gap: "36px",
              alignItems: "center",
            }}
          >
            <div>
              <p style={neon.eyebrow}>Missão principal</p>

              <h1
                style={{
                  fontSize: "64px",
                  lineHeight: 1,
                  marginTop: "18px",
                  marginBottom: "22px",
                  maxWidth: "780px",
                }}
              >
                Entre em tecnologia pelo caminho do{" "}
                <span style={{ color: neon.colors.cyan }}>suporte</span>.
              </h1>

              <p
                style={{
                  ...neon.muted,
                  fontSize: "20px",
                  maxWidth: "780px",
                }}
              >
                Aprenda lógica, Python, SQL, APIs e automação com exemplos reais
                de atendimento, help desk e melhoria de processos.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "14px",
                  flexWrap: "wrap",
                  marginTop: "30px",
                }}
              >
                <a href="/dashboard" style={neon.buttonPrimary}>
                  Iniciar missão
                </a>

                <a href="/aulas/dia-1" style={neon.buttonGhost}>
                  Ver primeira aula
                </a>
              </div>
            </div>

            <div style={neon.cardGreen}>
              <p style={neon.eyebrow}>Status da trilha</p>

              <h2
                style={{
                  fontSize: "34px",
                  lineHeight: 1.1,
                  marginTop: "14px",
                  marginBottom: "14px",
                }}
              >
                30 aulas para construir sua primeira base tech.
              </h2>

              <p style={neon.muted}>
                Uma experiência gamificada para estudar um pouco por dia, com
                progresso, missões e revisão constante.
              </p>

              <div style={{ marginTop: "22px", display: "grid", gap: "12px" }}>
                {learningPath.map((item, index) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "12px",
                      alignItems: "center",
                      padding: "14px",
                      borderRadius: "16px",
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    <span style={{ color: neon.colors.muted }}>{item}</span>
                    <strong style={{ color: neon.colors.green }}>
                      Semana {index + 1}
                    </strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "18px",
            marginTop: "28px",
          }}
        >
          {features.map((feature) => (
            <article key={feature.title} style={neon.card}>
              <p style={neon.eyebrow}>{feature.title}</p>
              <p style={{ ...neon.muted, marginBottom: 0 }}>
                {feature.description}
              </p>
            </article>
          ))}
        </section>

        <section
          style={{
            ...neon.card,
            marginTop: "28px",
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) auto",
            gap: "24px",
            alignItems: "center",
          }}
        >
          <div>
            <p style={neon.eyebrow}>Pronto para começar?</p>
            <h2 style={{ fontSize: "34px", margin: "10px 0" }}>
              Sua primeira missão está liberada.
            </h2>
            <p style={{ ...neon.muted, marginBottom: 0 }}>
              Comece pela aula 1, responda o quiz e acompanhe seu avanço pelo
              dashboard.
            </p>
          </div>

          <a href="/aulas/dia-1" style={neon.buttonSuccess}>
            Começar aula 1
          </a>
        </section>
      </section>
    </main>
  );
}