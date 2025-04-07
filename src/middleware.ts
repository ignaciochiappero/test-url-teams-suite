import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Mapeo de puertos a países
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

  // Obtener el host y extraer el puerto
  const host = request.headers.get("host") || ""
  const portMatch = host.match(/:(\d+)$/)
  const port = portMatch ? portMatch[1] : "3000" // Puerto por defecto si no se encuentra

  // Determinar el país basado en el puerto
  const country = PORT_TO_COUNTRY[port] || "desconocido"

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

