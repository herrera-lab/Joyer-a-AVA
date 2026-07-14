# Sugerencias de Diseño y Estructura — Sitio Web Joyería

## 1. Landing Page vs. Sitio Multi-página

**Recomendación: Sitio multi-página (no solo landing page).**

Una landing page (una sola página con scroll) funciona bien para presentar una marca o un producto único, pero **no es suficiente para una joyería que vende a nivel nacional con catálogo**, porque:

- El catálogo necesita filtros, categorías y fichas de producto individuales (SEO, compartir por link, carrito).
- El cliente necesita ver detalle, precio, materiales, tallas y disponibilidad antes de comprar.
- Un checkout y cuenta de usuario no caben cómodamente en una sola página larga.

**Estructura sugerida (multi-página, con Home tipo landing):**

1. **Home** — landing: hero, y conforme se hace scroll van apareciendo las **6 categorías principales** destacadas (imagen + 3-4 productos estrella + botón "Ver colección"), propuesta de valor, testimonios, banner de confianza (envíos, garantía, pago seguro).
2. **Categoría** (`/catalogo/anillos`, `/catalogo/aretes`, etc.) — a donde lleva cada categoría del Home; aquí se muestran las **subcategorías** de esa categoría con toda la info (filtros, listado completo).
3. **Ficha de producto** (`/producto/nombre-del-producto`)
4. **Carrito** — gestionado en el navegador con `localStorage` (sin base de datos).
5. **Checkout** — sin pasarela de pago ni backend: el pedido se envía por WhatsApp (link `wa.me` con el detalle prellenado) y la dueña confirma pago y fabricación manualmente.
6. **Nosotros / Historia de la marca**
7. **Contacto**
8. **Políticas** (envíos, cambios/devoluciones, garantía, términos, privacidad) — obligatorio para vender a nivel nacional

> Nota: el Home se construye con lógica de landing page (secciones persuasivas que se revelan al hacer scroll); al entrar a una categoría ya se navega como catálogo estándar. No habrá página de "Catálogo general" separada ni cuenta de usuario (registro/login): se navega directo del Home a cada una de las 6 categorías, y la compra se hace siempre como invitada.

**Footer (presente en todas las páginas):**
- Color distinto al resto del sitio (banda oscura), para que se note claramente el cierre de la página
- Columna Nosotros (link a Historia/Marca)
- Columna Contacto (redes sociales, correo, horario)
- Columna Políticas (envíos, cambios/devoluciones, términos, privacidad)
- Datos de la marca (nombre, y si aplica horario/ciudad de despacho)

**Elementos flotantes (fijos en pantalla, no en el footer), presentes en todas las páginas:**
- Esquina inferior derecha: botón de accesibilidad y, encima, "volver arriba" — ver detalle en sección 5.
- Esquina inferior izquierda (en paralelo, misma altura): íconos circulares pequeños de WhatsApp, Instagram y Facebook, apilados hacia arriba.

---

## 2. Distribución del Catálogo

### 2.1 Organización recomendada

Organiza el catálogo en **categorías + subcategorías**, no solo por tipo de producto:

- **Por tipo de pieza:** Anillos, Aretes, Collares, Pulseras, Dijes, Sets/Conjuntos
- **Por material:** Oro, Plata, Acero quirúrgico, Chapa de oro
- **Por ocasión/colección:** Novia/Bodas, Bautizo/Primera comunión, Colección diaria, Ediciones limitadas
- **Filtros combinables:** precio (rango), material, piedra, color, nuevo/más vendido (sin "disponibilidad": no aplica al no manejar stock fijo)

### 2.2 Tarjeta de producto (grid del catálogo)

Cada tarjeta debe mostrar de forma consistente:
- Foto principal (fondo neutro, buena iluminación) + foto al hover (uso/modelo)
- Nombre del producto
- Precio (y precio tachado si hay descuento)
- Indicador si es "Nuevo" o "Edición limitada" (no "últimas piezas": al ser sobre pedido no hay stock fijo que se agote)
- Botón rápido "Agregar al carrito" o "Ver detalle"

### 2.3 Ficha de producto (detalle)

