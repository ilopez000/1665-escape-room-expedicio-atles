// =====================================================================
//  EXPEDICIÓ ATLES · El mapa perdut del Grup Vela
//  Escape room de la sessió 3 del MP 1665 (el mapa dels entorns IT i OT)
//  Tot el contingut del joc és aquí: narrativa, teoria, imatges i proves.
// =====================================================================

export type Categoria = string;

export interface ProvaClassificar {
  tipus: 'classificar';
  titol: string;
  enunciat: string;
  categories: Categoria[];
  elements: { text: string; correcta: Categoria; perque: string }[];
  pista: string;
}

export interface ProvaSeleccionar {
  tipus: 'seleccionar';
  titol: string;
  enunciat: string;
  etiqueta: string;
  missatgeOk: string;
  elements: { text: string; sector: string; correcta: boolean; perque: string }[];
  pista: string;
}

export interface ProvaAparellar {
  tipus: 'aparellar';
  titol: string;
  enunciat: string;
  columnes: { nom: string; opcions: string[] }[];
  files: { text: string; correctes: string[]; perque: string }[];
  pista: string;
}

export interface ProvaSequencia {
  tipus: 'sequencia';
  titol: string;
  enunciat: string;
  inici: string;
  final: string;
  missatgeOk: string;
  ordre: string[];
  intrusos: { text: string; perque: string }[];
  pista: string;
}

export interface ProvaQuiz {
  tipus: 'quiz';
  titol: string;
  enunciat: string;
  preguntes: { pregunta: string; opcions: string[]; correcta: number; perque: string }[];
  pista: string;
}

export type Prova = ProvaClassificar | ProvaSeleccionar | ProvaAparellar | ProvaSequencia | ProvaQuiz;

export interface Imatge {
  src: string;
  alt: string;
  credit: string;
}

export interface Sala {
  id: number;
  codi: string;
  nom: string;
  lloc: string;
  icona: string;
  imatge: Imatge;
  transmissio: string[];
  teoria: { titol: string; html: string }[];
  ideaClau: string;
  proves: Prova[];
  fragment: { posicio: number; lletra: string };
  missatgeFinal: string;
}

export const CLAU_MESTRA = 'PLANTA';
export const CORREU_DOCENT = 'ilopez@pratfp.com';
export const GRUPS = ['AFI1', 'CI1', 'GAT1', 'MK1A', 'MK1B', 'TR1'];

const fig = (src: string, peu: string) =>
  `<figure class="figura"><img src="/img/${src}" alt="${peu}" loading="lazy" /><figcaption>${peu}</figcaption></figure>`;

export const INTRO = {
  titol: 'EXPEDICIÓ ATLES',
  subtitol: 'Societat Cartogràfica Prat · sessió 3',
  imatge: { src: '/img/foto-intro.webp', alt: 'Brúixola sobre un mapa antic', credit: 'Foto: rawpixel (CC0)' },
  transmissio: [
    'Carta segellada · Grup Vela, direcció general.',
    '«En deu anys hem passat d\'una gestoria a cinc negocis: la gestoria, una exportadora, un hotel, una botiga i una empresa de transport.»',
    '«Cada negoci ha comprat programes i aparells pel seu compte. Avui ningú no sap què tenim, què es comunica amb què ni per on ens poden atacar.»',
    '«L\'antic responsable de sistemes va dibuixar un atles de tota la tecnologia del grup… i el va tancar en un cofre amb una contrasenya de sis lletres.»',
    '«Necessitem un cartògraf o una cartògrafa que recorri les sis etapes, refaci el mapa i obri el cofre. Ens hi va el futur del grup.»',
  ],
};

