export interface Answer {
  id: string;
  text: string;
  isCorrect: boolean;
  explanation: string;
}

export interface Question {
  id: string;
  text: string;
  explanation: string;
  answers: Answer[];
}

export interface Lesson {
  id: string;
  title: string;
  objective: string;
  videoUrl: string;
  content: string;
  order: number;
  quiz?: {
    id: string;
    questions: Question[];
  };
}

export interface Module {
  id: string;
  title: string;
  order: number;
  lessons: Lesson[];
}

export const COURSE_DATA: Module[] = [
  {
    id: 'week1',
    title: 'Semana 1: Fundamentos',
    order: 1,
    lessons: [
      {
        id: 'w1-1',
        title: 'O que é Programação?',
        objective: 'Entender o conceito de programação e seu papel no suporte técnico.',
        videoUrl: 'https://www.youtube.com/embed/S9uPNppGsGo',
        content: 'Programação é a arte de dar instruções para um computador. Assim como uma receita de bolo, você escreve os passos e o computador os segue. No suporte, entender isso ajuda a diagnosticar por que um software não está fazendo o que deveria.',
        order: 1,
        quiz: {
          id: 'q1-1',
          questions: [
            {
              id: 'ques1-1',
              text: 'O que melhor define programação?',
              explanation: 'Programação é a criação de instruções (código) que um computador executa para realizar tarefas.',
              answers: [
                { id: 'a1', text: 'Consertar computadores fisicamente', isCorrect: false, explanation: 'Isso é manutenção de hardware.' },
                { id: 'a2', text: 'Criar instruções para que o computador execute tarefas', isCorrect: true, explanation: '' },
                { id: 'a3', text: 'Usar planilhas do Excel', isCorrect: false, explanation: 'Isso é uso de software.' },
                { id: 'a4', text: 'Navegar na internet', isCorrect: false, explanation: 'Isso é consumo de conteúdo.' },
              ],
            },
          ],
        },
      },
      {
        id: 'w1-2',
        title: 'Lógica de Programação',
        objective: 'Compreender o raciocínio lógico por trás da resolução de problemas.',
        videoUrl: 'https://www.youtube.com/embed/8mei6uVttho',
        content: 'Lógica de programação é a sequência de passos para resolver um problema. No suporte técnico, usamos a lógica para o "troubleshooting" (diagnóstico): se o passo A não funcionou, tentamos o passo B.',
        order: 2,
        quiz: {
          id: 'q1-2',
          questions: [
            {
              id: 'ques1-2',
              text: 'Qual é o objetivo da lógica de programação?',
              explanation: 'A lógica organiza o raciocínio para resolver problemas de forma estruturada.',
              answers: [
                { id: 'a1', text: 'Decorar comandos', isCorrect: false, explanation: 'Lógica é sobre pensar, não decorar.' },
                { id: 'a2', text: 'Organizar o raciocínio para resolver problemas', isCorrect: true, explanation: '' },
                { id: 'a3', text: 'Trocar peças de um PC', isCorrect: false, explanation: 'Isso é hardware.' },
                { id: 'a4', text: 'Falar inglês', isCorrect: false, explanation: 'Idiomas ajudam, mas não são o objetivo da lógica.' },
              ],
            },
          ],
        },
      },
      {
        id: 'w1-3',
        title: 'Variáveis e Dados',
        objective: 'Aprender como os sistemas guardam informações temporariamente.',
        videoUrl: 'https://www.youtube.com/embed/Ikq7Pc4Z3Bo',
        content: 'Uma variável é como uma caixinha com um nome. No suporte, quando você atende um cliente, o "nome" dele é guardado em uma variável para ser usado durante o atendimento.',
        order: 3,
        quiz: {
          id: 'q1-3',
          questions: [
            {
              id: 'ques1-3',
              text: 'O que é uma variável?',
              explanation: 'É um espaço na memória com um nome que guarda um valor.',
              answers: [
                { id: 'a1', text: 'Um tipo de erro', isCorrect: false, explanation: 'Erros são bugs.' },
                { id: 'a2', text: 'Um espaço na memória para guardar um valor', isCorrect: true, explanation: '' },
                { id: 'a3', text: 'Uma tela do computador', isCorrect: false, explanation: 'Telas são periféricos.' },
                { id: 'a4', text: 'Um cabo de rede', isCorrect: false, explanation: 'Cabos são hardware.' },
              ],
            },
          ],
        },
      },
    ],
  },
  {
    id: 'week2',
    title: 'Semana 2: Python Básico',
    order: 2,
    lessons: [
      {
        id: 'w2-1',
        title: 'Introdução ao Python',
        objective: 'Conhecer a linguagem mais usada para automação no suporte.',
        videoUrl: 'https://www.youtube.com/embed/S9uPNppGsGo',
        content: 'Python é uma linguagem simples e poderosa. É muito usada para criar scripts que automatizam tarefas repetitivas no suporte técnico.',
        order: 1,
      },
    ],
  },
  {
    id: 'week3',
    title: 'Semana 3: SQL e Banco de Dados',
    order: 3,
    lessons: [
      {
        id: 'w3-1',
        title: 'O que é Banco de Dados?',
        objective: 'Entender onde as informações dos clientes ficam salvas.',
        videoUrl: 'https://www.youtube.com/embed/Ofktsne-utM',
        content: 'Bancos de dados são coleções organizadas de informações. Analistas de suporte usam SQL para consultar dados de usuários e entender problemas.',
        order: 1,
      },
    ],
  },
  {
    id: 'week4',
    title: 'Semana 4: APIs e Automação',
    order: 4,
    lessons: [
      {
        id: 'w4-1',
        title: 'O que é uma API?',
        objective: 'Compreender como diferentes sistemas conversam entre si.',
        videoUrl: 'https://www.youtube.com/embed/ghTrp1x_1As',
        content: 'API é uma ponte entre sistemas. Quando você abre um ticket no Zendesk e ele aparece no Slack, uma API fez essa ponte.',
        order: 1,
      },
    ],
  },
];
