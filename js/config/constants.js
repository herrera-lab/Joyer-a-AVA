export const BRAND = {
  name: 'Creativas',
  slogan_es: 'Tu esencia en un accesorio',
  slogan_en: 'Your essence in an accessory',
  logo: 'images/LogoPrincipal.png',
  heroVideo: 'images/hero/videoPrincipal.mp4',
  mission_es:
    'Diseñar más que accesorios, creando piezas de identidad únicas que fusionan el estilo de cada persona con el legado artesanal de la marca, transformando la bisutería tradicional en arte con alma e historia.',
  mission_en:
    'Designing more than accessories: creating unique identity pieces that fuse each person’s style with the brand’s artisanal legacy, turning traditional jewelry-making into art with soul and history.',
  valueProp_es:
    'En Creativas, cada pieza es diseñada con amor y dedicación, haciendo que cada una sea única no solo en su confección sino también en el significado especial que lleva consigo. Nuestro deseo es que cada accesorio te acompañe en momentos importantes, refleje tu esencia y se convierta en un recuerdo que puedas atesorar.',
  valueProp_en:
    'At Creativas, every piece is designed with love and dedication, making each one unique not only in how it is made but in the special meaning it carries. We want every accessory to be with you in important moments, reflect your essence, and become a keepsake you treasure.',
  history_es:
    'Creativas nació de una pasión que comenzó a los nueve años con la creación de joyas hechas a mano. Aunque ese sueño quedó en pausa durante un tiempo, en el año 2019 renació esa pasión, dando origen a Creativas. Desde entonces, la marca ha crecido con dedicación, aprendizaje y amor, creando piezas exclusivas que reflejan la esencia de quien las lleva.',
  history_en:
    'Creativas was born from a passion that began at age nine, handcrafting jewelry. Although that dream paused for a while, it was reborn in 2019, giving rise to Creativas. Since then, the brand has grown with dedication, learning and love, creating exclusive pieces that reflect the essence of whoever wears them.'
};

export const CONTACT = {
  whatsappNumber: '50688083026',
  whatsappDisplay: '+506 8808-3026',
  email: 'creativas.gd@gmail.com',
  hours_es: 'Lunes a sábado, 8:00 a. m. – 7:00 p. m.',
  hours_en: 'Monday to Saturday, 8:00 a.m. – 7:00 p.m.',
  instagram: 'https://www.instagram.com/creat_ivas/',
  facebook: 'https://www.facebook.com/profile.php?id=100063504703009'
};

export function waLink(message) {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const SHIPPING = {
  carrier_es: 'Correos de Costa Rica',
  outsideSanCarlos: 3500,
  withinSanCarlos: 4200,
  note_es:
    'El seguimiento del envío se proporciona una vez confirmado el pago y finalizada la elaboración del pedido.'
};

export const POLICIES = {
  shipping_es: [
    'Envíos a todo Costa Rica mediante Correos de Costa Rica.',
    '₡3.500 a cualquier parte del país fuera de San Carlos.',
    '₡4.200 dentro del cantón de San Carlos.',
    'El seguimiento del envío se proporciona una vez confirmado el pago y finalizada la elaboración del pedido.'
  ],
  returns_es: [
    'Cambios únicamente por defectos de fabricación reportados dentro de los 5 días naturales posteriores a la entrega.',
    'El producto debe devolverse en las mismas condiciones en que fue entregado y con su empaque.',
    'No se realizan devoluciones de dinero, excepto cuando exista un defecto de fabricación que no pueda ser reparado o reemplazado.',
    'Las piezas personalizadas o grabadas no tienen devolución ni cambio, salvo por errores atribuibles a Creativas.',
    'La garantía cubre exclusivamente defectos de fabricación: no cubre daños por golpes, agua, perfumes, productos químicos, desgaste normal o reparaciones de terceros.'
  ],
  terms_es: [
    'Los productos son artesanales y pueden presentar ligeras variaciones.',
    'Los pedidos personalizados no pueden modificarse ni cancelarse una vez iniciada su elaboración.',
    'La producción comienza tras confirmar el pago.',
    'Los envíos se realizan mediante Correos de Costa Rica.',
    'Creativas no se responsabiliza por retrasos atribuibles a la empresa transportista.'
  ],
  privacy_es: [
    'Esta sección está pendiente de definir junto con la dueña de la marca.',
    'Por ahora: el sitio no tiene backend ni base de datos propia — los pedidos se coordinan por WhatsApp, donde la conversación viaja cifrada de extremo a extremo por la propia aplicación.',
    'El carrito y las preferencias de idioma/accesibilidad se guardan únicamente en tu navegador (localStorage) y nunca se envían a ningún servidor.'
  ]
};

export const CARE_TIPS_ES = [
  'Evitá el contacto con agua, perfumes, cremas y productos de limpieza.',
  'Guardá cada pieza por separado, en su empaque o en una bolsa con cierre, para prevenir rayones.',
  'Quitate la joya antes de dormir, hacer ejercicio o bañarte.',
  'Limpiá con un paño suave y seco después de cada uso.'
];

export const CARE_TIPS_EN = [
  'Avoid contact with water, perfume, lotion and cleaning products.',
  'Store each piece separately, in its packaging or a sealed bag, to prevent scratches.',
  'Take the piece off before sleeping, exercising or showering.',
  'Wipe with a soft, dry cloth after each use.'
];

export const CURRENCY = 'CRC';
