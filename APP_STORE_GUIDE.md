# FitBulk - Guia de Publicacion en App Store de iOS

## Requisitos Previos

- Mac con macOS 14+ (Sonoma o superior)
- Xcode 15+ instalado desde el Mac App Store
- Cuenta de Apple Developer ($99 USD/año) en https://developer.apple.com
- Node.js 18+ instalado
- CocoaPods (`sudo gem install cocoapods`)

## Paso 1: Instalar Dependencias

```bash
npm install
```

## Paso 2: Generar Iconos de la App

Opcion A - Script automatico (requiere ImageMagick):
```bash
brew install imagemagick
npm run generate-icons
```

Opcion B - Manual:
1. Ir a https://appicon.co
2. Subir el archivo `public/icons/icon.svg`
3. Descargar los iconos generados
4. Copiar los PNGs a `public/icons/` y a `ios/App/App/Assets.xcassets/AppIcon.appiconset/`

## Paso 3: Build del Proyecto

```bash
npm run build
```

Esto genera la carpeta `out/` con el export estatico.

## Paso 4: Inicializar Capacitor para iOS

```bash
npx cap add ios
npx cap sync ios
```

## Paso 5: Abrir en Xcode

```bash
npx cap open ios
```

## Paso 6: Configurar en Xcode

1. **Signing & Capabilities**:
   - Seleccionar tu Team de Apple Developer
   - Verificar Bundle Identifier: `com.fitbulk.app`
   - Habilitar "Automatically manage signing"

2. **General**:
   - Display Name: `FitBulk`
   - Bundle Identifier: `com.fitbulk.app`
   - Version: `2.0.0`
   - Build: `1`
   - Deployment Target: iOS 16.0 (minimo recomendado)
   - Device: iPhone (o Universal)

3. **Info.plist** (ya configurado):
   - `ITSAppUsesNonExemptEncryption`: NO (requerido para evitar revision de exportacion)
   - `UIStatusBarStyle`: Dark Content

## Paso 7: Configurar en App Store Connect

Ir a https://appstoreconnect.apple.com y crear una nueva app:

### Informacion General
- **Nombre**: FitBulk - Rutina & Dieta
- **Subtitulo**: Tu entrenamiento y nutricion
- **Categoria principal**: Salud y forma fisica
- **Categoria secundaria**: Comida y bebida
- **Idioma principal**: Español

### Descripcion
```
FitBulk es tu compañero de entrenamiento y nutricion. Segui tu rutina Upper/Lower, registra tu progreso y descubri recetas asiaticas para tu fase de bulk.

RUTINAS DE ENTRENAMIENTO:
- Plan Upper/Lower de 4 dias optimizado
- Ejercicios detallados con series, reps y notas
- Sistema de progresion paso a paso

DIETA BULK ASIATICA:
- Objetivo: 2700 kcal / 130g proteina / 350g carbos
- 20+ opciones de comidas asiaticas
- Generador aleatorio de menus diarios
- Macros calculados por comida

REGISTRO DE PROGRESO:
- Registra series, repeticiones y peso
- Historial de entrenamientos pasados
- Seguimiento por fecha

EXTRAS:
- 5 recetas de salsas asiaticas
- Kit base de ingredientes esenciales
- Calendario semanal de entrenamiento

Todos tus datos se guardan localmente en tu dispositivo. Sin cuentas, sin servidores, 100% privado.
```

### Palabras Clave
```
fitness,rutina,dieta,bulk,entrenamiento,workout,gym,comida,asiatica,progreso,ejercicio,upper,lower
```

### URLs Requeridas
- **URL de Soporte**: https://tu-dominio.com/support
- **URL de Privacidad**: https://tu-dominio.com/privacy
- **URL de Marketing**: https://tu-dominio.com (opcional)

### Screenshots (requeridos)
Necesitas screenshots para:
- iPhone 6.7" (iPhone 15 Pro Max): 1290 x 2796 px
- iPhone 6.5" (iPhone 14 Plus): 1284 x 2778 px
- iPhone 5.5" (iPhone 8 Plus): 1242 x 2208 px (opcional si soportas)
- iPad 12.9" (si soportas iPad): 2048 x 2732 px

**Sugerencia de screenshots:**
1. Pantalla de Rutina (ejercicios Upper A)
2. Pantalla de Dieta (macros + generador de menu)
3. Pantalla de Progreso (registro de ejercicios)
4. Pantalla de Extras (salsas asiaticas)

### Clasificacion de Contenido
- Marcar: "Sin contenido objetable"
- Edad: 4+ (no hay contenido restringido)

### Privacidad de la App
En la seccion "App Privacy" de App Store Connect:
- Seleccionar: **"No recopilamos datos"**
- Esto es correcto porque FitBulk usa solo localStorage

## Paso 8: Build y Subir

1. En Xcode, seleccionar "Any iOS Device" como destino
2. Product > Archive
3. Distributor > App Store Connect
4. Subir el build

## Paso 9: Enviar para Revision

1. En App Store Connect, seleccionar el build subido
2. Completar toda la informacion requerida
3. Enviar para revision
4. Tiempo de revision: generalmente 24-48 horas

## Lineamientos Importantes del App Store

### Lo que cumple FitBulk:
- [x] Funcionalidad nativa completa (no es solo un sitio web envuelto)
- [x] Interfaz optimizada para iOS (safe areas, gestos nativos)
- [x] Politica de privacidad incluida
- [x] Terminos de uso incluidos
- [x] Pagina de soporte
- [x] No recopila datos personales
- [x] `ITSAppUsesNonExemptEncryption` = NO
- [x] Sin compras in-app (no aplica)
- [x] Sin contenido objetable
- [x] Funciona offline
- [x] Diseño responsivo para todas las pantallas
- [x] Aviso de salud incluido en Terminos de Uso

### Posibles razones de rechazo a evitar:
- **4.2 Minimum Functionality**: FitBulk tiene suficiente funcionalidad nativa (generador de menus, registro de progreso, datos locales)
- **5.1.1 Data Collection**: No recopilamos datos - estamos cubiertos
- **5.1.2 Data Use and Sharing**: No compartimos datos - estamos cubiertos

## Comandos Rapidos

```bash
# Desarrollo
npm run dev

# Build completo para iOS
npm run build:ios

# Abrir en Xcode
npm run open:ios

# Solo sincronizar cambios web
npm run sync:ios
```
