import data from "/public/data/delivery.json";

export default function DeliveryProcess() {
  return (
    <section className="container py-16">
      <h1 className="text-4xl font-bold mb-10">How We Deliver</h1>

      <div className="grid md:grid-cols-4 gap-6">
        {data.steps.map((s) => (
          <div className="card p-6 rounded-2xl border">
            <h3 className="text-xl mb-3">{s.title}</h3>
            <ul className="space-y-2">
              {s.points.map((p) => (
                <li>✓ {p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
