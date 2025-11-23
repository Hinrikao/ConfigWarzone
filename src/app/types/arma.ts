export type Arma = {
  id: string;
  nome: string;
  categoria: string;
  codigoConfiguracao: string;
  descricaoCurta: string;
  raridade: "comum" | "rara" | "lendaria" | "experimental";
  perks: string[];
  imagem?: string;
};
