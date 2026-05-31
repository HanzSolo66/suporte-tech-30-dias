'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

// Componentes (a serem criados)
// import { XPBar } from '@/components/gamification/XPBar';
// import { StreakCounter } from '@/components/gamification/StreakCounter';
// import { LessonTrail } from '@/components/lessons/LessonTrail';
// import { BadgesGrid } from '@/components/gamification/BadgesGrid';

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-950">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary-500 border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 p-6 text-white">
      <header className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">
            Olá, {session?.user?.name?.split(' ')[0]}! 👋
          </h1>
          <p className="text-gray-400">Continue sua jornada de hoje.</p>
        </div>
        {/* Streak e XP aqui */}
        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-orange-500/20 px-4 py-2 text-center">
            <p className="text-2xl font-bold text-orange-400">🔥 7</p>
            <p className="text-xs text-orange-300">dias seguidos</p>
          </div>
          <div className="rounded-xl bg-yellow-500/20 px-4 py-2 text-center">
            <p className="text-2xl font-bold text-yellow-400">⭐ 320</p>
            <p className="text-xs text-yellow-300">XP Total</p>
          </div>
        </div>
      </header>

      {/* Barra de Progresso Geral */}
      <section className="mb-8 rounded-2xl border border-gray-800 bg-gray-900 p-6">
        <div className="mb-2 flex justify-between">
          <h2 className="font-semibold">Progresso Geral</h2>
          <span className="text-primary-400 font-bold">35%</span>
        </div>
        <div className="h-3 w-full overflow-hidden rounded-full bg-gray-800">
          <div
            className="h-full rounded-full bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-700"
            style={{ width: '35%' }}
          />
        </div>
        <p className="mt-2 text-sm text-gray-500">11 de 30 aulas concluídas</p>
      </section>

      {/* Trilha de Aulas - Placeholder */}
      <section className="mb-8">
        <h2 className="mb-4 text-xl font-bold">Sua Trilha</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            { week: 1, title: 'Fundamentos', progress: 100, status: 'done' },
            { week: 2, title: 'Python Básico', progress: 40, status: 'active' },
            { week: 3, title: 'SQL e Banco de Dados', progress: 0, status: 'locked' },
            { week: 4, title: 'APIs e Automação', progress: 0, status: 'locked' },
          ].map((module) => (
            <div
              key={module.week}
              className={`rounded-2xl border p-5 transition-all ${
                module.status === 'active'
                  ? 'border-primary-500 bg-primary-500/10'
                  : module.status === 'done'
                  ? 'border-green-700 bg-green-900/20'
                  : 'border-gray-800 bg-gray-900 opacity-50'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-400">Semana {module.week}</span>
                {module.status === 'done' && <span className="text-green-400">✅ Concluída</span>}
                {module.status === 'active' && <span className="text-primary-400">▶ Em andamento</span>}
                {module.status === 'locked' && <span className="text-gray-600">🔒 Bloqueada</span>}
              </div>
              <h3 className="mt-1 text-lg font-bold">{module.title}</h3>
              <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-gray-800">
                <div
                  className="h-full rounded-full bg-primary-500"
                  style={{ width: `${module.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
