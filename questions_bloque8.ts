import { Question } from './types';

export const QUESTIONS_BLOQUE_8: Question[] = [
  // ==========================================
  // BLOQUE 8: LAS FIGURAS LITERARIAS (45 Preguntas: q126 - q170)
  // ==========================================
  // --- NIVEL FÓNICO (Aliteración, Onomatopeya, Paronomasia, Epanadiplosis) ---
  {
    id: 'q126',
    block: 8,
    blockName: 'Figuras literarias',
    category: 'Nivel fónico',
    subtopic: 'Aliteración: concepto y reconocimiento',
    difficulty: 'facil',
    textSnippet: '«En el silencio solo se escuchaba un susurro de abejas que sonaba.» (Garcilaso)',
    textSnippetArmenian: '«Լռության մեջ միայն լսվում էր մեղուների մի շշուկ, որ հնչում էր:»',
    question: 'En los célebres versos de Garcilaso de la Vega, ¿qué figura retórica fónica se produce con la reiteración insistente del fonema /s/?',
    questionArmenian: 'Գարսիլասո դե լա Վեգայի հայտնի տողերում ի՞նչ հնչյունական հռետորական հնարք է ստեղծվում /s/ հնչյունի համառ կրկնությամբ:',
    options: [
      {
        id: 'q126_o1',
        text: 'Aliteración (repite el sonido suave /s/ para evocar el zumbido de las abejas).',
        textArmenian: 'Ալիտերացիա (հնչյունակրկնություն)՝ /s/ մեղմ հնչյունի կրկնություն՝ մեղուների բզզոցը նմանակելու համար:'
      },
      {
        id: 'q126_o2',
        text: 'Hipérbaton sintáctico.',
        textArmenian: 'Շարահյուսական հիպերբատոն:'
      },
      {
        id: 'q126_o3',
        text: 'Asíndeton de verbos.',
        textArmenian: 'Բայերի ասինդետոն:'
      },
      {
        id: 'q126_o4',
        text: 'Metáfora pura.',
        textArmenian: 'Մաքուր փոխաբերություն:'
      }
    ],
    correctOptionId: 'q126_o1',
    explanation: 'La aliteración consiste en la repetición voluntaria de un mismo sonido o fonema para producir un efecto acústico o sensorial.',
    explanationArmenian: 'Ալիտերացիան միևնույն հնչյունի դիտավորյալ կրկնությունն է՝ լսողական կամ զգայական տպավորություն ստեղծելու համար:'
  },
  {
    id: 'q127',
    block: 8,
    blockName: 'Figuras literarias',
    category: 'Nivel fónico',
    subtopic: 'Onomatopeya: definición y distinción',
    difficulty: 'facil',
    textSnippet: '«El tic-tac del viejo reloj rompía el silencio de la medianoche.»',
    textSnippetArmenian: '«Հին ժամացույցի տիկ-տակը խախտում էր կեսգիշերվա լռությունը:»',
    question: 'En la frase anterior, la palabra «tic-tac» es un ejemplo inequívoco de:',
    questionArmenian: 'Նախորդ նախադասության մեջ «tic-tac» բառը հետևյալի անհերքելի օրինակն է.',
    options: [
      {
        id: 'q127_o1',
        text: 'Onomatopeya (palabra que imita el sonido o ruido de una realidad extralingüística).',
        textArmenian: 'Բնաձայնություն (օնոմատոպեյա)՝ բառ, որն ընդօրինակում է իրականության ձայնը կամ աղմուկը:'
      },
      {
        id: 'q127_o2',
        text: 'Epanadiplosis.',
        textArmenian: 'Էպանադիպլոսիս:'
      },
      {
        id: 'q127_o3',
        text: 'Polisíndeton.',
        textArmenian: 'Պոլիսինդետոն:'
      },
      {
        id: 'q127_o4',
        text: 'Pleonasmo gramatical.',
        textArmenian: 'Քերականական պլեոնազմ:'
      }
    ],
    correctOptionId: 'q127_o1',
    explanation: 'La onomatopeya es la creación o uso de una palabra cuya pronunciación imita directamente un sonido real (tic-tac, guau, miau, zas, bum).',
    explanationArmenian: 'Բնաձայնությունը (օնոմատոպեյա) բառի ստեղծումն ու գործածումն է, որի հնչողությունն ուղղակիորեն ընդօրինակում է իրական ձայն (տիկ-տակ, հաֆ, մյաու):'
  },
  {
    id: 'q128',
    block: 8,
    blockName: 'Figuras literarias',
    category: 'Nivel fónico',
    subtopic: 'Aliteración frente a Onomatopeya',
    difficulty: 'medio',
    question: '¿Qué diferencia existe fundamentalmente entre la aliteración y la onomatopeya?',
    questionArmenian: 'Ի՞նչ հիմնական տարբերություն կա ալիտերացիայի (հնչյունակրկնության) և օնոմատոպեյայի (բնաձայնության) միջև:',
    options: [
      {
        id: 'q128_o1',
        text: 'La aliteración es la repetición de sonidos en varias palabras; la onomatopeya es una palabra concreta que imita un sonido real.',
        textArmenian: 'Ալիտերացիան հնչյունների կրկնությունն է մի քանի բառերում, իսկ օնոմատոպեյան՝ կոնկրետ բառ, որն ընդօրինակում է իրական ձայն:'
      },
      {
        id: 'q128_o2',
        text: 'La onomatopeya solo se escribe en latín y la aliteración en griego.',
        textArmenian: 'Օնոմատոպեյան գրվում է միայն լատիներենով, իսկ ալիտերացիան՝ հունարենով:'
      },
      {
        id: 'q128_o3',
        text: 'La aliteración solo existe en novelas y la onomatopeya en diccionarios.',
        textArmenian: 'Ալիտերացիան գոյություն ունի միայն վեպերում, իսկ օնոմատոպեյան՝ բառարաններում:'
      },
      {
        id: 'q128_o4',
        text: 'Son exactamente la misma figura con dos nombres idénticos.',
        textArmenian: 'Դրանք ճիշտ նույն հնարքն են՝ երկու նույնական անուններով:'
      }
    ],
    correctOptionId: 'q128_o1',
    explanation: 'La aliteración reparte fonemas a lo largo del verso («Con el ala aleve del leve abanico»); la onomatopeya es un vocablo imitativo puntual («¡Pum!», «clic»).',
    explanationArmenian: 'Ալիտերացիան բաշխում է հնչյունները տողի ողջ երկայնքով, իսկ օնոմատոպեյան կոնկրետ նմանակող բառ է («բում», «տիկ-տակ»):'
  },
  {
    id: 'q129',
    block: 8,
    blockName: 'Figuras literarias',
    category: 'Nivel fónico',
    subtopic: 'Paronomasia: concepto',
    difficulty: 'medio',
    textSnippet: '«Vendado que me has vendido.» (Góngora)',
    textSnippetArmenian: '«Աչքակապ, որ ինձ վաճառեցիր (դավաճանեցիր):»',
    question: 'En el verso de Góngora, donde se colocan muy próximas las palabras «vendado» y «vendido» con sonidos semejantes pero significados muy distintos, aparece:',
    questionArmenian: 'Գոնգորայի տողում, որտեղ կողք կողքի են դրված շատ նման հնչողությամբ, բայց տարբեր իմաստով «vendado» և «vendido» բառերը, հանդիպում է.',
    options: [
      {
        id: 'q129_o1',
        text: 'Paronomasia.',
        textArmenian: 'Հարանունություն / պարոնոմազիա (paronomasia):'
      },
      {
        id: 'q129_o2',
        text: 'Polisíndeton.',
        textArmenian: 'Պոլիսինդետոն:'
      },
      {
        id: 'q129_o3',
        text: 'Pleonasmo.',
        textArmenian: 'Պլեոնազմ:'
      },
      {
        id: 'q129_o4',
        text: 'Asíndeton.',
        textArmenian: 'Ասինդետոն:'
      }
    ],
    correctOptionId: 'q129_o1',
    explanation: 'La paronomasia reúne palabras con significante fónico muy similar (parónimos: hombre/hambre, adoptivo/adaptativo, vendado/vendido) para crear un juego sonoro.',
    explanationArmenian: 'Պարոնոմազիան մոտեցնում է նմանահունչ (հարանուն) բառեր՝ ստեղծելով իմաստային և ձայնային հակադրություն (vendado/vendido, hombre/hambre):'
  },
  {
    id: 'q130',
    block: 8,
    blockName: 'Figuras literarias',
    category: 'Nivel fónico',
    subtopic: 'Paronomasia en refranes',
    difficulty: 'medio',
    textSnippet: '«El que parte y reparte se queda con la mejor parte.»',
    textSnippetArmenian: '«Ով բաժանում և վերաբաժանում է, իրեն է պահում լավագույն բաժինը:»',
    question: 'En este dicho popular se juega con las palabras de sonido muy parecido «parte» y «reparte». ¿Qué recurso fónico se aprecia?',
    questionArmenian: 'Այս ասացվածքում խաղարկվում են նմանահունչ «parte» և «reparte» բառերը: Ի՞նչ հնչյունական հնարք է նկատվում:',
    options: [
      {
        id: 'q130_o1',
        text: 'Paronomasia.',
        textArmenian: 'Պարոնոմազիա (paronomasia):'
      },
      {
        id: 'q130_o2',
        text: 'Onomatopeya de campanas.',
        textArmenian: 'Զանգերի բնաձայնություն:'
      },
      {
        id: 'q130_o3',
        text: 'Hipérbaton latino.',
        textArmenian: 'Լատինական հիպերբատոն:'
      },
      {
        id: 'q130_o4',
        text: 'Metáfora pura.',
        textArmenian: 'Մաքուր փոխաբերություն:'
      }
    ],
    correctOptionId: 'q130_o1',
    explanation: 'El juego con palabras parónimas y de raíz común con leve variación sonora es una paronomasia.',
    explanationArmenian: 'Նմանահունչ արմատներ ունեցող բառերի հնչյունական խաղը պարոնոմազիա է:'
  },
  {
    id: 'q131',
    block: 8,
    blockName: 'Figuras literarias',
    category: 'Nivel fónico',
    subtopic: 'Epanadiplosis: definición y ejemplo',
    difficulty: 'medio',
    textSnippet: '«Verde que te quiero verde.» (García Lorca)',
    textSnippetArmenian: '«Կանա՜չ, քեզ սիրում եմ կանաչ:»',
    question: 'En el inmortal verso de Lorca, que comienza y termina exactamente con la misma palabra («Verde... verde»), ¿qué figura aparece?',
    questionArmenian: 'Լորկայի անմահ տողում, որը սկսվում և ավարտվում է ճիշտ նույն բառով («Verde... verde»), ի՞նչ գեղարվեստական հնարք է հանդիպում:',
    options: [
      {
        id: 'q131_o1',
        text: 'Epanadiplosis.',
        textArmenian: 'Էպանադիպլոսիս (epanadiplosis):'
      },
      {
        id: 'q131_o2',
        text: 'Asíndeton.',
        textArmenian: 'Ասինդետոն:'
      },
      {
        id: 'q131_o3',
        text: 'Pleonasmo.',
        textArmenian: 'Պլեոնազմ:'
      },
      {
        id: 'q131_o4',
        text: 'Hipérbaton.',
        textArmenian: 'Հիպերբատոն:'
      }
    ],
    correctOptionId: 'q131_o1',
    explanation: 'La epanadiplosis consiste en comenzar y terminar el mismo verso o frase con la misma palabra (A ... A).',
    explanationArmenian: 'Էպանադիպլոսիսը միևնույն տողը կամ նախադասությունը նույն բառով սկսելն ու ավարտելն է (A ... A):'
  },
  {
    id: 'q132',
    block: 8,
    blockName: 'Figuras literarias',
    category: 'Nivel fónico',
    subtopic: 'Epanadiplosis segundo ejemplo',
    difficulty: 'medio',
    textSnippet: '«Hurra, cosacos del desierto, hurra.» (Espronceda)',
    textSnippetArmenian: '«Ուռա՜, անապատի կազակներ, ուռա՜:»',
    question: '¿Qué figura retórica se identifica en el verso de José de Espronceda por repetirse el término en los extremos?',
    questionArmenian: 'Ի՞նչ հռետորական հնարք է բացահայտվում Էսպրոնսեդայի տողում՝ ծայրերում բառի կրկնության շնորհիվ:',
    options: [
      {
        id: 'q132_o1',
        text: 'Epanadiplosis.',
        textArmenian: 'Էպանադիպլոսիս:'
      },
      {
        id: 'q132_o2',
        text: 'Anáfora.',
        textArmenian: 'Անաֆորա:'
      },
      {
        id: 'q132_o3',
        text: 'Polisíndeton.',
        textArmenian: 'Պոլիսինդետոն:'
      },
      {
        id: 'q132_o4',
        text: 'Metáfora en aposición.',
        textArmenian: 'Բացահայտչային փոխաբերություն:'
      }
    ],
    correctOptionId: 'q132_o1',
    explanation: 'Empieza con «Hurra» y termina con «hurra»: la estructura idéntica al inicio y al final del verso es la marca de la epanadiplosis.',
    explanationArmenian: 'Սկսվում է «Hurra»-ով և ավարտվում «hurra»-ով. տողի սկզբում և վերջում նույն բառի կրկնությունը էպանադիպլոսիսի նշանն է:'
  },
  {
    id: 'q133',
    block: 8,
    blockName: 'Figuras literarias',
    category: 'Nivel fónico',
    subtopic: 'Identificación de aliteración',
    difficulty: 'facil',
    textSnippet: '«El ruido con que rueda la ronca tempestad.» (Zorrilla)',
    textSnippetArmenian: '«Աղմուկը, որով գլորվում է խռպոտ փոթորիկը:»',
    question: 'En este verso de José Zorrilla destaca la constante repetición de la consonante vibrante /r/. ¿Qué figura fónica es?',
    questionArmenian: 'Խոսե Սորիլյայի այս տողում աչքի է զարնում թրթռուն /r/ բաղաձայնի անընդհատ կրկնությունը: Ի՞նչ հնչյունական հնարք է սա:',
    options: [
      {
        id: 'q133_o1',
        text: 'Aliteración.',
        textArmenian: 'Ալիտերացիա:'
      },
      {
        id: 'q133_o2',
        text: 'Onomatopeya.',
        textArmenian: 'Օնոմատոպեյա:'
      },
      {
        id: 'q133_o3',
        text: 'Paronomasia.',
        textArmenian: 'Պարոնոմազիա:'
      },
      {
        id: 'q133_o4',
        text: 'Pleonasmo.',
        textArmenian: 'Պլեոնազմ:'
      }
    ],
    correctOptionId: 'q133_o1',
    explanation: 'La reiteración de la /r/ recrea acústicamente el estruendo bronco y rugiente de la tormenta: es una aliteración magistral.',
    explanationArmenian: '/r/-ի կրկնությունը լսողականորեն վերարտադրում է փոթորկի խռպոտ որոտը. սա փայլուն ալիտերացիա է:'
  },

  // --- NIVEL MORFOSINTÁCTICO (Hipérbaton, Anáfora, Asíndeton, Polisíndeton, Enumeración, Pleonasmo) ---
  {
    id: 'q134',
    block: 8,
    blockName: 'Figuras literarias',
    category: 'Nivel morfosintáctico',
    subtopic: 'Hipérbaton: definición',
    difficulty: 'facil',
    question: '¿En qué consiste la figura literaria llamada HIPÉRBATON?',
    questionArmenian: 'Ինչո՞ւմ է կայանում ՀԻՊԵՐԲԱՏՈՆ (hipérbaton) կոչվող գեղարվեստական հնարքը:',
    options: [
      {
        id: 'q134_o1',
        text: 'En alterar el orden sintáctico habitual y lógico de las palabras en la oración.',
        textArmenian: 'Նախադասության մեջ բառերի սովորական և տրամաբանական շարահյուսական կարգը (շարադասությունը) խախտելու մեջ:'
      },
      {
        id: 'q134_o2',
        text: 'En suprimir todas las preposiciones del texto.',
        textArmenian: 'Տեքստից բոլոր նախդիրները ջնջելու մեջ:'
      },
      {
        id: 'q134_o3',
        text: 'En inventar palabras sin significado.',
        textArmenian: 'Անիմաստ բառեր հորինելու մեջ:'
      },
      {
        id: 'q134_o4',
        text: 'En rimar todas las palabras con la letra ele.',
        textArmenian: 'Բոլոր բառերը l տառով հանգավորելու մեջ:'
      }
    ],
    correctOptionId: 'q134_o1',
    explanation: 'El orden habitual en español suele ser Sujeto + Verbo + Complementos. El hipérbaton invierte o desordena esa disposición con fines estéticos o de rima.',
    explanationArmenian: 'Իսպաներենում սովորական կարգն է Ենթակա + Բայ + Լրացումներ: Հիպերբատոնը խախտում է այդ դասավորությունը գեղագիտական կամ հանգի նպատակով:'
  },
  {
    id: 'q135',
    block: 8,
    blockName: 'Figuras literarias',
    category: 'Nivel morfosintáctico',
    subtopic: 'Hipérbaton: reconocimiento y reordenación',
    difficulty: 'medio',
    textSnippet: '«Volverán las oscuras golondrinas en tu balcón sus nidos a colgar.» (Bécquer)',
    textSnippetArmenian: '«Կվերադառնան մութ ծիծեռնակները քո պատշգամբում իրենց բները կախելու:»',
    question: 'En estos famosos versos de Bécquer hay un hipérbaton. ¿Cuál sería el orden sintáctico habitual y lógico de la oración?',
    questionArmenian: 'Բեկկերի այս հայտնի տողերում կա հիպերբատոն: Ո՞րն է նախադասության սովորական և տրամաբանական շարահյուսական կարգը:',
    options: [
      {
        id: 'q135_o1',
        text: '«Las oscuras golondrinas volverán a colgar sus nidos en tu balcón.»',
        textArmenian: '«Las oscuras golondrinas volverán a colgar sus nidos en tu balcón.»'
      },
      {
        id: 'q135_o2',
        text: '«En tu balcón volverán sus nidos oscuros a colgar golondrinas.»',
        textArmenian: '«En tu balcón volverán sus nidos oscuros a colgar golondrinas.»'
      },
      {
        id: 'q135_o3',
        text: '«Colgar a nidos sus balcón tu en golondrinas volverán.»',
        textArmenian: '«Colgar a nidos sus balcón tu en golondrinas volverán.»'
      },
      {
        id: 'q135_o4',
        text: 'No se puede reordenar porque carece de verbo.',
        textArmenian: 'Հնարավոր չէ վերադասավորել, քանի որ բայ չունի:'
      }
    ],
    correctOptionId: 'q135_o1',
    explanation: 'El orden lógico canónico es Sujeto («Las oscuras golondrinas») + Perífrasis verbal («volverán a colgar») + Objeto directo («sus nidos») + Complemento circunstancial («en tu balcón»).',
    explanationArmenian: 'Տրամաբանական կարգն է՝ Ենթակա (Las oscuras golondrinas) + Բայ (volverán a colgar) + Ուղիղ խնդիր (sus nidos) + Տեղի պարագա (en tu balcón):'
  },
  {
    id: 'q136',
    block: 8,
    blockName: 'Figuras literarias',
    category: 'Nivel morfosintáctico',
    subtopic: 'Hipérbaton breve',
    difficulty: 'facil',
    textSnippet: '«Del monte en la ladera / por mi mano tengo plantado un huerto.» (Fray Luis)',
    textSnippetArmenian: '«Սարի լանջին իմ ձեռքով մի պարտեզ եմ տնկել:»',
    question: 'En «Del monte en la ladera tengo plantado un huerto», ¿qué figura literaria se emplea al anteponer los complementos al verbo?',
    questionArmenian: 'Լրացումները բայից առաջ դնելիս ի՞նչ գեղարվեստական հնարք է օգտագործվում:',
    options: [
      {
        id: 'q136_o1',
        text: 'Hipérbaton.',
        textArmenian: 'Հիպերբատոն:'
      },
      {
        id: 'q136_o2',
        text: 'Polisíndeton.',
        textArmenian: 'Պոլիսինդետոն:'
      },
      {
        id: 'q136_o3',
        text: 'Aliteración.',
        textArmenian: 'Ալիտերացիա:'
      },
      {
        id: 'q136_o4',
        text: 'Onomatopeya.',
        textArmenian: 'Օնոմատոպեյա:'
      }
    ],
    correctOptionId: 'q136_o1',
    explanation: 'El orden natural sería «Tengo plantado un huerto en la ladera del monte»; al invertirse la sintaxis se produce un hipérbaton.',
    explanationArmenian: 'Բնական կարգը կլիներ «Tengo plantado un huerto en la ladera del monte». շարահյուսությունը փոխելով՝ առաջանում է հիպերբատոն:'
  },
  {
    id: 'q137',
    block: 8,
    blockName: 'Figuras literarias',
    category: 'Nivel morfosintáctico',
    subtopic: 'Anáfora: definición',
    difficulty: 'facil',
    question: '¿Qué es la ANÁFORA?',
    questionArmenian: 'Ի՞նչ է ԱՆԱՖՈՐԱՆ (anáfora):',
    options: [
      {
        id: 'q137_o1',
        text: 'La repetición intencionada de una o más palabras al comienzo de versos o enunciados sucesivos.',
        textArmenian: 'Մեկ կամ մի քանի բառերի դիտավորյալ կրկնությունը հաջորդական տողերի կամ նախադասությունների սկզբում:'
      },
      {
        id: 'q137_o2',
        text: 'La eliminación de todas las comas en un texto.',
        textArmenian: 'Տեքստից բոլոր ստորակետների հեռացումը:'
      },
      {
        id: 'q137_o3',
        text: 'El cambio de sentido de una palabra por otra contraria.',
        textArmenian: 'Բառի իմաստի փոխարինումը հակառակ իմաստով:'
      },
      {
        id: 'q137_o4',
        text: 'La comparación con la palabra «como».',
        textArmenian: 'Համեմատությունը «como» (ինչպես) բառով:'
      }
    ],
    correctOptionId: 'q137_o1',
    explanation: 'La anáfora es la reiteración periódica al inicio de cada unidad versal o frástica para enfatizar una idea o dotar de ritmo solemne al poema.',
    explanationArmenian: 'Անաֆորան յուրաքանչյուր տողի սկզբում պարբերական կրկնությունն է՝ միտքն ընդգծելու կամ ռիթմ հաղորդելու համար:'
  },
  {
    id: 'q138',
    block: 8,
    blockName: 'Figuras literarias',
    category: 'Nivel morfosintáctico',
    subtopic: 'Anáfora: ejemplo poético',
    difficulty: 'medio',
    textSnippet: '«Temprano levantó la muerte el vuelo,\ntemprano madrugó la madrugada,\ntemprano estás rodando por el suelo.» (Miguel Hernández)',
    textSnippetArmenian: '«Վաղ արթնացրեց մահը թռիչքը,\nվաղ լուսացրեց լուսաբացը,\nվաղ ես գլորվում գետնին:»',
    question: 'En esta desgarradora elegía de Miguel Hernández, ¿qué figura retórica resalta con la palabra «Temprano» al inicio de cada verso?',
    questionArmenian: 'Միգել Էռնանդեսի այս ողբերգական էլեգիայում ի՞նչ հնարք է ընդգծվում յուրաքանչյուր տողասկզբի «Temprano» (վաղ) բառով:',
    options: [
      {
        id: 'q138_o1',
        text: 'Anáfora.',
        textArmenian: 'Անաֆորա (տողասկզբի կրկնություն):'
      },
      {
        id: 'q138_o2',
        text: 'Asíndeton de sustantivos.',
        textArmenian: 'Գոյականների ասինդետոն:'
      },
      {
        id: 'q138_o3',
        text: 'Paronomasia silábica.',
        textArmenian: 'Վանկային պարոնոմազիա:'
      },
      {
        id: 'q138_o4',
        text: 'Onomatopeya fúnebre.',
        textArmenian: 'Սգո օնոմատոպեյա:'
      }
    ],
    correctOptionId: 'q138_o1',
    explanation: 'La palabra «Temprano» abre consecutivamente tres versos seguidos, constituyendo un caso paradigmático de anáfora.',
    explanationArmenian: '«Temprano» բառը հաջորդաբար բացում է երեք անընդմեջ տողեր՝ կազմելով անաֆորայի դասական օրինակ:'
  },
  {
    id: 'q139',
    block: 8,
    blockName: 'Figuras literarias',
    category: 'Nivel morfosintáctico',
    subtopic: 'Pleonasmo dentro de verso de Miguel Hernández',
    difficulty: 'dificil',
    textSnippet: '«Temprano madrugó la madrugada.» (Miguel Hernández)',
    textSnippetArmenian: '«Վաղ լուսացրեց լուսաբացը:»',
    question: 'En el verso «Temprano madrugó la madrugada», además de anáfora, ¿qué otra figura morfosintáctica de redundancia expresiva aparece?',
    questionArmenian: '«Temprano madrugó la madrugada» տողում, բացի անաֆորայից, արտահայտչական ավելորդաբանության ի՞նչ այլ հնարք կա:',
    options: [
      {
        id: 'q139_o1',
        text: 'Pleonasmo (madrugar la madrugada insiste redundante e intensamente en la misma raíz y significado).',
        textArmenian: 'Պլեոնազմ (madrugó la madrugada՝ նույն արմատի և իմաստի շեշտադրված ավելորդ կրկնություն):'
      },
      {
        id: 'q139_o2',
        text: 'Polisíndeton.',
        textArmenian: 'Պոլիսինդետոն:'
      },
      {
        id: 'q139_o3',
        text: 'Asíndeton.',
        textArmenian: 'Ասինդետոն:'
      },
      {
        id: 'q139_o4',
        text: 'Onomatopeya.',
        textArmenian: 'Օնոմատոպեյա:'
      }
    ],
    correctOptionId: 'q139_o1',
    explanation: '«Madrugó la madrugada» es un pleonasmo voluntario: la madrugada ya implica por definición madrugar, pero el poeta redunda para intensificar la sorpresa del dolor.',
    explanationArmenian: '«Madrugó la madrugada»-ն գիտակցված պլեոնազմ է. լուսաբացն արդեն իսկ նշանակում է վաղ արթնանալ, բայց բանաստեղծն ավելորդաբանում է ցավի ուժգնությունն արտահայտելու համար:'
  },
  {
    id: 'q140',
    block: 8,
    blockName: 'Figuras literarias',
    category: 'Nivel morfosintáctico',
    subtopic: 'Pleonasmo cotidiano y literario',
    difficulty: 'facil',
    question: 'Expresiones como «Lo vi con mis propios ojos», «Subir arriba» o «Llorar de los ojos» son ejemplos de:',
    questionArmenian: '«Սեփական աչքերովս տեսա», «Վերև բարձրանալ» կամ «Աչքերից լաց լինել» արտահայտությունները հետևյալի օրինակներ են.',
    options: [
      {
        id: 'q140_o1',
        text: 'Pleonasmo (añade palabras innecesarias para el sentido estricto pero que refuerzan el énfasis expresivo).',
        textArmenian: 'Պլեոնազմ (ավելացնում է բառեր, որոնք խիստ իմաստով ավելորդ են, բայց ուժեղացնում են արտահայտչական շեշտը):'
      },
      {
        id: 'q140_o2',
        text: 'Hipérbaton.',
        textArmenian: 'Հիպերբատոն:'
      },
      {
        id: 'q140_o3',
        text: 'Aliteración.',
        textArmenian: 'Ալիտերացիա:'
      },
      {
        id: 'q140_o4',
        text: 'Metáfora pura.',
        textArmenian: 'Մաքուր փոխաբերություն:'
      }
    ],
    correctOptionId: 'q140_o1',
    explanation: 'El pleonasmo consiste en emplear vocablos que repiten una idea ya implícita (se ve siempre con los ojos, se sube siempre hacia arriba), aportando vigor emotivo.',
    explanationArmenian: 'Պլեոնազմը բառերի գործածումն է, որոնք կրկնում են արդեն իսկ ենթադրվող միտքը (մարդ միշտ աչքերով է տեսնում, միշտ դեպի վեր է բարձրանում):'
  },
  {
    id: 'q141',
    block: 8,
    blockName: 'Figuras literarias',
    category: 'Nivel morfosintáctico',
    subtopic: 'Asíndeton: definición',
    difficulty: 'facil',
    question: '¿Qué es el ASÍNDETON?',
    questionArmenian: 'Ի՞նչ է ԱՍԻՆԴԵՏՈՆԸ (asíndeton / անշաղկապություն):',
    options: [
      {
        id: 'q141_o1',
        text: 'La omisión voluntaria de conjunciones (nexos) entre palabras u oraciones para aportar rapidez y dinamismo.',
        textArmenian: 'Բառերի կամ նախադասությունների միջև շաղկապների կամավոր բացթողումը՝ արագություն և դինամիզմ հաղորդելու համար:'
      },
      {
        id: 'q141_o2',
        text: 'La repetición exagerada de la conjunción «y».',
        textArmenian: '«y» (և) շաղկապի չափազանցված կրկնությունը:'
      },
      {
        id: 'q141_o3',
        text: 'El cambio de orden de las sílabas en una palabra.',
        textArmenian: 'Բառի մեջ վանկերի կարգի փոփոխությունը:'
      },
      {
        id: 'q141_o4',
        text: 'La creación de versos de 20 sílabas.',
        textArmenian: '20 վանկանի տողերի ստեղծումը:'
      }
    ],
    correctOptionId: 'q141_o1',
    explanation: 'El asíndeton (del griego «sin ataduras») suprime los nexos copulativos usando comas para dar sensación de rapidez, agilidad o precipitación.',
    explanationArmenian: 'Ասինդետոնը (անշաղկապություն) շաղկապների բացթողումն է ստորակետերի միջոցով՝ արագության և թեթևության զգացողություն ստեղծելու համար:'
  },
  {
    id: 'q142',
    block: 8,
    blockName: 'Figuras literarias',
    category: 'Nivel morfosintáctico',
    subtopic: 'Asíndeton: ejemplo histórico',
    difficulty: 'medio',
    textSnippet: '«Llegué, vi, vencí.» (Julio César)',
    textSnippetArmenian: '«Եկա, տեսա, հաղթեցի:»',
    question: 'En la famosa frase atribuida a Julio César («Veni, vidi, vici»), donde los verbos se suceden separados por comas sin la conjunción «y», encontramos:',
    questionArmenian: 'Հուլիոս Կեսարին վերագրվող հայտնի արտահայտության մեջ («Եկա, տեսա, հաղթեցի»), որտեղ բայերը հաջորդում են առանց «y» շաղկապի, գտնում ենք.',
    options: [
      {
        id: 'q142_o1',
        text: 'Asíndeton.',
        textArmenian: 'Ասինդետոն (asíndeton):'
      },
      {
        id: 'q142_o2',
        text: 'Polisíndeton.',
        textArmenian: 'Պոլիսինդետոն:'
      },
      {
        id: 'q142_o3',
        text: 'Hipérbaton.',
        textArmenian: 'Հիպերբատոն:'
      },
      {
        id: 'q142_o4',
        text: 'Epanadiplosis.',
        textArmenian: 'Էպանադիպլոսիս:'
      }
    ],
    correctOptionId: 'q142_o1',
    explanation: 'Es el ejemplo clásico universal de asíndeton: suprime la «y» final («Llegué, vi y vencí») para reflejar la rapidez fulgurante de la victoria militar.',
    explanationArmenian: 'Սա ասինդետոնի դասական օրինակն է. վերջին «y» շաղկապը զեղչված է՝ հաղթանակի կայծակնային արագությունն արտահայտելու համար:'
  },
  {
    id: 'q143',
    block: 8,
    blockName: 'Figuras literarias',
    category: 'Nivel morfosintáctico',
    subtopic: 'Polisíndeton: definición',
    difficulty: 'facil',
    question: '¿Qué es el POLISÍNDETON?',
    questionArmenian: 'Ի՞նչ է ՊՈԼԻՍԻՆԴԵՏՈՆԸ (polisíndeton / բազմաշաղկապություն):',
    options: [
      {
        id: 'q143_o1',
        text: 'La repetición intencionada de conjunciones (como «y», «ni», «o») entre palabras para ralentizar el ritmo y dar solemnidad o pesadez.',
        textArmenian: 'Բառերի միջև շաղկապների («y», «ni», «o») դիտավորյալ կրկնությունը՝ ռիթմը դանդաղեցնելու և հանդիսավորություն հաղորդելու համար:'
      },
      {
        id: 'q143_o2',
        text: 'La eliminación total de todas las palabras.',
        textArmenian: 'Բոլոր բառերի ամբողջական հեռացումը:'
      },
      {
        id: 'q143_o3',
        text: 'Un sustantivo colectivo de animales marinos.',
        textArmenian: 'Ծովային կենդանիների հավաքական գոյական:'
      },
      {
        id: 'q143_o4',
        text: 'La traducción de un texto a tres lenguas.',
        textArmenian: 'Տեքստի թարգմանությունը երեք լեզուներով:'
      }
    ],
    correctOptionId: 'q143_o1',
    explanation: 'El polisíndeton (muchas ataduras) multiplica los nexos coordinantes provocando lentitud, insistencia emotiva y gravedad en la expresión.',
    explanationArmenian: 'Պոլիսինդետոնը (բազմաշաղկապություն) բազմապատկում է շաղկապները՝ խոսքին հաղորդելով դանդաղություն, համառություն և հանդիսավորություն:'
  },
  {
    id: 'q144',
    block: 8,
    blockName: 'Figuras literarias',
    category: 'Nivel morfosintáctico',
    subtopic: 'Polisíndeton: ejemplo',
    difficulty: 'facil',
    textSnippet: '«Y ríe, y canta, y sueña, y salta, y juega por los verdes prados.»',
    textSnippetArmenian: '«Ե՛վ ծիծաղում է, և՛ երգում է, և՛ երազում է, և՛ թռչկոտում է, և՛ խաղում է կանաչ մարգագետիններում:»',
    question: 'En la oración anterior destaca la insistente reiteración de la conjunción «y». ¿Qué figura se manifiesta?',
    questionArmenian: 'Նախորդ նախադասության մեջ աչքի է զարնում «y» (և) շաղկապի համառ կրկնությունը: Ի՞նչ հնարք է դրսևորվում:',
    options: [
      {
        id: 'q144_o1',
        text: 'Polisíndeton.',
        textArmenian: 'Պոլիսինդետոն (polisíndeton):'
      },
      {
        id: 'q144_o2',
        text: 'Asíndeton.',
        textArmenian: 'Ասինդետոն:'
      },
      {
        id: 'q144_o3',
        text: 'Metáfora.',
        textArmenian: 'Փոխաբերություն:'
      },
      {
        id: 'q144_o4',
        text: 'Paronomasia.',
        textArmenian: 'Պարոնոմազիա:'
      }
    ],
    correctOptionId: 'q144_o1',
    explanation: 'El uso reiterado de la conjunción «y» entre cada uno de los verbos es la definición exacta de polisíndeton.',
    explanationArmenian: 'Յուրաքանչյուր բայի միջև «y» շաղկապի բազմակի կիրառումը պոլիսինդետոնի ճշգրիտ սահմանումն է:'
  },
  {
    id: 'q145',
    block: 8,
    blockName: 'Figuras literarias',
    category: 'Nivel morfosintáctico',
    subtopic: 'Diferencia Asíndeton frente a Polisíndeton',
    difficulty: 'medio',
    question: '¿Cuál es la diferencia exacta entre ASÍNDETON y POLISÍNDETON?',
    questionArmenian: 'Ո՞րն է ճշգրիտ տարբերությունը ԱՍԻՆԴԵՏՈՆԻ (asíndeton) և ՊՈԼԻՍԻՆԴԵՏՈՆԻ (polisíndeton) միջև:',
    options: [
      {
        id: 'q145_o1',
        text: 'El asíndeton elimina las conjunciones (da rapidez); el polisíndeton repite innecesariamente las conjunciones (da lentitud e intensidad).',
        textArmenian: 'Ասինդետոնը զեղչում է շաղկապները (արագացնում է), իսկ պոլիսինդետոնը կրկնում է շաղկապները (դանդաղեցնում և ուժգնացնում է):'
      },
      {
        id: 'q145_o2',
        text: 'El asíndeton solo usa la letra A y el polisíndeton solo la letra P.',
        textArmenian: 'Ասինդետոնն օգտագործում է միայն A տառը, իսկ պոլիսինդետոնը՝ միայն P տառը:'
      },
      {
        id: 'q145_o3',
        text: 'El polisíndeton es una regla de acentuación gráfica.',
        textArmenian: 'Պոլիսինդետոնը գրաֆիկական շեշտադրության կանոն է:'
      },
      {
        id: 'q145_o4',
        text: 'Ambas figuras obligan a escribir en mayúsculas.',
        textArmenian: 'Երկու հնարքներն էլ պարտադրում են գրել մեծատառերով:'
      }
    ],
    correctOptionId: 'q145_o1',
    explanation: 'Son figuras contrapuestas: asíndeton (a- = sin nexos) acelera; polisíndeton (poli- = muchos nexos) frena y enfatiza.',
    explanationArmenian: 'Դրանք հակադիր հնարքներ են. ասինդետոնը (առանց շաղկապի) արագացնում է, իսկ պոլիսինդետոնը (բազմաշաղկապ)՝ դանդաղեցնում և ընդգծում:'
  },
  {
    id: 'q146',
    block: 8,
    blockName: 'Figuras literarias',
    category: 'Nivel morfosintáctico',
    subtopic: 'Enumeración: concepto y coexistencia',
    difficulty: 'medio',
    textSnippet: '«En su mochila llevaba cuadernos, lápices, gomas, reglas y compás.»',
    textSnippetArmenian: '«Իր ուսապարկում նա տանում էր տետրեր, մատիտներ, ռետիններ, քանոններ և կարկին:»',
    question: 'La acumulación sucesiva de elementos que pertenecen a una misma categoría semántica u objetos se denomina:',
    questionArmenian: 'Միևնույն իմաստային խմբին կամ առարկաներին պատկանող տարրերի հաջորդական կուտակումը / թվարկումը կոչվում է.',
    options: [
      {
        id: 'q146_o1',
        text: 'Enumeración.',
        textArmenian: 'Թվարկում / էնումերացիա (enumeración):'
      },
      {
        id: 'q146_o2',
        text: 'Epanadiplosis.',
        textArmenian: 'Էպանադիպլոսիս:'
      },
      {
        id: 'q146_o3',
        text: 'Hipérbaton.',
        textArmenian: 'Հիպերբատոն:'
      },
      {
        id: 'q146_o4',
        text: 'Aliteración.',
        textArmenian: 'Ալիտերացիա:'
      }
    ],
    correctOptionId: 'q146_o1',
    explanation: 'La enumeración es la acumulación coordinada de una serie de términos (sustantivos, adjetivos, etc.) para describir minuciosamente una realidad.',
    explanationArmenian: 'Թվարկումը (enumeración) եզրույթների շարքի կուտակումն է՝ իրականությունն ավելի մանրամասն նկարագրելու համար:'
  },
  {
    id: 'q147',
    block: 8,
    blockName: 'Figuras literarias',
    category: 'Nivel morfosintáctico',
    subtopic: 'Enumeración asindética',
    difficulty: 'dificil',
    textSnippet: '«Día, noche, poniente, madrugada, espacios.» (Jorge Guillén)',
    textSnippetArmenian: '«Ցերեկ, գիշեր, մայրամուտ, լուսաբաց, տարածություններ:»',
    question: 'En estos términos acumulados sin ninguna conjunción («Día, noche, poniente, madrugada, espacios»), ¿qué dos figuras coexisten a la vez?',
    questionArmenian: 'Առանց որևէ շաղկապի կուտակված այս բառերում ի՞նչ երկու գեղարվեստական հնարքներ են միաժամանակ համատեղվում:',
    options: [
      {
        id: 'q147_o1',
        text: 'Enumeración y asíndeton (enumera elementos temporales y omite todas las conjunciones).',
        textArmenian: 'Թվարկում (enumeración) և ասինդետոն (asíndeton)՝ թվարկում է ժամանակային տարրերը և զեղչում բոլոր շաղկապները:'
      },
      {
        id: 'q147_o2',
        text: 'Polisíndeton y onomatopeya.',
        textArmenian: 'Պոլիսինդետոն և օնոմատոպեյա:'
      },
      {
        id: 'q147_o3',
        text: 'Epanadiplosis y pleonasmo.',
        textArmenian: 'Էպանադիպլոսիս և պլեոնազմ:'
      },
      {
        id: 'q147_o4',
        text: 'Paronomasia y métrica consonante.',
        textArmenian: 'Պարոնոմազիա և համահունչ տաղաչափություն:'
      }
    ],
    correctOptionId: 'q147_o1',
    explanation: 'Es una enumeración porque presenta una lista coordinada de sustantivos, y es a la vez asíndeton porque están separados exclusivamente por comas, sin nexos.',
    explanationArmenian: 'Դա թվարկում է (ներկայացնում է գոյականների շարք) և միաժամանակ ասինդետոն է, քանի որ առանձնացված են միայն ստորակետերով՝ առանց շաղկապների:'
  },

  // --- NIVEL SEMÁNTICO (Metáfora: Modelo 1 [A es B], Modelo 2 [B en lugar de A], Modelo 3 [B de A]) ---
  {
    id: 'q148',
    block: 8,
    blockName: 'Figuras literarias',
    category: 'Nivel semántico',
    subtopic: 'Metáfora: concepto general',
    difficulty: 'facil',
    question: '¿Qué es una METÁFORA?',
    questionArmenian: 'Ի՞նչ է ՓՈԽԱԲԵՐՈՒԹՅՈՒՆԸ / ՄԵՏԱՖՈՐԸ (metáfora):',
    options: [
      {
        id: 'q148_o1',
        text: 'La identificación de un término real (A) con un término imaginario (B) basada en una relación de semejanza entre ambos.',
        textArmenian: 'Իրական եզրույթի (A) նույնացումը երևակայական եզրույթի (B) հետ՝ հիմնված նրանց միջև եղած նմանության վրա:'
      },
      {
        id: 'q148_o2',
        text: 'La repetición de letras mayúsculas al inicio del texto.',
        textArmenian: 'Տեքստի սկզբում մեծատառերի կրկնությունը:'
      },
      {
        id: 'q148_o3',
        text: 'La clasificación de los verbos en transitivos e intransitivos.',
        textArmenian: 'Բայերի դասակարգումը ներգործականների և չեզոքների:'
      },
      {
        id: 'q148_o4',
        text: 'Una pregunta con signos de interrogación invertidos.',
        textArmenian: 'Հարց՝ շրջված հարցական նշաններով:'
      }
    ],
    correctOptionId: 'q148_o1',
    explanation: 'La metáfora traslada el significado de una palabra al plano imaginario de otra por analogía o semejanza estética (ej.: perlas por dientes).',
    explanationArmenian: 'Փոխաբերությունը բառի իմաստը տեղափոխում է մեկ այլ պատկերի դաշտ՝ նմանության կամ գեղագիտական նմանողության հիման վրա (մարգարիտներ = ատամներ):'
  },
  {
    id: 'q149',
    block: 8,
    blockName: 'Figuras literarias',
    category: 'Nivel semántico',
    subtopic: 'Metáfora Modelo 1: A es B',
    difficulty: 'facil',
    textSnippet: '«Tus dientes son perlas.»',
    textSnippetArmenian: '«Քո ատամները մարգարիտներ են:»',
    question: 'En «Tus dientes son perlas», ¿cuál es el término real (A), cuál es el término imaginario (B) y qué modelo de metáfora es?',
    questionArmenian: '«Tus dientes son perlas» նախադասության մեջ ո՞րն է իրական եզրույթը (A), ո՞րն է երևակայականը (B) և փոխաբերության ո՞ր մոդելն է:',
    options: [
      {
        id: 'q149_o1',
        text: 'Término real (A): dientes; Término imaginario (B): perlas. Modelo: «A es B» (metáfora impura o explícita).',
        textArmenian: 'Իրական եզրույթ (A)՝ dientes (ատամներ), Երևակայական (B)՝ perlas (մարգարիտներ): Մոդել՝ «A es B» (բացահայտ փոխաբերություն):'
      },
      {
        id: 'q149_o2',
        text: 'Término real: perlas; Término imaginario: labios. Modelo: B de A.',
        textArmenian: 'Իրական՝ perlas, Երևակայական՝ labios: Մոդել՝ B de A:'
      },
      {
        id: 'q149_o3',
        text: 'Es un hipérbaton porque no tiene verbo.',
        textArmenian: 'Հիպերբատոն է, քանի որ բայ չունի:'
      },
      {
        id: 'q149_o4',
        text: 'Es una aliteración del sonido pe.',
        textArmenian: 'P հնչյունի ալիտերացիա է:'
      }
    ],
    correctOptionId: 'q149_o1',
    explanation: 'En el modelo «A es B», ambos términos están presentes unidos por el verbo ser: dientes (real) se identifica con perlas (imaginario) por su blancura y brillo.',
    explanationArmenian: '«A es B» մոդելում երկու եզրույթներն էլ ներկա են՝ միացված ser բայով. ատամները (իրական) նույնացվում են մարգարիտների (երևակայական) հետ՝ սպիտակության և փայլի պատճառով:'
  },
  {
    id: 'q150',
    block: 8,
    blockName: 'Figuras literarias',
    category: 'Nivel semántico',
    subtopic: 'Metáfora Modelo 1: El tiempo es oro',
    difficulty: 'facil',
    textSnippet: '«El tiempo es oro.»',
    textSnippetArmenian: '«Ժամանակը ոսկի է:»',
    question: 'En la conocida expresión «El tiempo es oro», ¿cuál es la relación de semejanza que justifica la metáfora?',
    questionArmenian: '«Ժամանակը ոսկի է» հայտնի արտահայտության մեջ ո՞րն է նմանության հիմքը, որն արդարացնում է փոխաբերությունը:',
    options: [
      {
        id: 'q150_o1',
        text: 'El incalculable valor y la condición de bien preciado y escaso que comparten el tiempo y el oro.',
        textArmenian: 'Անգնահատելի արժեքը և թանկարժեք ու սակավ լինելը, որոնք կիսում են ժամանակն ու ոսկին:'
      },
      {
        id: 'q150_o2',
        text: 'Que los relojes están hechos de piedra volcánica.',
        textArmenian: 'Որ ժամացույցները պատրաստված են հրաբխային քարից:'
      },
      {
        id: 'q150_o3',
        text: 'Que el tiempo tiene color amarillo brillante.',
        textArmenian: 'Որ ժամանակն ունի փայլուն դեղին գույն:'
      },
      {
        id: 'q150_o4',
        text: 'Que ambas palabras tienen exactamente tres letras.',
        textArmenian: 'Որ երկու բառերն էլ ունեն ճիշտ երեք տառ:'
      }
    ],
    correctOptionId: 'q150_o1',
    explanation: 'La relación entre tiempo (A) y oro (B) no es física ni de color, sino de valor supremo: ambos son tesoros que no deben desperdiciarse.',
    explanationArmenian: 'Ժամանակի (A) և ոսկու (B) միջև կապը ոչ թե ֆիզիկական է, այլ բարձրագույն արժեքի. երկուսն էլ թանկարժեք գանձ են:'
  },
  {
    id: 'q151',
    block: 8,
    blockName: 'Figuras literarias',
    category: 'Nivel semántico',
    subtopic: 'Metáfora Modelo 2: B en lugar de A (pura)',
    difficulty: 'medio',
    textSnippet: '«Las perlas de su boca brillaban cuando sonreía.»',
    textSnippetArmenian: '«Նրա բերանի մարգարիտները փայլում էին, երբ նա ժպտում էր:»',
    question: 'En la frase «Las perlas de su boca brillaban», el término real «dientes» no aparece nombrado explícitamente. ¿Cómo se llama este modelo de metáfora?',
    questionArmenian: '«Las perlas de su boca brillaban» նախադասության մեջ «dientes» (ատամներ) իրական եզրույթը բացահայտ նշված չէ: Ինչպե՞ս է կոչվում փոխաբերության այս մոդելը:',
    options: [
      {
        id: 'q151_o1',
        text: 'Metáfora pura (B en lugar de A: el término imaginario sustituye por completo al real).',
        textArmenian: 'Մաքուր փոխաբերություն (B en lugar de A՝ երևակայական եզրույթն ամբողջությամբ փոխարինում է իրականին):'
      },
      {
        id: 'q151_o2',
        text: 'Metáfora impura simple (A es B).',
        textArmenian: 'Պարզ ոչ մաքուր փոխաբերություն (A es B):'
      },
      {
        id: 'q151_o3',
        text: 'Asíndeton morfológico.',
        textArmenian: 'Ձևաբանական ասինդետոն:'
      },
      {
        id: 'q151_o4',
        text: 'Aliteración de dentales.',
        textArmenian: 'Ատամնայինների ալիտերացիա:'
      }
    ],
    correctOptionId: 'q151_o1',
    explanation: 'En la metáfora pura o implícita sólo se nombra el término evocador B («perlas»); el lector debe deducir el término real A («dientes») por el contexto («de su boca»).',
    explanationArmenian: 'Մաքուր փոխաբերության մեջ նշվում է միայն երևակայական B եզրույթը («մարգարիտներ»). ընթերցողը պետք է կռահի իրական A-ն («ատամներ»):'
  },
  {
    id: 'q152',
    block: 8,
    blockName: 'Figuras literarias',
    category: 'Nivel semántico',
    subtopic: 'Metáfora Modelo 2: Reconocimiento',
    difficulty: 'medio',
    textSnippet: '«La lámpara de la noche ilumina los campos dormidos.»',
    textSnippetArmenian: '«Գիշերվա լամպը լուսավորում է քնած դաշտերը:»',
    question: 'En «La lámpara de la noche ilumina los campos», ¿cuál es el término imaginario presente y a qué término real no nombrado alude?',
    questionArmenian: '«La lámpara de la noche ilumina los campos» նախադասության մեջ ո՞րն է առկա երևակայական եզրույթը և ո՞ր չնշված իրական եզրույթին է այն ակնարկում:',
    options: [
      {
        id: 'q152_o1',
        text: 'Término imaginario: «la lámpara de la noche»; Término real evocado: la luna.',
        textArmenian: 'Երևակայական եզրույթ՝ «la lámpara de la noche» (գիշերվա լամպը), Իրական եզրույթ՝ la luna (լուսինը):'
      },
      {
        id: 'q152_o2',
        text: 'Término imaginario: los campos; Término real: el mar.',
        textArmenian: 'Երևակայական՝ դաշտերը, Իրական՝ ծովը:'
      },
      {
        id: 'q152_o3',
        text: 'Término imaginario: la noche; Término real: el mediodía.',
        textArmenian: 'Երևակայական՝ գիշերը, Իրական՝ կեսօրը:'
      },
      {
        id: 'q152_o4',
        text: 'No es una metáfora sino una onomatopeya.',
        textArmenian: 'Փոխաբերություն չէ, այլ բնաձայնություն:'
      }
    ],
    correctOptionId: 'q152_o1',
    explanation: '«La lámpara de la noche» sustituye poéticamente a la luna por su capacidad de alumbrar en medio de la oscuridad.',
    explanationArmenian: '«Գիշերվա լամպը» պոետիկորեն փոխարինում է լուսնին՝ մթության մեջ լուսավորելու իր հատկանիշի շնորհիվ:'
  },
  {
    id: 'q153',
    block: 8,
    blockName: 'Figuras literarias',
    category: 'Nivel semántico',
    subtopic: 'Metáfora Modelo 3: B de A (preposicional)',
    difficulty: 'medio',
    textSnippet: '«Los hilos de oro de sus cabellos brillaban al atardecer.»',
    textSnippetArmenian: '«Նրա մազերի ոսկե թելերը փայլում էին մայրամուտին:»',
    question: 'En «Los hilos de oro de sus cabellos», ¿qué estructura presenta la metáfora preposicional?',
    questionArmenian: '«Los hilos de oro de sus cabellos» արտահայտության մեջ ի՞նչ կառուցվածք ունի նախդիրով փոխաբերությունը:',
    options: [
      {
        id: 'q153_o1',
        text: 'Modelo «B de A»: Término imaginario B («hilos de oro») unido mediante preposición «de» al término real A («cabellos»).',
        textArmenian: 'Մոդել «B de A»՝ Երևակայական B-ն («ոսկե թելեր») միացված է իրական A-ին («մազեր») «de» նախդիրով:'
      },
      {
        id: 'q153_o2',
        text: 'Modelo «A es B» con verbo copulativo.',
        textArmenian: 'Մոդել «A es B»՝ հանգույցային բայով:'
      },
      {
        id: 'q153_o3',
        text: 'Metáfora pura sin término real.',
        textArmenian: 'Մաքուր փոխաբերություն՝ առանց իրական եզրույթի:'
      },
      {
        id: 'q153_o4',
        text: 'Es un pleonasmo con hipérbaton.',
        textArmenian: 'Պլեոնազմ է՝ հիպերբատոնով:'
      }
    ],
    correctOptionId: 'q153_o1',
    explanation: 'En la estructura preposicional «B de A», el término metafórico imaginario B va seguido de la preposición «de» y del término real A («el tambor de su pecho», «los hilos de oro de sus cabellos»).',
    explanationArmenian: '«B de A» կառույցում պատկերավոր B-ին հաջորդում է «de» նախդիրը և իրական A-ն («կրծքի թմբուկը», «մազերի ոսկե թելերը»):'
  },
  {
    id: 'q154',
    block: 8,
    blockName: 'Figuras literarias',
    category: 'Nivel semántico',
    subtopic: 'Metáfora Modelo 3: Otro ejemplo',
    difficulty: 'medio',
    textSnippet: '«El tambor de su pecho latía con fuerza por el miedo.»',
    textSnippetArmenian: '«Նրա կրծքի թմբուկը վախից ուժգին բաբախում էր:»',
    question: 'En la frase «El tambor de su pecho latía con fuerza», ¿cuál es el término imaginario B y cuál es el término real A?',
    questionArmenian: '«El tambor de su pecho latía con fuerza» նախադասության մեջ ո՞րն է երևակայական B-ն և ո՞րն է իրական A-ն:',
    options: [
      {
        id: 'q154_o1',
        text: 'Término imaginario B: «el tambor»; Término real A: el corazón (dentro del pecho).',
        textArmenian: 'Երևակայական B՝ «el tambor» (թմբուկը), Իրական A՝ սիրտը (կրծքի մեջ):'
      },
      {
        id: 'q154_o2',
        text: 'Término imaginario: el miedo; Término real: la fuerza.',
        textArmenian: 'Երևակայական՝ վախը, Իրական՝ ուժը:'
      },
      {
        id: 'q154_o3',
        text: 'Término imaginario: los latidos; Término real: las piernas.',
        textArmenian: 'Երևակայական՝ բաբախյունը, Իրական՝ ոտքերը:'
      },
      {
        id: 'q154_o4',
        text: 'No hay ninguna metáfora en la frase.',
        textArmenian: 'Նախադասության մեջ ոչ մի փոխաբերություն չկա:'
      }
    ],
    correctOptionId: 'q154_o1',
    explanation: 'El corazón que late acompasado y retumbante es identificado con un tambor musical bajo la fórmula preposicional B de A («el tambor de su pecho»).',
    explanationArmenian: 'Ռիթմիկ և ուժգին բաբախող սիրտը նույնացվում է երաժշտական թմբուկի հետ «B de A» մոդելով («կրծքի թմբուկը»):'
  },
  {
    id: 'q155',
    block: 8,
    blockName: 'Figuras literarias',
    category: 'Nivel semántico',
    subtopic: 'Metáfora frente a Comparación (Símil)',
    difficulty: 'medio',
    question: 'Compara: 1) «Tus ojos son dos luceros» y 2) «Tus ojos son COMO dos luceros». ¿Por qué la segunda frase NO es una metáfora estricta sino una comparación o símil?',
    questionArmenian: 'Համեմատի՛ր. 1) «Tus ojos son dos luceros» և 2) «Tus ojos son COMO dos luceros»: Ինչո՞ւ երկրորդ նախադասությունը զուտ փոխաբերություն չէ, այլ համեմատություն (símil):',
    options: [
      {
        id: 'q155_o1',
        text: 'Porque incluye el nexo comparativo explícito «como», estableciendo una relación de parecido pero sin llegar a identificar totalmente los dos términos.',
        textArmenian: 'Քանի որ պարունակում է «como» (ինչպես) բացահայտ համեմատական շաղկապը՝ սահմանելով նմանություն, բայց առանց երկու եզրույթները լիովին նույնացնելու:'
      },
      {
        id: 'q155_o2',
        text: 'Porque «lucero» es un adjetivo y no un sustantivo.',
        textArmenian: 'Որովհետև «lucero»-ն ածական է, ոչ թե գոյական:'
      },
      {
        id: 'q155_o3',
        text: 'Porque la palabra ojos lleva acento en la primera sílaba.',
        textArmenian: 'Որովհետև ojos բառը շեշտվում է առաջին վանկի վրա:'
      },
      {
        id: 'q155_o4',
        text: 'Metáfora y comparación son exactamente lo mismo en español.',
        textArmenian: 'Փոխաբերությունը և համեմատությունը իսպաներենում ճիշտ նույնն են:'
      }
    ],
    correctOptionId: 'q155_o1',
    explanation: 'La presencia de nexos comparativos (como, parece, semejante a, cual) define al símil o comparación. La metáfora elimina el nexo e identifica directamente los términos.',
    explanationArmenian: 'Համեմատական բառերի առկայությունը (como, parece) սահմանում է համեմատությունը (símil): Փոխաբերությունը հանում է այդ բառը և ուղղակիորեն նույնացնում:'
  },

  // --- EXAMEN MIXTO DE IDENTIFICACIÓN DE FIGURAS (q156 - q170) ---
  {
    id: 'q156',
    block: 8,
    blockName: 'Figuras literarias',
    category: 'Identificación mixta 1',
    subtopic: 'Reconocer figura en verso',
    difficulty: 'facil',
    textSnippet: '«Miau, miau, decía el gato negro buscando a su dueño.»',
    textSnippetArmenian: '«Մյաու, մյաու, ասում էր սև կատուն՝ փնտրելով իր տիրոջը:»',
    question: '¿Qué figura retórica predomina en la frase anterior?',
    questionArmenian: 'Ի՞նչ գեղարվեստական հնարք է գերակշռում նախորդ նախադասության մեջ:',
    options: [
      {
        id: 'q156_o1',
        text: 'Onomatopeya.',
        textArmenian: 'Բնաձայնություն (օնոմատոպեյա):'
      },
      {
        id: 'q156_o2',
        text: 'Hipérbaton.',
        textArmenian: 'Հիպերբատոն:'
      },
      {
        id: 'q156_o3',
        text: 'Pleonasmo.',
        textArmenian: 'Պլեոնազմ:'
      },
      {
        id: 'q156_o4',
        text: 'Asíndeton.',
        textArmenian: 'Ասինդետոն:'
      }
    ],
    correctOptionId: 'q156_o1',
    explanation: '«Miau, miau» imita el maullido animal de la realidad: es una onomatopeya fónica.',
    explanationArmenian: '«Miau, miau»-ն ընդօրինակում է կենդանու իրական ձայնը՝ բնաձայնություն է:'
  },
  {
    id: 'q157',
    block: 8,
    blockName: 'Figuras literarias',
    category: 'Identificación mixta 2',
    subtopic: 'Reconocer figura en verso',
    difficulty: 'medio',
    textSnippet: '«Pisa las espumas el caballo de agua.»',
    textSnippetArmenian: '«Փրփուրներն է տրորում ջրի ձին:»',
    question: 'En «El caballo de agua» para referirse metafóricamente a las olas impetuosas del mar, ¿qué figura y qué modelo encontramos?',
    questionArmenian: '«El caballo de agua» (ջրի ձի) արտահայտության մեջ՝ ծովի կատաղի ալիքները փոխաբերորեն պատկերելու համար, ի՞նչ հնարք և մոդել ենք գտնում:',
    options: [
      {
        id: 'q157_o1',
        text: 'Metáfora (modelo «B de A»).',
        textArmenian: 'Փոխաբերություն («B de A» մոդել):'
      },
      {
        id: 'q157_o2',
        text: 'Aliteración simple.',
        textArmenian: 'Պարզ ալիտերացիա:'
      },
      {
        id: 'q157_o3',
        text: 'Polisíndeton.',
        textArmenian: 'Պոլիսինդետոն:'
      },
      {
        id: 'q157_o4',
        text: 'Paronomasia.',
        textArmenian: 'Պարոնոմազիա:'
      }
    ],
    correctOptionId: 'q157_o1',
    explanation: 'Término imaginario B («caballo») unido por preposición «de» al elemento real A («agua»).',
    explanationArmenian: 'Երևակայական B եզրույթը («ձի») «de» նախդիրով միացված է իրական A տարրին («ջուր»):'
  },
  {
    id: 'q158',
    block: 8,
    blockName: 'Figuras literarias',
    category: 'Identificación mixta 3',
    subtopic: 'Reconocer figura en verso',
    difficulty: 'medio',
    textSnippet: '«Ciego que me estás mirando, cielo que me estás oyendo.»',
    textSnippetArmenian: '«Կույր, որ ինձ նայում ես, երկինք, որ ինձ լսում ես:»',
    question: 'Observa las palabras «ciego» y «cielo» situadas al comienzo de cada mitad del verso. ¿Qué figura fónica crean por su similitud de sonido?',
    questionArmenian: 'Ուշադրություն դարձրո՛ւ տողի սկզբում դրված «ciego» (կույր) և «cielo» (երկինք) բառերին: Ի՞նչ հնչյունական հնարք են նրանք ստեղծում իրենց նման հնչողությամբ:',
    options: [
      {
        id: 'q158_o1',
        text: 'Paronomasia.',
        textArmenian: 'Պարոնոմազիա (paronomasia):'
      },
      {
        id: 'q158_o2',
        text: 'Asíndeton.',
        textArmenian: 'Ասինդետոն:'
      },
      {
        id: 'q158_o3',
        text: 'Pleonasmo.',
        textArmenian: 'Պլեոնազմ:'
      },
      {
        id: 'q158_o4',
        text: 'Onomatopeya.',
        textArmenian: 'Օնոմատոպեյա:'
      }
    ],
    correctOptionId: 'q158_o1',
    explanation: '«Ciego» y «cielo» son parónimos (se diferencian solo por un fonema g/l con significados completamente distintos): es una paronomasia.',
    explanationArmenian: '«Ciego»-ն և «cielo»-ն հարանուններ են (տարբերվում են միայն մեկ g/l հնչյունով՝ լիովին տարբեր իմաստներով)՝ պարոնոմազիա է:'
  },
  {
    id: 'q159',
    block: 8,
    blockName: 'Figuras literarias',
    category: 'Identificación mixta 4',
    subtopic: 'Reconocer figura en verso',
    difficulty: 'facil',
    textSnippet: '«Dormía la niña, dormía en su cuna de madera.»',
    textSnippetArmenian: '«Քնած էր աղջնակը, քնած էր իր փայտե օրորոցում:»',
    question: 'En «Dormía la niña, dormía en su cuna», ¿qué recurso de repetición verbal destaca al inicio de las dos partes del verso?',
    questionArmenian: '«Dormía la niña, dormía en su cuna» տողում բայի կրկնության ի՞նչ հնարք է աչքի ընկնում:',
    options: [
      {
        id: 'q159_o1',
        text: 'Anáfora (repetición de la palabra «dormía» al principio de los dos hemistiquios).',
        textArmenian: 'Անաֆորա («dormía» բառի կրկնությունը երկու կիսատողերի սկզբում):'
      },
      {
        id: 'q159_o2',
        text: 'Hipérbaton.',
        textArmenian: 'Հիպերբատոն:'
      },
      {
        id: 'q159_o3',
        text: 'Metáfora pura.',
        textArmenian: 'Մաքուր փոխաբերություն:'
      },
      {
        id: 'q159_o4',
        text: 'Polisíndeton.',
        textArmenian: 'Պոլիսինդետոն:'
      }
    ],
    correctOptionId: 'q159_o1',
    explanation: 'La repetición de la forma verbal «dormía» al comienzo de las dos secuencias oracionales sucesivas constituye anáfora.',
    explanationArmenian: 'Երկու հաջորդական հատվածների սկզբում «dormía» բայի կրկնությունը կազմում է անաֆորա:'
  },
  {
    id: 'q160',
    block: 8,
    blockName: 'Figuras literarias',
    category: 'Identificación mixta 5',
    subtopic: 'Reconocer figura en verso',
    difficulty: 'facil',
    textSnippet: '«Baja abajo a la calle y mira si ha llegado el cartero.»',
    textSnippetArmenian: '«Իջի՛ր ներքև՝ փողոց, և տե՛ս՝ արդյոք եկե՞լ է նամակատարը:»',
    question: 'En la expresión «Baja abajo», ¿qué figura literaria o vicio de redundancia se comete?',
    questionArmenian: '«Baja abajo» (իջիր ներքև) արտահայտության մեջ ի՞նչ գեղարվեստական հնարք կամ ավելորդաբանություն է կիրառվում:',
    options: [
      {
        id: 'q160_o1',
        text: 'Pleonasmo.',
        textArmenian: 'Պլեոնազմ (pleonasmo):'
      },
      {
        id: 'q160_o2',
        text: 'Hipérbaton.',
        textArmenian: 'Հիպերբատոն:'
      },
      {
        id: 'q160_o3',
        text: 'Asíndeton.',
        textArmenian: 'Ասինդետոն:'
      },
      {
        id: 'q160_o4',
        text: 'Aliteración.',
        textArmenian: 'Ալիտերացիա:'
      }
    ],
    correctOptionId: 'q160_o1',
    explanation: 'Bajar siempre implica necesariamente ir hacia abajo; por ello, añadir «abajo» es un pleonasmo evidente.',
    explanationArmenian: 'Bajar (իջնել) բայն արդեն իսկ նշանակում է դեպի ներքև շարժվել, ուստի «abajo» (ներքև) ավելացնելն ակնհայտ պլեոնազմ է:'
  },
  {
    id: 'q161',
    block: 8,
    blockName: 'Figuras literarias',
    category: 'Identificación mixta 6',
    subtopic: 'Reconocer figura en verso',
    difficulty: 'medio',
    textSnippet: '«Pasan las horas, los días, los meses, los años sin que vuelvas.»',
    textSnippetArmenian: '«Անցնում են ժամերը, օրերը, ամիսները, տարիները՝ առանց քո վերադարձի:»',
    question: 'En la frase anterior, la serie gradual «las horas, los días, los meses, los años» separada por comas es una:',
    questionArmenian: 'Նախորդ նախադասության մեջ ստորակետերով բաժանված «ժամերը, օրերը, ամիսները, տարիները» աստիճանական շարքը հետևյալն է.',
    options: [
      {
        id: 'q161_o1',
        text: 'Enumeración con asíndeton.',
        textArmenian: 'Թվարկում՝ ասինդետոնով (առանց շաղկապների):'
      },
      {
        id: 'q161_o2',
        text: 'Polisíndeton.',
        textArmenian: 'Պոլիսինդետոն:'
      },
      {
        id: 'q161_o3',
        text: 'Epanadiplosis.',
        textArmenian: 'Էպանադիպլոսիս:'
      },
      {
        id: 'q161_o4',
        text: 'Paronomasia.',
        textArmenian: 'Պարոնոմազիա:'
      }
    ],
    correctOptionId: 'q161_o1',
    explanation: 'Enumera de forma ascendente unidades de tiempo y omite cualquier conjunción coordinante (asíndeton).',
    explanationArmenian: 'Աճման կարգով թվարկում է ժամանակի միավորները և զեղչում ցանկացած շաղկապ (ասինդետոն):'
  },
  {
    id: 'q162',
    block: 8,
    blockName: 'Figuras literarias',
    category: 'Identificación mixta 7',
    subtopic: 'Reconocer figura en verso',
    difficulty: 'medio',
    textSnippet: '«Ni duerme, ni reposa, ni come, ni bebe, ni sonríe.»',
    textSnippetArmenian: '«Ո՛չ քնում է, ո՛չ հանգստանում, ո՛չ ուտում, ո՛չ խմում, ո՛չ ժպտում:»',
    question: 'La constante repetición de la conjunción negativa «ni» entre cada acción genera la figura de:',
    questionArmenian: 'Յուրաքանչյուր գործողության միջև «ni» (ոչ) ժխտական շաղկապի անընդհատ կրկնությունը ստեղծում է հետևյալ հնարքը.',
    options: [
      {
        id: 'q162_o1',
        text: 'Polisíndeton.',
        textArmenian: 'Պոլիսինդետոն (բազմաշաղկապություն):'
      },
      {
        id: 'q162_o2',
        text: 'Asíndeton.',
        textArmenian: 'Ասինդետոն:'
      },
      {
        id: 'q162_o3',
        text: 'Hipérbaton.',
        textArmenian: 'Հիպերբատոն:'
      },
      {
        id: 'q162_o4',
        text: 'Aliteración.',
        textArmenian: 'Ալիտերացիա:'
      }
    ],
    correctOptionId: 'q162_o1',
    explanation: 'El polisíndeton no solo se realiza con «y», sino también con la conjunción «ni» repetida sistemáticamente.',
    explanationArmenian: 'Պոլիսինդետոնը կազմվում է ոչ միայն «y»-ով, այլև համակարգված կերպով կրկնվող «ni» շաղկապով:'
  },
  {
    id: 'q163',
    block: 8,
    blockName: 'Figuras literarias',
    category: 'Identificación mixta 8',
    subtopic: 'Reconocer figura en verso',
    difficulty: 'dificil',
    textSnippet: '«De verdes sauces rodeado está el cristalino lago.»',
    textSnippetArmenian: '«Կանաչ ուռենիներով շրջապատված է բյուրեղյա լիճը:»',
    question: 'En la frase anterior, ¿qué figura retórica se percibe en la alteración del orden de sus constituyentes sintácticos?',
    questionArmenian: 'Նախորդ նախադասության մեջ ի՞նչ գեղարվեստական հնարք է նկատվում նրա շարահյուսական անդամների կարգի խախտման մեջ:',
    options: [
      {
        id: 'q163_o1',
        text: 'Hipérbaton (orden lógico: «El cristalino lago está rodeado de verdes sauces»).',
        textArmenian: 'Հիպերբատոն (տրամաբանական կարգը՝ «El cristalino lago está rodeado de verdes sauces»):'
      },
      {
        id: 'q163_o2',
        text: 'Epanadiplosis.',
        textArmenian: 'Էպանադիպլոսիս:'
      },
      {
        id: 'q163_o3',
        text: 'Pleonasmo.',
        textArmenian: 'Պլեոնազմ:'
      },
      {
        id: 'q163_o4',
        text: 'Onomatopeya.',
        textArmenian: 'Օնոմատոպեյա:'
      }
    ],
    correctOptionId: 'q163_o1',
    explanation: 'Se ha pospuesto el sujeto («el cristalino lago») al final y se ha adelantado el complemento agente/régimen: es un hipérbaton claro.',
    explanationArmenian: 'Ենթական («el cristalino lago») տեղափոխվել է վերջ, իսկ լրացումը՝ առաջ. սա հստակ հիպերբատոն է:'
  },
  {
    id: 'q164',
    block: 8,
    blockName: 'Figuras literarias',
    category: 'Identificación mixta 9',
    subtopic: 'Reconocer figura en verso',
    difficulty: 'medio',
    textSnippet: '«¡Zas! La puerta se cerró violentamente de golpe.»',
    textSnippetArmenian: '«Զա՛ս: Դուռը կատաղորեն և միանգամից փակվեց:»',
    question: 'En esta frase, la palabra «¡Zas!» funciona como:',
    questionArmenian: 'Այս նախադասության մեջ «¡Zas!» բառը հանդես է գալիս որպես.',
    options: [
      {
        id: 'q164_o1',
        text: 'Onomatopeya (imita el golpe seco de la puerta al cerrarse).',
        textArmenian: 'Բնաձայնություն / օնոմատոպեյա (նմանակում է փակվող դռան կտրուկ հարվածը):'
      },
      {
        id: 'q164_o2',
        text: 'Hipérbaton.',
        textArmenian: 'Հիպերբատոն:'
      },
      {
        id: 'q164_o3',
        text: 'Metáfora en aposición.',
        textArmenian: 'Բացահայտչային փոխաբերություն:'
      },
      {
        id: 'q164_o4',
        text: 'Paronomasia.',
        textArmenian: 'Պարոնոմազիա:'
      }
    ],
    correctOptionId: 'q164_o1',
    explanation: '«¡Zas!» es una onomatopeya común en castellano para reproducir un golpe o un movimiento instantáneo y sonoro.',
    explanationArmenian: '«¡Zas!»-ը իսպաներենում տարածված օնոմատոպեյա է՝ կտրուկ հարվածը կամ ակնթարթային շարժումը վերարտադրելու համար:'
  },
  {
    id: 'q165',
    block: 8,
    blockName: 'Figuras literarias',
    category: 'Identificación mixta 10',
    subtopic: 'Reconocer figura en verso',
    difficulty: 'dificil',
    textSnippet: '«¿Quién me compra una naranja?\n¿Quién me compra un jazmín?\n¿Quién me compra este dolor?»',
    textSnippetArmenian: '«Ո՞վ է ինձնից նարինջ գնում:\nՈ՞վ է ինձնից հասմիկ գնում:\nՈ՞վ է ինձնից այս ցավը գնում:»',
    question: 'En estos versos populares, ¿qué figura retórica se encuentra al repetirse «¿Quién me compra...» al inicio de cada pregunta?',
    questionArmenian: 'Այս ժողովրդական տողերում ի՞նչ հնարք է առկա, երբ յուրաքանչյուր հարցի սկզբում կրկնվում է «Ո՞վ է ինձնից գնում...» արտահայտությունը:',
    options: [
      {
        id: 'q165_o1',
        text: 'Anáfora.',
        textArmenian: 'Անաֆորա (տողասկզբի կրկնություն):'
      },
      {
        id: 'q165_o2',
        text: 'Epanadiplosis.',
        textArmenian: 'Էպանադիպլոսիս:'
      },
      {
        id: 'q165_o3',
        text: 'Asíndeton.',
        textArmenian: 'Ասինդետոն:'
      },
      {
        id: 'q165_o4',
        text: 'Pleonasmo.',
        textArmenian: 'Պլեոնազմ:'
      }
    ],
    correctOptionId: 'q165_o1',
    explanation: 'La repetición anafórica de la misma fórmula interrogativa confiere ritmo poético e insistencia desgarradora.',
    explanationArmenian: 'Միևնույն հարցական բանաձևի անաֆորիկ կրկնությունը հաղորդում է պոետիկ ռիթմ և սրտաճմլիկ համառություն:'
  },
  {
    id: 'q166',
    block: 8,
    blockName: 'Figuras literarias',
    category: 'Identificación mixta 11',
    subtopic: 'Reconocer figura en verso',
    difficulty: 'medio',
    textSnippet: '«La calle era un río hirviente de gente apresurada.»',
    textSnippetArmenian: '«Փողոցը շտապող մարդկանց եռացող գետ էր:»',
    question: 'En la frase anterior, ¿qué figura retórica se utiliza para comparar la calle con una corriente de agua?',
    questionArmenian: 'Նախորդ նախադասության մեջ ի՞նչ գեղարվեստական հնարք է օգտագործվում՝ փողոցը ջրի հոսանքի հետ նույնացնելու համար:',
    options: [
      {
        id: 'q166_o1',
        text: 'Metáfora (A es B: término real «calle» identificado con el término imaginario «río hirviente»).',
        textArmenian: 'Փոխաբերություն (A es B՝ իրական «calle» (փողոց) եզրույթը նույնացված է երևակայական «río» (գետ) եզրույթի հետ):'
      },
      {
        id: 'q166_o2',
        text: 'Paronomasia fónica.',
        textArmenian: 'Հնչյունական պարոնոմազիա:'
      },
      {
        id: 'q166_o3',
        text: 'Onomatopeya acuática.',
        textArmenian: 'Ջրային օնոմատոպեյա:'
      },
      {
        id: 'q166_o4',
        text: 'Pleonasmo redundante.',
        textArmenian: 'Ավելորդաբանական պլեոնազմ:'
      }
    ],
    correctOptionId: 'q166_o1',
    explanation: 'Se identifica directamente la multitud que circula por la calle con la corriente continua y caudalosa de un río (metáfora A es B).',
    explanationArmenian: 'Փողոցով անցնող ամբոխն ուղղակիորեն նույնացվում է գետի հորդառատ հոսանքի հետ (մետաֆոր A es B):'
  },
  {
    id: 'q167',
    block: 8,
    blockName: 'Figuras literarias',
    category: 'Identificación mixta 12',
    subtopic: 'Reconocer figura en verso',
    difficulty: 'medio',
    textSnippet: '«En el campo comían con calma, charlaban, reían, cantaban.»',
    textSnippetArmenian: '«Դաշտում նրանք հանգիստ ուտում էին, զրուցում, ծիծաղում, երգում:»',
    question: 'En la sucesión de verbos separados solo por comas («charlaban, reían, cantaban») sin conjunciones, ¿qué figura destaca?',
    questionArmenian: 'Միայն ստորակետերով բաժանված բայերի շարքում («զրուցում էին, ծիծաղում, երգում»)՝ առանց շաղկապների, ի՞նչ հնարք է ընդգծվում:',
    options: [
      {
        id: 'q167_o1',
        text: 'Asíndeton.',
        textArmenian: 'Ասինդետոն (asíndeton):'
      },
      {
        id: 'q167_o2',
        text: 'Polisíndeton.',
        textArmenian: 'Պոլիսինդետոն:'
      },
      {
        id: 'q167_o3',
        text: 'Hipérbaton.',
        textArmenian: 'Հիպերբատոն:'
      },
      {
        id: 'q167_o4',
        text: 'Epanadiplosis.',
        textArmenian: 'Էպանադիպլոսիս:'
      }
    ],
    correctOptionId: 'q167_o1',
    explanation: 'Al omitir la conjunción copulativa final «y» («reían y cantaban») se produce asíndeton, acelerando el dinamismo de la escena.',
    explanationArmenian: 'Վերջին «y» (և) շաղկապը բաց թողնելով՝ ստացվում է ասինդետոն, որն արագացնում է տեսարանի դինամիզմը:'
  },
  {
    id: 'q168',
    block: 8,
    blockName: 'Figuras literarias',
    category: 'Identificación mixta 13',
    subtopic: 'Reconocer figura en verso',
    difficulty: 'dificil',
    textSnippet: '«Palabras de amor, palabras de dolor, palabras al viento.»',
    textSnippetArmenian: '«Սիրո խոսքեր, ցավի խոսքեր, քամուն տրված խոսքեր:»',
    question: 'La reiteración de la palabra inicial «palabras» al principio de cada segmento es una anáfora. Si además observamos la acumulación de términos en serie sin conjunciones, ¿qué otra figura acompaña?',
    questionArmenian: '«Palabras» (խոսքեր) բառի կրկնությունը յուրաքանչյուր հատվածի սկզբում անաֆորա է: Իսկ առանց շաղկապների շարքի կուտակումը ի՞նչ այլ հնարքով է ուղեկցվում:',
    options: [
      {
        id: 'q168_o1',
        text: 'Asíndeton y enumeración.',
        textArmenian: 'Ասինդետոն և թվարկում (enumeración):'
      },
      {
        id: 'q168_o2',
        text: 'Polisíndeton y onomatopeya.',
        textArmenian: 'Պոլիսինդետոն և օնոմատոպեյա:'
      },
      {
        id: 'q168_o3',
        text: 'Pleonasmo y paronomasia.',
        textArmenian: 'Պլեոնազմ և պարոնոմազիա:'
      },
      {
        id: 'q168_o4',
        text: 'Hipérbaton puro.',
        textArmenian: 'Մաքուր հիպերբատոն:'
      }
    ],
    correctOptionId: 'q168_o1',
    explanation: 'Conviven la anáfora («palabras»), la enumeración de tres tipos de palabras y el asíndeton por ausencia de nexos copulativos.',
    explanationArmenian: 'Միաժամանակ առկա են անաֆորան («palabras»), երեք տեսակի խոսքերի թվարկումը և ասինդետոնը՝ շաղկապների բացակայության պատճառով:'
  },
  {
    id: 'q169',
    block: 8,
    blockName: 'Figuras literarias',
    category: 'Identificación mixta 14',
    subtopic: 'Reconocer figura en verso',
    difficulty: 'medio',
    textSnippet: '«Los luceros del cielo contemplaban a los amantes.»',
    textSnippetArmenian: '«Երկնքի լուսատուները (աստղերը) դիտում էին սիրահարներին:»',
    question: 'En la frase anterior, «los luceros del cielo» se utiliza en sustitución poética de «las estrellas». ¿Qué figura es?',
    questionArmenian: 'Նախորդ նախադասության մեջ «երկնքի լուսատուները» օգտագործվում է «աստղեր» բառի փոխարեն: Ի՞նչ հնարք է սա:',
    options: [
      {
        id: 'q169_o1',
        text: 'Metáfora pura (término imaginario que sustituye al término real estrellas sin nombrarlo).',
        textArmenian: 'Մաքուր փոխաբերություն (երևակայական եզրույթ, որը փոխարինում է աստղերին՝ առանց դրանք նշելու):'
      },
      {
        id: 'q169_o2',
        text: 'Onomatopeya estelar.',
        textArmenian: 'Աստղային օնոմատոպեյա:'
      },
      {
        id: 'q169_o3',
        text: 'Hipérbaton latino.',
        textArmenian: 'Լատինական հիպերբատոն:'
      },
      {
        id: 'q169_o4',
        text: 'Asíndeton.',
        textArmenian: 'Ասինդետոն:'
      }
    ],
    correctOptionId: 'q169_o1',
    explanation: '«Los luceros del cielo» ocupa el lugar del término real ausente («las estrellas»): es una metáfora pura o metafórica de sustitución.',
    explanationArmenian: '«Երկնքի լուսատուները» զբաղեցնում է բացակայող իրական եզրույթի («աստղեր») տեղը՝ մաքուր փոխաբերություն է:'
  },
  {
    id: 'q170',
    block: 8,
    blockName: 'Figuras literarias',
    category: 'Identificación mixta 15',
    subtopic: 'Clasificación por niveles',
    difficulty: 'dificil',
    question: 'En el examen escolar de 1.º ESO te piden clasificar las figuras según su nivel lingüístico. ¿Cuál es la clasificación CORRECTA?',
    questionArmenian: '1-ին ESO-ի քննության ժամանակ խնդրում են դասակարգել հնարքներն ըստ լեզվական մակարդակների: Ո՞րն է ՃԻՇՏ դասակարգումը.',
    options: [
      {
        id: 'q170_o1',
        text: 'Nivel fónico: Aliteración, Onomatopeya, Paronomasia, Epanadiplosis. / Nivel morfosintáctico: Hipérbaton, Anáfora, Asíndeton, Polisíndeton, Enumeración, Pleonasmo. / Nivel semántico: Metáfora.',
        textArmenian: 'Հնչյունական մակարդակ՝ Ալիտերացիա, Օնոմատոպեյա, Պարոնոմազիա, Էպանադիպլոսիս: / Ձևաշարահյուսական՝ Հիպերբատոն, Անաֆորա, Ասինդետոն, Պոլիսինդետոն, Թվարկում, Պլեոնազմ: / Իմաստային մակարդակ՝ Փոխաբերություն:'
      },
      {
        id: 'q170_o2',
        text: 'Nivel fónico: Solo la metáfora. / Nivel semántico: El hipérbaton y el asíndeton.',
        textArmenian: 'Հնչյունական՝ միայն փոխաբերությունը: / Իմաստային՝ հիպերբատոնը և ասինդետոնը:'
      },
      {
        id: 'q170_o3',
        text: 'Todas las figuras pertenecen exclusivamente al nivel morfológico de las conjunciones.',
        textArmenian: 'Բոլոր հնարքները պատկանում են բացառապես շաղկապների ձևաբանական մակարդակին:'
      },
      {
        id: 'q170_o4',
        text: 'Las figuras literarias no tienen ninguna clasificación lingüística.',
        textArmenian: 'Գրական պատկերավորման միջոցները ոչ մի լեզվաբանական դասակարգում չունեն:'
      }
    ],
    correctOptionId: 'q170_o1',
    explanation: 'Es el esquema exacto del cuaderno escolar de 1.º ESO: Fónico (sonidos), Morfosintáctico (orden y repetición de palabras/nexos) y Semántico (significado y metáfora).',
    explanationArmenian: 'Սա 1-ին ESO-ի դպրոցական տետրի ճշգրիտ սխեման է՝ հնչյունական (ձայներ), ձևաշարահյուսական (կարգ և կրկնություն) և իմաստային (նշանակություն և փոխաբերություն):'
  }
];
