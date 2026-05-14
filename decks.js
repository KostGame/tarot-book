const TAROT_MAJOR_IDS = [
  "major-00-fool",
  "major-01-magician",
  "major-02-high-priestess",
  "major-03-empress",
  "major-04-emperor",
  "major-05-hierophant",
  "major-06-lovers",
  "major-07-chariot",
  "major-08-strength",
  "major-09-hermit",
  "major-10-wheel-of-fortune",
  "major-11-justice",
  "major-12-hanged-man",
  "major-13-death",
  "major-14-temperance",
  "major-15-devil",
  "major-16-tower",
  "major-17-star",
  "major-18-moon",
  "major-19-sun",
  "major-20-judgement",
  "major-21-world",
];

const TAROT_MINOR_SUITS = ["cups", "swords", "wands", "pentacles"];
const TAROT_MINOR_RANKS = [
  "01-ace",
  "02-two",
  "03-three",
  "04-four",
  "05-five",
  "06-six",
  "07-seven",
  "08-eight",
  "09-nine",
  "10-ten",
  "11-page",
  "12-knight",
  "13-queen",
  "14-king",
];

function buildMajorDeckMap(basePath, extension = "jpg") {
  return Object.fromEntries(TAROT_MAJOR_IDS.map(cardId => [cardId, `${basePath}/${cardId}.${extension}`]));
}

function buildFullDeckMap(basePath, extension = "jpg") {
  const map = buildMajorDeckMap(basePath, extension);
  TAROT_MINOR_SUITS.forEach(suit => {
    TAROT_MINOR_RANKS.forEach(rank => {
      map[`${suit}-${rank}`] = `${basePath}/${suit}-${rank}.${extension}`;
    });
  });
  return map;
}

function buildTarotNouveauNativeTitles() {
  const titles = { "major-00-fool": "Excuse" };
  TAROT_MAJOR_IDS.slice(1).forEach((cardId, index) => {
    titles[cardId] = `Atout ${index + 1}`;
  });
  const suitNames = { swords: "Pique", cups: "Cœur", wands: "Trèfle", pentacles: "Carreau" };
  const rankNames = {
    "01-ace": "As",
    "02-two": "2",
    "03-three": "3",
    "04-four": "4",
    "05-five": "5",
    "06-six": "6",
    "07-seven": "7",
    "08-eight": "8",
    "09-nine": "9",
    "10-ten": "10",
    "11-page": "Valet",
    "12-knight": "Cavalier",
    "13-queen": "Dame",
    "14-king": "Roi",
  };
  Object.entries(suitNames).forEach(([suit, suitTitle]) => {
    Object.entries(rankNames).forEach(([rankId, rankTitle]) => {
      titles[`${suit}-${rankId}`] = `${rankTitle} de ${suitTitle}`;
    });
  });
  return titles;
}

function buildTaroccoPiemonteseNativeTitles() {
  const titles = {
    "major-00-fool": "Il Matto",
    "major-01-magician": "Il Bagatto",
    "major-02-high-priestess": "La Papessa",
    "major-03-empress": "L'Imperatrice",
    "major-04-emperor": "L'Imperatore",
    "major-05-hierophant": "Il Papa",
    "major-06-lovers": "Gli Amanti",
    "major-07-chariot": "Il Carro",
    "major-08-strength": "La Forza",
    "major-09-hermit": "L'Eremita",
    "major-10-wheel-of-fortune": "Rota di Fortuna",
    "major-11-justice": "La Giustizia",
    "major-12-hanged-man": "L'Appeso",
    "major-13-death": "La Morte",
    "major-14-temperance": "La Temperenza",
    "major-15-devil": "Il Diavolo",
    "major-16-tower": "La Torre",
    "major-17-star": "Le Stelle",
    "major-18-moon": "La Luna",
    "major-19-sun": "Il Sole",
    "major-20-judgement": "L'Angelo",
    "major-21-world": "Il Mondo",
  };
  const suitNames = { swords: "Spade", cups: "Coppe", pentacles: "Denari", wands: "Bastoni" };
  const rankNames = {
    "01-ace": "Asso",
    "02-two": "2",
    "03-three": "3",
    "04-four": "4",
    "05-five": "5",
    "06-six": "6",
    "07-seven": "7",
    "08-eight": "8",
    "09-nine": "9",
    "10-ten": "10",
    "11-page": "Fante",
    "12-knight": "Cavallo",
    "13-queen": "Donna",
    "14-king": "Re",
  };
  Object.entries(suitNames).forEach(([suit, suitTitle]) => {
    Object.entries(rankNames).forEach(([rankId, rankTitle]) => {
      titles[`${suit}-${rankId}`] = `${rankTitle} di ${suitTitle}`;
    });
  });
  return titles;
}

