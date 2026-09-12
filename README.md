# Questione o Mago

**Apoio à tomada de decisões com IA** · React · Supabase

[![License: MIT](https://img.shields.io/badge/license-MIT-A78BFA?style=flat-square)](LICENSE)

O usuário apresenta duas opções e um contexto; o Mago analisa e recomenda uma escolha, com justificativa detalhada.

🚧 **Estágio inicial.** Só a tela de login existe até agora, o restante ainda é planejamento.

## Sobre o projeto

Projeto pessoal pra estudar o fluxo de decisão assistida por IA: o usuário descreve duas opções e o contexto, e recebe uma recomendação estruturada (escolha, confiança, justificativa, pontos positivos, riscos e conselho final).

## Escopo planejado

- Cadastro e login
- Criar decisão por texto (entrada por voz fica pra uma versão futura)
- Recomendação da IA em formato estruturado
- Histórico de decisões
- Avaliação pedida na próxima visita (não é notificação ativa)
- Dashboard com números simples

## Stack

- **React** + **Vite** + **TypeScript**
- **Tailwind CSS v4**
- **Supabase**, autenticação e banco de dados
- **TanStack Query**, cache e estado de servidor
- **Zustand**, estado de cliente
- **React Hook Form** + **Zod**, formulários e validação
- **React Router**

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

## Como rodar

```bash
git clone https://github.com/joaobatis1a/questione-o-mago.git
cd questione-o-mago
npm install
cp .env.example .env   # preencha com as chaves do Supabase
npm run dev
```

## Autor

**João Batista da Silva Neto**
Desenvolvedor Full-stack (solo)

- GitHub: [@joaobatis1a](https://github.com/joaobatis1a)
- LinkedIn: [joao-batista-silva-neto](https://linkedin.com/in/joao-batista-silva-neto)
- E-mail: [profissionalba1is1a@gmail.com](mailto:profissionalba1is1a@gmail.com)

## Licença

Distribuído sob a licença MIT. Veja [`LICENSE`](LICENSE) para mais detalhes.
