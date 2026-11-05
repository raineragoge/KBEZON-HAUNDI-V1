/**
 * Menu data for KBZÓN HAUNDI
 * Categorized into Pintxos, Medias raciones, Raciones completas, and Bebidas & Vinos.
 */

export type MenuCategory = 'pintxos' | 'medias' | 'raciones' | 'bebidas';

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  portionType: string;
  description: string;
  ingredients?: string[];
  allergens?: string[];
  price?: string; // Only displayed if verified or marked as orientativo
  isFeatured?: boolean;
  image?: string;
  availabilityNote?: string;
  isFusion?: boolean;
}

export interface PortionConcept {
  type: MenuCategory;
  title: string;
  subtitle: string;
  description: string;
  idealFor: string;
}

export const PORTION_CONCEPTS: PortionConcept[] = [
  {
    type: 'pintxos',
    title: 'El Pintxo',
    subtitle: 'Bocado individual',
    description: 'Directo de la barra o recién salido del pase caliente. Pensado para degustar en uno o dos bocados con una copa en la mano.',
    idealFor: '1 persona · Barra viva y aperitivo',
  },
  {
    type: 'medias',
    title: 'Media Ración',
    subtitle: 'Picar y compartir',
    description: 'El formato idóneo para probar varias recetas entre dos o tres personas sin comprometer el apetito para el siguiente plato.',
    idealFor: '2–3 personas · Picoteo variado',
  },
  {
    type: 'raciones',
    title: 'Ración Completa',
    subtitle: 'Al centro de la mesa',
    description: 'Platos principales contundentes elaborados al momento con producto fresco de lonja y huerta, pensados para compartir en mesa.',
    idealFor: 'Mesa completa · Comida o cena',
  },
  {
    type: 'bebidas',
    title: 'Bodega & Barra',
    subtitle: 'Vinos, txakolis y cervezas',
    description: 'Selección de txakolis de Getaria, vinos de Rioja Alavesa, sidra natural de caserío y cervezas para acompañar cada bocado.',
    idealFor: 'Maridaje y brindis',
  },
];

