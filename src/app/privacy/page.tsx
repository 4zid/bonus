import Link from "next/link";

export const metadata = {
  title: "Politica de Privacidad - FitBulk",
};

export default function PrivacyPolicy() {
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
        Politica de Privacidad
      </h1>
      <p className="mb-8 font-mono text-[11px] text-[#888]">
        Ultima actualizacion: Marzo 2026
      </p>

      <div className="space-y-6 text-[15px] leading-relaxed text-[#444]">
        <section>
          <h2 className="mb-2 text-lg font-semibold text-[#0a0a0a]">
            1. Informacion que Recopilamos
          </h2>
          <p>
            FitBulk es una aplicacion de fitness que funciona completamente de
            forma local en tu dispositivo. <strong>No recopilamos, almacenamos
            ni transmitimos ninguna informacion personal</strong> a servidores
            externos.
          </p>
          <p className="mt-2">
            Los datos que ingresas en la app (registros de ejercicios, progreso,
            preferencias de menu) se guardan unicamente en el almacenamiento
            local de tu dispositivo.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-[#0a0a0a]">
            2. Uso de Datos
          </h2>
          <p>
            Todos los datos generados en FitBulk permanecen en tu dispositivo y
            son utilizados exclusivamente para proporcionarte la funcionalidad
            de la app:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-[#666]">
            <li>Mostrar tu rutina de entrenamiento personalizada</li>
            <li>Registrar y visualizar tu progreso de ejercicios</li>
            <li>Generar menus diarios basados en las opciones de dieta</li>
            <li>Guardar tus preferencias de la app</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-[#0a0a0a]">
            3. Almacenamiento de Datos
          </h2>
          <p>
            FitBulk utiliza el almacenamiento local del dispositivo (localStorage)
            para guardar tus datos. Esto significa que:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-[#666]">
            <li>Tus datos nunca salen de tu dispositivo</li>
            <li>No se envian datos a servidores de terceros</li>
            <li>
              Si desinstalas la app, los datos almacenados localmente seran
              eliminados
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-[#0a0a0a]">
            4. Servicios de Terceros
          </h2>
          <p>
            FitBulk no integra servicios de analiticas, publicidad ni
            rastreadores de terceros. No compartimos datos con ninguna empresa
            externa.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-[#0a0a0a]">
            5. Seguridad
          </h2>
          <p>
            Al mantener todos los datos localmente en tu dispositivo,
            minimizamos los riesgos de seguridad asociados con la transmision
            de datos. La seguridad de tus datos depende de la seguridad de tu
            dispositivo.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-[#0a0a0a]">
            6. Privacidad de Menores
          </h2>
          <p>
            FitBulk no esta dirigida a menores de 13 años. No recopilamos
            intencionalmente informacion de menores de edad.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-[#0a0a0a]">
            7. Cambios a esta Politica
          </h2>
          <p>
            Podemos actualizar esta politica de privacidad periodicamente. Te
            notificaremos sobre cualquier cambio publicando la nueva politica
            en esta pagina con una fecha de actualizacion revisada.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-[#0a0a0a]">
            8. Contacto
          </h2>
          <p>
            Si tienes preguntas sobre esta politica de privacidad, puedes
            contactarnos a traves de la pagina de{" "}
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
