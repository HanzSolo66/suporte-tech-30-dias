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
  {
    slug: "dia-8",
    dayNumber: 8,
    title: "Primeiros passos com Python",
    description:
      "Hoje você vai conhecer Python como uma linguagem simples para começar a transformar lógica em código.",
    objective:
      "Entender para que serve Python e por que ele é uma boa linguagem para iniciar na tecnologia.",
    summary:
      "Python é uma linguagem de programação muito usada por ser clara, legível e versátil. Ela pode ser usada para automações, análise de dados, APIs, scripts e ferramentas internas.",
    concepts: [
      {
        title: "Python",
        text: "Uma linguagem de programação conhecida por ser amigável para iniciantes e poderosa para projetos reais.",
      },
      {
        title: "Código",
        text: "Conjunto de instruções que damos ao computador para executar uma tarefa.",
      },
      {
        title: "Script",
        text: "Um pequeno programa criado para automatizar ou resolver uma tarefa específica.",
      },
    ],
    quiz: {
      title: "Por que Python é uma boa escolha para começar?",
      options: [
        {
          id: "a",
          text: "Porque é uma linguagem clara e muito usada em projetos reais",
          isCorrect: true,
          explanation:
            "Correto. Python é bastante usado e costuma ser mais legível para quem está começando.",
        },
        {
          id: "b",
          text: "Porque não exige lógica nenhuma",
          isCorrect: false,
          explanation:
            "Não. Python facilita a escrita, mas você ainda precisa usar lógica para resolver problemas.",
        },
        {
          id: "c",
          text: "Porque serve apenas para criar jogos",
          isCorrect: false,
          explanation:
            "Não. Python pode ser usado em várias áreas, como automação, dados, APIs e ferramentas internas.",
        },
      ],
    },
    alexHints: [
      {
        keywords: ["python", "linguagem", "começar", "comecar"],
        response:
          "Python é uma ótima primeira linguagem porque o código costuma parecer mais próximo do português/inglês comum. Isso ajuda você a focar na lógica antes de se preocupar com sintaxes muito complexas.",
      },
    ],
    closing:
      "Você conheceu Python e entendeu por que ele é uma boa porta de entrada para transformar lógica em soluções reais.",
  },
  {
    slug: "dia-9",
    dayNumber: 9,
    title: "Variáveis em Python",
    description:
      "Hoje você vai ver como guardar informações em Python usando variáveis simples.",
    objective:
      "Aprender a criar variáveis em Python para armazenar textos, números e status.",
    summary:
      "Em Python, criamos variáveis usando um nome, o sinal de igual e um valor. Exemplo: cliente = 'Ana'. Isso permite reutilizar informações no código.",
    concepts: [
      {
        title: "Atribuição",
        text: "É o ato de colocar um valor dentro de uma variável usando o sinal de igual.",
      },
      {
        title: "Nome de variável",
        text: "Deve representar bem a informação guardada, como nomeCliente ou statusChamado.",
      },
      {
        title: "Valor",
        text: "É a informação armazenada, como um texto, número ou verdadeiro/falso.",
      },
    ],
    quiz: {
      title: "Qual exemplo cria uma variável em Python?",
      options: [
        {
          id: "a",
          text: "status_chamado = 'aberto'",
          isCorrect: true,
          explanation:
            "Correto. Esse exemplo cria uma variável chamada status_chamado com o valor 'aberto'.",
        },
        {
          id: "b",
          text: "abrir computador agora",
          isCorrect: false,
          explanation:
            "Isso é uma frase comum, não uma instrução válida de variável em Python.",
        },
        {
          id: "c",
          text: "variável sem nome",
          isCorrect: false,
          explanation:
            "Uma variável precisa ter nome e normalmente recebe um valor.",
        },
      ],
    },
    alexHints: [
      {
        keywords: ["variável", "variavel", "python", "igual"],
        response:
          "Em Python, pense no sinal de igual como 'guarda isso aqui'. Exemplo: prioridade = 'alta' guarda o texto alta dentro da variável prioridade.",
      },
    ],
    closing:
      "Você aprendeu a criar variáveis em Python, uma habilidade essencial para qualquer automação ou sistema.",
  },
  {
    slug: "dia-10",
    dayNumber: 10,
    title: "Condições em Python",
    description:
      "Hoje você vai transformar decisões em código usando if, else e exemplos de suporte.",
    objective:
      "Entender como escrever condições simples em Python.",
    summary:
      "Em Python, usamos if para testar uma condição e else para definir o que acontece quando a condição não é verdadeira.",
    concepts: [
      {
        title: "if",
        text: "Usado para verificar se uma condição é verdadeira.",
      },
      {
        title: "else",
        text: "Usado para indicar o caminho alternativo.",
      },
      {
        title: "Indentação",
        text: "Espaços no início da linha que mostram quais comandos pertencem ao bloco da condição.",
      },
    ],
    quiz: {
      title: "O que o if faz em Python?",
      options: [
        {
          id: "a",
          text: "Verifica uma condição para decidir o próximo passo",
          isCorrect: true,
          explanation:
            "Correto. O if permite que o programa tome decisões.",
        },
        {
          id: "b",
          text: "Apaga automaticamente todos os dados",
          isCorrect: false,
          explanation:
            "Não. O if não apaga dados por si só. Ele apenas avalia uma condição.",
        },
        {
          id: "c",
          text: "Serve apenas para mudar cor de tela",
          isCorrect: false,
          explanation:
            "Não. O if é usado para decisões em vários tipos de programa.",
        },
      ],
    },
    alexHints: [
      {
        keywords: ["if", "else", "condição", "condicao", "python"],
        response:
          "Pense no if como uma pergunta: 'isso é verdadeiro?'. Se sim, executa um caminho. Se não, o else cuida do plano B.",
      },
    ],
    closing:
      "Você aprendeu a representar decisões em Python, conectando o raciocínio de atendimento com código.",
  },
  {
    slug: "dia-11",
    dayNumber: 11,
    title: "Listas em Python",
    description:
      "Hoje você vai organizar vários dados em uma lista, como chamados, clientes ou categorias de atendimento.",
    objective:
      "Aprender o conceito de listas em Python e como elas ajudam a organizar informações.",
    summary:
      "Listas em Python armazenam vários valores em uma única variável. Elas são úteis quando precisamos trabalhar com muitos itens relacionados.",
    concepts: [
      {
        title: "Lista",
        text: "Estrutura usada para guardar vários valores juntos.",
      },
      {
        title: "Índice",
        text: "A posição de um item dentro da lista.",
      },
      {
        title: "Adicionar item",
        text: "Uma lista pode receber novos itens conforme o programa roda.",
      },
    ],
    quiz: {
      title: "Qual exemplo representa uma lista em Python?",
      options: [
        {
          id: "a",
          text: "chamados = ['aberto', 'em análise', 'resolvido']",
          isCorrect: true,
          explanation:
            "Correto. Os colchetes indicam uma lista com vários itens.",
        },
        {
          id: "b",
          text: "chamado = 'aberto'",
          isCorrect: false,
          explanation:
            "Isso é uma variável com um único texto, não uma lista.",
        },
        {
          id: "c",
          text: "if chamado aberto",
          isCorrect: false,
          explanation:
            "Essa frase não representa uma lista válida em Python.",
        },
      ],
    },
    alexHints: [
      {
        keywords: ["lista", "listas", "python", "índice", "indice"],
        response:
          "Uma lista é como uma tabela simples de uma coluna. Você consegue guardar vários itens e depois olhar cada um deles quando precisar.",
      },
    ],
    closing:
      "Você aprendeu que listas permitem trabalhar com vários dados de uma vez, algo muito comum em suporte e automação.",
  },
  {
    slug: "dia-12",
    dayNumber: 12,
    title: "Laços de repetição",
    description:
      "Hoje você vai entender como repetir uma ação várias vezes sem escrever o mesmo código repetidamente.",
    objective:
      "Aprender o conceito de repetição usando loops.",
    summary:
      "Laços de repetição servem para executar uma ação várias vezes. Em suporte, isso pode ser usado para percorrer uma lista de chamados, clientes ou mensagens.",
    concepts: [
      {
        title: "Loop",
        text: "Estrutura que repete uma ação enquanto houver itens ou enquanto uma condição for verdadeira.",
      },
      {
        title: "for",
        text: "Muito usado para percorrer listas item por item.",
      },
      {
        title: "Repetição",
        text: "Evita escrever a mesma instrução muitas vezes manualmente.",
      },
    ],
    quiz: {
      title: "Para que serve um loop?",
      options: [
        {
          id: "a",
          text: "Para repetir ações de forma automática",
          isCorrect: true,
          explanation:
            "Correto. Loops ajudam a repetir ações sem duplicar código.",
        },
        {
          id: "b",
          text: "Para impedir que o código funcione",
          isCorrect: false,
          explanation:
            "Não. Loops são úteis, mas precisam ser bem escritos para não causar problemas.",
        },
        {
          id: "c",
          text: "Para transformar texto em imagem",
          isCorrect: false,
          explanation:
            "Não. Loop é sobre repetição de ações.",
        },
      ],
    },
    alexHints: [
      {
        keywords: ["loop", "for", "repetição", "repeticao"],
        response:
          "Imagine uma lista de chamados. Em vez de olhar um por um manualmente, o loop faz isso para você: pega o primeiro, depois o segundo, depois o terceiro, até acabar.",
      },
    ],
    closing:
      "Você aprendeu que loops ajudam a automatizar tarefas repetitivas, uma habilidade essencial para suporte técnico.",
  },
  {
    slug: "dia-13",
    dayNumber: 13,
    title: "Funções",
    description:
      "Hoje você vai aprender a organizar código em blocos reutilizáveis chamados funções.",
    objective:
      "Entender o que é uma função e por que ela evita repetição no código.",
    summary:
      "Funções são blocos de código com nome. Elas permitem executar uma tarefa sempre que forem chamadas, deixando o código mais organizado.",
    concepts: [
      {
        title: "Função",
        text: "Bloco de código criado para executar uma tarefa específica.",
      },
      {
        title: "Parâmetro",
        text: "Informação que uma função pode receber para trabalhar.",
      },
      {
        title: "Retorno",
        text: "Resultado que uma função pode devolver depois de processar algo.",
      },
    ],
    quiz: {
      title: "Qual é a principal vantagem de usar funções?",
      options: [
        {
          id: "a",
          text: "Reutilizar uma lógica sem repetir o mesmo código várias vezes",
          isCorrect: true,
          explanation:
            "Correto. Funções ajudam a reaproveitar código e organizar melhor o programa.",
        },
        {
          id: "b",
          text: "Esconder erros sem corrigir",
          isCorrect: false,
          explanation:
            "Não. Funções não servem para esconder erros, e sim para organizar código.",
        },
        {
          id: "c",
          text: "Fazer o computador desligar sozinho",
          isCorrect: false,
          explanation:
            "Não. Uma função pode executar várias tarefas, mas esse não é seu objetivo principal.",
        },
      ],
    },
    alexHints: [
      {
        keywords: ["função", "funcao", "parâmetro", "parametro", "retorno"],
        response:
          "Função é como um procedimento de atendimento. Você cria um passo a passo uma vez e pode repetir sempre que aquele tipo de situação acontecer.",
      },
    ],
    closing:
      "Você aprendeu que funções deixam o código mais organizado, reutilizável e fácil de manter.",
  },
  {
    slug: "dia-14",
    dayNumber: 14,
    title: "Revisão de Python básico",
    description:
      "Hoje vamos revisar variáveis, condições, listas, loops e funções com foco em situações reais de suporte.",
    objective:
      "Consolidar a base de Python antes de avançar para dados e automações.",
    summary:
      "Nesta semana você começou a transformar lógica em código com Python. Aprendeu a guardar dados, tomar decisões, organizar listas, repetir ações e criar funções.",
    concepts: [
      {
        title: "Variáveis",
        text: "Guardam informações para uso posterior.",
      },
      {
        title: "Condições",
        text: "Permitem criar decisões no código.",
      },
      {
        title: "Funções",
        text: "Organizam tarefas em blocos reutilizáveis.",
      },
    ],
    quiz: {
      title: "Qual conjunto resume melhor o Python básico aprendido?",
      options: [
        {
          id: "a",
          text: "Variáveis, condições, listas, loops e funções",
          isCorrect: true,
          explanation:
            "Correto. Esses conceitos formam uma boa base inicial em Python.",
        },
        {
          id: "b",
          text: "Apenas trocar a cor da tela",
          isCorrect: false,
          explanation:
            "Não. Python básico envolve lógica, dados, decisões e organização de código.",
        },
        {
          id: "c",
          text: "Só copiar códigos prontos sem entender",
          isCorrect: false,
          explanation:
            "Não. O objetivo é entender o raciocínio por trás do código.",
        },
      ],
    },
    alexHints: [
      {
        keywords: ["revisão", "revisao", "python", "semana"],
        response:
          "Revise Python pensando em tarefas de suporte: guardar dados do cliente, decidir o próximo passo, percorrer uma lista de chamados e criar funções para processos repetidos.",
      },
    ],
    closing:
      "Você concluiu a base inicial de Python. Agora já consegue entender a lógica por trás de muitas automações simples.",
  },
  {
    slug: "dia-15",
    dayNumber: 15,
    title: "Introdução a dados",
    description:
      "Hoje você vai entender o que são dados e por que eles são importantes para atendimento, suporte e tomada de decisão.",
    objective:
      "Compreender o papel dos dados em sistemas, relatórios e melhorias de atendimento.",
    summary:
      "Dados são informações organizadas que ajudam empresas a entender problemas, medir resultados e tomar decisões melhores. Em suporte, dados aparecem em chamados, avaliações, tempos de resposta e categorias de problema.",
    concepts: [
      {
        title: "Dados",
        text: "Informações que podem ser armazenadas, consultadas e analisadas.",
      },
      {
        title: "Registro",
        text: "Uma linha de informação sobre algo, como um chamado ou cliente.",
      },
      {
        title: "Indicador",
        text: "Uma medida que ajuda a acompanhar desempenho, como tempo médio de atendimento.",
      },
    ],
    quiz: {
      title: "Qual exemplo representa melhor um dado em suporte?",
      options: [
        {
          id: "a",
          text: "Tempo médio de resposta de um chamado",
          isCorrect: true,
          explanation:
            "Correto. Esse dado pode ser medido, acompanhado e usado para melhorar o atendimento.",
        },
        {
          id: "b",
          text: "Apenas uma opinião sem registro",
          isCorrect: false,
          explanation:
            "Uma opinião pode ser útil, mas dado precisa estar registrado de forma que possa ser consultado ou analisado.",
        },
        {
          id: "c",
          text: "Um botão colorido na tela",
          isCorrect: false,
          explanation:
            "O botão é parte da interface. O dado seria uma informação armazenada ou analisada.",
        },
      ],
    },
    alexHints: [
      {
        keywords: ["dados", "indicador", "registro", "relatório", "relatorio"],
        response:
          "Pense em dados como rastros do atendimento. Cada chamado, tempo de resposta e avaliação ajuda a entender onde melhorar.",
      },
    ],
    closing:
      "Você aprendeu que dados são fundamentais para transformar atendimento em melhoria contínua.",
  },
  {
    slug: "dia-16",
    dayNumber: 16,
    title: "Tabelas e estrutura de dados",
    description:
      "Hoje você vai entender como informações podem ser organizadas em tabelas, linhas e colunas.",
    objective:
      "Aprender a enxergar dados em formato de tabela, como acontece em planilhas e bancos de dados.",
    summary:
      "Tabelas organizam dados em linhas e colunas. Cada linha representa um registro, e cada coluna representa uma característica daquele registro.",
    concepts: [
      {
        title: "Tabela",
        text: "Estrutura que organiza informações em linhas e colunas.",
      },
      {
        title: "Linha",
        text: "Representa um registro, como um chamado específico.",
      },
      {
        title: "Coluna",
        text: "Representa um tipo de informação, como status, prioridade ou data.",
      },
    ],
    quiz: {
      title: "Em uma tabela de chamados, o que uma linha normalmente representa?",
      options: [
        {
          id: "a",
          text: "Um chamado específico",
          isCorrect: true,
          explanation:
            "Correto. Cada linha costuma representar um registro, como um chamado.",
        },
        {
          id: "b",
          text: "Todas as empresas do mundo",
          isCorrect: false,
          explanation:
            "Não. Uma linha representa um registro específico dentro daquela tabela.",
        },
        {
          id: "c",
          text: "A cor do site",
          isCorrect: false,
          explanation:
            "A cor do site é configuração visual, não uma linha de dados.",
        },
      ],
    },
    alexHints: [
      {
        keywords: ["tabela", "linha", "coluna", "planilha"],
        response:
          "Imagine uma planilha de chamados: cada linha é um chamado, e cada coluna mostra algo sobre ele, como cliente, status, prioridade e data.",
      },
    ],
    closing:
      "Você aprendeu a ler dados em tabelas, uma base importante para SQL, relatórios e análise.",
  },
  {
    slug: "dia-17",
    dayNumber: 17,
    title: "Introdução a SQL",
    description:
      "Hoje você vai conhecer SQL, a linguagem usada para consultar dados em bancos de dados.",
    objective:
      "Entender para que serve SQL e como ele ajuda a buscar informações organizadas.",
    summary:
      "SQL é usado para conversar com bancos de dados. Com ele, podemos buscar, filtrar, ordenar e analisar informações armazenadas em tabelas.",
    concepts: [
      {
        title: "SQL",
        text: "Linguagem usada para consultar e manipular dados em bancos de dados relacionais.",
      },
      {
        title: "Banco de dados",
        text: "Local onde informações são armazenadas de forma organizada.",
      },
      {
        title: "Consulta",
        text: "Pedido feito ao banco para trazer informações específicas.",
      },
    ],
    quiz: {
      title: "Para que serve SQL?",
      options: [
        {
          id: "a",
          text: "Consultar e manipular dados em bancos de dados",
          isCorrect: true,
          explanation:
            "Correto. SQL é muito usado para buscar informações organizadas em tabelas.",
        },
        {
          id: "b",
          text: "Somente desenhar telas bonitas",
          isCorrect: false,
          explanation:
            "Não. SQL é voltado a dados, não à aparência visual da interface.",
        },
        {
          id: "c",
          text: "Substituir completamente o atendimento humano",
          isCorrect: false,
          explanation:
            "Não. SQL ajuda a analisar dados, mas não substitui todo o atendimento humano.",
        },
      ],
    },
    alexHints: [
      {
        keywords: ["sql", "banco", "consulta", "dados"],
        response:
          "Pense no SQL como uma pergunta bem organizada para uma base de dados. Exemplo: 'quais chamados estão abertos?'",
      },
    ],
    closing:
      "Você conheceu SQL e entendeu como ele ajuda a buscar respostas dentro de grandes volumes de dados.",
  },
  {
    slug: "dia-18",
    dayNumber: 18,
    title: "Filtrando dados com SQL",
    description:
      "Hoje você vai entender como filtrar informações para encontrar exatamente o que precisa.",
    objective:
      "Aprender o conceito de filtro em consultas de dados.",
    summary:
      "Filtros ajudam a reduzir uma lista grande de dados para mostrar apenas o que atende a uma condição, como chamados abertos ou clientes de uma cidade específica.",
    concepts: [
      {
        title: "Filtro",
        text: "Regra usada para mostrar apenas dados que atendem a uma condição.",
      },
      {
        title: "WHERE",
        text: "Comando usado em SQL para aplicar filtros.",
      },
      {
        title: "Condição",
        text: "Critério que define quais registros devem aparecer.",
      },
    ],
    quiz: {
      title: "Qual consulta representa melhor a ideia de filtro?",
      options: [
        {
          id: "a",
          text: "Mostrar apenas chamados com status aberto",
          isCorrect: true,
          explanation:
            "Correto. Esse é um filtro baseado na condição status aberto.",
        },
        {
          id: "b",
          text: "Mostrar tudo sem critério nenhum",
          isCorrect: false,
          explanation:
            "Isso não é filtro. Filtrar significa reduzir os dados com uma regra.",
        },
        {
          id: "c",
          text: "Apagar todos os chamados sem conferir",
          isCorrect: false,
          explanation:
            "Não. Filtrar é consultar dados, não apagar informações.",
        },
      ],
    },
    alexHints: [
      {
        keywords: ["where", "filtro", "filtrar", "condição", "condicao"],
        response:
          "Filtro é como procurar no sistema apenas o que importa naquele momento. Exemplo: ver só chamados abertos ou só atendimentos atrasados.",
      },
    ],
    closing:
      "Você aprendeu que filtros são essenciais para encontrar dados relevantes rapidamente.",
  },
  {
    slug: "dia-19",
    dayNumber: 19,
    title: "Ordenação e prioridades",
    description:
      "Hoje você vai entender como ordenar dados por prioridade, data, tempo ou importância.",
    objective:
      "Aprender por que ordenação ajuda a transformar dados em ação.",
    summary:
      "Ordenar dados permite ver primeiro o que é mais urgente, recente, antigo, caro, frequente ou importante. Em suporte, isso ajuda a priorizar atendimentos.",
    concepts: [
      {
        title: "Ordenação",
        text: "Organização dos dados em uma sequência específica.",
      },
      {
        title: "Crescente",
        text: "Ordem do menor para o maior, ou do mais antigo para o mais recente.",
      },
      {
        title: "Decrescente",
        text: "Ordem do maior para o menor, ou do mais recente para o mais antigo.",
      },
    ],
    quiz: {
      title: "Por que ordenar chamados pode ajudar uma equipe de suporte?",
      options: [
        {
          id: "a",
          text: "Para priorizar os mais urgentes ou mais antigos",
          isCorrect: true,
          explanation:
            "Correto. Ordenar ajuda a decidir o que deve receber atenção primeiro.",
        },
        {
          id: "b",
          text: "Para esconder problemas importantes",
          isCorrect: false,
          explanation:
            "Não. A ordenação deve ajudar a enxergar prioridades, não esconder informações.",
        },
        {
          id: "c",
          text: "Para impedir que os dados sejam analisados",
          isCorrect: false,
          explanation:
            "Não. Ordenar facilita a análise dos dados.",
        },
      ],
    },
    alexHints: [
      {
        keywords: ["ordenar", "ordenação", "ordenacao", "prioridade"],
        response:
          "Ordenar é colocar os dados em uma fila inteligente. Em suporte, você pode ordenar por urgência, data de abertura ou tempo parado.",
      },
    ],
    closing:
      "Você aprendeu que ordenar dados ajuda a equipe a tomar decisões melhores e agir com prioridade.",
  },
  {
    slug: "dia-20",
    dayNumber: 20,
    title: "Métricas de atendimento",
    description:
      "Hoje você vai conhecer métricas que ajudam a avaliar qualidade e eficiência no suporte.",
    objective:
      "Entender métricas comuns de atendimento e como elas mostram oportunidades de melhoria.",
    summary:
      "Métricas são medidas usadas para acompanhar desempenho. Em atendimento, elas ajudam a entender volume, tempo, satisfação, resolução e gargalos.",
    concepts: [
      {
        title: "Tempo médio de resposta",
        text: "Tempo que a equipe leva para responder um cliente.",
      },
      {
        title: "Tempo médio de resolução",
        text: "Tempo necessário para resolver um problema.",
      },
      {
        title: "Satisfação",
        text: "Indicador que mostra como o cliente avaliou o atendimento.",
      },
    ],
    quiz: {
      title: "Qual métrica mede quanto tempo a equipe leva para resolver problemas?",
      options: [
        {
          id: "a",
          text: "Tempo médio de resolução",
          isCorrect: true,
          explanation:
            "Correto. Essa métrica acompanha quanto tempo um problema leva para ser resolvido.",
        },
        {
          id: "b",
          text: "Cor do botão principal",
          isCorrect: false,
          explanation:
            "Isso é um elemento visual, não uma métrica de resolução.",
        },
        {
          id: "c",
          text: "Nome do computador",
          isCorrect: false,
          explanation:
            "O nome do computador pode ser um dado, mas não mede resolução de atendimento.",
        },
      ],
    },
    alexHints: [
      {
        keywords: ["métrica", "metrica", "tempo", "satisfação", "satisfacao"],
        response:
          "Métricas ajudam a responder perguntas como: estamos demorando muito? Quais assuntos aparecem mais? Os clientes estão satisfeitos?",
      },
    ],
    closing:
      "Você aprendeu que métricas transformam atendimento em algo mensurável e melhorável.",
  },
  {
    slug: "dia-21",
    dayNumber: 21,
    title: "Revisão de dados e SQL",
    description:
      "Hoje vamos revisar dados, tabelas, SQL, filtros, ordenação e métricas aplicadas ao suporte.",
    objective:
      "Consolidar a base de dados antes de avançar para APIs e automações.",
    summary:
      "Nesta semana você aprendeu como dados são organizados, consultados e analisados. Também viu como métricas ajudam a melhorar atendimento e suporte.",
    concepts: [
      {
        title: "Dados estruturados",
        text: "Informações organizadas de forma que possam ser consultadas e analisadas.",
      },
      {
        title: "SQL",
        text: "Linguagem usada para buscar informações em bancos de dados.",
      },
      {
        title: "Métricas",
        text: "Medidas que ajudam a acompanhar desempenho e identificar melhorias.",
      },
    ],
    quiz: {
      title: "Qual conjunto resume melhor esta semana?",
      options: [
        {
          id: "a",
          text: "Dados, tabelas, SQL, filtros, ordenação e métricas",
          isCorrect: true,
          explanation:
            "Correto. Esses conceitos formam uma base importante para análise e suporte orientado por dados.",
        },
        {
          id: "b",
          text: "Apenas trocar imagens no site",
          isCorrect: false,
          explanation:
            "Não. A semana foi focada em dados, consultas e indicadores.",
        },
        {
          id: "c",
          text: "Ignorar informações registradas",
          isCorrect: false,
          explanation:
            "Não. O objetivo foi justamente aprender a usar informações registradas para melhorar decisões.",
        },
      ],
    },
    alexHints: [
      {
        keywords: ["revisão", "revisao", "sql", "dados", "métricas", "metricas"],
        response:
          "Revise pensando como analista de suporte: quais chamados existem, quais estão atrasados, quais assuntos mais aparecem e quais métricas mostram melhoria.",
      },
    ],
    closing:
      "Você concluiu a semana de dados e SQL. Agora está pronto para conectar sistemas e pensar em automações.",
  },
  {
    slug: "dia-22",
    dayNumber: 22,
    title: "O que são APIs?",
    description:
      "Hoje você vai entender como sistemas conversam entre si usando APIs.",
    objective:
      "Compreender o conceito de API como uma ponte entre sistemas.",
    summary:
      "API é uma forma de um sistema conversar com outro. Em suporte, uma API pode conectar um sistema de chamados a uma planilha, CRM, chatbot ou ferramenta de automação.",
    concepts: [
      {
        title: "API",
        text: "Interface que permite que sistemas troquem informações.",
      },
      {
        title: "Requisição",
        text: "Pedido feito por um sistema para outro.",
      },
      {
        title: "Resposta",
        text: "Informação que o sistema retorna depois de receber uma requisição.",
      },
    ],
    quiz: {
      title: "Qual definição combina melhor com API?",
      options: [
        {
          id: "a",
          text: "Uma forma de sistemas conversarem entre si",
          isCorrect: true,
          explanation:
            "Correto. API permite que um sistema envie ou receba informações de outro.",
        },
        {
          id: "b",
          text: "Um tipo de cadeira de escritório",
          isCorrect: false,
          explanation:
            "Não. API é um conceito de integração entre sistemas.",
        },
        {
          id: "c",
          text: "Uma senha que nunca muda",
          isCorrect: false,
          explanation:
            "Não. APIs podem usar chaves de acesso, mas API não é uma senha.",
        },
      ],
    },
    alexHints: [
      {
        keywords: ["api", "integração", "integracao", "sistemas"],
        response:
          "Pense em API como um atendente entre dois sistemas. Um sistema pede uma informação e o outro responde em um formato combinado.",
      },
    ],
    closing:
      "Você aprendeu que APIs permitem integrar ferramentas e criar fluxos mais automatizados.",
  },
  {
    slug: "dia-23",
    dayNumber: 23,
    title: "Requisições e respostas",
    description:
      "Hoje você vai entender o ciclo básico de uma integração: pedir uma informação e receber uma resposta.",
    objective:
      "Aprender o conceito de requisição e resposta em integrações.",
    summary:
      "Quando um sistema usa uma API, ele faz uma requisição. A API processa esse pedido e devolve uma resposta, geralmente com dados ou uma confirmação.",
    concepts: [
      {
        title: "GET",
        text: "Tipo de requisição usado para buscar informações.",
      },
      {
        title: "POST",
        text: "Tipo de requisição usado para enviar ou criar informações.",
      },
      {
        title: "Status",
        text: "Código que indica se a requisição deu certo ou falhou.",
      },
    ],
    quiz: {
      title: "Qual método costuma ser usado para buscar informações?",
      options: [
        {
          id: "a",
          text: "GET",
          isCorrect: true,
          explanation:
            "Correto. GET costuma ser usado para buscar dados.",
        },
        {
          id: "b",
          text: "PINTAR",
          isCorrect: false,
          explanation:
            "Esse não é um método comum de requisição em APIs.",
        },
        {
          id: "c",
          text: "ESQUECER",
          isCorrect: false,
          explanation:
            "Não. Esse não é um método usado para buscar dados em APIs.",
        },
      ],
    },
    alexHints: [
      {
        keywords: ["get", "post", "requisição", "requisicao", "resposta"],
        response:
          "GET é como perguntar: 'quais dados existem?'. POST é como dizer: 'registre esta nova informação'.",
      },
    ],
    closing:
      "Você aprendeu o fluxo básico de uma API: requisição, processamento e resposta.",
  },
  {
    slug: "dia-24",
    dayNumber: 24,
    title: "Introdução à automação",
    description:
      "Hoje você vai entender como pequenas automações podem economizar tempo no atendimento e suporte.",
    objective:
      "Compreender o que é automação e identificar tarefas repetitivas que podem ser automatizadas.",
    summary:
      "Automação é usar tecnologia para executar tarefas repetitivas com menos esforço manual. Em suporte, isso pode incluir organizar chamados, enviar mensagens padrão ou gerar relatórios.",
    concepts: [
      {
        title: "Automação",
        text: "Processo que executa tarefas com pouca ou nenhuma intervenção manual.",
      },
      {
        title: "Tarefa repetitiva",
        text: "Atividade feita muitas vezes e que segue uma regra clara.",
      },
      {
        title: "Ganho de produtividade",
        text: "Resultado de economizar tempo e reduzir retrabalho.",
      },
    ],
    quiz: {
      title: "Qual tarefa é boa candidata para automação?",
      options: [
        {
          id: "a",
          text: "Enviar uma mensagem padrão sempre que um chamado for aberto",
          isCorrect: true,
          explanation:
            "Correto. É uma tarefa repetitiva e com regra clara.",
        },
        {
          id: "b",
          text: "Conversar com empatia em uma situação delicada",
          isCorrect: false,
          explanation:
            "Esse tipo de situação pode precisar de julgamento humano e cuidado emocional.",
        },
        {
          id: "c",
          text: "Ignorar todos os clientes",
          isCorrect: false,
          explanation:
            "Isso não é automação útil. Automação deve melhorar processos, não prejudicar atendimento.",
        },
      ],
    },
    alexHints: [
      {
        keywords: ["automação", "automacao", "repetitiva", "produtividade"],
        response:
          "Uma boa automação começa com uma pergunta: 'eu faço isso muitas vezes do mesmo jeito?'. Se sim, talvez dê para automatizar.",
      },
    ],
    closing:
      "Você aprendeu que automações simples podem reduzir retrabalho e liberar tempo para tarefas mais importantes.",
  },
  {
    slug: "dia-25",
    dayNumber: 25,
    title: "Arquivos e automações simples",
    description:
      "Hoje você vai entender como scripts podem ler arquivos e transformar informações em ações.",
    objective:
      "Aprender como arquivos podem servir como entrada para automações.",
    summary:
      "Muitas automações começam com arquivos: planilhas, CSVs, textos ou relatórios. Um script pode ler esses arquivos, filtrar informações e gerar uma nova saída.",
    concepts: [
      {
        title: "Arquivo",
        text: "Fonte de dados que pode ser lida por um programa.",
      },
      {
        title: "CSV",
        text: "Formato simples de tabela em texto, muito usado para exportar dados.",
      },
      {
        title: "Processamento",
        text: "Transformar os dados de entrada em uma saída útil.",
      },
    ],
    quiz: {
      title: "Qual exemplo mostra uma automação com arquivo?",
      options: [
        {
          id: "a",
          text: "Ler uma planilha de chamados e gerar uma lista de atrasados",
          isCorrect: true,
          explanation:
            "Correto. O arquivo serve como entrada e o script gera uma saída útil.",
        },
        {
          id: "b",
          text: "Apagar todos os arquivos sem olhar",
          isCorrect: false,
          explanation:
            "Isso é perigoso e não representa uma automação útil.",
        },
        {
          id: "c",
          text: "Trocar o papel de parede",
          isCorrect: false,
          explanation:
            "Pode ser uma ação no computador, mas não representa bem automação de dados de suporte.",
        },
      ],
    },
    alexHints: [
      {
        keywords: ["arquivo", "csv", "planilha", "relatório", "relatorio"],
        response:
          "Pense em uma planilha exportada do sistema de atendimento. Um script pode ler essa planilha e destacar chamados urgentes automaticamente.",
      },
    ],
    closing:
      "Você aprendeu que arquivos podem alimentar automações simples e muito úteis no dia a dia.",
  },
  {
    slug: "dia-26",
    dayNumber: 26,
    title: "Fluxos de atendimento automatizados",
    description:
      "Hoje você vai desenhar fluxos simples que unem regras, dados e ações automáticas.",
    objective:
      "Aprender a pensar em fluxos de automação aplicados ao suporte.",
    summary:
      "Um fluxo automatizado combina gatilho, condição e ação. Exemplo: quando um chamado urgente chega, verificar prioridade e enviar alerta.",
    concepts: [
      {
        title: "Gatilho",
        text: "Evento que inicia o fluxo, como a abertura de um chamado.",
      },
      {
        title: "Condição",
        text: "Regra que decide o caminho do fluxo.",
      },
      {
        title: "Ação",
        text: "Resultado executado pelo fluxo, como enviar alerta ou atualizar status.",
      },
    ],
    quiz: {
      title: "Qual combinação representa um fluxo automatizado?",
      options: [
        {
          id: "a",
          text: "Gatilho, condição e ação",
          isCorrect: true,
          explanation:
            "Correto. Essa estrutura ajuda a organizar automações simples.",
        },
        {
          id: "b",
          text: "Sorte, palpite e confusão",
          isCorrect: false,
          explanation:
            "Não. Automação precisa de regras claras, não de sorte.",
        },
        {
          id: "c",
          text: "Apenas escrever textos aleatórios",
          isCorrect: false,
          explanation:
            "Não. Fluxos automatizados precisam de lógica e objetivo.",
        },
      ],
    },
    alexHints: [
      {
        keywords: ["fluxo", "gatilho", "condição", "condicao", "ação", "acao"],
        response:
          "Um fluxo é como um roteiro: quando algo acontece, o sistema verifica uma regra e executa uma ação. Isso é muito útil em suporte.",
      },
    ],
    closing:
      "Você aprendeu a pensar em automações como fluxos organizados de gatilho, condição e ação.",
  },
  {
    slug: "dia-27",
    dayNumber: 27,
    title: "Projeto prático: triagem de chamados",
    description:
      "Hoje você vai pensar em um mini projeto para classificar chamados por prioridade.",
    objective:
      "Aplicar lógica, dados e automação em um caso prático de suporte.",
    summary:
      "A triagem de chamados é uma ótima aplicação prática: o sistema pode analisar assunto, prioridade e tempo de espera para ajudar a decidir o que deve ser atendido primeiro.",
    concepts: [
      {
        title: "Triagem",
        text: "Processo de organizar demandas por tipo, urgência ou prioridade.",
      },
      {
        title: "Regra de negócio",
        text: "Critério usado para decidir como o sistema deve agir.",
      },
      {
        title: "Prioridade",
        text: "Indicação do que precisa de atenção primeiro.",
      },
    ],
    quiz: {
      title: "Qual regra ajudaria numa triagem de chamados?",
      options: [
        {
          id: "a",
          text: "Se prioridade for alta, colocar no topo da fila",
          isCorrect: true,
          explanation:
            "Correto. Essa regra ajuda a organizar o atendimento por urgência.",
        },
        {
          id: "b",
          text: "Atender sempre sem olhar prioridade",
          isCorrect: false,
          explanation:
            "Isso pode fazer chamados urgentes esperarem demais.",
        },
        {
          id: "c",
          text: "Excluir chamados difíceis",
          isCorrect: false,
          explanation:
            "Não. Chamados difíceis precisam de tratamento adequado, não exclusão.",
        },
      ],
    },
    alexHints: [
      {
        keywords: ["triagem", "prioridade", "chamado", "fila"],
        response:
          "Triagem é organizar a fila com inteligência. Você pode usar regras como prioridade, tempo de espera e tipo de problema.",
      },
    ],
    closing:
      "Você conectou lógica, dados e automação em um cenário prático de atendimento.",
  },
  {
    slug: "dia-28",
    dayNumber: 28,
    title: "Projeto prático: relatório de atendimento",
    description:
      "Hoje você vai pensar em um relatório simples para mostrar volume, status e principais problemas.",
    objective:
      "Aprender a estruturar um relatório útil para acompanhamento de suporte.",
    summary:
      "Relatórios ajudam equipes a enxergar padrões. Um bom relatório pode mostrar quantos chamados foram abertos, quantos foram resolvidos e quais assuntos mais aparecem.",
    concepts: [
      {
        title: "Relatório",
        text: "Resumo organizado de informações importantes.",
      },
      {
        title: "Agrupamento",
        text: "Organizar dados por categoria, como assunto ou status.",
      },
      {
        title: "Insight",
        text: "Percepção útil gerada a partir dos dados.",
      },
    ],
    quiz: {
      title: "O que um bom relatório de atendimento deve ajudar a entender?",
      options: [
        {
          id: "a",
          text: "Volume, status e principais tipos de problema",
          isCorrect: true,
          explanation:
            "Correto. Essas informações ajudam a melhorar o suporte.",
        },
        {
          id: "b",
          text: "Apenas a cor preferida do analista",
          isCorrect: false,
          explanation:
            "Isso não ajuda diretamente a acompanhar atendimento.",
        },
        {
          id: "c",
          text: "Nada, relatórios nunca servem",
          isCorrect: false,
          explanation:
            "Relatórios bem feitos ajudam muito na tomada de decisão.",
        },
      ],
    },
    alexHints: [
      {
        keywords: ["relatório", "relatorio", "insight", "volume", "status"],
        response:
          "Um relatório útil responde perguntas práticas: quantos chamados existem, quais estão pendentes e quais problemas mais aparecem.",
      },
    ],
    closing:
      "Você aprendeu que relatórios transformam dados em visão clara para melhorar atendimento.",
  },
  {
    slug: "dia-29",
    dayNumber: 29,
    title: "Preparando seu portfólio",
    description:
      "Hoje você vai organizar o que aprendeu em uma apresentação simples de portfólio.",
    objective:
      "Entender como transformar sua trilha em evidências para entrevistas e oportunidades.",
    summary:
      "Um portfólio não precisa ser enorme. Ele precisa mostrar problema, solução, tecnologias usadas e resultado. Mesmo projetos simples podem demonstrar raciocínio e evolução.",
    concepts: [
      {
        title: "Portfólio",
        text: "Conjunto de projetos e evidências que mostram suas habilidades.",
      },
      {
        title: "Problema",
        text: "Situação real que você tentou resolver.",
      },
      {
        title: "Solução",
        text: "Como você aplicou tecnologia para melhorar a situação.",
      },
    ],
    quiz: {
      title: "O que um bom projeto de portfólio deve mostrar?",
      options: [
        {
          id: "a",
          text: "Problema, solução, tecnologias e resultado",
          isCorrect: true,
          explanation:
            "Correto. Isso mostra raciocínio, prática e impacto.",
        },
        {
          id: "b",
          text: "Apenas frases vagas sem projeto",
          isCorrect: false,
          explanation:
            "Frases vagas ajudam pouco. O ideal é mostrar algo concreto.",
        },
        {
          id: "c",
          text: "Só uma imagem sem explicação",
          isCorrect: false,
          explanation:
            "Imagens podem ajudar, mas precisam de contexto e explicação.",
        },
      ],
    },
    alexHints: [
      {
        keywords: ["portfólio", "portfolio", "entrevista", "projeto"],
        response:
          "Para montar seu portfólio, explique: qual problema existia, o que você construiu, quais tecnologias usou e qual melhoria isso poderia gerar.",
      },
    ],
    closing:
      "Você aprendeu a transformar sua jornada em evidência prática para oportunidades na área de tecnologia.",
  },
  {
    slug: "dia-30",
    dayNumber: 30,
    title: "Fechamento da trilha e próximos passos",
    description:
      "Hoje você vai revisar sua evolução e definir próximos passos para continuar crescendo em suporte com tecnologia.",
    objective:
      "Concluir a trilha de 30 dias e planejar a continuidade dos estudos.",
    summary:
      "Você passou por lógica, Python, dados, SQL, APIs, automação e projetos práticos. Agora tem uma base para continuar evoluindo com mais confiança.",
    concepts: [
      {
        title: "Evolução",
        text: "O progresso construído aula por aula ao longo da trilha.",
      },
      {
        title: "Consistência",
        text: "Capacidade de continuar estudando e praticando mesmo aos poucos.",
      },
      {
        title: "Próximos passos",
        text: "Plano para continuar estudando, criando projetos e buscando oportunidades.",
      },
    ],
    quiz: {
      title: "Qual é o melhor próximo passo após a trilha?",
      options: [
        {
          id: "a",
          text: "Continuar praticando com projetos reais e melhorar o portfólio",
          isCorrect: true,
          explanation:
            "Correto. A continuidade vem com prática, projetos e revisão constante.",
        },
        {
          id: "b",
          text: "Parar de estudar para sempre",
          isCorrect: false,
          explanation:
            "Não. Tecnologia exige aprendizado contínuo.",
        },
        {
          id: "c",
          text: "Apagar tudo que foi feito",
          isCorrect: false,
          explanation:
            "Não. O que você construiu serve como base e portfólio.",
        },
      ],
    },
    alexHints: [
      {
        keywords: ["próximos", "proximos", "carreira", "portfólio", "portfolio"],
        response:
          "Seu próximo passo pode ser melhorar este projeto, criar um README forte, publicar no GitHub e treinar uma apresentação curta sobre o que você construiu.",
      },
    ],
    closing:
      "Você concluiu a trilha de 30 dias. Agora tem uma base sólida para continuar estudando, criando projetos e buscando oportunidades em suporte com tecnologia.",
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