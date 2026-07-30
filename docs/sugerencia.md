# Sugerencias de Diseño y Estructura — Sitio Web Joyería

> **Nota (actualizado a la versión actual del sitio):** este documento nació como guía de sugerencias antes de construir el sitio. Gran parte de lo descrito ya está implementado en el código (`index.html`, `css/`, `js/`); se dejaron marcadas las secciones/ítems ya resueltos y se ajustaron los datos que cambiaron durante la construcción (número de categorías, rutas reales, estructura de carrito/checkout, ruta de imágenes). Lo que sigue sin marcar como implementado son pendientes reales.

## 1. Landing Page vs. Sitio Multi-página

**Recomendación: Sitio multi-página (no solo landing page).**

Una landing page (una sola página con scroll) funciona bien para presentar una marca o un producto único, pero **no es suficiente para una joyería que vende a nivel nacional con catálogo**, porque:

- El catálogo necesita filtros, categorías y fichas de producto individuales (SEO, compartir por link, carrito).
- El cliente necesita ver detalle, precio, materiales, tallas y disponibilidad antes de comprar.
- Un checkout y cuenta de usuario no caben cómodamente en una sola página larga.

**Estructura implementada (multi-página con router por hash, Home tipo landing):**

1. **Home** (`#/`) ✅ — landing: hero (video, no solo imagen estática — `images/hero/videoPrincipal.mp4`), y conforme se hace scroll van apareciendo las **9 categorías** destacadas, propuesta de valor, banner de confianza.
2. **Categoría** (`#/categoria/:slug`) ✅ — a donde lleva cada categoría del Home; muestra las **subcategorías** (chips) y el listado de productos con filtros.
3. **Ficha de producto** (`#/producto/:id`) ✅
4. **Carrito** (`#/carrito`) ✅ — no es una página independiente en el sentido clásico: la ruta abre el **drawer lateral del carrito** (gestionado con `localStorage`, sin base de datos) sobre la página actual.
5. **Checkout** — no existe como paso/página separada: el propio drawer del carrito incluye el botón de enviar pedido por WhatsApp (link `wa.me` con el detalle prellenado); la dueña confirma pago y fabricación manualmente. Carrito y checkout son la misma interfaz.
6. **Nosotros** (`#/nosotros`) ✅ — Historia de la marca
7. **Contacto** (`#/contacto`) ✅
8. **Políticas** (`#/politicas`) ✅ — envíos, cambios/devoluciones, garantía, términos, privacidad

> El Home se construye con lógica de landing page (secciones persuasivas que se revelan al hacer scroll); al entrar a una categoría ya se navega como catálogo estándar. No hay página de "Catálogo general" separada ni cuenta de usuario (registro/login): se navega directo del Home a cada una de las categorías, y la compra se hace siempre como invitada.

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

### 2.1 Organización implementada

El catálogo está organizado en **9 categorías + subcategorías** (`js/config/products.js`), no las 6 originalmente sugeridas: **Anillos, Aretes, Cadenas, Collares, Pulseras, Relicarios, Personalizados, Hombres, Mascotas**. Cada categoría tiene 3 subcategorías (ES/EN) y un banner propio. Los productos actuales son datos de ejemplo/placeholder (211 ítems) pendientes de reemplazar por el catálogo real.

- **Filtros implementados:** por subcategoría (chips en la página de categoría) y orden por precio (asc/desc) o "más nuevo".
- **Filtros pendientes (no implementados aún):** rango de precio, material, piedra, color, más vendido. Los campos `isNew`/`isLimited` ya existen en cada producto pero están en `false` por defecto — falta cargar datos reales para que "Nuevo"/"Edición limitada" tengan sentido.
- Sin "disponibilidad": no aplica al no manejar stock fijo (piezas sobre pedido).

### 2.2 Tarjeta de producto (grid del catálogo)

