//src\middleware.ts

import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Mapeo de subdominios a países
const SUBDOMAIN_TO_COUNTRY: Record<string, string> = {
  "arg": "argentina",
  "chi": "chile",
  "par": "paraguay",
  "col": "colombia",
  "ecu": "ecuador",
  "pan": "panama",
}

// Mantener el mapeo de puertos como fallback
const PORT_TO_COUNTRY: Record<string, string> = {
  "3000": "argentina",
  "3001": "chile",
  "3002": "paraguay",
  "3003": "colombia",
  "3004": "ecuador",
  "3005": "panama",
}

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Obtener el host
  const host = request.headers.get("host") || ""
  console.log("Host detected:", host) // Para debugging
  
  // Intentar obtener el subdominio primero
  const subdomainMatch = host.match(/^([^.]+)\.localhost/)
  let country = "desconocido"
  
  if (subdomainMatch) {
    // Si hay un subdominio, usar el mapeo de subdominios
    const subdomain = subdomainMatch[1].toLowerCase()
    console.log("Subdomain detected:", subdomain) // Para debugging
    country = SUBDOMAIN_TO_COUNTRY[subdomain] || "desconocido"
  } else {
    // Si no hay subdominio, caer en el comportamiento anterior basado en puertos
    const portMatch = host.match(/:(\d+)$/)
    const port = portMatch ? portMatch[1] : "3000" // Puerto por defecto si no se encuentra
    country = PORT_TO_COUNTRY[port] || "desconocido"
  }

  console.log("Country set:", country) // Para debugging

  // Establecer el país en una cookie
  response.cookies.set("entry-country", country, {
    maxAge: 60 * 60 * 24, // 1 día
    path: "/",
  })

  return response
}

// Ejecutar el middleware en todas las rutas
export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
}