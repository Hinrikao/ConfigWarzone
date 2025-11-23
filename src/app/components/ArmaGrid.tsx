import { armas } from "../data/armas";
import { ArmaCard } from "./ArmaCard";

export function ArmaGrid() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {armas.map((arma) => (
        <ArmaCard key={arma.id} arma={arma} />
      ))}
    </section>
  );
}
