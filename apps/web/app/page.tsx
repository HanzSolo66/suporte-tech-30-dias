const missions = [
  {
    title: "Missão 1",
    name: "Pensar como um analista",
    description:
      "Aprenda lógica, variáveis, condições e loops com exemplos de atendimento e suporte.",
  },
  {
    title: "Missão 2",
    name: "Resolver problemas com Python",
    description:
      "Crie pequenos scripts para organizar clientes, chamados e tarefas repetitivas.",
  },
  {
    title: "Missão 3",
    name: "Entender dados dos clientes",
    description:
      "Use SQL para consultar, filtrar e organizar informações importantes.",
  },
  {
    title: "Missão 4",
    name: "Automatizar tarefas reais",
    description:
      "Conecte APIs, arquivos e processos simples para ganhar produtividade.",
  },
];

export default function HomePage() {
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
      <section style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <p
          style={{
            color: "#22d3ee",
            fontWeight: 700,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
          }}
        >
          Suporte Tech 30 Dias
        </p>

        <h1
          style={{
            fontSize: "56px",
            lineHeight: "1.05",
            maxWidth: "850px",
            marginTop: "24px",
            marginBottom: "24px",
          }}
        >
          Construa sua primeira base em suporte com tecnologia.
        </h1>

        <p
          style={{
            color: "#cbd5e1",
            fontSize: "20px",
            lineHeight: "1.7",
            maxWidth: "760px",
          }}
        >
          Uma trilha gamificada para aprender lógica, Python, SQL, APIs e
          automação com exemplos reais de atendimento, help desk e suporte
          técnico.
        </p>

        <div style={{ display: "flex", gap: "16px", marginTop: "32px" }}>
          <a
            href="#trilha"
            style={{
              background: "#22d3ee",
              color: "#020617",
              padding: "16px 24px",
              borderRadius: "16px",
              fontWeight: 800,
              textDecoration: "none",
            }}
          >
            Começar missão
          </a>

          <a
            href="#recursos"
            style={{
              color: "white",
              padding: "16px 24px",
              borderRadius: "16px",
              fontWeight: 800,
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            Ver recursos
          </a>
        </div>

        <section
          id="trilha"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
            marginTop: "70px",
          }}
        >
          {missions.map((mission) => (
            <article
              key={mission.title}
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "24px",
                padding: "24px",
              }}
            >
              <p style={{ color: "#22d3ee", fontWeight: 800 }}>
                {mission.title}
              </p>
              <h2 style={{ fontSize: "24px", marginTop: "12px" }}>
                {mission.name}
              </h2>
              <p style={{ color: "#cbd5e1", lineHeight: "1.6" }}>
                {mission.description}
              </p>
            </article>
          ))}
        </section>

        <section
          id="recursos"
          style={{
            marginTop: "60px",
            background: "rgba(34,211,238,0.12)",
            border: "1px solid rgba(34,211,238,0.3)",
            borderRadius: "28px",
            padding: "32px",
          }}
        >
          <h2 style={{ fontSize: "32px", marginBottom: "12px" }}>
            Assistente Alex
          </h2>
          <p style={{ color: "#cbd5e1", lineHeight: "1.7", fontSize: "18px" }}>
            Um mentor de suporte tech para explicar erros, sugerir revisões,
            adaptar exemplos ao seu objetivo de carreira e ajudar você a não
            desistir quando um conceito parecer difícil.
          </p>
        </section>
      </section>
    </main>
  );
}