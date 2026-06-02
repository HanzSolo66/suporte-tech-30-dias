import { neon } from "../lib/neonStyles";

const features = [
  {
    title: "Trilha prática de 30 dias",
    description:
      "Uma jornada guiada para sair do zero e construir base em lógica, Python, dados, APIs e automação.",
  },
  {
    title: "Aprendizado com feedback",
    description:
      "Cada aula tem quiz, explicação do erro e reforço do conceito para transformar dúvida em progresso.",
  },
  {
    title: "Assistente Alex",
    description:
      "Um mentor de apoio dentro das aulas para explicar conceitos com linguagem simples e exemplos de suporte.",
  },
  {
    title: "Portfólio real",
    description:
      "Ao final da trilha, você tem um projeto apresentável, certificado e texto pronto para LinkedIn ou GitHub.",
  },
];

const learningPath = [
  "Semana 1 · Base lógica",
  "Semana 2 · Python básico",
  "Semana 3 · Dados e SQL",
  "Semana 4 · APIs e automação",
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
              Um projeto de transição de carreira para tecnologia
            </strong>
          </div>

          <nav style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a href="/dashboard" style={neon.buttonGhost}>
              Ver dashboard
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
              width: "280px",
              height: "280px",
              borderRadius: "999px",
              background: "rgba(34,211,238,0.16)",
              filter: "blur(42px)",
              right: "-70px",
              top: "-90px",
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
                  maxWidth: "820px",
                }}
              >
                Aprenda tecnologia usando sua experiência em{" "}
                <span style={{ color: neon.colors.cyan }}>atendimento</span>.
              </h1>

              <p
                style={{
                  ...neon.muted,
                  fontSize: "20px",
                  maxWidth: "780px",
                }}
              >
                Uma aplicação gamificada criada para quem está em transição de
                carreira e quer começar por um caminho prático: suporte,
                processos, dados, automações e resolução de problemas reais.
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
              <p style={neon.eyebrow}>Por que este projeto existe?</p>

              <h2
                style={{
                  fontSize: "34px",
                  lineHeight: 1.1,
                  marginTop: "14px",
                  marginBottom: "14px",
                }}
              >
                Para transformar experiência com pessoas em habilidade tech.
              </h2>

              <p style={neon.muted}>
                Atendimento ensina escuta, diagnóstico, organização e resolução
                de problemas. Este projeto conecta essas habilidades com lógica,
                programação, dados e automação.
              </p>

              <div style={{ marginTop: "22px", display: "grid", gap: "12px" }}>
                {learningPath.map((item) => (
                  <div
                    key={item}
                    style={{
                      padding: "14px",
                      borderRadius: "16px",
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    <strong style={{ color: neon.colors.green }}>{item}</strong>
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
            <p style={neon.eyebrow}>Projeto de portfólio</p>
            <h2 style={{ fontSize: "34px", margin: "10px 0" }}>
              Um app para estudar, praticar e apresentar.
            </h2>
            <p style={{ ...neon.muted, marginBottom: 0 }}>
              Este projeto demonstra conceitos de Next.js, React, TypeScript,
              rotas dinâmicas, estado, localStorage, dashboard, gamificação e
              experiência do usuário.
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