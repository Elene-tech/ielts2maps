(function () {
  var CHK = ['Opener: Several further changes occurred… / Further changes took place…', 'Другорядні зміни з якорем, різні дієслова (не повтор з Body 1)', 'Обов’язкова фраза «без змін» (remained unchanged · was left untouched)', 'Contrast-зв’язка: By contrast · Meanwhile · In contrast', 'Past simple, без was became', 'Тільки факти з карт, без причин і думок'];
  window.LESSON = {
    id: 'mp-07-body-2',
    module: 'Maps',
    title: 'Practice · Main Body 2',
    subtitle: 'Maps · другий Body paragraph: другорядні зміни й тиха категорія «без змін».',
    vocab: ['templates', 'changes', 'anchors'],

    intro: [
      { type: 'rule', title: 'Body 2: решта змін і «без змін»', html:
        '<p>Body 2 закриває картину: <b>другорядні зміни</b> одним блоком і <b>обов’язкова фраза «без змін»</b>.</p>' +
        '<ol style="margin-left:20px"><li><b>Opener:</b> <i>Several further changes occurred elsewhere.</i> / <i>Further changes took place to the south.</i></li>' +
        '<li><b>Другорядні зміни</b> із якорями й новими дієсловами (не повторюй дієслова з Body 1).</li>' +
        '<li><b>Тиха категорія:</b> <i>By contrast, the church remained completely unchanged throughout the period.</i></li></ol>' +
        '<p>Фраза «без змін» — це не ще один «was built»: вона показує, що ти порівняв(ла) ВСЕ.</p>' },
      { type: 'compare', tag: 'Типові помилки', tagc: 'orange', rows: [
        ['There is a cafe. There is a car park. There is a path.', 'Список «There is…»: Present і без якорів.', 'To the east of the path, a cafe was constructed, while the car park in the south-west remained unchanged.'],
        ['The park was built bigger and the cafe was became the new feature.', 'was became і калька «built bigger».', 'The park was extended and a cafe was constructed.'],
        ['Nothing else was changed in the park.', 'Занадто загально, і об’єкти не названі.', 'The trees in the north-east and the car park in the south-west remained completely unchanged.']
      ] }
    ],

    rounds: [
    /* ---------- Раунд 1 · Meadow Park ---------- */
    { label: 'Раунд 1', sub: 'з планом і фразами', graph: 'mp',
      lead: 'Другорядне в парку: доріжка, кафе, дерева й стоянка без змін. Усі підказки відкриті.',
      words: [['Several further changes occurred','Відбулося ще кілька змін'],['beside it','поруч з нею'],['remained completely unchanged','лишились повністю без змін'],['by contrast','натомість']],
      blocks: [
        { type: 'logic', tag: 'План абзацу', tagc: 'blue', title: 'Парк: крок за кроком', steps: [
            { title: 'Opener + доріжка', ua: 'Що сталося з доріжкою між майданчиком і південним краєм? Нове дієслово, не «replaced».', frame: 'Several further changes occurred. A [new path] was [V3] …' },
            { title: 'Кафе', ua: 'Де саме кафе відносно доріжки? Якір + було → стало (нова споруда).', frame: '… and a cafe was constructed [anchor].' },
            { title: 'Без змін', ua: 'Два об’єкти без змін. Назви їх зонами.', frame: 'By contrast, the [trees] in the [north-east] and the [car park] in the [south-west] remained completely unchanged.' }] },
        { type: 'write', tag: 'Пишемо', tagc: 'green', title: 'Напиши Body 2 про парк',
          task: '2–3 речення. Доріжка, кафе, тиха категорія.',
          hint: 'Доріжка: footpath → paved path. Кафе: на схід від доріжки, біля південного краю. Без змін: дерева (північний схід), стоянка (південний захід).',
          rows: 5, min: 18,
          models: [
            ['Модель A', '<mark>Several further changes occurred</mark> elsewhere. A paved path <mark>replaced the earlier footpath</mark>, running south from the playground to the edge of the park, and a cafe <mark>was constructed beside it</mark>. <mark>By contrast</mark>, the trees in the north-east and the car park in the south-west corner <mark>remained completely unchanged</mark>.'],
            ['Модель B', 'The footpath <mark>was upgraded into</mark> a paved path, and <mark>to the east of it</mark> a cafe <mark>was added</mark> near the southern edge of the park. <mark>Meanwhile</mark>, the north-eastern trees and the south-western car park <mark>were left untouched</mark>.']],
          after: 'Зверни увагу: фраза «без змін» названа через зони (the north-east, the south-west corner), а дієслова змін — нові (replaced, upgraded, constructed, added).',
          check: CHK }
      ] },

    /* ---------- Раунд 2 · Port Elizabeth ---------- */
    { label: 'Раунд 2', sub: 'тільки кроки', graph: 'pe',
      lead: 'Другорядне: дорога → набережна й два незмінні орієнтири. Фраз менше.',
      words: [['gave way to','поступилась місцем'],['lined with','обсаджена'],['left untouched','залишений без змін'],['Consequently','Отже']],
      blocks: [
        { type: 'logic', tag: 'План абзацу', tagc: 'blue', title: 'Село: крок за кроком', steps: [
            { title: 'Маяк', ua: 'Тиха категорія: де маяк, і що з ним сталося?' },
            { title: 'Дорога → набережна', ua: 'Де вона була й що стало? Нове дієслово + якір.' },
            { title: 'Підсумок', ua: 'Фраза про гавань + «Consequently». Не вигадуй причин.' }] },
        { type: 'write', tag: 'Пишемо', tagc: 'green', title: 'Напиши Body 2 про дорогу й незмінні орієнтири',
          task: '3 речення. Маяк, дорога → набережна, гавань.',
          hint: 'Lighthouse: at the northern end of the harbour. Coast road along the southern shore → promenade lined with palm trees and benches.',
          rows: 6, min: 20,
          models: [
            ['Модель A', '<mark>In contrast</mark>, the lighthouse at the northern end of the harbour <mark>was left untouched</mark>. Along the southern shore, the narrow coast road <mark>gave way to</mark> a wide promenade lined with palm trees and benches. <mark>Consequently</mark>, although the harbour itself remained unchanged, the surrounding area served a very different purpose by 2020.'],
            ['Модель B', '<mark>Two landmarks remained exactly as they had been</mark>: the harbour and the lighthouse above it. <mark>Elsewhere</mark>, the coast road along the southern shore <mark>was redeveloped as</mark> a promenade with palm trees and benches.']],
          after: 'Зверни увагу: тиха категорія (was left untouched · remained exactly as they had been) стоїть у кожній моделі. Past Perfect «had been» — один із небагатьох безпечних випадків: стан ДО 2020.',
          check: CHK }
      ] },

    /* ---------- Раунд 3 · Elmsworth ---------- */
    { label: 'Раунд 3', sub: 'майже самостійно', graph: 'el',
      lead: 'Південна половина центру й церква без змін. Підказок мало.',
      words: [['was redeveloped into','перебудували на'],['multi-storey car park','багатоповерхова стоянка'],['underwent no alteration','не зазнала змін']],
      blocks: [
        { type: 'logic', tag: 'План абзацу', tagc: 'blue', title: 'Південь і північний захід (за потреби)', collapsed: true, steps: [
            { title: 'Крамниці й площа', ua: 'Shops → retail street. Market square → public square: два «було → стало».' },
            { title: 'Південно-східний кут', ua: 'Що збудували там, де стояли ринкові ятки?' },
            { title: 'Церква', ua: 'Тиха категорія в північно-західному куті.' }] },
        { type: 'write', tag: 'Пишемо', tagc: 'green', title: 'Напиши Body 2 про південь центру й церкву',
          task: '3 речення. Крамниці, площа, стоянка, церква.',
          rows: 6, min: 20,
          models: [
            ['Модель A', '<mark>Further changes took place to the south.</mark> The row of shops <mark>was extended into</mark> a larger retail street, and the market square <mark>was redeveloped into</mark> a public square with a fountain. In the south-east corner, <mark>where market stalls once stood</mark>, a multi-storey car park, partly below ground level, <mark>was constructed</mark>. <mark>Meanwhile</mark>, the church in the north-west corner <mark>underwent no alteration</mark>, standing exactly where it had stood in 1960.'],
            ['Модель B', 'In the southern half, the shops <mark>expanded into</mark> a retail street and the market square <mark>gave way to</mark> a landscaped public square, <mark>while</mark> a multi-storey car park <mark>appeared</mark> in the south-east. <mark>The church alone</mark> in the north-west <mark>remained unchanged</mark>.']],
          after: 'Зверни увагу: дієслова «без змін» і нові дієслова змін (extended, redeveloped, constructed; expanded, gave way, appeared). Тиха категорія зі словом «alone» виділяє незмінний об’єкт.',
          check: CHK }
      ] }
    ],

    outro: [
      { type: 'rule', title: '✅ Що ти вмієш після цієї практики', html:
        '<ul><li>Починати Body 2 з <b>opener</b>: Further changes took place …</li>' +
        '<li>Згадувати <b>другорядні зміни</b> новими дієсловами</li>' +
        '<li>Завжди закривати текст <b>тихою категорією</b>: remained unchanged · was left untouched</li></ul>' +
        '<p class="small" style="margin-top:8px">Далі: Final Task · повна відповідь самостійно.</p>' }
    ]
  };
})();