Cada tarjeta debe mostrar de forma consistente:
- Foto principal (fondo neutro, buena iluminación) + foto al hover (uso/modelo)
- Nombre del producto
- Precio (y precio tachado si hay descuento)
- Indicador si es "Nuevo" o "Edición limitada" (no "últimas piezas": al ser sobre pedido no hay stock fijo que se agote)
- Botón rápido "Agregar al carrito" o "Ver detalle"

### 2.3 Ficha de producto (detalle)

Estado actual (`js/pages/product-detail.js`):
- Galería de imágenes: ⚠️ **pendiente** — hoy solo muestra **una imagen principal**, no la galería de 3-4 ángulos con zoom sugerida originalmente.
- Nombre, precio, descripción breve ✅
- Selector de talla (anillos) o largo (collares/cadenas) ✅ — el resto de categorías todavía no tiene selector de variante propio
- Tiempo estimado de fabricación (`weeks`, bilingüe) ✅
- Botón "Agregar al carrito" y "Comprar ahora" (agrega y abre el carrito) ✅
- Información de envío ✅
- Cuidados de la joya ✅ (`CARE_TIPS_ES`/`CARE_TIPS_EN`)
- Productos relacionados (misma categoría, hasta 4) ✅
- Ficha técnica detallada (peso, dimensiones, tipo de piedra/baño): ⚠️ pendiente de datos reales

### 2.4 Navegación del catálogo

- Menú superior con categorías principales visibles — al haber crecido a 9 categorías (sección 2.1), revisar si el menú necesita agruparlas o usar un desplegable en vez de listarlas todas
- Breadcrumbs (Inicio > Anillos > Nombre del producto) para orientar al usuario — sin nivel "Catálogo" intermedio, ya que no existe esa página general (sección 1)
- Buscador visible en el header ✅ implementado (`js/features/search.js`, busca por nombre, material o categoría; muestra hasta 8 resultados)
- Ordenar por: ✅ precio (asc/desc) y más nuevo implementados — relevancia y más vendido pendientes (no hay dato de ventas)

---

## 3. Recomendaciones de Diseño Visual

✅ Implementado en `css/variables.css`, incluyendo variante de modo oscuro (`body.a11y-dark`) que remapea toda la paleta.

**Color principal: Rosa palo (`--rose: #e8c4c4`, `--rose-deep: #a85b5f`, `--rose-tint: #f6e9e9`).**

- **Paleta sugerida:**
  - Rosa palo (principal) — fondos suaves, acentos, botones secundarios
  - Blanco / marfil (fondo base) — para que las joyas resalten en fotos
  - Dorado o champán (acento) — para dar sensación de lujo (bordes, íconos, detalles)
  - Gris oscuro / negro suave (texto) — legibilidad, no usar negro puro para mantener elegancia
  - Evitar saturar con el rosa: úsalo como acento, no como fondo de toda la página (el producto —la joya— debe ser el protagonista visual)

- **Tipografía:** ✅ implementada
  - Serif para títulos/logo: `Georgia, 'Times New Roman', 'Bodoni MT', serif` (`--font-display`)
  - Sans-serif para cuerpo: `'Segoe UI', Corbel, 'Trebuchet MS', Avenir, sans-serif` (`--font-body`)
  - Ambas son pilas de fuentes de sistema (sin fuentes web externas cargadas)

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

Esta lista ya excluye todo lo que quedó resuelto e implementado (carrito con localStorage + WhatsApp, sin cuenta de usuario, sin pasarela de pago, sin control de stock por ser piezas sobre pedido, las 9 categorías, footer, accesibilidad, idioma y seguridad).

---

## 4.1 Identidad de marca

- [x] *Logo:* `images/LogoPrincipal.png` (+ variante `images/Logo creativas 2.png`)
- [x] *Nombre oficial de la marca y slogan:*
  - *Marca:* Creativas
  - *Slogan:* Tu esencia en un accesorio
- [x] *Historia/misión de la marca (para "Nosotros"):*
  - *Misión:* Diseñar más que accesorios, creando piezas de identidad únicas que fusionan el estilo de cada persona con el legado artesanal de la marca, transformando la bisutería tradicional en arte con alma e historia.
