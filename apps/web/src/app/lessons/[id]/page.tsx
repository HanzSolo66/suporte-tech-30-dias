'use client';

import { useState, useEffect } from 'react';
import { useStore } from '@/lib/use-store';
import { COURSE_DATA, Lesson } from '@/lib/course-data';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LessonPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { addXP, completeLesson, updateStreak, completedLessons } = useStore();
  
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    const foundLesson = COURSE_DATA.flatMap(m => m.lessons).find(l => l.id === params.id);
    if (foundLesson) {
      setLesson(foundLesson);
      updateStreak();
    } else {
      router.push('/dashboard');
    }
  }, [params.id, router, updateStreak]);

  if (!lesson) return null;

  const question = lesson.quiz?.questions[0];

  const handleAnswer = (answerId: string) => {
    if (isAnswered) return;
    setSelectedAnswer(answerId);
    const answer = question?.answers.find((a) => a.id === answerId);
    const correct = answer?.isCorrect ?? false;
    setIsCorrect(correct);
    setIsAnswered(true);

    if (correct) {
      addXP(10);
      completeLesson(lesson.id);
    }
  };

  const handleCompleteWithoutQuiz = () => {
    completeLesson(lesson.id);
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white pb-20">
      <nav className="border-b border-gray-800 bg-gray-950/50 backdrop-blur-md sticky top-0 z-10">
        <div className="mx-auto max-w-4xl px-4 h-16 flex items-center justify-between">
          <Link href="/dashboard" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
            <span>←</span> Voltar ao Dashboard
          </Link>
          <div className="flex items-center gap-4">
            {completedLessons.includes(lesson.id) && (
              <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-bold border border-green-500/30">
                CONCLUÍDA ✅
              </span>
            )}
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-4xl px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {lesson.title}
          </h1>
          <div className="flex items-center gap-4 text-gray-400">
            <span className="flex items-center gap-1">🎯 {lesson.objective}</span>
          </div>
        </div>

        {lesson.videoUrl && (
          <div className="mb-10 aspect-video w-full overflow-hidden rounded-3xl bg-black shadow-2xl ring-1 ring-white/10">
            <iframe
              src={lesson.videoUrl}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}

        <div className="mb-10 prose prose-invert max-w-none bg-gray-900/50 p-8 rounded-3xl border border-gray-800">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-primary-400">
            <span>📖</span> Explicação
          </h2>
          <p className="text-lg leading-relaxed text-gray-300 whitespace-pre-line">
            {lesson.content}
          </p>
        </div>

        {lesson.quiz ? (
          <div className="mb-8 rounded-3xl border border-primary-500/30 bg-gray-900/80 p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl">🧠</div>
            <h2 className="mb-6 text-2xl font-bold">Quiz de Fixação</h2>
            <p className="mb-8 text-xl font-medium text-gray-200">{question?.text}</p>
            
            <div className="grid gap-4">
              {question?.answers.map((answer) => {
                let style = 'border-gray-700 bg-gray-800/50 hover:border-primary-500 hover:bg-gray-800';
                if (isAnswered) {
                  if (answer.isCorrect) {
                    style = 'border-green-500 bg-green-500/20 text-green-300';
                  } else if (answer.id === selectedAnswer) {
                    style = 'border-red-500 bg-red-500/20 text-red-300';
                  } else {
                    style = 'border-gray-800 bg-gray-900/50 opacity-50';
                  }
                }
                
                return (
                  <button
                    key={answer.id}
                    onClick={() => handleAnswer(answer.id)}
                    disabled={isAnswered}
                    className={`w-full rounded-2xl border-2 p-5 text-left transition-all duration-300 text-lg font-medium ${style}`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{answer.text}</span>
                      {isAnswered && answer.isCorrect && <span>✓</span>}
                      {isAnswered && !answer.isCorrect && answer.id === selectedAnswer && <span>✗</span>}
                    </div>
                  </button>
                );
              })}
            </div>

            {isAnswered && (
              <div className={`mt-8 rounded-2xl p-6 animate-bounce-in ${
                isCorrect ? 'bg-green-500/10 border border-green-500/30 text-green-300' : 'bg-red-500/10 border border-red-500/30 text-red-300'
              }`}>
                <p className="font-bold text-xl mb-2">
                  {isCorrect ? '✨ Parabéns! Você acertou!' : '💡 Quase lá! Veja a explicação:'}
                </p>
                <p className="text-lg opacity-90">
                  {isCorrect ? 'Você ganhou +10 XP e concluiu esta aula.' : question?.explanation}
                </p>
                {isCorrect && (
                  <Link href="/dashboard" className="mt-6 inline-block bg-green-500 text-green-950 px-8 py-3 rounded-xl font-bold hover:bg-green-400 transition-colors">
                    Continuar Trilha
                  </Link>
                )}
              </div>
            )}
          </div>
        ) : (
          <div className="flex justify-center">
            <button
              onClick={handleCompleteWithoutQuiz}
              className="bg-primary-500 hover:bg-primary-600 text-white px-12 py-4 rounded-2xl font-bold text-xl transition-all shadow-lg shadow-primary-500/20"
            >
              Concluir Aula e Continuar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
