<<<<<<< HEAD
export default function HomePage() {
  return (
    <main style={{ padding: 40, background: "#020617", color: "white", minHeight: "100vh" }}>
      <h1>Suporte Tech 30 Dias funcionando</h1>
      <p>A página inicial agora está no lugar certo.</p>
    </main>
  );
}
=======
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-950 px-4 text-center">
      <div className="max-w-3xl">
        <div className="mb-4 inline-block rounded-full bg-primary-700/30 px-4 py-1 text-sm font-medium text-primary-300">
          🚀 Sua jornada de 30 dias começa aqui
        </div>
        <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
          Suporte Tech{' '}
          <span className="bg-gradient-to-r from-primary-400 to-accent-500 bg-clip-text text-transparent">
            30 Dias
          </span>
        </h1>
        <p className="mb-10 text-xl text-gray-400">
          Aprenda tecnologia aplicada ao suporte técnico de forma gamificada. Sem medo, sem complicação. Do zero ao profissional em 30 dias.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/dashboard"
            className="w-full rounded-xl bg-primary-500 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/30 sm:w-auto"
          >
            Acessar Plataforma (Grátis)
          </Link>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-6 text-left md:grid-cols-4">
          {[
            { icon: '🎮', title: 'Gamificado', desc: 'XP, badges e streak diário' },
            { icon: '🤖', title: 'Assistente IA', desc: 'Tire dúvidas a qualquer hora' },
            { icon: '⏱️', title: '1-2h por dia', desc: 'Feito para sua rotina' },
            { icon: '🏆', title: 'Certificado', desc: 'Comprove sua evolução' },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-gray-800 bg-gray-900 p-5">
              <div className="mb-2 text-3xl">{item.icon}</div>
              <h3 className="font-bold text-white">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
>>>>>>> 48df024809264e9e52da0955e393e32a79b2fca1