- [x] *Paleta secundaria/complementaria al rosa palo:* dorado/champán (`--gold: #ad813f`, `--gold-line: #d8c39c`) + marfil/tinta como neutros — implementada en `css/variables.css`

---

## 4.2 Home

- [x] *Mensaje principal / propuesta de valor:*

  > En Creativas, cada pieza es diseñada con amor y dedicación, haciendo que cada una sea única no solo en su confección sino también en el significado especial que lleva consigo. Nuestro deseo es que cada accesorio te acompañe en momentos importantes, refleje tu esencia y se convierta en un recuerdo que puedas atesorar.

- [x] *Hero y banners de categoría:* carpeta `images/` — el hero usa **video** (`images/hero/videoPrincipal.mp4`, referenciado como `BRAND.heroVideo`), no solo imagen estática; cada una de las 9 categorías tiene su propia subcarpeta con fotos de producto y banner.
- [ ] *Reseñas de clientas u otro elemento de confianza (si existen):* No se conoce aun.

---

## 4.3 Carrito y Checkout

- [ ] *Métodos de pago que aceptarán (coordinados por WhatsApp):* Se coordinan por whatsapp, sinpe o transacción.
- [x] *Métodos de envío disponibles y costos por región/ciudad:*
  - Envíos mediante *Correos de Costa Rica*.
  - ₡3.500 a cualquier parte del país fuera de San Carlos.
  - ₡4.200 dentro del cantón de San Carlos.
- [x] *Política de cambios y devoluciones (plazo, condiciones):*
  - Cambios únicamente por defectos de fabricación reportados dentro de los *5 días naturales* posteriores a la entrega.
  - El producto debe devolverse en las mismas condiciones en que fue entregado y con su empaque.
  - No se realizan devoluciones de dinero, excepto cuando exista un defecto de fabricación que no pueda ser reparado o reemplazado.
  - Las piezas personalizadas o grabadas no tienen devolución ni cambio, salvo por errores atribuibles a Creativas.

---

## 4.4 Nosotros

- [x] *Historia de la joyería (cuándo y por qué nació):*

  Creativas nació de una pasión que comenzó a los nueve años con la creación de joyas hechas a mano. Aunque ese sueño quedó en pausa durante un tiempo, en el año 2019 renació esa pasión, dando origen a Creativas. Desde entonces, la marca ha crecido con dedicación, aprendizaje y amor, creando piezas exclusivas que reflejan la esencia de quien las lleva.

---

## 4.5 Contacto

- [x] *Redes sociales activas:*
  - Facebook: https://www.facebook.com/profile.php?id=100063504703009
  - Instagram: https://www.instagram.com/creat_ivas/
  - WhatsApp: +506 8808-3026

- [x] *Correo y teléfono/WhatsApp de atención:*
  - Correo: creativas.gd@gmail.com
  - WhatsApp: +506 8808-3026

- [x] *Horario de atención:*
  - 8:00 a. m. – 7:00 p. m.

---

## 4.6 Políticas y Legal

- [x] *Política de envíos:*
  - Envíos a todo Costa Rica mediante Correos de Costa Rica.
  - ₡3.500 fuera de San Carlos.
  - ₡4.200 dentro del cantón de San Carlos.
  - El seguimiento del envío se proporciona una vez confirmado el pago y finalizada la elaboración del pedido.

- [x] *Política de cambios/devoluciones y garantía:*
  - Cambios únicamente por defectos de fabricación.
  - Garantía que cubre exclusivamente defectos de fabricación.
  - No cubre daños ocasionados por golpes, agua, perfumes, productos químicos, desgaste normal o reparaciones realizadas por terceros.
  - No se aceptan devoluciones por cambio de opinión.