export const SALES: Sala[] = [
  // ------------------------------------------------------------------ ETAPA 01
  {
    id: 1,
    codi: 'ETAPA 01',
    nom: 'El port de sortida',
    lloc: 'Seu central del Grup Vela',
    icona: '⚓',
    imatge: { src: '/img/foto-s1.webp', alt: 'Brúixola damunt d\'un mapa', credit: 'Foto: rawpixel (CC0)' },
    transmissio: [
      'Abans de salpar, el cap d\'expedició et dona el quadern de cartògraf.',
      'Un mapa que només entén qui l\'ha dibuixat no serveix de res. Primer aprèn per a què serveix i com es llegeix.',
    ],
    teoria: [
      {
        titol: 'Per què fer un mapa',
        html: '<p>Abans de digitalitzar res cal saber <strong>què hi ha</strong>. Moltes empreses compren tecnologia a trossos i al cap d\'uns anys ningú no sap què es comunica amb què.</p><p>El mapa dels entorns IT i OT és la <strong>fotografia de la tecnologia de l\'empresa</strong>. Et deixa veure tres coses:</p><ul><li><strong>Les illes</strong>: aparells i programes que tenen dades però no les comparteixen.</li><li><strong>Les dades que es tornen a teclejar</strong>: algú copia a mà el que una màquina ja sabia.</li><li><strong>Els punts febles</strong>: connexions que obren una porta a un atac.</li></ul>',
      },
      {
        titol: 'Els sis passos',
        html: fig('f1_passos.webp', 'Els sis passos per fer el mapa dels entorns IT i OT.') + '<p>Inventari IT → inventari OT → comparar → dibuixar → connectar → protegir. Les sis etapes d\'aquesta expedició segueixen exactament aquest ordre.</p>',
      },
      {
        titol: 'La llegenda del mapa',
        html: fig('f3_llegenda.webp', 'Una llegenda senzilla per a qualsevol mapa d\'entorns IT i OT.') + '<ul><li><strong>Cada element, en una sola capa.</strong></li><li><strong>Només fletxes on viatja una dada de veritat.</strong></li><li>Fletxa <strong>contínua</strong> per al que ja existeix; <strong>discontínua i vermella</strong> per al que proposes.</li><li>Marca el que és <strong>extern o al núvol</strong>.</li><li><strong>No amaguis les illes</strong>: els aparells desconnectats es dibuixen en gris.</li></ul>',
      },
    ],
    ideaClau: 'No pots millorar ni protegir el que no saps que tens. El mapa és l\'inventari que fa possible decidir què cal connectar, què cal canviar i què cal protegir.',
    proves: [
      {
        tipus: 'classificar',
        titol: 'Prova 1 · El quadern del cartògraf',
        enunciat: 'Has trobat notes d\'un mapa antic del Grup Vela. Quines segueixen les normes de la llegenda i quines són errors?',
        categories: ['Bona pràctica', 'Error de mapa'],
        elements: [
          { text: 'Les càmeres de l\'hotel que graven en un disc local surten en gris al mapa.', correcta: 'Bona pràctica', perque: 'Té dades però no les envia: és una illa i es dibuixa en gris.' },
          { text: 'El TPV de la botiga surt a la capa de planta i també a la de negoci, per si de cas.', correcta: 'Error de mapa', perque: 'Cada element va en una sola capa.' },
          { text: 'Una fletxa uneix l\'ERP amb l\'impressora del magatzem «perquè són a prop».', correcta: 'Error de mapa', perque: 'Una fletxa vol dir que viatja una dada, no que dos aparells siguin a prop.' },
          { text: 'El correu de la gestoria, que porta un proveïdor, surt amb vora discontínua.', correcta: 'Bona pràctica', perque: 'Així es marca el que és extern o al núvol.' },
          { text: 'La connexió que proposes entre la sonda del camió i el programa de rutes és una fletxa vermella discontínua.', correcta: 'Bona pràctica', perque: 'Les connexions proposades es distingeixen de les que ja existeixen.' },
          { text: 'Els aparells que no envien dades no surten al mapa, perquè no aporten res.', correcta: 'Error de mapa', perque: 'Les illes són justament les oportunitats: s\'han de veure.' },
          { text: 'El mapa té una llegenda i tots els símbols s\'hi fan servir igual.', correcta: 'Bona pràctica', perque: 'La llegenda fa que qualsevol l\'entengui.' },
          { text: 'La informàtica la porta un proveïdor, i per això no hi ha entorn IT al mapa.', correcta: 'Error de mapa', perque: 'Si la porta un proveïdor, també és al mapa, com a servei extern.' },
        ],
        pista: 'Repassa les cinc normes de la llegenda: una capa per element, fletxes només amb dades, contínua o discontínua, extern marcat i illes en gris.',
      },
    ],
    fragment: { posicio: 4, lletra: 'N' },
    missatgeFinal: 'Quadern a punt. Ja saps llegir i dibuixar un mapa d\'entorns.',
  },

  // ------------------------------------------------------------------ ETAPA 02
  {
    id: 2,
    codi: 'ETAPA 02',
    nom: 'L\'illa de l\'oficina',
    lloc: 'Gestoria Vela (AFI)',
    icona: '✉',
    imatge: { src: '/img/foto-s2.webp', alt: 'Equip treballant amb ordinadors en una oficina', credit: 'Foto: Startup Stock Photos, StockSnap (CC0)' },
    transmissio: [
      'Primera illa: la Gestoria Vela, on va néixer el grup.',
      'Aquí comença l\'inventari IT. Per a cada departament has d\'apuntar quins sistemes fa servir i qui els gestiona.',
    ],
    teoria: [
      {
        titol: 'Departament, sistemes i qui els gestiona',
        html: '<p>Per a cada <strong>departament</strong> apunta els <strong>sistemes</strong> que fa servir i <strong>qui els gestiona</strong>: l\'empresa (intern), un proveïdor (extern) o un servei al núvol.</p><p>Formen part de l\'entorn IT els departaments que <strong>fan</strong> informàtica (sistemes, suport, ciberseguretat) i els que en <strong>depenen</strong> per treballar (administració, comercial, màrqueting, recursos humans, logística, direcció).</p>',
      },
      {
        titol: 'Els sistemes típics',
        html: '<ul><li><strong>Administració i finances</strong>: ERP o comptabilitat, facturació electrònica, banca electrònica.</li><li><strong>Comercial i atenció al client</strong>: CRM, xat de la web, centraleta al núvol.</li><li><strong>Màrqueting</strong>: gestor de xarxes, correu massiu, analítica web.</li><li><strong>Logística i magatzem</strong>: gestió de magatzem (SGA), estocs, etiquetatge d\'enviaments.</li><li><strong>Recursos humans</strong>: nòmines, portal de l\'empleat, control horari.</li><li><strong>Direcció</strong>: quadre de comandament (BI), pressupostos.</li><li><strong>Sistemes</strong>: correu, ordinadors, còpies de seguretat, xarxa i Wi-Fi.</li></ul>',
      },
      {
        titol: 'On es busca des de fora',
        html: '<ul><li><strong>La web</strong>: àrea de clients, botiga en línia, reserves, xat.</li><li><strong>Les ofertes de feina</strong>: «es valorarà experiència amb tal ERP o tal CRM».</li><li><strong>Els documents que t\'envien</strong>: una factura electrònica o un correu automàtic delaten el sistema.</li><li><strong>Les notícies i les xarxes</strong> de l\'empresa i dels seus proveïdors.</li></ul><p>Si no saps segur quin sistema fan servir, escriu-ho com a <strong>suposició</strong> i digues per què.</p>',
      },
    ],
    ideaClau: 'Una empresa petita també té entorn IT. Si la informàtica la porta un proveïdor, també surt al mapa, marcada com a externa.',
    proves: [
      {
        tipus: 'aparellar',
        titol: 'Prova 2A · Cada sistema al seu departament',
        enunciat: 'Has trobat aquests sistemes a la Gestoria Vela. Digues a quin departament pertany cadascun.',
        columnes: [
          {
            nom: 'Departament',
            opcions: ['Administració i finances', 'Recursos humans', 'Comercial i atenció al client', 'Màrqueting', 'Direcció', 'Sistemes'],
          },
        ],
        files: [
          { text: 'Programa de comptabilitat i facturació electrònica', correctes: ['Administració i finances'], perque: 'Gestiona factures, cobraments i pagaments.' },
          { text: 'Portal de l\'empleat amb les nòmines', correctes: ['Recursos humans'], perque: 'Gestiona dades de les persones de l\'empresa.' },
          { text: 'CRM amb l\'historial de cada client', correctes: ['Comercial i atenció al client'], perque: 'És la memòria de la relació amb el client.' },
          { text: 'Eina per enviar el butlletí mensual als clients', correctes: ['Màrqueting'], perque: 'És comunicació i campanyes.' },
          { text: 'Quadre de comandament amb la facturació de cada mes', correctes: ['Direcció'], perque: 'Serveix per fer el seguiment del negoci.' },
          { text: 'Còpies de seguretat dels ordinadors i la Wi-Fi de l\'oficina', correctes: ['Sistemes'], perque: 'És la infraestructura que fa funcionar la resta.' },
          { text: 'Banca electrònica per pagar els proveïdors', correctes: ['Administració i finances'], perque: 'Tresoreria i pagaments.' },
          { text: 'Control horari amb el registre d\'entrades i sortides', correctes: ['Recursos humans'], perque: 'És una dada de les persones (jornada).' },
        ],
        pista: 'Pregunta\'t de qui és la dada: diners → administració; persones → RH; clients → comercial; campanyes → màrqueting; seguiment del negoci → direcció; infraestructura → sistemes.',
      },
      {
        tipus: 'quiz',
        titol: 'Prova 2B · Les preguntes del gestor',
        enunciat: 'El gerent de la gestoria té tres dubtes sobre el teu inventari.',
        preguntes: [
          {
            pregunta: '«La informàtica ens la porta una empresa de fora. Ho has de posar al mapa?»',
            opcions: [
              'Sí, com a servei extern: també és entorn IT',
              'No, perquè no és de l\'empresa',
              'Només si el proveïdor treballa a l\'oficina',
              'No, el mapa només recull el que és propi',
            ],
            correcta: 0,
            perque: 'Saber qui gestiona cada peça forma part del diagnòstic.',
          },
          {
            pregunta: 'No saps segur quin programa de nòmines fan servir. Què escrius?',
            opcions: [
              'Que és una suposició i per què ho suposes',
              'El nom del programa més conegut, com si fos segur',
              'Res: deixes el departament en blanc',
              'El que et digui un assistent d\'IA',
            ],
            correcta: 0,
            perque: 'Una suposició declarada és honesta; una dada inventada, no.',
          },
          {
            pregunta: 'Quina d\'aquestes pistes et diu més sobre els sistemes IT d\'una empresa?',
            opcions: [
              'Una oferta de feina que demana experiència amb un ERP concret',
              'El color del logotip',
              'El nombre de seguidors a Instagram',
              'L\'adreça de la seu',
            ],
            correcta: 0,
            perque: 'Les ofertes de feina diuen quins programes fan servir.',
          },
        ],
        pista: 'Al mapa hi va tot el que l\'empresa fa servir, encara que no sigui seu. I el que no saps, ho declares com a suposició.',
      },
    ],
    fragment: { posicio: 1, lletra: 'P' },
    missatgeFinal: 'Inventari IT de la gestoria completat: cada sistema al seu departament.',
  },

  // ------------------------------------------------------------------ ETAPA 03
  {
    id: 3,
    codi: 'ETAPA 03',
    nom: 'El bosc dels aparells',
    lloc: 'Hotel Vela (GAT)',
    icona: '❖',
    imatge: { src: '/img/foto-s3.webp', alt: 'Habitació d\'hotel', credit: 'Foto: rawpixel (CC0)' },
    transmissio: [
      'Segona illa: l\'Hotel Vela, 60 habitacions a primera línia de mar.',
      'Ara surts de l\'oficina. Recorre l\'hotel i apunta cada aparell que mesura o mou alguna cosa del món físic.',
    ],
    teoria: [
      {
        titol: 'L\'inventari OT',
        html: '<p>Passeja per tots els llocs on passa el servei: l\'entrada, les habitacions, la cuina, la bugaderia, la sala de màquines, l\'aparcament. Per a cada <strong>aparell</strong> apunta:</p><ul><li><strong>Què mesura o controla.</strong></li><li><strong>Si envia dades</strong> a algun sistema o se les queda.</li></ul><p>La pregunta clau: <strong>mesura o mou alguna cosa del món físic?</strong> Si la resposta és sí, és OT.</p>',
      },
      {
        titol: 'IT, OT o frontera?',
        html: '<ul><li><strong>Mesura o mou alguna cosa física</strong> → OT: sonda, pany, motor, càmera, comptador, vehicle.</li><li><strong>Gestiona informació o documents</strong> → IT: ERP, CRM, programa de l\'hotel, correu.</li><li><strong>Tradueix dades de màquina a dades de negoci</strong> → frontera: passarel·la, connector, edge.</li><li><strong>Si s\'atura, s\'atura el servei o hi ha risc per a persones</strong> → OT crític: la disponibilitat va primer.</li></ul>',
      },
      {
        titol: 'Envia dades? Tres respostes',
        html: '<ul><li><strong>Sí, a un sistema</strong>: la dada ja viatja (el TPV envia les vendes a l\'ERP).</li><li><strong>Només a la seva pantalla o aplicació</strong>: té dades però és una <strong>illa</strong>. Aquí sol haver-hi una oportunitat.</li><li><strong>No envia res</strong>: funciona sense guardar ni enviar res.</li></ul><p>Les millors propostes neixen d\'un aparell que <strong>ja té la dada</strong> però no la comparteix.</p>',
      },
    ],
    ideaClau: 'Totes les empreses tenen OT. Busca el que mesura o mou alguna cosa, i pregunta sempre: aquesta dada, on va a parar?',
    proves: [
      {
        tipus: 'seleccionar',
        titol: 'Prova 3A · Caça d\'aparells',
        enunciat: 'Aquestes són les notes de la teva visita a l\'Hotel Vela. Marca TOTS els elements que són entorn OT.',
        etiqueta: '❖ OT',
        missatgeOk: 'Inventari OT complet: has trobat tots els aparells que toquen el món físic.',
        elements: [
          { text: 'Panys electrònics de les habitacions', sector: 'Habitacions', correcta: true, perque: 'Obren i tanquen una porta: actuen sobre el món físic.' },
          { text: 'Programa de reserves i facturació de l\'hotel', sector: 'Recepció', correcta: false, perque: 'Gestiona informació: és IT.' },
          { text: 'Termòstats i clima de cada habitació', sector: 'Habitacions', correcta: true, perque: 'Mesuren i controlen la temperatura.' },
          { text: 'Comptadors d\'aigua i electricitat', sector: 'Sala de màquines', correcta: true, perque: 'Mesuren consums físics.' },
          { text: 'CRM amb l\'historial dels clients', sector: 'Comercial', correcta: false, perque: 'Tracta informació de clients: és IT.' },
          { text: 'Sonda de la cambra frigorífica de la cuina', sector: 'Cuina', correcta: true, perque: 'Mesura la temperatura.' },
          { text: 'Correu electrònic de recepció', sector: 'Recepció', correcta: false, perque: 'És un sistema d\'informació.' },
          { text: 'Ascensors', sector: 'Edifici', correcta: true, perque: 'Mouen persones: OT crític.' },
          { text: 'Rentadores industrials de la bugaderia', sector: 'Bugaderia', correcta: true, perque: 'Controlen un procés físic.' },
          { text: 'Gestor de les ressenyes dels clients', sector: 'Màrqueting', correcta: false, perque: 'Gestiona opinions: informació.' },
          { text: 'Barrera i càmeres de l\'aparcament', sector: 'Aparcament', correcta: true, perque: 'Mouen una barrera i vigilen un espai físic.' },
          { text: 'Programa de nòmines', sector: 'Administració', correcta: false, perque: 'És informació de persones: IT.' },
          { text: 'Depuradora i bombes de la piscina', sector: 'Exteriors', correcta: true, perque: 'Controlen l\'aigua i la química de la piscina.' },
          { text: 'Quadre de comandament de la direcció', sector: 'Direcció', correcta: false, perque: 'Mostra indicadors: IT.' },
        ],
        pista: 'N\'hi ha 8. Fes-te la pregunta: si l\'apago, deixa de passar alguna cosa física (una porta, l\'aigua, la temperatura, un moviment)?',
      },
      {
        tipus: 'classificar',
        titol: 'Prova 3B · On va a parar la dada?',
        enunciat: 'Llegeix què fa cada aparell de l\'hotel i classifica\'l segons si envia les seves dades.',
        categories: ['A un sistema', 'Només a la seva pantalla', 'No envia res'],
        elements: [
          { text: 'Els panys reben del programa de l\'hotel quina targeta obre cada habitació i li tornen cada obertura.', correcta: 'A un sistema', perque: 'La dada viatja entre el pany i el programa de l\'hotel.' },
          { text: 'La sonda de la cambra frigorífica mostra la temperatura en una pantalla petita a la porta.', correcta: 'Només a la seva pantalla', perque: 'Té la dada però no la comparteix: és una illa.' },
          { text: 'El TPV del bar carrega cada consumició al compte de l\'habitació.', correcta: 'A un sistema', perque: 'Les vendes arriben al programa de l\'hotel.' },
          { text: 'Els comptadors de llum només es poden llegir a la sala de màquines, a mà, una vegada al mes.', correcta: 'Només a la seva pantalla', perque: 'La dada existeix, però algú l\'ha d\'anar a buscar i copiar.' },
          { text: 'Els detectors de fum fan sonar l\'alarma de la planta, sense registrar res enlloc.', correcta: 'No envia res', perque: 'Actua, però no guarda ni envia dades.' },
          { text: 'La depuradora de la piscina ensenya el pH a l\'aplicació del fabricant.', correcta: 'Només a la seva pantalla', perque: 'Les dades es queden a l\'aplicació del fabricant.' },
        ],
        pista: 'Si la dada arriba a un programa de gestió, va «a un sistema». Si només la veu qui és davant de l\'aparell o qui obre l\'app del fabricant, és una illa.',
      },
    ],
    fragment: { posicio: 3, lletra: 'A' },
    missatgeFinal: 'Bosc creuat: vuit aparells OT, i ja saps quins són illes.',
  },

  // ------------------------------------------------------------------ ETAPA 04
  {
    id: 4,
    codi: 'ETAPA 04',
    nom: 'El mirador de les diferències',
    lloc: 'Exportadora Vela (CI)',
    icona: '◎',
    imatge: { src: '/img/foto-s4.webp', alt: 'Contenidors i grues en un port', credit: 'Foto: rawpixel (CC0)' },
    transmissio: [
      'Tercera illa: l\'Exportadora Vela, que envia material elèctric a dotze països des del port de Barcelona.',
      'Des del mirador es veuen els dos entorns alhora. Compara\'ls, però parlant d\'aquesta empresa, no amb frases de llibre.',
    ],
    teoria: [
      {
        titol: 'Cinc criteris per comparar',
        html: '<ul><li><strong>Objectiu</strong>: per a què serveix cada entorn en aquesta empresa.</li><li><strong>Prioritat de seguretat</strong>: a l\'IT va primer la confidencialitat; a l\'OT, la disponibilitat i la seguretat de les persones.</li><li><strong>Tolerància a l\'aturada</strong>: què passa si s\'atura.</li><li><strong>Cicle de vida</strong>: cada quant es canvien els equips.</li><li><strong>Qui ho gestiona</strong>: informàtica, manteniment, un proveïdor…</li></ul>',
      },
      {
        titol: 'Genèric o concret',
        html: '<p>La diferència entre una resposta de llibre i una de bona és que la bona parla d\'<strong>aparells, programes i persones d\'aquella empresa</strong>.</p><p><em>Genèric</em>: «L\'OT no es pot aturar.»</p><p><em>Concret</em>: «Si s\'atura el lector de codis del moll en plena càrrega, el camió no surt i el contenidor perd el vaixell; l\'ERP es pot actualitzar de nit sense que ningú ho noti.»</p>',
      },
      {
        titol: 'També s\'assemblen',
        html: '<p>Afegeix-hi <strong>tres similituds</strong> de la mateixa empresa. Per exemple:</p><ul><li>Tots dos entorns tenen <strong>contrasenyes</strong> que algú ha de gestionar.</li><li>Tots dos <strong>generen dades</strong> de l\'activitat.</li><li>Tots dos necessiten un <strong>inventari</strong> i algú que sàpiga què hi ha instal·lat.</li></ul>',
      },
    ],
    ideaClau: 'Comparar no és copiar la taula de la sessió 2: és omplir-la amb fets d\'una empresa concreta.',
    proves: [
      {
        tipus: 'classificar',
        titol: 'Prova 4A · Llibre o empresa?',
        enunciat: 'Aquestes són respostes de dos cartògrafs sobre l\'Exportadora Vela. Quines són genèriques i quines són concretes?',
        categories: ['Genèrica', 'Concreta'],
        elements: [
          { text: 'L\'IT gestiona informació i l\'OT controla processos.', correcta: 'Genèrica', perque: 'Serviria per a qualsevol empresa del món.' },
          { text: 'L\'ERP porta comandes, factures i documents de duana; les sondes d\'humitat del magatzem vigilen que el material elèctric no es faci malbé.', correcta: 'Concreta', perque: 'Parla de programes i aparells d\'aquesta empresa.' },
          { text: 'A l\'OT importa més la disponibilitat.', correcta: 'Genèrica', perque: 'És la frase del llibre, sense cap exemple.' },
          { text: 'Si cau el correu una hora es pot esperar; si s\'atura el lector de codis del moll, el camió no pot sortir cap al port.', correcta: 'Concreta', perque: 'Diu què passa en aquesta empresa si s\'atura cada cosa.' },
          { text: 'L\'OT dura més anys.', correcta: 'Genèrica', perque: 'No diu de quins equips parla.' },
          { text: 'Les carretilles del magatzem són de fa dotze anys; els ordinadors de l\'oficina es canvien cada quatre.', correcta: 'Concreta', perque: 'Dona dades reals de cicle de vida.' },
          { text: 'L\'OT el gestiona manteniment.', correcta: 'Genèrica', perque: 'Qui és manteniment en aquesta empresa?' },
          { text: 'L\'oficina la porta un proveïdor extern; les carretilles i el moll, el cap de magatzem amb el servei tècnic del fabricant.', correcta: 'Concreta', perque: 'Diu exactament qui se n\'encarrega.' },
        ],
        pista: 'Si la frase serviria igual per a un hospital, un hotel o una fàbrica de cotxes, és genèrica.',
      },
      {
        tipus: 'aparellar',
        titol: 'Prova 4B · Cada fet al seu criteri',
        enunciat: 'Relaciona cada fet de l\'Exportadora Vela amb el criteri de comparació que il·lustra.',
        columnes: [
          {
            nom: 'Criteri',
            opcions: ['Objectiu', 'Prioritat de seguretat', 'Tolerància a l\'aturada', 'Cicle de vida', 'Qui ho gestiona'],
          },
        ],
        files: [
          { text: 'Les dades de clients de l\'ERP no poden caure en mans de la competència; la grua del moll no pot fer cap moviment perillós.', correctes: ['Prioritat de seguretat'], perque: 'Confidencialitat a l\'IT, seguretat de les persones a l\'OT.' },
          { text: 'L\'ERP es pot actualitzar un diumenge; el moll de càrrega treballa de dilluns a dissabte sense parar.', correctes: ['Tolerància a l\'aturada'], perque: 'Parla de quan es pot aturar cada entorn.' },
          { text: 'Els lectors de codis tenen deu anys; el portàtil de la comercial, dos.', correctes: ['Cicle de vida'], perque: 'Edat dels equips.' },
          { text: 'L\'ERP gestiona les comandes i la documentació; el lector de codis registra cada palet que surt.', correctes: ['Objectiu'], perque: 'Per a què serveix cada entorn.' },
          { text: 'Els ordinadors els porta un proveïdor; les carretilles, el servei tècnic del fabricant.', correctes: ['Qui ho gestiona'], perque: 'Qui se n\'encarrega.' },
        ],
        pista: 'Busca la paraula clau: «no pot caure en mans…» (seguretat), «es pot actualitzar…» (aturada), «anys» (cicle de vida), «gestiona… registra» (objectiu), «els porta…» (qui).',
      },
    ],
    fragment: { posicio: 6, lletra: 'A' },
    missatgeFinal: 'Comparació feta amb fets de l\'empresa, no amb frases de llibre.',
  },

  // ------------------------------------------------------------------ ETAPA 05
  {
    id: 5,
    codi: 'ETAPA 05',
    nom: 'Les terres de les tres capes',
    lloc: 'Botiga Vela (MK)',
    icona: '☰',
    imatge: { src: '/img/foto-s5.webp', alt: 'Botiga amb clients a l\'interior', credit: 'Foto: rawpixel (CC0)' },
    transmissio: [
      'Quarta illa: la Botiga Vela, amb botiga en línia i dues botigues físiques.',
      'Ja tens els inventaris. Ara toca dibuixar: cada element a la seva capa, planta, frontera o negoci.',
    ],
    teoria: [
      {
        titol: 'Tres capes i cinc nivells',
        html: fig('f2_nivells.webp', 'El model de nivells (simplificat de l\'ISA-95) i les tres capes del mapa.') + '<ul><li><strong>Planta (OT)</strong>: on passa el servei. Sensors, actuadors, controladors, pantalles de control.</li><li><strong>Frontera</strong>: tradueix dades de màquina a dades de negoci. Passarel·les, connectors, historiadors, edge, MES.</li><li><strong>Negoci (IT)</strong>: on es gestiona l\'empresa. ERP, CRM, programes de gestió, comerç electrònic, BI.</li></ul>',
      },
      {
        titol: 'Un mapa resolt: Brisa Cosmètica',
        html: fig('f4_mapa_brisa.webp', 'Mapa dels entorns IT i OT de Brisa Cosmètica (exemple del recurs).') + '<p>Fixa\'t en tres coses: les <strong>illes en gris</strong> (etiquetes, càmeres, sonda del magatzem), els serveis <strong>externs amb vora discontínua</strong> i la <strong>connexió proposada en vermell</strong>, des del comptador de visitants fins al quadre de comandament.</p>',
      },
    ],
    ideaClau: 'Un mapa s\'entén quan cada element és a la seva capa i les fletxes només indiquen dades que viatgen de veritat.',
    proves: [
      {
        tipus: 'classificar',
        titol: 'Prova 5A · Cada peça a la seva terra',
        enunciat: 'Col·loca cada element de la Botiga Vela a la capa del mapa que li toca.',
        categories: ['Planta', 'Frontera', 'Negoci'],
        elements: [
          { text: 'TPV i calaix de les botigues', correcta: 'Planta', perque: 'És on passa la venda física, al taulell.' },
          { text: 'Plataforma de botiga en línia', correcta: 'Negoci', perque: 'Gestiona comandes i clients.' },
          { text: 'Comptador de visitants de l\'entrada', correcta: 'Planta', perque: 'Mesura persones que entren.' },
          { text: 'Connector que passa les vendes del TPV a l\'ERP', correcta: 'Frontera', perque: 'Tradueix dades de la botiga a dades de negoci.' },
          { text: 'ERP amb estocs i facturació', correcta: 'Negoci', perque: 'Gestiona l\'empresa.' },
          { text: 'Etiquetes electròniques de preu', correcta: 'Planta', perque: 'Mostren el preu al prestatge, al món físic.' },
          { text: 'Passarel·la que recull les dades de les sondes del magatzem', correcta: 'Frontera', perque: 'Recull dades de màquina i les passa amunt.' },
          { text: 'CRM i programa de fidelització', correcta: 'Negoci', perque: 'Tracta informació de clients.' },
          { text: 'Lector de codis de barres del magatzem', correcta: 'Planta', perque: 'Llegeix el producte físic.' },
          { text: 'Quadre de comandament de vendes (BI)', correcta: 'Negoci', perque: 'Serveix per decidir.' },
          { text: 'Servidor del fabricant que rep les dades del comptador (API)', correcta: 'Frontera', perque: 'Fa de pont entre l\'aparell i els sistemes de negoci.' },
          { text: 'Arcs antifurt de la porta', correcta: 'Planta', perque: 'Detecten un fet físic.' },
        ],
        pista: 'Planta = toca el món físic. Frontera = tradueix o passa dades de màquina cap amunt. Negoci = gestiona, ven, factura o decideix.',
      },
      {
        tipus: 'sequencia',
        titol: 'Prova 5B · Del sensor a la decisió',
        enunciat: 'Ordena els cinc nivells del model, de baix a dalt. Hi ha dos esglaons falsos.',
        inici: '▼ MÓN FÍSIC',
        final: '▲ NEGOCI',
        missatgeOk: 'Escala completa: del sensor fins a l\'ERP.',
        ordre: [
          'Nivell 0 · Procés físic: sensors i actuadors',
          'Nivell 1 · Control: controladors i termòstats',
          'Nivell 2 · Supervisió: pantalles de control',
          'Nivell 3 · Operacions: passarel·les i historiadors',
          'Nivell 4 · Negoci: ERP, CRM, BI',
        ],
        intrusos: [
          { text: 'Nivell Instagram: xarxes socials', perque: 'Les xarxes són un canal, no un nivell del model.' },
          { text: 'Nivell impressora: el paper', perque: 'El model ordena la tecnologia des del sensor fins al negoci; el paper no hi és.' },
        ],
        pista: 'Comença pel que toca el món (sensors) i acaba on es decideix el negoci (ERP i BI). Al mig: control, supervisió i operacions.',
      },
    ],
    fragment: { posicio: 2, lletra: 'L' },
    missatgeFinal: 'Mapa dibuixat: cada peça és a la seva terra.',
  },

  // ------------------------------------------------------------------ ETAPA 06
  {
    id: 6,
    codi: 'ETAPA 06',
    nom: 'El pont i la torre de guaita',
    lloc: 'Transports Vela (TR)',
    icona: '⌂',
    imatge: { src: '/img/foto-s6.webp', alt: 'Pont metàl·lic sobre una carretera', credit: 'Foto: Evan Phillip, StockSnap (CC0)' },
    transmissio: [
      'Última illa: Transports Vela, amb vint camions frigorífics que porten fruita a tot Europa.',
      'Aquest estiu s\'han perdut tres càrregues perquè el fred va fallar i ningú no se\'n va adonar a temps.',
      'Construeix el pont entre planta i negoci… i vigila des de la torre per on podria entrar un atac.',
    ],
    teoria: [
      {
        titol: 'La fitxa de connexió',
        html: fig('f5_fitxa_connexio.webp', 'Les cinc caselles d\'una connexió IT-OT, amb l\'exemple de Brisa Cosmètica.') + '<ul><li><strong>Problema</strong>: què passa avui que costa diners, temps, clients o seguretat.</li><li><strong>Dada d\'origen</strong>: quin aparell de planta té la dada.</li><li><strong>Camí</strong>: per on passa (cable, Wi-Fi, mòbil, passarel·la, núvol).</li><li><strong>Sistema destí</strong>: a quin programa de negoci arriba.</li><li><strong>Decisió</strong>: què passa quan la dada arriba.</li></ul><p><strong>Primer el problema, després la tecnologia.</strong></p>',
      },
      {
        titol: 'Els riscos de connectar',
        html: '<ul><li><strong>Contrasenya per defecte</strong> → canviar-la el primer dia i guardar-la en un gestor.</li><li><strong>Xarxa plana</strong> (tot a la mateixa Wi-Fi) → separar la xarxa en zones.</li><li><strong>Accés remot obert</strong> del servei tècnic → VPN amb doble factor, només quan cal.</li><li><strong>Aparell sense actualitzacions</strong> → aïllar-lo i planificar-ne el canvi.</li><li><strong>Correu trampa que salta a planta</strong> → tallafocs entre zones i formació.</li><li><strong>Dades personals on no toca</strong> → recollir només el que cal i revisar on es guarden (RGPD).</li></ul>',
      },
      {
        titol: 'Connectar amb ordre',
        html: fig('f6_zones.webp', 'Separar la xarxa en zones: cap aparell de planta parla directament amb Internet.') + '<p>La resposta als riscos <strong>no és desconnectar</strong>: és connectar amb ordre. Inventari, contrasenyes pròpies, xarxa en zones, accessos remots controlats i còpies de seguretat.</p>',
      },
    ],
    ideaClau: 'Una connexió sense problema al darrere és una despesa; una connexió sense protecció és una porta oberta.',
    proves: [
      {
        tipus: 'sequencia',
        titol: 'Prova 6A · Construeix el pont',
        enunciat: 'Munta la fitxa de connexió de Transports Vela en l\'ordre correcte. Hi ha dues peces que no hi van.',
        inici: '◆ EL PROBLEMA',
        final: '◆ LA DECISIÓ',
        missatgeOk: 'Pont construït: la temperatura del remolc ja arriba a qui pot actuar.',
        ordre: [
          'Problema · Es fan malbé càrregues perquè ningú no veu a temps que el fred falla',
          'Dada · La sonda del remolc mesura la temperatura cada cinc minuts',
          'Camí · Passarel·la del camió amb targeta mòbil → plataforma de telemetria',
          'Destí · Programa de rutes (TMS), associat a cada albarà',
          'Decisió · Avís al conductor i al client, i replanificació de la parada',
        ],
        intrusos: [
          { text: 'Comprar vint camions nous', perque: 'No resol el problema: els camions nous també poden fallar sense que ningú ho sàpiga.' },
          { text: 'Posar-ho tot al núvol sense saber per a què', perque: 'Primer el problema, després la tecnologia.' },
        ],
        pista: 'Segueix la dada: on neix el problema, quin aparell el mesura, per on viatja, on arriba i què es fa.',
      },
      {
        tipus: 'aparellar',
        titol: 'Prova 6B · La torre de guaita',
        enunciat: 'Des de la torre veus sis punts febles al grup. Tria la mesura que redueix més cada risc.',
        columnes: [
          {
            nom: 'Mesura',
            opcions: [
              'Canviar la contrasenya i guardar-la en un gestor',
              'Separar la xarxa en zones',
              'VPN amb doble factor, només quan cal',
              'Aïllar-lo i planificar-ne el canvi',
              'Tallafocs entre zones i formació',
              'Recollir només el que cal i revisar on es guarda',
            ],
          },
        ],
        files: [
          { text: 'La passarel·la dels camions encara té l\'usuari «admin» i la contrasenya de fàbrica.', correctes: ['Canviar la contrasenya i guardar-la en un gestor'], perque: 'És el primer que proven els atacants.' },
          { text: 'A l\'hotel, els panys, els TPV i la Wi-Fi dels clients són a la mateixa xarxa.', correctes: ['Separar la xarxa en zones'], perque: 'Un client de la Wi-Fi no ha de poder arribar als panys.' },
          { text: 'El tècnic de les càmeres frigorífiques es connecta quan vol amb la mateixa clau des de fa anys.', correctes: ['VPN amb doble factor, només quan cal'], perque: 'L\'accés remot ha d\'estar controlat i registrat.' },
          { text: 'El controlador de la depuradora és de 2009 i el fabricant ja no publica actualitzacions.', correctes: ['Aïllar-lo i planificar-ne el canvi'], perque: 'Si no es pot actualitzar, s\'ha de protegir aïllant-lo.' },
          { text: 'Un correu fals podria infectar un ordinador de la gestoria i saltar als aparells.', correctes: ['Tallafocs entre zones i formació'], perque: 'Cal frenar el salt i que la gent reconegui el correu fals.' },
          { text: 'El comptador de la botiga envia imatges dels clients al núvol del fabricant.', correctes: ['Recollir només el que cal i revisar on es guarda'], perque: 'N\'hi ha prou amb un recompte anònim (RGPD).' },
        ],
        pista: 'Mira la paraula clau de cada risc: contrasenya de fàbrica, mateixa xarxa, es connecta quan vol, sense actualitzacions, correu fals, imatges de clients.',
      },
    ],
    fragment: { posicio: 5, lletra: 'T' },
    missatgeFinal: 'Pont construït i torre vigilada. Tens les sis lletres de la contrasenya del cofre.',
  },
];

