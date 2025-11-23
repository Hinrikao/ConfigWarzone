import { politicasVisibilidade, niveisPrivacidade } from "../data/privacidade";

const statusCores: Record<(typeof politicasVisibilidade)[number]["status"], string> = {
  online: "bg-emerald-500/20 text-emerald-100 border-emerald-400/40",
  pendente: "bg-amber-500/20 text-amber-100 border-amber-400/40",
};

export function PrivacidadePainel() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg" aria-label="Privacidade e vitrine">
      <div className="flex flex-col gap-2">
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">Privacidade & público</p>
        <h2 className="text-2xl font-semibold text-white">Controle oficial de visibilidade</h2>
        <p className="text-sm text-white/70">
          Separe o que fica público, restrito ao squad ou totalmente privado. A vitrine só exibe armas aprovadas.
        </p>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {niveisPrivacidade.map((nivel) => (
          <div
            key={nivel.id}
            className={`flex h-full flex-col gap-2 rounded-2xl border p-4 ${
              nivel.ativo ? "border-emerald-400/30 bg-emerald-500/10" : "border-white/10 bg-black/30"
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-lg font-semibold text-white">{nivel.titulo}</h3>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  nivel.ativo ? "bg-emerald-400 text-slate-950" : "bg-white/10 text-white"
                }`}
              >
                {nivel.ativo ? "Ativo" : "Desligado"}
              </span>
            </div>
            <p className="text-sm text-white/80">{nivel.descricao}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 bg-black/40 p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-white/60">Checklist oficial</p>
            <h3 className="text-lg font-semibold text-white">Políticas de exibição</h3>
          </div>
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">Atualiza em tempo real</span>
        </div>
        <ul className="mt-3 grid gap-3 md:grid-cols-3 text-sm text-white/80">
          {politicasVisibilidade.map((politica) => (
            <li
              key={politica.id}
              className="flex flex-col gap-2 rounded-xl border border-white/10 bg-white/5 p-3"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-semibold text-white">{politica.titulo}</span>
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusCores[politica.status]}`}>
                  {politica.status === "online" ? "Online" : "Pendente"}
                </span>
              </div>
              <p>{politica.detalhe}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
