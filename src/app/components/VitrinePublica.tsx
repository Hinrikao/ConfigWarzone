import { armas } from "../data/armas";

export function VitrinePublica() {
  const armasPublicas = armas.filter((arma) => arma.visibilidade === "publica");

  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg" aria-label="Vitrine pública">
      <div className="flex flex-col gap-2">
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">Vitrine oficial</p>
        <h2 className="text-2xl font-semibold text-white">Armas e configs públicas</h2>
        <p className="text-sm text-white/70">
          Perfis com apelido exibem aqui o que foi marcado como público. Código e autor ficam visíveis para a comunidade.
        </p>
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3 text-sm text-white/80">
        {armasPublicas.map((arma) => (
          <article key={arma.id} className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-black/40 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-white/60">{arma.categoria}</p>
                <h3 className="text-lg font-semibold text-white">{arma.nome}</h3>
              </div>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">{arma.publicadoPor}</span>
            </div>
            <p className="text-white/80">{arma.descricaoCurta}</p>
            <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.2em] text-white/60">
              {arma.perks.map((perk) => (
                <span key={perk} className="rounded-full border border-white/15 bg-white/5 px-3 py-1">
                  {perk}
                </span>
              ))}
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 font-mono text-white">
              {arma.codigoConfiguracao}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