function buildJeanDodalNativeTitles() {
  return {
    "major-00-fool": "Le Mat",
    "major-01-magician": "Le Bateleur",
    "major-02-high-priestess": "La Papesse",
    "major-03-empress": "L'Imperatrice",
    "major-04-emperor": "L'Empereur",
    "major-05-hierophant": "Le Pape",
    "major-06-lovers": "L'Amoureux",
    "major-07-chariot": "Le Chariot",
    "major-08-strength": "La Force",
    "major-09-hermit": "L'Hermite",
    "major-10-wheel-of-fortune": "La Roue de Fortune",
    "major-11-justice": "La Justice",
    "major-12-hanged-man": "Le Pendu",
    "major-13-death": "L'Arcane sans nom",
    "major-14-temperance": "Tempérance",
    "major-15-devil": "Le Diable",
    "major-16-tower": "La Maison Dieu",
    "major-17-star": "L'Étoile",
    "major-18-moon": "La Lune",
    "major-19-sun": "Le Soleil",
    "major-20-judgement": "Le Jugement",
    "major-21-world": "Le Monde",
  };
}

function buildJeanDodalMajorDeckMap() {
  return {
    ...buildMajorDeckMap("assets/cards-experimental/jean-dodal-marseille", "jpg"),
    "major-08-strength": "assets/cards-experimental/jean-dodal-marseille/major-11-strength.jpg",
    "major-11-justice": "assets/cards-experimental/jean-dodal-marseille/major-08-justice.jpg",
  };
}

function buildEgyptianFalconnierNativeTitles() {
  return {
    "major-00-fool": "Le Crocodile",
    "major-01-magician": "L'initié",
    "major-02-high-priestess": "Le Sanctuaire",
    "major-03-empress": "Isis",
    "major-04-emperor": "Le Pharaon",
    "major-05-hierophant": "Le Maître des arcanes",
    "major-06-lovers": "Les Deux routes",
    "major-07-chariot": "Le Char d'Osiris",
    "major-08-strength": "La Force",
    "major-09-hermit": "La Lampe voilée",
    "major-10-wheel-of-fortune": "La Roue des destinées",
    "major-11-justice": "La Balance et le glaive",
    "major-12-hanged-man": "Le Pendu",
    "major-13-death": "La Mort",
    "major-14-temperance": "Les Deux urnes",
    "major-15-devil": "Thyphon",
    "major-16-tower": "La Tour foudroyée",
    "major-17-star": "L'Étoile",
    "major-18-moon": "La Lune",
    "major-19-sun": "Le Soleil",
    "major-20-judgement": "Le Livre sacré",
    "major-21-world": "La couronne des mages",
  };
}

function buildMarseilleNativeTitles() {
  return {
    "major-00-fool": "Le Mat / Le Fou",
    "major-01-magician": "Le Bateleur",
    "major-02-high-priestess": "La Papesse",
    "major-03-empress": "L'Impératrice",
    "major-04-emperor": "L'Empereur",
    "major-05-hierophant": "Le Pape",
    "major-06-lovers": "L'Amoureux",
    "major-07-chariot": "Le Chariot",
    "major-08-strength": "La Force",
    "major-09-hermit": "L'Hermite",
    "major-10-wheel-of-fortune": "La Roue de Fortune",
    "major-11-justice": "La Justice",
    "major-12-hanged-man": "Le Pendu",
    "major-13-death": "L'Arcane sans nom / La Mort",
    "major-14-temperance": "Tempérance",
    "major-15-devil": "Le Diable",
    "major-16-tower": "La Maison Dieu",
    "major-17-star": "L'Étoile",
    "major-18-moon": "La Lune",
    "major-19-sun": "Le Soleil",
    "major-20-judgement": "Le Jugement",
    "major-21-world": "Le Monde",
  };
}

