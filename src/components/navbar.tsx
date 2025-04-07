"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { getCookie } from "cookies-next"

export default function Navbar() {
  const [entryCountry, setEntryCountry] = useState<string | null>(null)
  const [currentPort, setCurrentPort] = useState<string | null>(null)

  useEffect(() => {
    // Obtener el país de entrada desde la cookie
    const storedCountry = getCookie("entry-country")
    if (storedCountry) {
      setEntryCountry(storedCountry.toString())
    }

    // Obtener el puerto actual
    if (typeof window !== "undefined") {
      setCurrentPort(window.location.port)
    }
  }, [])

  // Generar un mensaje de bienvenida basado en el país de entrada
  const getWelcomeMessage = () => {
    if (entryCountry) {
      switch (entryCountry.toLowerCase()) {
        case "argentina":
          return "¡Bienvenido desde Argentina, che! 🇦🇷"
        case "chile":
          return "¡Bienvenido desde Chile, po! 🇨🇱"
        case "paraguay":
          return "¡Bienvenido desde Paraguay! 🇵🇾"
        case "colombia":
          return "¡Bienvenido desde Colombia, parcero! 🇨🇴"
        case "ecuador":
          return "¡Bienvenido desde Ecuador! 🇪🇨"
        case "panama":
          return "¡Bienvenido desde Panamá! 🇵🇦"
        default:
          return `¡Bienvenido desde un país desconocido!`
      }
    } else {
      return "¡Bienvenido a nuestra aplicación!"
    }
  }

  // Generar enlaces a otros "países" (puertos)
  const countryLinks = [
    { port: "3000", country: "Argentina", flag: "🇦🇷" },
    { port: "3001", country: "Chile", flag: "🇨🇱" },
    { port: "3002", country: "Paraguay", flag: "🇵🇾" },
    { port: "3003", country: "Colombia", flag: "🇨🇴" },
    { port: "3004", country: "Ecuador", flag: "🇪🇨" },
    { port: "3005", country: "Panamá", flag: "🇵🇦" },
  ]

  return (
    <div>
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-xl font-bold">
              App Multi-País
            </Link>
            <div className="hidden md:flex space-x-4">
              <Link href="/" className="hover:text-gray-300">
                Inicio
              </Link>
              <Link href="/about" className="hover:text-gray-300">
                Acerca de
              </Link>
              <Link href="/contact" className="hover:text-gray-300">
                Contacto
              </Link>
            </div>
          </div>

          <div className="text-sm md:text-base font-medium bg-gray-700 px-3 py-1 rounded">{getWelcomeMessage()}</div>
        </div>
      </nav>

      {/* Información sobre el puerto actual */}
      <div className="bg-gray-100 p-4 text-black">
        <div className="container mx-auto">
          <h3 className="text-lg font-medium mb-2">Estás navegando desde el puerto: {currentPort}</h3>
          <p className="mb-4">
            Cada puerto representa un país diferente. Prueba acceder a la aplicación desde estos puertos:
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {countryLinks.map((link) => (
              <a
                key={link.port}
                href={`http://localhost:${link.port}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-3 py-2 rounded flex items-center justify-between ${
                  currentPort === link.port
                    ? "bg-green-100 border border-green-300"
                    : "bg-white border hover:bg-gray-50"
                }`}
              >
                <span>
                  {link.country} {link.flag}
                </span>
                <span className="text-sm text-gray-500">:{link.port}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

