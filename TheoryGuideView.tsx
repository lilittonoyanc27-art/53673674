import React, { useState } from 'react';
import { ArrowLeft, BookOpen, ChevronDown, ChevronUp, Languages, Sparkles } from 'lucide-react';

interface TheoryGuideViewProps {
  onBackToMenu: () => void;
}

export const TheoryGuideView: React.FC<TheoryGuideViewProps> = ({ onBackToMenu }) => {
  const [showAllHy, setShowAllHy] = useState(false);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    figuras: true,
    funciones: true,
    modalidades: false,
    comunicacion: false,
    categorias: false,
    literatura: false,
    generos: false,
    prosa_verso: false
  });

  const toggleSection = (id: string) => {
    setOpenSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Top Bar */}
      <div className="flex items-center justify-between gap-4 flex-wrap mb-6 pb-4 border-b border-stone-200">
        <button
          onClick={onBackToMenu}
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al menú</span>
        </button>

        <div className="text-center sm:text-right">
          <h1 className="font-serif-title font-bold text-red-950 text-xl sm:text-2xl flex items-center justify-center sm:justify-end gap-2">
            <BookOpen className="w-5 h-5 text-amber-600" />
            <span>Guía Teórica del Cuaderno — 1.º ESO</span>
          </h1>
          <p className="text-xs text-stone-500 font-armenian">
            Դպրոցական տետրի տեսական ամփոփագիր՝ իսպաներեն և հայերեն
          </p>
        </div>

        <button
          onClick={() => setShowAllHy(!showAllHy)}
          className={`px-3 py-1.5 rounded-xl text-xs font-semibold border flex items-center gap-1.5 transition-colors ${
            showAllHy
              ? 'bg-orange-500 text-white border-orange-600'
              : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-50'
          }`}
        >
          <Languages className="w-4 h-4" />
          <span className="font-armenian">
            {showAllHy ? 'Հայերեն (բացված)' : 'Բացել բոլոր թարգմանությունները'}
          </span>
        </button>
      </div>

      <div className="space-y-4">
        {/* SECTION 1: FIGURAS LITERARIAS (CRUCIAL) */}
        <div className="bg-white rounded-3xl border border-red-200 shadow-sm overflow-hidden">
          <div
            onClick={() => toggleSection('figuras')}
            className="p-5 bg-gradient-to-r from-red-900 to-rose-900 text-white flex items-center justify-between cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-amber-300" />
              <div>
                <h2 className="font-serif-title font-bold text-base sm:text-lg">
                  1. Las Figuras Literarias (Retóricas)
                </h2>
                <p className="text-xs text-red-200 font-armenian">
                  Գեղարվեստական պատկերավորման և արտահայտչական միջոցներ
                </p>
              </div>
            </div>
            {openSections.figuras ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </div>

          {openSections.figuras && (
            <div className="p-5 sm:p-6 space-y-6 text-stone-800 text-sm">
              {/* Nivel Fónico */}
              <div className="space-y-3">
                <h3 className="font-bold text-red-950 text-base border-b border-red-100 pb-1">
                  A) Nivel Fónico (sonidos y musicalidad)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                    <div className="font-bold text-red-900">1. Aliteración</div>
                    <div className="text-xs text-stone-600 mb-1">
                      Repetición de sonidos iguales o semejantes en uno o varios versos.
                    </div>
                    {(showAllHy || true) && (
                      <div className="text-[11px] text-amber-900 font-armenian mb-1.5">
                        Ալիտերացիա՝ նույն կամ նման հնչյունների կրկնություն:
                      </div>
                    )}
                    <div className="text-xs italic text-stone-800 font-serif-title bg-white p-1.5 rounded-lg border border-stone-100">
                      «En el silencio solo se escuchaba un susurro de abejas que sonaba.»
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                    <div className="font-bold text-red-900">2. Onomatopeya</div>
                    <div className="text-xs text-stone-600 mb-1">
                      Palabra que reproduce o imita un sonido de la realidad.
                    </div>
                    {(showAllHy || true) && (
                      <div className="text-[11px] text-amber-900 font-armenian mb-1.5">
                        Բնաձայնություն (օնոմատոպեյա)՝ իրական ձայների նմանակում:
                      </div>
                    )}
                    <div className="text-xs italic text-stone-800 font-serif-title bg-white p-1.5 rounded-lg border border-stone-100">
                      «Tic-tac», «guau», «miau», «chas», «¡pum!».
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                    <div className="font-bold text-red-900">3. Paronomasia</div>
                    <div className="text-xs text-stone-600 mb-1">
                      Juego de palabras que suenan muy parecido pero tienen significados distintos.
                    </div>
                    {(showAllHy || true) && (
                      <div className="text-[11px] text-amber-900 font-armenian mb-1.5">
                        Հարանունություն (պարոնոմազիա)՝ նմանահունչ բառերի խաղ:
                      </div>
                    )}
                    <div className="text-xs italic text-stone-800 font-serif-title bg-white p-1.5 rounded-lg border border-stone-100">
                      «Vendado que me has vendido», «hombre / hambre».
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                    <div className="font-bold text-red-900">4. Epanadiplosis</div>
                    <div className="text-xs text-stone-600 mb-1">
                      Comenzar y terminar el mismo verso o frase con la misma palabra (A ... A).
                    </div>
                    {(showAllHy || true) && (
                      <div className="text-[11px] text-amber-900 font-armenian mb-1.5">
                        Էպանադիպլոսիս՝ տողը նույն բառով սկսելն ու ավարտելը:
                      </div>
                    )}
                    <div className="text-xs italic text-stone-800 font-serif-title bg-white p-1.5 rounded-lg border border-stone-100">
                      «Verde que te quiero verde.»
                    </div>
                  </div>
                </div>
              </div>

              {/* Nivel Morfosintáctico */}
              <div className="space-y-3">
                <h3 className="font-bold text-red-950 text-base border-b border-red-100 pb-1">
                  B) Nivel Morfosintáctico (orden y repetición de palabras y nexos)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                    <div className="font-bold text-red-900">5. Hipérbaton</div>
                    <div className="text-xs text-stone-600 mb-1">
                      Alteración del orden habitual de las palabras en la oración.
                    </div>
                    {(showAllHy || true) && (
                      <div className="text-[11px] text-amber-900 font-armenian mb-1.5">
                        Հիպերբատոն՝ բառերի շարադասության խախտում:
                      </div>
                    )}
                    <div className="text-xs italic text-stone-800 font-serif-title bg-white p-1.5 rounded-lg border border-stone-100">
                      «Volverán las oscuras golondrinas en tu balcón sus nidos a colgar.»
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                    <div className="font-bold text-red-900">6. Anáfora</div>
                    <div className="text-xs text-stone-600 mb-1">
                      Repetición de una o más palabras al comienzo de versos o frases consecutivas.
                    </div>
                    {(showAllHy || true) && (
                      <div className="text-[11px] text-amber-900 font-armenian mb-1.5">
                        Անաֆորա՝ տողասկզբի բառերի կրկնություն:
                      </div>
                    )}
                    <div className="text-xs italic text-stone-800 font-serif-title bg-white p-1.5 rounded-lg border border-stone-100">
                      «Temprano levantó la muerte... / temprano madrugó la madrugada...»
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                    <div className="font-bold text-red-900">7. Asíndeton</div>
                    <div className="text-xs text-stone-600 mb-1">
                      Supresión de conjunciones para dar rapidez o ligereza al ritmo.
                    </div>
                    {(showAllHy || true) && (
                      <div className="text-[11px] text-amber-900 font-armenian mb-1.5">
                        Ասինդետոն (անշաղկապություն)՝ շաղկապների բացթողում:
                      </div>
                    )}
                    <div className="text-xs italic text-stone-800 font-serif-title bg-white p-1.5 rounded-lg border border-stone-100">
                      «Llegué, vi, vencí.»
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                    <div className="font-bold text-red-900">8. Polisíndeton</div>
                    <div className="text-xs text-stone-600 mb-1">
                      Repetición voluntaria de conjunciones («y», «ni») para dar lentitud y solemnidad.
                    </div>
                    {(showAllHy || true) && (
                      <div className="text-[11px] text-amber-900 font-armenian mb-1.5">
                        Պոլիսինդետոն (բազմաշաղկապություն)՝ շաղկապների համառ կրկնություն:
                      </div>
                    )}
                    <div className="text-xs italic text-stone-800 font-serif-title bg-white p-1.5 rounded-lg border border-stone-100">
                      «Y ríe, y canta, y sueña, y salta, y juega...»
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                    <div className="font-bold text-red-900">9. Enumeración</div>
                    <div className="text-xs text-stone-600 mb-1">
                      Acumulación sucesiva de términos que pertenecen a una misma categoría u objeto.
                    </div>
                    {(showAllHy || true) && (
                      <div className="text-[11px] text-amber-900 font-armenian mb-1.5">
                        Թվարկում՝ համասեռ անդամների շարք:
                      </div>
                    )}
                    <div className="text-xs italic text-stone-800 font-serif-title bg-white p-1.5 rounded-lg border border-stone-100">
                      «Cuadernos, lápices, gomas, reglas y compás.»
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                    <div className="font-bold text-red-900">10. Pleonasmo</div>
                    <div className="text-xs text-stone-600 mb-1">
                      Uso de palabras innecesarias para intensificar el sentido expresivo.
                    </div>
                    {(showAllHy || true) && (
                      <div className="text-[11px] text-amber-900 font-armenian mb-1.5">
                        Պլեոնազմ՝ իմաստն ընդգծող ավելորդաբանություն:
                      </div>
                    )}
                    <div className="text-xs italic text-stone-800 font-serif-title bg-white p-1.5 rounded-lg border border-stone-100">
                      «Lo vi con mis propios ojos», «temprano madrugó la madrugada».
                    </div>
                  </div>
                </div>
              </div>

              {/* Nivel Semántico: METÁFORA */}
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-300 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-red-950 text-base">
                    C) Nivel Semántico: La Metáfora y sus 3 Modelos Escolares
                  </span>
                </div>
                <p className="text-xs text-stone-700">
                  Identificación de un término real (A) con uno imaginario (B) por semejanza estética.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                  <div className="bg-white p-3 rounded-xl border border-amber-200">
                    <span className="font-bold text-amber-900 block mb-1">Modelo 1: A es B</span>
                    <span className="text-stone-600 block mb-1">Ambos términos aparecen unidos con verbo copulativo.</span>
                    <span className="font-serif-title italic font-semibold text-red-950">«Tus dientes son perlas»</span>
                  </div>

                  <div className="bg-white p-3 rounded-xl border border-amber-200">
                    <span className="font-bold text-amber-900 block mb-1">Modelo 2: B en vez de A (pura)</span>
                    <span className="text-stone-600 block mb-1">El término real no se nombra, solo el imaginario.</span>
                    <span className="font-serif-title italic font-semibold text-red-950">«Las perlas de su boca brillaban»</span>
                  </div>

                  <div className="bg-white p-3 rounded-xl border border-amber-200">
                    <span className="font-bold text-amber-900 block mb-1">Modelo 3: B de A (preposicional)</span>
                    <span className="text-stone-600 block mb-1">Imaginario unido al real mediante «de».</span>
                    <span className="font-serif-title italic font-semibold text-red-950">«El tambor de su pecho», «los hilos de oro de sus cabellos»</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* SECTION 2: FUNCIONES DEL LENGUAJE */}
        <div className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden">
          <div
            onClick={() => toggleSection('funciones')}
            className="p-4 sm:p-5 bg-stone-50 hover:bg-stone-100 flex items-center justify-between cursor-pointer border-b border-stone-200"
          >
            <h2 className="font-serif-title font-bold text-stone-900 text-base sm:text-lg">
              2. Funciones del Lenguaje y Elementos de la Comunicación
            </h2>
            {openSections.funciones ? <ChevronUp className="w-5 h-5 text-stone-500" /> : <ChevronDown className="w-5 h-5 text-stone-500" />}
          </div>

          {openSections.funciones && (
            <div className="p-5 text-xs sm:text-sm text-stone-700 space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-stone-100 text-stone-900 text-xs font-bold border-b border-stone-300">
                      <th className="p-2.5">Función</th>
                      <th className="p-2.5">Elemento clave</th>
                      <th className="p-2.5">Intención comunicativa</th>
                      <th className="p-2.5">Ejemplo escolar</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-xs">
                    <tr>
                      <td className="p-2.5 font-bold text-red-900">Referencial</td>
                      <td className="p-2.5">Contexto / Realidad</td>
                      <td className="p-2.5">Informar objetivamente</td>
                      <td className="p-2.5 italic">«Madrid es la capital de España.»</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold text-red-900">Expresiva / Emotiva</td>
                      <td className="p-2.5">Emisor</td>
                      <td className="p-2.5">Expresar emociones y sentimientos</td>
                      <td className="p-2.5 italic">«¡Qué alegría tan inmensa!»</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold text-red-900">Apelativa / Conativa</td>
                      <td className="p-2.5">Receptor</td>
                      <td className="p-2.5">Influir, ordenar, rogar</td>
                      <td className="p-2.5 italic">«Guarden silencio y abran el libro.»</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold text-red-900">Fática / Contacto</td>
                      <td className="p-2.5">Canal</td>
                      <td className="p-2.5">Abrir, mantener o cerrar el canal</td>
                      <td className="p-2.5 italic">«¿Sí?, ¿me oyes?», «Hasta luego.»</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold text-red-900">Metalingüística</td>
                      <td className="p-2.5">Código (lengua)</td>
                      <td className="p-2.5">Hablar de la propia gramática</td>
                      <td className="p-2.5 italic">«Los verbos de la 1.ª conjugación terminan en -ar.»</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold text-red-900">Poética / Estética</td>
                      <td className="p-2.5">Mensaje</td>
                      <td className="p-2.5">Crear belleza y ritmo</td>
                      <td className="p-2.5 italic">«Caminante, no hay camino, se hace camino al andar.»</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* SECTION 3: LITERATURA POPULAR VS CULTA */}
        <div className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden">
          <div
            onClick={() => toggleSection('literatura')}
            className="p-4 sm:p-5 bg-stone-50 hover:bg-stone-100 flex items-center justify-between cursor-pointer border-b border-stone-200"
          >
            <h2 className="font-serif-title font-bold text-stone-900 text-base sm:text-lg">
              3. Literatura Popular frente a Literatura Culta
            </h2>
            {openSections.literatura ? <ChevronUp className="w-5 h-5 text-stone-500" /> : <ChevronDown className="w-5 h-5 text-stone-500" />}
          </div>

          {openSections.literatura && (
            <div className="p-5 text-xs sm:text-sm text-stone-700 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-2">
                  <h3 className="font-bold text-amber-950 text-base font-serif-title">
                    Literatura Popular
                  </h3>
                  <p className="text-xs text-amber-900 font-armenian">
                    Ժողովրդական գրականություն
                  </p>
                  <ul className="list-disc pl-4 space-y-1 text-xs text-stone-800 leading-relaxed">
                    <li><strong className="text-amber-950">Autor:</strong> Anónimo (creación colectiva del pueblo).</li>
                    <li><strong className="text-amber-950">Transmisión:</strong> Oral de viva voz, de generación en generación.</li>
                    <li><strong className="text-amber-950">Variantes:</strong> Sufre modificaciones constantes según cada cantor o región.</li>
                    <li><strong className="text-amber-950">Lenguaje:</strong> Sencillo, con repeticiones, fórmulas fijas y estribillos rítmicos.</li>
                    <li><strong className="text-amber-950">Ejemplos:</strong> Romances tradicionales, leyendas, cuentos populares, nanas, adivinanzas, refranes.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-2">
                  <h3 className="font-bold text-blue-950 text-base font-serif-title">
                    Literatura Culta
                  </h3>
                  <p className="text-xs text-blue-900 font-armenian">
                    Դասական / գրական գրականություն
                  </p>
                  <ul className="list-disc pl-4 space-y-1 text-xs text-stone-800 leading-relaxed">
                    <li><strong className="text-blue-950">Autor:</strong> Conocido e individual (firma su obra para la posteridad).</li>
                    <li><strong className="text-blue-950">Transmisión:</strong> Escrita y fijada en libros o manuscritos.</li>
                    <li><strong className="text-blue-950">Texto:</strong> Fijo e inmutable, no sufre alteraciones orales.</li>
                    <li><strong className="text-blue-950">Lenguaje:</strong> Elaborado, con rica complejidad sintáctica y búsqueda de originalidad.</li>
                    <li><strong className="text-blue-950">Ejemplos:</strong> Don Quijote (Cervantes), Rimas (Bécquer), Romancero gitano (Lorca).</li>
                  </ul>
                </div>
              </div>

              {/* Los 4 Géneros */}
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                <h4 className="font-bold text-stone-900 text-sm">
                  Distinción entre Romance, Leyenda, Mito y Cuento:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="bg-white p-2.5 rounded-xl border border-stone-200">
                    <strong className="text-red-900">El Romance:</strong> Poema narrativo en versos <strong>octosílabos (8)</strong> con <strong>rima asonante en versos pares</strong> y libres los impares (- a - a).
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-stone-200">
                    <strong className="text-red-900">La Leyenda:</strong> Relato tradicional anclado en un <strong>lugar y tiempo histórico real</strong>, enriquecido con elementos fantásticos.
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-stone-200">
                    <strong className="text-red-900">El Mito:</strong> Narración sagrada de <strong>dioses y seres sobrenaturales</strong> que explica el origen del cosmos y la naturaleza.
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-stone-200">
                    <strong className="text-red-900">El Cuento:</strong> Narración breve de ficción en prosa con argumento concentrado (planteamiento, nudo, desenlace).
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