- [x] *Términos y condiciones:*
  - Los productos son artesanales y pueden presentar ligeras variaciones.
  - Los pedidos personalizados no pueden modificarse ni cancelarse una vez iniciada su elaboración.
  - La producción comienza tras confirmar el pago.
  - Los envíos se realizan mediante Correos de Costa Rica.
  - Creativas no se responsabiliza por retrasos atribuibles a la empresa transportista.
  - Se incluyen recomendaciones para el cuidado de las piezas y canales oficiales de atención.

- [ ] *Política de privacidad y manejo de datos personales:* No se conoce.

---

## 4.7 Técnico / Operativo

- [x] *¿Quién actualizará el catálogo?*
  - Actualización manual de los datos del sitio (sin CMS) — productos viven en `js/config/products.js`

- [x] *Stack implementado:* sitio estático (HTML/CSS/JS vanilla, sin framework ni build step), routing por hash (`js/core/router.js`), estado global simple con suscripciones (`js/core/state.js`), i18n propio ES/EN (`js/config/i18n.js` + `js/features/i18n.js`) y selector de idioma (`#langBtn`) ya funcionando.


## 5. Accesibilidad e Inclusividad

Al vender a nivel nacional sin tienda física, el sitio web ES la tienda — si no es accesible, una parte de las clientas queda excluida de comprar. Esto aplica a todas las páginas (Home, Categoría, Ficha de producto, Carrito).

✅ **El widget de accesibilidad completo ya está implementado** en `js/features/accessibility.js`, con todos los controles descritos abajo (tamaño de letra, modo oscuro, reducir movimiento, subrayar enlaces, restablecer), atrapa el foco, cierra con `Esc` y devuelve el foco al botón que lo abrió.

### 5.1 Botón de accesibilidad (widget)
- **Ícono:** el símbolo universal de accesibilidad (figura dentro de un círculo), reconocible a simple vista.
- **Ubicación:** fijo en pantalla (flotante), esquina inferior derecha; visible en todas las páginas. El botón "volver arriba" queda justo encima (misma esquina) y las redes sociales flotantes en paralelo del lado izquierdo — ver 5.4.
- **Al abrirse, ofrece:**
  - **Tamaño de letra** ✅ — 3 niveles (botones con `aria-pressed`, clases `a11y-fs-1`/`a11y-fs-2`), afecta todo el sitio.
  - **Modo oscuro / alto contraste** ✅ — alterna paleta clara ⇄ oscura (`body.a11y-dark`) sin perder identidad de marca.
  - **Reducir movimiento** ✅ — clase `a11y-reduce-motion`.
  - **Subrayar enlaces** ✅ — clase `a11y-underline`.
  - **Restablecer** ✅ — botón `#a11yReset`.
  - Los interruptores (modo oscuro, reducir movimiento, subrayar enlaces) se muestran como **toggle switch** (`<input type="checkbox" role="switch">`) ✅ implementado tal como se sugería.
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

### 5.4 Otros elementos flotantes de apoyo — ✅ todo implementado

- **Botón "Volver arriba"** (`#backToTop`, `js/features/scroll.js`): flotante, justo encima del botón de accesibilidad (misma esquina, inferior derecha). Aparece solo después de ~400px de scroll y regresa al inicio con scroll suave.
- **Redes sociales flotantes** (`.social-fab`, esquina inferior izquierda): tres íconos circulares — WhatsApp, Instagram y Facebook — apilados, con `rel="noopener noreferrer"`. Son enlaces directos a cada red, no parte del footer.
- **Selector de idioma (Español / Inglés)** (`#langBtn`, junto al carrito en el header): cambia todo el texto visible del sitio vía `t()`/`translateDom()` (~115 claves en `js/config/i18n.js`) y la preferencia se guarda en `localStorage`, igual que el carrito.
- Nombres propios de producto (ej. "Anillo Aurora") no se traducen; sí se traducen categorías, materiales, subcategorías y todo el texto de interfaz.

---

## 6. Seguridad

Al no haber backend ni base de datos, la superficie de ataque del sitio es pequeña, pero igual hay que cuidar varios puntos:

