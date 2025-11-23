import { Usuario } from "../types/usuario";

export const usuarios: Usuario[] = [
  {
    id: "usr-01",
    nome: "Camila Duarte",
    papel: "Lider",
    email: "camila.duarte@squad.br",
    status: "ativo",
    ultimaAtividade: "Agora mesmo",
  },
  {
    id: "usr-02",
    nome: "Rafael Nogueira",
    papel: "Analista",
    email: "rafael.nogueira@squad.br",
    status: "ativo",
    ultimaAtividade: "Há 6 minutos",
  },
  {
    id: "usr-03",
    nome: "Bianca Carvalho",
    papel: "Operador",
    email: "bianca.carvalho@squad.br",
    status: "pendente",
    ultimaAtividade: "Aguardando convite",
  },
  {
    id: "usr-04",
    nome: "Ígor Mendes",
    papel: "Convidado",
    email: "igor.mendes@squad.br",
    status: "ativo",
    ultimaAtividade: "Há 34 minutos",
  },
  {
    id: "usr-05",
    nome: "Paola Costa",
    papel: "Analista",
    email: "paola.costa@squad.br",
    status: "suspenso",
    ultimaAtividade: "Revisão necessária",
  },
];
