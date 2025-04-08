//src\app\about\page.tsx

import Navbar from "@/components/navbar"

export default function About() {
  return (
    <main>
      <Navbar />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 ">Página Acerca de</h1>
        <p className="mb-4">Esta es la página acerca de nuestra aplicación demo multi-país por puerto.</p>
        <p>
          La barra de navegación de arriba muestra un mensaje diferente dependiendo del puerto (país) desde el que
          accedes:
        </p>
        <ul className="list-disc pl-5 mt-4 space-y-1">
          <li>Puerto 3000: Argentina 🇦🇷</li>
          <li>Puerto 3001: Chile 🇨🇱</li>
          <li>Puerto 3002: Paraguay 🇵🇾</li>
          <li>Puerto 3003: Colombia 🇨🇴</li>
          <li>Puerto 3004: Ecuador 🇪🇨</li>
          <li>Puerto 3005: Panamá 🇵🇦</li>
        </ul>
      </div>
    </main>
  )
}