export const MENU_ITEMS: MenuItem[] = [
  // PLATOS PROTAGONISTAS Y PINTXOS
  {
    id: 'gambas-parrilla',
    name: 'Gambas a la parrilla',
    category: 'raciones',
    portionType: 'Ración completa',
    description: 'Gambas seleccionadas pasadas por fuego vivo de parrilla, terminadas con emulsión ligera de cítricos, sal de Añana y aceite de oliva virgen extra.',
    ingredients: ['Gamba roja', 'Sal marina de Añana', 'Aceite de oliva virgen extra', 'Emulsión cítrica'],
    allergens: ['Crustáceos'],
    isFeatured: true,
    image: '/src/assets/images/hero_gastrobar_dish_1793876637326.jpg',
    availabilityNote: 'Producto fresco de mercado. Sujeto a disponibilidad de lonja.',
  },
  {
    id: 'foie-manzana',
    name: 'Foie gras con compota de manzana verde',
    category: 'medias',
    portionType: 'Media ración / Ración',
    description: 'Medallón de foie gras de pato sellado a fuego alto, acompañado de compota casera de manzana verde reineta ácida y reducción de sidra natural de Gipuzkoa.',
    ingredients: ['Foie gras de pato', 'Manzana verde reineta', 'Reducción de sidra natural', 'Escamas de sal'],
    isFeatured: true,
    image: '/src/assets/images/dish_foie_manzana_1793876652516.jpg',
    availabilityNote: 'Especialidad clásica reinterpretada.',
  },
  {
    id: 'arroz-chaufa-kbzon',
    name: 'Arroz estilo chaufa al estilo KBZÓN',
    category: 'raciones',
    portionType: 'Ración completa al centro',
    description: 'Wok a temperatura máxima con base de arroz salteado, calamar fresco de lonja, langostinos, cebolleta china, toque de jengibre y el sello euskonavarro de nuestra cocina.',
    ingredients: ['Arroz salteado', 'Calamar de potera', 'Langostino', 'Cebollino y jengibre', 'Soja ahumada'],
    allergens: ['Crustáceos', 'Moluscos', 'Soja'],
    isFeatured: true,
    isFusion: true,
    image: '/src/assets/images/dish_arroz_chaufa_1793876666431.jpg',
    availabilityNote: 'Fusión euskoperuana con producto cantábrico.',
  },
  {
    id: 'gilda-kbzon',
    name: 'Gilda KBZÓN de la casa',
    category: 'pintxos',
    portionType: 'Pintxo individual',
    description: 'El emblema donostiarra: piparra tierna de Ibarra encurtida, lomo de anchoa del Cantábrico sobada a mano y aceituna manzanilla bañada en AOVE.',
    ingredients: ['Piparra de Ibarra', 'Anchoa del Cantábrico', 'Aceituna manzanilla', 'AOVE arbequina'],
    allergens: ['Pescado'],
    isFeatured: false,
    availabilityNote: 'Disponible en barra en todo momento.',
  },
  {
    id: 'croquetas-caseras',
    name: 'Croquetas melosas de jamón ibérico',
    category: 'medias',
    portionType: 'Media ración (4 uds) / Ración (8 uds)',
    description: 'Bechamel de leche entera infusionada con hueso de jamón ibérico de bellota, rebozado fino en panko crujiente y frito al momento.',
    ingredients: ['Leche de caserío', 'Jamón ibérico de bellota', 'Mantequilla', 'Panko japonés'],
    allergens: ['Lácteos', 'Gluten', 'Huevo'],
    isFeatured: false,
    availabilityNote: 'Elaboración diaria.',
  },
  {
    id: 'pulpo-braseado',
    name: 'Pulpo braseado con parmentier ahumada',
    category: 'raciones',
    portionType: 'Ración completa',
    description: 'Pata de pulpo de roca cocida al punto y pasada por brasa, sobre cama de parmentier de patata ahumada y aceite de pimentón agridulce de la Vera.',
    ingredients: ['Pulpo de roca', 'Patata alavesa', 'Pimentón de la Vera', 'Sal Maldon'],
    allergens: ['Moluscos', 'Lácteos'],
    isFeatured: false,
    availabilityNote: 'Sugerencia recomendada de sala.',
  },
  {
    id: 'txangurro-bocado',
    name: 'Txangurro a la donostiarra en tosta tibia',
    category: 'pintxos',
    portionType: 'Pintxo caliente',
    description: 'Centollo cantábrico desmigado y estofado con chalota, puerro, tomate casero y flambeado al brandy, servido sobre pan de masa madre gratinado.',
    ingredients: ['Centollo', 'Chalota', 'Tomate casero', 'Brandy', 'Pan artesano'],
    allergens: ['Crustáceos', 'Gluten'],
    isFeatured: false,
    availabilityNote: 'Pase caliente de cocina.',
  },
  {
    id: 'steak-tartar',
    name: 'Steak tartar con toques de humo y encurtidos',
    category: 'medias',
    portionType: 'Media ración con tostas',
    description: 'Solomillo de vacuno mayor cortado a cuchillo en el momento, aliñado con alcaparras, chalota, mostaza antigua, yema curada y tostas crujientes.',
    ingredients: ['Vacuno mayor', 'Yema de huevo de caserío', 'Mostaza de Dijon', 'Pepinillo y alcaparras'],
    allergens: ['Huevo', 'Mostaza', 'Gluten'],
    isFeatured: false,
    availabilityNote: 'Preparado al momento según preferencia de picante.',
  },
  {
    id: 'tabla-quesos-vascos',
    name: 'Selección de quesos de pastores vascos',
    category: 'medias',
    portionType: 'Media ración para compartir',
    description: 'Idiazabal ahumado y natural de pastor, queso azul de caserío y curado de oveja latxa con nueces del país y dulce de membrillo casero.',
    ingredients: ['Queso Idiazabal D.O.', 'Queso azul de caserío', 'Nueces', 'Membrillo artesano'],
    allergens: ['Lácteos', 'Frutos de cáscara'],
    isFeatured: false,
  },

  // BEBIDAS Y VINOS
  {
    id: 'txakoli-getaria',
    name: 'Txakoli de Getaria D.O. (Copa / Botella)',
    category: 'bebidas',
    portionType: 'Por copa o botella',
    description: 'Variedad Hondarrabi Zuri. Vino blanco atlántico, fresco, salino y vibrante, con ese punto de aguja que define los tragos de la costa vasca.',
    isFeatured: false,
  },
  {
    id: 'rioja-alavesa',
    name: 'Rioja Alavesa Crianza (Tempranillo)',
    category: 'bebidas',
    portionType: 'Por copa o botella',
    description: 'Tinto criado en barrica de roble con notas de fruta roja madura, especias y un paso equilibrado ideal para carnes y raciones.',
    isFeatured: false,
  },
  {
    id: 'sidra-natural',
    name: 'Sidra natural vasca (Euskal Sagardoa D.O.)',
    category: 'bebidas',
    portionType: 'Botella escanciada',
    description: 'Sidra tradicional elaborada exclusivamente con manzanas de manzanal autóctono guipuzcoano, acidez limpia y chispa natural.',
    isFeatured: false,
  },
  {
    id: 'cerveza-artesanal',
    name: 'Cerveza de grifo y artesanas locales',
    category: 'bebidas',
    portionType: 'Caña, doble o tercio',
    description: 'Tirada cuidada con buena corona de espuma y referencias seleccionadas de microcervecerías de Donostialdea y Euskadi.',
    isFeatured: false,
  },
];
