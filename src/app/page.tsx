import { ArmaGrid } from "./components/ArmaGrid";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 sm:px-8">
        <header className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/80">
            Central de Build Back OPS 7
          </p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            Biblioteca de armas com código pronto para importar e compartilhar
          </h1>
          <p className="max-w-3xl text-lg text-white/80">
            Copie o código da arma, cole no importador do Back OPS 7 e compartilhe com a sua equipe.
            Toda a interface está em português e os códigos ficam separados por categoria, arquivo e
            pasta para facilitar novas entradas.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-white/70">
            <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">
              Importar código em segundos
            </span>
            <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">
              Compartilhar builds validadas
            </span>
            <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">
              Pronto para novos arquivos e pastas
            </span>
          </div>
        </header>

        <section className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-semibold">Arsenal pronto para importar</h2>
            <p className="text-white/70">
              Cada cartão abaixo traz o código único e as vantagens da arma. Clique em copiar ou compartilhar
              para enviar para a squad.
            </p>
          </div>
          <ArmaGrid />
        </section>

        <section className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 text-white/80 md:grid-cols-2">
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-semibold text-white">Como importar o código</h3>
            <ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed">
              <li>Copie o código da arma desejada.</li>
              <li>No Back OPS 7, abra o menu de configurações e escolha a opção “Importar”.</li>
              <li>Cole o código, confirme e aguarde o carregamento automático dos acessórios.</li>
            </ol>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-semibold text-white">Como compartilhar com o esquadrão</h3>
            <ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed">
              <li>Use o botão Compartilhar para gerar o link com o código embutido.</li>
              <li>Envie o link ou o código puro pelo chat ou rede interna do time.</li>
              <li>Todos recebem a mesma build, sem variação ou perda de peças.</li>
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
}
