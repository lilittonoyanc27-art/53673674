import { Question } from './types';

export const QUESTIONS_BLOQUE_5_7: Question[] = [
  // ==========================================
  // BLOQUE 5: LITERATURA POPULAR Y CULTA (25 Preguntas: q66 - q90)
  // ==========================================
  {
    id: 'q66',
    block: 5,
    blockName: 'Literatura popular y culta',
    category: 'Literatura popular',
    subtopic: 'Definición y características',
    difficulty: 'facil',
    question: '¿Qué es la literatura popular?',
    questionArmenian: 'Ի՞նչ է ժողովրդական գրականությունը (literatura popular):',
    options: [
      {
        id: 'q66_o1',
        text: 'El conjunto de obras tradicionales creadas por el pueblo, transmitidas oralmente de generación en generación.',
        textArmenian: 'Ժողովրդի կողմից ստեղծված ավանդական ստեղծագործությունների ամբողջությունը, որը սերնդեսերունդ փոխանցվել է բանավոր:'
      },
      {
        id: 'q66_o2',
        text: 'Las novelas modernas que se venden en grandes centros comerciales.',
        textArmenian: 'Ժամանակակից վեպերը, որոնք վաճառվում են մեծ առևտրի կենտրոններում:'
      },
      {
        id: 'q66_o3',
        text: 'Los manuales científicos de matemáticas y física.',
        textArmenian: 'Մաթեմատիկայի և ֆիզիկայի գիտական ձեռնարկները:'
      },
      {
        id: 'q66_o4',
        text: 'Textos escritos por un solo autor famoso que nunca cambian.',
        textArmenian: 'Միայն մեկ հայտնի հեղինակի կողմից գրված տեքստեր, որոնք երբեք չեն փոխվում:'
      }
    ],
    correctOptionId: 'q66_o1',
    explanation: 'La literatura popular nace del pueblo llano, es anónima, colectiva y se difunde fundamentalmente de viva voz (transmisión oral).',
    explanationArmenian: 'Ժողովրդական գրականությունը ծնվում է հասարակ ժողովրդից, անանուն է, հավաքական և տարածվում է հիմնականում բանավոր:'
  },
  {
    id: 'q67',
    block: 5,
    blockName: 'Literatura popular y culta',
    category: 'Literatura popular',
    subtopic: 'Anonimia en la literatura popular',
    difficulty: 'facil',
    question: '¿Por qué la inmensa mayoría de las obras de la literatura popular son ANÓNIMAS?',
    questionArmenian: 'Ինչո՞ւ են ժողովրդական գրականության ստեղծագործությունների ճնշող մեծամասնությունը ԱՆԱՆՈՒՆ (anónimas):',
    options: [
      {
        id: 'q67_o1',
        text: 'Porque al transmitirse de boca en boca a lo largo del tiempo, se olvidó el autor original y la comunidad las hizo suyas.',
        textArmenian: 'Քանի որ ժամանակի ընթացքում բերանացի փոխանցվելիս սկզբնական հեղինակը մոռացվել է, և համայնքը դրանք յուրացրել է:'
      },
      {
        id: 'q67_o2',
        text: 'Porque estaba legalmente prohibido firmar las canciones.',
        textArmenian: 'Որովհետև օրենքով արգելված էր երգերը ստորագրելը:'
      },
      {
        id: 'q67_o3',
        text: 'Porque los autores querían ocultar su identidad a los reyes.',
        textArmenian: 'Որովհետև հեղինակները ցանկանում էին թաքցնել իրենց ինքնությունը թագավորներից:'
      },
      {
        id: 'q67_o4',
        text: 'Porque fueron escritas por máquinas automáticas medievales.',
        textArmenian: 'Որովհետև դրանք գրվել էին միջնադարյան ավտոմատ մեքենաների կողմից:'
      }
    ],
    correctOptionId: 'q67_o1',
    explanation: 'La obra popular pertenece al patrimonio colectivo: al difundirse oralmente durante siglos, el nombre del creador primigenio se diluye en la memoria del pueblo.',
    explanationArmenian: 'Ժողովրդական ստեղծագործությունը պատկանում է հավաքական ժառանգությանը. դարեր շարունակ բանավոր տարածվելով՝ առաջին հեղինակի անունը մոռացվում է:'
  },
  {
    id: 'q68',
    block: 5,
    blockName: 'Literatura popular y culta',
    category: 'Literatura popular',
    subtopic: 'Transmisión oral y variantes',
    difficulty: 'medio',
    question: '¿Por qué existen tantas versiones o VARIANTES diferentes de una misma canción, romance o cuento popular?',
    questionArmenian: 'Ինչո՞ւ գոյություն ունեն միևնույն ժողովրդական երգի, ռոմանսի կամ հեքիաթի այդքան շատ ՏԱՐԲԵՐԱԿՆԵՐ (variantes):',
    options: [
      {
        id: 'q68_o1',
        text: 'Porque cada narrador o cantor popular añadía, quitaba o modificaba detalles al contarla de memoria según su región.',
        textArmenian: 'Որովհետև յուրաքանչյուր ժողովրդական պատմող կամ երգիչ անգիր պատմելիս ավելացնում, պակասեցնում կամ փոփոխում էր մանրամասները:'
      },
      {
        id: 'q68_o2',
        text: 'Porque las imprentas antiguas tenían fallos tipográficos intencionados.',
        textArmenian: 'Որովհետև հին տպարանները դիտավորյալ տպագրական սխալներ էին թույլ տալիս:'
      },
      {
        id: 'q68_o3',
        text: 'Porque la gramática obligaba a cambiar las palabras cada diez años.',
        textArmenian: 'Որովհետև քերականությունը պարտադրում էր տասը տարին մեկ բառերը փոխել:'
      },
      {
        id: 'q68_o4',
        text: 'Es falso: todas las obras populares son idénticas palabra por palabra.',
        textArmenian: 'Սխալ է. բոլոր ժողովրդական ստեղծագործությունները բառ առ բառ նույնական են:'
      }
    ],
    correctOptionId: 'q68_o1',
    explanation: 'Al depender de la memoria humana y de la voz, cada intérprete adapta la historia a su gusto o a las costumbres locales, generando múltiples variantes.',
    explanationArmenian: 'Կախված լինելով մարդկային հիշողությունից և ձայնից՝ յուրաքանչյուր կատարող պատմությունը հարմարեցնում էր իր ճաշակին՝ ստեղծելով բազմաթիվ տարբերակներ:'
  },
  {
    id: 'q69',
    block: 5,
    blockName: 'Literatura popular y culta',
    category: 'Literatura culta',
    subtopic: 'Características de la literatura culta',
    difficulty: 'facil',
    question: '¿Cuáles son los tres rasgos fundamentales que definen a la LITERATURA CULTA?',
    questionArmenian: 'Որո՞նք են այն երեք հիմնական հատկանիշները, որոնք բնորոշում են ԳՐԱԿԱՆ / ԴԱՍԱԿԱՆ ԳՐԱԿԱՆՈՒԹՅԱՆԸ (literatura culta):',
    options: [
      {
        id: 'q69_o1',
        text: 'Autor conocido, transmisión escrita fijada y lenguaje elaborado y reflexivo.',
        textArmenian: 'Հայտնի հեղինակ, գրավոր ամրագրված փոխանցում և մշակված ու խորը լեզու:'
      },
      {
        id: 'q69_o2',
        text: 'Autor anónimo, transmisión por radio y rima libre en verso.',
        textArmenian: 'Անանուն հեղինակ, ռադիոյով փոխանցում և ազատ հանգ:'
      },
      {
        id: 'q69_o3',
        text: 'Solo habla de monstruos, carece de autor y se cuenta en plazas públicas.',
        textArmenian: 'Խոսում է միայն հրեշների մասին, չունի հեղինակ և պատմվում է հրապարակներում:'
      },
      {
        id: 'q69_o4',
        text: 'Siempre está escrita en latín antiguo y nunca se traduce.',
        textArmenian: 'Միշտ գրված է հին լատիներենով և երբեք չի թարգմանվում:'
      }
    ],
    correctOptionId: 'q69_o1',
    explanation: 'La literatura culta nace de un autor individual con nombre reconocido, se fija por escrito (lo que impide alteraciones espontáneas) y emplea recursos elaborados.',
    explanationArmenian: 'Գրական գրականությունը ծնվում է ճանաչված անհատ հեղինակից, ամրագրվում է գրավոր (ինչը կանխում է պատահական փոփոխությունները) և օգտագործում է մշակված միջոցներ:'
  },
  {
    id: 'q70',
    block: 5,
    blockName: 'Literatura popular y culta',
    category: 'Comparación directa',
    subtopic: 'Popular frente a culta',
    difficulty: 'medio',
    question: '«Una obra tiene autor conocido, se conserva en manuscritos o libros impresos y mantiene un texto fijo e inmutable». ¿A qué tipo de literatura corresponde?',
    questionArmenian: '«Ստեղծագործությունն ունի հայտնի հեղինակ, պահպանվում է ձեռագրերում կամ տպագիր գրքերում և ունի անփոփոխ տեքստ»: Գրականության ո՞ր տեսակին է պատկանում:',
    options: [
      {
        id: 'q70_o1',
        text: 'Literatura culta.',
        textArmenian: 'Գրական / դասական գրականություն (literatura culta):'
      },
      {
        id: 'q70_o2',
        text: 'Literatura popular oral.',
        textArmenian: 'Ժողովրդական բանավոր գրականություն:'
      },
      {
        id: 'q70_o3',
        text: 'Folclore anónimo infantil.',
        textArmenian: 'Մանկական անանուն ֆոլկլոր:'
      },
      {
        id: 'q70_o4',
        text: 'Romance de ciego tradicional.',
        textArmenian: 'Ավանդական կույրերի ռոմանս:'
      }
    ],
    correctOptionId: 'q70_o1',
    explanation: 'El autor individual conocido y la fijación por escrito son señas de identidad exclusivas de la literatura culta.',
    explanationArmenian: 'Հայտնի անհատ հեղինակը և գրավոր ամրագրումը դասական/գրական գրականության բացառիկ նշաններն են:'
  },
  {
    id: 'q71',
    block: 5,
    blockName: 'Literatura popular y culta',
    category: 'Literatura popular recursos',
    subtopic: 'Fórmulas y repeticiones',
    difficulty: 'medio',
    question: '¿Por qué en los cuentos populares y romances son tan frecuentes las repeticiones, estribillos y fórmulas fijas («Érase una vez...»)?',
    questionArmenian: 'Ինչո՞ւ են ժողովրդական հեքիաթներում և ռոմանսներում այդքան հաճախ հանդիպում կրկնությունները, կրկներգերը և կայուն արտահայտությունները («Լինում է, չի լինում...»):',
    options: [
      {
        id: 'q71_o1',
        text: 'Porque facilitaban la memorización y el ritmo del narrador oral al recitar ante el público.',
        textArmenian: 'Որովհետև դրանք հեշտացնում էին պատմողի անգիր հիշելն ու ռիթմը՝ հանդիսատեսի առաջ արտասանելիս:'
      },
      {
        id: 'q71_o2',
        text: 'Porque los autores no conocían suficientes adjetivos en español.',
        textArmenian: 'Որովհետև հեղինակները չգիտեին բավարար քանակությամբ ածականներ:'
      },
      {
        id: 'q71_o3',
        text: 'Porque así los libros pesaban más kilos en la biblioteca.',
        textArmenian: 'Որովհետև այդպես գրքերն ավելի ծանր էին կշռում գրադարանում:'
      },
      {
        id: 'q71_o4',
        text: 'Para confundir a los niños que escuchaban la historia.',
        textArmenian: 'Պատմությունը լսող երեխաներին շփոթեցնելու համար:'
      }
    ],
    correctOptionId: 'q71_o1',
    explanation: 'Las fórmulas de inicio y cierre, los paralelismos y los estribillos son recursos mnemotécnicos esenciales para los transmisores orales.',
    explanationArmenian: 'Սկզբի և ավարտի բանաձևերը, զուգահեռականություններն ու կրկներգերը բանավոր պատմողների համար հիշողությանը նպաստող կարևորագույն միջոցներ են:'
  },
  {
    id: 'q72',
    block: 5,
    blockName: 'Literatura popular y culta',
    category: 'Géneros de literatura popular',
    subtopic: 'Manifestaciones de la lírica popular',
    difficulty: 'facil',
    question: '¿Cuáles de las siguientes manifestaciones pertenecen tradicionalmente a la literatura popular?',
    questionArmenian: 'Հետևյալ դրսևորումներից որո՞նք են ավանդաբար պատկանում ժողովրդական գրականությանը:',
    options: [
      {
        id: 'q72_o1',
        text: 'Canciones de cuna, romances tradicionales, adivinanzas, refranes y leyendas locales.',
        textArmenian: 'Օրորոցայիններ, ավանդական ռոմանսներ, հանելուկներ, ասացվածքներ և տեղական լեգենդներ:'
      },
      {
        id: 'q72_o2',
        text: 'Enciclopedias de botánica y tratados de medicina moderna.',
        textArmenian: 'Բուսաբանության հանրագիտարաններ և բժշկության տրակտատներ:'
      },
      {
        id: 'q72_o3',
        text: 'Constituciones de países y leyes parlamentarias.',
        textArmenian: 'Երկրների սահմանադրություններ և խորհրդարանական օրենքներ:'
      },
      {
        id: 'q72_o4',
        text: 'Periódicos diarios con cotizaciones de bolsa.',
        textArmenian: 'Ամենօրյա թերթեր՝ բորսայական գներով:'
      }
    ],
    correctOptionId: 'q72_o1',
    explanation: 'El folclore popular abarca la lírica tradicional (nanas, mayas, canciones de siega), la narrativa breve (cuentos y leyendas) y la paremiología (refranes).',
    explanationArmenian: 'Ժողովրդական ֆոլկլորը ներառում է ավանդական քնարերգությունը (օրորներ, աշխատանքային երգեր), կարճ պատմությունները (հեքիաթներ, լեգենդներ) և ասացվածքները:'
  },
  {
    id: 'q73',
    block: 5,
    blockName: 'Literatura popular y culta',
    category: 'Mester de juglaría y clerecía',
    subtopic: 'Juglares y difusión oral',
    difficulty: 'dificil',
    question: 'En la Edad Media, los artistas errantes que cantaban romances y cantares de gesta por pueblos y castillos se llamaban:',
    questionArmenian: 'Միջնադարում շրջիկ արվեստագետները, որոնք գյուղերում ու ամրոցներում երգում էին ռոմանսներ և հերոսավեպեր (cantares de gesta), կոչվում էին.',
    options: [
      {
        id: 'q73_o1',
        text: 'Juglares.',
        textArmenian: 'Ժուգլարներ (խուգլարներ / գուսաններ):'
      },
      {
        id: 'q73_o2',
        text: 'Catedráticos.',
        textArmenian: 'Պրոֆեսորներ:'
      },
      {
        id: 'q73_o3',
        text: 'Impresores.',
        textArmenian: 'Տպագրիչներ:'
      },
      {
        id: 'q73_o4',
        text: 'Notarios.',
        textArmenian: 'Նոտարներ:'
      }
    ],
    correctOptionId: 'q73_o1',
    explanation: 'Los juglares eran los encargados de transmitir oralmente la literatura popular (mester de juglaría) entreteniendo al pueblo con música, recitaciones y acrobacias.',
    explanationArmenian: 'Խուգլարները (գուսանները) բանավոր փոխանցում էին ժողովրդական գրականությունը՝ զվարճացնելով ժողովրդին երաժշտությամբ, ասմունքով և ակրոբատիկայով:'
  },
  {
    id: 'q74',
    block: 5,
    blockName: 'Literatura popular y culta',
    category: 'Verdadero o falso',
    subtopic: 'Juicio crítico sobre la literatura popular',
    difficulty: 'medio',
    question: 'Indica cuál de las siguientes afirmaciones sobre la literatura popular es FALSA:',
    questionArmenian: 'Նշի՛ր, թե ժողովրդական գրականության վերաբերյալ հետևյալ պնդումներից ո՛րն է ՍԽԱԼ.',
    options: [
      {
        id: 'q74_o1',
        text: 'Una obra popular nunca puede recogerse por escrito en una antología.',
        textArmenian: 'Ժողովրդական ստեղծագործությունը երբեք չի կարող գրավոր գրանցվել անթոլոգիայում:'
      },
      {
        id: 'q74_o2',
        text: 'Suele transmitirse de padres a hijos a través de la palabra hablada.',
        textArmenian: 'Այն սովորաբար ծնողներից երեխաներին է փոխանցվում բանավոր խոսքի միջոցով:'
      },
      {
        id: 'q74_o3',
        text: 'Con frecuencia presenta musicalidad y ritmo para ser cantada o bailada.',
        textArmenian: 'Հաճախ ունի երաժշտականություն և ռիթմ՝ երգվելու կամ պարվելու համար:'
      },
      {
        id: 'q74_o4',
        text: 'Sus historias reflejan valores, miedos y costumbres de la vida cotidiana.',
        textArmenian: 'Նրա պատմություններն արտացոլում են առօրյա կյանքի արժեքները, վախերն ու սովորույթները:'
      }
    ],
    correctOptionId: 'q74_o1',
    explanation: 'La afirmación A es falsa porque muchas obras populares de transmisión oral han sido recopiladas por eruditos y escritores en cancioneros y romanceros escritos.',
    explanationArmenian: 'A պնդումը սխալ է, քանի որ բանավոր փոխանցվող շատ ժողովրդական գործեր հետագայում գիտնականների կողմից գրի են առնվել գրքերում (ռոմանսերոներում):'
  },
  {
    id: 'q75',
    block: 5,
    blockName: 'Literatura popular y culta',
    category: 'Lenguaje y estilo',
    subtopic: 'Lenguaje sencillo vs elaborado',
    difficulty: 'medio',
    question: '¿Qué rasgo caracteriza al LENGUAJE de la literatura culta en comparación con la popular?',
    questionArmenian: 'Ի՞նչ հատկանիշ է բնորոշում գրական/դասական գրականության ԼԵԶՎԻՆ՝ ժողովրդականի համեմատ:',
    options: [
      {
        id: 'q75_o1',
        text: 'Un vocabulario rico, mayor complejidad sintáctica y una cuidadosa búsqueda de originalidad estética.',
        textArmenian: 'Հարուստ բառապաշար, ավելի բարդ շարահյուսություն և գեղագիտական ինքնատիպության մանրակրկիտ որոնում:'
      },
      {
        id: 'q75_o2',
        text: 'Un uso exclusivo de palabras de una sola sílaba.',
        textArmenian: 'Բացառապես մեկ վանկ ունեցող բառերի օգտագործում:'
      },
      {
        id: 'q75_o3',
        text: 'La prohibición absoluta de usar metáforas.',
        textArmenian: 'Փոխաբերություններ օգտագործելու բացարձակ արգելք:'
      },
      {
        id: 'q75_o4',
        text: 'La obligación de no tener autor.',
        textArmenian: 'Հեղինակ չունենալու պարտադրանք:'
      }
    ],
    correctOptionId: 'q75_o1',
    explanation: 'El autor culto pule su estilo con esmero, buscando fórmulas expresivas novedosas y estructuras gramaticales complejas.',
    explanationArmenian: 'Դասական հեղինակը հղկում է իր ոճը՝ ձգտելով արտահայտչական նոր ձևերի և բարդ քերականական կառույցների:'
  },
  {
    id: 'q76',
    block: 5,
    blockName: 'Literatura popular y culta',
    category: 'Ejemplos de autores cultos',
    subtopic: 'Identificación de literatura culta',
    difficulty: 'medio',
    question: 'Obras como «Don Quijote de la Mancha» de Miguel de Cervantes pertenecen a:',
    questionArmenian: 'Միգել դե Սերվանտեսի «Դոն Կիխոտ» ստեղծագործությունը պատկանում է.',
    options: [
      {
        id: 'q76_o1',
        text: 'La literatura culta (obra de autor individual conocido, escrita y fijada en imprenta).',
        textArmenian: 'Գրական/դասական գրականությանը (հայտնի անհատ հեղինակի գործ, գրված և տպագրված):'
      },
      {
        id: 'q76_o2',
        text: 'La literatura popular anónima transmitida oralmente.',
        textArmenian: 'Անանուն ժողովրդական բանավոր փոխանցվող գրականությանը:'
      },
      {
        id: 'q76_o3',
        text: 'Un cuento tradicional que cambia con cada lector.',
        textArmenian: 'Ավանդական հեքիաթի, որը փոխվում է յուրաքանչյուր ընթերցողի հետ:'
      },
      {
        id: 'q76_o4',
        text: 'Una canción de siega campesina.',
        textArmenian: 'Գյուղական հնձի երգի:'
      }
    ],
    correctOptionId: 'q76_o1',
    explanation: 'El Quijote es una cumbre de la literatura culta: creación de un genio individual, fijada en el texto escrito.',
    explanationArmenian: '«Դոն Կիխոտը» դասական գրականության գագաթներից է՝ անհատ հանճարի ստեղծագործություն՝ ամրագրված գրավոր տեքստով:'
  },
  {
    id: 'q77',
    block: 5,
    blockName: 'Literatura popular y culta',
    category: 'Influencia recíproca',
    subtopic: 'Relación entre popular y culta',
    difficulty: 'dificil',
    question: '¿Pueden los autores cultos inspirarse en la literatura popular?',
    questionArmenian: 'Կարո՞ղ են դասական գրողները ոգեշնչվել ժողովրդական գրականությունից:',
    options: [
      {
        id: 'q77_o1',
        text: 'Sí, muchos grandes poetas cultos han escrito romances y poemas recreando formas y temas populares.',
        textArmenian: 'Այո, շատ մեծ դասական բանաստեղծներ գրել են ռոմանսներ՝ վերաստեղծելով ժողովրդական ձևերն ու թեմաները:'
      },
      {
        id: 'q77_o2',
        text: 'No, la ley de educación prohíbe mezclar ambas tradiciones.',
        textArmenian: 'Ոչ, կրթության օրենքն արգելում է խառնել այդ երկու ավանդույթները:'
      },
      {
        id: 'q77_o3',
        text: 'Solo si el poeta olvida su nombre y firma con seudónimo.',
        textArmenian: 'Միայն այն դեպքում, եթե բանաստեղծը մոռանա իր անունը և ստորագրի կեղծանունով:'
      },
      {
        id: 'q77_o4',
        text: 'No, porque la literatura popular no tiene ningún valor artístico.',
        textArmenian: 'Ոչ, որովհետև ժողովրդական գրականությունը ոչ մի գեղարվեստական արժեք չունի:'
      }
    ],
    correctOptionId: 'q77_o1',
    explanation: 'Poetas cultos universales como Federico García Lorca o Lope de Vega se inspiraron profundamente en canciones y romances populares.',
    explanationArmenian: 'Այնպիսի համաշխարհային բանաստեղծներ, ինչպիսիք են Ֆեդերիկո Գարսիա Լորկան կամ Լոպե դե Վեգան, խորապես ոգեշնչվել են ժողովրդական երգերից և ռոմանսներից:'
  },
  {
    id: 'q78',
    block: 5,
    blockName: 'Literatura popular y culta',
    category: 'Refranes',
    subtopic: 'Paremiología popular',
    difficulty: 'facil',
    question: 'Los refranes populares («En boca cerrada no entran moscas») son pequeñas composiciones que transmiten:',
    questionArmenian: 'Ժողովրդական ասացվածքները («Փակ բերանին ճանճ չի նստի») փոքրիկ խոսքեր են, որոնք փոխանցում են.',
    options: [
      {
        id: 'q78_o1',
        text: 'Sabiduría práctica, consejos y enseñanzas morales del pueblo.',
        textArmenian: 'Գործնական իմաստնություն, ժողովրդի խորհուրդներ և բարոյական ուսուցումներ:'
      },
      {
        id: 'q78_o2',
        text: 'Fórmulas químicas de laboratorio.',
        textArmenian: 'Լաբորատոր քիմիական բանաձևեր:'
      },
      {
        id: 'q78_o3',
        text: 'Instrucciones para arreglar teléfonos.',
        textArmenian: 'Հեռախոսներ նորոգելու ցուցումներ:'
      },
      {
        id: 'q78_o4',
        text: 'Leyes tributarias aprobadas por ministros.',
        textArmenian: 'Նախարարների կողմից հաստատված հարկային օրենքներ:'
      }
    ],
    correctOptionId: 'q78_o1',
    explanation: 'Los refranes sintetizan la experiencia colectiva acumulada por generaciones con intención pedagógica o reflexiva.',
    explanationArmenian: 'Ասացվածքներն ամփոփում են սերունդների հավաքական փորձը՝ ուսուցողական կամ խրատական նպատակով:'
  },
  {
    id: 'q79',
    block: 5,
    blockName: 'Literatura popular y culta',
    category: 'Evolución textual',
    subtopic: 'Fijación por la imprenta',
    difficulty: 'medio',
    question: '¿Qué invento histórico permitió que tanto obras cultas como romances populares se fijaran definitivamente sin sufrir nuevas modificaciones orales?',
    questionArmenian: 'Պատմական ո՞ր գյուտը թույլ տվեց, որպեսզի ինչպես դասական գործերը, այնպես էլ ժողովրդական ռոմանսները վերջնականապես ամրագրվեն՝ առանց բանավոր փոփոխությունների ենթարկվելու:',
    options: [
      {
        id: 'q79_o1',
        text: 'La imprenta (inventada por Gutenberg en el siglo XV).',
        textArmenian: 'Տպագրությունը (հայտնագործված Գուտենբերգի կողմից 15-րդ դարում):'
      },
      {
        id: 'q79_o2',
        text: 'El telégrafo eléctrico.',
        textArmenian: 'Էլեկտրական հեռագիրը:'
      },
      {
        id: 'q79_o3',
        text: 'La máquina de vapor.',
        textArmenian: 'Շոգեմեքենան:'
      },
      {
        id: 'q79_o4',
        text: 'La brújula magnética.',
        textArmenian: 'Մագնիսական կողմնացույցը:'
      }
    ],
    correctOptionId: 'q79_o1',
    explanation: 'La imprenta en el siglo XV revolucionó la literatura: al imprimir copias idénticas sobre papel, los textos dejaron de depender exclusivamente de la memoria viva.',
    explanationArmenian: '15-րդ դարում տպագրությունը հեղափոխեց գրականությունը. թղթի վրա միատեսակ օրինակներ տպելով՝ տեքստերն այլևս կախված չէին միայն հիշողությունից:'
  },
  {
    id: 'q80',
    block: 5,
    blockName: 'Literatura popular y culta',
    category: 'Repaso comparativo',
    subtopic: 'Síntesis popular vs culta',
    difficulty: 'dificil',
    question: 'Si comparamos una canción de cuna tradicional y un soneto renacentista de Garcilaso de la Vega, ¿cuál es la diferencia principal?',
    questionArmenian: 'Եթե համեմատենք ավանդական օրորոցայինը և Գարսիլասո դե լա Վեգայի վերածննդի սոնետը, ո՞րն է գլխավոր տարբերությունը:',
    options: [
      {
        id: 'q80_o1',
        text: 'La canción de cuna es popular, oral y anónima; el soneto es culto, de autor célebre y con estricta métrica escrita.',
        textArmenian: 'Օրորոցայինը ժողովրդական է, բանավոր և անանուն, իսկ սոնետը՝ դասական, հայտնի հեղինակով և խիստ գրավոր չափով:'
      },
      {
        id: 'q80_o2',
        text: 'La canción de cuna está escrita en prosa científica.',
        textArmenian: 'Օրորոցայինը գրված է գիտական արձակով:'
      },
      {
        id: 'q80_o3',
        text: 'El soneto nunca tiene rima ni versos.',
        textArmenian: 'Սոնետը երբեք չունի հանգ կամ տողեր:'
      },
      {
        id: 'q80_o4',
        text: 'Ambas obras fueron compuestas por el mismo rey en el siglo XXI.',
        textArmenian: 'Երկու ստեղծագործություններն էլ գրվել են նույն թագավորի կողմից 21-րդ դարում:'
      }
    ],
    correctOptionId: 'q80_o1',
    explanation: 'La nana pertenece a la lírica popular tradicional; el soneto de Garcilaso es la máxima expresión de la lírica culta renacentista.',
    explanationArmenian: 'Օրորոցայինը պատկանում է ավանդական ժողովրդական քնարերգությանը, իսկ Գարսիլասոյի սոնետը՝ վերածննդի դասական գրականությանը:'
  },
  {
    id: 'q81',
    block: 5,
    blockName: 'Literatura popular y culta',
    category: 'Mester de clerecía',
    subtopic: 'Literatura culta medieval',
    difficulty: 'dificil',
    question: 'Frente al mester de juglaría (popular), el «mester de clerecía» medieval se caracterizaba por:',
    questionArmenian: 'Ի տարբերություն խուգլարների արվեստի (ժողովրդական), միջնադարյան կղերական արվեստը (mester de clerecía) բնութագրվում էր հետևյալով.',
    options: [
      {
        id: 'q81_o1',
        text: 'Ser una poesía culta compuesta por clérigos y letrados, con rima consonante regular (cuaderna vía) y basada en libros escritos.',
        textArmenian: 'Լինել կրոնավորների և գրագետների կողմից ստեղծված դասական պոեզիա՝ կանոնավոր համահունչ հանգով (cuaderna vía) և հիմնված գրքերի վրա:'
      },
      {
        id: 'q81_o2',
        text: 'Ser canciones de broma improvisadas en tabernas.',
        textArmenian: 'Պանդոկներում իմպրովիզացված կատակային երգեր լինելով:'
      },
      {
        id: 'q81_o3',
        text: 'No tener nunca temas religiosos ni morales.',
        textArmenian: 'Երբեք կրոնական կամ բարոյախոսական թեմաներ չունենալով:'
      },
      {
        id: 'q81_o4',
        text: 'Escribirse únicamente en alfabeto griego sin vocales.',
        textArmenian: 'Գրվել միայն հունական այբուբենով՝ առանց ձայնավորների:'
      }
    ],
    correctOptionId: 'q81_o1',
    explanation: 'El mester de clerecía es el oficio culto de los hombres de letras (Gonzalo de Berceo, el Arcipreste de Hita), con estrofas cuidadas de 14 sílabas (alejandrinos).',
    explanationArmenian: 'Mester de clerecía-ն կրթված մարդկանց դասական արվեստն էր (Բերսեո և այլք)՝ 14 վանկանի կանոնավոր տողերով:'
  },
  {
    id: 'q82',
    block: 5,
    blockName: 'Literatura popular y culta',
    category: 'Adivinanzas',
    subtopic: 'Juegos de ingenio populares',
    difficulty: 'facil',
    question: '«Oro parece, plata no es; el que no lo adivine, bien tonto es». ¿A qué género de la literatura popular corresponde?',
    questionArmenian: '«Oro parece, plata no es; el que no lo adivine, bien tonto es» (Ոսկի է թվում, արծաթ չէ... Պատասխան՝ պլատան/բանան): Ժողովրդական գրականության ո՞ր ժանրին է սա պատկանում:',
    options: [
      {
        id: 'q82_o1',
        text: 'Adivinanza popular.',
        textArmenian: 'Ժողովրդական հանելուկ:'
      },
      {
        id: 'q82_o2',
        text: 'Cantar de gesta épico.',
        textArmenian: 'Էպիկական հերոսավեպ:'
      },
      {
        id: 'q82_o3',
        text: 'Tragedia dramática en cinco actos.',
        textArmenian: 'Հինգ գործողությամբ դրամատիկական ողբերգություն:'
      },
      {
        id: 'q82_o4',
        text: 'Novela histórica de caballerías.',
        textArmenian: 'Ասպետական պատմավեպ:'
      }
    ],
    correctOptionId: 'q82_o1',
    explanation: 'Las adivinanzas son acertijos populares en verso donde se describe algo de forma enigmática para que el oyente descubra la respuesta (en este caso, el plátano).',
    explanationArmenian: 'Հանելուկները ժողովրդական չափածո հանելուկներ են, որտեղ առարկան նկարագրվում է առեղծվածային կերպով, որպեսզի լսողը գուշակի:'
  },
  {
    id: 'q83',
    block: 5,
    blockName: 'Literatura popular y culta',
    category: 'Público receptor',
    subtopic: 'Destinatarios',
    difficulty: 'medio',
    question: 'En sus orígenes medievales, ¿quién era el destinatario principal de la literatura popular frente a la literatura culta?',
    questionArmenian: 'Իր միջնադարյան ակունքներում ո՞վ էր ժողովրդական գրականության հիմնական հասցեատերը՝ ի տարբերություն դասական գրականության:',
    options: [
      {
        id: 'q83_o1',
        text: 'La literatura popular se dirigía a todo el pueblo llano analfabeto; la culta, a una minoría letrada que sabía leer y escribir.',
        textArmenian: 'Ժողովրդականը նախատեսված էր անգրագետ հասարակ ժողովրդի համար, իսկ դասականը՝ կարդալ-գրել իմացող կրթյալ փոքրամասնության:'
      },
      {
        id: 'q83_o2',
        text: 'La literatura popular solo la escuchaban los emperadores en sus barcos.',
        textArmenian: 'Ժողովրդականը լսում էին միայն կայսրերը նավերի վրա:'
      },
      {
        id: 'q83_o3',
        text: 'Ambas estaban destinadas exclusivamente a astronautas.',
        textArmenian: 'Երկուսն էլ նախատեսված էին բացառապես տիեզերագնացների համար:'
      },
      {
        id: 'q83_o4',
        text: 'No había diferencias de público en la Edad Media.',
        textArmenian: 'Միջնադարում լսարանի տարբերություն չկար:'
      }
    ],
    correctOptionId: 'q83_o1',
    explanation: 'Al no saber leer la mayoría de la población, la literatura popular oral era su único acceso al arte y la diversión; la literatura culta requería alfabetización.',
    explanationArmenian: 'Քանի որ բնակչության մեծ մասն անգրագետ էր, բանավոր գրականությունը նրանց միակ ճանապարհն էր, իսկ դասականը պահանջում էր գրագիտություն:'
  },
  {
    id: 'q84',
    block: 5,
    blockName: 'Literatura popular y culta',
    category: 'Trabalenguas',
    subtopic: 'Juegos fónicos populares',
    difficulty: 'facil',
    question: '«Tres tristes tigres comen trigo en un trigal». Esta manifestación de la tradición popular es un:',
    questionArmenian: '«Tres tristes tigres comen trigo en un trigal»: Ժողովրդական ավանդույթի այս դրսևորումը հետևյալն է.',
    options: [
      {
        id: 'q84_o1',
        text: 'Trabalenguas (juego sonoro para ejercitar la pronunciación).',
        textArmenian: 'Շուտասելուկ (հնչյունական խաղ՝ արտասանությունը մարզելու համար):'
      },
      {
        id: 'q84_o2',
        text: 'Mito de la creación del universo.',
        textArmenian: 'Տիեզերքի ստեղծման առասպել:'
      },
      {
        id: 'q84_o3',
        text: 'Tratado de agricultura cerealista.',
        textArmenian: 'Հացահատիկային գյուղատնտեսության տրակտատ:'
      },
      {
        id: 'q84_o4',
        text: 'Novela picaresca española.',
        textArmenian: 'Իսպանական խարդախավեպ (պիկարեսկ):'
      }
    ],
    correctOptionId: 'q84_o1',
    explanation: 'Los trabalenguas son composiciones populares con fonemas difíciles acumulados (aquí la aliteración de «tr») concebidas para divertir y destrabar la lengua.',
    explanationArmenian: 'Շուտասելուկները ժողովրդական ստեղծագործություններ են՝ բարդ հնչյունների կուտակումով («tr»-ի ալիտերացիա)՝ լեզուն վարժեցնելու համար:'
  },
  {
    id: 'q85',
    block: 5,
    blockName: 'Literatura popular y culta',
    category: 'Mitos sobre la autoría',
    subtopic: 'Preservación de la obra culta',
    difficulty: 'medio',
    question: 'Si un actor contemporáneo en el teatro cambia una palabra de un drama de Federico García Lorca, ¿significa que la obra se ha convertido en literatura popular?',
    questionArmenian: 'Եթե թատրոնում դերասանը Ֆեդերիկո Գարսիա Լորկայի դրամայից մի բառ փոխի, դա նշանակո՞ւմ է, որ ստեղծագործությունը վերածվել է ժողովրդական գրականության:',
    options: [
      {
        id: 'q85_o1',
        text: 'No, sigue siendo literatura culta porque el texto original y auténtico permanece fijado en su edición escrita y protegida.',
        textArmenian: 'Ոչ, այն մնում է դասական գրականություն, որովհետև բնօրինակը հաստատված է պաշտպանված գրավոր հրատարակությամբ:'
      },
      {
        id: 'q85_o2',
        text: 'Sí, automáticamente se convierte en un refrán campesino.',
        textArmenian: 'Այո, այն ավտոմատ կերպով վերածվում է գեղջկական ասացվածքի:'
      },
      {
        id: 'q85_o3',
        text: 'Sí, porque el autor pierde inmediatamente todos sus derechos.',
        textArmenian: 'Այո, քանի որ հեղինակն իսկույն կորցնում է իր բոլոր իրավունքները:'
      },
      {
        id: 'q85_o4',
        text: 'Se convierte en una leyenda griega.',
        textArmenian: 'Այն վերածվում է հունական առասպելի:'
      }
    ],
    correctOptionId: 'q85_o1',
    explanation: 'En la literatura culta, la edición impresa fija para siempre la voluntad del autor conocido, independientemente de errores o interpretaciones en escena.',
    explanationArmenian: 'Դասական գրականության մեջ տպագիր հրատարակությունը հավերժ ամրագրում է հայտնի հեղինակի կամքը:'
  },
  {
    id: 'q86',
    block: 5,
    blockName: 'Literatura popular y culta',
    category: 'Transmisión intergeneracional',
    subtopic: 'Memoria colectiva',
    difficulty: 'facil',
    question: '¿Qué significa que la literatura popular se transmite «de generación en generación»?',
    questionArmenian: 'Ի՞նչ է նշանակում, որ ժողովրդական գրականությունը փոխանցվում է «սերնդեսերունդ» (de generación en generación):',
    options: [
      {
        id: 'q86_o1',
        text: 'Que los abuelos y padres la enseñan de palabra a sus hijos y nietos a lo largo de décadas y siglos.',
        textArmenian: 'Որ տատիկ-պապիկներն ու ծնողները տասնամյակների և դարերի ընթացքում բանավոր սովորեցնում են իրենց զավակներին ու թոռներին:'
      },
      {
        id: 'q86_o2',
        text: 'Que se envía por correo urgente a un solo destinatario.',
        textArmenian: 'Որ այն շտապ փոստով ուղարկվում է միայն մեկ հասցեատիրոջ:'
      },
      {
        id: 'q86_o3',
        text: 'Que desaparece por completo cada cinco años y se inventa otra nueva.',
        textArmenian: 'Որ այն հինգ տարին մեկ ամբողջությամբ անհետանում է և նորն է ստեղծվում:'
      },
      {
        id: 'q86_o4',
        text: 'Que solo se enseña en universidades extranjeras.',
        textArmenian: 'Որ այն դասավանդվում է միայն արտասահմանյան համալսարաններում:'
      }
    ],
    correctOptionId: 'q86_o1',
    explanation: 'La transmisión generacional es el puente vital que mantiene viva la tradición comunitaria sin necesidad de imprenta.',
    explanationArmenian: 'Սերնդեսերունդ փոխանցումը կենսական կամուրջն է, որը կենդանի է պահում համայնքային ավանդույթը՝ առանց տպագրության:'
  },
  {
    id: 'q87',
    block: 5,
    blockName: 'Literatura popular y culta',
    category: 'Música y danza',
    subtopic: 'Lírica popular cantada',
    difficulty: 'medio',
    question: '¿Por qué la poesía popular tradicional está tan íntimamente unida a la música y al baile?',
    questionArmenian: 'Ինչո՞ւ է ավանդական ժողովրդական պոեզիան այդքան սերտորեն կապված երաժշտության և պարի հետ:',
    options: [
      {
        id: 'q87_o1',
        text: 'Porque nació como acompañamiento del trabajo en el campo, las fiestas del pueblo y las celebraciones colectivas.',
        textArmenian: 'Որովհետև այն ծնվել է որպես դաշտային աշխատանքի, գյուղական տոների և հավաքական տոնակատարությունների ուղեկից:'
      },
      {
        id: 'q87_o2',
        text: 'Porque era obligatorio por decreto real pagar tributos bailando.',
        textArmenian: 'Որովհետև թագավորական հրամանագրով պարտադիր էր հարկերը վճարել պարելով:'
      },
      {
        id: 'q87_o3',
        text: 'Porque nadie sabía hablar sin cantar.',
        textArmenian: 'Որովհետև ոչ ոք չգիտեր խոսել առանց երգելու:'
      },
      {
        id: 'q87_o4',
        text: 'Porque los instrumentos musicales eran gratis en las tiendas.',
        textArmenian: 'Որովհետև երաժշտական գործիքները խանութներում անվճար էին:'
      }
    ],
    correctOptionId: 'q87_o1',
    explanation: 'Las canciones de siembra, siega, vendimia y fiestas patronales se creaban al compás de la faena y de la celebración compartida.',
    explanationArmenian: 'Ցանքի, հնձի, բերքահավաքի և տոնական երգերը ստեղծվում էին աշխատանքի և ընդհանուր տոնակատարության ռիթմին համահունչ:'
  },
  {
    id: 'q88',
    block: 5,
    blockName: 'Literatura popular y culta',
    category: 'Identificación comparativa',
    subtopic: 'Romancero viejo vs Romancero nuevo',
    difficulty: 'dificil',
    question: 'El «Romancero viejo» es popular y anónimo (siglos XIV-XV). Cuando en los siglos XVI y XVII poetas cultos como Góngora y Quevedo escriben romances, esa colección se denomina:',
    questionArmenian: '«Romancero viejo»-ն ժողովրդական է և անանուն (14-15-րդ դդ.): Երբ 16-17-րդ դարերում Գոնգորայի և Կևեդոյի պես դասական բանաստեղծները ռոմանսներ են գրում, այդ ժողովածուն կոչվում է.',
    options: [
      {
        id: 'q88_o1',
        text: 'Romancero nuevo o artístico (romances cultos de autor conocido).',
        textArmenian: 'Romancero nuevo (նոր կամ գեղարվեստական ռոմանսերո՝ հայտնի հեղինակների դասական ռոմանսներ):'
      },
      {
        id: 'q88_o2',
        text: 'Diccionario enciclopédico de romances.',
        textArmenian: 'Ռոմանսների հանրագիտարանային բառարան:'
      },
      {
        id: 'q88_o3',
        text: 'Cantar de gesta primitivo.',
        textArmenian: 'Նախնադարյան հերոսապատում:'
      },
      {
        id: 'q88_o4',
        text: 'Leyenda fantástica de dioses griegos.',
        textArmenian: 'Հունական աստվածների ֆանտաստիկ լեգենդ:'
      }
    ],
    correctOptionId: 'q88_o1',
    explanation: 'Se distingue el Romancero Viejo (popular, oral y anónimo) del Romancero Nuevo (culto, escrito por grandes poetas de los Siglos de Oro).',
    explanationArmenian: 'Տարբերակում ենք Հին ռոմանսերոն (ժողովրդական, բանավոր, անանուն) և Նոր ռոմանսերոն (դասական, Ոսկեդարի մեծ բանաստեղծների կողմից գրված):'
  },
  {
    id: 'q89',
    block: 5,
    blockName: 'Literatura popular y culta',
    category: 'Lenguaje y originalidad',
    subtopic: 'Estética en literatura culta',
    difficulty: 'medio',
    question: '¿Qué busca ante todo un escritor de literatura culta al crear su obra?',
    questionArmenian: 'Ի՞նչ է առաջին հերթին փնտրում դասական գրականության գրողն իր գործը ստեղծելիս:',
    options: [
      {
        id: 'q89_o1',
        text: 'La originalidad artística, el perfeccionamiento del estilo y el reconocimiento de su firma como autor.',
        textArmenian: 'Գեղարվեստական ինքնատիպություն, ոճի կատարելագործում և իր հեղինակային ստորագրության ճանաչում:'
      },
      {
        id: 'q89_o2',
        text: 'Que nadie sepa nunca quién escribió la obra.',
        textArmenian: 'Որպեսզի ոչ ոք երբեք չիմանա, թե ով է գրել գործը:'
      },
      {
        id: 'q89_o3',
        text: 'Que los versos no tengan ningún ritmo ni medida.',
        textArmenian: 'Որպեսզի տողերը չունենան ոչ մի ռիթմ կամ չափ:'
      },
      {
        id: 'q89_o4',
        text: 'Vender periódicos en la calle al amanecer.',
        textArmenian: 'Լուսադեմին փողոցում թերթեր վաճառել:'
      }
    ],
    correctOptionId: 'q89_o1',
    explanation: 'El creador culto aspira a una voz estética personal e intransferible, firmando su creación para la posteridad.',
    explanationArmenian: 'Դասական հեղինակը ձգտում է անհատական և անկրկնելի գեղագիտական ձայնի՝ ստորագրելով իր ստեղծագործությունը գալիք սերունդների համար:'
  },
  {
    id: 'q90',
    block: 5,
    blockName: 'Literatura popular y culta',
    category: 'Pregunta resumen escolar',
    subtopic: 'Cuadro comparativo',
    difficulty: 'dificil',
    question: 'En un examen escolar te piden emparejar: «Popular» y «Culta» con sus rasgos. ¿Cuál es el emparejamiento 100% CORRECTO?',
    questionArmenian: 'Դպրոցական քննության ժամանակ խնդրում են համապատասխանեցնել «Ժողովրդական» և «Դասական» հասկացությունները: Ո՞ր զույգն է 100% ՃԻՇՏ.',
    options: [
      {
        id: 'q90_o1',
        text: 'Popular: Anónima, oral, colectiva, variable. / Culta: Autor conocido, escrita, individual, texto fijo.',
        textArmenian: 'Ժողովրդական՝ Անանուն, բանավոր, հավաքական, փոփոխական: / Դասական՝ Հայտնի հեղինակ, գրավոր, անհատական, ֆիքսված տեքստ:'
      },
      {
        id: 'q90_o2',
        text: 'Popular: Siempre escrita en ordenador. / Culta: Cantada en plazas sin autor.',
        textArmenian: 'Ժողովրդական՝ Միշտ գրված համակարգչով: / Դասական՝ Երգված հրապարակներում առանց հեղինակի:'
      },
      {
        id: 'q90_o3',
        text: 'Popular: Solo de reyes y reinas. / Culta: De campesinos y pastores únicamente.',
        textArmenian: 'Ժողովրդական՝ Միայն թագավորների մասին: / Դասական՝ Միայն գյուղացիների և հովիվների:'
      },
      {
        id: 'q90_o4',
        text: 'Popular y culta son términos sinónimos que significan lo mismo.',
        textArmenian: 'Ժողովրդականը և դասականը հոմանիշներ են, որոնք նույնն են նշանակում:'
      }
    ],
    correctOptionId: 'q90_o1',
    explanation: 'Esta oposición resume a la perfección el núcleo conceptual del tema: oral/escrita, anónima/de autor, cambiante/fija.',
    explanationArmenian: 'Այս հակադրությունը կատարելապես ամփոփում է թեմայի հիմնական միջուկը՝ բանավոր/գրավոր, անանուն/հեղինակով, փոփոխվող/ֆիքսված:'
  },

  // ==========================================
  // BLOQUE 6: EL ROMANCE, LA LEYENDA, EL MITO Y EL CUENTO (20 Preguntas: q91 - q110)
  // ==========================================
  {
    id: 'q91',
    block: 6,
    blockName: 'Romance, leyenda, mito y cuento',
    category: 'El romance',
    subtopic: 'Estructura métrica del romance',
    difficulty: 'facil',
    question: '¿Cuál es la estructura métrica y de rima que define al ROMANCE tradicional?',
    questionArmenian: 'Ո՞րն է այն տաղաչափական և հանգային կառուցվածքը, որը բնորոշում է ավանդական ԻՍՊԱՆԱԿԱՆ ՌՈՄԱՆՍԻՆ (romance):',
    options: [
      {
        id: 'q91_o1',
        text: 'Serie indefinida de versos octosílabos (8 sílabas), con rima asonante en los versos pares y versos impares sueltos (libres).',
        textArmenian: 'Ութավանկ (8 վանկ) տողերի անորոշ շարք՝ զույգ տողերում ասոնանս հանգով և կենտ տողերն ազատ (առանց հանգի):'
      },
      {
        id: 'q91_o2',
        text: 'Catorce versos endecasílabos con rima consonante fija en dos cuartetos y dos tercetos.',
        textArmenian: 'Տասնչորս տասնմեկավանկ տողեր՝ երկու քառատողով և երկու եռատողով:'
      },
      {
        id: 'q91_o3',
        text: 'Tres versos de arte menor sin ritmo ni rima.',
        textArmenian: 'Երեք կարճ տողեր՝ առանց ռիթմի կամ հանգի:'
      },
      {
        id: 'q91_o4',
        text: 'Párrafos continuos de prosa sin cómputo silábico.',
        textArmenian: 'Արձակի շարունակական պարբերություններ՝ առանց վանկերի հաշվարկի:'
      }
    ],
    correctOptionId: 'q91_o1',
    explanation: 'El romance castellano se compone exclusivamente de versos octosílabos (8a), donde riman en asonante los pares (2, 4, 6, 8...) y quedan libres los impares (1, 3, 5, 7...).',
    explanationArmenian: 'Իսպանական ռոմանսը բաղկացած է բացառապես ութավանկ (8) տողերից, որտեղ զույգ տողերը (2, 4, 6, 8...) հանգավորվում են ասոնանսով, իսկ կենտերը մնում են ազատ:'
  },
  {
    id: 'q92',
    block: 6,
    blockName: 'Romance, leyenda, mito y cuento',
    category: 'El romance',
    subtopic: 'Origen histórico del romance',
    difficulty: 'medio',
    question: '¿De dónde proceden históricamente los romances en la literatura española medieval?',
    questionArmenian: 'Պատմականորեն որտեղի՞ց են ծագել ռոմանսները միջնադարյան իսպանական գրականության մեջ:',
    options: [
      {
        id: 'q92_o1',
        text: 'De la fragmentación de los antiguos cantares de gesta épicos, cuando el pueblo memorizaba los episodios más emocionantes.',
        textArmenian: 'Հին էպիկական հերոսապատումների (cantares de gesta) մասնատումից, երբ ժողովուրդն անգիր էր հիշում ամենահուզիչ դրվագները:'
      },
      {
        id: 'q92_o2',
        text: 'De las traducciones directas del teatro japonés.',
        textArmenian: 'Ճապոնական թատրոնի ուղղակի թարգմանություններից:'
      },
      {
        id: 'q92_o3',
        text: 'De las recetas de cocina de los monasterios.',
        textArmenian: 'Վանքերի խոհարարական բաղադրատոմսերից:'
      },
      {
        id: 'q92_o4',
        text: 'De periódicos que se repartían en los castillos.',
        textArmenian: 'Թերթերից, որոնք բաժանվում էին ամրոցներում:'
      }
    ],
    correctOptionId: 'q92_o1',
    explanation: 'Los extensos versos épicos de 16 sílabas con cesura se dividieron en dos hemistiquios de 8 sílabas, dando lugar a los romances.',
    explanationArmenian: '16 վանկանի երկար էպիկական տողերը բաժանվեցին երկու 8 վանկանի կիսատողերի՝ սկիզբ դնելով ռոմանսներին:'
  },
  {
    id: 'q93',
    block: 6,
    blockName: 'Romance, leyenda, mito y cuento',
    category: 'El romance',
    subtopic: 'Rasgos estilísticos del romance',
    difficulty: 'medio',
    question: '¿Qué rasgo narrativo es muy característico de los romances?',
    questionArmenian: 'Ի՞նչ պատմողական հատկանիշ է խիստ բնորոշ ռոմանսներին:',
    options: [
      {
        id: 'q93_o1',
        text: 'El fragmentarismo: suelen comenzar «in media res» (en mitad de la acción) y terminar de forma abierta o misteriosa.',
        textArmenian: 'Հատվածայնությունը (fragmentarismo). դրանք հաճախ սկսվում են գործողության կեսից (in media res) և ավարտվում բաց կամ առեղծվածային:'
      },
      {
        id: 'q93_o2',
        text: 'La inclusión obligatoria de un índice alfabético al inicio.',
        textArmenian: 'Սկզբում այբբենական ցուցիչի պարտադիր ներառումը:'
      },
      {
        id: 'q93_o3',
        text: 'La ausencia total de personajes humanos.',
        textArmenian: 'Մարդկային կերպարների իսպառ բացակայությունը:'
      },
      {
        id: 'q93_o4',
        text: 'Que solo se pueden leer en silencio y a oscuras.',
        textArmenian: 'Որ դրանք կարելի է կարդալ միայն լուռ և մթության մեջ:'
      }
    ],
    correctOptionId: 'q93_o1',
    explanation: 'El romance prescinde de introducciones largas: entra directamente al núcleo del conflicto con dramatismo y diálogo vivo, y a menudo tiene final truncado.',
    explanationArmenian: 'Ռոմանսը խուսափում է երկար ներածություններից. այն միանգամից մտնում է դրամատիկ կոնֆլիկտի մեջ և հաճախ ունենում է բաց/ընդհատված ավարտ:'
  },
  {
    id: 'q94',
    block: 6,
    blockName: 'Romance, leyenda, mito y cuento',
    category: 'La leyenda',
    subtopic: 'Definición de leyenda',
    difficulty: 'facil',
    question: '¿Qué es una LEYENDA?',
    questionArmenian: 'Ի՞նչ է ԼԵԳԵՆԴԸ / ԱՎԱՆԴԱԶՐՈՒՅՑԸ (leyenda):',
    options: [
      {
        id: 'q94_o1',
        text: 'Un relato tradicional basado en un fondo histórico o lugar real concreto, pero enriquecido con elementos fantásticos o sobrenaturales.',
        textArmenian: 'Ավանդական պատմություն՝ հիմնված իրական պատմական փաստի կամ կոնկրետ վայրի վրա, բայց հարստացված ֆանտաստիկ կամ գերբնական տարրերով:'
      },
      {
        id: 'q94_o2',
        text: 'Un texto de química que explica la tabla periódica.',
        textArmenian: 'Քիմիայի տեքստ, որը բացատրում է պարբերական աղյուսակը:'
      },
      {
        id: 'q94_o3',
        text: 'Una noticia de última hora en el telediario.',
        textArmenian: 'Հրատապ լուր հեռուստատեսային նորություններում:'
      },
      {
        id: 'q94_o4',
        text: 'Un poema de amor de catorce versos.',
        textArmenian: 'Տասնչորս տողանի սիրային բանաստեղծություն:'
      }
    ],
    correctOptionId: 'q94_o1',
    explanation: 'La leyenda se ubica en un lugar geográfico identificable (un castillo, un puente, una cueva) y en una época histórica concreta, combinando realidad y fantasía.',
    explanationArmenian: 'Լեգենդը տեղայնացված է կոնկրետ աշխարհագրական վայրում (ամրոց, կամուրջ, քարանձավ) և որոշակի պատմական ժամանակաշրջանում՝ միախառնելով իրականությունն ու երևակայությունը:'
  },
  {
    id: 'q95',
    block: 6,
    blockName: 'Romance, leyenda, mito y cuento',
    category: 'El mito',
    subtopic: 'Definición de mito',
    difficulty: 'facil',
    question: '¿Qué es un MITO?',
    questionArmenian: 'Ի՞նչ է ԱՌԱՍՊԵԼԸ (mito):',
    options: [
      {
        id: 'q95_o1',
        text: 'Una narración sagrada protagonizada por dioses, semidioses y seres sobrenaturales que explica el origen del universo o de fenómenos naturales.',
        textArmenian: 'Սրբազան պատմություն աստվածների, կիսաաստվածների և գերբնական էակների մասին, որը բացատրում է տիեզերքի կամ բնական երևույթների ծագումը:'
      },
      {
        id: 'q95_o2',
        text: 'Un manual de instrucciones para encender una estufa.',
        textArmenian: 'Վառարանը վառելու շահագործման հրահանգների ձեռնարկ:'
      },
      {
        id: 'q95_o3',
        text: 'Una carta formal que se envía al alcalde de la ciudad.',
        textArmenian: 'Պաշտոնական նամակ՝ քաղաքապետին ուղղված:'
      },
      {
        id: 'q95_o4',
        text: 'Un chiste corto para reírse en el recreo.',
        textArmenian: 'Կարճ անեկդոտ՝ դասամիջոցին ծիծաղելու համար:'
      }
    ],
    correctOptionId: 'q95_o1',
    explanation: 'El mito responde a las grandes preguntas de los pueblos antiguos (¿cómo se creó el mundo?, ¿por qué existe el fuego?, ¿qué produce las tormentas?) mediante relatos protagonizados por dioses.',
    explanationArmenian: 'Առասպելը պատասխանում է հին ժողովուրդների մեծ հարցերին (ինչպե՞ս ստեղծվեց աշխարհը, ինչո՞ւ կա կրակ) աստվածների մասնակցությամբ պատմությունների միջոցով:'
  },
  {
    id: 'q96',
    block: 6,
    blockName: 'Romance, leyenda, mito y cuento',
    category: 'Mito frente a Leyenda',
    subtopic: 'Diferencias clave',
    difficulty: 'medio',
    question: '¿Cuál es la diferencia principal entre un MITO y una LEYENDA?',
    questionArmenian: 'Ո՞րն է գլխավոր տարբերությունը ԱՌԱՍՊԵԼԻ (mito) և ԼԵԳԵՆԴԻ (leyenda) միջև:',
    options: [
      {
        id: 'q96_o1',
        text: 'El mito transcurre en un tiempo sagrado e intemporal con dioses creadores; la leyenda se sitúa en un lugar real y época histórica con protagonistas humanos.',
        textArmenian: 'Առասպելը տեղի է ունենում սրբազան, անժամանակյա շրջանում աստվածների մասնակցությամբ, իսկ լեգենդը՝ իրական վայրում և պատմական ժամանակում՝ մարդկային հերոսներով:'
      },
      {
        id: 'q96_o2',
        text: 'El mito siempre se canta en verso octosílabo y la leyenda nunca tiene palabras.',
        textArmenian: 'Առասպելը միշտ երգվում է ութավանկ տողերով, իսկ լեգենդը երբեք բառեր չունի:'
      },
      {
        id: 'q96_o3',
        text: 'La leyenda explica el origen de las galaxias y el mito habla de castillos de España.',
        textArmenian: 'Լեգենդը բացատրում է գալակտիկաների ծագումը, իսկ առասպելը խոսում է Իսպանիայի ամրոցների մասին:'
      },
      {
        id: 'q96_o4',
        text: 'No hay ninguna diferencia, son dos palabras que significan exactamente lo mismo.',
        textArmenian: 'Ոչ մի տարբերություն չկա, դրանք նույն բանն են նշանակում:'
      }
    ],
    correctOptionId: 'q96_o1',
    explanation: 'El mito tiene dimensión cósmica, religiosa y universal (dioses); la leyenda tiene anclaje local, histórico y geográfico humano enriquecido con magia.',
    explanationArmenian: 'Առասպելն ունի տիեզերական, կրոնական բնույթ (աստվածներ), իսկ լեգենդն ունի տեղական, պատմական և աշխարհագրական կապ մարդկանց հետ:'
  },
  {
    id: 'q97',
    block: 6,
    blockName: 'Romance, leyenda, mito y cuento',
    category: 'El cuento',
    subtopic: 'Definición y estructura del cuento',
    difficulty: 'facil',
    question: '¿Qué es un CUENTO y cuál es su estructura narrativa habitual?',
    questionArmenian: 'Ի՞նչ է ՀԵՔԻԱԹԸ / ՊԱՏՄՎԱԾՔԸ (cuento) և ո՞րն է նրա սովորական պատմողական կառուցվածքը:',
    options: [
      {
        id: 'q97_o1',
        text: 'Una narración breve de ficción con pocos personajes y argumento sencillo, estructurada en planteamiento, nudo y desenlace.',
        textArmenian: 'Կարճ գեղարվեստական պատմվածք՝ քիչ կերպարներով և պարզ սյուժեով՝ կազմված սկզբից (planteamiento), հանգույցից (nudo) և հանգուցալուծումից (desenlace):'
      },
      {
        id: 'q97_o2',
        text: 'Un libro de mil páginas con gráficos estadísticos sobre finanzas.',
        textArmenian: 'Հազար էջանոց գիրք՝ ֆինանսների վիճակագրական գրաֆիկներով:'
      },
      {
        id: 'q97_o3',
        text: 'Una obra de teatro sin ningún conflicto entre personajes.',
        textArmenian: 'Թատերական գործ՝ առանց կերպարների միջև որևէ կոնֆլիկտի:'
      },
      {
        id: 'q97_o4',
        text: 'Un poema lírico compuesto solo por adjetivos.',
        textArmenian: 'Քնարական պոեմ՝ կազմված միայն ածականներից:'
      }
    ],
    correctOptionId: 'q97_o1',
    explanation: 'El cuento se caracteriza por su brevedad y concentración de la trama en torno a una sola acción principal con planteamiento, nudo y desenlace.',
    explanationArmenian: 'Պատմվածքը/հեքիաթը բնութագրվում է կարճությամբ և գործողության կենտրոնացումով մեկ գլխավոր գծի շուրջ՝ սկիզբ, հանգույց, ավարտ:'
  },
  {
    id: 'q98',
    block: 6,
    blockName: 'Romance, leyenda, mito y cuento',
    category: 'Cuento popular vs literario',
    subtopic: 'Clases de cuentos',
    difficulty: 'medio',
    question: '¿Qué diferencia a un «cuento popular» de un «cuento literario o de autor»?',
    questionArmenian: 'Ինչո՞վ է «ժողովրդական հեքիաթը» տարբերվում «հեղինակային/գրական հեքիաթից»:',
    options: [
      {
        id: 'q98_o1',
        text: 'El popular es tradicional, anónimo y oral con varias versiones; el literario fue escrito por un autor conocido con texto fijo.',
        textArmenian: 'Ժողովրդականն ավանդական է, անանուն և բանավոր՝ մի քանի տարբերակներով, իսկ հեղինակայինը գրված է հայտնի հեղինակի կողմից՝ ֆիքսված տեքստով:'
      },
      {
        id: 'q98_o2',
        text: 'El popular no tiene personajes y el literario tiene quinientos personajes.',
        textArmenian: 'Ժողովրդականը կերպարներ չունի, իսկ գրականն ունի հինգ հարյուր կերպար:'
      },
      {
        id: 'q98_o3',
        text: 'El literario siempre se cuenta al revés desde el final.',
        textArmenian: 'Գրականը միշտ պատմվում է հակառակ հերթականությամբ՝ վերջից:'
      },
      {
        id: 'q98_o4',
        text: 'Son exactamente idénticos en todos sus aspectos.',
        textArmenian: 'Դրանք բացարձակապես նույնական են բոլոր առումներով:'
      }
    ],
    correctOptionId: 'q98_o1',
    explanation: 'Caperucita Roja tradicional es cuento popular anónimo; un cuento de Julio Cortázar o Andersen es cuento literario de autor.',
    explanationArmenian: 'Ավանդական «Կարմիր գլխարկը» անանուն ժողովրդական հեքիաթ է, իսկ Անդերսենի հեքիաթը՝ հեղինակային գրական:'
  },
  {
    id: 'q99',
    block: 6,
    blockName: 'Romance, leyenda, mito y cuento',
    category: 'Identificación de género 1',
    subtopic: 'Reconocer el mito',
    difficulty: 'medio',
    question: '«El titán Prometeo desafió al dios Zeus robando el fuego sagrado del monte Olimpo para entregárselo a los mortales». Este relato es un:',
    questionArmenian: '«Տիտան Պրոմեթևսը մարտահրավեր նետեց Զևս աստծուն՝ գողանալով Օլիմպոսի սրբազան կրակը մահկանացուներին տալու համար»: Այս պատմությունը հետևյալն է.',
    options: [
      {
        id: 'q99_o1',
        text: 'Mito (explica el origen del fuego humano con dioses y seres mitológicos).',
        textArmenian: 'Առասպել / միֆ (բացատրում է մարդկային կրակի ծագումը աստվածների միջոցով):'
      },
      {
        id: 'q99_o2',
        text: 'Romance octosílabo medieval.',
        textArmenian: 'Միջնադարյան ութավանկ ռոմանս:'
      },
      {
        id: 'q99_o3',
        text: 'Cuento policíaco de detectives.',
        textArmenian: 'Դետեկտիվ ոստիկանական պատմվածք:'
      },
      {
        id: 'q99_o4',
        text: 'Noticia periodística contemporánea.',
        textArmenian: 'Ժամանակակից լրագրողական լուր:'
      }
    ],
    correctOptionId: 'q99_o1',
    explanation: 'Es un mito clásico griego porque sus personajes son dioses y titanes y explica el origen de una facultad humana fundamental (el fuego).',
    explanationArmenian: 'Դասական հունական առասպել է, քանի որ կերպարներն աստվածներ և տիտաններ են, և այն բացատրում է կրակի ծագումը:'
  },
  {
    id: 'q100',
    block: 6,
    blockName: 'Romance, leyenda, mito y cuento',
    category: 'Identificación de género 2',
    subtopic: 'Reconocer la leyenda',
    difficulty: 'medio',
    question: '«En el castillo de San Jorge de Toledo, cada noche de difuntos se oyen los lamentos del caballero Don Rodrigo buscando su espada». Este texto es:',
    questionArmenian: '«Տոլեդոյի Սան Խորխե ամրոցում յուրաքանչյուր ննջեցյալների գիշեր լսվում են ասպետ Դոն Ռոդրիգոյի հեծեծանքները, ով փնտրում է իր թուրը»: Այս տեքստը հետևյալն է.',
    options: [
      {
        id: 'q100_o1',
        text: 'Una leyenda (ubicada en Toledo, con un personaje histórico y elementos sobrenaturales de misterio).',
        textArmenian: 'Լեգենդ / ավանդազրույց (տեղայնացված է Տոլեդոյում՝ պատմական կերպարով և գերբնական առեղծվածով):'
      },
      {
        id: 'q100_o2',
        text: 'Un mito cosmológico sobre el Big Bang.',
        textArmenian: 'Տիեզերական առասպել մեծ պայթյունի մասին:'
      },
      {
        id: 'q100_o3',
        text: 'Un artículo de la constitución española.',
        textArmenian: 'Իսպանիայի սահմանադրության հոդված:'
      },
      {
        id: 'q100_o4',
        text: 'Un trabalenguas para niños.',
        textArmenian: 'Շուտասելուկ երեխաների համար:'
      }
    ],
    correctOptionId: 'q100_o1',
    explanation: 'Se trata de una leyenda porque se localiza en una ciudad real (Toledo), en un edificio concreto (el castillo) y relata sucesos misteriosos y fantasmales.',
    explanationArmenian: 'Սա լեգենդ է, քանի որ գործողությունը տեղի է ունենում իրական քաղաքում (Տոլեդո), կոնկրետ շենքում և պատմում է ուրվականների մասին:'
  },
  {
    id: 'q101',
    block: 6,
    blockName: 'Romance, leyenda, mito y cuento',
    category: 'Métrica en romance',
    subtopic: 'Conteo silábico',
    difficulty: 'dificil',
    question: 'Lee estos dos versos: «Que por mayo era por mayo / cuando hace la calor». Si cuentas las sílabas métricas, ¿cuántas tiene cada verso?',
    questionArmenian: 'Կարդա՛ այս երկու տողերը. «Que por ma-yo e-ra por ma-yo / cuan-do ha-ce la ca-lor»: Եթե հաշվես վանկերը, քանի՞ վանկ ունի յուրաքանչյուր տողը:',
    options: [
      {
        id: 'q101_o1',
        text: '8 sílabas métricas (octosílabos, propios del romance tradicional).',
        textArmenian: '8 տաղաչափական վանկ (ութավանկ՝ ավանդական ռոմանսին բնորոշ):'
      },
      {
        id: 'q101_o2',
        text: '14 sílabas alejandrinas.',
        textArmenian: '14 ալեքսանդրյան վանկ:'
      },
      {
        id: 'q101_o3',
        text: '4 sílabas de arte menor.',
        textArmenian: '4 կարճ վանկ:'
      },
      {
        id: 'q101_o4',
        text: '20 sílabas libres.',
        textArmenian: '20 ազատ վանկ:'
      }
    ],
    correctOptionId: 'q101_o1',
    explanation: 'Verso 1: Que-por-ma-yo e-ra-por-ma-yo = 8 sílabas (con sinalefa yo-e). Verso 2: cuan-do ha-ce-la-ca-lor = 7 + 1 (palabra aguda calor) = 8 sílabas.',
    explanationArmenian: 'Տող 1՝ 8 վանկ (սինալեֆա yo-e): Տող 2՝ 7 + 1 (քանի որ calor վերջին բառը վերջնաշեշտ է՝ aguda) = 8 վանկ: Երկուսն էլ ութավանկ են:'
  },
  {
    id: 'q102',
    block: 6,
    blockName: 'Romance, leyenda, mito y cuento',
    category: 'Rima asonante en romance',
    subtopic: 'Rima asonante frente a consonante',
    difficulty: 'medio',
    question: 'En un romance tradicional, la rima de los versos pares es ASONANTE. ¿Qué significa rima asonante?',
    questionArmenian: 'Ավանդական ռոմանսում զույգ տողերի հանգը ԱՍՈՆԱՆՍ (asonante) է: Ի՞նչ է նշանակում ասոնանս հանգ:',
    options: [
      {
        id: 'q102_o1',
        text: 'Que a partir de la última vocal tónica solo coinciden las vocales (las consonantes son distintas).',
        textArmenian: 'Որ վերջին շեշտված ձայնավորից սկսած համընկնում են միայն ձայնավորները (բաղաձայնները տարբեր են):'
      },
      {
        id: 'q102_o2',
        text: 'Que coinciden exactamente vocales y consonantes en su totalidad.',
        textArmenian: 'Որ ամբողջությամբ և ճշգրիտ համընկնում են ինչպես ձայնավորները, այնպես էլ բաղաձայնները:'
      },
      {
        id: 'q102_o3',
        text: 'Que no rima ninguna palabra y no hay ritmo.',
        textArmenian: 'Որ ոչ մի բառ չի հանգավորվում և ռիթմ չկա:'
      },
      {
        id: 'q102_o4',
        text: 'Que todas las palabras terminan obligatoriamente en la letra zeta.',
        textArmenian: 'Որ բոլոր բառերը պարտադիր ավարտվում են z տառով:'
      }
    ],
    correctOptionId: 'q102_o1',
    explanation: 'Rima asonante (o vocálica): coinciden solo las vocales desde el último acento (ej.: barco / plato -> a-o). En la consonante coinciden vocales y consonantes (coche / noche).',
    explanationArmenian: 'Ասոնանս հանգի դեպքում շեշտված վանկից հետո համընկնում են միայն ձայնավորները (օր.՝ barco / plato -> a-o):'
  },
  {
    id: 'q103',
    block: 6,
    blockName: 'Romance, leyenda, mito y cuento',
    category: 'Clasificación de romances',
    subtopic: 'Temas de los romances',
    difficulty: 'medio',
    question: 'Los romances que narran las hazañas de caballeros medievales, batallas entre moros y cristianos o el Cid Campeador se denominan:',
    questionArmenian: 'Ռոմանսները, որոնք պատմում են միջնադարյան ասպետների սխրանքների, արաբների և քրիստոնյաների մարտերի կամ Սիդ Կամպեադորի մասին, կոչվում են.',
    options: [
      {
        id: 'q103_o1',
        text: 'Romances históricos y épicos (o fronterizos).',
        textArmenian: 'Պատմական և էպիկական (կամ սահմանային) ռոմանսներ:'
      },
      {
        id: 'q103_o2',
        text: 'Romances de ciencia ficción galáctica.',
        textArmenian: 'Տիեզերական գիտաֆանտաստիկ ռոմանսներ:'
      },
      {
        id: 'q103_o3',
        text: 'Romances puramente matemáticos.',
        textArmenian: 'Զուտ մաթեմատիկական ռոմանսներ:'
      },
      {
        id: 'q103_o4',
        text: 'Tragedias teatrales romanas.',
        textArmenian: 'Հռոմեական թատերական ողբերգություններ:'
      }
    ],
    correctOptionId: 'q103_o1',
    explanation: 'El Romancero incluye romances históricos, épicos, fronterizos, novelescos y líricos según su temática.',
    explanationArmenian: 'Ռոմանսերոն ներառում է պատմական, էպիկական, սահմանային, արկածային և քնարական ռոմանսներ:'
  },
  {
    id: 'q104',
    block: 6,
    blockName: 'Romance, leyenda, mito y cuento',
    category: 'Personajes míticos',
    subtopic: 'Mitología y arquetipos',
    difficulty: 'facil',
    question: 'En un mito griego, personajes como Zeus, Poseidón, Hércules o Atenea desempeñan el papel de:',
    questionArmenian: 'Հունական առասպելում այնպիսի կերպարներ, ինչպիսիք են Զևսը, Պոսեյդոնը, Հերակլեսը կամ Աթենասը, հանդես են գալիս որպես.',
    options: [
      {
        id: 'q104_o1',
        text: 'Dioses inmortales y héroes sobrenaturales con poderes extraordinarios.',
        textArmenian: 'Անմահ աստվածներ և գերբնական հերոսներ՝ արտասովոր կարողություններով:'
      },
      {
        id: 'q104_o2',
        text: 'Alcaldes elegidos democráticamente por votación popular.',
        textArmenian: 'Ժողովրդի կողմից ընտրված քաղաքապետեր:'
      },
      {
        id: 'q104_o3',
        text: 'Médicos de hospital militar contemporáneo.',
        textArmenian: 'Ժամանակակից ռազմական հիվանդանոցի բժիշկներ:'
      },
      {
        id: 'q104_o4',
        text: 'Periodistas que investigan el tráfico.',
        textArmenian: 'Լրագրողներ, ովքեր հետաքննում են երթևեկությունը:'
      }
    ],
    correctOptionId: 'q104_o1',
    explanation: 'Los protagonistas del mito encarnan las fuerzas de la naturaleza o arquetipos sagrados superiores al ser humano mortal.',
    explanationArmenian: 'Առասպելի հերոսները մարմնավորում են բնության ուժերը կամ մահկանացու մարդուց վեր սրբազան կերպարները:'
  },
  {
    id: 'q105',
    block: 6,
    blockName: 'Romance, leyenda, mito y cuento',
    category: 'Personajes del cuento',
    subtopic: 'Antagonista y protagonista',
    difficulty: 'facil',
    question: 'En la estructura clásica del cuento popular, el personaje que se opone frontalmente al protagonista para impedir que logre su objetivo se llama:',
    questionArmenian: 'Ժողովրդական հեքիաթի դասական կառուցվածքում գլխավոր հերոսին ընդդիմացող կերպարը, որը խանգարում է նպատակին հասնել, կոչվում է.',
    options: [
      {
        id: 'q105_o1',
        text: 'Antagonista.',
        textArmenian: 'Հակառակորդ / անտագոնիստ (antagonista):'
      },
      {
        id: 'q105_o2',
        text: 'Narrador omnisciente.',
        textArmenian: 'Ամենագետ պատմող:'
      },
      {
        id: 'q105_o3',
        text: 'Ayudante benefactor.',
        textArmenian: 'Բարերար օգնական:'
      },
      {
        id: 'q105_o4',
        text: 'Espectador teatral.',
        textArmenian: 'Թատերական հանդիսատես:'
      }
    ],
    correctOptionId: 'q105_o1',
    explanation: 'El antagonista representa la fuerza opositora (el lobo, la bruja, el ogro, el traidor) frente al protagonista (el héroe o heroína).',
    explanationArmenian: 'Անտագոնիստը հակառակորդ կերպարն է (գայլը, կախարդը, դավաճանը)՝ ի տարբերություն պրոտագոնիստի (գլխավոր հերոսի):'
  },
  {
    id: 'q106',
    block: 6,
    blockName: 'Romance, leyenda, mito y cuento',
    category: 'Finalidad del mito',
    subtopic: 'Función etiológica y explicativa',
    difficulty: 'medio',
    question: '¿Qué función primordial cumplían los mitos para las civilizaciones antiguas?',
    questionArmenian: 'Ի՞նչ հիմնական դեր էին կատարում առասպելները հին քաղաքակրթությունների համար:',
    options: [
      {
        id: 'q106_o1',
        text: 'Explicar de forma sagrada el origen del mundo, las estaciones, el día y la noche y la condición humana.',
        textArmenian: 'Սրբազան ձևով բացատրել աշխարհի, տարվա եղանակների, օրվա ու գիշերվա և մարդկային գոյության ծագումը:'
      },
      {
        id: 'q106_o2',
        text: 'Servir como catálogo de precios para el mercado.',
        textArmenian: 'Ծառայել որպես գների կատալոգ շուկայի համար:'
      },
      {
        id: 'q106_o3',
        text: 'Organizar las elecciones de los alcaldes.',
        textArmenian: 'Կազմակերպել քաղաքապետերի ընտրությունները:'
      },
      {
        id: 'q106_o4',
        text: 'Enseñar a construir barcos de vapor.',
        textArmenian: 'Սովորեցնել շոգենավեր կառուցել:'
      }
    ],
    correctOptionId: 'q106_o1',
    explanation: 'Antes del nacimiento de la ciencia experimental, los mitos eran la respuesta existencial y religiosa para entender la realidad.',
    explanationArmenian: 'Մինչ փորձարարական գիտության ծնունդը՝ առասպելներն իրականությունը հասկանալու կրոնական ու աշխարհայացքային պատասխանն էին:'
  },
  {
    id: 'q107',
    block: 6,
    blockName: 'Romance, leyenda, mito y cuento',
    category: 'Leyendas famosas',
    subtopic: 'Leyendas de Bécquer',
    difficulty: 'dificil',
    question: 'En la literatura española culta del siglo XIX, ¿qué famoso poeta romántico recopiló y recreó leyendas misteriosas como «El monte de las ánimas» o «Los ojos verdes»?',
    questionArmenian: '19-րդ դարի իսպանական դասական գրականության մեջ ո՞ր հայտնի ռոմանտիկ բանաստեղծն է հավաքել և վերստեղծել այնպիսի առեղծվածային լեգենդներ, ինչպիսիք են «Հոգիների բլուրը» կամ «Կանաչ աչքերը»:',
    options: [
      {
        id: 'q107_o1',
        text: 'Gustavo Adolfo Bécquer.',
        textArmenian: 'Գուստավո Ադոլֆո Բեկկերը (Gustavo Adolfo Bécquer):'
      },
      {
        id: 'q107_o2',
        text: 'Miguel de Cervantes.',
        textArmenian: 'Միգել դե Սերվանտեսը:'
      },
      {
        id: 'q107_o3',
        text: 'Federico García Lorca.',
        textArmenian: 'Ֆեդերիկո Գարսիա Լորկան:'
      },
      {
        id: 'q107_o4',
        text: 'Lope de Vega.',
        textArmenian: 'Լոպե դե Վեգան:'
      }
    ],
    correctOptionId: 'q107_o1',
    explanation: 'Gustavo Adolfo Bécquer es el autor cumbre de las «Rimas y Leyendas», donde recrea leyendas populares con maestría literaria culta.',
    explanationArmenian: 'Գուստավո Ադոլֆո Բեկկերը «Հանգեր և Լեգենդներ» գրքի հեղինակն է, որտեղ վարպետորեն վերամշակել է ժողովրդական լեգենդները:'
  },
  {
    id: 'q108',
    block: 6,
    blockName: 'Romance, leyenda, mito y cuento',
    category: 'Moraleja en el cuento',
    subtopic: 'Cuentos con enseñanza y fábulas',
    difficulty: 'facil',
    question: 'La enseñanza ética o lección moral práctica que se desprende al final de muchos cuentos y fábulas populares se denomina:',
    questionArmenian: 'Այն բարոյախրատական ուսուցումը կամ դասը, որը բխում է շատ ժողովրդական հեքիաթների և առակների վերջում, կոչվում է.',
    options: [
      {
        id: 'q108_o1',
        text: 'Moraleja.',
        textArmenian: 'Խրատ / բարոյախոսություն (moraleja):'
      },
      {
        id: 'q108_o2',
        text: 'Hipérbaton.',
        textArmenian: 'Հիպերբատոն:'
      },
      {
        id: 'q108_o3',
        text: 'Asonancia.',
        textArmenian: 'Ասոնանս:'
      },
      {
        id: 'q108_o4',
        text: 'Preposición.',
        textArmenian: 'Նախդիր:'
      }
    ],
    correctOptionId: 'q108_o1',
    explanation: 'La moraleja es la conclusión didáctica explícita o implícita que enseña una norma de convivencia o virtud.',
    explanationArmenian: 'Խրատը (moraleja) ուսուցողական եզրահանգումն է, որը սովորեցնում է վարքագծի կանոն կամ առաքինություն:'
  },
  {
    id: 'q109',
    block: 6,
    blockName: 'Romance, leyenda, mito y cuento',
    category: 'Mito y leyenda: comparación',
    subtopic: 'Ubicación espacio-temporal',
    difficulty: 'medio',
    question: 'Si una historia dice «En el año 1340, en el puente romano de Córdoba ocurrió que...», ¿hacia qué género apunta claramente?',
    questionArmenian: 'Եթե պատմությունն ասում է. «1340 թվականին Կորդոբայի հռոմեական կամրջի վրա տեղի ունեցավ, որ...», ո՞ր ժանրին է այն հստակորեն մատնանշում:',
    options: [
      {
        id: 'q109_o1',
        text: 'A la leyenda (fecha histórica concreta y lugar geográfico real identificado).',
        textArmenian: 'Լեգենդին (կոնկրետ պատմական ամսաթիվ և իրական աշխարհագրական վայր):'
      },
      {
        id: 'q109_o2',
        text: 'Al mito (origen del cosmos antes de la creación).',
        textArmenian: 'Առասպելին (տիեզերքի ծագումը մինչև արարումը):'
      },
      {
        id: 'q109_o3',
        text: 'A una novela policíaca ambientada en la luna.',
        textArmenian: 'Լուսնի վրա տեղի ունեցող դետեկտիվ վեպին:'
      },
      {
        id: 'q109_o4',
        text: 'A un poema lírico puro sin personajes.',
        textArmenian: 'Զուտ քնարական բանաստեղծությանը՝ առանց կերպարների:'
      }
    ],
    correctOptionId: 'q109_o1',
    explanation: 'Las leyendas siempre se localizan en una cronología humana concreta (1340) y un enclave geográfico conocido (puente de Córdoba).',
    explanationArmenian: 'Լեգենդները միշտ տեղայնացվում են կոնկրետ մարդկային ժամանակագրության (1340 թ.) և ճանաչելի աշխարհագրական վայրի (Կորդոբայի կամուրջ) մեջ:'
  },
  {
    id: 'q110',
    block: 6,
    blockName: 'Romance, leyenda, mito y cuento',
    category: 'Pregunta de síntesis de géneros',
    subtopic: 'Cuadro comparativo de los 4 géneros',
    difficulty: 'dificil',
    question: 'Identifica la afirmación VERDADERA sobre estos cuatro géneros tradicionales:',
    questionArmenian: 'Գտի՛ր այս չորս ավանդական ժանրերի վերաբերյալ ՃՇՄԱՐԻՏ պնդումը.',
    options: [
      {
        id: 'q110_o1',
        text: 'El romance se escribe en verso; la leyenda, el mito y el cuento suelen presentarse fundamentalmente en prosa narrativa.',
        textArmenian: 'Ռոմանսը գրվում է չափածո (տողերով), իսկ լեգենդը, առասպելն ու հեքիաթը սովորաբար ներկայացվում են պատմողական արձակով:'
      },
      {
        id: 'q110_o2',
        text: 'El romance tiene 100 versos de 50 sílabas cada uno.',
        textArmenian: 'Ռոմանսն ունի 100 տող՝ յուրաքանչյուրը 50 վանկով:'
      },
      {
        id: 'q110_o3',
        text: 'El mito nunca habla de dioses.',
        textArmenian: 'Առասպելը երբեք չի խոսում աստվածների մասին:'
      },
      {
        id: 'q110_o4',
        text: 'El cuento siempre debe tener autor anónimo obligatoriamente.',
        textArmenian: 'Հեքիաթը պարտադիր պետք է ունենա անանուն հեղինակ:'
      }
    ],
    correctOptionId: 'q110_o1',
    explanation: 'El romance es un género lírico-narrativo en verso octosílabo, mientras que la leyenda, el mito y el cuento son relatos narrativos en prosa.',
    explanationArmenian: 'Ռոմանսը չափածո (ութավանկ) քնարա-պատմողական ժանր է, իսկ լեգենդը, առասպելը և հեքիաթը պատմողական արձակ են:'
  },

  // ==========================================
  // BLOQUE 7: EL LENGUAJE LITERARIO, PROSA Y VERSO (15 Preguntas: q111 - q125)
  // ==========================================
  {
    id: 'q111',
    block: 7,
    blockName: 'Lenguaje literario, prosa y verso',
    category: 'Lenguaje literario',
    subtopic: 'Definición y finalidad estética',
    difficulty: 'facil',
    question: '¿Qué es el LENGUAJE LITERARIO y qué finalidad persigue?',
    questionArmenian: 'Ի՞նչ է ԳԵՂԱՐՎԵՍՏԱԿԱՆ ԼԵԶՈՒՆ (lenguaje literario) և ի՞նչ նպատակ է հետապնդում:',
    options: [
      {
        id: 'q111_o1',
        text: 'Un uso especial del lenguaje con finalidad estética, que busca crear belleza, sugerir emociones y llamar la atención sobre la forma del mensaje.',
        textArmenian: 'Լեզվի հատուկ օգտագործում գեղագիտական նպատակով, որը ձգտում է ստեղծել գեղեցկություն, առաջացնել հույզեր և գրավել ուշադրությունը խոսքի ձևի վրա:'
      },
      {
        id: 'q111_o2',
        text: 'El lenguaje técnico que utilizan los ingenieros de puentes.',
        textArmenian: 'Տեխնիկական լեզուն, որն օգտագործում են կամուրջների ինժեներները:'
      },
      {
        id: 'q111_o3',
        text: 'La forma de hablar abreviada en mensajes de texto móviles.',
        textArmenian: 'Բջջային հաղորդագրությունների կրճատ խոսելաձևը:'
      },
      {
        id: 'q111_o4',
        text: 'Cualquier lista de la compra del supermercado.',
        textArmenian: 'Սուպերմարկետի գնումների ցանկացած ցուցակ:'
      }
    ],
    correctOptionId: 'q111_o1',
    explanation: 'A diferencia del lenguaje cotidiano o científico (práctico y utilitario), el lenguaje literario busca la belleza estética y la sugerencia de emociones mediante recursos de estilo.',
    explanationArmenian: 'Ի տարբերություն առօրյա կամ գիտական լեզվի՝ գեղարվեստական լեզուն ձգտում է գեղագիտական գեղեցկության և հուզականության՝ ոճական հնարքների միջոցով:'
  },
  {
    id: 'q112',
    block: 7,
    blockName: 'Lenguaje literario, prosa y verso',
    category: 'Prosa frente a Verso',
    subtopic: 'Definición del verso',
    difficulty: 'facil',
    question: '¿Qué es el VERSO?',
    questionArmenian: 'Ի՞նչ է ՈՏԱՆԱՎՈՐԻ ՏՈՂԸ (verso):',
    options: [
      {
        id: 'q112_o1',
        text: 'Cada una de las líneas de escritura de un poema, con una medida de sílabas determinada, ritmo musical y con frecuencia rima.',
        textArmenian: 'Բանաստեղծության յուրաքանչյուր գրավոր տողը՝ վանկերի որոշակի չափով, երաժշտական ռիթմով և հաճախ հանգով:'
      },
      {
        id: 'q112_o2',
        text: 'Un libro entero de 500 páginas sin saltos de línea.',
        textArmenian: 'Ամբողջական 500 էջանոց գիրք՝ առանց տողադարձերի:'
      },
      {
        id: 'q112_o3',
        text: 'Un dibujo hecho con acuarelas en la portada.',
        textArmenian: 'Կազմի վրա ջրաներկով արված նկար:'
      },
      {
        id: 'q112_o4',
        text: 'Una conjunción que une oraciones copulativas.',
        textArmenian: 'Շաղկապ, որը միացնում է նախադասություններ:'
      }
    ],
    correctOptionId: 'q112_o1',
    explanation: 'El verso es la unidad rítmica mínima del poema: ocupa una sola línea y se rige por el cómputo silábico y los acentos rítmicos.',
    explanationArmenian: 'Տողը (verso) բանաստեղծության փոքրագույն ռիթմիկ միավորն է. այն զբաղեցնում է մեկ գիծ և առաջնորդվում վանկային չափով ու շեշտերով:'
  },
  {
    id: 'q113',
    block: 7,
    blockName: 'Lenguaje literario, prosa y verso',
    category: 'Prosa frente a Verso',
    subtopic: 'Definición de la prosa',
    difficulty: 'facil',
    question: '¿Qué es la PROSA?',
    questionArmenian: 'Ի՞նչ է ԱՐՁԱԿԸ (prosa):',
    options: [
      {
        id: 'q113_o1',
        text: 'La forma natural de escribir que ocupa todo el renglón de margen a margen, sin número fijo de sílabas ni rima obligatoria.',
        textArmenian: 'Գրելու բնական ձևը, որը զբաղեցնում է ամբողջ տողը լուսանցքից լուսանցք՝ առանց վանկերի ֆիքսված քանակի կամ պարտադիր հանգի:'
      },
      {
        id: 'q113_o2',
        text: 'Un poema de cuatro versos con rima consonante.',
        textArmenian: 'Չորս տողանի բանաստեղծություն՝ համահունչ հանգով:'
      },
      {
        id: 'q113_o3',
        text: 'Una figura retórica que repite sonidos semejantes.',
        textArmenian: 'Հռետորական հնարք, որը կրկնում է նման հնչյուններ:'
      },
      {
        id: 'q113_o4',
        text: 'Un diccionario de sinónimos escolares.',
        textArmenian: 'Դպրոցական հոմանիշների բառարան:'
      }
    ],
    correctOptionId: 'q113_o1',
    explanation: 'La prosa es la estructura discursiva continua de novelas, cuentos, noticias y ensayos, sin sujeción a la métrica versal.',
    explanationArmenian: 'Արձակը վեպերի, պատմվածքների, նորությունների անընդհատ շարադրանքի ձևն է՝ առանց տաղաչափական չափսի սահմանափակման:'
  },
  {
    id: 'q114',
    block: 7,
    blockName: 'Lenguaje literario, prosa y verso',
    category: 'Diferenciación visual y métrica',
    subtopic: 'Cómo distinguir prosa y verso',
    difficulty: 'medio',
    question: 'Visualmente en una página, ¿cómo reconoces inmediatamente un texto en verso frente a uno en prosa?',
    questionArmenian: 'Էջի վրա տեսողականորեն ինչպե՞ս ես անմիջապես ճանաչում չափածո (verso) տեքստը արձակ (prosa) տեքստից:',
    options: [
      {
        id: 'q114_o1',
        text: 'El verso no llega necesariamente hasta el margen derecho (deja espacios en blanco) y se agrupa en estrofas; la prosa llena todo el renglón hasta el margen.',
        textArmenian: 'Տողը պարտադիր չէ, որ հասնի աջ լուսանցքին (թողնում է դատարկ տեղեր) և խմբավորվում է տների (estrofas) մեջ, իսկ արձակը լցնում է ամբողջ տողը:'
      },
      {
        id: 'q114_o2',
        text: 'El verso siempre está impreso con tinta roja.',
        textArmenian: 'Տողը միշտ տպված է կարմիր թանաքով:'
      },
      {
        id: 'q114_o3',
        text: 'La prosa nunca lleva puntos ni comas.',
        textArmenian: 'Արձակը երբեք չունի կետեր կամ ստորակետեր:'
      },
      {
        id: 'q114_o4',
        text: 'No hay ninguna diferencia visual entre ambos.',
        textArmenian: 'Երկուսի միջև ոչ մի տեսողական տարբերություն չկա:'
      }
    ],
    correctOptionId: 'q114_o1',
    explanation: 'La disposición tipográfica del verso crea un dibujo visual característico en el centro de la página con silencios y pausas versales.',
    explanationArmenian: 'Չափածոյի տպագրական դասավորությունը էջի կենտրոնում ստեղծում է բնորոշ պատկեր՝ տողադադարներով:'
  },
  {
    id: 'q115',
    block: 7,
    blockName: 'Lenguaje literario, prosa y verso',
    category: 'Lenguaje cotidiano vs literario',
    subtopic: 'Desviación de la norma',
    difficulty: 'medio',
    question: 'Compara: «Está lloviendo» y «El cielo llora lágrimas de cristal sobre la tierra». ¿Cuál de las dos frases utiliza lenguaje literario y por qué?',
    questionArmenian: 'Համեմատի՛ր. «Está lloviendo» (Անձրևում է) և «El cielo llora lágrimas de cristal sobre la tierra» (Երկինքը բյուրեղյա արցունքներ է թափում հողի վրա): Դրանցից ո՞րն է գեղարվեստական լեզու օգտագործում և ինչո՞ւ:',
    options: [
      {
        id: 'q115_o1',
        text: 'La segunda, porque utiliza recursos retóricos (personificación y metáfora) para embellecer y dar expresividad al mensaje.',
        textArmenian: 'Երկրորդը, քանի որ օգտագործում է հռետորական հնարքներ (անձնավորում և փոխաբերություն)՝ խոսքը գեղեցկացնելու և արտահայտիչ դարձնելու համար:'
      },
      {
        id: 'q115_o2',
        text: 'La primera, porque es más corta y no tiene faltas.',
        textArmenian: 'Առաջինը, որովհետև ավելի կարճ է և սխալներ չունի:'
      },
      {
        id: 'q115_o3',
        text: 'Ninguna de las dos, ambas son frases de un informe meteorológico.',
        textArmenian: 'Ոչ մեկը, երկուսն էլ եղանակի տեսության արտահայտություններ են:'
      },
      {
        id: 'q115_o4',
        text: 'La primera, porque el verbo llover es literario siempre.',
        textArmenian: 'Առաջինը, որովհետև llover բայը միշտ գեղարվեստական է:'
      }
    ],
    correctOptionId: 'q115_o1',
    explanation: '«El cielo llora lágrimas de cristal» transforma un hecho cotidiano en una imagen estética mediante personificación y metáfora poética.',
    explanationArmenian: '«Երկինքը բյուրեղյա արցունքներ է թափում» սովորական փաստը վերածում է գեղագիտական պատկերի՝ անձնավորման և փոխաբերության միջոցով:'
  },
  {
    id: 'q116',
    block: 7,
    blockName: 'Lenguaje literario, prosa y verso',
    category: 'Rima consonante',
    subtopic: 'Definición de rima consonante',
    difficulty: 'facil',
    question: 'En los versos: «Hombres de la tierra / que vais a la guerra», ¿qué tipo de rima se produce entre «tierra» y «guerra»?',
    questionArmenian: '«Hombres de la tierra / que vais a la guerra» տողերում ի՞նչ տեսակի հանգ է առկա «tierra» և «guerra» բառերի միջև:',
    options: [
      {
        id: 'q116_o1',
        text: 'Rima consonante (coinciden exactamente vocales y consonantes: -erra).',
        textArmenian: 'Կատարյալ / համահունչ հանգ (rima consonante)՝ լիովին համընկնում են ձայնավորներն ու բաղաձայնները (-erra):'
      },
      {
        id: 'q116_o2',
        text: 'Rima asonante incompleta.',
        textArmenian: 'Թերի ասոնանս հանգ:'
      },
      {
        id: 'q116_o3',
        text: 'Verso blanco sin ninguna rima.',
        textArmenian: 'Սպիտակ տող՝ առանց որևէ հանգի:'
      },
      {
        id: 'q116_o4',
        text: 'Métrica en prosa desordenada.',
        textArmenian: 'Անկանոն արձակ տաղաչափություն:'
      }
    ],
    correctOptionId: 'q116_o1',
    explanation: 'A partir de la vocal tónica «e», coinciden todos los sonidos vocálicos y consonánticos (-erra), lo que constituye una rima consonante perfecta.',
    explanationArmenian: 'Շեշտված «e» ձայնավորից հետո լիովին համընկնում են բոլոր հնչյունները (-erra), ինչը կատարյալ համահունչ (consonante) հանգ է:'
  },
  {
    id: 'q117',
    block: 7,
    blockName: 'Lenguaje literario, prosa y verso',
    category: 'Arte menor y arte mayor',
    subtopic: 'Clasificación métrica de versos',
    difficulty: 'medio',
    question: 'En la métrica española, ¿cómo se denominan los versos que tienen OCHO SÍLABAS O MENOS?',
    questionArmenian: 'Իսպանական տաղաչափության մեջ ինչպե՞ս են կոչվում այն տողերը, որոնք ունեն ՈՒԹ ՎԱՆԿ ԿԱՄ ԱՎԵԼԻ ՔԻՉ:',
    options: [
      {
        id: 'q117_o1',
        text: 'Versos de arte menor.',
        textArmenian: 'Փոքր արվեստի տողեր (versos de arte menor):'
      },
      {
        id: 'q117_o2',
        text: 'Versos de arte mayor.',
        textArmenian: 'Մեծ արվեստի տողեր (versos de arte mayor):'
      },
      {
        id: 'q117_o3',
        text: 'Versos alejandrinos.',
        textArmenian: 'Ալեքսանդրյան տողեր:'
      },
      {
        id: 'q117_o4',
        text: 'Párrafos subordinados.',
        textArmenian: 'Ստորադաս պարբերություններ:'
      }
    ],
    correctOptionId: 'q117_o1',
    explanation: 'Los versos de 2 a 8 sílabas son de «arte menor» (se indican con letras minúsculas a, b, c). Los de 9 o más sílabas son de «arte mayor» (letras mayúsculas A, B, C).',
    explanationArmenian: '2-ից մինչև 8 վանկ ունեցող տողերը կոչվում են arte menor (փոքր արվեստ): 9 և ավելի վանկ ունեցողները՝ arte mayor (մեծ արվեստ):'
  },
  {
    id: 'q118',
    block: 7,
    blockName: 'Lenguaje literario, prosa y verso',
    category: 'La sinalefa',
    subtopic: 'Recursos métricos: la sinalefa',
    difficulty: 'medio',
    question: 'En el verso «Vi-no a mi ca-sa», ¿qué fenómeno métrico une la vocal final de «Vino» con la vocal «a» en una sola sílaba?',
    questionArmenian: '«Vi-no a mi ca-sa» տողում ո՞ր տաղաչափական երևույթն է «Vino» բառի վերջին ձայնավորը միավորում «a» ձայնավորի հետ մեկ վանկի մեջ:',
    options: [
      {
        id: 'q118_o1',
        text: 'La sinalefa.',
        textArmenian: 'Սինալեֆա (sinalefa):'
      },
      {
        id: 'q118_o2',
        text: 'La diéresis.',
        textArmenian: 'Դիերեզիս (diéresis):'
      },
      {
        id: 'q118_o3',
        text: 'La sinéresis.',
        textArmenian: 'Սիներեզիս (sinéresis):'
      },
      {
        id: 'q118_o4',
        text: 'El hipérbaton.',
        textArmenian: 'Հիպերբատոն:'
      }
    ],
    correctOptionId: 'q118_o1',
    explanation: 'La sinalefa es la unión métrica de la vocal final de una palabra con la vocal inicial de la siguiente, contándose como una única sílaba («no_a»).',
    explanationArmenian: 'Սինալեֆան բառի վերջին ձայնավորի միացումն է հաջորդ բառի սկզբնական ձայնավորի հետ մեկ վանկում («no_a»):'
  },
  {
    id: 'q119',
    block: 7,
    blockName: 'Lenguaje literario, prosa y verso',
    category: 'Regla del acento final',
    subtopic: 'Aguda, llana y esdrújula en el verso',
    difficulty: 'dificil',
    question: 'Si un verso termina en una palabra AGUDA (acentuada en la última sílaba, como «canción» o «reloj»), ¿qué regla métrica se aplica al cómputo de sílabas?',
    questionArmenian: 'Եթե տողն ավարտվում է ՎԵՐՋՆԱՇԵՇՏ բառով (palabra aguda, ինչպես «canción» կամ «reloj»), ո՞ր տաղաչափական կանոնն է կիրառվում վանկերի հաշվարկում:',
    options: [
      {
        id: 'q119_o1',
        text: 'Se suma una sílaba métrica más al total (+1).',
        textArmenian: 'Ընդհանուր քանակին ավելացվում է մեկ վանկ (+1):'
      },
      {
        id: 'q119_o2',
        text: 'Se resta una sílaba al total (-1).',
        textArmenian: 'Ընդհանուր քանակից հանվում է մեկ վանկ (-1):'
      },
      {
        id: 'q119_o3',
        text: 'El verso queda anulado y no se cuenta.',
        textArmenian: 'Տողը չեղարկվում է և չի հաշվվում:'
      },
      {
        id: 'q119_o4',
        text: 'Se multiplica el número de sílabas por dos.',
        textArmenian: 'Վանկերի քանակը բազմապատկվում է երկուսով:'
      }
    ],
    correctOptionId: 'q119_o1',
    explanation: 'Regla del acento final: si termina en aguda, se suma 1 sílaba (+1); si termina en llana, se queda igual; si termina en esdrújula, se resta 1 sílaba (-1).',
    explanationArmenian: 'Վերջին շեշտի կանոնը. եթե ավարտվում է aguda-ով (վերջնաշեշտ)՝ +1 վանկ, եթե llana-ով (նախավերջին)՝ մնում է նույնը, եթե esdrújula-ով (երրորդ վանկ)՝ -1 վանկ:'
  },
  {
    id: 'q120',
    block: 7,
    blockName: 'Lenguaje literario, prosa y verso',
    category: 'Prosa poética',
    subtopic: 'Texto en prosa con lenguaje lírico',
    difficulty: 'medio',
    question: '«Platero es pequeño, peludo, suave; tan blando por fuera, que se diría todo de algodón». Esta obra de Juan Ramón Jiménez está escrita en:',
    questionArmenian: '«Platero es pequeño, peludo, suave...» Խուան Ռամոն Խիմենեսի այս ստեղծագործությունը գրված է հետևյալով.',
    options: [
      {
        id: 'q120_o1',
        text: 'Prosa poética (estructura continua en prosa pero con altísima carga de belleza lírica y recursos).',
        textArmenian: 'Պոետիկ / բանաստեղծական արձակ (արձակ կառուցվածք, բայց բարձրագույն քնարական գեղեցկությամբ և հնարքներով):'
      },
      {
        id: 'q120_o2',
        text: 'Verso alejandrino de catorce sílabas.',
        textArmenian: '14 վանկանի ալեքսանդրյան տող:'
      },
      {
        id: 'q120_o3',
        text: 'Un cantar de gesta con rima asonante.',
        textArmenian: 'Հերոսավեպ՝ ասոնանս հանգով:'
      },
      {
        id: 'q120_o4',
        text: 'Un informe policial de aduanas.',
        textArmenian: 'Մաքսատան ոստիկանական զեկույց:'
      }
    ],
    correctOptionId: 'q120_o1',
    explanation: '«Platero y yo» es el ejemplo maestro de prosa poética: no tiene métrica ni rima, pero sus palabras transmiten pura emoción lírica.',
    explanationArmenian: '«Պլատերոն և ես»-ը պոետիկ արձակի լավագույն օրինակն է. չունի տաղաչափություն կամ հանգ, բայց խոսքերը փոխանցում են մաքուր քնարական հույզ:'
  },
  {
    id: 'q121',
    block: 7,
    blockName: 'Lenguaje literario, prosa y verso',
    category: 'El ritmo en el verso',
    subtopic: 'Componentes del ritmo',
    difficulty: 'medio',
    question: '¿Qué elementos combinados consiguen crear el RITMO musical característico de los textos en verso?',
    questionArmenian: 'Ո՞ր համակցված տարրերն են ստեղծում չափածո տեքստերին բնորոշ երաժշտական ՌԻԹՄԸ (ritmo):',
    options: [
      {
        id: 'q121_o1',
        text: 'La medida regular de las sílabas, la distribución periódica de los acentos, las pausas y la rima.',
        textArmenian: 'Վանկերի կանոնավոր չափը, շեշտերի պարբերական բաշխումը, դադարները և հանգը:'
      },
      {
        id: 'q121_o2',
        text: 'El tamaño de la tipografía y el color del papel.',
        textArmenian: 'Տառատեսակի չափսը և թղթի գույնը:'
      },
      {
        id: 'q121_o3',
        text: 'El número de páginas del libro.',
        textArmenian: 'Գրքի էջերի քանակը:'
      },
      {
        id: 'q121_o4',
        text: 'El precio del libro en las librerías.',
        textArmenian: 'Գրքի գինը գրախանութներում:'
      }
    ],
    correctOptionId: 'q121_o1',
    explanation: 'El ritmo nace de la repetición armónica: acentos que caen a intervalos regulares, versos de igual número de sílabas y ecos sonoros de la rima.',
    explanationArmenian: 'Ռիթմը ծնվում է ներդաշնակ կրկնությունից՝ կանոնավոր ընդմիջումներով շեշտեր, նույնավանկ տողեր և հանգի արձագանքներ:'
  },
  {
    id: 'q122',
    block: 7,
    blockName: 'Lenguaje literario, prosa y verso',
    category: 'La estrofa',
    subtopic: 'Concepto de estrofa',
    difficulty: 'facil',
    question: '¿Qué es una ESTROFA en poesía?',
    questionArmenian: 'Ի՞նչ է ՏՈՒՆԸ (estrofa) պոեզիայում:',
    options: [
      {
        id: 'q122_o1',
        text: 'Un conjunto de versos agrupados con un esquema fijo de rima y medida silábica.',
        textArmenian: 'Տողերի խումբ՝ միավորված հանգի և վանկային չափի որոշակի սխեմայով:'
      },
      {
        id: 'q122_o2',
        text: 'Una sola palabra muy larga separada por comas.',
        textArmenian: 'Շատ երկար մեկ բառ՝ առանձնացված ստորակետերով:'
      },
      {
        id: 'q122_o3',
        text: 'El prólogo de un diccionario de lengua.',
        textArmenian: 'Լեզվի բառարանի նախաբանը:'
      },
      {
        id: 'q122_o4',
        text: 'El índice de capítulos de una novela.',
        textArmenian: 'Վեպի գլուխների բովանդակությունը:'
      }
    ],
    correctOptionId: 'q122_o1',
    explanation: 'La estrofa (pareado, terceto, cuarteto, redondilla...) es la unidad estructural superior al verso que organiza el poema.',
    explanationArmenian: 'Տունը (երկտող, քառատող...) տողից վեր գտնվող կառուցվածքային միավորն է, որը կազմակերպում է բանաստեղծությունը:'
  },
  {
    id: 'q123',
    block: 7,
    blockName: 'Lenguaje literario, prosa y verso',
    category: 'Subjetividad literaria',
    subtopic: 'Función emotiva y estética',
    difficulty: 'medio',
    question: '¿Por qué en los textos literarios abunda la CONNOTACIÓN (significados sugeridos y subjetivos)?',
    questionArmenian: 'Ինչո՞ւ են գեղարվեստական տեքստերում առատորեն հանդիպում ԿՈՆՈՏԱՑԻԱՆԵՐԸ (ենթատեքստային, ակնարկային և սուբյեկտիվ իմաստները):',
    options: [
      {
        id: 'q123_o1',
        text: 'Porque las palabras adquieren múltiples resonancias emocionales, simbólicas y personales más allá de su significado de diccionario.',
        textArmenian: 'Որովհետև բառերը ձեռք են բերում բազմաթիվ հուզական, խորհրդանշական և անձնական իմաստներ՝ բառարանային սահմանումից անդին:'
      },
      {
        id: 'q123_o2',
        text: 'Porque los escritores no conocen el significado exacto de las palabras.',
        textArmenian: 'Որովհետև գրողները չգիտեն բառերի ճշգրիտ իմաստը:'
      },
      {
        id: 'q123_o3',
        text: 'Porque está prohibido usar palabras objetivas en español.',
        textArmenian: 'Որովհետև արգելված է օբյեկտիվ բառեր օգտագործել իսպաներենում:'
      },
      {
        id: 'q123_o4',
        text: 'Para que los libros no puedan ser traducidos.',
        textArmenian: 'Որպեսզի գրքերը հնարավոր չլինի թարգմանել:'
      }
    ],
    correctOptionId: 'q123_o1',
    explanation: 'La denotación es el sentido literal y objetivo (diccionario); la connotación es el conjunto de emociones y sugerencias poéticas que despierta una palabra.',
    explanationArmenian: 'Դենոտացիան բառի ուղիղ օբյեկտիվ իմաստն է (բառարանային), իսկ կոնոտացիան՝ այն հուզական և պոետիկ ակնարկների ամբողջությունը, որ բառն առաջացնում է:'
  },
  {
    id: 'q124',
    block: 7,
    blockName: 'Lenguaje literario, prosa y verso',
    category: 'Métrica: diéresis y sinéresis',
    subtopic: 'Licencias métricas',
    difficulty: 'dificil',
    question: '¿Qué es la DIÉRESIS como licencia métrica en un poema?',
    questionArmenian: 'Ի՞նչ է ԴԻԵՐԵԶԻՍԸ (diéresis)՝ որպես տաղաչափական թույլտվություն բանաստեղծության մեջ:',
    options: [
      {
        id: 'q124_o1',
        text: 'La separación de dos vocales que forman diptongo en dos sílabas métricas distintas (se señala con dos puntos sobre la vocal: rü-i-do).',
        textArmenian: 'Երկհնչյուն կազմող երկու ձայնավորների բաժանումը երկու առանձին տաղաչափական վանկերի (նշվում է տառի վրա երկու կետով՝ rü-i-do):'
      },
      {
        id: 'q124_o2',
        text: 'La unión de cinco versos en uno solo.',
        textArmenian: 'Հինգ տողերի միավորումը մեկի մեջ:'
      },
      {
        id: 'q124_o3',
        text: 'El borrado total de las consonantes de una estrofa.',
        textArmenian: 'Տան բոլոր բաղաձայնների ամբողջական ջնջումը:'
      },
      {
        id: 'q124_o4',
        text: 'Un tipo de rima donde solo riman los números pares.',
        textArmenian: 'Հանգի տեսակ, որտեղ միայն զույգ թվերն են հանգավորվում:'
      }
    ],
    correctOptionId: 'q124_o1',
    explanation: 'La diéresis rompe el diptongo para conseguir una sílaba más en el verso; la sinéresis hace lo contrario (une en diptongo dos vocales en hiato).',
    explanationArmenian: 'Դիերեզիսը քանդում է երկհնչյունը՝ տողում ևս մեկ վանկ ստանալու համար (rü-i-do), իսկ սիներեզիսը հակառակն է անում:'
  },
  {
    id: 'q125',
    block: 7,
    blockName: 'Lenguaje literario, prosa y verso',
    category: 'Pregunta de examen 1.º ESO',
    subtopic: 'Síntesis de Bloque 7',
    difficulty: 'dificil',
    question: 'Lee con atención: «Bajo la luna de plata / suspiraba la doncella». ¿Cuál de las siguientes afirmaciones sobre estos dos versos es INCORRECTA?',
    questionArmenian: 'Ուշադիր կարդա՛. «Bajo la luna de plata / suspiraba la doncella»: Հետևյալ պնդումներից ո՞րն է ՍԽԱԼ այս երկու տողերի վերաբերյալ.',
    options: [
      {
        id: 'q125_o1',
        text: 'Están escritos en prosa científica demostrativa.',
        textArmenian: 'Դրանք գրված են ապացուցողական գիտական արձակով:'
      },
      {
        id: 'q125_o2',
        text: 'Son dos versos octosílabos de arte menor.',
        textArmenian: 'Դրանք փոքր արվեստի երկու ութավանկ տողեր են:'
      },
      {
        id: 'q125_o3',
        text: 'Utilizan lenguaje literario con intención estética.',
        textArmenian: 'Օգտագործում են գեղարվեստական լեզու՝ գեղագիտական նպատակով:'
      },
      {
        id: 'q125_o4',
        text: 'Presentan rima asonante en las vocales a-a (plata / doncella).',
        textArmenian: 'Ունեն ասոնանս հանգ a-a ձայնավորներով (plata / doncella):'
      }
    ],
    correctOptionId: 'q125_o1',
    explanation: 'Es falso que sea prosa científica: es un fragmento lírico en verso octosílabo con finalidad estética y rima asonante.',
    explanationArmenian: 'Սխալ է, որ դա գիտական արձակ է. դա ութավանկ տողերով քնարական հատված է՝ գեղագիտական նպատակով և ասոնանս հանգով:'
  }
];
