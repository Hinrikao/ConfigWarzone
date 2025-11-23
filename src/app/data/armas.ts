import { Arma } from "../types/arma";

export const armas: Arma[] = [
  {
    id: "m15-mod-0",
    nome: "M15 Mod 0",
    categoria: "Fuzil de Assalto",
    codigoConfiguracao: "A01-2JDGJ-4UQHW-1711",
    descricaoCurta:
      "Config pensada para médio alcance com recuo estável e mira limpa para rotações rápidas.",
    raridade: "rara",
    perks: ["Mira limpa", "Rocada rápida", "Controle de recuo"],
    imagem: "/armas/m15-mod0.svg",
  },
  {
    id: "ks-7",
    nome: "KS-7",
    categoria: "Escopeta Tática",
    codigoConfiguracao: "B19-8QLMK-2XPPD-0905",
    descricaoCurta:
      "Build compacta focada em limpezas de curta distância com cadência agressiva.",
    raridade: "lendaria",
    perks: ["Cadência agressiva", "Penetração aprimorada", "Mobilidade elevada"],
    imagem: "/armas/ks-7.svg",
  },
  {
    id: "hx-927",
    nome: "HX-927",
    categoria: "SMG Tática",
    codigoConfiguracao: "C07-4PVNS-7QKTA-5210",
    descricaoCurta:
      "SMG silenciosa para flancos. Trocou munição padrão por supersônica para não perder alcance.",
    raridade: "experimental",
    perks: ["Supressor integrado", "Supersônica", "Pente estendido"],
    imagem: "/armas/hx-927.svg",
  },
];
