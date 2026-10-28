import { Question } from './types';

export const QUESTIONS_BLOQUE_4: Question[] = [
  // ==========================================
  // BLOQUE 4: CATEGORÍAS GRAMATICALES (25 Preguntas: q41 - q65)
  // ==========================================
  {
    id: 'q41',
    block: 4,
    blockName: 'Categorías gramaticales',
    category: 'Análisis de oración 1',
    subtopic: 'Determinante posesivo',
    difficulty: 'facil',
    textSnippet: '«Mi hermano pequeño estudia mucho.»',
    textSnippetArmenian: '«Իմ փոքր եղբայրը շատ է սովորում:»',
    question: 'En la oración «Mi hermano pequeño estudia mucho», ¿qué categoría gramatical tiene la palabra «Mi»?',
    questionArmenian: '«Mi hermano pequeño estudia mucho» նախադասության մեջ ի՞նչ խոսքի մաս է «Mi» բառը:',
    options: [
      {
        id: 'q41_o1',
        text: 'Determinante posesivo.',
        textArmenian: 'Ստացական դետերմինատիվ (որոշիչ):'
      },
      {
        id: 'q41_o2',
        text: 'Pronombre personal tónico.',
        textArmenian: 'Շեշտված անձնական դերանուն:'
      },
      {
        id: 'q41_o3',
        text: 'Adverbio de modo.',
        textArmenian: 'Ձևի մակբայ:'
      },
      {
        id: 'q41_o4',
        text: 'Preposición simple.',
        textArmenian: 'Պարզ նախդիր:'
      }
    ],
    correctOptionId: 'q41_o1',
    explanation: '«Mi» sin tilde acompaña al sustantivo «hermano» determinando su pertenencia; por tanto, es un determinante posesivo (no confundir con el pronombre «mí» con tilde).',
    explanationArmenian: '«Mi» բառն առանց շեշտի ուղեկցում է «hermano» (եղբայր) գոյականին՝ ցույց տալով պատկանելություն, հետևաբար այն ստացական դետերմինատիվ է (չշփոթել շեշտված mí դերանվան հետ):'
  },
  {
    id: 'q42',
    block: 4,
    blockName: 'Categorías gramaticales',
    category: 'Análisis de oración 1',
    subtopic: 'Sustantivo común',
    difficulty: 'facil',
    textSnippet: '«Mi hermano pequeño estudia mucho.»',
    textSnippetArmenian: '«Իմ փոքր եղբայրը շատ է սովորում:»',
    question: 'En la misma oración, ¿qué clase de palabra es «hermano» y cómo se clasifica?',
    questionArmenian: 'Նույն նախադասության մեջ ի՞նչ խոսքի մաս է «hermano» բառը և ինչպե՞ս է դասակարգվում:',
    options: [
      {
        id: 'q42_o1',
        text: 'Sustantivo común, concreto, individual y contable.',
        textArmenian: 'Հասարակ, թանձրացական, եզակի և հաշվելի գոյական:'
      },
      {
        id: 'q42_o2',
        text: 'Adjetivo calificativo en grado superlativo.',
        textArmenian: 'Որակական ածական գերադրական աստիճանում:'
      },
      {
        id: 'q42_o3',
        text: 'Verbo irregular en presente de indicativo.',
        textArmenian: 'Անկանոն բայ սահմանական եղանակի ներկա ժամանակում:'
      },
      {
        id: 'q42_o4',
        text: 'Pronombre demostrativo de cercanía.',
        textArmenian: 'Մոտիկության ցուցական դերանուն:'
      }
    ],
    correctOptionId: 'q42_o1',
    explanation: '«Hermano» nombra a un ser de la misma especie (común), perceptible por los sentidos (concreto), en singular individual y susceptible de ser contado.',
    explanationArmenian: '«Hermano» (եղբայր) անվանում է միևնույն տեսակի էակ (հասարակ), զգայարաններով ընկալելի (թանձրացական), եզակի և հաշվելի:'
  },
  {
    id: 'q43',
    block: 4,
    blockName: 'Categorías gramaticales',
    category: 'Análisis de oración 1',
    subtopic: 'Adjetivo calificativo',
    difficulty: 'facil',
    textSnippet: '«Mi hermano pequeño estudia mucho.»',
    textSnippetArmenian: '«Իմ փոքր եղբայրը շատ է սովորում:»',
    question: 'En «Mi hermano pequeño estudia mucho», ¿qué categoría tiene la palabra «pequeño»?',
    questionArmenian: '«Mi hermano pequeño estudia mucho» նախադասության մեջ ի՞նչ խոսքի մաս է «pequeño» բառը:',
    options: [
      {
        id: 'q43_o1',
        text: 'Adjetivo calificativo.',
        textArmenian: 'Որակական ածական:'
      },
      {
        id: 'q43_o2',
        text: 'Adverbio de lugar.',
        textArmenian: 'Տեղի մակբայ:'
      },
      {
        id: 'q43_o3',
        text: 'Sustantivo abstracto.',
        textArmenian: 'Վերացական գոյական:'
      },
      {
        id: 'q43_o4',
        text: 'Conjunción coordinada.',
        textArmenian: 'Համադասական շաղկապ:'
      }
    ],
    correctOptionId: 'q43_o1',
    explanation: '«Pequeño» expresa una cualidad física del sustantivo al que califica y con el que concuerda en género masculino y número singular.',
    explanationArmenian: '«Pequeño» (փոքր) բառն արտահայտում է գոյականի հատկանիշ և համաձայնում է նրա հետ արական սեռով և եզակի թվով:'
  },
  {
    id: 'q44',
    block: 4,
    blockName: 'Categorías gramaticales',
    category: 'Análisis de oración 1',
    subtopic: 'Verbo',
    difficulty: 'facil',
    textSnippet: '«Mi hermano pequeño estudia mucho.»',
    textSnippetArmenian: '«Իմ փոքր եղբայրը շատ է սովորում:»',
    question: 'En «Mi hermano pequeño estudia mucho», ¿qué categoría gramatical corresponde a «estudia»?',
    questionArmenian: '«Mi hermano pequeño estudia mucho» նախադասության մեջ ի՞նչ խոսքի մաս է «estudia» բառը:',
    options: [
      {
        id: 'q44_o1',
        text: 'Verbo (núcleo del predicado, 3.ª persona singular presente de indicativo).',
        textArmenian: 'Բայ (ստորոգյալի կորիզ, սահմանական ներկայի 3-րդ դեմք եզակի):'
      },
      {
        id: 'q44_o2',
        text: 'Sustantivo común no contable.',
        textArmenian: 'Անհաշվելի հասարակ գոյական:'
      },
      {
        id: 'q44_o3',
        text: 'Determinante numeral ordinal.',
        textArmenian: 'Դասական թվական դետերմինատիվ:'
      },
      {
        id: 'q44_o4',
        text: 'Interjección propia.',
        textArmenian: 'Բուն ձայնարկություն:'
      }
    ],
    correctOptionId: 'q44_o1',
    explanation: '«Estudia» es la forma conjugada del verbo estudiar en 3.ª persona de singular del presente de indicativo, funcionando como núcleo del predicado.',
    explanationArmenian: '«Estudia» (սովորում է) estudiar բայի խոնարհված ձևն է սահմանական ներկայի 3-րդ դեմք եզակիով և հանդիսանում է ստորոգյալի կորիզ:'
  },
  {
    id: 'q45',
    block: 4,
    blockName: 'Categorías gramaticales',
    category: 'Análisis de oración 1',
    subtopic: 'Adverbio de cantidad frente a determinante',
    difficulty: 'medio',
    textSnippet: '«Mi hermano pequeño estudia mucho.»',
    textSnippetArmenian: '«Իմ փոքր եղբայրը շատ է սովորում:»',
    question: 'En la frase «Mi hermano pequeño estudia mucho», ¿qué clase de palabra es «mucho»?',
    questionArmenian: '«Mi hermano pequeño estudia mucho» նախադասության մեջ ի՞նչ խոսքի մաս է «mucho» բառը:',
    options: [
      {
        id: 'q45_o1',
        text: 'Adverbio de cantidad (es invariable y modifica al verbo estudia).',
        textArmenian: 'Քանակի մակբայ (անփոփոխ է և լրացնում է estudia բային):'
      },
      {
        id: 'q45_o2',
        text: 'Determinante indefinido.',
        textArmenian: 'Անորոշ դետերմինատիվ:'
      },
      {
        id: 'q45_o3',
        text: 'Pronombre relativo.',
        textArmenian: 'Հարաբերական դերանուն:'
      },
      {
        id: 'q45_o4',
        text: 'Adjetivo calificativo explicativo.',
        textArmenian: 'Բացատրական որակական ածական:'
      }
    ],
    correctOptionId: 'q45_o1',
    explanation: '«Mucho» modifica directamente al verbo «estudia» indicando grado o intensidad; al ser una palabra invariable que complementa a un verbo, es un adverbio de cantidad.',
    explanationArmenian: '«Mucho» (շատ) բառն ուղղակիորեն լրացնում է «estudia» բային՝ ցույց տալով ինտենսիվություն: Քանի որ այն անփոփոխ է և լրացնում է բային, քանակի մակբայ է:'
  },
  {
    id: 'q46',
    block: 4,
    blockName: 'Categorías gramaticales',
    category: 'Diferenciación crucial',
    subtopic: 'Determinante frente a Pronombre',
    difficulty: 'medio',
    question: 'Compara: 1) «Aquel libro me gustó» / 2) «Aquel me gustó». ¿Qué es «aquel» en cada caso?',
    questionArmenian: 'Համեմատի՛ր. 1) «Aquel libro me gustó» / 2) «Aquel me gustó»: Ի՞նչ է «aquel»-ը յուրաքանչյուր դեպքում:',
    options: [
      {
        id: 'q46_o1',
        text: 'En 1 es determinante demostrativo (acompaña a libro); en 2 es pronombre demostrativo (sustituye al libro).',
        textArmenian: '1-ում ցուցական դետերմինատիվ է (ուղեկցում է libro-ին), իսկ 2-ում՝ ցուցական դերանուն (փոխարինում է գրքին):'
      },
      {
        id: 'q46_o2',
        text: 'En ambos casos es un adjetivo calificativo.',
        textArmenian: 'Երկու դեպքում էլ որակական ածական է:'
      },
      {
        id: 'q46_o3',
        text: 'En 1 es pronombre y en 2 es determinante.',
        textArmenian: '1-ում դերանուն է, իսկ 2-ում՝ դետերմինատիվ:'
      },
      {
        id: 'q46_o4',
        text: 'En ambos casos es una preposición compuesta.',
        textArmenian: 'Երկու դեպքում էլ բաղադրյալ նախդիր է:'
      }
    ],
    correctOptionId: 'q46_o1',
    explanation: 'El determinante siempre acompaña a un sustantivo expreso; el pronombre nunca acompaña al sustantivo, sino que lo sustituye y funciona solo.',
    explanationArmenian: 'Դետերմինատիվը միշտ ուղեկցում է գոյականին, իսկ դերանունը չի ուղեկցում գոյականին, այլ փոխարինում է նրան և հանդես գալիս առանձին:'
  },
  {
    id: 'q47',
    block: 4,
    blockName: 'Categorías gramaticales',
    category: 'Diferenciación crucial',
    subtopic: 'Artículo determinado e indeterminado',
    difficulty: 'facil',
    question: '¿Cuáles son las formas de los artículos indeterminados (o indefinidos) en español?',
    questionArmenian: 'Որո՞նք են իսպաներենի անորոշ հոդերի (artículos indeterminados) ձևերը:',
    options: [
      {
        id: 'q47_o1',
        text: 'Un, una, unos, unas.',
        textArmenian: 'Un, una, unos, unas:'
      },
      {
        id: 'q47_o2',
        text: 'El, la, los, las.',
        textArmenian: 'El, la, los, las:'
      },
      {
        id: 'q47_o3',
        text: 'Este, ese, aquel, aquellos.',
        textArmenian: 'Este, ese, aquel, aquellos:'
      },
      {
        id: 'q47_o4',
        text: 'Mi, tu, su, nuestro.',
        textArmenian: 'Mi, tu, su, nuestro:'
      }
    ],
    correctOptionId: 'q47_o1',
    explanation: 'Los artículos indeterminados son un, una, unos, unas; mientras que el, la, los, las (y lo neutro) son artículos determinados.',
    explanationArmenian: 'Անորոշ հոդերն են un, una, unos, unas, մինչդեռ el, la, los, las որոշյալ հոդերն են:'
  },
  {
    id: 'q48',
    block: 4,
    blockName: 'Categorías gramaticales',
    category: 'Diferenciación crucial',
    subtopic: 'Adjetivo frente a Adverbio',
    difficulty: 'dificil',
    question: 'Compara: «Ana lee un libro rápido» y «Ana lee rápido». ¿Qué categoría gramatical tiene «rápido» en la segunda oración?',
    questionArmenian: 'Համեմատի՛ր. «Ana lee un libro rápido» և «Ana lee rápido»: Ի՞նչ խոսքի մաս է «rápido» բառը երկրորդ նախադասության մեջ:',
    options: [
      {
        id: 'q48_o1',
        text: 'Adverbio de modo (equivale a «rápidamente» y modifica al verbo lee sin variar de género ni número).',
        textArmenian: 'Ձևի մակբայ (համարժեք է «rápidamente»-ին և լրացնում է lee բային՝ առանց փոխվելու սեռով կամ թվով):'
      },
      {
        id: 'q48_o2',
        text: 'Adjetivo calificativo que califica a Ana.',
        textArmenian: 'Որակական ածական, որը որոշում է Անային:'
      },
      {
        id: 'q48_o3',
        text: 'Sustantivo abstracto de velocidad.',
        textArmenian: 'Արագության վերացական գոյական:'
      },
      {
        id: 'q48_o4',
        text: 'Pronombre personal átono.',
        textArmenian: 'Անշեշտ անձնական դերանուն:'
      }
    ],
    correctOptionId: 'q48_o1',
    explanation: 'En «Ana lee rápido», «rápido» actúa como adverbio (adjetivo adverbializado, equivale a rápidamente): si cambiamos a «Ellas leen rápido», la palabra no cambia (invariable).',
    explanationArmenian: '«Ana lee rápido» նախադասության մեջ «rápido»-ն հանդես է գալիս որպես մակբայ (հավասարազոր է rápidamente-ին). եթե դարձնենք «Ellas leen rápido», այն չի փոխվում (անփոփոխ է):'
  },
  {
    id: 'q49',
    block: 4,
    blockName: 'Categorías gramaticales',
    category: 'Diferenciación crucial',
    subtopic: 'Preposición frente a Conjunción',
    difficulty: 'medio',
    question: '¿Cuál de los siguientes grupos está compuesto EXCLUSIVAMENTE por preposiciones del español?',
    questionArmenian: 'Հետևյալ խմբերից ո՞րն է բաղկացած ԲԱՑԱՌԱՊԵՍ իսպաներենի նախդիրներից (preposiciones):',
    options: [
      {
        id: 'q49_o1',
        text: 'A, con, de, desde, en, hacia, para, por, sobre.',
        textArmenian: 'A, con, de, desde, en, hacia, para, por, sobre:'
      },
      {
        id: 'q49_o2',
        text: 'Y, pero, o, porque, si, aunque.',
        textArmenian: 'Y, pero, o, porque, si, aunque:'
      },
      {
        id: 'q49_o3',
        text: 'Ayer, hoy, mañana, temprano, tarde.',
        textArmenian: 'Ayer, hoy, mañana, temprano, tarde:'
      },
      {
        id: 'q49_o4',
        text: 'Él, ella, nosotros, vosotros, ellos.',
        textArmenian: 'Él, ella, nosotros, vosotros, ellos:'
      }
    ],
    correctOptionId: 'q49_o1',
    explanation: 'A, con, de, desde, en, hacia, para, por, sobre son preposiciones que unen palabras subordinando un término. El grupo B son conjunciones.',
    explanationArmenian: 'A, con, de, desde, en, hacia, para, por, sobre նախդիրներ են: B խումբը շաղկապներ են:'
  },
  {
    id: 'q50',
    block: 4,
    blockName: 'Categorías gramaticales',
    category: 'Conjunciones',
    subtopic: 'Conjunciones coordinantes y subordinantes',
    difficulty: 'medio',
    question: 'En la oración «Quería salir a jugar al parque, pero empezó a llover fuerte», ¿qué clase de palabra es «pero»?',
    questionArmenian: '«Ուզում էի դուրս գալ այգում խաղալու, բայց սկսեց ուժեղ անձրև գալ» նախադասության մեջ ի՞նչ խոսքի մաս է «pero» բառը:',
    options: [
      {
        id: 'q50_o1',
        text: 'Conjunción coordinante adversativa.',
        textArmenian: 'Ներհակական համադասական շաղկապ (conjunción adversativa):'
      },
      {
        id: 'q50_o2',
        text: 'Preposición inseparable.',
        textArmenian: 'Անբաժանելի նախդիր:'
      },
      {
        id: 'q50_o3',
        text: 'Determinante demostrativo neutro.',
        textArmenian: 'Չեզոք ցուցական դետերմինատիվ:'
      },
      {
        id: 'q50_o4',
        text: 'Adverbio de negación absoluta.',
        textArmenian: 'Բացարձակ ժխտման մակբայ:'
      }
    ],
    correctOptionId: 'q50_o1',
    explanation: '«Pero» es una conjunción coordinante adversativa que contrapone dos oraciones o ideas.',
    explanationArmenian: '«Pero» (բայց)-ը ներհակական համադասական շաղկապ է, որը հակադրում է երկու նախադասություն կամ միտք:'
  },
  {
    id: 'q51',
    block: 4,
    blockName: 'Categorías gramaticales',
    category: 'Interjecciones',
    subtopic: 'Clases de interjecciones',
    difficulty: 'facil',
    question: 'Palabras como «¡Ay!», «¡Bravo!», «¡Ojalá!» y «¡Uf!» que expresan sentimientos vivos o impresiones súbitas son:',
    questionArmenian: '«¡Ay!», «¡Bravo!», «¡Ojalá!» և «¡Uf!» բառերը, որոնք արտահայտում են կենդանի զգացմունքներ կամ հանկարծակի տպավորություններ, հետևյալն են.',
    options: [
      {
        id: 'q51_o1',
        text: 'Interjecciones.',
        textArmenian: 'Ձայնարկություններ (interjecciones):'
      },
      {
        id: 'q51_o2',
        text: 'Verbos copulativos.',
        textArmenian: 'Հանգույցային բայեր:'
      },
      {
        id: 'q51_o3',
        text: 'Artículos indeterminados.',
        textArmenian: 'Անորոշ հոդեր:'
      },
      {
        id: 'q51_o4',
        text: 'Sustantivos colectivos.',
        textArmenian: 'Հավաքական գոյականներ:'
      }
    ],
    correctOptionId: 'q51_o1',
    explanation: 'Las interjecciones son palabras que forman por sí solas enunciados exclamativos para manifestar impresiones, estados de ánimo o apelar al oyente.',
    explanationArmenian: 'Ձայնարկություններն ինքնուրույն բացականչական խոսք կազմող բառեր են՝ զգացմունքներ, հոգեվիճակ արտահայտելու կամ լսողին դիմելու համար:'
  },
  {
    id: 'q52',
    block: 4,
    blockName: 'Categorías gramaticales',
    category: 'Sustantivos',
    subtopic: 'Sustantivo individual frente a colectivo',
    difficulty: 'medio',
    question: '¿Cuál de los siguientes sustantivos es COLECTIVO en singular?',
    questionArmenian: 'Հետևյալ գոյականներից ո՞րն է ՀԱՎԱՔԱԿԱՆ (colectivo) եզակի թվով:',
    options: [
      {
        id: 'q52_o1',
        text: 'Jauría (conjunto de perros de caza).',
        textArmenian: 'Jauría (որսորդական շների ոհմակ/երամակ):'
      },
      {
        id: 'q52_o2',
        text: 'Pájaro (un solo animal).',
        textArmenian: 'Pájaro (միայն մեկ թռչուն):'
      },
      {
        id: 'q52_o3',
        text: 'Libros (plural de libro).',
        textArmenian: 'Libros (գիրք բառի հոգնակին):'
      },
      {
        id: 'q52_o4',
        text: 'Mesa (objeto individual).',
        textArmenian: 'Mesa (առանձին առարկա):'
      }
    ],
    correctOptionId: 'q52_o1',
    explanation: 'Un sustantivo colectivo designa en singular a un conjunto homogéneo de seres u objetos (jauría = conjunto de perros; rebaño = conjunto de ovejas).',
    explanationArmenian: 'Հավաքական գոյականը եզակի թվով մատնանշում է էակների կամ առարկաների ամբողջություն (jauría = շների ոհմակ, rebaño = ոչխարների հոտ):'
  },
  {
    id: 'q53',
    block: 4,
    blockName: 'Categorías gramaticales',
    category: 'Sustantivo frente a Verbo',
    subtopic: 'Formas homónimas',
    difficulty: 'medio',
    question: 'En «El canto del pájaro alegró mi tarde», ¿qué categoría gramatical tiene «canto»?',
    questionArmenian: '«El canto del pájaro alegró mi tarde» (Թռչնի երգը ուրախացրեց իմ երեկոն) նախադասության մեջ ի՞նչ խոսքի մաս է «canto» բառը:',
    options: [
      {
        id: 'q53_o1',
        text: 'Sustantivo común (va precedido por el artículo «el»).',
        textArmenian: 'Հասարակ գոյական (նախորդված է «el» հոդով):'
      },
      {
        id: 'q53_o2',
        text: 'Verbo cantar en primera persona de presente.',
        textArmenian: 'Cantar բայը ներկայի առաջին դեմքով:'
      },
      {
        id: 'q53_o3',
        text: 'Adjetivo calificativo femenino.',
        textArmenian: 'Իգական որակական ածական:'
      },
      {
        id: 'q53_o4',
        text: 'Adverbio de afirmación.',
        textArmenian: 'Հաստատման մակբայ:'
      }
    ],
    correctOptionId: 'q53_o1',
    explanation: 'Aunque «canto» puede ser forma verbal («yo canto»), en esta oración va precedido del artículo «el» y funciona como núcleo del sintagma nominal sujeto; por lo tanto, es un sustantivo.',
    explanationArmenian: 'Թեև «canto»-ն կարող է լինել բայ («ես երգում եմ»), այս նախադասության մեջ նրանից առաջ դրված է «el» հոդը և այն ենթակայի գոյականն է:'
  },
  {
    id: 'q54',
    block: 4,
    blockName: 'Categorías gramaticales',
    category: 'Pronombres',
    subtopic: 'Pronombres personales tónicos y átonos',
    difficulty: 'medio',
    question: 'En la oración «Ella me dio un abrazo entrañable», ¿cuáles son los pronombres personales presentes?',
    questionArmenian: '«Ella me dio un abrazo entrañable» (Նա ինձ սրտագին գրկախառնություն պարգևեց) նախադասության մեջ որո՞նք են անձնական դերանունները:',
    options: [
      {
        id: 'q54_o1',
        text: '«Ella» (pronombre tónico sujeto) y «me» (pronombre átono de complemento).',
        textArmenian: '«Ella» (շեշտված դերանուն-ենթակա) և «me» (անշեշտ դերանուն-լրացում):'
      },
      {
        id: 'q54_o2',
        text: 'Solo la palabra «abrazo».',
        textArmenian: 'Միայն «abrazo» բառը:'
      },
      {
        id: 'q54_o3',
        text: '«Un» y «entrañable».',
        textArmenian: '«Un» և «entrañable»:'
      },
      {
        id: 'q54_o4',
        text: 'No hay ningún pronombre en la frase.',
        textArmenian: 'Նախադասության մեջ ոչ մի դերանուն չկա:'
      }
    ],
    correctOptionId: 'q54_o1',
    explanation: '«Ella» sustituye al sujeto en 3.ª persona singular y «me» es pronombre personal átono de 1.ª persona singular en función de objeto indirecto.',
    explanationArmenian: '«Ella»-ն փոխարինում է 3-րդ դեմքի ենթակային, իսկ «me»-ն 1-ին դեմքի անշեշտ անձնական դերանունն է որպես անուղղակի խնդիր:'
  },
  {
    id: 'q55',
    block: 4,
    blockName: 'Categorías gramaticales',
    category: 'Adjetivo grados',
    subtopic: 'Grados del adjetivo: positivo, comparativo, superlativo',
    difficulty: 'medio',
    question: 'En «Este sendero de montaña es dificilísimo», ¿en qué grado se encuentra el adjetivo?',
    questionArmenian: '«Este sendero de montaña es dificilísimo» (Լեռնային այս արահետը չափազանց/ամենադժվարն է) նախադասության մեջ ո՞ր աստիճանում է ածականը:',
    options: [
      {
        id: 'q55_o1',
        text: 'Grado superlativo absoluto (terminación en -ísimo).',
        textArmenian: 'Բացարձակ գերադրական աստիճան (-ísimo վերջավորությամբ):'
      },
      {
        id: 'q55_o2',
        text: 'Grado comparativo de superioridad.',
        textArmenian: 'Առավելական համեմատական աստիճան:'
      },
      {
        id: 'q55_o3',
        text: 'Grado positivo simple.',
        textArmenian: 'Պարզ դրական աստիճան:'
      },
      {
        id: 'q55_o4',
        text: 'Grado comparativo de igualdad.',
        textArmenian: 'Հավասարության համեմատական աստիճան:'
      }
    ],
    correctOptionId: 'q55_o1',
    explanation: 'El sufijo «-ísimo» (dificilísimo) expresa la cualidad en su máxima intensidad sin comparar con otro elemento, es decir, superlativo absoluto.',
    explanationArmenian: '«-ísimo» ածանցը (dificilísimo) արտահայտում է հատկանիշի բարձրագույն աստիճանը՝ առանց մեկ ուրիշի հետ համեմատելու, այսինքն՝ բացարձակ գերադրական:'
  },
  {
    id: 'q56',
    block: 4,
    blockName: 'Categorías gramaticales',
    category: 'Adverbios',
    subtopic: 'Clasificación semántica de adverbios',
    difficulty: 'medio',
    question: '¿En cuál de las siguientes oraciones aparece un adverbio de TIEMPO?',
    questionArmenian: 'Հետևյալ նախադասություններից որո՞ւմ է հանդիպում ԺԱՄԱՆԱԿԻ մակբայ:',
    options: [
      {
        id: 'q56_o1',
        text: 'Pedro llegó ayer por la tarde.',
        textArmenian: 'Pedro llegó ayer por la tarde (Պեդրոն եկավ երեկ կեսօրից հետո):'
      },
      {
        id: 'q56_o2',
        text: 'Juan vive muy cerca de la estación.',
        textArmenian: 'Juan vive muy cerca de la estación (Խուանն ապրում է կայարանին շատ մոտ):'
      },
      {
        id: 'q56_o3',
        text: 'María resolvió el problema fácilmente.',
        textArmenian: 'María resolvió el problema fácilmente (Մարիան հեշտությամբ լուծեց խնդիրը):'
      },
      {
        id: 'q56_o4',
        text: 'Carlos come bastante en las cenas.',
        textArmenian: 'Carlos come bastante en las cenas (Կառլոսը բավականին շատ է ուտում ընթրիքին):'
      }
    ],
    correctOptionId: 'q56_o1',
    explanation: '«Ayer» es un adverbio de tiempo porque responde a la pregunta «¿cuándo?». Cerca es de lugar, fácilmente es de modo y bastante es de cantidad.',
    explanationArmenian: '«Ayer» (երեկ) ժամանակի մակբայ է, քանի որ պատասխանում է «ե՞րբ» հարցին: Cerca-ն տեղի է, fácilmente-ն՝ ձևի, իսկ bastante-ն՝ քանակի:'
  },
  {
    id: 'q57',
    block: 4,
    blockName: 'Categorías gramaticales',
    category: 'Determinantes',
    subtopic: 'Determinantes demostrativos y distancia',
    difficulty: 'facil',
    question: 'Los determinantes «este», «ese» y «aquel» indican distancia respecto al hablante. ¿Cuál expresa lejanía tanto del emisor como del receptor?',
    questionArmenian: '«Este», «ese» և «aquel» դետերմինատիվները ցույց են տալիս հեռավորություն խոսողից: Դրանցից ո՞րն է արտահայտում հեռավորություն ինչպես հաղորդողից, այնպես էլ ընդունողից:',
    options: [
      {
        id: 'q57_o1',
        text: 'Aquel (indica lejanía espacial o temporal de ambos).',
        textArmenian: 'Aquel (ցույց է տալիս տարածական կամ ժամանակային հեռավորություն երկուսից էլ):'
      },
      {
        id: 'q57_o2',
        text: 'Este (indica cercanía inmediata al emisor).',
        textArmenian: 'Este (ցույց է տալիս անմիջական մոտիկություն խոսողին):'
      },
      {
        id: 'q57_o3',
        text: 'Ese (indica distancia media o cercanía al receptor).',
        textArmenian: 'Ese (ցույց է տալիս միջին հեռավորություն կամ մոտիկություն լսողին):'
      },
      {
        id: 'q57_o4',
        text: 'Ninguno de ellos sirve para indicar distancia.',
        textArmenian: 'Դրանցից ոչ մեկը հեռավորություն ցույց տալու համար չէ:'
      }
    ],
    correctOptionId: 'q57_o1',
    explanation: 'Este = cerca del emisor; ese = distancia media o cerca del receptor; aquel = lejos de ambos.',
    explanationArmenian: 'Este = մոտ խոսողին, ese = միջին հեռավորություն կամ մոտ լսողին, aquel = հեռու երկուսից էլ:'
  },
  {
    id: 'q58',
    block: 4,
    blockName: 'Categorías gramaticales',
    category: 'Análisis oracional',
    subtopic: 'Sujeto y Predicado',
    difficulty: 'medio',
    question: 'En la oración «Los pájaros cantan alegres en primavera», ¿cuál es el SUJETO y cuál es su núcleo?',
    questionArmenian: '«Los pájaros cantan alegres en primavera» (Թռչունները գարնանն ուրախ երգում են) նախադասության մեջ ո՞րն է ԵՆԹԱԿԱՆ (sujeto) և ո՞րն է նրա կորիզը (núcleo):',
    options: [
      {
        id: 'q58_o1',
        text: 'Sujeto: «Los pájaros»; Núcleo: «pájaros».',
        textArmenian: 'Ենթակա՝ «Los pájaros», Կորիզ՝ «pájaros»:'
      },
      {
        id: 'q58_o2',
        text: 'Sujeto: «cantan alegres»; Núcleo: «cantan».',
        textArmenian: 'Ենթակա՝ «cantan alegres», Կորիզ՝ «cantan»:'
      },
      {
        id: 'q58_o3',
        text: 'Sujeto: «en primavera»; Núcleo: «primavera».',
        textArmenian: 'Ենթակա՝ «en primavera», Կորիզ՝ «primavera»:'
      },
      {
        id: 'q58_o4',
        text: 'Es una oración impersonal sin sujeto.',
        textArmenian: 'Անդեմ նախադասություն է՝ առանց ենթակայի:'
      }
    ],
    correctOptionId: 'q58_o1',
    explanation: 'El sintagma nominal «Los pájaros» concuerda en número plural con el verbo «cantan», por lo que es el sujeto, y su sustantivo «pájaros» es el núcleo del sujeto.',
    explanationArmenian: '«Los pájaros» գոյականական կապակցությունը թվով համաձայնում է «cantan» բայի հետ, ուստի այն ենթական է, իսկ «pájaros» գոյականը՝ նրա կորիզը:'
  },
  {
    id: 'q59',
    block: 4,
    blockName: 'Categorías gramaticales',
    category: 'Análisis oracional',
    subtopic: 'Sujeto elíptico u omitido',
    difficulty: 'medio',
    question: 'En la oración «Fuimos al cine el sábado pasado», ¿cuál es el sujeto?',
    questionArmenian: '«Fuimos al cine el sábado pasado» (Անցած շաբաթ գնացինք կինո) նախադասության մեջ ո՞րն է ենթական:',
    options: [
      {
        id: 'q59_o1',
        text: 'Sujeto elíptico (u omitido): Nosotros / Nosotras (1.ª persona del plural).',
        textArmenian: 'Զեղչված ենթակա (sujeto elíptico)՝ Nosotros / Nosotras (1-ին դեմք հոգնակի):'
      },
      {
        id: 'q59_o2',
        text: 'Sujeto expreso: «el cine».',
        textArmenian: 'Բացահայտ ենթակա՝ «el cine»:'
      },
      {
        id: 'q59_o3',
        text: 'Sujeto paciente: «el sábado pasado».',
        textArmenian: 'Կրավորական ենթակա՝ «el sábado pasado»:'
      },
      {
        id: 'q59_o4',
        text: 'No tiene sujeto porque el cine es un edificio.',
        textArmenian: 'Ենթակա չունի, քանի որ կինոն շենք է:'
      }
    ],
    correctOptionId: 'q59_o1',
    explanation: 'El sujeto no aparece explícito pero se deduce con certeza por la desinencia verbal de «fuimos» (1.ª persona del plural: nosotros/nosotras). Se llama sujeto elíptico o tácito.',
    explanationArmenian: 'Ենթական բացահայտ գրված չէ, բայց հստակ հասկացվում է «fuimos» բայի վերջավորությունից (1-ին դեմք հոգնակի՝ nosotros): Կոչվում է զեղչված ենթակա:'
  },
  {
    id: 'q60',
    block: 4,
    blockName: 'Categorías gramaticales',
    category: 'Análisis oracional',
    subtopic: 'Predicado nominal y verbal',
    difficulty: 'dificil',
    question: '¿Qué diferencia a una oración con predicado nominal (copulativo) de una con predicado verbal?',
    questionArmenian: 'Ինչո՞վ է բաղադրյալ ստորոգյալով (predicado nominal/copulativo) նախադասությունը տարբերվում պարզ բայական ստորոգյալով նախադասությունից:',
    options: [
      {
        id: 'q60_o1',
        text: 'El predicado nominal se construye con los verbos copulativos ser, estar o parecer y lleva un atributo.',
        textArmenian: 'Անվանական ստորոգյալը կազմվում է ser, estar կամ parecer հանգույցային բայերով և պարունակում է ստորոգյալի մաս (atributo):'
      },
      {
        id: 'q60_o2',
        text: 'El predicado nominal no tiene ningún verbo nunca.',
        textArmenian: 'Անվանական ստորոգյալը երբեք ոչ մի բայ չունի:'
      },
      {
        id: 'q60_o3',
        text: 'El predicado verbal solo puede usarse en poemas.',
        textArmenian: 'Բայական ստորոգյալը կարող է օգտագործվել միայն բանաստեղծություններում:'
      },
      {
        id: 'q60_o4',
        text: 'No hay ninguna diferencia gramatical.',
        textArmenian: 'Ոչ մի քերականական տարբերություն չկա:'
      }
    ],
    correctOptionId: 'q60_o1',
    explanation: 'Los verbos ser, estar y parecer actúan como enlace (cópula) entre el sujeto y el atributo que lo califica («La casa es grande»). En el predicado verbal el verbo tiene pleno significado predicativo («La casa se derrumbó»).',
    explanationArmenian: 'Ser, estar և parecer բայերը կապող օղակ են ենթակայի և նրան բնութագրող ստորոգյալի մասի միջև («Տունը մեծ է»):'
  },
  {
    id: 'q61',
    block: 4,
    blockName: 'Categorías gramaticales',
    category: 'Sustantivos abstractos',
    subtopic: 'Concreto frente a Abstracto',
    difficulty: 'facil',
    question: '¿Cuál de los siguientes sustantivos es ABSTRACTO (no se puede percibir directamente con los sentidos físicos)?',
    questionArmenian: 'Հետևյալ գոյականներից ո՞րն է ՎԵՐԱՑԱԿԱՆ (հնարավոր չէ ընկալել ֆիզիկական զգայարաններով):',
    options: [
      {
        id: 'q61_o1',
        text: 'Justicia.',
        textArmenian: 'Justicia (արդարություն):'
      },
      {
        id: 'q61_o2',
        text: 'Piedra.',
        textArmenian: 'Piedra (քար):'
      },
      {
        id: 'q61_o3',
        text: 'Manzana.',
        textArmenian: 'Manzana (խնձոր):'
      },
      {
        id: 'q61_o4',
        text: 'Guitarra.',
        textArmenian: 'Guitarra (կիթառ):'
      }
    ],
    correctOptionId: 'q61_o1',
    explanation: '«Justicia» es un concepto, idea o valor mental, por lo que es un sustantivo abstracto, a diferencia de los objetos materiales concretos.',
    explanationArmenian: '«Justicia» (արդարություն) հասկացություն է կամ գաղափար, ուստի վերացական գոյական է՝ ի տարբերություն շոշափելի առարկաների:'
  },
  {
    id: 'q62',
    block: 4,
    blockName: 'Categorías gramaticales',
    category: 'Determinantes numerales',
    subtopic: 'Cardinales y ordinales',
    difficulty: 'facil',
    question: 'En «Vivo en el tercer piso del edificio», ¿qué clase de determinante es «tercer»?',
    questionArmenian: '«Vivo en el tercer piso del edificio» (Ապրում եմ շենքի երրորդ հարկում) նախադասության մեջ ի՞նչ տեսակի դետերմինատիվ է «tercer» բառը:',
    options: [
      {
        id: 'q62_o1',
        text: 'Determinante numeral ordinal (indica orden o sucesión).',
        textArmenian: 'Դասական թվական դետերմինատիվ (ցույց է տալիս կարգ կամ հերթականություն):'
      },
      {
        id: 'q62_o2',
        text: 'Determinante numeral cardinal (indica cantidad exacta).',
        textArmenian: 'Քանակական թվական դետերմինատիվ (ցույց է տալիս ճշգրիտ քանակ):'
      },
      {
        id: 'q62_o3',
        text: 'Determinante indefinido.',
        textArmenian: 'Անորոշ դետերմինատիվ:'
      },
      {
        id: 'q62_o4',
        text: 'Adverbio de lugar.',
        textArmenian: 'Տեղի մակբայ:'
      }
    ],
    correctOptionId: 'q62_o1',
    explanation: '«Tercer» expresa orden numérico dentro de una serie; por tanto, es un determinante numeral ordinal (a diferencia de tres, que es cardinal).',
    explanationArmenian: '«Tercer» (երրորդ) արտահայտում է հերթական կարգ, հետևաբար դասական թվական է (ի տարբերություն tres-ի, որը քանակական է):'
  },
  {
    id: 'q63',
    block: 4,
    blockName: 'Categorías gramaticales',
    category: 'Morfología verbal',
    subtopic: 'Persona, número, tiempo y modo',
    difficulty: 'medio',
    question: 'En la forma verbal «escribiremos», ¿cuáles son sus rasgos morfológicos?',
    questionArmenian: '«Escribiremos» (մենք կգրենք) բայաձևում որո՞նք են նրա ձևաբանական հատկանիշները:',
    options: [
      {
        id: 'q63_o1',
        text: '1.ª persona del plural, futuro simple del modo indicativo.',
        textArmenian: '1-ին դեմք հոգնակի թիվ, սահմանական եղանակի պարզ ապառնի ժամանակ:'
      },
      {
        id: 'q63_o2',
        text: '2.ª persona del singular, pretérito perfecto simple.',
        textArmenian: '2-րդ դեմք եզակի, անցյալ կատարյալ ժամանակ:'
      },
      {
        id: 'q63_o3',
        text: '3.ª persona del plural, condicional simple.',
        textArmenian: '3-րդ դեմք հոգնակի, պայմանական եղանակ:'
      },
      {
        id: 'q63_o4',
        text: '1.ª persona del singular, presente de subjuntivo.',
        textArmenian: '1-ին դեմք եզակի, ըղձական ներկա:'
      }
    ],
    correctOptionId: 'q63_o1',
    explanation: '«Escribiremos» corresponde a nosotros/nosotras (1.ª persona plural), acción futura en modo indicativo del verbo escribir (3.ª conjugación).',
    explanationArmenian: '«Escribiremos»-ը վերաբերում է «մենք»-ին (1-ին դեմք հոգնակի), escribir բայի սահմանական ապառնի ժամանակն է:'
  },
  {
    id: 'q64',
    block: 4,
    blockName: 'Categorías gramaticales',
    category: 'Palabras variables e invariables',
    subtopic: 'Clasificación morfológica general',
    difficulty: 'medio',
    question: '¿Cuáles de las siguientes categorías gramaticales son INVARIABLES (no admiten flexión de género ni de número)?',
    questionArmenian: 'Հետևյալ խոսքի մասերից որո՞նք են ԱՆՓՈՓՈԽ (չեն թեքվում ըստ սեռի կամ թվի):',
    options: [
      {
        id: 'q64_o1',
        text: 'Adverbio, preposición, conjunción e interjección.',
        textArmenian: 'Մակբայ, նախդիր, շաղկապ և ձայնարկություն:'
      },
      {
        id: 'q64_o2',
        text: 'Sustantivo, adjetivo, determinante y pronombre.',
        textArmenian: 'Գոյական, ածական, դետերմինատիվ և դերանուն:'
      },
      {
        id: 'q64_o3',
        text: 'Solo el verbo conjugado.',
        textArmenian: 'Միայն խոնարհված բայը:'
      },
      {
        id: 'q64_o4',
        text: 'Todas las palabras en español son variables.',
        textArmenian: 'Իսպաներենի բոլոր բառերը փոփոխական են:'
      }
    ],
    correctOptionId: 'q64_o1',
    explanation: 'Los adverbios, las preposiciones, las conjunciones y las interjecciones carecen de morfemas flexivos de género y número: son siempre invariables.',
    explanationArmenian: 'Մակբայները, նախդիրները, շաղկապները և ձայնարկությունները չունեն սեռի և թվի քերականական վերջավորություններ. դրանք միշտ անփոփոխ են:'
  },
  {
    id: 'q65',
    block: 4,
    blockName: 'Categorías gramaticales',
    category: 'Análisis global de frase',
    subtopic: 'Conteo y clasificación categorial',
    difficulty: 'dificil',
    question: 'En la frase «Los gatos negros duermen plácidamente sobre la alfombra», ¿cuántos sustantivos hay?',
    questionArmenian: '«Los gatos negros duermen plácidamente sobre la alfombra» (Սև կատուները հանգիստ քնած են գորգի վրա) նախադասության մեջ քանի՞ գոյական կա:',
    options: [
      {
        id: 'q65_o1',
        text: 'Dos sustantivos: «gatos» y «alfombra».',
        textArmenian: 'Երկու գոյական՝ «gatos» և «alfombra»:'
      },
      {
        id: 'q65_o2',
        text: 'Cuatro sustantivos: «gatos», «negros», «duermen» y «alfombra».',
        textArmenian: 'Չորս գոյական՝ «gatos», «negros», «duermen» և «alfombra»:'
      },
      {
        id: 'q65_o3',
        text: 'Solo un sustantivo: «alfombra».',
        textArmenian: 'Միայն մեկ գոյական՝ «alfombra»:'
      },
      {
        id: 'q65_o4',
        text: 'Ninguno, son todos verbos y adjetivos.',
        textArmenian: 'Ոչ մեկը, բոլորը բայեր և ածականներ են:'
      }
    ],
    correctOptionId: 'q65_o1',
    explanation: 'Los únicos dos sustantivos son «gatos» (común, concreto) y «alfombra» (común, concreto). «Negros» es adjetivo, «duermen» es verbo y «plácidamente» es adverbio.',
    explanationArmenian: 'Միակ երկու գոյականներն են «gatos» (կատուներ) և «alfombra» (գորգ): «Negros»-ը ածական է, «duermen»-ը՝ բայ, իսկ «plácidamente»-ն՝ մակբայ:'
  }
];
