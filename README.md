# Suporte Tech 30 Dias

Uma aplicação web gamificada para estudar tecnologia aplicada ao atendimento ao público, suporte técnico e melhoria de processos.

O projeto foi criado para ajudar pessoas em transição de carreira a começarem do zero, com uma trilha de 30 dias que combina lógica de programação, Python básico, dados, SQL, APIs, automações e projetos práticos.

---

## Objetivo do projeto

O objetivo do **Suporte Tech 30 Dias** é transformar o aprendizado técnico em uma experiência simples, guiada e motivadora.

A aplicação simula uma trilha de estudos em formato de missões, com:

- aulas organizadas por dia;
- quizzes interativos;
- feedback automático;
- explicação de erros;
- progresso salvo no navegador;
- desbloqueio gradual de aulas;
- Assistente Alex para dúvidas;
- certificado final;
- texto de apoio para portfólio ou LinkedIn.

---

## Público-alvo

Este projeto foi pensado para pessoas que:

- estão em transição de carreira para tecnologia;
- têm experiência com atendimento, suporte, vendas, financeiro ou relacionamento com clientes;
- querem aprender tecnologia do zero;
- gostam de resolver problemas e melhorar processos;
- desejam criar um primeiro projeto para portfólio.

---

## Funcionalidades

### Página inicial

Apresenta a proposta da trilha e os principais pilares do projeto.

### Dashboard gamificado

O painel do aluno mostra:

- progresso geral;
- XP acumulado;
- status da trilha;
- aulas concluídas;
- próxima missão;
- acesso ao certificado quando a trilha é concluída.

### Aulas dinâmicas

As aulas são carregadas a partir de um arquivo central:

```text
apps/web/lib/lessons.ts
```

Isso permite criar novas aulas sem precisar criar uma página manual para cada dia.

A rota dinâmica é:

```text
/aulas/[day]
```

Exemplos:

```text
/aulas/dia-1
/aulas/dia-15
/aulas/dia-30
```

### Quiz com feedback

Cada aula possui um quiz de múltipla escolha.

Após selecionar uma resposta, o app mostra:

- se a resposta está correta;
- explicação da alternativa;
- feedback em linguagem simples;
- reforço do conceito aprendido.

### Assistente Alex

O Assistente Alex funciona como um mentor simples dentro da aula.

O aluno pode digitar uma dificuldade e receber uma orientação baseada no conteúdo da aula.

Exemplos de dúvidas:

```text
não entendi lógica
não entendi SQL
o que é API?
```

### Progresso local

O progresso é salvo no navegador usando `localStorage`.

O app registra:

- aulas concluídas;
- uso do Assistente Alex;
- progresso geral da trilha.

### Certificado final

A página `/certificado` mostra:

- status da conclusão;
- XP total;
- habilidades praticadas;
- texto para portfólio ou LinkedIn;
- próximos passos para continuar evoluindo.

---

## Trilha de estudos

A trilha possui 30 dias:

### Semana 1 — Base lógica

- Dia 1: Boas-vindas e avaliação inicial
- Dia 2: O que é lógica de programação?
- Dia 3: Condições e decisões
- Dia 4: Variáveis e informações
- Dia 5: Tipos de dados
- Dia 6: Listas e coleções
- Dia 7: Revisão da primeira semana

### Semana 2 — Python básico

- Dia 8: Primeiros passos com Python
- Dia 9: Variáveis em Python
- Dia 10: Condições em Python
- Dia 11: Listas em Python
- Dia 12: Laços de repetição
- Dia 13: Funções
- Dia 14: Revisão de Python básico

### Semana 3 — Dados e SQL

- Dia 15: Introdução a dados
- Dia 16: Tabelas e estrutura de dados
- Dia 17: Introdução a SQL
- Dia 18: Filtrando dados com SQL
- Dia 19: Ordenação e prioridades
- Dia 20: Métricas de atendimento
- Dia 21: Revisão de dados e SQL

### Semana 4 — APIs, automação e portfólio

- Dia 22: O que são APIs?
- Dia 23: Requisições e respostas
- Dia 24: Introdução à automação
- Dia 25: Arquivos e automações simples
- Dia 26: Fluxos de atendimento automatizados
- Dia 27: Projeto prático: triagem de chamados
- Dia 28: Projeto prático: relatório de atendimento
- Dia 29: Preparando seu portfólio
- Dia 30: Fechamento da trilha e próximos passos

---

## Tecnologias utilizadas

- Next.js
- React
- TypeScript
- JavaScript
- HTML
- CSS inline com React
- LocalStorage
- Git
- GitHub

---

## Estrutura principal do projeto

```text
suporte-tech-30-dias
├── apps
│   └── web
│       ├── app
│       │   ├── aulas
│       │   │   └── [day]
│       │   │       └── page.tsx
│       │   ├── certificado
│       │   │   └── page.tsx
│       │   ├── dashboard
│       │   │   └── page.tsx
│       │   ├── layout.tsx
│       │   └── page.tsx
│       └── lib
│           └── lessons.ts
├── README.md
└── package.json
```

---

## Como rodar o projeto localmente

### 1. Clone o repositório

```bash
git clone git@github.com:HanzSolo66/suporte-tech-30-dias.git
```

### 2. Entre na pasta do projeto

```bash
cd suporte-tech-30-dias
```

### 3. Instale as dependências

```bash
pnpm install
```

### 4. Rode o app

```bash
cd apps/web
pnpm dev
```

### 5. Abra no navegador

```text
http://localhost:3000
```

---

## Rotas principais

```text
/                 Página inicial
/dashboard        Painel do aluno
/aulas/dia-1      Aula do Dia 1
/aulas/dia-30     Aula do Dia 30
/certificado      Certificado final
```

---

## Aprendizados do projeto

Durante a construção deste projeto, foram praticados conceitos como:

- criação de aplicação com Next.js;
- componentes React;
- rotas dinâmicas;
- estado com `useState`;
- efeitos com `useEffect`;
- persistência local com `localStorage`;
- organização de dados em arquivo central;
- versionamento com Git;
- fluxo com branches e Pull Requests;
- construção de produto pensando em experiência do usuário.

---

## Próximas melhorias

Algumas ideias para evoluir o projeto:

- melhorar o layout com Tailwind CSS;
- adicionar modo responsivo refinado para celular;
- salvar progresso em banco de dados;
- criar login de usuário;
- conectar o Assistente Alex a uma API de IA;
- adicionar vídeos do Curso em Vídeo em cada aula;
- publicar o projeto online;
- criar página pública de apresentação do projeto;
- gerar certificado em PDF;
- adicionar testes automatizados.

---

## Status do projeto

Primeira versão funcional concluída.

O projeto já possui:

- 30 aulas cadastradas;
- dashboard gamificado;
- progresso local;
- quizzes;
- Assistente Alex;
- certificado final;
- fluxo de portfólio.

---

## Autor

Desenvolvido por **Matheus Batista** como projeto de transição de carreira para tecnologia, unindo experiência em atendimento ao público com aprendizado técnico em programação, dados e automação.