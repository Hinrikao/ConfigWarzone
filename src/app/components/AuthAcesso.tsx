"use client";

import { useState } from "react";

export function AuthAcesso() {
  const [login, setLogin] = useState({ email: "", senha: "" });
  const [cadastro, setCadastro] = useState({ apelido: "", dataNascimento: "", senha: "", email: "" });
  const [mensagem, setMensagem] = useState<string | null>(null);

  const anunciar = (texto: string) => {
    setMensagem(texto);
    setTimeout(() => setMensagem(null), 2600);
  };

  const handleLogin = () => {
    if (!login.email || !login.senha) {
      anunciar("Preencha login e senha. Email obrigatório em breve.");
      return;
    }
    anunciar("Login validado. Dashboard liberado.");
  };

  const handleCadastro = () => {
    if (!cadastro.apelido || !cadastro.dataNascimento || !cadastro.senha) {
      anunciar("Apelido, senha e data de nascimento são obrigatórios.");
      return;
    }
    anunciar("Perfil criado e pronto para publicar armas públicas.");
  };

  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg" aria-label="Acesso e cadastro">
      <div className="flex flex-col gap-2">
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">Acesso seguro</p>
        <h2 className="text-2xl font-semibold text-white">Login, cadastro e privacidade</h2>
        <p className="text-sm text-white/70">
          Somente usuários autenticados podem alterar configs privadas. Email obrigatório está marcado como &quot;em breve&quot;.
        </p>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">Login</h3>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">Somente email + senha</span>
          </div>
          <div className="mt-3 space-y-3 text-sm text-white/80">
            <label className="flex flex-col gap-1">
              Email (em breve obrigatório)
              <input
                type="email"
                value={login.email}
                onChange={(e) => setLogin({ ...login, email: e.target.value })}
                placeholder="ex: operador@backops.com"
                className="rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-white outline-none focus:border-cyan-400"
              />
            </label>
            <label className="flex flex-col gap-1">
              Senha
              <input
                type="password"
                value={login.senha}
                onChange={(e) => setLogin({ ...login, senha: e.target.value })}
                placeholder="********"
                className="rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-white outline-none focus:border-cyan-400"
              />
            </label>
            <button
              onClick={handleLogin}
              className="mt-2 w-full rounded-full bg-emerald-400 px-4 py-2 font-semibold text-slate-950 transition hover:bg-emerald-300"
            >
              Entrar no dashboard
            </button>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">Cadastro</h3>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">Perfil público opcional</span>
          </div>
          <div className="mt-3 space-y-3 text-sm text-white/80">
            <label className="flex flex-col gap-1">
              Apelido público
              <input
                value={cadastro.apelido}
                onChange={(e) => setCadastro({ ...cadastro, apelido: e.target.value })}
                placeholder="Como seu perfil assina as armas"
                className="rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-white outline-none focus:border-cyan-400"
              />
            </label>
            <label className="flex flex-col gap-1">
              Data de nascimento
              <input
                type="date"
                value={cadastro.dataNascimento}
                onChange={(e) => setCadastro({ ...cadastro, dataNascimento: e.target.value })}
                className="rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-white outline-none focus:border-cyan-400"
              />
            </label>
            <label className="flex flex-col gap-1">
              Senha segura
              <input
                type="password"
                value={cadastro.senha}
                onChange={(e) => setCadastro({ ...cadastro, senha: e.target.value })}
                placeholder="Mínimo 8 caracteres"
                className="rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-white outline-none focus:border-cyan-400"
              />
            </label>
            <label className="flex flex-col gap-1">
              Email (em breve)
              <input
                type="email"
                value={cadastro.email}
                onChange={(e) => setCadastro({ ...cadastro, email: e.target.value })}
                placeholder="Liberaremos verificação por email"
                disabled
                className="rounded-xl border border-dashed border-white/25 bg-black/20 px-3 py-2 text-white/60 outline-none"
              />
            </label>
            <button
              onClick={handleCadastro}
              className="mt-2 w-full rounded-full bg-cyan-400 px-4 py-2 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Criar conta e publicar armas
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-3 text-xs text-white/70" aria-live="polite">
        {mensagem ?? "Login libera dashboard privado; cadastro ativa apelido público nas armas que você publicar."}
      </div>
    </section>
  );
}
