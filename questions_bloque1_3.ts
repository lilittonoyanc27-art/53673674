import { Question } from './types';

export const QUESTIONS_BLOQUE_1_3: Question[] = [
  // ==========================================
  // BLOQUE 1: FUNCIONES DEL LENGUAJE (15 Preguntas: q1 - q15)
  // ==========================================
  {
    id: 'q1',
    block: 1,
    blockName: 'Funciones del lenguaje',
    category: 'Concepto general',
    subtopic: 'Definición de función del lenguaje',
    difficulty: 'facil',
    question: '¿Qué son las funciones del lenguaje?',
    questionArmenian: 'Ի՞նչ են լեզվի գործառույթները (ֆունկցիաները):',
    options: [
      {
        id: 'q1_o1',
        text: 'Los distintos objetivos o intenciones con los que un emisor utiliza la lengua al comunicarse.',
        textArmenian: 'Տարբեր նպատակներն ու մտադրությունները, որոնցով հաղորդողը հաղորդակցվելիս օգտագործում է լեզուն:'
      },
      {
        id: 'q1_o2',
        text: 'Las partes gramaticales que componen el sujeto y el predicado.',
        textArmenian: 'Քերականական այն մասերը, որոնք կազմում են ենթական և ստորոգյալը:'
      },
      {
        id: 'q1_o3',
        text: 'Los tipos de letras y sonidos que existen en el alfabeto español.',
        textArmenian: 'Իսպաներենի այբուբենում առկա տառերի և հնչյունների տեսակները:'
      },
      {
        id: 'q1_o4',
        text: 'Las normas de ortografía para escribir sin faltas.',
        textArmenian: 'Ուղղագրական կանոնները՝ առանց սխալների գրելու համար:'
      }
    ],
    correctOptionId: 'q1_o1',
    explanation: 'Las funciones del lenguaje son los diferentes propósitos o intenciones comunicativas del emisor (informar, expresar sentimientos, influir en el receptor, etc.).',
    explanationArmenian: 'Լեզվի գործառույթները խոսողի տարբեր նպատակներն ու մտադրություններն են (տեղեկացնել, արտահայտել զգացմունքներ, ազդել լսողի վրա և այլն):'
  },
  {
    id: 'q2',
    block: 1,
    blockName: 'Funciones del lenguaje',
    category: 'Función referencial',
    subtopic: 'Función representativa o referencial',
    difficulty: 'facil',
    question: 'En la frase «Madrid es la capital de España y tiene más de tres millones de habitantes», ¿qué función del lenguaje predomina?',
    questionArmenian: '«Մադրիդը Իսպանիայի մայրաքաղաքն է և ունի ավելի քան երեք միլիոն բնակիչ» նախադասության մեջ լեզվի ո՞ր գործառույթն է գերակշռում:',
    options: [
      {
        id: 'q2_o1',
        text: 'Función referencial o representativa.',
        textArmenian: 'Ռեֆերենտիվ (տեղեկատվական կամ ներկայացուցչական) գործառույթ:'
      },
      {
        id: 'q2_o2',
        text: 'Función expresiva o emotiva.',
        textArmenian: 'Էքսպրեսիվ (հուզական կամ արտահայտչական) գործառույթ:'
      },
      {
        id: 'q2_o3',
        text: 'Función apelativa o conativa.',
        textArmenian: 'Ապելատիվ (կոչական կամ ներգործող) գործառույթ:'
      },
      {
        id: 'q2_o4',
        text: 'Función poética.',
        textArmenian: 'Պոետիկ (բանաստեղծական) գործառույթ:'
      }
    ],
    correctOptionId: 'q2_o1',
    explanation: 'Predomina la función referencial porque el emisor transmite una información objetiva y contrastable sobre la realidad sin manifestar emociones ni ordenar nada.',
    explanationArmenian: 'Գերակշռում է տեղեկատվական գործառույթը, քանի որ խոսողը հաղորդում է օբյեկտիվ իրականություն՝ առանց հույզեր արտահայտելու կամ հրամայելու:'
  },
  {
    id: 'q3',
    block: 1,
    blockName: 'Funciones del lenguaje',
    category: 'Función expresiva',
    subtopic: 'Función emotiva o expresiva',
    difficulty: 'facil',
    question: '¿Cuál de las siguientes oraciones presenta claramente una función expresiva o emotiva?',
    questionArmenian: 'Հետևյալ նախադասություններից ո՞րն է հստակորեն ներկայացնում էքսպրեսիվ (հուզական) գործառույթ:',
    options: [
      {
        id: 'q3_o1',
        text: '¡Qué alegría tan inmensa volver a verte después de tanto tiempo!',
        textArmenian: 'Ի՜նչ անչափ ուրախություն է քեզ կրկին տեսնել այսքան ժամանակ անց:'
      },
      {
        id: 'q3_o2',
        text: 'El examen de matemáticas comenzará a las nueve de la mañana.',
        textArmenian: 'Մաթեմատիկայի քննությունը կսկսվի առավոտյան ժամը իննին:'
      },
      {
        id: 'q3_o3',
        text: 'Cierra la ventana antes de marcharte, por favor.',
        textArmenian: 'Խնդրում եմ, գնալուց առաջ փակիր պատուհանը:'
      },
      {
        id: 'q3_o4',
        text: 'El sustantivo concuerda en género y número con el adjetivo.',
        textArmenian: 'Գոյականը թվով և սեռով համաձայնում է ածականի հետ:'
      }
    ],
    correctOptionId: 'q3_o1',
    explanation: 'La función expresiva se centra en el emisor para manifestar sus emociones, sentimientos o estados de ánimo («¡Qué alegría tan inmensa...!»).',
    explanationArmenian: 'Էքսպրեսիվ գործառույթը կենտրոնանում է խոսողի վրա՝ նրա հույզերը կամ տրամադրությունն արտահայտելու համար («Ի՜նչ անչափ ուրախություն...»):'
  },
  {
    id: 'q4',
    block: 1,
    blockName: 'Funciones del lenguaje',
    category: 'Función apelativa',
    subtopic: 'Función conativa o apelativa',
    difficulty: 'medio',
    question: 'En el enunciado «Guarden silencio y abran el libro por la página cincuenta», ¿cuál es la función del lenguaje y en qué elemento se centra?',
    questionArmenian: '«Լռությո՛ւն պահպանեք և բացե՛ք գիրքը հիսուներորդ էջի վրա» արտահայտության մեջ ո՞րն է լեզվի գործառույթը և հաղորդակցության ո՞ր տարրի վրա է այն կենտրոնացած:',
    options: [
      {
        id: 'q4_o1',
        text: 'Función apelativa o conativa, centrada en el receptor.',
        textArmenian: 'Ապելատիվ (կոչական/ներգործող) գործառույթ՝ կենտրոնացած լսողի (ընդունողի) վրա:'
      },
      {
        id: 'q4_o2',
        text: 'Función referencial, centrada en el contexto.',
        textArmenian: 'Տեղեկատվական գործառույթ՝ կենտրոնացած համատեքստի վրա:'
      },
      {
        id: 'q4_o3',
        text: 'Función fática, centrada en el canal.',
        textArmenian: 'Ֆատիկ (կոնտակտային) գործառույթ՝ կենտրոնացած կապուղու վրա:'
      },
      {
        id: 'q4_o4',
        text: 'Función metalingüística, centrada en el código.',
        textArmenian: 'Մետալեզվական գործառույթ՝ կենտրոնացած կոդի վրա:'
      }
    ],
    correctOptionId: 'q4_o1',
    explanation: 'La función apelativa busca influir en el comportamiento del receptor mediante órdenes, ruegos, mandatos o vocativos, centrando el interés en el receptor.',
    explanationArmenian: 'Ապելատիվ գործառույթը նպատակ ունի ազդել լսողի վարքի վրա հրամանների կամ խնդրանքների միջոցով և կենտրոնանում է ընդունողի վրա:'
  },
  {
    id: 'q5',
    block: 1,
    blockName: 'Funciones del lenguaje',
    category: 'Función fática',
    subtopic: 'Canal y contacto',
    difficulty: 'medio',
    question: 'Al hablar por teléfono decimos: «¿Sí?, ¿me oyes bien?, 1, 2, 3 probando». ¿Qué función del lenguaje estamos empleando?',
    questionArmenian: 'Հեռախոսով խոսելիս ասում ենք. «Ալո՞, լսո՞ւմ ես ինձ, 1, 2, 3 ստուգում ենք»: Լեզվի ո՞ր գործառույթն ենք կիրառում:',
    options: [
      {
        id: 'q5_o1',
        text: 'Función fática o de contacto.',
        textArmenian: 'Ֆատիկ (կոնտակտային կամ կապ հաստատող) գործառույթ:'
      },
      {
        id: 'q5_o2',
        text: 'Función metalingüística.',
        textArmenian: 'Մետալեզվական գործառույթ:'
      },
      {
        id: 'q5_o3',
        text: 'Función poética.',
        textArmenian: 'Պոետիկ գործառույթ:'
      },
      {
        id: 'q5_o4',
        text: 'Función expresiva.',
        textArmenian: 'Էքսպրեսիվ գործառույթ:'
      }
    ],
    correctOptionId: 'q5_o1',
    explanation: 'La función fática se orienta al canal de comunicación para iniciar, mantener, comprobar o interrumpir el contacto entre emisor y receptor.',
    explanationArmenian: 'Ֆատիկ գործառույթն ուղղված է կապուղուն՝ ստուգելու, սկսելու, պահպանելու կամ դադարեցնելու խոսողի և լսողի միջև կապը:'
  },
  {
    id: 'q6',
    block: 1,
    blockName: 'Funciones del lenguaje',
    category: 'Función metalingüística',
    subtopic: 'El código como objeto de estudio',
    difficulty: 'medio',
    question: 'En la frase «Los verbos de la primera conjugación terminan en -ar», ¿qué función predomina y por qué?',
    questionArmenian: '«Առաջին խոնարհման բայերն ավարտվում են -ar-ով» նախադասության մեջ ո՞ր գործառույթն է գերակշռում և ինչո՞ւ:',
    options: [
      {
        id: 'q6_o1',
        text: 'Metalingüística, porque utiliza la lengua para explicar las reglas de la propia lengua.',
        textArmenian: 'Մետալեզվական, քանի որ լեզուն օգտագործվում է հենց լեզվի կանոնները բացատրելու համար:'
      },
      {
        id: 'q6_o2',
        text: 'Poética, porque busca rimar con la terminación -ar.',
        textArmenian: 'Պոետիկ, որովհետև նպատակ ունի հանգավորել -ar վերջավորության հետ:'
      },
      {
        id: 'q6_o3',
        text: 'Apelativa, porque exige que conjuguemos un verbo.',
        textArmenian: 'Ապելատիվ, որովհետև պահանջում է, որ բայ խոնարհենք:'
      },
      {
        id: 'q6_o4',
        text: 'Fática, porque comprueba si el alumno escucha al profesor.',
        textArmenian: 'Ֆատիկ, որովհետև ստուգում է, թե արդյոք աշակերտը լսում է ուսուցչին:'
      }
    ],
    correctOptionId: 'q6_o1',
    explanation: 'La función metalingüística se centra en el código: usamos las palabras para hablar sobre la propia gramática, el léxico o el idioma.',
    explanationArmenian: 'Մետալեզվական գործառույթը կենտրոնանում է կոդի (լեզվի) վրա. մենք խոսում ենք հենց քերականության, բառապաշարի կամ լեզվի մասին:'
  },
  {
    id: 'q7',
    block: 1,
    blockName: 'Funciones del lenguaje',
    category: 'Función poética',
    subtopic: 'Forma del mensaje',
    difficulty: 'facil',
    question: '¿Qué función del lenguaje se centra en la forma bella y estética del mensaje mediante rima, ritmo y recursos estilísticos?',
    questionArmenian: 'Լեզվի ո՞ր գործառույթն է կենտրոնանում հաղորդագրության գեղեցիկ և գեղագիտական ձևի վրա՝ հանգի, ռիթմի և ոճական հնարքների միջոցով:',
    options: [
      {
        id: 'q7_o1',
        text: 'Función poética o estética.',
        textArmenian: 'Պոետիկ կամ գեղագիտական գործառույթ:'
      },
      {
        id: 'q7_o2',
        text: 'Función apelativa.',
        textArmenian: 'Ապելատիվ գործառույթ:'
      },
      {
        id: 'q7_o3',
        text: 'Función referencial.',
        textArmenian: 'Տեղեկատվական գործառույթ:'
      },
      {
        id: 'q7_o4',
        text: 'Función emotiva.',
        textArmenian: 'Հուզական գործառույթ:'
      }
    ],
    correctOptionId: 'q7_o1',
    explanation: 'La función poética o estética se enfoca en el mensaje mismo, buscando llamar la atención sobre cómo se dice mediante belleza expresiva y figuras literarias.',
    explanationArmenian: 'Պոետիկ գործառույթը կենտրոնանում է հենց հաղորդագրության ձևի վրա՝ ուշադրություն գրավելով գեղեցկության և գրական հնարքների միջոցով:'
  },
  {
    id: 'q8',
    block: 1,
    blockName: 'Funciones del lenguaje',
    category: 'Comparación',
    subtopic: 'Expresiva frente a Referencial',
    difficulty: 'medio',
    question: '¿Qué diferencia existe fundamentalmente entre la función expresiva y la función referencial?',
    questionArmenian: 'Ի՞նչ հիմնական տարբերություն կա էքսպրեսիվ (արտահայտչական) և ռեֆերենտիվ (տեղեկատվական) գործառույթների միջև:',
    options: [
      {
        id: 'q8_o1',
        text: 'La referencial comunica datos objetivos de la realidad, mientras que la expresiva transmite la subjetividad y emociones del emisor.',
        textArmenian: 'Ռեֆերենտիվը հաղորդում է իրականության օբյեկտիվ փաստեր, մինչդեռ էքսպրեսիվը փոխանցում է խոսողի սուբյեկտիվ զգացմունքները:'
      },
      {
        id: 'q8_o2',
        text: 'La referencial siempre usa signos de exclamación y la expresiva utiliza puntos suspensivos.',
        textArmenian: 'Ռեֆերենտիվը միշտ բացականչական նշաններ է օգտագործում, իսկ էքսպրեսիվը՝ բազմակետեր:'
      },
      {
        id: 'q8_o3',
        text: 'La expresiva solo aparece en los libros de texto escolares.',
        textArmenian: 'Էքսպրեսիվը հանդիպում է միայն դպրոցական դասագրքերում:'
      },
      {
        id: 'q8_o4',
        text: 'No existe ninguna diferencia, ambas significan exactamente lo mismo.',
        textArmenian: 'Ոչ մի տարբերություն չկա, երկուսն էլ ճիշտ նույնն են նշանակում:'
      }
    ],
    correctOptionId: 'q8_o1',
    explanation: 'La función referencial es objetiva (centrada en el contexto real) y la función expresiva es subjetiva (centrada en el emisor y sus sentimientos).',
    explanationArmenian: 'Ռեֆերենտիվ գործառույթն օբյեկտիվ է (կենտրոնացած իրական փաստի վրա), իսկ էքսպրեսիվը՝ սուբյեկտիվ (խոսողի զգացմունքների վրա):'
  },
  {
    id: 'q9',
    block: 1,
    blockName: 'Funciones del lenguaje',
    category: 'Análisis de intención',
    subtopic: 'Intención del emisor',
    difficulty: 'medio',
    question: 'En un anuncio publicitario que dice «¡Prueba el nuevo zumo de naranja y siente la energía natural!», ¿cuál es la función dominante?',
    questionArmenian: '«Փորձի՛ր նարնջի նոր հյութը և զգա՛ բնական էներգիան» գովազդում ո՞ր գործառույթն է գերիշխող:',
    options: [
      {
        id: 'q9_o1',
        text: 'Función apelativa o conativa.',
        textArmenian: 'Ապելատիվ (ներգործող) գործառույթ:'
      },
      {
        id: 'q9_o2',
        text: 'Función metalingüística.',
        textArmenian: 'Մետալեզվական գործառույթ:'
      },
      {
        id: 'q9_o3',
        text: 'Función fática.',
        textArmenian: 'Ֆատիկ գործառույթ:'
      },
      {
        id: 'q9_o4',
        text: 'Función puramente referencial.',
        textArmenian: 'Զուտ տեղեկատվական գործառույթ:'
      }
    ],
    correctOptionId: 'q9_o1',
    explanation: 'La publicidad recurre principalmente a la función apelativa porque su propósito directo es persuadir o mover al receptor para que compre o pruebe el producto.',
    explanationArmenian: 'Գովազդը հիմնականում կիրառում է ապելատիվ գործառույթը, քանի որ նպատակն է համոզել կամ մղել սպառողին գնել ապրանքը:'
  },
  {
    id: 'q10',
    block: 1,
    blockName: 'Funciones del lenguaje',
    category: 'Correspondencia elementos',
    subtopic: 'Elemento de la comunicación asociado',
    difficulty: 'medio',
    question: '¿Con qué elemento del proceso comunicativo se vincula de manera directa la función metalingüística?',
    questionArmenian: 'Հաղորդակցման գործընթացի ո՞ր տարրի հետ է ուղղակիորեն կապված մետալեզվական գործառույթը:',
    options: [
      {
        id: 'q10_o1',
        text: 'Con el código.',
        textArmenian: 'Կոդի (լեզվական համակարգի) հետ:'
      },
      {
        id: 'q10_o2',
        text: 'Con el canal físico.',
        textArmenian: 'Ֆիզիկական կապուղու հետ:'
      },
      {
        id: 'q10_o3',
        text: 'Con el receptor exclusivamente.',
        textArmenian: 'Բացառապես ընդունողի հետ:'
      },
      {
        id: 'q10_o4',
        text: 'Con el ruido ambiental.',
        textArmenian: 'Շրջակա աղմուկի հետ:'
      }
    ],
    correctOptionId: 'q10_o1',
    explanation: 'La función metalingüística se asocia directamente al código, ya que se emplea el propio sistema lingüístico para hablar y reflexionar sobre él.',
    explanationArmenian: 'Մետալեզվական գործառույթն ուղղակիորեն կապված է կոդի հետ, քանի որ լեզվական համակարգն օգտագործվում է հենց իր մասին խոսելու համար:'
  },
  {
    id: 'q11',
    block: 1,
    blockName: 'Funciones del lenguaje',
    category: 'Función poética en refranes',
    subtopic: 'Recursos rítmicos',
    difficulty: 'dificil',
    question: 'El refrán popular «A quien madruga, Dios le ayuda» tiene rima y ritmo sonoro. ¿Qué función secundaria pero evidente acompaña al mensaje?',
    questionArmenian: '«Ով վաղ է արթնանում, Աստված նրան օգնում է» ասացվածքն ունի հանգ և ռիթմ: Ո՞ր երկրորդական, բայց ակնհայտ գործառույթն է ուղեկցում հաղորդագրությանը:',
    options: [
      {
        id: 'q11_o1',
        text: 'Función poética o estética, debido al uso de la rima y la musicalidad.',
        textArmenian: 'Պոետիկ կամ գեղագիտական գործառույթ՝ շնորհիվ հանգի և երաժշտականության:'
      },
      {
        id: 'q11_o2',
        text: 'Función metalingüística, porque explica el verbo madrugar.',
        textArmenian: 'Մետալեզվական, որովհետև բացատրում է madrugar բայը:'
      },
      {
        id: 'q11_o3',
        text: 'Función fática, porque abre la línea telefónica.',
        textArmenian: 'Ֆատիկ, որովհետև բացում է հեռախոսակապը:'
      },
      {
        id: 'q11_o4',
        text: 'No tiene ninguna función del lenguaje.',
        textArmenian: 'Լեզվի ոչ մի գործառույթ չունի:'
      }
    ],
    correctOptionId: 'q11_o1',
    explanation: 'Muchos refranes populares emplean la función poética mediante el ritmo y la rima asonante o consonante para facilitar su memorización y transmisión.',
    explanationArmenian: 'Շատ ասացվածքներ օգտագործում են պոետիկ գործառույթը ռիթմի և հանգի միջոցով՝ դրանց հիշելն ու բանավոր փոխանցումը հեշտացնելու համար:'
  },
  {
    id: 'q12',
    block: 1,
    blockName: 'Funciones del lenguaje',
    category: 'Identificación sutil',
    subtopic: 'Función apelativa indirecta',
    difficulty: 'dificil',
    question: 'En un cartel de tráfico que muestra «STOP» con señal octogonal roja, ¿cuál es la función del lenguaje comunicada?',
    questionArmenian: 'Երթևեկության կարմիր ութանկյուն «STOP» նշանի վրա լեզվի ո՞ր գործառույթն է հաղորդվում:',
    options: [
      {
        id: 'q12_o1',
        text: 'Función apelativa, porque ordena al conductor detener el vehículo.',
        textArmenian: 'Ապելատիվ գործառույթ, որովհետև վարորդին հրամայում է կանգնեցնել մեքենան:'
      },
      {
        id: 'q12_o2',
        text: 'Función expresiva, porque muestra sorpresa ante el tráfico.',
        textArmenian: 'Էքսպրեսիվ գործառույթ, որովհետև զարմանք է արտահայտում:'
      },
      {
        id: 'q12_o3',
        text: 'Función fática, porque solo decora la carretera.',
        textArmenian: 'Ֆատիկ գործառույթ, որովհետև միայն զարդարում է ճանապարհը:'
      },
      {
        id: 'q12_o4',
        text: 'Función poética, por el diseño geométrico.',
        textArmenian: 'Պոետիկ գործառույթ՝ երկրաչափական դիզայնի պատճառով:'
      }
    ],
    correctOptionId: 'q12_o1',
    explanation: 'Las señales de tráfico obligatorias tienen función apelativa o conativa porque su fin exclusivo es regular la conducta del receptor (conductor o peatón).',
    explanationArmenian: 'Երթևեկության պարտադիր նշաններն ունեն ապելատիվ գործառույթ, քանի որ դրանց միակ նպատակն է ղեկավարել ընդունողի (վարորդի) վարքը:'
  },
  {
    id: 'q13',
    block: 1,
    blockName: 'Funciones del lenguaje',
    category: 'Función fática en despedidas',
    subtopic: 'Cierre del canal comunicativo',
    difficulty: 'facil',
    question: 'Expresiones cotidianas como «Hasta luego», «Adiós» o «Nos vemos mañana» cumplen la función:',
    questionArmenian: '«Մինչ նոր հանդիպում», «Ցտեսություն» կամ «Վաղը կտեսնվենք» առօրյա արտահայտությունները կատարում են հետևյալ գործառույթը.',
    options: [
      {
        id: 'q13_o1',
        text: 'Fática, porque sirven para cerrar o interrumpir formalmente el contacto comunicativo.',
        textArmenian: 'Ֆատիկ, որովհետև ծառայում են հաղորդակցական կապը պաշտոնապես փակելուն կամ ավարտելուն:'
      },
      {
        id: 'q13_o2',
        text: 'Metalingüística, porque definen el significado de la palabra adiós.',
        textArmenian: 'Մետալեզվական, որովհետև սահմանում են «ցտեսություն» բառի իմաստը:'
      },
      {
        id: 'q13_o3',
        text: 'Referencial estricta, porque demuestran la teoría de la gravedad.',
        textArmenian: 'Խիստ տեղեկատվական, որովհետև ապացուցում են ձգողականության օրենքը:'
      },
      {
        id: 'q13_o4',
        text: 'Poética, por su rima asonante obligatoria.',
        textArmenian: 'Պոետիկ՝ պարտադիր ասոնանս հանգի պատճառով:'
      }
    ],
    correctOptionId: 'q13_o1',
    explanation: 'La función fática no solo inicia o comprueba el canal («¿Hola?», «¿Me oyes?»), sino que también sirve para cerrarlo cortésmente («Adiós»).',
    explanationArmenian: 'Ֆատիկ գործառույթը ոչ միայն սկսում կամ ստուգում է կապուղին («Ալո՞», «Լսո՞ւմ ես»), այլև ծառայում է այն քաղաքավարի փակելուն («Ցտեսություն»):'
  },
  {
    id: 'q14',
    block: 1,
    blockName: 'Funciones del lenguaje',
    category: 'Discriminación de funciones',
    subtopic: 'Diccionario y metalingüística',
    difficulty: 'medio',
    question: 'Cuando un alumno busca en el diccionario y lee «Luminoso: adjetivo que despide o refleja mucha luz», la función presente es:',
    questionArmenian: 'Երբ աշակերտը բառարանում կարդում է. «Luminoso (լուսավոր)՝ ածական, որը շատ լույս է արձակում կամ անդրադարձնում», ներկա գործառույթն է.',
    options: [
      {
        id: 'q14_o1',
        text: 'Metalingüística.',
        textArmenian: 'Մետալեզվական:'
      },
      {
        id: 'q14_o2',
        text: 'Apelativa.',
        textArmenian: 'Ապելատիվ:'
      },
      {
        id: 'q14_o3',
        text: 'Emotiva.',
        textArmenian: 'Էմոցիոնալ:'
      },
      {
        id: 'q14_o4',
        text: 'Fática.',
        textArmenian: 'Ֆատիկ:'
      }
    ],
    correctOptionId: 'q14_o1',
    explanation: 'Los diccionarios y gramáticas son el ejemplo perfecto de función metalingüística: el código se utiliza para explicar el significado y categoría de sus propias palabras.',
    explanationArmenian: 'Բառարաններն ու քերականությունները մետալեզվական գործառույթի կատարյալ օրինակն են. լեզվական կոդն օգտագործվում է իր իսկ բառերի իմաստն ու խոսքի մասը բացատրելու համար:'
  },
  {
    id: 'q15',
    block: 1,
    blockName: 'Funciones del lenguaje',
    category: 'Coexistencia de funciones',
    subtopic: 'Función predominante',
    difficulty: 'dificil',
    question: 'En un mismo texto pueden aparecer varias funciones a la vez. ¿Qué criterio define la «función predominante»?',
    questionArmenian: 'Նույն տեքստում կարող են միաժամանակ լինել մի քանի գործառույթներ: Ո՞ր չափանիշն է սահմանում «գերակշռող գործառույթը»:',
    options: [
      {
        id: 'q15_o1',
        text: 'La intención comunicativa principal del emisor en esa situación concreta.',
        textArmenian: 'Տվյալ կոնկրետ իրավիճակում խոսողի հիմնական հաղորդակցական նպատակը:'
      },
      {
        id: 'q15_o2',
        text: 'La palabra más larga que aparezca en el párrafo.',
        textArmenian: 'Պարբերության մեջ հանդիպող ամենաերկար բառը:'
      },
      {
        id: 'q15_o3',
        text: 'El número de consonantes que tenga la oración.',
        textArmenian: 'Նախադասության մեջ առկա բաղաձայնների քանակը:'
      },
      {
        id: 'q15_o4',
        text: 'Siempre es obligatoriamente la función poética.',
        textArmenian: 'Միշտ պարտադիր պոետիկ գործառույթն է:'
      }
    ],
    correctOptionId: 'q15_o1',
    explanation: 'Aunque varias funciones conviven en un mensaje, la función predominante la marca el objetivo principal que persigue el emisor.',
    explanationArmenian: 'Թեև հաղորդագրության մեջ կարող են համատեղվել մի քանի գործառույթներ, գերակշռողը որոշվում է խոսողի գլխավոր նպատակով:'
  },

  // ==========================================
  // BLOQUE 2: MODALIDADES ORACIONALES (15 Preguntas: q16 - q30)
  // ==========================================
  {
    id: 'q16',
    block: 2,
    blockName: 'Modalidades oracionales',
    category: 'Concepto general',
    subtopic: 'Definición de modalidad oracional',
    difficulty: 'facil',
    question: '¿Qué expresa la modalidad oracional en un enunciado?',
    questionArmenian: 'Ի՞նչ է արտահայտում նախադասության եղանակը (modalidad oracional) խոսքում:',
    options: [
      {
        id: 'q16_o1',
        text: 'La actitud o postura del hablante ante lo que dice (afirmar, preguntar, ordenar, desear o dudar).',
        textArmenian: 'Խոսողի վերաբերմունքը կամ դիրքորոշումն իր ասածի նկատմամբ (հաստատում, հարցում, հրաման, ցանկություն կամ կասկած):'
      },
      {
        id: 'q16_o2',
        text: 'La longitud total del número de palabras escritas.',
        textArmenian: 'Գրված բառերի ընդհանուր երկարությունն ու քանակը:'
      },
      {
        id: 'q16_o3',
        text: 'La lengua de origen en la que nació la palabra.',
        textArmenian: 'Այն ծագման լեզուն, որից առաջացել է բառը:'
      },
      {
        id: 'q16_o4',
        text: 'El tipo de letra (mayúscula o minúscula) con que empieza el texto.',
        textArmenian: 'Տառատեսակը (մեծատառ թե փոքրատառ), որով սկսվում է տեքստը:'
      }
    ],
    correctOptionId: 'q16_o1',
    explanation: 'La modalidad oracional refleja la actitud del emisor frente al contenido de su mensaje (declarar un hecho, ordenar, preguntar, manifestar deseo o duda).',
    explanationArmenian: 'Նախադասության եղանակը ցույց է տալիս խոսողի դիրքորոշումը (հաստատել փաստ, հրամայել, հարցնել, ցանկություն կամ կասկած հայտնել):'
  },
  {
    id: 'q17',
    block: 2,
    blockName: 'Modalidades oracionales',
    category: 'Desiderativa',
    subtopic: 'Oraciones de deseo',
    difficulty: 'facil',
    question: 'En «Ojalá mañana no llueva durante la excursión», ¿qué modalidad oracional predomina?',
    questionArmenian: '«Երանի՜ վաղը էքսկուրսիայի ժամանակ անձրև չգա» նախադասության մեջ ո՞ր եղանակն է գերակշռում:',
    options: [
      {
        id: 'q17_o1',
        text: 'Desiderativa u optativa.',
        textArmenian: 'Իղձ արտահայտող (desiderativa):'
      },
      {
        id: 'q17_o2',
        text: 'Dubitativa.',
        textArmenian: 'Կասկած արտահայտող (dubitativa):'
      },
      {
        id: 'q17_o3',
        text: 'Interrogativa directa.',
        textArmenian: 'Ուղղակի հարցական (interrogativa directa):'
      },
      {
        id: 'q17_o4',
        text: 'Enunciativa afirmativa.',
        textArmenian: 'Պատմողական հաստատական (enunciativa afirmativa):'
      }
    ],
    correctOptionId: 'q17_o1',
    explanation: 'Las oraciones desiderativas expresan un deseo del hablante y suelen ir introducidas por palabras como «ojalá», «deseo que» o «que tengas...».',
    explanationArmenian: 'Իղձ արտահայտող նախադասություններն արտահայտում են խոսողի ցանկությունը և հաճախ սկսվում են «ojalá» (երանի), «deseo que» (ցանկանում եմ) բառերով:'
  },
  {
    id: 'q18',
    block: 2,
    blockName: 'Modalidades oracionales',
    category: 'Dubitativa',
    subtopic: 'Oraciones de duda o probabilidad',
    difficulty: 'facil',
    question: '¿Cuál de las siguientes oraciones es dubitativa?',
    questionArmenian: 'Հետևյալ նախադասություններից ո՞րն է կասկած (կամ հավանականություն) արտահայտող (dubitativa):',
    options: [
      {
        id: 'q18_o1',
        text: 'Tal vez lleguemos a tiempo para ver el comienzo de la película.',
        textArmenian: 'Գուցե ժամանակին հասնենք՝ ֆիլմի սկիզբը տեսնելու համար:'
      },
      {
        id: 'q18_o2',
        text: 'El tren sale exactamente a las doce.',
        textArmenian: 'Գնացքը մեկնում է ճիշտ ժամը տասներկուսին:'
      },
      {
        id: 'q18_o3',
        text: '¡Cierra la mochila ahora mismo!',
        textArmenian: 'Հենց հիմա՛ փակիր ուսապարկը:'
      },
      {
        id: 'q18_o4',
        text: '¿A qué hora termina la clase de lengua?',
        textArmenian: 'Ե՞րբ է ավարտվում իսպաներենի դասը:'
      }
    ],
    correctOptionId: 'q18_o1',
    explanation: 'Las oraciones dubitativas expresan duda o posibilidad mediante adverbios como «tal vez», «quizás», «acaso» o «posiblemente».',
    explanationArmenian: 'Կասկած արտահայտող նախադասություններն արտահայտում են կասկած կամ հավանականություն այնպիսի բառերով, ինչպիսիք են «tal vez» (գուցե), «quizás» (թերևս):'
  },
  {
    id: 'q19',
    block: 2,
    blockName: 'Modalidades oracionales',
    category: 'Exhortativa',
    subtopic: 'Imperativa o exhortativa',
    difficulty: 'facil',
    question: 'La oración «No pises el césped del jardín municipal» se clasifica como:',
    questionArmenian: '«Մի՛ տրորեք համայնքային պարտեզի խոտածածկը» նախադասությունը դասակարգվում է որպես.',
    options: [
      {
        id: 'q19_o1',
        text: 'Exhortativa o imperativa.',
        textArmenian: 'Հորդորական կամ հրամայական (exhortativa / imperativa):'
      },
      {
        id: 'q19_o2',
        text: 'Desiderativa.',
        textArmenian: 'Իղձ արտահայտող (desiderativa):'
      },
      {
        id: 'q19_o3',
        text: 'Interrogativa indirecta.',
        textArmenian: 'Անուղղակի հարցական (interrogativa indirecta):'
      },
      {
        id: 'q19_o4',
        text: 'Enunciativa afirmativa.',
        textArmenian: 'Պատմողական հաստատական:'
      }
    ],
    correctOptionId: 'q19_o1',
    explanation: 'Las oraciones exhortativas o imperativas expresan órdenes, peticiones, consejos o prohibiciones hacia el interlocutor.',
    explanationArmenian: 'Հորդորական կամ հրամայական նախադասություններն արտահայտում են հրամաններ, խնդրանքներ, խորհուրդներ կամ արգելքներ:'
  },
  {
    id: 'q20',
    block: 2,
    blockName: 'Modalidades oracionales',
    category: 'Interrogativa indirecta',
    subtopic: 'Directa frente a indirecta',
    difficulty: 'medio',
    question: 'En la oración «Dime a qué hora vendrás esta tarde», ¿qué tipo de modalidad encontramos?',
    questionArmenian: '«Ասա՛ ինձ, թե որ ժամին ես գալու այսօր երեկոյան» նախադասության մեջ ո՞ր եղանակն է առկա:',
    options: [
      {
        id: 'q20_o1',
        text: 'Interrogativa indirecta (sin signos de interrogación).',
        textArmenian: 'Անուղղակի հարցական (առանց հարցական նշանների):'
      },
      {
        id: 'q20_o2',
        text: 'Interrogativa directa.',
        textArmenian: 'Ուղղակի հարցական:'
      },
      {
        id: 'q20_o3',
        text: 'Exclamativa pura.',
        textArmenian: 'Զուտ բացականչական:'
      },
      {
        id: 'q20_o4',
        text: 'Desiderativa.',
        textArmenian: 'Իղձ արտահայտող:'
      }
    ],
    correctOptionId: 'q20_o1',
    explanation: 'Es una interrogativa indirecta porque formula una pregunta subordinada a un verbo de habla («dime») y se escribe sin signos de interrogación ¿ ? pero con tilde en el pronombre interrogativo «qué».',
    explanationArmenian: 'Դա անուղղակի հարցական է, քանի որ հարցը տրվում է խոսքի բայի միջոցով («ասա ինձ»)՝ առանց հարցական նշանների, բայց «qué» հարցական բառի վրա շեշտով:'
  },
  {
    id: 'q21',
    block: 2,
    blockName: 'Modalidades oracionales',
    category: 'Enunciativa negativa',
    subtopic: 'Enunciativa afirmativa y negativa',
    difficulty: 'facil',
    question: 'La frase «El museo de ciencias no abrirá sus puertas los lunes» es una oración:',
    questionArmenian: '«Գիտության թանգարանը երկուշաբթի օրերին իր դռները չի բացի» նախադասությունը հետևյալն է.',
    options: [
      {
        id: 'q21_o1',
        text: 'Enunciativa negativa.',
        textArmenian: 'Պատմողական ժխտական (enunciativa negativa):'
      },
      {
        id: 'q21_o2',
        text: 'Enunciativa afirmativa.',
        textArmenian: 'Պատմողական հաստատական:'
      },
      {
        id: 'q21_o3',
        text: 'Dubitativa.',
        textArmenian: 'Կասկած արտահայտող:'
      },
      {
        id: 'q21_o4',
        text: 'Exhortativa.',
        textArmenian: 'Հրամայական:'
      }
    ],
    correctOptionId: 'q21_o1',
    explanation: 'Es enunciativa negativa porque afirma la no realización de un hecho o acontecimiento de manera objetiva («no abrirá»).',
    explanationArmenian: 'Դա պատմողական ժխտական է, քանի որ օբյեկտիվորեն հաղորդում է փաստի չկատարվելը («չի բացի»):'
  },
  {
    id: 'q22',
    block: 2,
    blockName: 'Modalidades oracionales',
    category: 'Exclamativa',
    subtopic: 'Entonación y emoción',
    difficulty: 'facil',
    question: '¿Qué signo ortográfico y qué entonación caracterizan a las oraciones exclamativas directas en castellano?',
    questionArmenian: 'Ի՞նչ կետադրական նշան և ինտոնացիա են բնութագրում իսպաներենի ուղղակի բացականչական նախադասություններին:',
    options: [
      {
        id: 'q22_o1',
        text: 'Se abren y cierran con signos de exclamación (¡ !) y expresan sorpresa, dolor, entusiasmo o emoción.',
        textArmenian: 'Բացվում և փակվում են բացականչական նշաններով (¡ !) և արտահայտում են զարմանք, ցավ, ոգևորություն կամ հույզ:'
      },
      {
        id: 'q22_o2',
        text: 'Solo llevan un punto al final y su entonación es neutra.',
        textArmenian: 'Վերջում միայն կետ ունեն, իսկ ինտոնացիան չեզոք է:'
      },
      {
        id: 'q22_o3',
        text: 'Obligatoriamente llevan dos puntos y comillas dobles.',
        textArmenian: 'Պարտադիր ունեն երկու կետ և չակերտներ:'
      },
      {
        id: 'q22_o4',
        text: 'Siempre terminan con puntos suspensivos únicamente.',
        textArmenian: 'Միշտ ավարտվում են միայն բազմակետով:'
      }
    ],
    correctOptionId: 'q22_o1',
    explanation: 'En castellano las oraciones exclamativas directas exigen el signo de apertura (¡) y el de cierre (!) y transmiten un estado afectivo intenso.',
    explanationArmenian: 'Իսպաներենում ուղղակի բացականչական նախադասությունները պահանջում են բացող (¡) և փակող (!) նշաններ և արտահայտում են ուժեղ հուզական վիճակ:'
  },
  {
    id: 'q23',
    block: 2,
    blockName: 'Modalidades oracionales',
    category: 'Comparación conceptual',
    subtopic: 'Modalidad oracional frente a función del lenguaje',
    difficulty: 'medio',
    question: '¿Qué relación hay entre una oración exclamativa («¡Qué frío hace!») y su función del lenguaje predominante?',
    questionArmenian: 'Ի՞նչ կապ կա բացականչական նախադասության («¡Qué frío hace!») և նրա գերակշռող լեզվական գործառույթի միջև:',
    options: [
      {
        id: 'q23_o1',
        text: 'La modalidad es exclamativa y su función predominante suele ser la función expresiva o emotiva.',
        textArmenian: 'Եղանակը բացականչական է, իսկ գերակշռող գործառույթը սովորաբար էքսպրեսիվ (հուզական) գործառույթն է:'
      },
      {
        id: 'q23_o2',
        text: 'La modalidad es metalingüística y la función es dubitativa.',
        textArmenian: 'Եղանակը մետալեզվական է, իսկ գործառույթը՝ կասկած արտահայտող:'
      },
      {
        id: 'q23_o3',
        text: 'No tienen ninguna relación en absoluto.',
        textArmenian: 'Նրանք բացարձակապես ոչ մի կապ չունեն:'
      },
      {
        id: 'q23_o4',
        text: 'Ambas categorías son exactamente verbos en subjuntivo.',
        textArmenian: 'Երկու կատեգորիաներն էլ ճիշտ ըղձական եղանակի բայեր են:'
      }
    ],
    correctOptionId: 'q23_o1',
    explanation: 'La modalidad oracional describe la forma/actitud sintáctica (exclamativa) y la función del lenguaje describe el fin comunicativo (expresiva, centrada en el emisor).',
    explanationArmenian: 'Նախադասության եղանակը նկարագրում է շարահյուսական դրսևորումը (բացականչական), իսկ գործառույթը՝ հաղորդակցական նպատակը (էքսպրեսիվ):'
  },
  {
    id: 'q24',
    block: 2,
    blockName: 'Modalidades oracionales',
    category: 'Interrogativa directa',
    subtopic: 'Interrogativa total vs parcial',
    difficulty: 'medio',
    question: 'En «¿Has terminado todos los ejercicios de lengua?», ¿qué tipo de interrogativa es?',
    questionArmenian: '«Ավարտե՞լ ես իսպաներենի բոլոր վարժությունները» նախադասության մեջ ինչպիսի՞ հարցական է:',
    options: [
      {
        id: 'q24_o1',
        text: 'Interrogativa directa total (se responde con sí o no).',
        textArmenian: 'Ուղղակի ընդհանուր հարցական (պատասխանվում է այո-ով կամ ոչ-ով):'
      },
      {
        id: 'q24_o2',
        text: 'Interrogativa indirecta parcial.',
        textArmenian: 'Անուղղակի մասնակի հարցական:'
      },
      {
        id: 'q24_o3',
        text: 'Oración desiderativa afirmativa.',
        textArmenian: 'Իղձ արտահայտող հաստատական:'
      },
      {
        id: 'q24_o4',
        text: 'Oración enunciativa de duda.',
        textArmenian: 'Պատմողական կասկածի նախադասություն:'
      }
    ],
    correctOptionId: 'q24_o1',
    explanation: 'Es directa porque lleva signos ¿ ? y es total porque pregunta sobre toda la oración y admite como respuesta «sí» o «no».',
    explanationArmenian: 'Ուղղակի է, քանի որ ունի ¿ ? նշաններ, և ընդհանուր է, որովհետև վերաբերում է ամբողջ գործողությանը և պահանջում «այո» կամ «ոչ»:'
  },
  {
    id: 'q25',
    block: 2,
    blockName: 'Modalidades oracionales',
    category: 'Desiderativa sutil',
    subtopic: 'Fórmulas de cortesía y deseo',
    difficulty: 'dificil',
    question: 'La expresión «¡Que tengas un feliz viaje de regreso!» corresponde a la modalidad:',
    questionArmenian: '«Բարի՛ վերադարձի ճանապարհորդություն քեզ» արտահայտությունը համապատասխանում է հետևյալ եղանակին.',
    options: [
      {
        id: 'q25_o1',
        text: 'Desiderativa (expresa un buen deseo hacia el receptor).',
        textArmenian: 'Իղձ արտահայտող (բարեմաղթանք է արտահայտում ընդունողին):'
      },
      {
        id: 'q25_o2',
        text: 'Enunciativa negativa estricta.',
        textArmenian: 'Խիստ պատմողական ժխտական:'
      },
      {
        id: 'q25_o3',
        text: 'Dubitativa de duda matemática.',
        textArmenian: 'Մաթեմատիկական կասկածի եղանակ:'
      },
      {
        id: 'q25_o4',
        text: 'Interrogativa indirecta.',
        textArmenian: 'Անուղղակի հարցական:'
      }
    ],
    correctOptionId: 'q25_o1',
    explanation: 'Las estructuras «Que + verbo en subjuntivo» («Que te mejores», «Que tengas buen viaje») son desiderativas porque comunican un deseo.',
    explanationArmenian: '«Que + ըղձական բայ» կառույցները («Que te mejores», «Que tengas buen viaje») իղձ արտահայտող (desiderativas) են, քանի որ բարեմաղթանք են փոխանցում:'
  },
  {
    id: 'q26',
    block: 2,
    blockName: 'Modalidades oracionales',
    category: 'Distinción fina',
    subtopic: 'Dubitativa frente a Desiderativa',
    difficulty: 'medio',
    question: 'Observa estas dos oraciones: 1) «Quizá venga Luis» / 2) «Ojalá venga Luis». ¿Qué modalidades representan respectivamente?',
    questionArmenian: 'Դիտարկի՛ր այս երկու նախադասությունները. 1) «Quizá venga Luis» (Գուցե Լուիսը գա) / 2) «Ojalá venga Luis» (Երանի Լուիսը գա): Ի՞նչ եղանակներ են դրանք համապատասխանաբար:',
    options: [
      {
        id: 'q26_o1',
        text: '1 es dubitativa (duda) y 2 es desiderativa (deseo).',
        textArmenian: '1-ը կասկած արտահայտող է (dubitativa), իսկ 2-ը՝ իղձ/ցանկություն (desiderativa):'
      },
      {
        id: 'q26_o2',
        text: '1 es imperativa y 2 es enunciativa.',
        textArmenian: '1-ը հրամայական է, իսկ 2-ը՝ պատմողական:'
      },
      {
        id: 'q26_o3',
        text: 'Ambas son oraciones interrogativas indirectas.',
        textArmenian: 'Երկուսն էլ անուղղակի հարցական նախադասություններ են:'
      },
      {
        id: 'q26_o4',
        text: '1 es exclamativa y 2 es fática.',
        textArmenian: '1-ը բացականչական է, իսկ 2-ը՝ ֆատիկ:'
      }
    ],
    correctOptionId: 'q26_o1',
    explanation: '«Quizá» señala incertidumbre o posibilidad (dubitativa), mientras que «ojalá» señala el anhelo de que algo suceda (desiderativa).',
    explanationArmenian: '«Quizá»-ն ցույց է տալիս անորոշություն կամ հավանականություն (dubitativa), իսկ «ojalá»-ն՝ իրադարձության իրականացման ցանկություն (desiderativa):'
  },
  {
    id: 'q27',
    block: 2,
    blockName: 'Modalidades oracionales',
    category: 'Exhortativa con cortesía',
    subtopic: 'Peticiones corteses',
    difficulty: 'medio',
    question: 'En la frase «Por favor, préstame tu goma un momento», la modalidad oracional es:',
    questionArmenian: '«Խնդրում եմ, մի պահ տուր ռետինդ» նախադասության մեջ նախադասության եղանակն է.',
    options: [
      {
        id: 'q27_o1',
        text: 'Exhortativa (es un ruego o petición cortés al receptor).',
        textArmenian: 'Հորդորական (խնդրանք կամ քաղաքավարի դիմում է ընդունողին):'
      },
      {
        id: 'q27_o2',
        text: 'Enunciativa afirmativa impersonal.',
        textArmenian: 'Անդեմ պատմողական հաստատական:'
      },
      {
        id: 'q27_o3',
        text: 'Dubitativa de sospecha.',
        textArmenian: 'Կասկածի եղանակ:'
      },
      {
        id: 'q27_o4',
        text: 'Interrogativa directa total.',
        textArmenian: 'Ուղղակի ընդհանուր հարցական:'
      }
    ],
    correctOptionId: 'q27_o1',
    explanation: 'La modalidad exhortativa incluye tanto órdenes tajantes como ruegos, súplicas y peticiones amables acompañadas de fórmulas de cortesía.',
    explanationArmenian: 'Հորդորական եղանակը ներառում է ինչպես կտրուկ հրամաններ, այնպես էլ աղերսանքներ և քաղաքավարի խնդրանքներ:'
  },
  {
    id: 'q28',
    block: 2,
    blockName: 'Modalidades oracionales',
    category: 'Interrogativa parcial',
    subtopic: 'Pronombre interrogativo',
    difficulty: 'medio',
    question: '¿Qué tipo de oración es «¿Dónde has guardado las llaves de casa?»?',
    questionArmenian: 'Ինչպիսի՞ նախադասություն է «Որտե՞ղ ես պահել տան բանալիները»:',
    options: [
      {
        id: 'q28_o1',
        text: 'Interrogativa directa parcial (pregunta por un elemento concreto mediante «dónde»).',
        textArmenian: 'Ուղղակի մասնակի հարցական (հարցնում է կոնկրետ տարրի մասին «dónde» բառի միջոցով):'
      },
      {
        id: 'q28_o2',
        text: 'Interrogativa directa total.',
        textArmenian: 'Ուղղակի ընդհանուր հարցական:'
      },
      {
        id: 'q28_o3',
        text: 'Enunciativa negativa.',
        textArmenian: 'Պատմողական ժխտական:'
      },
      {
        id: 'q28_o4',
        text: 'Desiderativa.',
        textArmenian: 'Իղձ արտահայտող:'
      }
    ],
    correctOptionId: 'q28_o1',
    explanation: 'Es interrogativa directa parcial porque lleva pronombres o adverbios interrogativos (dónde, cuándo, quién) y no se responde con sí o no, sino con información.',
    explanationArmenian: 'Ուղղակի մասնակի հարցական է, քանի որ պարունակում է հարցական բառ (dónde) և չի պատասխանվում այո/ոչ-ով, այլ տեղեկատվություն է պահանջում:'
  },
  {
    id: 'q29',
    block: 2,
    blockName: 'Modalidades oracionales',
    category: 'Análisis de falsedad',
    subtopic: 'Identificación de afirmaciones erróneas',
    difficulty: 'dificil',
    question: 'Señala cuál de las siguientes afirmaciones sobre las modalidades oracionales es FALSA:',
    questionArmenian: 'Նշի՛ր, թե նախադասության եղանակների վերաբերյալ հետևյալ պնդումներից ո՛րն է ՍԽԱԼ.',
    options: [
      {
        id: 'q29_o1',
        text: 'Las oraciones interrogativas indirectas siempre deben escribirse obligatoriamente entre signos ¿ ?.',
        textArmenian: 'Անուղղակի հարցական նախադասությունները միշտ պարտադիր պետք է գրվեն ¿ ? նշանների միջև:'
      },
      {
        id: 'q29_o2',
        text: 'Las oraciones desiderativas expresan anhelos o deseos.',
        textArmenian: 'Իղձ արտահայտող նախադասություններն արտահայտում են ցանկություններ:'
      },
      {
        id: 'q29_o3',
        text: 'Las oraciones dubitativas se construyen frecuentemente con adverbios como «tal vez» o «quizá».',
        textArmenian: 'Կասկած արտահայտող նախադասությունները հաճախ կազմվում են «tal vez» կամ «quizá» մակբայներով:'
      },
      {
        id: 'q29_o4',
        text: 'Las oraciones enunciativas afirman o niegan una realidad de forma objetiva.',
        textArmenian: 'Պատմողական նախադասություններն օբյեկտիվորեն հաստատում կամ ժխտում են որևէ իրողություն:'
      }
    ],
    correctOptionId: 'q29_o1',
    explanation: 'La afirmación A es falsa porque las oraciones interrogativas INDIRECTAS («Me pregunto qué hora es») NO llevan signos de interrogación.',
    explanationArmenian: 'A պնդումը սխալ է, որովհետև ԱՆՈՒՂՂԱԿԻ հարցական նախադասությունները («Հետաքրքիր է, թե ժամը քանիսն է») հարցական նշաններ ՉԵՆ ունենում:'
  },
  {
    id: 'q30',
    block: 2,
    blockName: 'Modalidades oracionales',
    category: 'Práctica escolar',
    subtopic: 'Clasificación de oraciones reales',
    difficulty: 'medio',
    question: '¿Qué modalidad presenta la oración «Acaso lleguen mañana las notas de la evaluación»?',
    questionArmenian: 'Ի՞նչ եղանակ է ներկայացնում «Acaso lleguen mañana las notas de la evaluación» (Թերևս վաղը գան գնահատման նիշերը) նախադասությունը:',
    options: [
      {
        id: 'q30_o1',
        text: 'Dubitativa (indica duda mediante el adverbio «acaso»).',
        textArmenian: 'Կասկած արտահայտող (կասկած է ցույց տալիս «acaso» մակբայի միջոցով):'
      },
      {
        id: 'q30_o2',
        text: 'Exclamativa enfática.',
        textArmenian: 'Ընդգծված բացականչական:'
      },
      {
        id: 'q30_o3',
        text: 'Enunciativa afirmativa categórica.',
        textArmenian: 'Կատեգորիկ պատմողական հաստատական:'
      },
      {
        id: 'q30_o4',
        text: 'Exhortativa directa.',
        textArmenian: 'Ուղղակի հրամայական:'
      }
    ],
    correctOptionId: 'q30_o1',
    explanation: 'El adverbio «acaso» al inicio de la oración introduce una posibilidad o duda, característica inequívoca de la modalidad dubitativa.',
    explanationArmenian: 'Նախադասության սկզբում «acaso» մակբայն առաջացնում է հավանականություն կամ կասկած, ինչը կասկածի (dubitativa) եղանակի բնութագրիչն է:'
  },

  // ==========================================
  // BLOQUE 3: ELEMENTOS DE LA COMUNICACIÓN (10 Preguntas: q31 - q40)
  // ==========================================
  {
    id: 'q31',
    block: 3,
    blockName: 'Elementos de la comunicación',
    category: 'Conceptos fundamentales',
    subtopic: 'Definiciones de los 6 elementos',
    difficulty: 'facil',
    question: '¿Cuáles son los seis elementos fundamentales que intervienen en todo acto de comunicación humana?',
    questionArmenian: 'Որո՞նք են այն վեց հիմնարար տարրերը, որոնք մասնակցում են մարդկային ցանկացած հաղորդակցման գործընթացին:',
    options: [
      {
        id: 'q31_o1',
        text: 'Emisor, receptor, mensaje, código, canal y contexto (o situación).',
        textArmenian: 'Հաղորդող (էմիսոր), ընդունող (ռեցեպտոր), հաղորդագրություն, կոդ, կապուղի (կանալ) և կոնտեքստ (իրավիճակ):'
      },
      {
        id: 'q31_o2',
        text: 'Sujeto, verbo, predicado, adjetivo, adverbio y coma.',
        textArmenian: 'Ենթակա, բայ, ստորոգյալ, ածական, մակբայ և ստորակետ:'
      },
      {
        id: 'q31_o3',
        text: 'Rima, verso, estrofa, poema, prosa y autor.',
        textArmenian: 'Հանգ, տող, տուն, պոեմ, արձակ և հեղինակ:'
      },
      {
        id: 'q31_o4',
        text: 'Libro, cuaderno, bolígrafo, lápiz, goma y regla.',
        textArmenian: 'Գիրք, տետր, գրիչ, մատիտ, ռետին և քանոն:'
      }
    ],
    correctOptionId: 'q31_o1',
    explanation: 'El esquema de la comunicación se compone del emisor (emite), receptor (recibe), mensaje (contenido), código (signos compartidos), canal (medio físico) y contexto (situación).',
    explanationArmenian: 'Հաղորդակցության սխեման կազմված է հետևյալից՝ էմիսոր (ուղարկող), ռեցեպտոր (ստացող), հաղորդագրություն, կոդ (նշանային համակարգ), կապուղի (միջավայր) և համատեքստ:'
  },
  {
    id: 'q32',
    block: 3,
    blockName: 'Elementos de la comunicación',
    category: 'Situación real 1',
    subtopic: 'La profesora en clase',
    difficulty: 'facil',
    question: 'SITUACIÓN: «La profesora de Lengua explica en la pizarra las reglas de acentuación a sus alumnos de 1.º ESO». ¿Quién es el emisor y quiénes son los receptores?',
    questionArmenian: 'ԻՐԱՎԻՃԱԿ. «Իսպաներենի ուսուցչուհին գրատախտակի վրա 1-ին ESO-ի իր աշակերտներին բացատրում է շեշտադրության կանոնները»: Ո՞վ է հաղորդողը (էմիսոր) և ովքե՞ր են ընդունողները (ռեցեպտորներ):',
    options: [
      {
        id: 'q32_o1',
        text: 'Emisor: la profesora. Receptores: los alumnos de 1.º ESO.',
        textArmenian: 'Հաղորդող՝ ուսուցչուհին: Ընդունողներ՝ 1-ին ESO-ի աշակերտները:'
      },
      {
        id: 'q32_o2',
        text: 'Emisor: la pizarra. Receptor: la tiza.',
        textArmenian: 'Հաղորդող՝ գրատախտակը: Ընդունող՝ կավիճը:'
      },
      {
        id: 'q32_o3',
        text: 'Emisor: los alumnos. Receptor: el director del centro.',
        textArmenian: 'Հաղորդող՝ աշակերտները: Ընդունող՝ տնօրենը:'
      },
      {
        id: 'q32_o4',
        text: 'Emisor: el libro de texto. Receptor: el timbre de recreo.',
        textArmenian: 'Հաղորդող՝ դասագիրքը: Ընդունող՝ զանգը:'
      }
    ],
    correctOptionId: 'q32_o1',
    explanation: 'La profesora produce el mensaje (emisor) y los alumnos que escuchan y comprenden la explicación son los receptores.',
    explanationArmenian: 'Ուսուցչուհին ստեղծում է հաղորդագրությունը (հաղորդող), իսկ բացատրությունը լսող ու հասկացող աշակերտները ընդունողներն են:'
  },
  {
    id: 'q33',
    block: 3,
    blockName: 'Elementos de la comunicación',
    category: 'Situación real 1 cont.',
    subtopic: 'Canal y código en clase',
    difficulty: 'medio',
    question: 'En la misma situación de la clase de Lengua, ¿cuál es el canal y cuál es el código principal utilizado?',
    questionArmenian: 'Իսպաներենի դասի նույն իրավիճակում ո՞րն է կապուղին (կանալը) և ո՞րն է հիմնական օգտագործված կոդը:',
    options: [
      {
        id: 'q33_o1',
        text: 'Canal: el aire (ondas sonoras) y la pizarra (visual). Código: la lengua española (castellano).',
        textArmenian: 'Կապուղի՝ օդը (ձայնային ալիքները) և գրատախտակը (տեսողական): Կոդ՝ իսպաներեն լեզուն:'
      },
      {
        id: 'q33_o2',
        text: 'Canal: el teléfono móvil. Código: el código morse.',
        textArmenian: 'Կապուղի՝ բջջային հեռախոսը: Կոդ՝ Մորզեի այբուբենը:'
      },
      {
        id: 'q33_o3',
        text: 'Canal: la lengua castellana. Código: el pupitre.',
        textArmenian: 'Կապուղի՝ իսպաներենը: Կոդ՝ նստարանը:'
      },
      {
        id: 'q33_o4',
        text: 'Canal: satélite espacial. Código: señales de humo.',
        textArmenian: 'Կապուղի՝ տիեզերական արբանյակ: Կոդ՝ ծխի ազդանշաններ:'
      }
    ],
    correctOptionId: 'q33_o1',
    explanation: 'El canal es el medio físico por donde viaja la información (el aire y la superficie visual de la pizarra); el código es el idioma castellano compartido por emisor y receptor.',
    explanationArmenian: 'Կապուղին ֆիզիկական միջավայրն է, որով անցնում է տեղեկատվությունը (օդը և գրատախտակը), իսկ կոդը՝ իսպաներեն լեզուն:'
  },
  {
    id: 'q34',
    block: 3,
    blockName: 'Elementos de la comunicación',
    category: 'Situación real 2',
    subtopic: 'Correo electrónico escolar',
    difficulty: 'medio',
    question: 'SITUACIÓN: «Un estudiante envía un correo electrónico a su tutor justificando su ausencia por enfermedad». ¿Cuál es el canal en este acto comunicativo?',
    questionArmenian: 'ԻՐԱՎԻՃԱԿ. «Աշակերտը էլեկտրոնային նամակ է ուղարկում իր դասղեկին՝ հիմնավորելով հիվանդության պատճառով բացակայությունը»: Ո՞րն է կապուղին (կանալը) այս հաղորդակցման մեջ:',
    options: [
      {
        id: 'q34_o1',
        text: 'El canal es la red de internet (medio electrónico/digital).',
        textArmenian: 'Կապուղին ինտերնետ ցանցն է (էլեկտրոնային/թվային միջավայրը):'
      },
      {
        id: 'q34_o2',
        text: 'El canal es el tutor.',
        textArmenian: 'Կապուղին դասղեկն է:'
      },
      {
        id: 'q34_o3',
        text: 'El canal es la enfermedad.',
        textArmenian: 'Կապուղին հիվանդությունն է:'
      },
      {
        id: 'q34_o4',
        text: 'El canal es el abecedario español.',
        textArmenian: 'Կապուղին իսպաներենի այբուբենն է:'
      }
    ],
    correctOptionId: 'q34_o1',
    explanation: 'El canal es el soporte material o electrónico a través del cual se transmite el mensaje (en este caso, internet y las pantallas digitales).',
    explanationArmenian: 'Կապուղին այն նյութական կամ էլեկտրոնային միջոցն է, որով փոխանցվում է հաղորդագրությունը (այս դեպքում՝ համացանցն ու էկրանը):'
  },
  {
    id: 'q35',
    block: 3,
    blockName: 'Elementos de la comunicación',
    category: 'Situación real 3',
    subtopic: 'Entrenador y equipo',
    difficulty: 'facil',
    question: 'SITUACIÓN: «En el descanso de un partido de baloncesto, el entrenador les dice a los jugadores: Debemos defender más intensamente bajo el aro». ¿Cuál es el mensaje?',
    questionArmenian: 'ԻՐԱՎԻՃԱԿ. «Բասկետբոլի խաղի ընդմիջմանը մարզիչն ասում է խաղացողներին. Պետք է ավելի ուժեղ պաշտպանվել օղակի տակ»: Ո՞րն է հաղորդագրությունը (մեսիջը):',
    options: [
      {
        id: 'q35_o1',
        text: 'La instrucción concreta de defender con mayor intensidad bajo el aro.',
        textArmenian: 'Կոնկրետ հրահանգը՝ օղակի տակ ավելի ուժեղ պաշտպանվելու վերաբերյալ:'
      },
      {
        id: 'q35_o2',
        text: 'El balón de baloncesto.',
        textArmenian: 'Բասկետբոլի գնդակը:'
      },
      {
        id: 'q35_o3',
        text: 'El silbato del árbitro.',
        textArmenian: 'Մրցավարի սուլիչը:'
      },
      {
        id: 'q35_o4',
        text: 'El tablero electrónico del marcador.',
        textArmenian: 'Հաշվի էլեկտրոնային ցուցատախտակը:'
      }
    ],
    correctOptionId: 'q35_o1',
    explanation: 'El mensaje es la información o contenido transmitido por el emisor («Debemos defender más intensamente bajo el aro»).',
    explanationArmenian: 'Հաղորդագրությունը հաղորդողի կողմից փոխանցված բուն տեղեկությունն ու բովանդակությունն է:'
  },
  {
    id: 'q36',
    block: 3,
    blockName: 'Elementos de la comunicación',
    category: 'Situación real 4',
    subtopic: 'Cartel en la vía pública',
    difficulty: 'medio',
    question: 'SITUACIÓN: «Un niño lee un cartel en el parque que dice: Prohibido pisar las flores». ¿Qué representa el cartel en este circuito?',
    questionArmenian: 'ԻՐԱՎԻՃԱԿ. «Երեխան այգում կարդում է ցուցանակը, որի վրա գրված է. Ծաղիկները տրորելն արգելվում է»: Ի՞նչ է ներկայացնում ցուցանակն այս շղթայում:',
    options: [
      {
        id: 'q36_o1',
        text: 'El canal físico (soporte visual donde está impreso el texto).',
        textArmenian: 'Ֆիզիկական կապուղին (տեսողական կրիչը, որի վրա տպված է տեքստը):'
      },
      {
        id: 'q36_o2',
        text: 'El emisor del mensaje.',
        textArmenian: 'Հաղորդագրությունն ուղարկողը:'
      },
      {
        id: 'q36_o3',
        text: 'El código lingüístico.',
        textArmenian: 'Լեզվական կոդը:'
      },
      {
        id: 'q36_o4',
        text: 'El contexto histórico del siglo dieciocho.',
        textArmenian: '18-րդ դարի պատմական համատեքստը:'
      }
    ],
    correctOptionId: 'q36_o1',
    explanation: 'El cartel de madera o metal es el soporte físico o canal visual por el que el emisor (el ayuntamiento o administración del parque) hace llegar el mensaje.',
    explanationArmenian: 'Փայտե կամ մետաղյա ցուցանակը ֆիզիկական կրիչն է (տեսողական կապուղին), որի միջոցով ուղարկողը հաղորդագրությունը հասցնում է ընթերցողին:'
  },
  {
    id: 'q37',
    block: 3,
    blockName: 'Elementos de la comunicación',
    category: 'Situación real 5',
    subtopic: 'La radio y la comunicación unidireccional',
    difficulty: 'medio',
    question: 'SITUACIÓN: «Una persona escucha en el coche las noticias de la radio». ¿Por qué es una comunicación fundamentalmente unidireccional?',
    questionArmenian: 'ԻՐԱՎԻՃԱԿ. «Մարդը մեքենայում ռադիոյով նորություններ է լսում»: Ինչո՞ւ է սա հիմնականում միակողմանի հաղորդակցություն:',
    options: [
      {
        id: 'q37_o1',
        text: 'Porque el oyente (receptor) no puede responder de inmediato al locutor (emisor) a través del mismo canal.',
        textArmenian: 'Որովհետև ունկնդիրը (ընդունողը) չի կարող նույն պահին և նույն կապուղով պատասխանել հաղորդավարին (ուղարկողին):'
      },
      {
        id: 'q37_o2',
        text: 'Porque la radio utiliza un código secreto que nadie entiende.',
        textArmenian: 'Որովհետև ռադիոն օգտագործում է գաղտնի կոդ, որը ոչ ոք չի հասկանում:'
      },
      {
        id: 'q37_o3',
        text: 'Porque no existe ningún mensaje en las noticias.',
        textArmenian: 'Որովհետև նորություններում ոչ մի հաղորդագրություն չկա:'
      },
      {
        id: 'q37_o4',
        text: 'Porque solo funciona con electricidad solar.',
        textArmenian: 'Որովհետև այն աշխատում է միայն արևային էներգիայով:'
      }
    ],
    correctOptionId: 'q37_o1',
    explanation: 'En los medios de comunicación de masas como la radio tradicional o la televisión, el receptor no intercambia los roles con el emisor en tiempo real, por lo que es unidireccional.',
    explanationArmenian: 'Զանգվածային լրատվամիջոցներում, ինչպիսին է ավանդական ռադիոն, լսողը չի կարող տեղում դերերով փոխվել հաղորդողի հետ, ուստի հաղորդակցությունը միակողմանի է:'
  },
  {
    id: 'q38',
    block: 3,
    blockName: 'Elementos de la comunicación',
    category: 'Situación real 6',
    subtopic: 'Llamada telefónica e interferencias',
    difficulty: 'dificil',
    question: 'Durante una llamada telefónica hay mala cobertura y se corta la voz repetidamente. ¿Qué fenómeno comunicativo está afectando al canal?',
    questionArmenian: 'Հեռախոսազանգի ժամանակ կապը վատ է, և ձայնը պարբերաբար ընդհատվում է: Հաղորդակցական ի՞նչ երևույթ է ազդում կապուղու վրա:',
    options: [
      {
        id: 'q38_o1',
        text: 'El ruido (interferencia o perturbación que dificulta la recepción nítida del mensaje).',
        textArmenian: 'Աղմուկ (ruido)՝ խանգարում կամ աղավաղում, որը դժվարացնում է հաղորդագրության հստակ ընդունումը:'
      },
      {
        id: 'q38_o2',
        text: 'Un cambio instantáneo de código.',
        textArmenian: 'Կոդի ակնթարթային փոփոխություն:'
      },
      {
        id: 'q38_o3',
        text: 'La desaparición completa del contexto.',
        textArmenian: 'Համատեքստի ամբողջական անհետացում:'
      },
      {
        id: 'q38_o4',
        text: 'Una figura retórica llamada hipérbaton.',
        textArmenian: 'Հիպերբատոն կոչվող հռետորական հնարք:'
      }
    ],
    correctOptionId: 'q38_o1',
    explanation: 'En la teoría de la comunicación, «ruido» es cualquier alteración, interferencia acústica o fallo técnico que entorpece la transmisión del mensaje por el canal.',
    explanationArmenian: 'Հաղորդակցության տեսության մեջ «ruido» (աղմուկ) է կոչվում ցանկացած խանգարում կամ տեխնիկական խոտան, որը խոչընդոտում է հաղորդագրության հասնելուն:'
  },
  {
    id: 'q39',
    block: 3,
    blockName: 'Elementos de la comunicación',
    category: 'Código no verbal',
    subtopic: 'Códigos verbales y no verbales',
    difficulty: 'medio',
    question: 'Cuando el árbitro de fútbol saca una tarjeta roja a un jugador expulsado, ¿qué tipo de código está empleando?',
    questionArmenian: 'Երբ ֆուտբոլի մրցավարը կարմիր քարտ է ցույց տալիս հեռացվող ֆուտբոլիստին, ինչպիսի՞ կոդ է նա օգտագործում:',
    options: [
      {
        id: 'q39_o1',
        text: 'Un código no verbal visual (convencional y simbólico).',
        textArmenian: 'Ոչ վերբալ (ոչ խոսքային) տեսողական կոդ (պայմանական և խորհրդանշական):'
      },
      {
        id: 'q39_o2',
        text: 'Un código verbal escrito en prosa.',
        textArmenian: 'Արձակ գրավոր վերբալ կոդ:'
      },
      {
        id: 'q39_o3',
        text: 'Un canal auditivo con versos octosílabos.',
        textArmenian: 'Լսողական կապուղի՝ ութավանկ տողերով:'
      },
      {
        id: 'q39_o4',
        text: 'Un contexto exclusivamente literario.',
        textArmenian: 'Բացառապես գրական համատեքստ:'
      }
    ],
    correctOptionId: 'q39_o1',
    explanation: 'La tarjeta roja es un código no verbal basado en un color con significado preestablecido en el reglamento deportivo.',
    explanationArmenian: 'Կարմիր քարտը ոչ վերբալ կոդ է, որտեղ գույնն ունի սպորտային կանոններով նախապես սահմանված նշանակություն:'
  },
  {
    id: 'q40',
    block: 3,
    blockName: 'Elementos de la comunicación',
    category: 'El contexto',
    subtopic: 'Importancia de la situación comunicativa',
    difficulty: 'dificil',
    question: '¿Por qué la palabra «banco» adquiere un sentido diferente según el contexto comunicativo?',
    questionArmenian: 'Ինչո՞ւ «banco» բառը հաղորդակցական համատեքստից (կոնտեքստից) կախված ստանում է տարբեր իմաստներ:',
    options: [
      {
        id: 'q40_o1',
        text: 'Porque el contexto o situación determina si se refiere a una entidad financiera, a un asiento del parque o a un grupo de peces.',
        textArmenian: 'Քանի որ համատեքստն ու իրավիճակը որոշում են՝ այն վերաբերում է բանկի՞ն, այգու նստարանի՞ն, թե՞ ձկների երամին:'
      },
      {
        id: 'q40_o2',
        text: 'Porque cambia de canal telefónico a canal de papel.',
        textArmenian: 'Որովհետև հեռախոսային կապուղուց փոխվում է թղթային կապուղու:'
      },
      {
        id: 'q40_o3',
        text: 'Porque el emisor olvida las reglas de ortografía.',
        textArmenian: 'Որովհետև խոսողը մոռանում է ուղղագրական կանոնները:'
      },
      {
        id: 'q40_o4',
        text: 'Porque las palabras en español solo tienen un único significado fijo.',
        textArmenian: 'Որովհետև իսպաներենի բառերն ունեն միայն մեկ ֆիքսված իմաստ:'
      }
    ],
    correctOptionId: 'q40_o1',
    explanation: 'El contexto o situación extralingüística es crucial para desambiguar palabras polisémicas u homónimas como «banco».',
    explanationArmenian: 'Համատեքստը (իրավիճակը) չափազանց կարևոր է բազմիմաստ կամ համանուն բառերի (օրինակ՝ banco) ճիշտ իմաստը հասկանալու համար:'
  }
];
