'use client';

import { useStore } from '@/lib/use-store';
import { COURSE_DATA } from '@/lib/course-data';
import Link from 'next/link';

export default function DashboardPage() {
  const { xp, level, streak, completedLessons } = useStore();

  const totalLessons = COURSE_DATA.reduce((acc, module) => acc + module.lessons.length, 0);
  const progressPercentage = Math.round((completedLessons.length / totalLessons) * 100);

  return (
    <div className="min-h-screen bg-gray-950 p-6 text-white">
      <header className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">
            Olá, Estudante! 👋
          </h1>
          <p className="text-gray-400">Sua jornada rumo ao Suporte Técnico.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-orange-500/20 px-4 py-2 text-center border border-orange-500/30">
            <p className="text-2xl font-bold text-orange-400">🔥 {streak}</p>
            <p className="text-xs text-orange-300 uppercase font-bold tracking-wider">Streak</p>
          </div>
          <div className="rounded-xl bg-yellow-500/20 px-4 py-2 text-center border border-yellow-500/30">
            <p className="text-2xl font-bold text-yellow-400">⭐ {xp}</p>
            <p className="text-xs text-yellow-300 uppercase font-bold tracking-wider">XP Total</p>
          </div>
        </div>
      </header>

      {/* Barra de Progresso Geral */}
      <section className="mb-8 rounded-2xl border border-gray-800 bg-gray-900 p-6 shadow-xl">
        <div className="mb-2 flex justify-between items-center">
          <h2 className="font-semibold text-gray-300">Progresso Geral</h2>
          <span className="text-primary-400 font-bold text-lg">{progressPercentage}%</span>
        </div>
        <div className="h-4 w-full overflow-hidden rounded-full bg-gray-800">
          <div
            className="h-full rounded-full bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-1000 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        <p className="mt-3 text-sm text-gray-500 font-medium">
          {completedLessons.length} de {totalLessons} aulas concluídas
        </p>
      </section>

      {/* Trilha de Aulas */}
      <section className="mb-8">
        <h2 className="mb-6 text-xl font-bold flex items-center gap-2">
          <span className="text-primary-500">📍</span> Sua Trilha de 30 Dias
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {COURSE_DATA.map((module) => {
            const moduleLessons = module.lessons.map(l => l.id);
            const completedInModule = moduleLessons.filter(id => completedLessons.includes(id)).length;
            const moduleProgress = Math.round((completedInModule / moduleLessons.length) * 100);
            
            return (
              <div
                key={module.id}
                className={`rounded-2xl border p-6 transition-all duration-300 ${
                  moduleProgress > 0 
                    ? 'border-primary-500/50 bg-primary-900/10 shadow-lg shadow-primary-900/5' 
                    : 'border-gray-800 bg-gray-900/50'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-primary-400 uppercase tracking-widest">Semana {module.order}</span>
                  {moduleProgress === 100 ? (
                    <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-bold text-green-400 border border-green-500/30">
                      CONCLUÍDA
                    </span>
                  ) : moduleProgress > 0 ? (
                    <span className="rounded-full bg-primary-500/20 px-3 py-1 text-xs font-bold text-primary-400 border border-primary-500/30">
                      EM CURSO
                    </span>
                  ) : (
                    <span className="rounded-full bg-gray-800 px-3 py-1 text-xs font-bold text-gray-500 border border-gray-700">
                      PENDENTE
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-4">{module.title}</h3>
                
                <div className="space-y-3">
                  {module.lessons.map((lesson) => (
                    <Link
                      key={lesson.id}
                      href={`/lessons/${lesson.id}`}
                      className={`flex items-center justify-between rounded-xl p-3 transition-all ${
                        completedLessons.includes(lesson.id)
                          ? 'bg-green-500/10 text-green-400 hover:bg-green-500/20'
                          : 'bg-gray-800/50 text-gray-300 hover:bg-gray-800 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{completedLessons.includes(lesson.id) ? '✅' : '📖'}</span>
                        <span className="font-medium">{lesson.title}</span>
                      </div>
                      <span className="text-xs opacity-50">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
