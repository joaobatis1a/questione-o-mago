// Tipos de domínio do Questione o Mago
// Espelham o schema definido para o V1 (users, decisions, evaluations)

export type Escolha = 'opcao_1' | 'opcao_2'

export type DecisionStatus = 'pendente' | 'avaliada'

export type EvaluationResultado = 'acertou' | 'errou'

export interface User {
  id: string
  nome: string
  email: string
  created_at: string
}

export interface RespostaMago {
  escolha: Escolha
  confianca: number // 0-100
  justificativa: string
  pontos_positivos: string[]
  possiveis_riscos: string[]
  conselho_final: string
}

export interface Decision {
  id: string
  user_id: string
  titulo: string
  opcao_1: string
  opcao_2: string
  contexto: string
  resposta: RespostaMago
  escolha: Escolha
  confianca: number
  status: DecisionStatus
  created_at: string
}

export interface Evaluation {
  id: string
  decision_id: string
  resultado: EvaluationResultado
  created_at: string
}

export interface DashboardStats {
  total_decisoes: number
  precisao: number // percentual de acertos
  acertos: number
  erros: number
  pendentes: number
}
