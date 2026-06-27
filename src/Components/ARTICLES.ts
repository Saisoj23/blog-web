export const ARTICLES = [
  {
    id: 1,
    title: "El Primer Salto",
    thumbnail: "Chess Labyrinths thumnnail.png",
    logo: "chesslabyrinths.png",
    images: ["chess1.png", "chess2.png", "chess3.png"],
    excerpt: "Cómo después de 3 meses completé mi primer videojuego.",
    content:
      "<b>Chess Labyrinths</b> fue el primer videojuego que desarrollé. Lo creé cuando tenía 15 años como mi primer proyecto personal y una forma de aprender desarrollo de videojuegos desde cero. Con los pocos conocimientos que tenía de Blender en ese momento, modelé las piezas de ajedrez y varios de los obstáculos, y construí un pequeño juego de puzzles compuesto por 20 niveles. El objetivo es guiar una pieza de ajedrez hasta la meta para avanzar al siguiente desafío. El desarrollo tomó aproximadamente tres meses y, al finalizarlo, logré publicarlo en Google Play, marcando mi primera experiencia lanzando un videojuego.",
    gamelink: "https://saisoj.itch.io/chesslabyrinths",
  },
  {
    id: 2,
    title: "El Juego Imposible",
    thumbnail: "AXYSHELL thumnnail.png",
    logo: "axyshell.png",
    images: ["axys1.png", "axys2.png", "axys3.png"],
    excerpt: "EL interrumpido desarrollo de un juego muy frustrante",
    content:
      "Después de completar mi primer juego, rápidamente comencé a experimentar con nuevas mecánicas para mi siguiente proyecto. Inspirado por una de las mecánicas de <i>Undertale,</i> desarrollé <b>AXYS HELL,</b> un juego casual de reflejos en el que el objetivo es proteger un círculo rojo de flechas que lo atacan desde las cuatro direcciones. Mi idea inicial era crear una gran cantidad de niveles, pero con el tiempo tuve que ajustar el alcance del proyecto y finalmente terminé desarrollando cuatro. El proceso llevó aproximadamente seis meses, con algunas interrupciones en el medio, y me permitió seguir aprendiendo sobre diseño de mecánicas, dificultad y desarrollo de videojuegos.</p><p>La principal característica de este proyecto fue su elevada dificultad. A partir del tercer nivel, la curva de aprendizaje se vuelve considerablemente más exigente, alcanzando un punto que muchos jugadores pueden encontrar frustrante. Con el tiempo comprendí que el balance de la dificultad es un aspecto fundamental en el diseño de un videojuego, y sin duda es algo que corregiría en una posible secuela para ofrecer una experiencia más equilibrada sin perder el desafío.",
    gamelink: "https://saisoj.itch.io/axyshell",
  },
  {
    id: 3,
    title: "Experimentación Open Source",
    thumbnail: "Godot FPS thumbnail.png",
    logo: "godotfps.png",
    images: ["fps1.png", "fps2.png", "fps3.png"],
    excerpt: "El corto camino que recorrí con Godot.",
    content:
      "Esta pequeña demo fue el resultado de un período de experimentación, tanto con el género de los puzles en primera persona —principalmente inspirado en <i>Portal—</i> como con el motor Godot. El resultado fue un juego corto ambientado en una única habitación, donde el objetivo es desbloquear una puerta utilizando dos cubos de colores que funcionan como llaves al activar distintos interruptores. Además, incluí un pequeño rincón con ladrillos para poner a prueba las capacidades del motor de físicas y experimentar con las interacciones entre objetos.",
    gamelink: "https://saisoj.itch.io/godot-fps-puzzle",
  },
  {
    id: 4,
    title: "El Juego Soñado",
    thumbnail: "Heckernaut thumnnail.png",
    logo: "heckernaut.png",
    images: ["heck1.png", "heck2.png", "heck3.png"],
    excerpt: "El proyecto que todavía no pudo ser.",
    content:
      "El último juego al que pude dedicarle una cantidad considerable de tiempo fue también mi proyecto favorito. Lamentablemente, debido a la falta de una definición clara de sus mecánicas y de un alcance bien establecido, <b>The Heckernaut</b> aún no ha podido ser completado.</p><p>La idea principal era crear un juego inspirado en <i>The Binding of Isaac,</i> pero con un enfoque más frenético y dinámico. En él, el protagonista, conocido simplemente como <i>The Sinner,</i> debe abrirse camino por el infierno utilizando armas de fuego para enfrentarse a demonios de apariencia poco convencional. Las balas viajan a gran velocidad, los enemigos son agresivos y el combate obliga al jugador a mantenerse en constante movimiento.</p><p>Fue el proyecto más ambicioso que inicié hasta ese momento, aunque solo pude dedicarle alrededor de tres meses antes de terminar la secundaria. A pesar de haber quedado inconcluso, el test room se encuentra disponible en mi página de itch.io junto con el resto de mis proyectos, como una muestra del concepto y de las mecánicas que llegué a desarrollar.",
    gamelink: "https://saisoj.itch.io/theheckernaut",
  },
];

export interface ArticleTemplate {
  id: number;
  title: string;
  thumbnail: string;
  logo: string;
  images: string[];
  excerpt: string;
  content: string;
  gamelink: string;
}