window.TAROT_DECKS = [
  {
    id: "rws-classic",
    name: "\u041A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043A\u043E\u043B\u043E\u0434\u0430 \u0422\u0430\u0440\u043E",
    description: "Rider-Waite-Smith, локальные изображения.",
    cssClass: "deck-rws-classic",
    status: "stable",
    coverage: "full",
    sourceUrl: "https://commons.wikimedia.org/wiki/Category:Rider-Waite-Smith_tarot_deck_(TaionWC)",
    cards: buildFullDeckMap("assets/cards", "jpg"),
  },
  {
    id: "rws-dark-classic",
    name: "\u041A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043A\u043E\u043B\u043E\u0434\u0430 \u0422\u0430\u0440\u043E, \u0442\u0435\u043C\u043D\u0430\u044F",
    description: "CSS-режим поверх локальной Rider-Waite-Smith.",
    cssClass: "deck-rws-dark-classic",
    status: "stable",
    coverage: "full",
    fallbackDeckId: "rws-classic",
    sourceUrl: "https://commons.wikimedia.org/wiki/Category:Rider-Waite-Smith_tarot_deck_(TaionWC)",
    cards: buildFullDeckMap("assets/cards", "jpg"),
  },
  {
    id: "marseille-historical",
    name: "Tarot de Marseille",
    description: "Nicolas Conver 1760, только старшие арканы.",
    cssClass: "deck-marseille-historical",
    status: "experimental",
    coverage: "major-only",
    sourceUrl: "https://commons.wikimedia.org/wiki/Category:Tarot_de_Marseille_-_Nicolas_Conver_1760",
    licenseNote: "CC BY-SA 4.0 на страницах файлов Commons; проверьте атрибуцию при дальнейшем использовании.",
    nativeTitles: buildMarseilleNativeTitles(),
    cards: buildMajorDeckMap("assets/cards-experimental/marseille-historical", "jpg"),
  },
  {
    id: "jean-dodal-marseille",
    name: "Jean Dodal Tarot",
    description: "Marseille 1701, major-only pack с title-based mapping layer.",
    cssClass: "deck-jean-dodal-marseille",
    status: "experimental",
    coverage: "major-only",
    sourceUrl: "https://commons.wikimedia.org/wiki/Category:Tarot_de_Marseille_-_Jean_Dodal",
    licenseNote: "Public domain scans on Commons; проверьте file pages и tarot-history.com credit при дальнейшем использовании.",
    nativeTitles: buildJeanDodalNativeTitles(),
    cards: buildJeanDodalMajorDeckMap(),
  },
  {
    id: "egyptian-falconnier",
    name: "Egyptian Tarot",
    description: "Falconnier / Egyptian Tarot, только старшие арканы.",
    cssClass: "deck-egyptian-falconnier",
    status: "experimental",
    coverage: "major-only",
    sourceUrl: "https://commons.wikimedia.org/wiki/Category:Egyptian_Tarot_(Falconnier)",
    licenseNote: "Commons file pages for the 22 card images are marked CC0 / public domain dedication.",
    nativeTitles: buildEgyptianFalconnierNativeTitles(),
    cards: buildMajorDeckMap("assets/cards-experimental/egyptian-falconnier", "png"),
  },
  {
    id: "tarot-nouveau-grimaud-1898",
    name: "Tarot Nouveau",
    description: "Французская игровая колода 1898 года, полный набор 78 карт.",
    cssClass: "deck-tarot-nouveau-grimaud-1898",
    status: "experimental",
    coverage: "full",
    sourceUrl: "https://commons.wikimedia.org/wiki/Category:Tarot_nouveau_-_Grimaud_-_1898",
    licenseNote: "Public domain scan on Commons; back side excluded from the 78-card pack.",
    nativeTitles: buildTarotNouveauNativeTitles(),
    cards: buildFullDeckMap("assets/cards-experimental/tarot-nouveau-grimaud-1898", "jpg"),
  },
  {
    id: "tarocco-piemontese-solesio-1865",
    name: "Tarocco Piemontese",
    description: "Историческая итальянская игровая колода 1865 года, полный набор 78 карт.",
    cssClass: "deck-tarocco-piemontese-solesio-1865",
    status: "experimental",
    coverage: "full",
    sourceUrl: "https://commons.wikimedia.org/wiki/Category:Piedmontese_tarot_deck_-_Solesio_-_1865",
    licenseNote: "Public domain scans on Commons; back side excluded from the 78-card pack.",
    nativeTitles: buildTaroccoPiemonteseNativeTitles(),
    cards: buildFullDeckMap("assets/cards-experimental/tarocco-piemontese-solesio-1865", "jpg"),
  },
  {
    id: "pixel-tarot",
    name: "Pixel Tarot",
    description: "Pixel art, полный локальный набор 78 карт.",
    cssClass: "deck-pixel-tarot",
    status: "experimental",
    coverage: "full",
    sourceUrl: "https://papitas319.itch.io/tarot-pixel-assets",
    licenseNote: "Name your own price; требуется ручная проверка лицензии пользователем.",
    cards: buildFullDeckMap("assets/cards-experimental/pixel-tarot", "png"),
  },
];
