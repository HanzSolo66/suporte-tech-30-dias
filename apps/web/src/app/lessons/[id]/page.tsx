'use client';

import { useState } from 'react';

// Dados mock para demonstração do esqueleto
const mockLesson = {
  id: '1',
  title: 'O que é uma Variável?',
  objective: 'Entender o conceito de variável e como o computador armazena informações.',
  videoUrl: 'https://www.youtube.com/embed/S9uPNppGsGo',
  content: `
    Uma **variável** é como uma caixinha com um nome. Você guarda um valor dentro dela
    e pode usar esse valor mais tarde no seu programa.
    
    Pense assim: você tem uma caixinha chamada \`nome\` e coloca "Maria" dentro.
    Quando o computador precisar saber o nome, ele abre a caixinha \`nome\` e encontra "Maria".
  `,
  quiz: {
    id: 'q1',
    questions: [
      {
        id: 'q1-1',
        text: 'O que melhor descreve uma variável em programação?',
        answers: [
          { id: 'a1', text: 'Um tipo de loop que repete código', isCorrect: false, explanation: 'Loops são estruturas de repetição, não variáveis.' },
          { id: 'a2', text: 'Um espaço na memória para guardar um valor com um nome', isCorrect: true, explanation: '' },
          { id: 'a3', text: 'Uma função que executa uma tarefa', isCorrect: false, explanation: 'Funções são blocos de código reutilizáveis, não variáveis.' },
          { id: 'a4', text: 'Um erro no código', isCorrect: false, explanation: 'Erros no código são chamados de "bugs", não variáveis.' },
        ],
      },
    ],
  },
};

export default function LessonPage({ params }: { params: { id: string } }) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showAI, setShowAI] = useState(false);
  const [aiQuestion, setAiQuestion] = useState('');

  const question = mockLesson.quiz.questions[0];

  const handleAnswer = (answerId: string) => {
    if (isAnswered) return;
    setSelectedAnswer(answerId);
    const answer = question.answers.find((a) => a.id === answerId);
    setIsCorrect(answer?.isCorrect ?? false);
    setIsAnswered(true);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="mx-auto max-w-4xl px-4 py-8">
        {/* Header da Aula */}
        <div className="mb-6">
          <p className="text-sm text-primary-400">Semana 1 › Fundamentos</p>
          <h1 className="mt-1 text-3xl font-extrabold">{mockLesson.title}</h1>
          <p className="mt-2 text-gray-400">🎯 Objetivo: {mockLesson.objective}</p>
        </div>

        {/* Player de Vídeo */}
        <div className="mb-8 aspect-video w-full overflow-hidden rounded-2xl bg-black">
          <iframe
            src={mockLesson.videoUrl}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Conteúdo da Aula */}
        <div className="mb-8 rounded-2xl border border-gray-800 bg-gray-900 p-6">
          <h2 className="mb-3 text-xl font-bold">📖 Explicação</h2>
          <p className="leading-relaxed text-gray-300">{mockLesson.content}</p>
        </div>

        {/* Quiz */}
        <div className="mb-8 rounded-2xl border border-primary-500/30 bg-gray-900 p-6">
          <h2 className="mb-4 text-xl font-bold">🧠 Quiz Rápido</h2>
          <p className="mb-6 text-lg font-medium">{question.text}</p>
          <div className="grid gap-3">
            {question.answers.map((answer) => {
              let style = 'border-gray-700 bg-gray-800 hover:border-primary-500';
              if (isAnswered && answer.id === selectedAnswer) {
                style = isCorrect
                  ? 'border-green-500 bg-green-900/40'
                  : 'border-red-500 bg-red-900/40';
              }
              if (isAnswered && answer.isCorrect) {
                style = 'border-green-500 bg-green-900/40';
              }
              return (
                <button
                  key={answer.id}
                  onClick={() => handleAnswer(answer.id)}
                  className={`w-full rounded-xl border p-4 text-left transition-all ${style}`}
                >
                  {answer.text}
                </button>
              );
            })}
          </div>

          {/* Feedback do Quiz */}
          {isAnswered && (
            <div
              className={`mt-4 rounded-xl p-4 ${
                isCorrect ? 'bg-green-900/50 text-green-300' : 'bg-red-900/50 text-red-300'
              }`}
            >
              {isCorrect ? (
                <p className="font-bold">✅ Correto! +10 XP</p>
              ) : (
                <div>
                  <p className="font-bold">❌ Quase lá!</p>
                  <p className="mt-1 text-sm">
                    {question.answers.find((a) => a.id === selectedAnswer)?.explanation}
                  </p>
                  <p className="mt-1 text-sm font-medium">
                    A resposta correta é: "{question.answers.find((a) => a.isCorrect)?.text}"
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Botão de Assistente IA */}
        <button
          onClick={() => setShowAI(!showAI)}
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-primary-500/50 bg-primary-500/10 py-3 text-primary-300 transition-all hover:bg-primary-500/20"
        >
          🤖 Ficou com dúvida? Pergunte para a IA
        </button>

        {/* Painel de IA */}
        {showAI && (
          <div className="mt-4 rounded-2xl border border-gray-700 bg-gray-900 p-5">
            <h3 className="mb-3 font-bold">Assistente de Dúvidas</h3>
            <div className="mb-3 rounded-xl bg-gray-800 p-3 text-sm text-gray-300">
              Olá! Sou seu assistente de estudos. Pode me perguntar qualquer coisa sobre esta aula. 😊
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={aiQuestion}
                onChange={(e) => setAiQuestion(e.target.value)}
                placeholder="Ex: Qual a diferença entre variável e constante?"
                className="flex-1 rounded-xl border border-gray-700 bg-gray-800 px-4 py-2 text-sm text-white placeholder-gray-500 outline-none focus:border-primary-500"
              />
              <button className="rounded-xl bg-primary-500 px-4 py-2 text-sm font-bold text-white hover:bg-primary-600">
                Enviar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
