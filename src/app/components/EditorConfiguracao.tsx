"use client";

import { useMemo, useState } from "react";
import { armas } from "../data/armas";

const estadoInicial = {
  nome: "",
  codigo: "",
  categoria: "",
  descricao: "",
  autor: "",
};

export function EditorConfiguracao() {
  const [form, setForm] = useState(estadoInicial);
  const [mensagem, setMensagem] = useState<string | null>(null);
  const [tipoMensagem, setTipoMensagem] = useState<"sucesso" | "erro" | "info">("info");

  const ultimoDetectado = useMemo(() => {
    if (!form.codigo) return null;
    return armas.find((arma) => arma.codigoConfiguracao === form.codigo);
  }, [form.codigo]);

  const anunciar = (texto: string, tipo: "sucesso" | "erro" | "info") => {
    setMensagem(texto);
    setTipoMensagem(tipo);
    setTimeout(() => setMensagem(null), 2600);
  };

  const handleDetectar = () => {
    if (!form.codigo.trim()) {
      anunciar("Informe um código para detectar configuração.", "info");
      return;
    }

    const encontrado = armas.find(
      (arma) =>
        arma.codigoConfiguracao === form.codigo.trim() ||
        arma.nome.toLowerCase() === form.nome.trim().toLowerCase(),
    );

    if (!encontrado) {
      anunciar("Nenhuma configuração encontrada para este código.", "erro");
      return;
    }

    setForm({
      nome: encontrado.nome,
      codigo: encontrado.codigoConfiguracao,
      categoria: encontrado.categoria,
      descricao: encontrado.descricaoCurta,
      autor: form.autor || "Operador Desconhecido",
    });
    anunciar("Config detectada e pré-preenchida.", "sucesso");
  };

  const handleSalvar = () => {
    if (!form.nome || !form.codigo || !form.categoria || !form.descricao) {
      anunciar("Preencha todos os campos para salvar a configuração.", "erro");
      return;
    }

    anunciar("Configuração salva e pronta para importar/compartilhar.", "sucesso");
  };

  const handleLimpar = () => {
    setForm(estadoInicial);
    anunciar("Campos limpos e prontos para nova configuração.", "info");
  };

  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg">
      <div className="flex flex-col gap-2">
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">Editor central</p>
        <h2 className="text-2xl font-semibold text-white">Detectar, editar e salvar configs</h2>
        <p className="text-sm text-white/70">
          Digite um código existente para detectar a build automaticamente, edite os dados e deixe pronto para
          enviar para a squad.
        </p>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm text-white/80">
          Nome da arma/configuração
          <input
            value={form.nome}
            onChange={(e) => setForm({ ...form, nome: e.target.value })}
            className="rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-white outline-none focus:border-cyan-400"
            placeholder="Ex: HX-927"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm text-white/80">
          Código do jogo
          <input
            value={form.codigo}
            onChange={(e) => setForm({ ...form, codigo: e.target.value })}
            className="rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-white outline-none focus:border-cyan-400"
            placeholder="Ex: C07-4PVNS-7QKTA-5210"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm text-white/80">
          Categoria
          <input
            value={form.categoria}
            onChange={(e) => setForm({ ...form, categoria: e.target.value })}
            className="rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-white outline-none focus:border-cyan-400"
            placeholder="Fuzil de assalto, SMG tática, etc"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm text-white/80">
          Autor/responsável
          <input
            value={form.autor}
            onChange={(e) => setForm({ ...form, autor: e.target.value })}
            className="rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-white outline-none focus:border-cyan-400"
            placeholder="Nome ou callsign"
          />
        </label>
      </div>

      <label className="mt-4 flex flex-col gap-2 text-sm text-white/80">
        Descrição ou observação
        <textarea
          value={form.descricao}
          onChange={(e) => setForm({ ...form, descricao: e.target.value })}
          className="min-h-[96px] rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-white outline-none focus:border-cyan-400"
          placeholder="Importante para quem for importar a build"
        />
      </label>

      <div className="mt-5 flex flex-wrap gap-3 text-sm">
        <button
          onClick={handleDetectar}
          className="rounded-full bg-white/10 px-4 py-2 font-semibold text-white transition hover:bg-white/20"
        >
          Detectar config
        </button>
        <button
          onClick={handleSalvar}
          className="rounded-full bg-emerald-400 px-4 py-2 font-semibold text-slate-950 transition hover:bg-emerald-300"
        >
          Salvar e liberar
        </button>
        <button
          onClick={handleLimpar}
          className="rounded-full border border-white/20 px-4 py-2 font-semibold text-white transition hover:bg-white/10"
        >
          Limpar campos
        </button>
      </div>

      <div
        aria-live="polite"
        className={`mt-4 rounded-xl border px-4 py-3 text-sm ${
          tipoMensagem === "sucesso"
            ? "border-emerald-400/50 bg-emerald-500/10 text-emerald-100"
            : tipoMensagem === "erro"
              ? "border-rose-400/60 bg-rose-500/10 text-rose-100"
              : "border-white/15 bg-white/5 text-white/80"
        }`}
      >
        {mensagem ?? "Informe um código para detectar, depois edite e salve sem pular etapas."}
      </div>

      {ultimoDetectado && (
        <div className="mt-4 rounded-2xl border border-white/10 bg-black/40 p-4 text-sm text-white/80">
          <p className="text-xs uppercase tracking-[0.3em] text-white/60">Pré-visualização detectada</p>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-white/10 px-3 py-1 text-white">{ultimoDetectado.nome}</span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-white/80">{ultimoDetectado.categoria}</span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-white/80">{ultimoDetectado.raridade}</span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-white/80">
              Código {ultimoDetectado.codigoConfiguracao}
            </span>
          </div>
        </div>
      )}
    </section>
  );
}
