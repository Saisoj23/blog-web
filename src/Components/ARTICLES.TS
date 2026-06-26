export const ARTICLES = [
  {
    id: 1,
    title: "First Blog Post",
    excerpt: "This is a short intro to the first blog post.",
    content: "This is the full content of the first blog post. Welcome!",
  },
  {
    id: 2,
    title: "Second Blog Post",
    excerpt: "A quick teaser of the second post...",
    content: "Full content of the second blog post goes here.",
  },
  {
    id: 3,
    title: "Cómo elegir la camiseta de fútbol perfecta",
    excerpt:
      "Descubre qué aspectos debes considerar antes de comprar una camiseta.",
    content:
      "Elegir una camiseta de fútbol va más allá del diseño. Es importante considerar la calidad del tejido, el ajuste, la autenticidad de los detalles y el uso que le darás. Una buena camiseta no solo representa a tu equipo, sino que también ofrece comodidad y durabilidad.",
  },
  {
    id: 5,
    title: "¿Cómo cuidar tu camiseta para que dure más?",
    excerpt: "Algunos consejos simples para mantener tus prendas como nuevas.",
    content:
      "Lava las camisetas con agua fría, evita el uso de secadora y plánchalas siempre del lado interno. Estos cuidados ayudan a preservar los colores, los estampados y la calidad de la tela durante muchos años.",
  },
  {
    id: 6,
    title: "La evolución del diseño en las camisetas de fútbol",
    excerpt: "Desde el algodón hasta las telas de alto rendimiento.",
    content:
      "Con el paso del tiempo, las camisetas evolucionaron tanto en materiales como en tecnología. Hoy ofrecen mayor transpirabilidad, menor peso y un ajuste pensado para mejorar el rendimiento dentro del campo.",
  },
  {
    id: 7,
    title: "Las mejores camisetas para coleccionistas",
    excerpt: "Conoce cuáles son las prendas más buscadas por los fanáticos.",
    content:
      "Las ediciones limitadas, las camisetas utilizadas en finales y los modelos históricos suelen ser las piezas más valiosas para cualquier colección. Su valor aumenta con el tiempo y conservan una gran carga emocional.",
  },
  {
    id: 8,
    title: "¿Original o réplica? Diferencias que debes conocer",
    excerpt: "Aprende a identificar cada tipo de camiseta.",
    content:
      "Las camisetas originales están confeccionadas con materiales premium y tecnología utilizada por los jugadores, mientras que las réplicas ofrecen un excelente equilibrio entre calidad y precio para el uso diario.",
  },
  {
    id: 9,
    title: "Cinco consejos para comprar camisetas online",
    excerpt: "Evita errores y compra con confianza.",
    content:
      "Antes de comprar, revisa la guía de talles, verifica la reputación del vendedor, observa fotografías reales, consulta la política de cambios y asegúrate de conocer los tiempos de envío.",
  },
  {
    id: 10,
    title: "Las tendencias en camisetas de fútbol para esta temporada",
    excerpt: "Colores vibrantes, diseños clásicos y mucha personalidad.",
    content:
      "Las nuevas colecciones combinan inspiración retro con tecnologías modernas. Los diseños minimalistas, los detalles vintage y los patrones exclusivos marcan tendencia en las principales ligas del mundo.",
  },
  {
    id: 11,
    title: "Por qué las camisetas personalizadas son tan populares",
    excerpt: "Lleva el nombre y número que más te representan.",
    content:
      "Personalizar una camiseta permite crear una prenda única. Ya sea con tu nombre, el de tu jugador favorito o una fecha especial, es una excelente forma de hacerla aún más significativa.",
  },
  {
    id: 12,
    title: "Cómo elegir el talle correcto",
    excerpt: "Evita devoluciones siguiendo estas recomendaciones.",
    content:
      "Consulta siempre la tabla de medidas del fabricante y compara las dimensiones con una camiseta que ya tengas. Si buscas un ajuste más holgado, considera elegir una talla superior.",
  },
];

export interface ArticleTemplate {
  id: number;
  title: string;
  excerpt: string;
  content: string;
}
