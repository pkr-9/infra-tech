import data from "/public/data/procurement.json";

export default function ProcurementApproach() {
  return (
    <section className="container py-16">
      <h1>{data.hero.title}</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {data.principles.map((p) => (
          <div className="card">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>

      <ol className="mt-12 space-y-3">
        {data.flow.map((f, i) => (
          <li>
            {i + 1}. {f}
          </li>
        ))}
      </ol>
    </section>
  );
}
