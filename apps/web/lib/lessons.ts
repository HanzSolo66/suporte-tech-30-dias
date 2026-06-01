export type LessonOption = {
  id: string;
  text: string;
  isCorrect: boolean;
  explanation: string;
};

export type Lesson = {
  slug: string;
  dayNumber: number;
  title: string;
  description: string;
  objective: string;
  summary: string;
  concepts: {
    title: string;
    text: string;
  }[];
  quiz: {
    title: string;
    options: LessonOption[];
  };
  alexHints: {
    keywords: string[];
    response: string;
  }[];
  closing: string;
};

export const lessons: Lesson[] = [
  {
    slug: "dia-1",
    dayNumber: 1,
    title: "Boas-vindas e avaliação inicial",
    description:
      "Hoje vamos entender seu ponto de partida e começar sua jornada em suporte com tecnologia de forma simples e prática.",
    objective:
      "Entender como a trilha funciona, como você vai evoluir por missões e por que tecnologia pode ajudar muito na área de atendimento e suporte.",
    summary:
      "Nesta trilha, você não vai estudar tecnologia de forma solta. Tudo será conectado com situações reais de atendimento: clientes, chamados, dúvidas, dados, automações e melhoria de processos.",
    concepts: [
      {
        title: "Tecnologia aplicada",
        text: "Você vai aprender tecnologia conectada a problemas reais de atendimento, suporte e melhoria de processos.",
      },
      {
        title: "Aprendizado por missões",
        text: "Cada aula tem explicação, prática, quiz, feedback e fechamento para consolidar o aprendizado.",
      },
      {
        title: "Evolução gradual",
        text: "A trilha começa do zero e avança aos poucos, respeitando seu ritmo de estudo.",
      },
    ],
    quiz: {
      title: "Qual é o objetivo principal desta trilha?",
      options: [
        {
          id: "a",
          text: "Decorar comandos difíceis",
          isCorrect: false,
          explanation:
            "Decorar comandos não é o foco. O mais importante é entender a lógica e aplicar tecnologia em situações reais.",
        },
        {
          id: "b",
          text: "Aplicar tecnologia em atendimento e suporte",
          isCorrect: true,
          explanation:
            "Isso mesmo. A trilha foi pensada para conectar tecnologia com problemas reais de atendimento, suporte, dados e automação.",
        },
        {
          id: "c",
          text: "Virar sênior em 30 dias",
          isCorrect: false,
          explanation:
            "Em 30 dias você pode criar uma base muito boa, mas virar sênior exige prática, projetos e experiência ao longo do tempo.",
        },
      ],
    },
    alexHints: [
      {
        keywords: ["lógica", "logica", "programação", "programacao"],
        response:
          "Entendi. Lógica de programação é como montar um passo a passo para resolver um problema. Pense em atendimento: se o cliente esqueceu a senha, você verifica o cadastro, confirma os dados e envia a recuperação. Isso já é lógica: condição, decisão e ação.",
      },
      {
        keywords: ["atendimento", "suporte", "cliente"],
        response:
          "Boa dúvida. A ideia da trilha é aproveitar sua experiência com atendimento para entrar em tecnologia. Você já entende pessoas, problemas e processos. Agora vamos somar ferramentas: lógica, Python, SQL e automações para melhorar o suporte.",
      },
    ],
    closing:
      "Você começou entendendo que tecnologia não precisa ser distante: ela pode nascer de problemas reais que você já conhece no atendimento.",
  },
  {
    slug: "dia-2",
    dayNumber: 2,
    title: "O que é lógica de programação?",
    description:
      "Hoje você vai aprender que programação começa antes do código: começa com a capacidade de organizar um problema em passos simples.",
    objective:
      "Entender que lógica de programação é a organização de passos para resolver um problema.",
    summary:
      "Lógica de programação é pensar em entrada, processamento e saída. Antes de escrever código, você entende o problema, organiza decisões e define uma sequência clara.",
    concepts: [
      {
        title: "Entrada",
        text: "A informação que você recebe. Exemplo: o problema relatado pelo cliente.",
      },
      {
        title: "Processamento",
        text: "O raciocínio que você usa para decidir o próximo passo.",
      },
      {
        title: "Saída",
        text: "O resultado final. Exemplo: senha recuperada, chamado aberto ou orientação enviada.",
      },
    ],
    quiz: {
      title: "O que é lógica de programação?",
      options: [
        {
          id: "a",
          text: "Uma forma de organizar passos para resolver um problema",
          isCorrect: true,
          explanation:
            "Exatamente. Lógica de programação é pensar em uma sequência de passos para chegar a um resultado.",
        },
        {
          id: "b",
          text: "Um programa específico que instala no computador",
          isCorrect: false,
          explanation:
            "Não. Lógica não é um programa. É uma forma de pensar e organizar instruções.",
        },
        {
          id: "c",
          text: "Uma linguagem usada apenas por programadores avançados",
          isCorrect: false,
          explanation:
            "Não. Lógica é base para iniciantes também. Antes de decorar linguagens, você aprende a pensar em passos.",
        },
      ],
    },
    alexHints: [
      {
        keywords: ["entrada", "processamento", "saída", "saida"],
        response:
          "Pense assim: entrada é o problema recebido, processamento é sua análise e saída é a resposta ou ação final. Em atendimento, isso acontece o tempo todo.",
      },
      {
        keywords: ["lógica", "logica", "passos"],
        response:
          "Lógica é organizar passos. Antes de programar, você precisa saber qual problema quer resolver e quais decisões precisam ser tomadas.",
      },
    ],
    closing:
      "Hoje você aprendeu que lógica é organizar passos. Antes de escrever código, você precisa entender o problema, pensar em decisões e definir uma sequência clara.",
  },
  {
    slug: "dia-3",
    dayNumber: 3,
    title: "Condições e decisões",
    description:
      "Hoje você vai entender como sistemas tomam decisões usando condições, como se, então e senão.",
    objective:
      "Aprender o conceito de condições e decisões, conectando isso com situações reais de atendimento.",
    summary:
      "Condições ajudam um sistema a escolher caminhos. Se uma informação atende a uma regra, uma ação acontece. Caso contrário, outra ação pode acontecer.",
    concepts: [
      {
        title: "Se",
        text: "Representa uma condição. Exemplo: se o cliente tem cadastro, continue o atendimento.",
      },
      {
        title: "Então",
        text: "Representa a ação quando a condição é verdadeira.",
      },
      {
        title: "Senão",
        text: "Representa o caminho alternativo quando a condição não é verdadeira.",
      },
    ],
    quiz: {
      title: "Qual exemplo representa uma condição?",
      options: [
        {
          id: "a",
          text: "Se o cliente tiver cadastro, liberar recuperação de senha",
          isCorrect: true,
          explanation:
            "Correto. Existe uma condição: o cliente ter cadastro. A ação depende disso.",
        },
        {
          id: "b",
          text: "Escrever qualquer comando sem pensar no problema",
          isCorrect: false,
          explanation:
            "Não. Programar exige entender o problema antes de escrever comandos.",
        },
        {
          id: "c",
          text: "Apenas decorar nomes de linguagens",
          isCorrect: false,
          explanation:
            "Não. Saber nomes de linguagens não significa entender condições e decisões.",
        },
      ],
    },
    alexHints: [
      {
        keywords: ["se", "então", "entao", "senão", "senao"],
        response:
          "Pense em atendimento: se o cliente confirma os dados, então você prossegue. Senão, você solicita nova validação. Isso é decisão lógica.",
      },
      {
        keywords: ["condição", "condicao", "decisão", "decisao"],
        response:
          "Uma condição é uma pergunta que o sistema faz para decidir o próximo caminho. Exemplo: o pagamento foi aprovado? Se sim, libera acesso. Se não, mostra aviso.",
      },
    ],
    closing:
      "Você aprendeu que condições permitem criar caminhos diferentes. Esse é um dos pilares para criar sistemas úteis.",
  },
];

export function getLessonBySlug(slug: string) {
  return lessons.find((lesson) => lesson.slug === slug);
}

export function getNextLesson(currentSlug: string) {
  const currentIndex = lessons.findIndex((lesson) => lesson.slug === currentSlug);
  return lessons[currentIndex + 1];
}

export function getPreviousLesson(currentSlug: string) {
  const currentIndex = lessons.findIndex((lesson) => lesson.slug === currentSlug);
  return lessons[currentIndex - 1];
}