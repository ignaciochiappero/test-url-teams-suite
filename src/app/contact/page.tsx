//src\app\contact\page.tsx

import Navbar from "@/components/navbar"

export default function Contact() {
  return (
    <main>
      <Navbar />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Página de Contacto</h1>
        <p className="mb-4">Esta es la página de contacto de nuestra aplicación demo multi-país por puerto.</p>
        <p>
          La barra de navegación de arriba muestra un mensaje diferente dependiendo del puerto (país) desde el que
          accedes.
        </p>
        <p className="mt-4">Prueba a abrir esta misma página en diferentes puertos para ver cómo cambia el mensaje.</p>
      </div>
    </main>
  )
}

