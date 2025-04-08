# Next.js Multi-País - Demo con Subdominios

Esta aplicación demuestra cómo ofrecer contenido personalizado por país utilizando subdominios locales en Next.js.

## 📋 Descripción

Esta aplicación permite mostrar mensajes personalizados según el país del usuario, detectado mediante:
- **Subdominios**: `arg.localhost`, `chi.localhost`, etc.
- **Puertos** (método alternativo): `localhost:3000`, `localhost:3001`, etc.

Cada país muestra un saludo personalizado con expresiones locales en la barra de navegación.

## 🛠️ Guía de instalación y ejecución paso a paso

### Paso 1: Clonar el repositorio

```bash
git clone [URL_DEL_REPOSITORIO]
cd [NOMBRE_DEL_DIRECTORIO]

Paso 2: Instalar dependencias
bash
npm install
# o
yarn install
# o
pnpm install
Paso 3: Configurar subdominios locales
Para que los subdominios funcionen en tu ambiente local, debes modificar tu archivo hosts:

En Windows:

Abre el Bloc de notas como administrador:
Busca "Bloc de notas" en el menú inicio
Haz clic derecho → "Ejecutar como administrador"
Desde el Bloc de notas, ve a Archivo → Abrir
Navega a: C:\Windows\System32\drivers\etc\
En la esquina inferior derecha, cambia "Documentos de texto" a "Todos los archivos"
Selecciona el archivo hosts
IMPORTANTE: Añade estas líneas al final del archivo (sin los símbolos #):
Code
127.0.0.1  arg.localhost
127.0.0.1  chi.localhost
127.0.0.1  par.localhost
127.0.0.1  col.localhost
127.0.0.1  ecu.localhost
127.0.0.1  pan.localhost
Guarda el archivo (Ctrl+G o Archivo → Guardar)
Si tienes problemas para guardar, cierra el Bloc de notas, copia el archivo a tu escritorio, modifícalo ahí y luego cópialo de vuelta
En macOS:

Abre Terminal
Ejecuta: sudo nano /etc/hosts
Ingresa tu contraseña cuando se solicite
Añade las mismas líneas mencionadas arriba al final del archivo
Guarda con Ctrl+O (presiona Enter para confirmar) y sal con Ctrl+X
Ejecuta: sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
En Linux:

Abre Terminal
Ejecuta: sudo nano /etc/hosts
Añade las mismas líneas mencionadas arriba
Guarda con Ctrl+O y sal con Ctrl+X
⚠️ Verifica tu archivo hosts
Si tu archivo hosts se ve así (con símbolos # al inicio de las líneas):


# Copyright (c) 1993-2009 Microsoft Corp.
#
# localhost name resolution is handled within DNS itself.
#	127.0.0.1  	arg.localhost
#	127.0.0.1  	chi.localhost
#	127.0.0.1  	par.localhost
#	127.0.0.1  	col.localhost
#	127.0.0.1  	ecu.localhost
#	127.0.0.1  	pan.localhost
#	127.0.0.1       localhost
ESTO NO FUNCIONARÁ porque las líneas están comentadas (inician con #).

Debe verse así (sin símbolos # al inicio de nuestras líneas):


# Copyright (c) 1993-2009 Microsoft Corp.
#
# localhost name resolution is handled within DNS itself.
127.0.0.1  	arg.localhost
127.0.0.1  	chi.localhost
127.0.0.1  	par.localhost
127.0.0.1  	col.localhost
127.0.0.1  	ecu.localhost
127.0.0.1  	pan.localhost
127.0.0.1       localhost


Paso 4: Iniciar la aplicación


npm run dev
La aplicación estará disponible en http://localhost:3000

Paso 5: Acceder a los diferentes países
Prueba acceder a estos subdominios en tu navegador:

País	URL
🇦🇷 Argentina	http://arg.localhost:3000
🇨🇱 Chile	http://chi.localhost:3000
🇵🇾 Paraguay	http://par.localhost:3000
🇨🇴 Colombia	http://col.localhost:3000
🇪🇨 Ecuador	http://ecu.localhost:3000
🇵🇦 Panamá	http://pan.localhost:3000
⚠️ Solución de problemas comunes
Los subdominios no funcionan
Verificar el archivo hosts:

Asegúrate de que las líneas NO están comentadas (NO deben comenzar con #)
Debe haber al menos un espacio entre la IP y el subdominio
Reiniciar el navegador:

Cierra completamente tu navegador y vuelve a abrirlo
Limpiar caché DNS:

Windows: Ejecuta ipconfig /flushdns en CMD como administrador
macOS: Ejecuta sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
Linux: Depende de la distribución, prueba con sudo systemd-resolve --flush-caches
Prueba con modo incógnito:

A veces resuelve problemas de caché del navegador
Método alternativo: Usar puertos diferentes
Si los subdominios no funcionan, puedes usar el método de puertos:

Abre 6 terminales diferentes
En cada terminal ejecuta:
bash
# Terminal 1 (Argentina)
npx next dev -p 3000

# Terminal 2 (Chile)
npx next dev -p 3001

# Terminal 3 (Paraguay)
npx next dev -p 3002

# Terminal 4 (Colombia)
npx next dev -p 3003

# Terminal 5 (Ecuador)
npx next dev -p 3004

# Terminal 6 (Panamá)
npx next dev -p 3005
Accede a cada país usando su puerto correspondiente (http://localhost:3000, http://localhost:3001, etc.)
📁 Estructura del proyecto
Code
src/
├── app/                    # Páginas de la aplicación
│   ├── page.tsx            # Página de inicio
│   ├── about/page.tsx      # Página "Acerca de"
│   ├── contact/page.tsx    # Página de Contacto
│   ├── layout.tsx          # Layout principal
│   └── globals.css         # Estilos globales
├── components/
│   └── navbar.tsx          # Barra de navegación
└── middleware.ts           # Middleware para detectar país
🧩 Cómo funciona
Middleware (src/middleware.ts):

Intercepta cada solicitud
Detecta el subdominio o puerto
Determina el país correspondiente
Guarda el país en una cookie
Navbar (src/components/navbar.tsx):

Lee la cookie con el país
Muestra un mensaje personalizado según el país
Ofrece enlaces para cambiar entre países
🛠️ Tecnologías utilizadas
Next.js
React
Tailwind CSS
Cookies-Next