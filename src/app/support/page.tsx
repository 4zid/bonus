import Link from "next/link";

export const metadata = {
  title: "Soporte - FitBulk",
};

export default function Support() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-12">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-[13px] text-[#888] transition-colors hover:text-[#0a0a0a]"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Volver a FitBulk
      </Link>

      <h1 className="mb-2 text-3xl font-bold tracking-tight text-[#0a0a0a]">
        Soporte
      </h1>
      <p className="mb-8 text-[15px] text-[#888]">
        Estamos aqui para ayudarte con cualquier problema o pregunta.
      </p>

      <div className="space-y-6">
        <div className="card p-6">
          <h2 className="mb-3 text-lg font-semibold text-[#0a0a0a]">
            Preguntas Frecuentes
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-[14px] font-semibold text-[#0a0a0a]">
                ¿Donde se guardan mis datos?
              </h3>
              <p className="mt-1 text-[13px] text-[#666]">
                Todos tus datos se guardan localmente en tu dispositivo. No se
                envian a ningun servidor externo.
              </p>
            </div>
            <div>
              <h3 className="text-[14px] font-semibold text-[#0a0a0a]">
                ¿Pierdo mis datos si desinstalo la app?
              </h3>
              <p className="mt-1 text-[13px] text-[#666]">
                Si, al desinstalar la app se eliminan los datos almacenados
                localmente. Te recomendamos anotar tu progreso importante antes
                de desinstalar.
              </p>
            </div>
            <div>
              <h3 className="text-[14px] font-semibold text-[#0a0a0a]">
                ¿Puedo modificar las rutinas?
              </h3>
              <p className="mt-1 text-[13px] text-[#666]">
                Actualmente las rutinas vienen predefinidas con un plan
                Upper/Lower optimizado. Podes registrar tus propios pesos y
                repeticiones en la seccion de progreso.
              </p>
            </div>
            <div>
              <h3 className="text-[14px] font-semibold text-[#0a0a0a]">
                ¿Los valores nutricionales son exactos?
              </h3>
              <p className="mt-1 text-[13px] text-[#666]">
                Los valores son aproximados y pueden variar segun los
                ingredientes y las porciones que uses. Siempre consulta con
                un nutricionista para un plan personalizado.
              </p>
            </div>
          </div>
        </div>

        <div className="card p-6">
          <h2 className="mb-3 text-lg font-semibold text-[#0a0a0a]">
            Contacto
          </h2>
          <p className="mb-4 text-[13px] text-[#666]">
            Si tenes algun problema tecnico, sugerencia o consulta, podes
            contactarnos por email:
          </p>
          <a
            href="mailto:soporte@fitbulk.app"
            className="inline-flex items-center gap-2 rounded-xl bg-[#0a0a0a] px-5 py-2.5 text-[13px] font-semibold text-white transition-all hover:bg-[#222]"
          >
            soporte@fitbulk.app
          </a>
        </div>

        <div className="card p-6">
          <h2 className="mb-3 text-lg font-semibold text-[#0a0a0a]">
            Legal
          </h2>
          <div className="flex gap-4">
            <Link
              href="/privacy"
              className="text-[13px] font-medium text-[#0a0a0a] underline"
            >
              Politica de Privacidad
            </Link>
            <Link
              href="/terms"
              className="text-[13px] font-medium text-[#0a0a0a] underline"
            >
              Terminos de Uso
            </Link>
          </div>
        </div>

        <div className="text-center">
          <p className="font-mono text-[10px] text-[#bbb]">
            FITBULK V2.0.0 — HECHO CON DEDICACION
          </p>
        </div>
      </div>
    </div>
  );
}
