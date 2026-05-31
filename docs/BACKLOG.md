# Backlog MVP e User Stories

Este documento detalha o escopo do Minimum Viable Product (MVP) utilizando o método MoSCoW para priorização e descreve as User Stories principais.

## Priorização MoSCoW

### Must Have (Obrigatório para o MVP)
- Cadastro e Login de usuários.
- Visualização da trilha de estudos (Aulas liberadas em sequência).
- Player de conteúdo (Suporte a vídeos incorporados e texto).
- Motor de Quiz (Múltipla escolha com feedback de acerto/erro).
- Cálculo básico de progresso (Aulas concluídas vs Total).
- Sistema de XP básico.
- Dashboard inicial do aluno.

### Should Have (Importante, mas não bloqueia o lançamento)
- Assistente de IA para dúvidas na aula.
- Sistema de Streak (dias consecutivos).
- Badges e Conquistas.
- Explicações detalhadas para respostas incorretas no Quiz.

### Could Have (Desejável, se houver tempo)
- Aprendizado adaptativo (sugestão de revisão automática).
- Geração de Certificado em PDF.
- Ranking entre usuários.

### Won't Have (Não estará no MVP)
- Aplicativo Mobile Nativo.
- Simulador de atendimento com voz.
- Painel Administrativo completo (conteúdos inseridos via seed/banco no MVP).

---

## User Stories (MVP)

### Épico 1: Autenticação e Onboarding
**US1.1:** Como um usuário iniciante, eu quero me cadastrar na plataforma usando meu e-mail, para que eu possa ter meu progresso salvo.
- **Critérios de Aceite:**
  - Formulário com Nome, E-mail e Senha.
  - Validação de formato de e-mail e força da senha.
  - Redirecionamento para o Dashboard após sucesso.

**US1.2:** Como um usuário cadastrado, eu quero fazer login na plataforma, para que eu possa continuar meus estudos de onde parei.
- **Critérios de Aceite:**
  - Formulário de login.
  - Recuperação de senha básica.

### Épico 2: Trilha de Aprendizado e Aulas
**US2.1:** Como aluno, eu quero visualizar a trilha de 30 dias dividida por semanas, para que eu saiba exatamente o que preciso estudar hoje.
- **Critérios de Aceite:**
  - Tela exibindo os módulos (Semanas 1 a 4).
  - Aulas bloqueadas até que a anterior seja concluída.
  - Indicador visual claro da próxima aula a ser feita.

**US2.2:** Como aluno, eu quero acessar o conteúdo de uma aula (vídeo, texto, exemplos), para que eu possa aprender o conceito do dia.
- **Critérios de Aceite:**
  - Tela de aula limpa e sem distrações.
  - Player de vídeo funcional.
  - Estrutura clara: Objetivo, Explicação, Exemplo.

### Épico 3: Avaliação e Quizzes
**US3.1:** Como aluno, eu quero responder a um quiz ao final da aula, para testar meus conhecimentos recém-adquiridos.
- **Critérios de Aceite:**
  - Questões de múltipla escolha.
  - Seleção de apenas uma alternativa.
  - Botão de "Verificar Resposta".

**US3.2:** Como aluno, eu quero receber feedback imediato após responder o quiz, para saber se acertei ou errei e o motivo.
- **Critérios de Aceite:**
  - Se correto: Mensagem de sucesso, XP ganho e explicação breve.
  - Se incorreto: Mensagem de erro amigável, explicação do erro e qual era a correta.

### Épico 4: Gamificação e Progresso
**US4.1:** Como aluno, eu quero ver minha barra de progresso e XP total no Dashboard, para me sentir motivado a continuar.
- **Critérios de Aceite:**
  - Dashboard deve exibir XP total.
  - Dashboard deve exibir % de conclusão do curso.

**US4.2:** Como aluno, eu quero receber "Badges" ao concluir marcos importantes (ex: Primeira Aula, Semana 1 concluída), para sentir que estou evoluindo como em um jogo.
- **Critérios de Aceite:**
  - Notificação visual (modal ou toast) ao ganhar uma badge.
  - Seção no perfil para listar badges conquistadas.

### Épico 5: Suporte IA (Should Have)
**US5.1:** Como aluno, eu quero poder fazer uma pergunta para o Assistente IA durante a aula, para tirar dúvidas sem precisar sair da plataforma.
- **Critérios de Aceite:**
  - Chat lateral ou modal na tela de aula.
  - IA deve responder com tom amigável e didático.
  - IA deve ter contexto sobre qual aula o aluno está assistindo.
