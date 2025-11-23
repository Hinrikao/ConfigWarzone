import { ArmaGrid } from "./components/ArmaGrid";
import { EditorConfiguracao } from "./components/EditorConfiguracao";
import { PainelDashboard } from "./components/PainelDashboard";
import { UsuariosPainel } from "./components/UsuariosPainel";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 sm:px-8">
        <header className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/80">Central Back OPS 7</p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            Dashboard, usuários e configs prontos para importar e compartilhar
          </h1>
          <p className="max-w-3xl text-lg text-white/80">
            Detecte códigos, edite configs e administre o acesso das pessoas sem pular etapas. Tudo separado por
            arquivos, pastas e categorias para facilitar novos envios.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-white/70">
            <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">Importador validado</span>
            <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">Controle de usuários</span>
            <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">Dashboard em português</span>
          </div>
        </header>

        <PainelDashboard />

        <EditorConfiguracao />

        <section className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-semibold">Arsenal pronto para importar</h2>
            <p className="text-white/70">
              Cada cartão traz o código único e as vantagens da arma. Clique em copiar ou compartilhar para enviar para
              a squad.
            </p>
          </div>
          <ArmaGrid />
        </section>

        <UsuariosPainel />
      </div>
    </div>
  );
}
