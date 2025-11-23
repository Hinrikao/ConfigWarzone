export type Usuario = {
  id: string;
  nome: string;
  papel: "Operador" | "Analista" | "Lider" | "Convidado";
  email: string;
  status: "ativo" | "pendente" | "suspenso";
  ultimaAtividade: string;
};
