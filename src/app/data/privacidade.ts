export const niveisPrivacidade = [
  {
    id: "visao-publica",
    titulo: "Exibir arsenal público",
    descricao: "Permite que a comunidade veja configurações aprovadas com apelido e data de publicação.",
    ativo: true,
  },
  {
    id: "visao-squad",
    titulo: "Squad apenas",
    descricao: "Somente integrantes autenticados conseguem importar builds de teste ou sigilosas.",
    ativo: true,
  },
  {
    id: "visao-privada",
    titulo: "Privado",
    descricao: "Bloqueia visualização externa e impede compartilhamento por link direto.",
    ativo: false,
  },
];

export const politicasVisibilidade = [
  {
    id: "politica-importacao",
    titulo: "Importação segura",
    detalhe: "Confere se o código foi validado pelo dashboard antes de liberar em público.",
    status: "online",
  },
  {
    id: "politica-auditoria",
    titulo: "Auditoria de usuários",
    detalhe: "Registro de login, IP e alterações no editor para cada pessoa.",
    status: "online",
  },
  {
    id: "politica-arma-publica",
    titulo: "Vitrine oficial",
    detalhe: "Somente builds marcadas como públicas aparecem na vitrine e na página do perfil.",
    status: "pendente",
  },
];