- **HTTPS obligatorio** en el dominio final (certificado SSL) — pendiente hasta el despliegue final; sin esto, los navegadores marcan el sitio como "no seguro" y desalienta la compra.
- **Enlaces externos seguros** ✅ implementado: todos los `target="_blank"` (footer, íconos flotantes, contacto, envío de pedido por WhatsApp) ya usan `rel="noopener noreferrer"`.
- **`localStorage` solo para datos no sensibles**: carrito, preferencias de accesibilidad e idioma — nunca contraseñas, datos de pago o información personal completa, ya que no está cifrado y es visible desde el navegador.
- **Si más adelante se agrega un formulario** (contacto, newsletter): validar y sanitizar lo que se escribe antes de mostrarlo en cualquier parte del sitio (previene XSS), y agregar protección anti-spam básica (honeypot o captcha).
- **Seguridad de las cuentas administrativas**: ya que no hay panel propio, activar verificación en dos pasos (2FA) en el hosting, el registrador del dominio, y las redes sociales/WhatsApp Business — son el único "acceso" a proteger.
- **Copias de respaldo** de los archivos del sitio (al ser estático, versionarlo en un repositorio como este ya cumple esa función).
- **Protección de datos personales**: aunque el pedido se coordina por WhatsApp y no queda guardado en el sitio, si en algún punto se recolectan datos (nombre, dirección, teléfono) hay que cumplir con la ley de protección de datos aplicable en el país de venta.
- **Ventaja a favor**: al usar WhatsApp para cerrar el pedido, esa conversación ya viaja cifrada de extremo a extremo por la propia aplicación — el sitio no maneja ni almacena esos datos sensibles.

---

## 7. Plan de Trabajo Sugerido (orden de ejecución)

1. ✅ **Definir identidad de marca** (colores finales, tipografía, logo) — sección 4.1
2. ✅ **Estructurar el catálogo** (9 categorías + subcategorías) — falta refinar atributos de filtro (precio, material, piedra)
3. ⚠️ **Recolectar contenido e imágenes de producto reales** — el catálogo actual (211 productos) es data de ejemplo/placeholder, pendiente de reemplazar por productos reales de Creativas
4. ✅ **Maquetar Home** (landing persuasiva, con video hero) — sección 4.2
5. ✅ **Maquetar Categoría y Ficha de producto** — pendiente: galería multi-imagen en ficha de producto (hoy es una sola imagen)
6. ✅ **Flujo de Carrito (localStorage) + pedido por WhatsApp, y métodos de envío** — sección 4.3 (carrito y checkout son la misma interfaz, ver sección 1)
7. ✅ **Construir páginas de Nosotros y Contacto** — secciones 4.4 y 4.5
8. ✅ **Redactar e implementar políticas legales** (`#/politicas`) — sección 4.6, falta política de privacidad
9. ✅ **Implementar widget de accesibilidad y selector de idioma** — sección 5; falta auditoría formal de contraste WCAG AA sobre rosa palo/dorado
10. ⚠️ **Aplicar buenas prácticas de seguridad**: enlaces externos con `rel="noopener noreferrer"` ✅; HTTPS y 2FA en cuentas pendientes hasta el despliegue — sección 6
11. ⏳ **Pruebas de usabilidad** (teclado y lector de pantalla) en móvil y escritorio antes de publicar — pendiente

---

## 8. Próximo Paso

Con la estructura del sitio ya construida, los pendientes reales son:
1. Reemplazar el catálogo de ejemplo (`js/config/products.js`) por los productos reales de Creativas (fotos, precios, materiales).
2. Agregar galería multi-imagen en la ficha de producto.
3. Sumar filtros de precio/material y activar "Nuevo"/"Edición limitada" con datos reales.
4. Redactar política de privacidad.
5. Auditar contraste de color (WCAG AA) y probar navegación completa por teclado/lector de pantalla.
6. Configurar HTTPS y 2FA en las cuentas (hosting, dominio, redes) al momento del despliegue.
