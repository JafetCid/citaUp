import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white text-slate-900">
      <section className="container mx-auto px-6 lg:px-20 py-16">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-around">
          {/* contenido del texto */}
          <div className="space-y-6">
            <h1 className="text-4xl text-center font-extrabold leading-tight md:text-start lg:text-5xl">
              Agenda fácil,
              <br />
              rápido y <span className="text-blue-600">sin</span>
              <br />
              <span className="text-blue-600">complicaciones</span>
            </h1>

            <p className="text-center text-slate-600 max-w-xl md:text-start">
              Gestiona tus citas de manera eficiente y olvídate del estrés. 
              <br />
              Nuestra plataforma te permite agendar en segundos.
            </p>

            <div className="flex justify-center md:justify-start">
              <Link
                href="/appointments"
                className="inline-block bg-gradient-to-r from-blue-600 to-sky-400 text-white px-6 py-2.5 rounded-md shadow-md hover:opacity-95"
              >
                Agendar cita
              </Link>
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