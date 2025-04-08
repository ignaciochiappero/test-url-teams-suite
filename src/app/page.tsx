//src\app\page.tsx

import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 ">Bienvenido a la Demo Multi-País por Puerto</h1>
        <p className="mb-4">
          Esta aplicación demuestra cómo mostrar diferentes mensajes en la barra de navegación según el puerto desde el
          que accedes.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg mb-6 text-black">
          <h2 className="text-xl font-semibold mb-2">Cómo funciona:</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Cada puerto de localhost representa un país diferente</li>
            <li>El middleware detecta el puerto y asigna el país correspondiente</li>
            <li>La barra de navegación muestra un mensaje personalizado según el país</li>
          </ul>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg text-black">
          <h2 className="text-xl font-semibold mb-2">Instrucciones para ejecutar en múltiples puertos:</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Abre varias terminales (una para cada puerto)</li>
            <li>En cada terminal, ejecuta el comando correspondiente:</li>
            <pre className="bg-gray-800 text-white p-3 rounded mt-2 overflow-x-auto">
              <code>
                # Terminal 1 (Argentina)
                <br />
                npx next dev -p 3000
                <br />
                <br /># Terminal 2 (Chile)
                <br />
                npx next dev -p 3001
                <br />
                <br /># Terminal 3 (Paraguay)
                <br />
                npx next dev -p 3002
                <br />
                <br /># Terminal 4 (Colombia)
                <br />
                npx next dev -p 3003
                <br />
                <br /># Terminal 5 (Ecuador)
                <br />
                npx next dev -p 3004
                <br />
                <br /># Terminal 6 (Panamá)
                <br />
                npx next dev -p 3005
              </code>
            </pre>
          </ol>
        </div>
      </div>
    </main>
  )
}