Debe incluir:
- Galería de imágenes (mínimo 3-4 ángulos, zoom)
- Nombre, precio, descripción breve
- Ficha técnica: material, peso aproximado, dimensiones, tipo de piedra/baño
- Selector de talla (anillos) o variante (color, largo de cadena)
- Tiempo estimado de fabricación (la mayoría de piezas son sobre pedido, no de stock fijo); si alguna pieza ya está fabricada, indicar disponibilidad en su lugar
- Botón "Agregar al carrito" y "Comprar ahora"
- Información de envío nacional (tiempos estimados por región si aplica)
- Cuidados de la joya
- Productos relacionados / "Combina con"

### 2.4 Navegación del catálogo

- Menú superior con categorías principales visibles (máx. 5-6 para no saturar)
- Breadcrumbs (Inicio > Anillos > Nombre del producto) para orientar al usuario — sin nivel "Catálogo" intermedio, ya que no existe esa página general (sección 1)
- Buscador visible en el header (por nombre o categoría)
- Ordenar por: relevancia, precio, más nuevo, más vendido

---

## 3. Recomendaciones de Diseño Visual

**Color principal: Rosa palo (#E8C4C4 / tonos similares).**

- **Paleta sugerida:**
  - Rosa palo (principal) — fondos suaves, acentos, botones secundarios
  - Blanco / marfil (fondo base) — para que las joyas resalten en fotos
  - Dorado o champán (acento) — para dar sensación de lujo (bordes, íconos, detalles)
  - Gris oscuro / negro suave (texto) — legibilidad, no usar negro puro para mantener elegancia
  - Evitar saturar con el rosa: úsalo como acento, no como fondo de toda la página (el producto —la joya— debe ser el protagonista visual)

- **Tipografía:**
  - Una fuente serif elegante para títulos/logo (ej. estilo editorial/lujo)
  - Una sans-serif limpia para texto de cuerpo (buena legibilidad en móvil)

- **Fotografía del producto:**
  - Fondo blanco o neutro consistente en todo el catálogo
  - Misma proporción/tamaño de imagen en todas las fichas (evita que el grid se vea desordenado)

- **Principios de usabilidad (intuitivo):**
  - Máximo 3 clics para llegar a cualquier producto desde el Home
  - Menú de navegación fijo/sticky con acceso a: Colecciones, Carrito, Buscador (sin "Cuenta": no habrá cuenta de usuario, sección 1)
  - Botones de acción (Agregar al carrito, Comprar) con alto contraste, aunque el resto del sitio sea suave
  - Diseño responsive mobile-first (la mayoría de compradoras de joyería compran desde el celular)
  - Carrito visible/accesible en todo momento (ícono con contador)
  - Mensajes claros de confirmación (agregado al carrito, pedido enviado por WhatsApp)
  - Zonas de toque de al menos 44×44px en botones, tarjetas y títulos interactivos (ver sección 6)

---

## 4. Información que Debes Recolectar

Esta lista ya excluye todo lo que quedó resuelto en la conversación (carrito con `localStorage` + WhatsApp, sin cuenta de usuario, sin pasarela de pago, sin control de stock por ser piezas sobre pedido, las 6 categorías, footer, accesibilidad, idioma y seguridad) — solo queda lo que realmente falta decidir o recolectar.

### 4.1 Identidad de marca (previo a todo)
- [x] Logo (o si hay que diseñarlo)
- [x] Nombre oficial de la marca y slogan (si tiene)
- [x] Historia/misión de la marca (para "Nosotros")
- [x] Confirmación de la paleta secundaria/complementaria al rosa palo

### 4.2 Home
- [x] Mensaje principal / propuesta de valor
- [x] Imágenes de buena calidad para el hero y para cada una de las 6 categorías
- [x] Reseñas de clientas u otro elemento de confianza (si existen)

### 4.3 Carrito y Checkout
- [x] Métodos de pago que aceptarán (transferencia, efectivo contra entrega, etc. — se coordinan por WhatsApp)
- [x] Métodos de envío disponibles y costos por región/ciudad
- [x] Política de cambios y devoluciones (plazo, condiciones)

### 4.4 Nosotros
- [x] Historia de la joyería (cuándo y por qué nació)

### 4.5 Contacto
- [x] Redes sociales activas (Instagram, WhatsApp Business, etc.)
https://www.facebook.com/profile.php?id=100063504703009
https://www.instagram.com/creat_ivas/
506+88083026
- [x] Correo y teléfono/WhatsApp de atención
506+88083026
creativas.gd@gmail.com
- [x] Horario de atención
8:00am a 7:00pm

### 4.6 Políticas y Legal (obligatorio para venta nacional)
- [ ] Política de envíos (costos, zonas, tiempos)
- [ ] Política de cambios/devoluciones y garantía
- [ ] Términos y condiciones
- [ ] Política de privacidad y manejo de datos personales

### 4.7 Técnico / Operativo
- [x] ¿Quién actualizará el catálogo? (edición manual de los datos del sitio, sin CMS)
manualjhhh                   

> El detalle de cada categoría (fotos, nombre, precio, ficha técnica, variantes) no está aquí — va en el documento de catálogo aparte, junto con las subcategorías y filtros.

---

## 5. Accesibilidad e Inclusividad

Al vender a nivel nacional sin tienda física, el sitio web ES la tienda — si no es accesible, una parte de las clientas queda excluida de comprar. Esto aplica a todas las páginas (Home, Categoría, Ficha de producto, Carrito).

### 5.1 Botón de accesibilidad (widget)
- **Ícono:** el símbolo universal de accesibilidad (figura dentro de un círculo), reconocible a simple vista.
- **Ubicación:** fijo en pantalla (flotante), esquina inferior derecha; visible en todas las páginas. El botón "volver arriba" queda justo encima (misma esquina) y las redes sociales flotantes en paralelo del lado izquierdo — ver 5.4.
- **Al abrirse, ofrece:**
  - **Tamaño de letra** — botones A- / A / A+ (mínimo 3 pasos), afecta todo el sitio, no solo texto suelto.
  - **Modo oscuro / alto contraste** — alterna paleta clara ⇄ oscura sin perder legibilidad ni identidad de marca.
  - **Reducir movimiento** — apaga animaciones y transiciones (revelado al hacer scroll, hovers), independiente de la configuración del sistema operativo de la clienta.
  - **Subrayar enlaces** — ayuda a quienes no distinguen bien el color por sí solo.
  - **Restablecer** — vuelve todo a los valores por defecto.
  - Los interruptores (modo oscuro, reducir movimiento, subrayar enlaces) se muestran como **toggle switch** minimalista, no como casillas de verificación tradicionales — más claro visualmente para indicar "activado/desactivado".
- Las preferencias se guardan en `localStorage` (igual que el carrito), sin necesitar cuenta de usuario.
- El panel se puede cerrar con `Esc`, atrapa el foco mientras está abierto y devuelve el foco al botón que lo abrió al cerrarse.

### 5.2 Inclusividad — todo debe poder "tocarse"
- Cualquier sección, tarjeta, título o bloque que lleve a algo (categoría, producto, colección) es interactivo en su totalidad, no solo un enlace pequeño dentro de él — zona de toque mínima de **44×44px** (WCAG 2.5.5).
- Los elementos interactivos son siempre `<button>` o `<a>` reales (no `<div>` con click), para que funcionen con teclado, lector de pantalla y switches de asistencia.
- Los encabezados (`h1`–`h3`) siguen un orden jerárquico real, no solo visual, para que la navegación por encabezados en lectores de pantalla tenga sentido.

### 5.3 Otros criterios WCAG a contemplar
- **Contraste de color** mínimo AA (4.5:1 texto normal, 3:1 texto grande) — revisar en especial el rosa palo y el dorado sobre marfil, que son tonos claros.
- **Navegación por teclado completa**: `Tab` / `Shift+Tab` recorre todo en orden lógico, con foco visible en cada elemento.
- **Enlace "Saltar al contenido"** al inicio de cada página, antes del menú.
- **Texto alternativo** en todas las fotos de producto (describe la pieza, no solo "imagen de anillo").
- **Formularios accesibles**: labels visibles en cada campo, mensajes de error claros y no solo indicados por color.
- **Idioma declarado** en el HTML (`lang`), y actualizado dinámicamente si el sitio ofrece cambio de idioma (ver 5.4).
- **Texto redimensionable**: el sitio no se rompe si el widget o el navegador aumentan el texto hasta 200%.
- **Sin información solo por color**: "Nuevo" o "Últimas piezas" llevan también texto/ícono, no solo un color distinto.

### 5.4 Otros elementos flotantes de apoyo
- **Botón "Volver arriba"**: flecha hacia arriba, flotante, justo encima del botón de accesibilidad (misma esquina, inferior derecha). Aparece solo después de hacer scroll (no satura la pantalla al entrar a la página) y regresa al inicio de la página con un clic/tap.
- **Redes sociales flotantes**: en la esquina inferior izquierda, en paralelo al botón de accesibilidad (misma altura, lado opuesto), tres íconos circulares pequeños apilados hacia arriba: WhatsApp, Instagram y Facebook. Son enlaces directos a cada red, no parte del footer.
- **Selector de idioma (Español / Inglés)**: botón en la esquina superior derecha del encabezado, junto al ícono del carrito. Cambia todo el texto visible del sitio (menú, textos, categorías, carrito, panel de accesibilidad) y la preferencia se guarda en `localStorage`, igual que el carrito, para que la próxima visita respete el idioma elegido sin necesitar cuenta de usuario.
- Nombres propios de producto (ej. "Anillo Aurora") no se traducen — es una práctica común incluso en catálogos multilingües reales; sí se traducen categorías, materiales, subcategorías y todo el texto de interfaz.

---

## 6. Seguridad

Al no haber backend ni base de datos, la superficie de ataque del sitio es pequeña, pero igual hay que cuidar varios puntos:

- **HTTPS obligatorio** en el dominio final (certificado SSL) — sin esto, los navegadores marcan el sitio como "no seguro" y desalienta la compra.
- **Enlaces externos seguros**: todo enlace que abra en pestaña nueva (redes sociales, WhatsApp) debe usar `rel="noopener noreferrer"` para evitar que la página de destino pueda manipular la pestaña de origen (*tabnabbing*).
- **`localStorage` solo para datos no sensibles**: carrito, preferencias de accesibilidad e idioma — nunca contraseñas, datos de pago o información personal completa, ya que no está cifrado y es visible desde el navegador.
- **Si más adelante se agrega un formulario** (contacto, newsletter): validar y sanitizar lo que se escribe antes de mostrarlo en cualquier parte del sitio (previene XSS), y agregar protección anti-spam básica (honeypot o captcha).
- **Seguridad de las cuentas administrativas**: ya que no hay panel propio, activar verificación en dos pasos (2FA) en el hosting, el registrador del dominio, y las redes sociales/WhatsApp Business — son el único "acceso" a proteger.
- **Copias de respaldo** de los archivos del sitio (al ser estático, versionarlo en un repositorio como este ya cumple esa función).
- **Protección de datos personales**: aunque el pedido se coordina por WhatsApp y no queda guardado en el sitio, si en algún punto se recolectan datos (nombre, dirección, teléfono) hay que cumplir con la ley de protección de datos aplicable en el país de venta.
- **Ventaja a favor**: al usar WhatsApp para cerrar el pedido, esa conversación ya viaja cifrada de extremo a extremo por la propia aplicación — el sitio no maneja ni almacena esos datos sensibles.

---

## 7. Plan de Trabajo Sugerido (orden de ejecución)

1. **Definir identidad de marca** (colores finales, tipografía, logo) — sección 4.1
2. **Estructurar el catálogo** (subcategorías, atributos de filtro por categoría) — documento de catálogo aparte
3. **Recolectar contenido e imágenes de producto** — documento de catálogo aparte
4. **Maquetar Home** (landing persuasiva) — sección 4.2
5. **Maquetar Catálogo y Ficha de producto**
6. **Definir flujo de Carrito (localStorage) + pedido por WhatsApp, y métodos de envío** — sección 4.3
7. **Construir páginas de Nosotros y Contacto** — secciones 4.4 y 4.5
8. **Redactar políticas legales** — sección 4.6
9. **Implementar widget de accesibilidad, selector de idioma y revisar criterios WCAG** — sección 5
10. **Aplicar buenas prácticas de seguridad** (HTTPS, enlaces externos, 2FA en cuentas) — sección 6
11. **Pruebas de usabilidad (incluyendo navegación por teclado y lector de pantalla) en móvil y escritorio antes de publicar**

---

## 8. Próximo Paso

Con este documento como guía, el siguiente paso es recopilar la información de la **sección 4.1 (Identidad de marca)** y definir la estructura del catálogo (subcategorías y contenido por producto) en el documento aparte, ya que son la base para diseñar el Home y la navegación del sitio.

> El detalle de cada categoría (nombres de producto, precios, materiales, subcategorías) se documentará aparte, en un archivo dedicado al catálogo — este documento se mantiene como la guía general de estructura, diseño, accesibilidad y seguridad.
