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

## Variáveis de ambiente

Para usar o assistente PetroKoblaco IA com Gemini, crie um arquivo `.env.local` dentro de `apps/web`:

```env
GEMINI_API_KEY=sua_chave_do_google_ai_studio
```

A chave não deve ser enviada para o GitHub. Em produção, configure a mesma variável de ambiente na Vercel.

Sem essa variável, o app continua abrindo normalmente, mas o assistente IA não conseguirá responder.---

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