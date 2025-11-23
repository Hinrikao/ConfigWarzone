import { resumoPainel, ultimasAcoes } from "../data/dashboard";

const cardClasses = "rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg";

export function PainelDashboard() {
  return (
    <section className="grid gap-4 lg:grid-cols-5" aria-label="Painel de controle">
      <div className="lg:col-span-3 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <div className={`${cardClasses} flex flex-col gap-1`}>
            <p className="text-xs uppercase tracking-[0.25em] text-white/70">Usuários ativos</p>
            <p className="text-3xl font-bold">{resumoPainel.usuariosAtivos}</p>
            <span className="text-xs text-emerald-300">+3 aprovados hoje</span>
          </div>
          <div className={`${cardClasses} flex flex-col gap-1`}>
            <p className="text-xs uppercase tracking-[0.25em] text-white/70">Armas cadastradas</p>
            <p className="text-3xl font-bold">{resumoPainel.armasCadastradas}</p>
            <span className="text-xs text-cyan-200">Separadas por pasta e categoria</span>
          </div>
          <div className={`${cardClasses} flex flex-col gap-1`}>
            <p className="text-xs uppercase tracking-[0.25em] text-white/70">Importações hoje</p>
            <p className="text-3xl font-bold">{resumoPainel.importacoesHoje}</p>
            <span className="text-xs text-emerald-300">Processador automático ativo</span>
          </div>
          <div className={`${cardClasses} flex flex-col gap-1`}>
            <p className="text-xs uppercase tracking-[0.25em] text-white/70">Compartilhamentos</p>
            <p className="text-3xl font-bold">{resumoPainel.compartilhamentos}</p>
            <span className="text-xs text-white/80">Com feedback e fallback de cópia</span>
          </div>
        </div>

        <div className={`${cardClasses} flex flex-col gap-3`}>
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-lg font-semibold text-white">Atividades recentes</h3>
            <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/70">
              Monitoramento em tempo real
            </span>
          </div>
          <ul className="space-y-2 text-sm text-white/80" aria-label="Eventos recentes">
            {ultimasAcoes.map((acao) => (
              <li
                key={acao.id}
                className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-black/30 px-3 py-2"
              >
                <div className="flex flex-col">
                  <span className="font-semibold text-white">{acao.titulo}</span>
                  <span className="text-white/70">{acao.detalhe}</span>
                </div>
                <span className="text-xs text-white/60">{acao.tempo}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={`${cardClasses} flex flex-col gap-4 lg:col-span-2`}>
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col gap-1">
            <p className="text-xs uppercase tracking-[0.25em] text-white/70">Checklist de prontidão</p>
            <h3 className="text-xl font-semibold text-white">Dashboard Back OPS 7</h3>
          </div>
          <span className="rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-slate-950">
            Online
          </span>
        </div>
        <ul className="space-y-3 text-sm text-white/80">
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" aria-hidden />
            <span>Acesso de usuários aprovado e log registrado.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" aria-hidden />
            <span>Importador validado com códigos legíveis e separados por pasta.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" aria-hidden />
            <span>Compartilhamento com fallback de cópia ativo para squads internos.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-amber-300" aria-hidden />
            <span>Revisão de builds experimentais aguardando aprovação do líder.</span>
          </li>
        </ul>
        <div className="rounded-2xl border border-white/10 bg-black/40 p-3 text-xs text-white/60">
          Cada item do checklist confirma que a detecção de configuração, edição e distribuição de código está
          funcionando sem pular nenhum passo.
        </div>
      </div>
    </section>
  );
}
