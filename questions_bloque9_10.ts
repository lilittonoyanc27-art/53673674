import { Question } from './types';

export const QUESTIONS_BLOQUE_9_10: Question[] = [
  // ==========================================
  // BLOQUE 9: COMPRENSIÓN DE TEXTOS (15 Preguntas: q171 - q185)
  // ==========================================
  {
    id: 'q171',
    block: 9,
    blockName: 'Comprensión de textos',
    category: 'Texto 1: El reloj de arena',
    subtopic: 'Tema principal e idea moral',
    difficulty: 'facil',
    readingTextId: 'texto_1_cuento',
    question: 'En el Texto 1 («El reloj de arena del maestro»), ¿cuál es la enseñanza o idea principal que transmite el relato?',
    questionArmenian: '1-ին տեքստում («Վարպետի ավազե ժամացույցը») ո՞րն է պատմվածքի փոխանցած գլխավոր ուսուցումը կամ գաղափարը:',
    options: [
      {
        id: 'q171_o1',
        text: 'Que el trabajo perfecto requiere paciencia, dedicación y respeto a los tiempos naturales sin prisas imprudentes.',
        textArmenian: 'Որ կատարյալ աշխատանքը պահանջում է համբերություն, նվիրում և բնական ժամանակի նկատմամբ հարգանք՝ առանց անմիտ շտապողականության:'
      },
      {
        id: 'q171_o2',
        text: 'Que los relojes digitales de plástico son más útiles que los de arena.',
        textArmenian: 'Որ պլաստիկե թվային ժամացույցներն ավելի օգտակար են, քան ավազինը:'
      },
      {
        id: 'q171_o3',
        text: 'Que Mateo debía comprar arena dorada en otra ciudad lejana.',
        textArmenian: 'Որ Մատեոն պետք է ոսկեզօծ ավազ գներ մեկ այլ հեռավոր քաղաքում:'
      },
      {
        id: 'q171_o4',
        text: 'Que el maestro despidió a Mateo por romper el cristal.',
        textArmenian: 'Որ վարպետը վռնդեց Մատեոյին ապակին կոտրելու համար:'
      }
    ],
    correctOptionId: 'q171_o1',
    explanation: 'El cuento enseña el valor de la calma en el aprendizaje: la impaciencia de Mateo rompe el reloj, y la sabia frase del maestro resume la moraleja.',
    explanationArmenian: 'Պատմվածքը սովորեցնում է ուսման մեջ հանգստության արժեքը. Մատեոյի անհամբերությունը կոտրում է ժամացույցը, իսկ վարպետի իմաստուն խոսքն ամփոփում է խրատը:'
  },
  {
    id: 'q172',
    block: 9,
    blockName: 'Comprensión de textos',
    category: 'Texto 1: El reloj de arena',
    subtopic: 'Análisis de personaje y acción',
    difficulty: 'medio',
    readingTextId: 'texto_1_cuento',
    question: 'En el Texto 1, ¿por qué decide Mateo agrandar el orificio del cristal y qué consecuencia imprevista ocurre?',
    questionArmenian: '1-ին տեքստում ինչո՞ւ է Մատեոն որոշում մեծացնել ապակու անցքը և ի՞նչ անսպասելի հետևանք է տեղի ունենում:',
    options: [
      {
        id: 'q172_o1',
        text: 'Para trabajar más rápido e impresionar a su maestro, pero la arena cae de golpe y el vidrio se agrieta.',
        textArmenian: 'Ավելի արագ աշխատելու և իր ուսուցչին տպավորելու համար, սակայն ավազը միանգամից թափվում է, և ապակին ճաքում է:'
      },
      {
        id: 'q172_o2',
        text: 'Porque quería limpiar el polvo de la mesa de madera.',
        textArmenian: 'Որովհետև ցանկանում էր մաքրել փայտե սեղանի փոշին:'
      },
      {
        id: 'q172_o3',
        text: 'Para vender el reloj al doble de precio en el mercado.',
        textArmenian: 'Ժամացույցը շուկայում կրկնակի թանկ վաճառելու համար:'
      },
      {
        id: 'q172_o4',
        text: 'Porque el maestro se lo había ordenado por la mañana.',
        textArmenian: 'Որովհետև վարպետն էր առավոտյան նրան այդպես հրամայել:'
      }
    ],
    correctOptionId: 'q172_o1',
    explanation: 'El texto dice explícitamente: «pensando que así el tiempo avanzaría más aprisa... toda la arena cayó de golpe y el frágil vidrio se agrietó».',
    explanationArmenian: 'Տեքստում հստակ նշված է. նա կարծում էր, որ ժամանակն ավելի արագ կանցնի, սակայն ավազը թափվեց, իսկ փխրուն ապակին ճաքեց:'
  },
  {
    id: 'q173',
    block: 9,
    blockName: 'Comprensión de textos',
    category: 'Texto 2: La dama de la Peña',
    subtopic: 'Género de leyenda y elementos',
    difficulty: 'facil',
    readingTextId: 'texto_2_leyenda',
    question: 'En el Texto 2 («La dama de la Peña del Cuervo»), ¿qué elementos justifican con claridad que se trata de una LEYENDA?',
    questionArmenian: '2-րդ տեքստում («Ագռավի ժայռի տիրուհին») ո՞ր տարրերն են հստակ հիմնավորում, որ այն ԼԵԳԵՆԴ (leyenda) է:',
    options: [
      {
        id: 'q173_o1',
        text: 'Está ambientada en un lugar geográfico concreto (Peña del Cuervo), alude a un siglo histórico (siglo XII) e incluye apariciones fantasmales y misterio.',
        textArmenian: 'Տեղայնացված է կոնկրետ աշխարհագրական վայրում (Ագռավի ժայռ), ակնարկում է պատմական դարաշրջան (12-րդ դար) և պարունակում է ուրվականային երևույթներ ու առեղծված:'
      },
      {
        id: 'q173_o2',
        text: 'Está escrita en versos alejandrinos de catorce sílabas.',
        textArmenian: 'Գրված է 14 վանկանի ալեքսանդրյան տողերով:'
      },
      {
        id: 'q173_o3',
        text: 'Explica el nacimiento del fuego cósmico por los dioses del Olimpo.',
        textArmenian: 'Բացատրում է տիեզերական կրակի ծնունդը Օլիմպոսի աստվածների կողմից:'
      },
      {
        id: 'q173_o4',
        text: 'Es un artículo científico publicado en una revista médica.',
        textArmenian: 'Գիտական հոդված է՝ տպագրված բժշկական ամսագրում:'
      }
    ],
    correctOptionId: 'q173_o1',
    explanation: 'La conjunción de localización espacial precisa, trasfondo histórico medieval y el elemento sobrenatural de la dama en pena define la leyenda tradicional.',
    explanationArmenian: 'Ճշգրիտ աշխարհագրական վայրի, միջնադարյան պատմական ֆոնի և ուրվական տիկնոջ գերբնական տարրի համադրությունը սահմանում է ավանդական լեգենդը:'
  },
  {
    id: 'q174',
    block: 9,
    blockName: 'Comprensión de textos',
    category: 'Texto 2: La dama de la Peña',
    subtopic: 'Figuras literarias en el texto',
    difficulty: 'medio',
    readingTextId: 'texto_2_leyenda',
    question: 'En el Texto 2 leemos: «la dama peina sus largos cabellos de plata con un peine de nácar». ¿Qué figura literaria aparece en «cabellos de plata»?',
    questionArmenian: '2-րդ տեքստում կարդում ենք. «la dama peina sus largos cabellos de plata con un peine de nácar»: Ի՞նչ գեղարվեստական հնարք է «cabellos de plata» (արծաթե մազեր) արտահայտությունը:',
    options: [
      {
        id: 'q174_o1',
        text: 'Metáfora (modelo B de A / aposición adjetival: identifica el color canoso y brillante con la plata).',
        textArmenian: 'Փոխաբերություն (ճերմակ և փայլուն մազերը նույնացնում է արծաթի հետ):'
      },
      {
        id: 'q174_o2',
        text: 'Onomatopeya fónica.',
        textArmenian: 'Հնչյունական օնոմատոպեյա:'
      },
      {
        id: 'q174_o3',
        text: 'Polisíndeton.',
        textArmenian: 'Պոլիսինդետոն:'
      },
      {
        id: 'q174_o4',
        text: 'Pleonasmo innecesario.',
        textArmenian: 'Անտեղի պլեոնազմ:'
      }
    ],
    correctOptionId: 'q174_o1',
    explanation: '«Cabellos de plata» traslada metafóricamente el brillo blanco del metal noble a la cabellera de la dama espectral.',
    explanationArmenian: '«Cabellos de plata» փոխաբերորեն ազնիվ մետաղի սպիտակափայլ գույնը վերագրում է տիկնոջ վարսերին:'
  },
  {
    id: 'q175',
    block: 9,
    blockName: 'Comprensión de textos',
    category: 'Texto 3: El vuelo de Ícaro',
    subtopic: 'Comprensión del mito',
    difficulty: 'facil',
    readingTextId: 'texto_3_mito',
    question: 'En el Texto 3 («El vuelo de Ícaro»), ¿cuál es el motivo fundamental por el que Ícaro cae a las profundidades del mar?',
    questionArmenian: '3-րդ տեքստում («Իկարոսի թռիչքը») ո՞րն է այն հիմնական պատճառը, որով Իկարոսն ընկնում է ծովի խորքերը:',
    options: [
      {
        id: 'q175_o1',
        text: 'Desobedeció el sabio consejo de su padre y voló demasiado alto cerca del sol, cuyo calor derritió la cera de sus alas.',
        textArmenian: 'Նա անտեսեց հոր իմաստուն խորհուրդը և թռավ չափազանց բարձր՝ արևին մոտ, որի ջերմությունը հալեցրեց թևերի մոմը:'
      },
      {
        id: 'q175_o2',
        text: 'Un rayo lanzado por Poseidón partió sus alas en dos.',
        textArmenian: 'Պոսեյդոնի արձակած կայծակը երկու մասի բաժանեց նրա թևերը:'
      },
      {
        id: 'q175_o3',
        text: 'Las alas eran demasiado pesadas porque estaban hechas de plomo.',
        textArmenian: 'Թևերը չափազանց ծանր էին, քանի որ կապարից էին պատրաստված:'
      },
      {
        id: 'q175_o4',
        text: 'El rey Minos disparó una flecha desde la torre.',
        textArmenian: 'Մինոս արքան աշտարակից նետ արձակեց:'
      }
    ],
    correctOptionId: 'q175_o1',
    explanation: 'Ícaro sucumbe a su soberbia y fascinación, ignorando la advertencia paterna: el calor del sol derrite la cera y cae al mar.',
    explanationArmenian: 'Իկարոսը տրվում է հրապույրին՝ մոռանալով հոր նախազգուշացումը. արևի տաքությունը հալեցնում է մեղրամոմը, և նա ընկնում է ծովը:'
  },
  {
    id: 'q176',
    block: 9,
    blockName: 'Comprensión de textos',
    category: 'Texto 3: El vuelo de Ícaro',
    subtopic: 'Finalidad etiológica del mito',
    difficulty: 'medio',
    readingTextId: 'texto_3_mito',
    question: 'En la última frase del Texto 3 («aquellas aguas llevan su nombre como recuerdo eterno»), ¿qué función propia del MITO se cumple?',
    questionArmenian: '3-րդ տեքստի վերջին նախադասության մեջ («այդ ջրերը կրում են նրա անունը...») ԱՌԱՍՊԵԼԻՆ (mito) բնորոշ ո՞ր գործառույթն է իրականանում:',
    options: [
      {
        id: 'q176_o1',
        text: 'Función etiológica: explica el origen mitológico del nombre geográfico real de un lugar (el mar Icario).',
        textArmenian: 'Ծագումնաբանական (էթիոլոգիական) գործառույթ՝ բացատրում է իրական աշխարհագրական վայրի անվանման առասպելական ծագումը (Իկարյան ծով):'
      },
      {
        id: 'q176_o2',
        text: 'Función metalingüística de conjugación verbal.',
        textArmenian: 'Բայերի խոնարհման մետալեզվական գործառույթ:'
      },
      {
        id: 'q176_o3',
        text: 'Epanadiplosis fónica.',
        textArmenian: 'Հնչյունական էպանադիպլոսիս:'
      },
      {
        id: 'q176_o4',
        text: 'Publicidad comercial de billetes de barco.',
        textArmenian: 'Նավի տոմսերի առևտրային գովազդ:'
      }
    ],
    correctOptionId: 'q176_o1',
    explanation: 'Los mitos cumplen a menudo una función etiológica, explicando por qué una montaña, un mar o una constelación llevan determinado nombre.',
    explanationArmenian: 'Առասպելները հաճախ կատարում են ծագումնաբանական դեր՝ բացատրելով, թե ինչու է լեռը, ծովը կամ համաստեղությունը կրում տվյալ անունը:'
  },
  {
    id: 'q177',
    block: 9,
    blockName: 'Comprensión de textos',
    category: 'Texto 4: Caminos de la tarde',
    subtopic: 'Prosa o verso y recursos',
    difficulty: 'facil',
    readingTextId: 'texto_4_poema',
    question: '¿En qué forma está escrito el Texto 4 («Caminos de la tarde y el viento») y qué recurso expresivo se aprecia en «Los sauces lloran al río»?',
    questionArmenian: 'Ի՞նչ ձևով է գրված 4-րդ տեքստը («Երեկոյի և քամու ճանապարհները») և ի՞նչ արտահայտչամիջոց է նկատվում «Los sauces lloran al río» (Ուռենիները լաց են լինում գետի վրա) տողում:',
    options: [
      {
        id: 'q177_o1',
        text: 'Está escrito en verso; en «los sauces lloran» hay una personificación (atribuye una cualidad humana a los árboles).',
        textArmenian: 'Գրված է չափածո (տողերով). «los sauces lloran» արտահայտության մեջ առկա է անձնավորում (մարդկային հատկանիշ է վերագրում ծառերին):'
      },
      {
        id: 'q177_o2',
        text: 'Está escrito en prosa científica sin figuras.',
        textArmenian: 'Գրված է գիտական արձակով՝ առանց հնարքների:'
      },
      {
        id: 'q177_o3',
        text: 'Es un diálogo de teatro con dos personajes.',
        textArmenian: 'Թատերական երկխոսություն է երկու կերպարներով:'
      },
      {
        id: 'q177_o4',
        text: 'Es una noticia de última hora de la televisión.',
        textArmenian: 'Հեռուստատեսության հրատապ լուր է:'
      }
    ],
    correctOptionId: 'q177_o1',
    explanation: 'El texto se organiza en líneas rítmicas de verso; atribuir el llanto a los sauces es una hermosa personificación poética.',
    explanationArmenian: 'Տեքստը կազմակերպված է չափածո տողերով, իսկ լաց լինելու հատկանիշը ուռենիներին վերագրելը պոետիկ անձնավորում է:'
  },
  {
    id: 'q178',
    block: 9,
    blockName: 'Comprensión de textos',
    category: 'Texto 4: Caminos de la tarde',
    subtopic: 'Tipo de rima',
    difficulty: 'medio',
    readingTextId: 'texto_4_poema',
    question: 'Observa las palabras finales de los versos del Texto 4: «calladas», «lejanas», «tempranas», «campanas», «descansa». ¿Qué tipo de rima comparten?',
    questionArmenian: 'Ուշադրություն դարձրո՛ւ 4-րդ տեքստի տողավերջի բառերին՝ «calladas», «lejanas», «tempranas», «campanas», «descansa»: Ի՞նչ տեսակի հանգ են նրանք կիսում:',
    options: [
      {
        id: 'q178_o1',
        text: 'Rima asonante en las vocales a-a.',
        textArmenian: 'Ասոնանս հանգ a-a ձայնավորներով:'
      },
      {
        id: 'q178_o2',
        text: 'Rima consonante en -adas.',
        textArmenian: 'Համահունչ կատարյալ հանգ -adas-ով:'
      },
      {
        id: 'q178_o3',
        text: 'No tienen ninguna clase de rima (versos libres).',
        textArmenian: 'Ոչ մի տեսակի հանգ չունեն (ազատ տողեր):'
      },
      {
        id: 'q178_o4',
        text: 'Rima consonante en -or.',
        textArmenian: 'Համահունչ հանգ -or-ով:'
      }
    ],
    correctOptionId: 'q178_o1',
    explanation: 'Desde la última vocal acentuada (ca-lla-das, le-ja-nas, tem-pra-nas) solo coinciden las vocales (a-a), mientras que las consonantes varían (d/n/s); por tanto, la rima es asonante.',
    explanationArmenian: 'Վերջին շեշտված վանկից հետո համընկնում են միայն ձայնավորները (a-a), իսկ բաղաձայնները տարբերվում են. ուրեմն հանգն ասոնանս է:'
  },
  {
    id: 'q179',
    block: 9,
    blockName: 'Comprensión de textos',
    category: 'Texto 5: Romance del caballero',
    subtopic: 'Métrica y género del romance',
    difficulty: 'medio',
    readingTextId: 'texto_5_romance',
    question: 'En el Texto 5 («Romance del caballero y el rosal»), ¿qué rasgos demuestran que es un ROMANCE tradicional?',
    questionArmenian: '5-րդ տեքստում («Ասպետի և վարդենու ռոմանսը») ո՞ր հատկանիշներն են ապացուցում, որ այն ավանդական ՌՈՄԱՆՍ (romance) է:',
    options: [
      {
        id: 'q179_o1',
        text: 'Versos octosílabos (8 sílabas), tono lírico-narrativo medieval, rima asonante en versos pares y diálogo directo.',
        textArmenian: 'Ութավանկ տողեր (8 վանկ), միջնադարյան քնարա-պատմողական ոճ, զույգ տողերում ասոնանս հանգ և ուղղակի երկխոսություն:'
      },
      {
        id: 'q179_o2',
        text: 'Está escrito en prosa de corrido de margen a margen.',
        textArmenian: 'Գրված է արձակով՝ լուսանցքից լուսանցք:'
      },
      {
        id: 'q179_o3',
        text: 'Tiene catorce versos con dos cuartetos y dos tercetos.',
        textArmenian: 'Ունի տասնչորս տող՝ երկու քառատողով և երկու եռատողով:'
      },
      {
        id: 'q179_o4',
        text: 'Es un artículo de prensa con estadísticas del siglo XXI.',
        textArmenian: 'Մամուլի հոդված է 21-րդ դարի վիճակագրությամբ:'
      }
    ],
    correctOptionId: 'q179_o1',
    explanation: 'El metro octosílabo, la rima en pares, el caballero errante y la apelación a la naturaleza viva son señas de identidad del género del romance.',
    explanationArmenian: 'Ութավանկ չափը, զույգ տողերի հանգավորումը, թափառող ասպետը և բնությանը դիմելը ռոմանս ժանրի բնորոշ նշաններն են:'
  },
  {
    id: 'q180',
    block: 9,
    blockName: 'Comprensión de textos',
    category: 'Texto 6: El viejo olivar',
    subtopic: 'Prosa descriptiva y recursos sensoriales',
    difficulty: 'medio',
    readingTextId: 'texto_6_prosa',
    question: 'En el Texto 6 («El viejo olivar al atardecer»), ¿qué figura retórica encontramos en «los viejos olivos extendían sus ramas retorcidas como brazos cansados»?',
    questionArmenian: '6-րդ տեքստում («Հին ձիթենյաց պուրակը մայրամուտին») ի՞նչ հնարք կա «los viejos olivos extendían sus ramas retorcidas como brazos cansados» արտահայտության մեջ:',
    options: [
      {
        id: 'q180_o1',
        text: 'Comparación o símil (compara las ramas con brazos cansados mediante el nexo «como»).',
        textArmenian: 'Համեմատություն (símil)՝ «como» (ինչպես) բառի միջոցով ճյուղերը համեմատում է հոգնած բազուկների հետ:'
      },
      {
        id: 'q180_o2',
        text: 'Onomatopeya animal.',
        textArmenian: 'Կենդանական բնաձայնություն:'
      },
      {
        id: 'q180_o3',
        text: 'Epanadiplosis.',
        textArmenian: 'Էպանադիպլոսիս:'
      },
      {
        id: 'q180_o4',
        text: 'Asíndeton de verbos.',
        textArmenian: 'Բայերի ասինդետոն:'
      }
    ],
    correctOptionId: 'q180_o1',
    explanation: 'La presencia de «como» establece una comparación o símil plástico entre las ramas desnudas de los olivos y brazos fatigados.',
    explanationArmenian: '«Como» (ինչպես) բառի առկայությունը ստեղծում է համեմատություն (símil) ձիթենու ճյուղերի և հոգնած բազուկների միջև:'
  },
  {
    id: 'q181',
    block: 9,
    blockName: 'Comprensión de textos',
    category: 'Texto 7: La danza de la tempestad',
    subtopic: 'Identificación de figuras acumuladas',
    difficulty: 'dificil',
    readingTextId: 'texto_7_figuras',
    question: 'En el Texto 7, observa estos dos versos: 1) «Vuela el viento, vuela el polvo, vuela la hoja seca» / 2) «Y llora la nube, y gime el bosque, y tiembla la solitaria colina». ¿Qué figuras destacan respectivamente en 1 y 2?',
    questionArmenian: '7-րդ տեքստում դիտարկի՛ր այս երկու տողերը. 1) «Vuela el viento, vuela el polvo...» / 2) «Y llora la nube, y gime el bosque...»: Ի՞նչ հնարքներ են առկա համապատասխանաբար 1-ում և 2-ում:',
    options: [
      {
        id: 'q181_o1',
        text: 'En 1 destaca la Anáfora («vuela... vuela... vuela»); en 2 destaca el Polisíndeton («y... y... y...»).',
        textArmenian: '1-ում առկա է Անաֆորա («vuela... vuela...»), իսկ 2-ում՝ Պոլիսինդետոն («y... y... y...»):'
      },
      {
        id: 'q181_o2',
        text: 'En 1 hay pleonasmo y en 2 onomatopeya.',
        textArmenian: '1-ում պլեոնազմ է, իսկ 2-ում՝ օնոմատոպեյա:'
      },
      {
        id: 'q181_o3',
        text: 'En 1 hay hipérbaton y en 2 paronomasia.',
        textArmenian: '1-ում հիպերբատոն է, իսկ 2-ում՝ պարոնոմազիա:'
      },
      {
        id: 'q181_o4',
        text: 'Ambos versos son metáforas impuras sin repeticiones.',
        textArmenian: 'Երկու տողերն էլ ոչ մաքուր փոխաբերություններ են՝ առանց կրկնությունների:'
      }
    ],
    correctOptionId: 'q181_o1',
    explanation: '1 repite la palabra inicial del sintagma («vuela») constituyendo anáfora; 2 repite insistentemente la conjunción copulativa «y» constituyendo polisíndeton.',
    explanationArmenian: '1-ում կրկնվում է «vuela» բառը (անաֆորա), իսկ 2-ում՝ «y» շաղկապը (պոլիսինդետոն):'
  },
  {
    id: 'q182',
    block: 9,
    blockName: 'Comprensión de textos',
    category: 'Texto 7: La danza de la tempestad',
    subtopic: 'Aliteración en tempestad',
    difficulty: 'medio',
    readingTextId: 'texto_7_figuras',
    question: 'En la frase del Texto 7: «El trueno retumba con rugido ronco en la noche oscura», ¿qué figura fónica resalta por la repetición del fonema /r/?',
    questionArmenian: '7-րդ տեքստի «El trueno retumba con rugido ronco en la noche oscura» նախադասության մեջ ի՞նչ հնչյունական հնարք է ընդգծվում /r/ հնչյունի կրկնությամբ:',
    options: [
      {
        id: 'q182_o1',
        text: 'Aliteración.',
        textArmenian: 'Ալիտերացիա:'
      },
      {
        id: 'q182_o2',
        text: 'Onomatopeya.',
        textArmenian: 'Օնոմատոպեյա:'
      },
      {
        id: 'q182_o3',
        text: 'Hipérbaton.',
        textArmenian: 'Հիպերբատոն:'
      },
      {
        id: 'q182_o4',
        text: 'Asíndeton.',
        textArmenian: 'Ասինդետոն:'
      }
    ],
    correctOptionId: 'q182_o1',
    explanation: 'tRueno Retumba Rugido Ronco: la acumulación deliberada del sonido vibrante /r/ imita el fragor del trueno mediante aliteración.',
    explanationArmenian: 'tRueno Retumba Rugido Ronco. /r/ հնչյունի դիտավորյալ կուտակումը նմանակում է որոտի ձայնը ալիտերացիայի միջոցով:'
  },
  {
    id: 'q183',
    block: 9,
    blockName: 'Comprensión de textos',
    category: 'Texto 8: El primer día en el instituto',
    subtopic: 'Evolución psicológica del personaje',
    difficulty: 'facil',
    readingTextId: 'texto_8_narrativo',
    question: 'En el Texto 8 («El primer día en el nuevo instituto»), ¿cómo cambia el estado de ánimo de Sara a lo largo de la narración?',
    questionArmenian: '8-րդ տեքստում («Առաջին օրը նոր դպրոցում») ինչպե՞ս է փոխվում Սառայի հոգեվիճակը պատմվածքի ընթացքում:',
    options: [
      {
        id: 'q183_o1',
        text: 'Pasa de sentir miedo, soledad e incertidumbre a sentirse tranquila, acompañada y esperanzada gracias a la simpatía de una compañera.',
        textArmenian: 'Վախից, միայնությունից և անորոշությունից անցնում է հանգստության, աջակցության և հույսի զգացման՝ շնորհիվ դասընկերուհու բարեհամբույր վերաբերմունքի:'
      },
      {
        id: 'q183_o2',
        text: 'Pasa de estar muy alegre a enfadarse y regresar a su casa.',
        textArmenian: 'Շատ ուրախ վիճակից անցնում է բարկության և վերադառնում տուն:'
      },
      {
        id: 'q183_o3',
        text: 'No cambia en absoluto, permanece dormida en el patio.',
        textArmenian: 'Բոլորովին չի փոխվում, քնած է մնում բակում:'
      },
      {
        id: 'q183_o4',
        text: 'Decide hacerse profesora de matemáticas.',
        textArmenian: 'Որոշում է դառնալ մաթեմատիկայի ուսուցչուհի:'
      }
    ],
    correctOptionId: 'q183_o1',
    explanation: 'Al principio siente un «nudo de incertidumbre»; cuando la chica de pelo rizado le habla amablemente, sus miedos se disipan por completo.',
    explanationArmenian: 'Սկզբում նա զգում է «անորոշության հանգույց», իսկ երբ գանգուր մազերով աղջիկը բարեհամբույր դիմում է իրեն, նրա վախերն իսպառ ցնդում են:'
  },
  {
    id: 'q184',
    block: 9,
    blockName: 'Comprensión de textos',
    category: 'Texto 8: El primer día en el instituto',
    subtopic: 'Metáfora y símil en el relato',
    difficulty: 'medio',
    readingTextId: 'texto_8_narrativo',
    question: 'En el Texto 8 se dice: «los temores de Sara se disiparon como pompas de jabón». ¿Qué expresa esta comparación literaria?',
    questionArmenian: '8-րդ տեքստում ասվում է. «los temores de Sara se disiparon como pompas de jabón»: Ի՞նչ է արտահայտում այս գրական համեմատությունը:',
    options: [
      {
        id: 'q184_o1',
        text: 'La rapidez y fragilidad con que desaparecieron sus miedos, deshaciéndose de forma instantánea y suave como una burbuja de aire.',
        textArmenian: 'Այն արագությունն ու փխրունությունը, որով անհետացան նրա վախերը՝ ակնթարթորեն և մեղմորեն անհետանալով օճառի պղպջակի պես:'
      },
      {
        id: 'q184_o2',
        text: 'Que Sara estaba lavando su mochila con agua jabonosa.',
        textArmenian: 'Որ Սառան օճառաջրով լվանում էր իր ուսապարկը:'
      },
      {
        id: 'q184_o3',
        text: 'Que el instituto estaba lleno de espuma de colores.',
        textArmenian: 'Որ դպրոցը լիքն էր գունավոր փրփուրով:'
      },
      {
        id: 'q184_o4',
        text: 'Que la compañera era fabricante de jabones.',
        textArmenian: 'Որ դասընկերուհին օճառագործ էր:'
      }
    ],
    correctOptionId: 'q184_o1',
    explanation: 'La pompa de jabón representa algo frágil y efímero: el símil subraya que el miedo inicial se esfumó en un abrir y cerrar de ojos.',
    explanationArmenian: 'Օճառի պղպջակը խորհրդանշում է փխրուն և ակնթարթային բան. համեմատությունն ընդգծում է, որ վախը վայրկենապես չքացավ:'
  },
  {
    id: 'q185',
    block: 9,
    blockName: 'Comprensión de textos',
    category: 'Comparación global de textos',
    subtopic: 'Síntesis de géneros leídos',
    difficulty: 'dificil',
    question: 'De los 8 textos leídos, ¿cuáles dos están compuestos estrictamente en VERSO con ritmo métrico?',
    questionArmenian: 'Ընթերցված 8 տեքստերից որո՞նք են գրված խիստ ՉԱՓԱԾՈՅՈՎ (verso)՝ տաղաչափական ռիթմով:',
    options: [
      {
        id: 'q185_o1',
        text: 'El Texto 4 («Caminos de la tarde») y el Texto 5 («Romance del caballero»).',
        textArmenian: '4-րդ տեքստը («Caminos de la tarde») և 5-րդ տեքստը («Romance del caballero»):'
      },
      {
        id: 'q185_o2',
        text: 'El Texto 1 («El reloj de arena») y el Texto 8 («El primer día»).',
        textArmenian: '1-ին տեքստը («El reloj de arena») և 8-րդ տեքստը («El primer día»):'
      },
      {
        id: 'q185_o3',
        text: 'El Texto 2 («La dama de la Peña») y el Texto 6 («El viejo olivar»).',
        textArmenian: '2-րդ տեքստը («La dama de la Peña») և 6-րդ տեքստը («El viejo olivar»):'
      },
      {
        id: 'q185_o4',
        text: 'Todos los ocho textos están escritos en prosa sin excepción.',
        textArmenian: 'Բոլոր ութ տեքստերն էլ առանց բացառության արձակ են:'
      }
    ],
    correctOptionId: 'q185_o1',
    explanation: 'El poema lírico (Texto 4) y el romance tradicional (Texto 5) son composiciones métricas en verso con rima asonante.',
    explanationArmenian: 'Քնարական բանաստեղծությունը (Տեքստ 4) և ավանդական ռոմանսը (Տեքստ 5) չափածո տաղաչափական գործեր են՝ ասոնանս հանգով:'
  },

  // ==========================================
  // BLOQUE 10: ANÁLISIS DE ORACIONES Y REPASO MIXTO (15 Preguntas: q186 - q200)
  // ==========================================
  {
    id: 'q186',
    block: 10,
    blockName: 'Análisis de oraciones y repaso',
    category: 'Análisis sintáctico',
    subtopic: 'Núcleo del sujeto y predicado',
    difficulty: 'facil',
    textSnippet: '«Aquella brillante luna iluminaba todo el valle.»',
    textSnippetArmenian: '«Այն փայլուն լուսինը լուսավորում էր ամբողջ հովիտը:»',
    question: 'En la oración «Aquella brillante luna iluminaba todo el valle», ¿cuáles son los núcleos del Sujeto y del Predicado?',
    questionArmenian: '«Aquella brillante luna iluminaba todo el valle» նախադասության մեջ որո՞նք են Ենթակայի (sujeto) և Ստորոգյալի (predicado) կորիզները (núcleos):',
    options: [
      {
        id: 'q186_o1',
        text: 'Núcleo del Sujeto: «luna» (sustantivo); Núcleo del Predicado: «iluminaba» (verbo).',
        textArmenian: 'Ենթակայի կորիզ՝ «luna» (գոյական), Ստորոգյալի կորիզ՝ «iluminaba» (բայ):'
      },
      {
        id: 'q186_o2',
        text: 'Núcleo del Sujeto: «aquella»; Núcleo del Predicado: «valle».',
        textArmenian: 'Ենթակայի կորիզ՝ «aquella», Ստորոգյալի կորիզ՝ «valle»:'
      },
      {
        id: 'q186_o3',
        text: 'Núcleo del Sujeto: «brillante»; Núcleo del Predicado: «todo».',
        textArmenian: 'Ենթակայի կորիզ՝ «brillante», Ստորոգյալի կորիզ՝ «todo»:'
      },
      {
        id: 'q186_o4',
        text: 'Es una oración impersonal que no tiene sujeto.',
        textArmenian: 'Անդեմ նախադասություն է, որը չունի ենթակա:'
      }
    ],
    correctOptionId: 'q186_o1',
    explanation: 'El sujeto es el sintagma nominal «Aquella brillante luna» cuyo núcleo es el sustantivo «luna». El predicado es verbal («iluminaba todo el valle») con núcleo en el verbo «iluminaba».',
    explanationArmenian: 'Ենթական «Aquella brillante luna»-ն է, որի կորիզը «luna» գոյականն է: Ստորոգյալի կորիզը «iluminaba» բայն է:'
  },
  {
    id: 'q187',
    block: 10,
    blockName: 'Análisis de oraciones y repaso',
    category: 'Integración Gramática + Modalidad',
    subtopic: 'Oración con deseo y análisis morfológico',
    difficulty: 'medio',
    textSnippet: '«¡Ojalá consiga pronto el primer premio!»',
    textSnippetArmenian: '«Երանի՜ շուտով շահի առաջին մրցանակը:»',
    question: 'En «¡Ojalá consiga pronto el primer premio!», ¿qué modalidad oracional y qué categoría tiene la palabra «pronto»?',
    questionArmenian: '«¡Ojalá consiga pronto el primer premio!» նախադասության մեջ նախադասության ի՞նչ եղանակ է և ի՞նչ խոսքի մաս է «pronto» (շուտով) բառը:',
    options: [
      {
        id: 'q187_o1',
        text: 'Modalidad desiderativa; «pronto» es un adverbio de tiempo.',
        textArmenian: 'Իղձ արտահայտող եղանակ (desiderativa). «pronto»-ն ժամանակի մակբայ է:'
      },
      {
        id: 'q187_o2',
        text: 'Modalidad enunciativa afirmativa; «pronto» es un adjetivo calificativo.',
        textArmenian: 'Պատմողական հաստատական եղանակ. «pronto»-ն որակական ածական է:'
      },
      {
        id: 'q187_o3',
        text: 'Modalidad dubitativa; «pronto» es una preposición.',
        textArmenian: 'Կասկած արտահայտող եղանակ. «pronto»-ն նախդիր է:'
      },
      {
        id: 'q187_o4',
        text: 'Modalidad interrogativa indirecta; «pronto» es un pronombre.',
        textArmenian: 'Անուղղակի հարցական եղանակ. «pronto»-ն դերանուն է:'
      }
    ],
    correctOptionId: 'q187_o1',
    explanation: '«Ojalá» marca el deseo (modalidad desiderativa), y «pronto» responde a cuándo se desea la acción, siendo un adverbio invariable de tiempo.',
    explanationArmenian: '«Ojalá»-ն ցույց է տալիս ցանկություն (desiderativa), իսկ «pronto»-ն անփոփոխ ժամանակի մակբայ է:'
  },
  {
    id: 'q188',
    block: 10,
    blockName: 'Análisis de oraciones y repaso',
    category: 'Integración Funciones + Elementos',
    subtopic: 'Canal, código y función apelativa',
    difficulty: 'medio',
    textSnippet: '«Silencio, por favor: apaguen los teléfonos móviles antes de entrar a la sala de cine.»',
    textSnippetArmenian: '«Լռությո՛ւն, խնդրում եմ. անջատե՛ք բջջային հեռախոսները կինոդահլիճ մտնելուց առաջ:»',
    question: 'En el aviso anterior, ¿cuál es la función del lenguaje predominante y cuál es el receptor previsto?',
    questionArmenian: 'Նախորդ ծանուցման մեջ ո՞րն է գերակշռող լեզվական գործառույթը և ո՞վ է նախատեսված ընդունողը (ռեցեպտորը):',
    options: [
      {
        id: 'q188_o1',
        text: 'Función apelativa o conativa; receptores: los espectadores que entran al cine.',
        textArmenian: 'Ապելատիվ (ներգործող) գործառույթ. ընդունողներ՝ կինոթատրոն մտնող հանդիսատեսը:'
      },
      {
        id: 'q188_o2',
        text: 'Función poética; receptor: el proyector de películas.',
        textArmenian: 'Պոետիկ գործառույթ. ընդունող՝ պրոյեկտորը:'
      },
      {
        id: 'q188_o3',
        text: 'Función metalingüística; receptor: el diccionario de la lengua.',
        textArmenian: 'Մետալեզվական գործառույթ. ընդունող՝ բառարանը:'
      },
      {
        id: 'q188_o4',
        text: 'Función referencial pura sin intención de influir.',
        textArmenian: 'Զուտ տեղեկատվական գործառույթ՝ առանց ազդելու մտադրության:'
      }
    ],
    correctOptionId: 'q188_o1',
    explanation: 'El aviso da una instrucción u orden («apaguen los teléfonos») dirigida a regular la conducta del público del cine (función apelativa centrada en el receptor).',
    explanationArmenian: 'Ծանուցումը տալիս է հրահանգ («անջատե՛ք հեռախոսները»)՝ ուղղված հանդիսատեսի վարքը կարգավորելուն (ապելատիվ գործառույթ):'
  },
  {
    id: 'q189',
    block: 10,
    blockName: 'Análisis de oraciones y repaso',
    category: 'Morfología con trampa',
    subtopic: 'Adjetivo frente a Adverbio: Medio',
    difficulty: 'dificil',
    question: 'Observa: 1) «Comí media manzana» / 2) «Mi hermana está medio dormida». ¿Qué categoría gramatical tiene «medio» en cada caso?',
    questionArmenian: 'Դիտարկի՛ր. 1) «Comí media manzana» (Կերա կես խնձոր) / 2) «Mi hermana está medio dormida» (Քույրս կիսաքուն է): Ի՞նչ խոսքի մաս է «medio»-ն յուրաքանչյուր դեպքում:',
    options: [
      {
        id: 'q189_o1',
        text: 'En 1 es determinante numeral fraccionario o partitivo (concuerda con manzana); en 2 es adverbio de cantidad (es invariable y modifica al adjetivo dormida).',
        textArmenian: '1-ում կոտորակային թվական դետերմինատիվ է (համաձայնում է manzana-ի հետ), իսկ 2-ում՝ քանակի մակբայ (անփոփոխ է և լրացնում է dormida ածականին):'
      },
      {
        id: 'q189_o2',
        text: 'En ambos casos es un sustantivo común masculino.',
        textArmenian: 'Երկու դեպքում էլ արական հասարակ գոյական է:'
      },
      {
        id: 'q189_o3',
        text: 'En 1 es adverbio y en 2 es verbo copulativo.',
        textArmenian: '1-ում մակբայ է, իսկ 2-ում՝ հանգույցային բայ:'
      },
      {
        id: 'q189_o4',
        text: 'En ambos casos es una preposición inseparable.',
        textArmenian: 'Երկու դեպքում էլ անբաժանելի նախդիր է:'
      }
    ],
    correctOptionId: 'q189_o1',
    explanation: 'En 1 varía en género («media manzana» / «medio limón»), por lo que es determinante partitivo. En 2 es adverbio invariable: se dice «medio dormida» (nunca *media dormida).',
    explanationArmenian: '1-ում փոխվում է ըստ սեռի (media manzana), ուստի դետերմինատիվ է: 2-ում անփոփոխ մակբայ է. ասում ենք «medio dormida» (երբեք ոչ *media dormida):'
  },
  {
    id: 'q190',
    block: 10,
    blockName: 'Análisis de oraciones y repaso',
    category: 'Morfología con trampa',
    subtopic: 'Este demostrativo: determinante o pronombre',
    difficulty: 'medio',
    textSnippet: '«Este dibujo es muy creativo, pero este es genial.»',
    textSnippetArmenian: '«Այս նկարը շատ ստեղծարար է, բայց սա հիանալի է:»',
    question: 'En la frase anterior, ¿qué función categorial cumple la palabra «este» en su primera aparición y en su segunda aparición?',
    questionArmenian: 'Նախորդ նախադասության մեջ ի՞նչ դեր է կատարում «este» բառն իր առաջին և երկրորդ գործածություններում:',
    options: [
      {
        id: 'q190_o1',
        text: 'El primer «este» es determinante demostrativo (acompaña a dibujo); el segundo «este» es pronombre demostrativo (sustituye a dibujo).',
        textArmenian: 'Առաջին «este»-ն ցուցական դետերմինատիվ է (ուղեկցում է dibujo-ին), իսկ երկրորդ «este»-ն՝ ցուցական դերանուն (փոխարինում է dibujo-ին):'
      },
      {
        id: 'q190_o2',
        text: 'Ambos son pronombres personales átonos.',
        textArmenian: 'Երկուսն էլ անշեշտ անձնական դերանուններ են:'
      },
      {
        id: 'q190_o3',
        text: 'El primero es adverbio y el segundo es adjetivo.',
        textArmenian: 'Առաջինը մակբայ է, իսկ երկրորդը՝ ածական:'
      },
      {
        id: 'q190_o4',
        text: 'Ambos son conjunciones adversativas.',
        textArmenian: 'Երկուսն էլ ներհակական շաղկապներ են:'
      }
    ],
    correctOptionId: 'q190_o1',
    explanation: 'El primer «este» introduce al sustantivo «dibujo»; el segundo aparece aislado como sujeto del segundo verbo («es genial»), funcionando como pronombre.',
    explanationArmenian: 'Առաջին «este»-ն ուղեկցում է «dibujo» գոյականին (դետերմինատիվ), իսկ երկրորդն առանձին է՝ որպես ենթակա (դերանուն):'
  },
  {
    id: 'q191',
    block: 10,
    blockName: 'Análisis de oraciones y repaso',
    category: 'Sintaxis: Atributo',
    subtopic: 'Predicado nominal y atributo',
    difficulty: 'medio',
    textSnippet: '«El nuevo profesor de ciencias parece simpático.»',
    textSnippetArmenian: '«Բնագիտության նոր ուսուցիչը համակրելի է թվում:»',
    question: 'En «El nuevo profesor de ciencias parece simpático», ¿qué función sintáctica desempeña la palabra «simpático»?',
    questionArmenian: '«El nuevo profesor de ciencias parece simpático» նախադասության մեջ ի՞նչ շարահյուսական դեր է կատարում «simpático» բառը:',
    options: [
      {
        id: 'q191_o1',
        text: 'Atributo (complementa al sujeto a través del verbo copulativo «parece»).',
        textArmenian: 'Ստորոգյալի մաս / ատրիբուտ (atributo)՝ լրացնում է ենթակային «parece» հանգույցային բայի միջոցով:'
      },
      {
        id: 'q191_o2',
        text: 'Complemento directo sustituible por «lo».',
        textArmenian: 'Ուղիղ խնդիր:'
      },
      {
        id: 'q191_o3',
        text: 'Complemento circunstancial de lugar.',
        textArmenian: 'Տեղի պարագա:'
      },
      {
        id: 'q191_o4',
        text: 'Núcleo del sujeto elíptico.',
        textArmenian: 'Զեղչված ենթակայի կորիզ:'
      }
    ],
    correctOptionId: 'q191_o1',
    explanation: 'Los verbos copulativos (ser, estar, parecer) exigen un Atributo que concuerde en género y número con el sujeto y exprese su estado o cualidad.',
    explanationArmenian: 'Ser, estar, parecer հանգույցային բայերը պահանջում են Atributo (ստորոգյալի մաս), որը թվով և սեռով համաձայնում է ենթակայի հետ:'
  },
  {
    id: 'q192',
    block: 10,
    blockName: 'Análisis de oraciones y repaso',
    category: 'Morfología: Clasificación de palabras',
    subtopic: 'Análisis por categorías',
    difficulty: 'medio',
    textSnippet: '«Tres pájaros negros volaron rápidamente hacia el bosque.»',
    textSnippetArmenian: '«Երեք սև թռչուններ արագորեն թռան դեպի անտառը:»',
    question: 'En la oración anterior, ¿qué categoría gramatical tienen las palabras «Tres», «rápidamente» y «hacia» respectivamente?',
    questionArmenian: 'Նախորդ նախադասության մեջ ի՞նչ խոսքի մասեր են «Tres», «rápidamente» և «hacia» բառերը համապատասխանաբար:',
    options: [
      {
        id: 'q192_o1',
        text: '«Tres»: determinante numeral cardinal / «rápidamente»: adverbio de modo / «hacia»: preposición.',
        textArmenian: '«Tres»՝ քանակական թվական դետերմինատիվ / «rápidamente»՝ ձևի մակբայ / «hacia»՝ նախդիր:'
      },
      {
        id: 'q192_o2',
        text: '«Tres»: pronombre / «rápidamente»: adjetivo / «hacia»: conjunción.',
        textArmenian: '«Tres»՝ դերանուն / «rápidamente»՝ ածական / «hacia»՝ շաղկապ:'
      },
      {
        id: 'q192_o3',
        text: '«Tres»: sustantivo / «rápidamente»: verbo / «hacia»: interjección.',
        textArmenian: '«Tres»՝ գոյական / «rápidamente»՝ բայ / «hacia»՝ ձայնարկություն:'
      },
      {
        id: 'q192_o4',
        text: 'Todas son adjetivos calificativos.',
        textArmenian: 'Բոլորն էլ որակական ածականներ են:'
      }
    ],
    correctOptionId: 'q192_o1',
    explanation: 'Tres indica cantidad exacta ante un sustantivo (det. numeral); rápidamente termina en -mente y complementa al verbo (adv. de modo); hacia es una preposición.',
    explanationArmenian: 'Tres-ը ցույց է տալիս քանակ (թվական դետերմինատիվ), rápidamente-ն ավարտվում է -mente-ով և լրացնում բային (ձևի մակբայ), hacia-ն նախդիր է:'
  },
  {
    id: 'q193',
    block: 10,
    blockName: 'Análisis de oraciones y repaso',
    category: 'Métrica y rima',
    subtopic: 'Análisis métrico de pareado',
    difficulty: 'medio',
    textSnippet: '«La primavera ha venido,\nnadie sabe cómo ha sido.» (Antonio Machado)',
    textSnippetArmenian: '«Գարունն արդեն եկել է,\nոչ ոք չգիտի, թե ինչպես եղավ:»',
    question: 'En este célebre pareado de Antonio Machado, ¿cuántas sílabas métricas tienen los versos y qué rima presentan?',
    questionArmenian: 'Անտոնիո Մաչադոյի այս հայտնի երկտողում քանի՞ տաղաչափական վանկ ունեն տողերը և ի՞նչ հանգ ունեն:',
    options: [
      {
        id: 'q193_o1',
        text: 'Son dos versos octosílabos (8 sílabas) con rima consonante en -ido (8a 8a).',
        textArmenian: 'Երկու ութավանկ (8) տողեր են՝ -ido համահունչ կատարյալ հանգով (8a 8a):'
      },
      {
        id: 'q193_o2',
        text: 'Son dos versos endecasílabos (11 sílabas) con rima asonante en o-o.',
        textArmenian: 'Երկու տասնմեկավանկ տողեր են՝ o-o ասոնանս հանգով:'
      },
      {
        id: 'q193_o3',
        text: 'Son versos libres de 20 sílabas sin rima.',
        textArmenian: '20 վանկանի ազատ տողեր են՝ առանց հանգի:'
      },
      {
        id: 'q193_o4',
        text: 'Es un fragmento de prosa periodística.',
        textArmenian: 'Լրագրողական արձակի հատված է:'
      }
    ],
    correctOptionId: 'q193_o1',
    explanation: 'La-pri-ma-ve-ra ha-ve-ni-do (8 sílabas con sinalefa ra-ha) / na-die-sa-be-có-mo ha-si-do (8 sílabas con sinalefa mo-ha). Coinciden todas las letras desde la vocal tónica «-ido»: rima consonante.',
    explanationArmenian: 'Երկու տողերն էլ 8 վանկանի են (սինալեֆայով) և ունեն -ido լիարժեք համահունչ (consonante) հանգ:'
  },
  {
    id: 'q194',
    block: 10,
    blockName: 'Análisis de oraciones y repaso',
    category: 'Figuras literarias avanzadas',
    subtopic: 'Reconocer epanadiplosis y metáfora',
    difficulty: 'dificil',
    textSnippet: '«Palabras, solo palabras son tus promesas de viento, palabras.»',
    textSnippetArmenian: '«Խոսքեր, միայն խոսքեր են քո քամու խոստումները, խոսքեր:»',
    question: 'En la frase anterior, al empezar y terminar la oración con la misma palabra «palabras», ¿qué figura retórica fónica se produce?',
    questionArmenian: 'Նախորդ նախադասության մեջ, երբ նախադասությունն սկսվում և ավարտվում է նույն «palabras» բառով, ի՞նչ հնարք է ստեղծվում:',
    options: [
      {
        id: 'q194_o1',
        text: 'Epanadiplosis.',
        textArmenian: 'Էպանադիպլոսիս (epanadiplosis):'
      },
      {
        id: 'q194_o2',
        text: 'Polisíndeton.',
        textArmenian: 'Պոլիսինդետոն:'
      },
      {
        id: 'q194_o3',
        text: 'Asíndeton.',
        textArmenian: 'Ասինդետոն:'
      },
      {
        id: 'q194_o4',
        text: 'Onomatopeya.',
        textArmenian: 'Օնոմատոպեյա:'
      }
    ],
    correctOptionId: 'q194_o1',
    explanation: 'El esquema «Palabras ... palabras» cerrando y abriendo la frase es la definición canónica de epanadiplosis.',
    explanationArmenian: '«Palabras ... palabras» սխեման՝ խոսքը նույն բառով բացելն ու փակելը, էպանադիպլոսիսի կանոնական սահմանումն է:'
  },
  {
    id: 'q195',
    block: 10,
    blockName: 'Análisis de oraciones y repaso',
    category: 'Morfosintaxis: Preposiciones completas',
    subtopic: 'Localizar preposiciones en texto',
    difficulty: 'medio',
    textSnippet: '«Viajamos desde Madrid hasta Sevilla en tren durante la noche.»',
    textSnippetArmenian: '«Մենք Մադրիդից մինչև Սևիլյա ճանապարհորդեցինք գնացքով՝ գիշերվա ընթացքում:»',
    question: '¿Cuáles son TODAS las preposiciones presentes en la oración «Viajamos desde Madrid hasta Sevilla en tren durante la noche»?',
    questionArmenian: 'Որո՞նք են ԲՈԼՈՐ նախդիրները, որոնք առկա են այս նախադասության մեջ:',
    options: [
      {
        id: 'q195_o1',
        text: 'Desde, hasta, en, durante.',
        textArmenian: 'Desde, hasta, en, durante:'
      },
      {
        id: 'q195_o2',
        text: 'Viajamos, tren, noche.',
        textArmenian: 'Viajamos, tren, noche:'
      },
      {
        id: 'q195_o3',
        text: 'Madrid, Sevilla, tren.',
        textArmenian: 'Madrid, Sevilla, tren:'
      },
      {
        id: 'q195_o4',
        text: 'Solo la palabra «hasta».',
        textArmenian: 'Միայն «hasta» բառը:'
      }
    ],
    correctOptionId: 'q195_o1',
    explanation: '«Desde», «hasta», «en» y «durante» pertenecen a la lista oficial de preposiciones del español.',
    explanationArmenian: '«Desde», «hasta», «en» և «durante» բառերը պատկանում են իսպաներենի նախդիրների պաշտոնական ցանկին:'
  },
  {
    id: 'q196',
    block: 10,
    blockName: 'Análisis de oraciones y repaso',
    category: 'Diferenciación sintáctica de pronombres',
    subtopic: 'Pronombres demostrativos neutros',
    difficulty: 'medio',
    textSnippet: '«Esto no me gusta nada.»',
    textSnippetArmenian: '«Սա ինձ ամենևին դուր չի գալիս:»',
    question: 'En la frase «Esto no me gusta nada», ¿por qué «Esto» es SIEMPRE un pronombre y nunca puede ser determinante?',
    questionArmenian: '«Esto no me gusta nada» նախադասության մեջ ինչո՞ւ «Esto»-ն ՄԻՇՏ դերանուն է և երբեք չի կարող լինել դետերմինատիվ:',
    options: [
      {
        id: 'q196_o1',
        text: 'Porque las formas demostrativas neutras (esto, eso, aquello) no tienen plural ni acompañan jamás a un sustantivo, solo sustituyen ideas o hechos.',
        textArmenian: 'Որովհետև ցուցական չեզոք ձևերը (esto, eso, aquello) չունեն հոգնակի և երբեք չեն ուղեկցում գոյականի, այլ միայն փոխարինում են գաղափարների կամ փաստերի:'
      },
      {
        id: 'q196_o2',
        text: 'Porque se escribe con cuatro letras.',
        textArmenian: 'Որովհետև գրվում է չորս տառով:'
      },
      {
        id: 'q196_o3',
        text: 'Porque es una interjección impropia.',
        textArmenian: 'Որովհետև ածանցյալ ձայնարկություն է:'
      },
      {
        id: 'q196_o4',
        text: 'Es falso: en español existe «el esto libro».',
        textArmenian: 'Սխալ է. իսպաներենում գոյություն ունի «el esto libro»:'
      }
    ],
    correctOptionId: 'q196_o1',
    explanation: 'Los demostrativos neutros (esto, eso, aquello) son exclusivamente pronombres; en español no existen sustantivos de género neutro a los que pudieran acompañar como determinantes.',
    explanationArmenian: 'Չեզոք ցուցականները (esto, eso, aquello) բացառապես դերանուններ են, քանի որ իսպաներենում չկան չեզոք սեռի գոյականներ, որոնց նրանք կարողանային ուղեկցել:'
  },
  {
    id: 'q197',
    block: 10,
    blockName: 'Análisis de oraciones y repaso',
    category: 'Pregunta de repaso de literatura',
    subtopic: 'Comparación global de mito y leyenda',
    difficulty: 'medio',
    question: 'Si un texto narra cómo la diosa Perséfone fue raptada por Hades al inframundo provocando la llegada del invierno sobre la faz de la tierra, se trata de:',
    questionArmenian: 'Եթե տեքստը պատմում է, թե ինչպես Հադես աստվածը Պերսեֆոնե աստվածուհուն առևանգեց ստորգետնյա աշխարհ՝ դրանով իսկ երկրի վրա ձմեռ առաջացնելով, դա հետևյալն է.',
    options: [
      {
        id: 'q197_o1',
        text: 'Un mito (explica el origen del cambio de estaciones a través de dioses y mitología clásica).',
        textArmenian: 'Առասպել / միֆ (բացատրում է տարվա եղանակների փոփոխության ծագումը աստվածների միջոցով):'
      },
      {
        id: 'q197_o2',
        text: 'Una leyenda histórica medieval española.',
        textArmenian: 'Իսպանական միջնադարյան պատմական լեգենդ:'
      },
      {
        id: 'q197_o3',
        text: 'Un romance fronterizo de catorce versos.',
        textArmenian: 'Սահմանային ռոմանս:'
      },
      {
        id: 'q197_o4',
        text: 'Un cuento popular anónimo de risa.',
        textArmenian: 'Զավեշտալի ժողովրդական հեքիաթ:'
      }
    ],
    correctOptionId: 'q197_o1',
    explanation: 'El rapto de Perséfone es el mito griego clásico que explica el ciclo anual de la naturaleza y el invierno.',
    explanationArmenian: 'Պերսեֆոնեի առևանգումը դասական հունական առասպել է, որը բացատրում է բնության տարեկան ցիկլը և ձմռան առաջացումը:'
  },
  {
    id: 'q198',
    block: 10,
    blockName: 'Análisis de oraciones y repaso',
    category: 'Pregunta de falso o verdadero global',
    subtopic: 'Discriminación de conceptos 1.º ESO',
    difficulty: 'dificil',
    question: 'Señala cuál de las siguientes afirmaciones es la ÚNICA VERDADERA:',
    questionArmenian: 'Նշի՛ր, թե հետևյալ պնդումներից ո՛րն է ՄԻԱԿ ՃՇՄԱՐԻՏԸ.',
    options: [
      {
        id: 'q198_o1',
        text: 'El romance tradicional está compuesto por versos octosílabos con rima asonante en los versos pares, quedando libres los impares.',
        textArmenian: 'Ավանդական ռոմանսը բաղկացած է ութավանկ տողերից՝ զույգ տողերում ասոնանս հանգով, իսկ կենտերը մնում են ազատ:'
      },
      {
        id: 'q198_o2',
        text: 'El adverbio es una categoría gramatical variable que siempre concuerda en plural con el verbo.',
        textArmenian: 'Մակբայը փոփոխական խոսքի մաս է, որը միշտ համաձայնում է բայի հետ հոգնակի թվով:'
      },
      {
        id: 'q198_o3',
        text: 'La función metalingüística tiene como elemento central el canal telefónico.',
        textArmenian: 'Մետալեզվական գործառույթի կենտրոնական տարրը հեռախոսային կապուղին է:'
      },
      {
        id: 'q198_o4',
        text: 'El hipérbaton consiste en inventar sonidos onomatopéyicos de animales.',
        textArmenian: 'Հիպերբատոնը կենդանիների բնաձայնական հնչյուններ հորինելն է:'
      }
    ],
    correctOptionId: 'q198_o1',
    explanation: 'Solo A es verdadera. B es falsa (el adverbio es invariable); C es falsa (se centra en el código); D es falsa (el hipérbaton altera el orden de las palabras).',
    explanationArmenian: 'Միայն A-ն է ճշմարիտ: B-ն սխալ է (մակբայն անփոփոխ է), C-ն սխալ է (կենտրոնանում է կոդի վրա), D-ն սխալ է (հիպերբատոնը շարադասության խախտումն է):'
  },
  {
    id: 'q199',
    block: 10,
    blockName: 'Análisis de oraciones y repaso',
    category: 'Análisis morfosintáctico de perífrasis',
    subtopic: 'Perífrasis verbal y adverbios',
    difficulty: 'medio',
    textSnippet: '«Los valientes alumnos deben estudiar diariamente para el examen.»',
    textSnippetArmenian: '«Քաջարի աշակերտները պետք է ամեն օր սովորեն քննության համար:»',
    question: 'En la frase anterior, ¿qué categoría tiene la palabra «diariamente» y qué función cumple?',
    questionArmenian: 'Նախորդ նախադասության մեջ ի՞նչ խոսքի մաս է «diariamente» բառը և ի՞նչ դեր է կատարում:',
    options: [
      {
        id: 'q199_o1',
        text: 'Adverbio de tiempo (indica frecuencia temporal y complementa a la perífrasis deben estudiar).',
        textArmenian: 'Ժամանակի մակբայ (ցույց է տալիս ժամանակային հաճախականություն և լրացնում է «պետք է սովորեն» բային):'
      },
      {
        id: 'q199_o2',
        text: 'Sustantivo común abstracto.',
        textArmenian: 'Վերացական հասարակ գոյական:'
      },
      {
        id: 'q199_o3',
        text: 'Adjetivo calificativo femenino.',
        textArmenian: 'Իգական որակական ածական:'
      },
      {
        id: 'q199_o4',
        text: 'Preposición simple.',
        textArmenian: 'Պարզ նախդիր:'
      }
    ],
    correctOptionId: 'q199_o1',
    explanation: 'Las palabras terminadas en «-mente» derivadas de adjetivos temporales son adverbios de tiempo.',
    explanationArmenian: 'Ածականներից կազմված «-mente» վերջավորությամբ բառերը ժամանակի մակբայներ են:'
  },
  {
    id: 'q200',
    block: 10,
    blockName: 'Análisis de oraciones y repaso',
    category: 'Pregunta cumbre del examen',
    subtopic: 'Integración final de conceptos de 1.º ESO',
    difficulty: 'dificil',
    textSnippet: '«¡Dime pronto, amigo mío, si volverán las campanas a sonar en la colina!»',
    textSnippetArmenian: '«Ասա՛ ինձ շուտով, ի՛մ բարեկամ, արդյոք զանգերը կրկին կհնչե՞ն բլրի վրա:»',
    question: 'En esta oración final de síntesis: «¡Dime pronto, amigo mío, si volverán las campanas a sonar en la colina!», ¿cuál es la descripción lingüística más completa y acertada?',
    questionArmenian: 'Այս ամփոփիչ նախադասության մեջ ո՞րն է առավել ամբողջական և ճշգրիտ լեզվաբանական նկարագրությունը.',
    options: [
      {
        id: 'q200_o1',
        text: 'Contiene una orden y vocativo (función apelativa y modalidad exhortativa con interrogación indirecta «si volverán...»), un hipérbaton («a sonar en la colina») y léxico poético.',
        textArmenian: 'Պարունակում է հրաման և կոչական (ապելատիվ գործառույթ և հորդորական եղանակ «si volverán...» անուղղակի հարցումով), հիպերբատոն և պոետիկ բառապաշար:'
      },
      {
        id: 'q200_o2',
        text: 'Es un texto científico puramente referencial sin ningún emisor ni receptor.',
        textArmenian: 'Զուտ տեղեկատվական գիտական տեքստ է՝ առանց հաղորդողի կամ ընդունողի:'
      },
      {
        id: 'q200_o3',
        text: 'Es una leyenda del siglo catorce escrita en lengua inglesa.',
        textArmenian: '14-րդ դարի լեգենդ է՝ գրված անգլերենով:'
      },
      {
        id: 'q200_o4',
        text: 'Solo contiene preposiciones y no tiene ningún verbo.',
        textArmenian: 'Պարունակում է միայն նախդիրներ և ոչ մի բայ չունի:'
      }
    ],
    correctOptionId: 'q200_o1',
    explanation: 'Integra todos los grandes bloques: intención apelativa (apela al receptor «amigo mío» y ordena «dime»), modalidad exhortativa con subordinada interrogativa indirecta total («si volverán...»), e inversión de complementos.',
    explanationArmenian: 'Միավորում է բոլոր մեծ բլոկները՝ ապելատիվ նպատակ (դիմում է «amigo mío»-ին և հրամայում «dime»), հորդորական եղանակ անուղղակի հարցումով և շարադասության խախտումով:'
  }
];