export const PROVA_FINAL: ProvaQuiz = {
  tipus: 'quiz',
  titol: 'L\'atles del Grup Vela',
  enunciat: 'Abans d\'entregar l\'atles, la direcció del grup et fa cinc preguntes. Respon-les totes bé.',
  preguntes: [
    {
      pregunta: 'Què has d\'apuntar de cada aparell a l\'inventari OT?',
      opcions: [
        'Què mesura o controla, i si envia dades a algun sistema',
        'El preu i la data de compra',
        'El color i la mida',
        'Només el nom del fabricant',
      ],
      correcta: 0,
      perque: 'La pregunta clau és on va a parar la dada.',
    },
    {
      pregunta: 'Una passarel·la que recull les dades de les sondes i les envia a l\'ERP, a quina capa va?',
      opcions: ['Frontera', 'Planta', 'Negoci', 'A totes tres'],
      correcta: 0,
      perque: 'Tradueix dades de màquina a dades de negoci.',
    },
    {
      pregunta: 'Quina és la primera casella de la fitxa de connexió?',
      opcions: ['El problema', 'La tecnologia que vols comprar', 'El sistema destí', 'El pressupost'],
      correcta: 0,
      perque: 'Primer el problema, després la tecnologia.',
    },
    {
      pregunta: 'Com es dibuixa al mapa un aparell que té dades però no les envia enlloc?',
      opcions: ['En gris: és una illa', 'No es dibuixa', 'Amb una fletxa vermella', 'A la capa de negoci'],
      correcta: 0,
      perque: 'Les illes es veuen: són oportunitats.',
    },
    {
      pregunta: 'Quina és la millor resposta als riscos de connectar IT i OT?',
      opcions: [
        'Connectar amb ordre: contrasenyes pròpies, xarxa en zones i accessos controlats',
        'No connectar mai res',
        'Posar-ho tot a la mateixa xarxa perquè sigui més fàcil',
        'Confiar que el fabricant ho protegeix tot',
      ],
      correcta: 0,
      perque: 'La resposta no és desconnectar, és connectar amb ordre.',
    },
  ],
  pista: 'Inventari OT: què fa i on va la dada. Frontera: tradueix. Fitxa: primer el problema. Illes: en gris. Riscos: connectar amb ordre.',
};

