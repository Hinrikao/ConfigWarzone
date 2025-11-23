import { usuarios } from "../data/usuarios";

const statusClasses: Record<(typeof usuarios)[number]["status"], string> = {
  ativo: "bg-emerald-500/20 text-emerald-100 border border-emerald-400/40",
  pendente: "bg-amber-500/20 text-amber-100 border border-amber-400/40",
  suspenso: "bg-rose-500/20 text-rose-100 border border-rose-400/40",
};

export function UsuariosPainel() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg" aria-label="Usuários da equipe">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex flex-col gap-1">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">Pessoas e acessos</p>
          <h2 className="text-2xl font-semibold text-white">Controle de usuários</h2>
          <p className="text-sm text-white/70">Convide, aprove e suspenda sem perder rastreabilidade.</p>
        </div>
        <div className="flex flex-wrap gap-2 text-xs">
          <button className="rounded-full bg-white/10 px-4 py-2 font-semibold text-white transition hover:bg-white/20">
            Convidar novo
          </button>
          <button className="rounded-full border border-white/20 px-4 py-2 font-semibold text-white transition hover:bg-white/10">
            Editar permissões
          </button>
        </div>
      </div>

      <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-black/40">
        <div className="grid grid-cols-5 gap-3 border-b border-white/10 px-4 py-3 text-xs uppercase tracking-[0.25em] text-white/60">
          <span>Nome</span>
          <span>Função</span>
          <span>Status</span>
          <span>Contato</span>
          <span>Última atividade</span>
        </div>
        <ul className="divide-y divide-white/5 text-sm text-white/80">
          {usuarios.map((usuario) => (
            <li key={usuario.id} className="grid grid-cols-5 items-center gap-3 px-4 py-3">
              <div className="flex flex-col">
                <span className="font-semibold text-white">{usuario.nome}</span>
                <span className="text-xs text-white/60">ID {usuario.id}</span>
              </div>
              <span className="rounded-full bg-white/5 px-3 py-1 text-center text-white/80">{usuario.papel}</span>
              <span className={`rounded-full px-3 py-1 text-center text-xs font-semibold ${statusClasses[usuario.status]}`}>
                {usuario.status}
              </span>
              <span className="text-white/70">{usuario.email}</span>
              <span className="text-white/60">{usuario.ultimaAtividade}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
