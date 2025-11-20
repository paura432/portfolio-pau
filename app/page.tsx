export default function Home() {
  return (
    <main className="max-w-2xl mx-auto py-16 px-5 space-y-14">
      
      {/* Header */}
      <header className="flex items-center gap-6">
        <img
          src="/profile.jpg"
          alt="profile"
          className="w-24 h-24 rounded-full border border-zinc-700"
        />
        <div>
          <h1 className="text-3xl font-semibold">Pau Ramos Simo</h1>
          <p className="text-zinc-400">
            Software Developer · Telefónica Tech · 42 Madrid
          </p>
        </div>
      </header>

      {/* About */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Sobre mí</h2>
        <p className="text-zinc-300 leading-relaxed">
          Desarrollador en Telefónica Tech especializado en identidad digital,
          verifiable credentials, APIs, blockchain y demos técnicas. 
          Estudiante en 42 Madrid, apasionado por C, C++, sistemas distribuidos
          y soluciones cloud.
        </p>
      </section>

      {/* Tech */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Tecnologías</h2>
        <div className="flex flex-wrap gap-3 text-sm">
          {[
            "C", "C++", "TypeScript", "Next.js", "Node.js",
            "Docker", "AWS", "Verifiable Credentials", "Blockchain"
          ].map((t) => (
            <span
              key={t}
              className="px-3 py-1 border border-zinc-700 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Proyectos destacados</h2>

        <div className="space-y-5">
          <Project
            title="VCS API — TrustOS"
            desc="API para emisión y verificación de credenciales verificables. Integración con Procivis, PrivadoID e Idenfy."
            link="https://github.com/telefonicatech"
          />

          <Project
            title="Demo Identidad Salud"
            desc="Flujo completo con QR, wallets y animaciones. Next.js + mTLS + verificación avanzada."
          />

          <Project
            title="NorteVerse VC Game"
            desc="Sistema gamificado de credenciales con comparación de atributos y mundos alternos."
            link="https://github.com/paura432"
          />
        </div>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Contacto</h2>
        <p className="text-zinc-300">
          <a href="mailto:pauramosimo@gmail.com">pauramosimo@gmail.com</a>
        </p>
        <p className="text-zinc-300">
          <a href="https://linkedin.com/in/pauramosimo">
            linkedin.com/in/pauramosimo
          </a>
        </p>
      </section>
    </main>
  );
}

function Project({ title, desc, link }: { title: string; desc: string; link?: string }) {
  return (
    <div className="border border-zinc-800 rounded-xl p-4 hover:bg-zinc-900 transition">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-zinc-400 text-sm mt-1">{desc}</p>
      {link && (
        <a href={link} className="text-blue-400 text-sm mt-2 inline-block">
          Ver proyecto →
        </a>
      )}
    </div>
  );
}
