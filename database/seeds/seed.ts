import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando seed do banco de dados...');

  // Criar o curso principal
  const course = await prisma.course.upsert({
    where: { id: 'course-main' },
    update: {},
    create: {
      id: 'course-main',
      title: 'Suporte Tech 30 Dias',
      description: 'Trilha completa de 30 dias para entrar na área de Suporte Técnico.',
    },
  });

  // Semana 1: Fundamentos
  const week1 = await prisma.module.upsert({
    where: { id: 'module-week1' },
    update: {},
    create: {
      id: 'module-week1',
      courseId: course.id,
      title: 'Semana 1: Fundamentos',
      order: 1,
    },
  });

  const lessons = [
    {
      id: 'lesson-w1-1',
      title: 'O que é Programação?',
      videoUrl: 'https://www.youtube.com/embed/S9uPNppGsGo',
      content: 'Programação é a arte de dar instruções para um computador. Assim como uma receita de bolo, você escreve os passos e o computador os segue.',
      order: 1,
      quiz: {
        question: 'O que melhor define programação?',
        explanation: 'Programação é a criação de instruções (código) que um computador executa para realizar tarefas.',
        answers: [
          { text: 'Consertar computadores fisicamente', isCorrect: false, explanation: 'Isso é manutenção de hardware, não programação.' },
          { text: 'Criar instruções para que o computador execute tarefas', isCorrect: true, explanation: '' },
          { text: 'Usar planilhas do Excel', isCorrect: false, explanation: 'Usar planilhas é uma habilidade diferente de programar.' },
          { text: 'Navegar na internet', isCorrect: false, explanation: 'Navegar na internet é usar software, não criá-lo.' },
        ],
      },
    },
    {
      id: 'lesson-w1-2',
      title: 'O que é Lógica de Programação?',
      videoUrl: 'https://www.youtube.com/embed/8mei6uVttho',
      content: 'Lógica de programação é a sequência de passos para resolver um problema. É como pensar passo a passo antes de agir.',
      order: 2,
      quiz: {
        question: 'Qual é o objetivo da lógica de programação?',
        explanation: 'A lógica de programação organiza o raciocínio para resolver problemas de forma estruturada e eficiente.',
        answers: [
          { text: 'Aprender uma linguagem de programação específica', isCorrect: false, explanation: 'Lógica é independente de linguagem. Você pode aplicar lógica em qualquer linguagem.' },
          { text: 'Organizar o raciocínio para resolver problemas passo a passo', isCorrect: true, explanation: '' },
          { text: 'Criar interfaces gráficas bonitas', isCorrect: false, explanation: 'Criar interfaces é design de UI, não lógica de programação.' },
          { text: 'Memorizar comandos de código', isCorrect: false, explanation: 'Memorizar comandos não é lógica. Lógica é sobre raciocínio, não memorização.' },
        ],
      },
    },
    {
      id: 'lesson-w1-3',
      title: 'Variáveis: Guardando Informações',
      videoUrl: 'https://www.youtube.com/embed/Ikq7Pc4Z3Bo',
      content: 'Uma variável é como uma caixinha com um nome. Você guarda um valor dentro dela e pode usar esse valor mais tarde.',
      order: 3,
      quiz: {
        question: 'O que é uma variável em programação?',
        explanation: 'Uma variável é um espaço na memória do computador que recebe um nome e armazena um valor que pode ser alterado.',
        answers: [
          { text: 'Um tipo de loop que repete código', isCorrect: false, explanation: 'Loops são estruturas de repetição. Variáveis guardam valores.' },
          { text: 'Um espaço na memória para guardar um valor com um nome', isCorrect: true, explanation: '' },
          { text: 'Uma função que executa uma tarefa', isCorrect: false, explanation: 'Funções executam blocos de código. Variáveis guardam dados.' },
          { text: 'Um erro no código', isCorrect: false, explanation: 'Erros são chamados de "bugs". Variáveis são ferramentas essenciais do código.' },
        ],
      },
    },
  ];

  for (const lessonData of lessons) {
    const lesson = await prisma.lesson.upsert({
      where: { id: lessonData.id },
      update: {},
      create: {
        id: lessonData.id,
        moduleId: week1.id,
        title: lessonData.title,
        videoUrl: lessonData.videoUrl,
        content: lessonData.content,
        order: lessonData.order,
      },
    });

    const quiz = await prisma.quiz.upsert({
      where: { lessonId: lesson.id },
      update: {},
      create: { lessonId: lesson.id },
    });

    await prisma.question.create({
      data: {
        quizId: quiz.id,
        text: lessonData.quiz.question,
        explanation: lessonData.quiz.explanation,
        answers: {
          create: lessonData.quiz.answers,
        },
      },
    });
  }

  // Criar badges padrão
  const badges = [
    { name: 'Primeira Aula', description: 'Concluiu sua primeira aula!' },
    { name: 'Primeiro Quiz', description: 'Completou seu primeiro quiz!' },
    { name: '7 Dias Seguidos', description: 'Estudou por 7 dias consecutivos!' },
    { name: 'Semana 1 Concluída', description: 'Finalizou a Semana de Fundamentos!' },
    { name: 'Python Iniciante', description: 'Finalizou a Semana de Python!' },
    { name: 'SQL Explorer', description: 'Finalizou a Semana de SQL!' },
    { name: 'API Explorer', description: 'Finalizou a Semana de APIs!' },
    { name: 'Mestre do Suporte', description: 'Concluiu os 30 dias completos!' },
  ];

  for (const badge of badges) {
    await prisma.badge.upsert({
      where: { id: badge.name.toLowerCase().replace(/\s/g, '-') },
      update: {},
      create: { id: badge.name.toLowerCase().replace(/\s/g, '-'), ...badge },
    });
  }

  console.log('✅ Seed concluído com sucesso!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
