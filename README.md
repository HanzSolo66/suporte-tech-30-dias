# Suporte Tech 30 Dias

![Banner](https://via.placeholder.com/1200x400?text=Suporte+Tech+30+Dias)

Uma plataforma gamificada de aprendizado para pessoas em transição de carreira que desejam entrar na área de Atendimento ao Cliente, Customer Support, Help Desk, Service Desk ou Suporte Técnico. O usuário inicia completamente do zero e em 30 dias aprende tecnologia aplicada ao atendimento e suporte.

## 🎯 Objetivo do Produto

Criar uma experiência de aprendizado que não pareça um curso tradicional ou uma faculdade, mas sim um jogo. O foco é proporcionar evolução constante, pequenas vitórias, progresso diário e acompanhamento personalizado através de:

- Curso estruturado em 30 dias (4 semanas)
- Quizzes interativos com feedback imediato
- Assistente de dúvidas com IA (Anthropic Claude)
- Sistema de progresso e gamificação (XP, níveis, badges, streak)
- Recomendações de conteúdo adaptativas

## 🚀 Trilha de Estudos (30 Dias)

- **Semana 1: Fundamentos** - Lógica, variáveis, operadores, condições e loops. Entender como o computador pensa.
- **Semana 2: Python Básico** - Strings, números, listas, funções. Escrever pequenos programas.
- **Semana 3: SQL e Banco de Dados** - Tabelas, SELECT, WHERE, JOINs básicos. Compreender armazenamento de dados.
- **Semana 4: APIs e Automação** - Requisições, integrações, automações simples. Conectar sistemas.

## 🛠️ Stack Tecnológica

O projeto é um monorepo que utiliza as seguintes tecnologias:

### Frontend
- **Framework:** Next.js (React)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Componentes:** Shadcn UI

### Backend
- **Framework:** NestJS
- **Linguagem:** TypeScript
- **Banco de Dados:** PostgreSQL
- **ORM:** Prisma
- **Autenticação:** NextAuth

### IA & Infraestrutura
- **Inteligência Artificial:** Anthropic Claude API
- **Deploy:** Vercel (Frontend) / Railway ou Supabase (Backend/DB)

## 📁 Estrutura do Repositório

```text
suporte-tech-30-dias/
│
├── apps/
│   ├── web/                # Frontend em Next.js
│   └── api/                # Backend em NestJS
│
├── packages/               # Pacotes compartilhados (monorepo)
│   ├── types/
│   ├── utils/
│   ├── ui/
│   └── config/
│
├── docs/                   # Documentação do projeto
│   ├── architecture/
│   ├── api/
│   ├── database/
│   ├── wireframes/
│   └── sprints/
│
├── database/               # Scripts e schemas do banco de dados
│   ├── migrations/
│   ├── seeds/
│   └── schema/
│
├── quizzes/                # Dados e lógicas dos quizzes por semana
│
├── content/                # Conteúdo das aulas (vídeos, PDFs, links)
│
└── ai-assistant/           # Prompts e configurações do assistente IA
```

## 📄 Documentação

Para mais detalhes sobre o projeto, consulte a pasta `docs/`:
- [Visão do Produto (Product Vision)](docs/PRODUCT_VISION.md)
- [Roadmap e Sprints](docs/ROADMAP.md)
- [Backlog MVP e User Stories](docs/BACKLOG.md)
- [Arquitetura e Banco de Dados](docs/architecture/ARCHITECTURE.md)

---
Desenvolvido com 🩵 para transformar carreiras.
