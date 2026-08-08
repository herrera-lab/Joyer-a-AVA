export const BRAND = {
  name: 'Creativas',
  slogan_es: 'Tu esencia en un accesorio',
  slogan_en: 'Your essence in an accessory',
  logo: 'images/LogoPrincipal.webp',
  heroVideo: 'images/hero/videoPrincipal.mp4',
  mission_es:
    'Diseñar más que accesorios, creando piezas de identidad únicas que fusionan el estilo de cada persona con el legado artesanal de la marca, transformando la bisutería tradicional en arte con alma e historia.',
  mission_en:
    'Designing more than accessories: creating unique identity pieces that fuse each person’s style with the brand’s artisanal legacy, turning traditional jewelry-making into art with soul and history.',
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
  outsideSanCarlos: 4200,
  withinSanCarlos: 3500,
  note_es:
    'El seguimiento del envío se proporciona una vez confirmado el pago y finalizada la elaboración del pedido.'
};

export const POLICIES = {
  shipping_es: [
    'Envíos a todo Costa Rica mediante Correos de Costa Rica.',
    '₡4.200 a cualquier parte del país fuera de San Carlos.',
    '₡3.500 dentro del cantón de San Carlos.',
    'El seguimiento del envío se proporciona una vez confirmado el pago y finalizada la elaboración del pedido.'
  ],
  shipping_en: [
    'Shipping anywhere in Costa Rica via Correos de Costa Rica.',
    '₡4,200 to any part of the country outside San Carlos.',
    '₡3,500 within the San Carlos canton.',
    'Tracking is provided once payment is confirmed and the order is finished.'
  ],
  returns_es: [
    'Cambios únicamente por defectos de fabricación reportados dentro de los 5 días naturales posteriores a la entrega.',
    'El producto debe devolverse en las mismas condiciones en que fue entregado y con su empaque.',
    'No se realizan devoluciones de dinero, excepto cuando exista un defecto de fabricación que no pueda ser reparado o reemplazado.',
    'Las piezas personalizadas o grabadas no tienen devolución ni cambio, salvo por errores atribuibles a Creativas.',
    'La garantía cubre exclusivamente defectos de fabricación: no cubre daños por golpes, agua, perfumes, productos químicos, desgaste normal o reparaciones de terceros.'
  ],
  returns_en: [
    'Exchanges only for manufacturing defects reported within 5 calendar days of delivery.',
    'The product must be returned in the same condition it was delivered, with its packaging.',
    'No refunds are issued, except when a manufacturing defect cannot be repaired or replaced.',
    'Custom or engraved pieces have no returns or exchanges, except for errors attributable to Creativas.',
    'The warranty covers manufacturing defects exclusively: it does not cover damage from impact, water, perfume, chemical products, normal wear, or third-party repairs.'
  ],
  terms_es: [
    'Los productos son artesanales y pueden presentar ligeras variaciones.',
    'Los pedidos personalizados no pueden modificarse ni cancelarse una vez iniciada su elaboración.',
    'La producción comienza tras confirmar el pago.',
    'Los envíos se realizan mediante Correos de Costa Rica.',
    'Creativas no se responsabiliza por retrasos atribuibles a la empresa transportista.'
  ],
  terms_en: [
    'Products are handmade and may show slight variations.',
    'Custom orders cannot be modified or cancelled once production has started.',
    'Production begins once payment is confirmed.',
    'Shipping is handled via Correos de Costa Rica.',
    'Creativas is not responsible for delays attributable to the shipping carrier.'
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
