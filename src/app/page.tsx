import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white text-slate-900">
      <section className="container mx-auto px-6 lg:px-20 py-16">
        <div className="flex flex-col md:flex-row gap-8 justify-around items-center">
          {/* contenido del texto */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
              Agenda fácil,
              <br />
              rápido y <span className="text-blue-600">sin</span>
              <br />
              <span className="text-blue-600">complicaciones</span>
            </h1>

            <p className="text-slate-600 max-w-xl">
              Gestiona tus citas de manera eficiente y olvídate del estrés. 
              <br />
              Nuestra plataforma te permite agendar en segundos.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#agendar"
                className="inline-block bg-gradient-to-r from-blue-600 to-sky-400 text-white px-6 py-2.5 rounded-md shadow-md hover:opacity-95"
              >
                Agendar cita
              </a>
            </div>
          </div>
          
          {/* imagen */}
          <div>
            <Image
              src="/CitaUp.png"
              alt="Ilustración CitaUp"
              width={350}
              height={280}
              className="rounded-md object-contain"
              priority
            />
          </div>
        </div>
      </section>
    </main>
  );
}