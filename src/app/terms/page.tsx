import Link from "next/link";

export const metadata = {
  title: "Terminos de Uso - FitBulk",
};

export default function TermsOfService() {
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
        Terminos de Uso
      </h1>
      <p className="mb-8 font-mono text-[11px] text-[#888]">
        Ultima actualizacion: Marzo 2026
      </p>

      <div className="space-y-6 text-[15px] leading-relaxed text-[#444]">
        <section>
          <h2 className="mb-2 text-lg font-semibold text-[#0a0a0a]">
            1. Aceptacion de Terminos
          </h2>
          <p>
            Al descargar, instalar o usar FitBulk, aceptas estos terminos de
            uso. Si no estas de acuerdo con estos terminos, no uses la
            aplicacion.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-[#0a0a0a]">
            2. Descripcion del Servicio
          </h2>
          <p>
            FitBulk es una aplicacion de fitness que proporciona:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-[#666]">
            <li>Rutinas de entrenamiento Upper/Lower</li>
            <li>Plan de dieta bulk con opciones de comida asiatica</li>
            <li>Registro y seguimiento de progreso de ejercicios</li>
            <li>Generador aleatorio de menus diarios</li>
            <li>Recetas de salsas y guias de cocina</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-[#0a0a0a]">
            3. Aviso de Salud
          </h2>
          <p>
            <strong>Importante:</strong> FitBulk proporciona informacion general
            de fitness y nutricion con fines informativos unicamente. Esta app
            no sustituye el consejo medico profesional.
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-[#666]">
            <li>
              Consulta con un profesional de la salud antes de comenzar
              cualquier programa de ejercicios o dieta
            </li>
            <li>
              Los valores nutricionales son aproximados y pueden variar segun
              los ingredientes y las porciones
            </li>
            <li>
              No nos hacemos responsables de lesiones o problemas de salud
              derivados del uso de la informacion proporcionada
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-[#0a0a0a]">
            4. Uso Aceptable
          </h2>
          <p>
            FitBulk esta diseñada para uso personal de seguimiento de fitness.
            No debes:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-[#666]">
            <li>Modificar, descompilar o aplicar ingenieria inversa a la app</li>
            <li>
              Usar la app para fines comerciales sin autorizacion
            </li>
            <li>
              Redistribuir el contenido de la app sin permiso
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-[#0a0a0a]">
            5. Propiedad Intelectual
          </h2>
          <p>
            Todo el contenido de FitBulk, incluyendo el diseño, las rutinas,
            las recetas y la interfaz de usuario, esta protegido por derechos
            de propiedad intelectual.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-[#0a0a0a]">
            6. Limitacion de Responsabilidad
          </h2>
          <p>
            FitBulk se proporciona &quot;tal cual&quot; sin garantias de ningun tipo.
            No garantizamos que la app este libre de errores o que funcione
            sin interrupciones. El uso de la app es bajo tu propio riesgo.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-[#0a0a0a]">
            7. Modificaciones
          </h2>
          <p>
            Nos reservamos el derecho de modificar estos terminos en cualquier
            momento. Los cambios seran efectivos al publicarse en la app.
            El uso continuado de FitBulk despues de los cambios constituye
            aceptacion de los nuevos terminos.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-[#0a0a0a]">
            8. Contacto
          </h2>
          <p>
            Para preguntas sobre estos terminos, visita nuestra pagina de{" "}
            <Link href="/support" className="font-medium text-[#0a0a0a] underline">
              soporte
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