export const RANGS = [
  { minim: 90, nom: 'Cartògraf/a mestre/a', text: 'Atles impecable. La Societat Cartogràfica et vol al capdavant de la pròxima expedició.' },
  { minim: 75, nom: 'Cartògraf/a sènior', text: 'Molt bon mapa: domines l\'inventari, les capes i les connexions.' },
  { minim: 55, nom: 'Cartògraf/a', text: 'Atles recuperat. Repassa les etapes on vas tenir més errors.' },
  { minim: 0, nom: 'Aprenent de cartògraf/a', text: 'Has obert el cofre, però amb dificultats. Torna-hi per millorar el rang.' },
];

export const CHECKLIST = [
  'Sé fer l\'inventari IT d\'una empresa: departaments, sistemes i qui els gestiona.',
  'Sé fer l\'inventari OT: aparell, què mesura o controla i si envia dades.',
  'Sé comparar IT i OT amb exemples concrets d\'una empresa.',
  'Sé col·locar cada element a la capa de planta, de frontera o de negoci.',
  'Sé dibuixar un mapa amb llegenda, fletxes de dades reals i connexions proposades.',
  'Sé omplir la fitxa de connexió: problema, dada, camí, destí i decisió.',
  'Sé dir dos riscos concrets d\'una connexió i com es mitiguen.',
];

export const PUNTS = { pany: 100, error: 10, pista: 30, minimPany: 30, integritatError: 4 };
