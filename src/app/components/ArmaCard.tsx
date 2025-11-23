"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Arma } from "../types/arma";

const raridadeEstilos: Record<Arma["raridade"], string> = {
  comum: "bg-slate-900 text-slate-100 border-slate-800",
  rara: "bg-cyan-950 text-cyan-50 border-cyan-800",
  lendaria: "bg-amber-900 text-amber-50 border-amber-800",
  experimental: "bg-fuchsia-900 text-fuchsia-50 border-fuchsia-700",
};

const raridadeLabels: Record<Arma["raridade"], string> = {
  comum: "Comum",
  rara: "Rara",
  lendaria: "Lendária",
  experimental: "Experimental",
};

const visibilidadeLabels: Record<Arma["visibilidade"], string> = {
  publica: "Público",
  privada: "Privado",
  squad: "Squad",
};

const visibilidadeClasses: Record<Arma["visibilidade"], string> = {
  publica: "bg-emerald-500/20 text-emerald-100 border-emerald-400/40",
  privada: "bg-slate-800 text-slate-100 border-white/15",
  squad: "bg-cyan-500/20 text-cyan-50 border-cyan-400/40",
};

function gerarLinkCompartilhamento(arma: Arma) {
  const base = "https://back-ops-7.example/config";
  const params = new URLSearchParams({
    arma: arma.nome,
    codigo: arma.codigoConfiguracao,
  });

  return `${base}?${params.toString()}`;
}

type Props = {
  arma: Arma;
};

export function ArmaCard({ arma }: Props) {
  const [copiado, setCopiado] = useState(false);
  const [mensagem, setMensagem] = useState<string | null>(null);
  const shareLink = useMemo(() => gerarLinkCompartilhamento(arma), [arma]);

  const anunciar = (texto: string) => {
    setMensagem(texto);
    setTimeout(() => setMensagem(null), 2200);
  };

  const handleCopiar = async () => {
    try {
      await navigator.clipboard.writeText(arma.codigoConfiguracao);
      setCopiado(true);
      anunciar("Código copiado");
      setTimeout(() => setCopiado(false), 1800);
    } catch (error) {
      console.error("Erro ao copiar", error);
      anunciar("Não foi possível copiar. Tente novamente.");
    }
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: `Configuração ${arma.nome}`,
          text: `Use o código ${arma.codigoConfiguracao} no Back OPS 7`,
          url: shareLink,
        });
        anunciar("Link compartilhado");
        return;
      }

      await navigator.clipboard.writeText(shareLink);
      anunciar("Link copiado para envio");
      setCopiado(true);
      setTimeout(() => setCopiado(false), 1800);
    } catch (error) {
      console.error("Erro ao compartilhar", error);
      anunciar("Compartilhamento falhou. Copie manualmente o link.");
    }
  };

  return (
    <article
      className={`flex flex-col gap-4 overflow-hidden rounded-3xl border p-6 shadow-xl transition-transform duration-200 hover:-translate-y-1 ${raridadeEstilos[arma.raridade]}`}
    >
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-xs uppercase tracking-[0.3em] text-white/80">
            {arma.categoria}
          </p>
          <h3 className="text-2xl font-semibold leading-tight">{arma.nome}</h3>
          <p className="text-xs text-white/70">
            {arma.publicadoPor ? `Publicado por ${arma.publicadoPor}` : "Autor não informado"}
          </p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <span className="rounded-full border border-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
            {raridadeLabels[arma.raridade]}
          </span>
          <span
            className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${visibilidadeClasses[arma.visibilidade]}`}
          >
            {visibilidadeLabels[arma.visibilidade]}
          </span>
        </div>
      </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col justify-between gap-3">
            <p className="text-sm text-white/90">{arma.descricaoCurta}</p>
            <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-white/70">
              {arma.perks.map((perk) => (
                <span
                  key={perk}
                  className="rounded-full border border-white/20 px-3 py-1 bg-white/5"
                >
                  {perk}
                </span>
              ))}
            </div>
          </div>

          <div className="relative isolate overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/0 to-black/40" />
            {arma.imagem ? (
              <Image
                src={arma.imagem}
                alt={`Arte da arma ${arma.nome}`}
                width={420}
                height={240}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center p-6 text-center text-sm text-white/70">
                Visual da arma não encontrado. Coloque o arquivo em {"`public/armas`"}.
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-[0.3em] text-white/70">
            Código de Configuração
          </p>
          <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-white/15 bg-black/40 px-4 py-3 text-lg font-mono">
            <span className="text-white">{arma.codigoConfiguracao}</span>
            <div className="flex flex-1 justify-end gap-2 text-sm">
              <button
                onClick={handleCopiar}
                className="rounded-full bg-white/10 px-4 py-2 font-semibold text-white transition hover:bg-white/20"
              >
                {copiado ? "Copiado!" : "Copiar código"}
              </button>
              <button
                onClick={handleShare}
                className="rounded-full bg-cyan-400 px-4 py-2 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Compartilhar
              </button>
            </div>
          </div>
          <div aria-live="polite" className="text-xs text-white/70">
            {mensagem ?? "Cole este código no importador do Back OPS 7 para carregar os acessórios automaticamente."}
          </div>
        </div>
      </article>
    );
  }
