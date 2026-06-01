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
        keywords: ["trilha", "objetivo", "começar", "comecar"],
        response:
          "A trilha foi criada para você aprender tecnologia conectando com sua experiência em atendimento. A ideia é evoluir com exemplos práticos, sem precisar começar decorando termos difíceis.",
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
  {
    slug: "dia-4",
    dayNumber: 4,
    title: "Variáveis e informações",
    description:
      "Hoje você vai entender como guardar informações para usar depois, como nome, status, idade, preço ou número de chamado.",
    objective:
      "Aprender o conceito de variável como um espaço para armazenar dados.",
    summary:
      "Variáveis são nomes que usamos para guardar informações. Em sistemas de suporte, elas podem representar o nome do cliente, o status do chamado ou o tipo de problema.",
    concepts: [
      {
        title: "Variável",
        text: "Um nome usado para guardar uma informação.",
      },
      {
        title: "Valor",
        text: "A informação guardada dentro da variável.",
      },
      {
        title: "Atualização",
        text: "Uma variável pode mudar de valor conforme o sistema evolui.",
      },
    ],
    quiz: {
      title: "Qual opção representa melhor uma variável?",
      options: [
        {
          id: "a",
          text: "clienteNome = 'Matheus'",
          isCorrect: true,
          explanation:
            "Correto. clienteNome é a variável e 'Matheus' é o valor guardado nela.",
        },
        {
          id: "b",
          text: "Um computador ligado",
          isCorrect: false,
          explanation:
            "Não. Isso é um objeto físico, não uma variável.",
        },
        {
          id: "c",
          text: "Uma senha esquecida",
          isCorrect: false,
          explanation:
            "A senha pode ser um dado, mas a variável seria o nome usado para guardar esse dado.",
        },
      ],
    },
    alexHints: [
      {
        keywords: ["variável", "variavel", "valor"],
        response:
          "Variável é como uma etiqueta em uma gaveta. A etiqueta diz o que tem dentro, e o conteúdo pode mudar.",
      },
    ],
    closing:
      "Você aprendeu que variáveis ajudam sistemas a guardar e reutilizar informações importantes.",
  },
  {
    slug: "dia-5",
    dayNumber: 5,
    title: "Tipos de dados",
    description:
      "Hoje você vai conhecer tipos de informação que aparecem em sistemas: texto, número, verdadeiro ou falso e listas.",
    objective:
      "Entender que cada informação tem um tipo e que isso influencia como o sistema trabalha.",
    summary:
      "Tipos de dados ajudam o sistema a entender como tratar uma informação. Um nome é texto, uma idade é número e uma resposta sim/não pode ser verdadeiro ou falso.",
    concepts: [
      {
        title: "Texto",
        text: "Usado para nomes, mensagens, descrições e observações.",
      },
      {
        title: "Número",
        text: "Usado para idade, quantidade, preço, prazo ou contagem.",
      },
      {
        title: "Booleano",
        text: "Representa verdadeiro ou falso, como chamadoResolvido = true.",
      },
    ],
    quiz: {
      title:
        "Qual tipo combina melhor com a informação 'chamado resolvido: sim ou não'?",
      options: [
        {
          id: "a",
          text: "Booleano",
          isCorrect: true,
          explanation: "Correto. É uma informação de verdadeiro ou falso.",
        },
        {
          id: "b",
          text: "Texto longo obrigatório",
          isCorrect: false,
          explanation:
            "Pode até ser descrito em texto, mas o tipo mais direto é verdadeiro ou falso.",
        },
        {
          id: "c",
          text: "Imagem",
          isCorrect: false,
          explanation:
            "Não. Uma imagem não representa bem uma decisão sim/não.",
        },
      ],
    },
    alexHints: [
      {
        keywords: ["tipo", "texto", "número", "numero", "booleano"],
        response:
          "Tipos de dados são categorias. Nome é texto, quantidade é número e algo como ativo/inativo pode ser verdadeiro ou falso.",
      },
    ],
    closing:
      "Você aprendeu que entender tipos de dados evita confusão e ajuda a construir sistemas mais confiáveis.",
  },
  {
    slug: "dia-6",
    dayNumber: 6,
    title: "Listas e coleções",
    description:
      "Hoje você vai aprender como sistemas organizam vários itens juntos, como uma lista de chamados ou clientes.",
    objective:
      "Entender o conceito de lista como uma coleção de informações.",
    summary:
      "Listas permitem armazenar vários itens em sequência. Em suporte, uma lista pode guardar chamados abertos, clientes atendidos ou etapas de um processo.",
    concepts: [
      {
        title: "Lista",
        text: "Conjunto de itens organizados.",
      },
      {
        title: "Item",
        text: "Cada elemento dentro da lista.",
      },
      {
        title: "Percorrer",
        text: "Olhar item por item para realizar uma ação.",
      },
    ],
    quiz: {
      title: "Qual exemplo representa uma lista?",
      options: [
        {
          id: "a",
          text: "['senha', 'acesso', 'pagamento']",
          isCorrect: true,
          explanation:
            "Correto. É uma lista com três tipos de assunto.",
        },
        {
          id: "b",
          text: "cliente = 'Ana'",
          isCorrect: false,
          explanation:
            "Isso representa uma única variável com um texto.",
        },
        {
          id: "c",
          text: "computador ligado",
          isCorrect: false,
          explanation:
            "Isso descreve uma situação, não uma lista.",
        },
      ],
    },
    alexHints: [
      {
        keywords: ["lista", "coleção", "colecao", "itens"],
        response:
          "Uma lista é como uma fila de chamados. Você pode olhar um por um, contar quantos existem ou filtrar por status.",
      },
    ],
    closing:
      "Você aprendeu que listas ajudam a organizar muitos dados de uma vez.",
  },
  {
    slug: "dia-7",
    dayNumber: 7,
    title: "Revisão da primeira semana",
    description:
      "Hoje vamos revisar lógica, condições, variáveis, tipos e listas com exemplos de suporte.",
    objective:
      "Consolidar os principais conceitos da primeira semana.",
    summary:
      "Você já conhece a base da programação: pensar em passos, tomar decisões, guardar informações e organizar conjuntos de dados.",
    concepts: [
      {
        title: "Lógica",
        text: "Organizar passos para resolver problemas.",
      },
      {
        title: "Dados",
        text: "Informações usadas pelo sistema.",
      },
      {
        title: "Decisões",
        text: "Caminhos diferentes conforme uma condição.",
      },
    ],
    quiz: {
      title: "Qual conjunto resume melhor a base aprendida?",
      options: [
        {
          id: "a",
          text: "Lógica, dados, condições e listas",
          isCorrect: true,
          explanation:
            "Correto. Esses são pilares importantes da base inicial.",
        },
        {
          id: "b",
          text: "Apenas decorar comandos",
          isCorrect: false,
          explanation:
            "Não. A base é entender conceitos, não apenas decorar comandos.",
        },
        {
          id: "c",
          text: "Ignorar erros",
          isCorrect: false,
          explanation:
            "Não. Erros são parte do aprendizado e ajudam a melhorar.",
        },
      ],
    },
    alexHints: [
      {
        keywords: ["revisão", "revisao", "semana"],
        response:
          "Revise pensando em exemplos de atendimento: problema recebido, decisão tomada, dados guardados e lista de chamados acompanhada.",
      },
    ],
    closing:
      "Você concluiu a primeira semana de base lógica. Agora está pronto para começar a aplicar isso com Python.",
  },
];

export function getLessonBySlug(slug: string) {
  return lessons.find((lesson) => lesson.slug === slug);
}

export function getNextLesson(currentSlug: string) {
  const currentIndex = lessons.findIndex(
    (lesson) => lesson.slug === currentSlug
  );

  return lessons[currentIndex + 1];
}

export function getPreviousLesson(currentSlug: string) {
  const currentIndex = lessons.findIndex(
    (lesson) => lesson.slug === currentSlug
  );

  return lessons[currentIndex - 1];
}