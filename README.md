# Questione o Mago

Plataforma de apoio à tomada de decisões com IA. O usuário apresenta duas opções e um contexto; o Mago analisa e recomenda uma escolha, com justificativa detalhada.

## Stack

- React + Vite + TypeScript
- Tailwind CSS v4
- Supabase (auth + banco de dados)
- TanStack Query (cache/estado de servidor)
- Zustand (estado de cliente)
- React Hook Form + Zod (formulários/validação)
- React Router

## Estrutura de pastas

```
src/
  components/
    ui/          # componentes de UI genéricos (botões, inputs, cards)
    mago/        # componentes ligados ao personagem (animação, avatar)
  features/
    auth/        # cadastro, login
    decisions/   # criação de decisão, chamada à IA, tela de resposta
    history/     # listagem e detalhe de decisões passadas
    evaluation/  # fluxo de "o Mago acertou?"
    dashboard/   # cards de estatísticas simples
  pages/         # páginas/rotas de topo
  lib/           # clientes externos (supabase, IA)
  hooks/         # hooks compartilhados
  stores/        # estado global (zustand)
  types/         # tipos de domínio (User, Decision, Evaluation...)
```

## Setup

```bash
npm install
cp .env.example .env   # preencher com as chaves do Supabase
npm run dev
```

## Escopo do V1 (ver planejamento)

- Cadastro/login
- Criar decisão por texto (voz fica para V2)
- Recomendação da IA com formato estruturado (escolha, confiança, justificativa, pontos positivos, riscos, conselho final)
- Histórico de decisões
- Avaliação solicitada na próxima visita do usuário (não é fluxo ativo/notificação)
- Dashboard com números simples (sem gráficos ainda)

Fora do V1: voz (entrada/saída), estatísticas com gráficos, animação de "pensamento mágico" no loading, categorias, comparações.
